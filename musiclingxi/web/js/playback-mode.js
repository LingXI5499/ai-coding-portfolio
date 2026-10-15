// Playback ordering for the three user-facing modes:
//   列表循环 (repeat 'all') · 单曲循环 (repeat 'one') · 随机播放 (shuffle, plays a
//   full round of the list without repeating until every track has been heard)
// Everything here is a pure function over plain data so the ordering rules can be unit
// tested without a DOM or a native player. The adapters own the mutable session state
// and call into this module to decide what should play next.

export const REPEAT_ALL = 'all';
export const REPEAT_ONE = 'one';
export const REPEAT_OFF = 'off';

/** Click order of the mode button, mirroring the iOS Music playback-mode control. */
export const REPEAT_ORDER = Object.freeze([REPEAT_ALL, REPEAT_ONE, REPEAT_OFF]);

export function normalizeRepeatMode(value) {
  return REPEAT_ORDER.includes(value) ? value : REPEAT_ALL;
}

/** 列表循环 → 单曲循环 → 顺序播放 → 列表循环 */
export function nextRepeatMode(value) {
  const index = REPEAT_ORDER.indexOf(normalizeRepeatMode(value));
  return REPEAT_ORDER[(index + 1) % REPEAT_ORDER.length];
}

export function describeRepeatMode(value) {
  switch (normalizeRepeatMode(value)) {
    case REPEAT_ONE: return '单曲循环';
    case REPEAT_OFF: return '顺序播放';
    default: return '列表循环';
  }
}

/** Fisher-Yates. `random` is injectable so tests get a deterministic order. */
export function createShuffledIndexes(count, random = Math.random) {
  const indexes = Array.from({ length: count }, (_, index) => index);
  for (let cursor = indexes.length - 1; cursor > 0; cursor -= 1) {
    const swap = Math.floor(random() * (cursor + 1));
    [indexes[cursor], indexes[swap]] = [indexes[swap], indexes[cursor]];
  }
  return indexes;
}

/**
 * The rest of a shuffle round: every track that has not been heard yet this round,
 * shuffled, with the ones after `currentIndex` first so the round keeps walking
 * forward. `roundPlayed` must be passed so a round rebuilt mid-way (after a user pick
 * or a skipped track) never offers a track that already played.
 */
export function createShuffleCycle(count, currentIndex, random = Math.random, roundPlayed = []) {
  if (count <= 1) return [];
  const heard = new Set(roundPlayed);
  const candidates = createShuffledIndexes(count, random)
    .filter((index) => index !== currentIndex && !heard.has(index));
  return candidates.filter((index) => index > currentIndex).concat(candidates.filter((index) => index < currentIndex));
}

export function createPlaybackModeState({ repeatMode = REPEAT_ALL, shuffle = false, order = [] } = {}) {
  return {
    repeatMode: normalizeRepeatMode(repeatMode),
    shuffle: Boolean(shuffle),
    order: [...order],
    currentTrackId: null,
    nextIndex: null,
    previousIndex: null,
    /**
     * Tracks that actually played, in order, and a cursor into them. Forward moves append
     * (dropping anything after the cursor first); a background step moves the cursor back.
     * This is what makes "previous" retrace real playback and "next" return along it.
     */
    path: [],
    pathIndex: -1,
    /** Tracks still to be offered in the current shuffle round, in play order. */
    remaining: [],
    /** Index the current `remaining` list was built for. */
    shuffledFor: null,
    /** Indexes already heard in the current shuffle round. */
    roundPlayed: []
  };
}

/** Drops cached forward/backward decisions, e.g. after a mode or queue change. */
export function resetPlaybackOrder(state) {
  state.nextIndex = null;
  state.previousIndex = null;
  state.path = [];
  state.pathIndex = -1;
  state.remaining = [];
  state.shuffledFor = null;
  return state;
}

/** Starts a brand new random round: every track becomes eligible again. */
export function startShuffleRound(state) {
  resetPlaybackOrder(state);
  state.roundPlayed = [];
  return state;
}

/** True when every track has been heard in the current shuffle round. */
export function isShuffleRoundComplete(state) {
  return state.roundPlayed.length >= state.order.length;
}

/** Records that a track has been heard in the current round. */
export function markRoundPlayed(state, index) {
  if (index >= 0 && !state.roundPlayed.includes(index)) state.roundPlayed.push(index);
  return state;
}

/**
 * Peeks the next track id.
 *
 * `path` is the ordered list of tracks that actually played and `pathIndex` points at the
 * current position in it. Forward first follows the remainder of that path (so stepping
 * back and pressing next returns to where you were), otherwise it follows the manifest
 * order, wrapping only in 列表循环.
 */
export function linearNextId(state) {
  const current = indexOfId(state, state.currentTrackId);
  if (current < 0) return state.order[0] ?? null;
  if (state.pathIndex >= 0 && state.pathIndex + 1 < state.path.length) {
    const ahead = state.path[state.pathIndex + 1];
    if (ahead !== current) return state.order[ahead] ?? null;
  }
  if (current + 1 < state.order.length) return state.order[current + 1];
  return state.repeatMode === REPEAT_ALL ? state.order[0] ?? null : null;
}

/**
 * Peeks the previous track id. Stepping back walks the played path, so repeated
 * "previous" presses move backwards through the songs that really played; once the path
 * runs out it falls back to the manifest neighbour.
 */
export function linearPreviousId(state) {
  const current = indexOfId(state, state.currentTrackId);
  if (current < 0) return null;
  if (state.pathIndex > 0) {
    const behind = state.path[state.pathIndex - 1];
    if (behind !== current) return state.order[behind] ?? null;
  }
  return current <= 0 ? null : state.order[current - 1];
}

/**
 * Records that playback moved from the current track to `trackId`.
 *
 * History is forward-only: a forward step is pushed, and moving back reads that stack
 * without mutating it. That is what makes repeated "previous" presses keep walking
 * backwards through the songs that really played instead of bouncing between two of them.
 */
/**
 * Moves the cursor to the track a decision selected and records the step.
 *
 * Only forward moves are recorded, and a back step consumes the entry it walked over, so
 * `previous` walks back through real playback history while `next` keeps following the
 * manifest order (or the shuffle round, which is tracked separately).
 */
/**
 * Moves the cursor to the track a decision selected and maintains the played path.
 *
 * A move onto the track already recorded before or after the cursor just moves the cursor
 * (that is how "previous" retraces and "next" returns). Any other destination truncates
 * the abandoned "redo" tail and appends.
 */
export function commit(state, decision) {
  if (!decision || decision.action === 'end') return state;
  const current = indexOfId(state, state.currentTrackId);
  const target = indexOfId(state, decision.trackId);
  if (target >= 0 && target !== current) {
    if (state.pathIndex < 0 || state.path[state.pathIndex] !== current) {
      // Current track is not on the path yet (first move, or a jump): seed from here.
      state.path = [current];
      state.pathIndex = 0;
    }
    if (state.path[state.pathIndex - 1] === target) {
      state.pathIndex -= 1; // stepped back onto the recorded previous track
    } else if (state.path[state.pathIndex + 1] === target) {
      state.pathIndex += 1; // returned forward onto the recorded next track
    } else {
      state.path = state.path.slice(0, state.pathIndex + 1);
      state.path.push(target);
      state.pathIndex = state.path.length - 1;
    }
    if (target > current) markRoundPlayed(state, target);
    if (state.nextIndex === target) state.nextIndex = null;
  }
  state.currentTrackId = decision.trackId;
  const position = state.remaining.indexOf(target);
  if (position >= 0) state.remaining.splice(0, position + 1);
  return state;
}

function indexOfId(state, trackId) {
  return trackId === null || trackId === undefined ? -1 : state.order.indexOf(trackId);
}

function trackIdAt(state, index) {
  return state.order[index] ?? null;
}

/**
 * Rebuilds the forward list for the current anchor, subtracting what this round has
 * already offered. Called lazily so `next` can look ahead before it plays, and always
 * persisted so the look-ahead and the committed decision read the same list.
 */
function ensureForwardOrder(state, index, random) {
  if (state.shuffledFor === index && state.remaining.length) return state.remaining;
  state.remaining = createShuffleCycle(state.order.length, index, random, state.roundPlayed);
  state.shuffledFor = index;
  return state.remaining;
}

/**
 * Decides which track should play after the current one.
 * `reason` separates a natural end from a user pressing next, which only matters for
 * the shuffle round bookkeeping.
 */
export function resolveAdvance(state, reason = 'next', { random = Math.random } = {}) {
  const current = indexOfId(state, state.currentTrackId);
  const count = state.order.length;
  if (current < 0 || !count) return { action: 'end' };

  // 单曲循环 locks onto the current track: the mode button is how the user leaves it,
  // matching the iOS Music behaviour where "next" also replays the current song.
  if (state.repeatMode === REPEAT_ONE) {
    return { action: 'restart', trackId: state.currentTrackId, index: current };
  }

  if (state.shuffle) {
    markRoundPlayed(state, current);
    if (state.nextIndex !== null) {
      return { action: 'play', trackId: trackIdAt(state, state.nextIndex), index: state.nextIndex, cached: true };
    }
    const forward = ensureForwardOrder(state, current, random);
    if (forward.length) {
      return { action: 'play', trackId: trackIdAt(state, forward[0]), index: forward[0] };
    }
    // Every track has been heard this round; 列表循环 starts a fresh round.
    if (state.repeatMode === REPEAT_ALL) {
      state.roundPlayed = [current];
      const cycle = createShuffleCycle(count, current, random, state.roundPlayed);
      if (cycle.length) {
        return { action: 'play', trackId: trackIdAt(state, cycle[0]), index: cycle[0], reshuffle: cycle };
      }
    }
    return { action: 'end' };
  }

  if (current + 1 < count) return { action: 'play', trackId: trackIdAt(state, current + 1), index: current + 1 };
  // 列表循环 wraps to the top of the list; 顺序播放 stops on the last track.
  if (state.repeatMode === REPEAT_ALL) return { action: 'play', trackId: trackIdAt(state, 0), index: 0, wrapped: true };
  return { action: 'end' };
}

export function resolveBack(state) {
  const current = indexOfId(state, state.currentTrackId);
  if (current < 0) return null;
  const previous = linearPreviousId(state);
  // The first track has no previous: restart it instead of leaving the page silent.
  if (previous === null) return { action: 'restart', trackId: state.currentTrackId, index: current };
  return { action: 'play', trackId: previous, index: indexOfId(state, previous) };
}
