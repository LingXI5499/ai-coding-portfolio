import { Playlist, RmxAudioStatusMessage } from 'capacitor-plugin-playlist';
import { REPEAT_ONE } from '../playback-mode.js';
import { PlaybackModeSession } from './mode-session.js';

const STATUS_BY_EVENT = {
  [RmxAudioStatusMessage.RMXSTATUS_LOADING]: 'loading',
  [RmxAudioStatusMessage.RMXSTATUS_PLAYING]: 'playing',
  [RmxAudioStatusMessage.RMXSTATUS_PAUSE]: 'paused'
};

// How close to the reported duration a position must be before the track counts as
// finished. A backgrounded WebView can miss the COMPLETED event entirely, so the
// listener falls back to this check before treating a track change as a natural end.
const COMPLETION_TOLERANCE_SECONDS = 0.5;

// The native Android player cannot resolve the WebView's local HTTPS origin
// after the app is backgrounded. Audio bundled by Capacitor lives in this APK
// asset directory, so give ExoPlayer the stable native asset URI directly.
function bundledAndroidAssetUrl(assetPath) {
  const normalizedPath = String(assetPath).replace(/^\/+/, '');
  return `file:///android_asset/public/${normalizedPath}`;
}

/**
 * Android adapter. The native media session stays the source of truth for playback
 * state, while this class owns playback ordering: 列表循环, 单曲循环 and 随机播放 are
 * driven from the status events the plugin emits (COMPLETED / TRACK_CHANGED /
 * SKIP_FORWARD / SKIP_BACK / PLAYLIST_COMPLETED).
 *
 * The native queue always keeps the manifest order. Native `loop` stays off so the
 * plugin never wraps on its own; every wrap and every repeat is decided here, which
 * keeps the audible track, the media notification and the lyrics in sync.
 */
export class NativePlaylistAdapter {
  constructor() {
    this.listeners = new Set();
    this.queue = [];
    this.mode = new PlaybackModeSession();
    this.snapshot = { trackId: null, status: 'idle', currentTime: 0, duration: 0, error: null };
    this.handle = null;
    this.durationHint = new Map();
    this.isApplyingDecision = false;
    this.repeatOne = null;
    this.handledCompletion = null;
  }

  subscribe(listener) { this.listeners.add(listener); return () => this.listeners.delete(listener); }
  getSnapshot() { return { ...this.snapshot }; }

  async initialize() {
    await Playlist.setOptions({
      verbose: false,
      // ColorOS rejects a media foreground notification without a valid
      // monochrome small icon. This maps to res/drawable/ic_notification.xml.
      options: { icon: 'ic_notification' }
    });
    this.handle = await Playlist.addListener('status', ({ status }) => this.#onStatus(status));
    await Playlist.initialize();
    // Keep native looping off: all wrapping is decided in `PlaybackModeSession`.
    await Playlist.setLoop({ loop: false });
  }

  async setQueue(tracks) {
    this.queue = [...tracks];
    this.durationHint = new Map(tracks.map((track) => [track.id, track.durationHint || 0]));
    this.mode.setQueue(tracks, this.snapshot.trackId);
    const items = tracks.map((track) => ({
      trackId: track.id,
      assetUrl: bundledAndroidAssetUrl(track.audioSrc),
      title: track.title,
      artist: track.artist || 'MusicLingXi',
      album: 'MusicLingXi',
      isStream: false
    }));
    await Playlist.setPlaylistItems({ items, options: { startPaused: true } });
  }

  async setRepeatMode(mode) {
    const applied = this.mode.setRepeatMode(mode);
    if (applied !== REPEAT_ONE) this.#clearRepeatOneHold();
    return applied;
  }
  async setShuffle(enabled) {
    this.#clearRepeatOneHold();
    return this.mode.setShuffle(enabled);
  }
  getPlaybackMode() { return { repeatMode: this.mode.repeatMode, shuffle: this.mode.shuffle }; }
  getQueueOrder() { return this.mode.previewOrder(); }

  async select(id, { autoplay = true, position = 0 } = {}) {
    const index = this.#indexOf(id);
    if (index < 0) throw new Error('未找到要播放的歌曲');
    this.#clearRepeatOneHold();
    this.mode.adoptSelection(id);

    // playlist-core's Android playTrackById only updates the queue cursor
    // when another song is already playing; it leaves the old audio stream
    // running. The index API always starts the selected item, which keeps
    // the audible track, metadata and lyrics in sync.
    if (autoplay) await Playlist.playTrackByIndex({ index, position });
    else await Playlist.selectTrackByIndex({ index, position });
  }

  async play() { await Playlist.play(); }
  async pause() { await Playlist.pause(); }
  async seek(position) { await Playlist.seekTo({ position }); }
  async setVolume(volume) { await Playlist.setPlaybackVolume({ volume }); }
  async refresh() { return this.getSnapshot(); }

  async next() {
    // Never hand the skip to the plugin: native would advance in manifest order and
    // fire SKIP_FORWARD, which the adapter then has to fight. Deciding locally keeps
    // 单曲循环 and 随机播放 exact, and notification skips stay covered by #onSkipForward.
    await this.#applyDecision(this.mode.commit(this.mode.resolveNext()));
  }

  async previous() {
    const decision = this.mode.commit(this.mode.resolvePrevious());
    if (!decision || decision.action === 'end') return;
    // 随机播放 deliberately has no native "back": its history lives in the session.
    await this.#applyDecision(decision);
  }

  async #applyDecision(decision) {
    if (!decision) return;
    if (decision.action === 'end') {
      this.#pauseAtEnd();
      return;
    }
    if (decision.action === 'restart') {
      // 单曲循环 replays the track that just finished. Native may still be resolving
      // the advance it started on completion, so remember what must stay audible.
      if (this.mode.repeatMode === REPEAT_ONE && decision.trackId === this.snapshot.trackId) {
        this.repeatOne = { trackId: decision.trackId, resolved: false };
      }
      const index = this.#indexOf(decision.trackId);
      if (index >= 0) await this.#directTo(index, 0);
      return;
    }
    const index = this.#indexOf(decision.trackId);
    if (index >= 0) await this.#directTo(index);
  }

  /**
   * A 单曲循环 restart can be followed by the advance native already started when the
   * track ended. The hold keeps pulling playback back to the repeated track until a
   * track change for that same track confirms the replay stuck.
   */
  #resolveRepeatOneHold(trackId) {
    if (!this.repeatOne) return false;
    if (this.repeatOne.resolved) { this.repeatOne = null; return false; }
    // The held track is audible again: keep the hold for one more change so the
    // leftover advance native started cannot be adopted, then release it.
    if (trackId === this.repeatOne.trackId) { this.repeatOne.resolved = true; return true; }
    const index = this.#indexOf(this.repeatOne.trackId);
    if (index >= 0) void this.#directTo(index, 0);
    return true;
  }

  #clearRepeatOneHold() { this.repeatOne = null; }

  /** The ordering rules reached the end of the queue: stop on the last track. */
  #pauseAtEnd() {
    this.mode.sessionEnded = true;
    this.#publish({ status: 'paused' });
  }

  /**
   * `onCompletion` emits COMPLETED and then PLAYLIST_COMPLETED for the same track,
   * and a repeat decision can legitimately re-enter. Only the first one is acted on.
   */
  #claimCompletion(trackId) {
    const now = Date.now();
    if (this.handledCompletion
      && this.handledCompletion.trackId === trackId
      && now - this.handledCompletion.at < 300) return false;
    this.handledCompletion = { trackId, at: now };
    return true;
  }

  async #directTo(index, position) {
    if (index < 0) return;
    this.isApplyingDecision = true;
    try {
      const options = position === undefined ? { index } : { index, position };
      await Playlist.playTrackByIndex(options);
    } finally {
      this.isApplyingDecision = false;
    }
  }

  #indexOf(trackId) { return this.queue.findIndex((track) => track.id === trackId); }

  /**
   * A failed decode of an empty placeholder file is expected on a clean clone; ask the
   * service for the friendly message instead of showing a raw player error.
   */
  async #refineError(trackId) {
    if (typeof this.classifyError !== 'function') return;
    const friendly = await this.classifyError(trackId).catch(() => null);
    if (!friendly || friendly === this.snapshot.error) return;
    this.#publish({ error: friendly });
  }

  #onStatus(status) {
    const value = status.value ?? {};
    const eventType = status.msgType;
    const patch = { trackId: status.trackId === 'NONE' || status.trackId === 'INVALID' ? this.snapshot.trackId : status.trackId };
    if (STATUS_BY_EVENT[eventType]) patch.status = STATUS_BY_EVENT[eventType];
    if (typeof value.currentPosition === 'number') patch.currentTime = value.currentPosition;
    if (typeof value.duration === 'number' && value.duration > 0) patch.duration = value.duration;
    if (eventType === RmxAudioStatusMessage.RMXSTATUS_TRACK_CHANGED && value.currentItem) {
      patch.trackId = value.currentItem.trackId;
      patch.currentTime = 0;
      patch.duration = 0;
    }
    if (eventType === RmxAudioStatusMessage.RMXSTATUS_ERROR) {
      patch.status = 'error';
      patch.error = value.message || '歌曲加载失败';
    }
    this.#publish(patch);
    if (eventType === RmxAudioStatusMessage.RMXSTATUS_ERROR) void this.#refineError(status.trackId);

    switch (eventType) {
      case RmxAudioStatusMessage.RMXSTATUS_TRACK_CHANGED:
        this.#onTrackChanged(value);
        break;
      case RmxAudioStatusMessage.RMXSTATUS_COMPLETED:
        this.#onCompleted(status.trackId);
        break;
      case RmxAudioStatusMessage.RMXSTATUS_PLAYLIST_COMPLETED:
        this.#onPlaylistCompleted();
        break;
      case RmxAudioStatusMessage.RMX_STATUS_SKIP_FORWARD:
        if (!this.isApplyingDecision) void this.#onSkipForward();
        break;
      case RmxAudioStatusMessage.RMX_STATUS_SKIP_BACK:
        if (!this.isApplyingDecision) void this.#onSkipBack();
        break;
      default:
        break;
    }
  }

  /**
   * A completion event can arrive for an already handled track: pressing next right
   * before a track ends produces COMPLETED → SKIP_FORWARD for the same track id.
   */
  #onCompleted(trackId) {
    if (!trackId || trackId === 'NONE' || trackId === 'INVALID') return;
    if (this.isApplyingDecision) return;
    if (trackId !== this.snapshot.trackId) return;
    if (!this.#claimCompletion(trackId)) return;
    void this.#applyDecision(this.mode.commit(this.mode.resolveCompletion(trackId)));
  }

  #onTrackChanged(value) {
    const trackId = value.currentItem?.trackId;
    if (!trackId || this.isApplyingDecision || trackId === this.snapshot.trackId) return;
    if (this.snapshot.status !== 'playing') this.mode.sessionEnded = false;

    // 单曲循环 is already handled by the COMPLETED event; the hold keeps any leftover
    // native advance from moving the cursor away from the repeated track.
    if (this.mode.repeatMode === REPEAT_ONE) {
      if (this.#resolveRepeatOneHold(trackId)) this.#adoptAudible(trackId);
      else this.#resyncMode(trackId);
      return;
    }

    if (!this.mode.shuffle || this.mode.peekNextId() === trackId) {
      this.#resyncMode(trackId);
      return;
    }

    // Native advanced in manifest order but 随机播放 wants another track. Hide the
    // audible track from app listeners, then correct it.
    this.#resyncMode(trackId);
    this.#adoptAudible(trackId);
    const decision = this.mode.resolveNext();
    if (decision.action === 'end') {
      this.#pauseAtEnd();
      return;
    }
    void this.#applyDecision(this.mode.commit(decision));
  }

  /** Adopts an audible track change the ordering rules did not request. */
  #resyncMode(trackId) {
    if (trackId !== this.mode.currentTrackId) this.mode.observeTrack(trackId);
  }

  /**
   * Keeps the internal snapshot on the audible track without notifying listeners,
   * so a shuffle correction is invisible to the UI.
   */
  #adoptAudible(trackId) {
    this.snapshot = { ...this.snapshot, trackId, currentTime: 0, duration: 0 };
  }

  #onPlaylistCompleted() {
    const trackId = this.snapshot.trackId;
    if (!this.#claimCompletion(trackId)) return;
    void this.#applyDecision(this.mode.commit(this.mode.resolveCompletion(trackId)));
  }

  async #onSkipForward() {
    // Only the notification/lock-screen skip reaches here; the app decides locally.
    if (this.repeatOne) {
      const index = this.#indexOf(this.repeatOne.trackId);
      if (index >= 0) await this.#directTo(index, 0);
      return;
    }
    await this.#applyDecision(this.mode.commit(this.mode.resolveNext()));
  }

  async #onSkipBack() {
    // Native skipped back in manifest order, which is not necessarily the previous
    // track of the current mode. The session decides; native state is corrected.
    if (this.repeatOne) {
      const index = this.#indexOf(this.repeatOne.trackId);
      if (index >= 0) await this.#directTo(index, 0);
      return;
    }
    await this.#applyDecision(this.mode.commit(this.mode.resolvePrevious()));
  }

  #publish(patch) {
    this.snapshot = { ...this.snapshot, ...patch };
    for (const listener of this.listeners) listener(this.getSnapshot());
  }
}
