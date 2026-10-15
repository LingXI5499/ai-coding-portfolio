// Pure UI state for the shell: theme and the single playback-mode button.
//
// The player keeps `repeatMode` and `shuffle` as separate values so the native and
// browser adapters share one state model, but the UI exposes a single button that cycles
// through three user-facing modes:
//   列表循环 → 单曲循环 → 随机播放 → 列表循环
// `repeatMode: 'off'` is only kept as a value that older saved state can map from.

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

export const REPEAT_ALL = 'all';
export const REPEAT_ONE = 'one';
export const REPEAT_OFF = 'off';

/** UI modes in button order. */
export const PLAYBACK_UI_MODES = Object.freeze(['repeat-all', 'repeat-one', 'shuffle']);

export function normalizeTheme(value, prefersDark = true) {
  if (value === THEME_LIGHT || value === THEME_DARK) return value;
  return prefersDark ? THEME_DARK : THEME_LIGHT;
}

export function toggleTheme(value) {
  return normalizeTheme(value) === THEME_DARK ? THEME_LIGHT : THEME_DARK;
}

/**
 * Collapses the two stored fields into the single visible mode. 随机播放 wins because it
 * changes playback order the most; 顺序播放 has no button state of its own and is shown
 * as 列表循环 so the button always maps onto one of the three modes.
 */
export function playbackUiMode(repeatMode, shuffle) {
  if (shuffle) return 'shuffle';
  if (repeatMode === REPEAT_ONE) return 'repeat-one';
  return 'repeat-all';
}

export function playbackUiLabel(repeatMode, shuffle) {
  switch (playbackUiMode(repeatMode, shuffle)) {
    case 'shuffle': return '随机播放';
    case 'repeat-one': return '单曲循环';
    default: return '列表循环';
  }
}

/** 列表循环 → 单曲循环 → 随机播放 → 列表循环 */
export function nextPlaybackUiMode(repeatMode, shuffle) {
  switch (playbackUiMode(repeatMode, shuffle)) {
    case 'repeat-all': return { repeatMode: REPEAT_ONE, shuffle: false };
    case 'repeat-one': return { repeatMode: REPEAT_ALL, shuffle: true };
    default: return { repeatMode: REPEAT_ALL, shuffle: false };
  }
}
