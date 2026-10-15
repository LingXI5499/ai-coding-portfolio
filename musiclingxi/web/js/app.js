import { TRACKS, getTrack } from './library.js';
import { filterTracksByTitle } from './search.js';
import { formatTime, clamp } from './format.js';
import { findActiveLyricIndex, parseLrc } from './lyrics-service.js';
import { REPEAT_ALL, REPEAT_ONE, REPEAT_OFF, normalizeRepeatMode } from './playback-mode.js';
import { PlayerService } from './player-service.js';
import {
  normalizeTheme,
  toggleTheme,
  playbackUiMode,
  playbackUiLabel,
  nextPlaybackUiMode
} from './ui-state.js';

const app = document.querySelector('#app');
const storageKey = 'musiclingxi-player-v1';
const initialTrack = TRACKS[0];
const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true;

const defaultState = {
  route: 'library',
  query: '',
  currentTrackId: initialTrack.id,
  status: 'idle',
  currentTime: 0,
  duration: initialTrack.durationHint,
  volume: 1,
  repeatMode: REPEAT_ALL,
  shuffle: false,
  queueOrder: TRACKS.map((track) => track.id),
  queueOpen: false,
  theme: normalizeTheme(null, prefersDark),
  lyrics: [],
  activeLyricIndex: -1,
  error: null,
  ready: false
};

const ICONS = {
  previous: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.4 5.6v12.8L9.2 12l9.2-6.4Z"/><rect x="5" y="5.4" width="2.4" height="13.2" rx="1.2"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.6 5.6v12.8L14.8 12 5.6 5.6Z"/><rect x="16.6" y="5.4" width="2.4" height="13.2" rx="1.2"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 4.6a1.4 1.4 0 0 1 2.13-1.2l10.1 6.2a1.4 1.4 0 0 1 0 2.4l-10.1 6.2A1.4 1.4 0 0 1 7.4 17V4.6Z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.2" y="4.4" width="4.2" height="15.2" rx="2.1"/><rect x="13.6" y="4.4" width="4.2" height="15.2" rx="2.1"/></svg>',
  repeatAll: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.9" d="M7 6.5h10.2A3.3 3.3 0 0 1 20.5 9.8v1.4M17 17.5H6.8A3.3 3.3 0 0 1 3.5 14.2v-1.4"/><path d="M15.3 3.6 18.6 6.5l-3.3 2.9V3.6Z"/><path d="M8.7 20.4 5.4 17.5l3.3-2.9v5.8Z"/></svg>',
  repeatOne: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.9" d="M7 6.5h10.2A3.3 3.3 0 0 1 20.5 9.8v1.4M17 17.5H6.8A3.3 3.3 0 0 1 3.5 14.2v-1.4"/><path d="M15.3 3.6 18.6 6.5l-3.3 2.9V3.6Z"/><path d="M8.7 20.4 5.4 17.5l3.3-2.9v5.8Z"/><text x="12" y="15.6" text-anchor="middle" font-size="9" font-weight="700" fill="currentColor">1</text></svg>',
  linear: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.9" d="M4 7h11.5M4 12h8M4 17h11.5"/><path d="M18.4 12.2 15.6 14.6V9.8l2.8 2.4Z"/></svg>',
  shuffle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.9" d="M4 6.5h2.6c1.5 0 2.4.8 3.3 1.9l4.2 5.4c.9 1.1 1.8 1.9 3.3 1.9H20M4 17.5h2.6c1.5 0 2.4-.8 3.3-1.9l.7-.9M20 6.5h-3.3c-1.5 0-2.4.8-3.3 1.9"/><path d="M18.6 3.9 21.4 6.5l-2.8 2.6V3.9ZM18.6 14.9l2.8 2.6-2.8 2.6v-5.2Z"/></svg>',
  queue: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4 6h12M4 12h12M4 18h8"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 8v10m-3.5-3.5L18 18l3.5-3.5"/></svg>',
  sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" stroke-width="1.9"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.9" d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6m11.6 11.6 1.6 1.6M2.5 12h2.2m14.6 0h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/></svg>',
  moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9" d="M20 14.6A7.8 7.8 0 1 1 9.4 4 6.2 6.2 0 0 0 20 14.6Z"/></svg>'
};

const MODE_ICONS = {
  'repeat-all': ICONS.repeatAll,
  'repeat-one': ICONS.repeatOne,
  linear: ICONS.linear,
  shuffle: ICONS.shuffle
};

function readSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved && getTrack(saved.currentTrackId)) {
      return {
        ...defaultState,
        currentTrackId: saved.currentTrackId,
        volume: clamp(Number(saved.volume) || 1, 0, 1),
        repeatMode: normalizeRepeatMode(saved.repeatMode),
        shuffle: Boolean(saved.shuffle),
        theme: normalizeTheme(saved.theme, prefersDark)
      };
    }
  } catch { /* invalid storage falls back */ }
  return { ...defaultState };
}

let state = readSavedState();
const player = new PlayerService();
let lastScrolledLyricIndex = null;
let scrubPreview = null;

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify({
    currentTrackId: state.currentTrackId,
    volume: state.volume,
    repeatMode: state.repeatMode,
    shuffle: state.shuffle,
    theme: state.theme
  }));
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = state.theme === 'light' ? '#f8efd3' : '#070a12';
}

function setState(patch, { render: shouldRender = true } = {}) {
  const previousActiveLyricIndex = state.activeLyricIndex;
  state = { ...state, ...patch };
  state.activeLyricIndex = findActiveLyricIndex(state.lyrics, state.currentTime);
  saveState();
  if (shouldRender) render();
  else updateLivePlayer(previousActiveLyricIndex);
}

function refreshQueueOrder() {
  try {
    const order = player.getQueueOrder();
    if (Array.isArray(order) && order.length) setState({ queueOrder: order }, { render: false });
  } catch { /* native queue preview is best effort */ }
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
}

function currentTrack() {
  return getTrack(state.currentTrackId) ?? initialTrack;
}

function queueTracks() {
  const ids = Array.isArray(state.queueOrder) && state.queueOrder.length
    ? state.queueOrder
    : TRACKS.map((track) => track.id);
  const ordered = ids.map((id) => getTrack(id)).filter(Boolean);
  return ordered.length ? ordered : TRACKS;
}

function themeButton() {
  const next = state.theme === 'dark' ? '明亮主题' : '暗色主题';
  return `<button type="button" class="theme-button" data-action="toggle-theme" aria-label="切换到${next}" title="切换到${next}">
    ${state.theme === 'dark' ? ICONS.sun : ICONS.moon}
  </button>`;
}

async function loadLyrics(trackId) {
  const track = getTrack(trackId);
  if (!track) return;
  try {
    const response = await fetch(track.lyricsSrc, { cache: 'no-store' });
    if (!response.ok) throw new Error('missing LRC');
    const lyrics = parseLrc(await response.text());
    if (!lyrics.length) throw new Error('empty LRC');
    if (state.currentTrackId === trackId) setState({ lyrics });
  } catch {
    if (state.currentTrackId === trackId) setState({ lyrics: [] });
  }
}

/** Message shown for a track whose bundled file is an empty placeholder. */
const PLACEHOLDER_NOTICE = '占位音频：运行 npm run media:ingest 载入真实音乐';

/**
 * The published repository ships empty placeholder files, so a clean clone cannot play
 * anything. That is expected, not a failure: selecting such a track settles on
 * "暂无音频" instead of driving the player into an error state.
 */
async function selectTrack(trackId, autoplay = true, position = 0) {
  const track = getTrack(trackId);
  if (!track) return;
  if (track.placeholderAudio) {
    setState({
      currentTrackId: trackId,
      status: 'paused',
      currentTime: 0,
      duration: track.durationHint,
      lyrics: [],
      error: PLACEHOLDER_NOTICE,
      route: 'player',
      queueOpen: false
    });
    // Stay in sync with the native session without asking it to decode an empty file.
    await player.select(trackId, { autoplay: false, position: 0 }).catch(() => {});
    return;
  }
  setState({
    currentTrackId: trackId,
    status: 'loading',
    currentTime: 0,
    duration: track.durationHint,
    lyrics: [],
    error: null,
    route: 'player',
    queueOpen: false
  });
  void loadLyrics(trackId);
  try {
    await player.select(trackId, { autoplay, position });
    refreshQueueOrder();
  } catch (error) {
    setState({ status: 'error', error: error.message || '歌曲加载失败' });
  }
}

function syncSnapshot(snapshot) {
  const changedTrack = snapshot.trackId && snapshot.trackId !== state.currentTrackId && getTrack(snapshot.trackId);
  if (changedTrack) {
    state = { ...state, currentTrackId: snapshot.trackId, lyrics: [], activeLyricIndex: -1 };
    void loadLyrics(snapshot.trackId);
  }
  const nextStatus = snapshot.status ?? state.status;
  const nextError = snapshot.error ?? null;
  const isPositionOnlyUpdate = !changedTrack && state.route === 'player'
    && nextStatus === state.status && nextError === state.error;
  setState({
    status: nextStatus,
    currentTime: Number.isFinite(snapshot.currentTime) ? snapshot.currentTime : state.currentTime,
    duration: Number.isFinite(snapshot.duration) && snapshot.duration > 0 ? snapshot.duration : state.duration,
    error: nextError
  }, { render: !isPositionOnlyUpdate });
}

async function cyclePlaybackMode() {
  const next = nextPlaybackUiMode(state.repeatMode, state.shuffle);
  try {
    if (state.repeatMode !== next.repeatMode) await player.setRepeatMode(next.repeatMode);
    if (state.shuffle !== next.shuffle) await player.setShuffle(next.shuffle);
    setState({ repeatMode: next.repeatMode, shuffle: next.shuffle });
    refreshQueueOrder();
    showToast(playbackUiLabel(next.repeatMode, next.shuffle));
  } catch (error) {
    setState({ error: error.message || '无法切换播放模式' });
  }
}

let toastTimer = null;
function showToast(message) {
  const layer = app.querySelector('[data-slot="toast-layer"]');
  if (!layer) return;
  layer.innerHTML = `<div class="toast" role="status">${escapeHtml(message)}</div>`;
  const toast = layer.firstElementChild;
  requestAnimationFrame(() => toast.classList.add('is-visible'));
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove('is-visible');
    window.setTimeout(() => layer.replaceChildren(), 220);
  }, 1400);
}

function libraryView() {
  const tracks = filterTracksByTitle(TRACKS, state.query);
  return `
    <section class="screen library-screen" aria-label="歌曲列表">
      <div class="library-toolbar">${themeButton()}</div>
      <header class="app-header">
        <p class="eyebrow">只为音乐</p>
        <h1>MusicLingXi</h1>
        <p class="subtle">${TRACKS.length} 首内置歌曲 · 完全离线</p>
      </header>
      <label class="search-box" for="song-search">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="m15.2 15.2 5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        <input id="song-search" type="search" autocomplete="off" placeholder="搜索歌名" value="${escapeHtml(state.query)}" />
        ${state.query ? '<button type="button" class="clear-search" data-action="clear-search" aria-label="清空搜索">×</button>' : ''}
      </label>
      <div class="section-title"><span>歌曲</span><span>${tracks.length} 首</span></div>
      <ol class="track-list" aria-label="歌曲">
        ${tracks.length ? tracks.map((track) => trackRow(track)).join('') : '<li class="empty-state">没有找到这首歌<button type="button" data-action="clear-search">清空搜索</button></li>'}
      </ol>
    </section>
    ${miniPlayer()}`;
}

function trackRow(track) {
  const isCurrent = track.id === state.currentTrackId;
  const duration = isCurrent ? state.duration || track.durationHint : track.durationHint;
  const isPlaying = isCurrent && state.status === 'playing';
  return `<li class="track-row">
    <button type="button" class="track-button ${isCurrent ? 'is-current' : ''}" data-track-id="${track.id}" aria-label="${isCurrent && isPlaying ? '正在播放' : '播放'} ${escapeHtml(track.title)}">
      <span class="track-indicator ${isPlaying ? 'is-playing' : ''}" aria-hidden="true">
        ${isPlaying ? '<i></i><i></i><i></i>' : ICONS.play}
      </span>
      <span class="track-copy"><strong>${escapeHtml(track.title)}</strong>${track.artist ? `<small>${escapeHtml(track.artist)}</small>` : ''}</span>
      <time>${formatTime(duration)}</time>
    </button>
  </li>`;
}

function miniPlayer() {
  const track = currentTrack();
  const duration = Number.isFinite(state.duration) && state.duration > 0 ? state.duration : track.durationHint;
  const progress = duration > 0 ? Math.min(100, Math.max(0, (state.currentTime / duration) * 100)) : 0;
  return `<div class="mini-player ${state.status === 'playing' ? 'is-playing' : ''}" style="--mini-progress:${progress}%">
    <span class="mini-progress" aria-hidden="true"></span>
    <button type="button" class="mini-main" data-action="open-player" aria-label="打开正在播放：${escapeHtml(track.title)}">
      <span class="mini-art" aria-hidden="true">${state.status === 'playing' ? '<i></i><i></i><i></i>' : ICONS.play}</span>
      <span class="mini-copy"><strong>${escapeHtml(track.title)}</strong><small>${state.status === 'playing' ? '正在播放' : '已暂停'}${track.artist ? ` · ${escapeHtml(track.artist)}` : ''}</small></span>
    </button>
    <button type="button" class="mini-toggle" data-action="toggle-play" aria-label="${state.status === 'playing' ? '暂停' : '播放'}">${state.status === 'playing' ? ICONS.pause : ICONS.play}</button>
  </div>`;
}

function queueSheet() {
  const tracks = queueTracks();
  return `
    <div class="queue-backdrop ${state.queueOpen ? 'is-open' : ''}" data-action="close-queue" aria-hidden="${state.queueOpen ? 'false' : 'true'}">
      <section class="queue-sheet" role="dialog" aria-modal="true" aria-label="当前播放列表">
        <div class="queue-handle" aria-hidden="true"></div>
        <header class="queue-header">
          <div><h2>当前播放</h2><p>${state.shuffle ? '随机队列' : '播放队列'} · ${tracks.length} 首</p></div>
          <button type="button" class="queue-close" data-action="close-queue" aria-label="关闭播放列表">×</button>
        </header>
        <ol class="queue-list">
          ${tracks.map((track) => {
            const isCurrent = track.id === state.currentTrackId;
            const isPlaying = isCurrent && state.status === 'playing';
            return `<li class="queue-item ${isCurrent ? 'is-current' : ''}">
              <button type="button" class="queue-track" data-track-id="${track.id}" aria-label="播放 ${escapeHtml(track.title)}">
                <span class="queue-marker ${isPlaying ? 'is-playing' : ''}" aria-hidden="true">
                  ${isPlaying ? '<i></i><i></i><i></i>' : isCurrent ? ICONS.play : '<span class="queue-dot"></span>'}
                </span>
                <span class="queue-copy"><strong>${escapeHtml(track.title)}</strong>${track.artist ? `<small>${escapeHtml(track.artist)}</small>` : ''}</span>
                <time>${formatTime(track.durationHint)}</time>
              </button>
            </li>`;
          }).join('')}
        </ol>
      </section>
    </div>`;
}

function playerView() {
  const track = currentTrack();
  const progressMax = Number.isFinite(state.duration) && state.duration > 0 ? state.duration : 1;
  const progressPercent = Math.min(100, Math.max(0, (state.currentTime / progressMax) * 100));
  const statusLabel = track.placeholderAudio
    ? '暂无音频'
    : state.status === 'playing' ? '正在播放' : state.status === 'loading' ? '正在加载' : state.status === 'error' ? '播放出错' : '已暂停';
  const lyrics = state.lyrics.length
    ? state.lyrics.map((line, index) => `
      <button type="button" class="lyric-line ${index === state.activeLyricIndex ? 'is-active' : ''}" data-lyric-index="${index}">${escapeHtml(line.text || '♪')}</button>`).join('')
    : '<p class="no-lyrics">暂无歌词</p>';
  const mode = playbackUiMode(state.repeatMode, state.shuffle);
  const modeLabel = playbackUiLabel(state.repeatMode, state.shuffle);

  return `
    <section class="screen player-screen" aria-label="播放页">
      <header class="player-header">
        <button type="button" class="icon-button" data-action="back-library" aria-label="返回歌曲列表">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M14.6 5.4 8 12l6.6 6.6"/></svg>
        </button>
        <div class="player-title">
          <h1>${escapeHtml(track.title)}</h1>
          <p>${escapeHtml(track.artist || 'MusicLingXi')}</p>
        </div>
        ${themeButton()}
      </header>

      <p class="visually-hidden" aria-live="polite">${statusLabel}</p>
      <section class="lyrics" id="lyrics-panel" aria-label="同步歌词">${lyrics}</section>

      <section class="controls" aria-label="播放控制">
        <div class="scrubber">
          <input id="progress" type="range" min="0" max="${progressMax}" step="0.1"
            value="${Math.min(state.currentTime, progressMax)}" style="--progress:${progressPercent}%"
            aria-label="播放进度" aria-valuetext="${formatTime(state.currentTime)} / ${formatTime(state.duration)}"
            ${state.status === 'loading' ? 'disabled' : ''} />
        </div>
        <div class="time-row"><time data-current-time>${formatTime(scrubPreview ?? state.currentTime)}</time><time data-total-time>${formatTime(state.duration)}</time></div>

        <div class="main-controls">
          <button type="button" class="mode-button" data-action="cycle-playback-mode"
            aria-label="播放模式：${modeLabel}，点击切换" title="${modeLabel}">
            ${MODE_ICONS[mode]}
            ${mode === 'repeat-one' ? '<span class="mode-badge" aria-hidden="true">1</span>' : ''}
          </button>
          <button type="button" class="transport-button" data-action="previous" aria-label="上一首">${ICONS.previous}</button>
          <button type="button" class="play-button" data-action="toggle-play" aria-label="${state.status === 'playing' ? '暂停' : '播放'}">${state.status === 'playing' ? ICONS.pause : ICONS.play}</button>
          <button type="button" class="transport-button" data-action="next" aria-label="下一首">${ICONS.next}</button>
          <button type="button" class="queue-button" data-action="open-queue" aria-label="打开播放列表" title="播放列表">${ICONS.queue}</button>
        </div>
      </section>

      ${queueSheet()}
      <div class="toast-layer" data-slot="toast-layer"></div>
      ${state.error ? `<div class="toast-layer"><div class="toast is-visible" role="alert">${escapeHtml(state.error)}</div></div>` : ''}
    </section>`;
}

function render() {
  applyTheme();
  app.innerHTML = state.route === 'player' ? playerView() : libraryView();
  keepActiveLyricVisible(app.querySelector('.lyric-line.is-active'));
}

function keepActiveLyricVisible(active) {
  if (active && lastScrolledLyricIndex !== state.activeLyricIndex) {
    lastScrolledLyricIndex = state.activeLyricIndex;
    active.scrollIntoView({
      block: 'center',
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
  } else if (!active) {
    lastScrolledLyricIndex = null;
  }
}

function updateLivePlayer(previousActiveLyricIndex) {
  if (state.route !== 'player') return;
  const progress = app.querySelector('#progress');
  const progressMax = Number.isFinite(state.duration) && state.duration > 0 ? state.duration : 1;
  if (progress) {
    const value = Math.min(scrubPreview ?? state.currentTime, progressMax);
    progress.max = String(progressMax);
    progress.value = String(value);
    progress.style.setProperty('--progress', `${Math.min(100, Math.max(0, (value / progressMax) * 100))}%`);
  }
  const currentTime = app.querySelector('[data-current-time]');
  const totalTime = app.querySelector('[data-total-time]');
  if (currentTime) currentTime.textContent = formatTime(scrubPreview ?? state.currentTime);
  if (totalTime) totalTime.textContent = formatTime(state.duration);

  if (previousActiveLyricIndex !== state.activeLyricIndex) {
    app.querySelector('.lyric-line.is-active')?.classList.remove('is-active');
    const active = state.activeLyricIndex >= 0
      ? app.querySelector(`[data-lyric-index="${state.activeLyricIndex}"]`)
      : null;
    active?.classList.add('is-active');
    keepActiveLyricVisible(active);
  }
}

app.addEventListener('input', (event) => {
  if (event.target.id === 'song-search') setState({ query: event.target.value });
  if (event.target.id === 'progress') {
    const nextTime = Number(event.target.value);
    scrubPreview = nextTime;
    const previousActiveLyricIndex = state.activeLyricIndex;
    state = { ...state, currentTime: nextTime, activeLyricIndex: findActiveLyricIndex(state.lyrics, nextTime) };
    updateLivePlayer(previousActiveLyricIndex);
  }
});

app.addEventListener('pointerdown', (event) => {
  if (event.target.closest('#progress')) app.querySelector('.scrubber')?.classList.add('is-scrubbing');
});
window.addEventListener('pointerup', () => app.querySelector('.scrubber')?.classList.remove('is-scrubbing'));
window.addEventListener('pointercancel', () => app.querySelector('.scrubber')?.classList.remove('is-scrubbing'));

app.addEventListener('change', async (event) => {
  if (event.target.id !== 'progress') return;
  const target = Number(event.target.value);
  scrubPreview = null;
  await player.seek(target);
});

app.addEventListener('click', async (event) => {
  const trigger = event.target.closest('[data-action], [data-track-id], [data-lyric-index]');
  if (!trigger) return;
  if (trigger.dataset.trackId) return selectTrack(trigger.dataset.trackId, true);
  if (trigger.dataset.lyricIndex) {
    const line = state.lyrics[Number(trigger.dataset.lyricIndex)];
    if (line) await player.seek(line.time);
    return;
  }

  switch (trigger.dataset.action) {
    case 'clear-search': setState({ query: '' }); break;
    case 'open-player': setState({ route: 'player' }); break;
    case 'back-library': setState({ route: 'library', queueOpen: false }); break;
    case 'toggle-theme': setState({ theme: toggleTheme(state.theme) }); break;
    case 'toggle-play': state.status === 'playing' ? await player.pause() : await player.play(); break;
    case 'next': await player.next(); break;
    case 'previous': await player.previous(); break;
    case 'cycle-playback-mode': await cyclePlaybackMode(); break;
    case 'open-queue': setState({ queueOpen: true }); break;
    case 'close-queue': setState({ queueOpen: false }); break;
    default: break;
  }
});

document.addEventListener('visibilitychange', () => {
  if (!document.hidden) void player.refresh();
});

player.subscribe(syncSnapshot);
void (async () => {
  render();
  try {
    await player.initialize(TRACKS, {
      initialTrackId: state.currentTrackId,
      volume: state.volume,
      repeatMode: state.repeatMode,
      shuffle: state.shuffle
    });
    // A published clone only has empty placeholder files: say so up front instead of
    // letting the first play attempt look like a failure.
    const initial = getTrack(state.currentTrackId);
    setState({
      ready: true,
      status: 'paused',
      error: initial?.placeholderAudio ? PLACEHOLDER_NOTICE : null
    });
    refreshQueueOrder();
    void loadLyrics(state.currentTrackId);
  } catch (error) {
    setState({ status: 'error', error: error.message || '播放器初始化失败' });
  }
})();
