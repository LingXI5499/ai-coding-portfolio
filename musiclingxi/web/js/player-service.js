import { Capacitor } from '@capacitor/core';
import { REPEAT_ALL } from './playback-mode.js';
import { HtmlAudioAdapter } from './playback/html-audio-adapter.js';
import { NativePlaylistAdapter } from './playback/native-playlist-adapter.js';

/**
 * Single entry point for playback. It forwards to the native media session on
 * Android and to a plain audio element in the browser preview, and it owns the
 * playback ordering (列表循环 / 单曲循环 / 随机播放) in both cases.
 */
export class PlayerService {
  constructor() {
    this.isNative = Capacitor.isNativePlatform();
    this.adapter = this.isNative ? new NativePlaylistAdapter() : new HtmlAudioAdapter();
  }

  /** The adapters still track status; this only decides what we show for a failure. */
  get tracks() { return this.library ?? []; }

  /**
   * Turns a low-level playback failure into a user-facing message. Empty bundled files
   * are the committable placeholders, so they are reported as “no audio yet” rather than
   * as a load failure.
   */
  async classifyError(trackId) {
    const track = this.library?.find((item) => item.id === trackId);
    if (!track) return '歌曲加载失败';
    try {
      const response = await fetch(track.audioSrc, { method: 'HEAD', cache: 'no-store' });
      const length = Number(response.headers.get('content-length') ?? Number.NaN);
      if (response.ok && Number.isFinite(length) && length === 0) {
        return '占位音频：运行 npm run media:ingest 载入真实音乐';
      }
    } catch { /* network-less environments fall through */ }
    return '歌曲加载失败';
  }

  subscribe(listener) { return this.adapter.subscribe(listener); }
  getSnapshot() { return this.adapter.getSnapshot(); }
  async initialize(tracks, { initialTrackId, volume, repeatMode = REPEAT_ALL, shuffle = false } = {}) {
    this.library = [...tracks];
    // Both adapters ask this hook before surfacing a failure message.
    this.adapter.classifyError = (trackId) => this.classifyError(trackId);
    await this.adapter.initialize();
    await this.adapter.setQueue(tracks);
    await this.adapter.setVolume(volume);
    await this.adapter.setRepeatMode(repeatMode);
    await this.adapter.setShuffle(shuffle);
    if (initialTrackId) await this.adapter.select(initialTrackId, { autoplay: false });
  }
  async select(id, options) { return this.adapter.select(id, options); }
  async play() { return this.adapter.play(); }
  async pause() { return this.adapter.pause(); }
  async next() { return this.adapter.next(); }
  async previous() { return this.adapter.previous(); }
  async seek(position) { return this.adapter.seek(position); }
  async refresh() { return this.adapter.refresh(); }
  async setRepeatMode(mode) { return this.adapter.setRepeatMode(mode); }
  async setShuffle(enabled) { return this.adapter.setShuffle(enabled); }
  getPlaybackMode() { return this.adapter.getPlaybackMode(); }
  getQueueOrder() { return this.adapter.getQueueOrder(); }
}
