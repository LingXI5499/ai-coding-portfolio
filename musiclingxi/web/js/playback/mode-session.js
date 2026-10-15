import {
  REPEAT_ALL,
  REPEAT_ORDER,
  createPlaybackModeState,
  createShuffleCycle,
  describeRepeatMode,
  linearNextId,
  linearPreviousId,
  markRoundPlayed,
  nextRepeatMode,
  normalizeRepeatMode,
  commit as commitDecision,
  resetPlaybackOrder,
  resolveAdvance,
  resolveBack,
  startShuffleRound
} from '../playback-mode.js';

/**
 * Mutable ordering cursor shared by both adapters. It wraps the pure rules in
 * `playback-mode.js` and keeps the single source of truth for "what plays next",
 * so the browser adapter and the native adapter cannot drift apart.
 */
export class PlaybackModeSession {
  constructor({ repeatMode = REPEAT_ALL, shuffle = false } = {}) {
    this.state = createPlaybackModeState({ repeatMode, shuffle });
    this.sessionEnded = false;
  }

  get repeatMode() { return this.state.repeatMode; }
  get shuffle() { return this.state.shuffle; }
  get order() { return [...this.state.order]; }
  get currentTrackId() { return this.state.currentTrackId; }
  get ended() { return this.sessionEnded; }

  setQueue(tracks, currentTrackId = this.state.currentTrackId) {
    const order = tracks.map((track) => track.id);
    this.state.order = order;
    this.sessionEnded = false;
    if (!currentTrackId || !order.includes(currentTrackId)) {
      this.state.currentTrackId = order[0] ?? null;
      startShuffleRound(this.state);
      return;
    }
    if (currentTrackId !== this.state.currentTrackId) {
      this.state.currentTrackId = currentTrackId;
      startShuffleRound(this.state);
      return;
    }
    // Same track and same round: only drop cue indexes that no longer exist.
    this.state.remaining = this.state.remaining.filter((index) => index < order.length);
    this.state.roundPlayed = this.state.roundPlayed.filter((index) => index < order.length);
  }

  setRepeatMode(mode) {
    const normalized = normalizeRepeatMode(mode);
    if (normalized === this.state.repeatMode) return normalized;
    this.state.repeatMode = normalized;
    resetPlaybackOrder(this.state);
    return normalized;
  }

  cycleRepeatMode() { return this.setRepeatMode(nextRepeatMode(this.state.repeatMode)); }

  setShuffle(enabled) {
    const next = Boolean(enabled);
    if (next === this.state.shuffle) return next;
    this.state.shuffle = next;
    startShuffleRound(this.state);
    this.#ensureForwardOrder();
    return next;
  }

  toggleShuffle() { return this.setShuffle(!this.state.shuffle); }

  /** A user picked a specific track: the shuffle round and history restart there. */
  adoptSelection(trackId) {
    startShuffleRound(this.state);
    this.state.currentTrackId = trackId;
    // A fresh selection starts its own path: "previous" must not walk into the old one.
    this.state.path = [this.state.order.indexOf(trackId)].filter((index) => index >= 0);
    this.state.pathIndex = this.state.path.length ? 0 : -1;
    this.sessionEnded = false;
    this.#ensureForwardOrder();
    return this.#mode();
  }

  /**
   * Guarantees that the persisted forward list exists for the current anchor.
   * `peekNext` and `resolveAdvance` must read the *same* list, otherwise a look-ahead
   * (used by the native adapter to spot a stale advance) would disagree with what
   * actually plays and could hijack an unrelated track.
   */
  #ensureForwardOrder() {
    if (!this.state.shuffle) return this.state.remaining;
    const current = this.state.order.indexOf(this.state.currentTrackId);
    if (current < 0) return [];
    if (this.state.shuffledFor === current && this.state.remaining.length) return this.state.remaining;
    markRoundPlayed(this.state, current);
    this.state.remaining = createShuffleCycle(this.state.order.length, current, Math.random, this.state.roundPlayed);
    this.state.shuffledFor = current;
    return this.state.remaining;
  }

  /** The next track id in the current cycle, without moving the cursor. */
  peekNextId() {
    if (!this.state.shuffle) return linearNextId(this.state);
    const forward = this.#ensureForwardOrder();
    return forward.length ? this.state.order[forward[0]] : null;
  }

  /** The previous track id in the current cycle or history, without moving the cursor. */
  peekPreviousId() {
    if (!this.state.shuffle) return linearPreviousId(this.state);
    return this.state.previousIndex === null ? null : this.state.order[this.state.previousIndex] ?? null;
  }

  /** The audible track changed outside the app's own selection call. */
  observeTrack(trackId) {
    if (!trackId || trackId === this.state.currentTrackId) return false;
    commitDecision(this.state, { action: 'play', trackId });
    this.sessionEnded = false;
    return true;
  }

  /** 单曲循环 must replay the track that just finished, not the next one. */
  resolveCompletion(trackId) {
    if (trackId && this.state.order.includes(trackId) && trackId !== this.state.currentTrackId) {
      commitDecision(this.state, { action: 'play', trackId });
    }
    return resolveAdvance(this.state, 'auto');
  }

  resolveNext() { return resolveAdvance(this.state, 'next'); }
  resolvePrevious() { return resolveBack(this.state); }

  /** Moves the cursor according to a decision produced above. */
  commit(decision) {
    if (!decision || decision.action === 'end') return decision;
    if (decision.reshuffle) {
      this.state.remaining = [...decision.reshuffle];
      this.state.shuffledFor = this.state.order.indexOf(this.state.currentTrackId);
      this.state.nextIndex = null;
      this.state.previousIndex = null;
    }
    // The cursor always moves through the shared commit, which also maintains history.
    commitDecision(this.state, decision);
    this.sessionEnded = false;
    if (this.state.shuffle) {
      // Keep the order anchored where playback actually is, so the look-ahead stays
      // consistent with the committed order.
      const current = this.state.order.indexOf(this.state.currentTrackId);
      if (this.state.shuffledFor !== null && this.state.shuffledFor !== current) this.state.shuffledFor = null;
      this.#ensureForwardOrder();
    }
    return decision;
  }

  /** Ids in the order they will play when shuffle is enabled, for the queue view. */
  previewOrder() {
    if (!this.state.shuffle) return this.order;
    const currentIndex = this.state.order.indexOf(this.state.currentTrackId);
    if (currentIndex < 0) return this.order;
    const cycle = this.#ensureForwardOrder();
    return [this.state.order[currentIndex], ...cycle.map((index) => this.state.order[index])];
  }

  peekNext() { return this.peekNextId(); }
  peekPrevious() { return this.peekPreviousId(); }

  describe() { return describeRepeatMode(this.state.repeatMode); }

  static get modes() { return [...REPEAT_ORDER]; }

  #mode() {
    return { repeatMode: this.state.repeatMode, shuffle: this.state.shuffle };
  }
}
