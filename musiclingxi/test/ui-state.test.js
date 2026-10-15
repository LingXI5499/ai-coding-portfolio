import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeTheme,
  toggleTheme,
  playbackUiLabel,
  nextPlaybackUiMode
} from '../web/js/ui-state.js';

test('theme normalizes and toggles', () => {
  assert.equal(normalizeTheme('light', true), 'light');
  assert.equal(normalizeTheme('dark', false), 'dark');
  assert.equal(normalizeTheme('unknown', true), 'dark');
  assert.equal(normalizeTheme('unknown', false), 'light');
  assert.equal(toggleTheme('dark'), 'light');
  assert.equal(toggleTheme('light'), 'dark');
});

test('single mode button cycles through three user-facing modes', () => {
  let state = { repeatMode: 'all', shuffle: false };
  assert.equal(playbackUiLabel(state.repeatMode, state.shuffle), '列表循环');

  state = nextPlaybackUiMode(state.repeatMode, state.shuffle);
  assert.deepEqual(state, { repeatMode: 'one', shuffle: false });
  assert.equal(playbackUiLabel(state.repeatMode, state.shuffle), '单曲循环');

  state = nextPlaybackUiMode(state.repeatMode, state.shuffle);
  assert.deepEqual(state, { repeatMode: 'all', shuffle: true });
  assert.equal(playbackUiLabel(state.repeatMode, state.shuffle), '随机播放');

  state = nextPlaybackUiMode(state.repeatMode, state.shuffle);
  assert.deepEqual(state, { repeatMode: 'all', shuffle: false });
  assert.equal(playbackUiLabel(state.repeatMode, state.shuffle), '列表循环');
});

test('legacy 顺序播放 state is shown as 列表循环 and leaves the cycle', () => {
  assert.equal(playbackUiLabel('off', false), '列表循环');
  assert.deepEqual(nextPlaybackUiMode('off', false), { repeatMode: 'one', shuffle: false });
});

test('shuffle wins the button state over repeat mode', () => {
  assert.equal(playbackUiLabel('one', true), '随机播放');
  assert.deepEqual(nextPlaybackUiMode('one', true), { repeatMode: 'all', shuffle: false });
});
