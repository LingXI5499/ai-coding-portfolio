import { clamp } from '../format.js';
import { PlaybackModeSession } from './mode-session.js';

/**
 * Development-only adapter. Android never uses this path: the native media session
 * is the source of truth on device. It mirrors the native ordering rules so the
 * browser preview exercises the same 列表循环 / 单曲循环 / 随机播放 behaviour.
 */
export class HtmlAudioAdapter {
  constructor() {
    this.audio = new Audio();
    this.queue = [];
    this.currentId = null;
    this.listeners = new Set();
    this.mode = new PlaybackModeSession();
    this.snapshot = { trackId: null, status: 'idle', currentTime: 0, duration: 0, error: null };
    this.audio.preload = 'metadata';
    this.audio.addEventListener('loadedmetadata', () => this.#update({ duration: this.audio.duration || 0 }));
    this.audio.addEventListener('timeupdate', () => this.#update({ currentTime: this.audio.currentTime || 0 }));
    this.audio.addEventListener('play', () => this.#update({ status: 'playing', error: null }));
    this.audio.addEventListener('pause', () => {
      if (!this.audio.ended) this.#update({ status: 'paused' });
    });
    this.audio.addEventListener('error', () => void this.#handleError());
    this.audio.addEventListener('ended', () => void this.#handleEnded());
  }

  subscribe(listener) { this.listeners.add(listener); return () => this.listeners.delete(listener); }
  async initialize() {}
  getSnapshot() { return { ...this.snapshot }; }

  async setQueue(tracks) {
    this.queue = [...tracks];
    this.mode.setQueue(tracks, this.currentId);
  }

  async setRepeatMode(mode) { return this.mode.setRepeatMode(mode); }
  async setShuffle(enabled) { return this.mode.setShuffle(enabled); }
  getPlaybackMode() { return { repeatMode: this.mode.repeatMode, shuffle: this.mode.shuffle }; }
  getQueueOrder() { return this.mode.previewOrder(); }

  async select(id, { autoplay = true, position = 0 } = {}) {
    if (!this.queue.some((track) => track.id === id)) throw new Error('歌曲不存在');
    this.mode.adoptSelection(id);
    await this.#load(id, { autoplay, position });
  }

  async play() {
    if (this.mode.ended) {
      await this.#restartCurrent();
      return;
    }
    await this.audio.play();
  }

  async pause() { this.audio.pause(); }

  async seek(position) {
    this.audio.currentTime = clamp(position, 0, this.audio.duration || 0);
    this.#update({ currentTime: this.audio.currentTime });
  }

  async setVolume(volume) { this.audio.volume = clamp(volume, 0, 1); }
  async next() { await this.#applyDecision(this.mode.commit(this.mode.resolveNext())); }
  async previous() { await this.#applyDecision(this.mode.commit(this.mode.resolvePrevious())); }
  async refresh() { this.#update({ currentTime: this.audio.currentTime || 0, duration: this.audio.duration || this.snapshot.duration }); }

  async #load(id, { autoplay = true, position = 0 } = {}) {
    const track = this.queue.find((item) => item.id === id);
    if (!track) throw new Error('歌曲不存在');
    this.currentId = id;
    this.audio.pause();
    this.audio.src = track.audioSrc;
    this.audio.load();
    this.#update({ trackId: id, status: 'loading', currentTime: 0, duration: track.durationHint || 0, error: null });
    await new Promise((resolve) => this.audio.addEventListener('loadedmetadata', resolve, { once: true }));
    this.audio.currentTime = clamp(position, 0, this.audio.duration || position);
    if (autoplay) await this.audio.play();
    else this.#update({ status: 'paused' });
  }

  async #applyDecision(decision) {
    if (!decision || decision.action === 'end') {
      this.mode.sessionEnded = true;
      this.#update({ status: 'paused' });
      return;
    }
    if (decision.action === 'restart') {
      await this.#restartCurrent();
      return;
    }
    await this.#load(decision.trackId, { autoplay: true });
  }

  async #restartCurrent() {
    if (!this.currentId) return;
    this.audio.currentTime = 0;
    await this.audio.play();
  }

  /**
   * An empty bundled file (the committable placeholder) is not a real failure: report it
   * as “no audio yet” so a clean clone explains itself instead of erroring.
   */
  async #handleError() {
    const message = await this.classifyError?.(this.currentId) ?? '歌曲加载失败';
    this.#update({ status: 'error', error: message });
  }

  async #handleEnded() {
    await this.#applyDecision(this.mode.commit(this.mode.resolveCompletion(this.currentId)));
  }

  #update(patch) {
    this.snapshot = { ...this.snapshot, ...patch };
    this.currentId = this.snapshot.trackId;
    for (const listener of this.listeners) listener(this.getSnapshot());
  }
}
