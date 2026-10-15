import test from 'node:test';
import assert from 'node:assert/strict';
import {
  REPEAT_ALL,
  REPEAT_OFF,
  REPEAT_ONE,
  REPEAT_ORDER,
  createPlaybackModeState,
  createShuffleCycle,
  describeRepeatMode,
  linearNextId,
  linearPreviousId,
  nextRepeatMode,
  normalizeRepeatMode,
  resolveAdvance,
  resolveBack
} from '../web/js/playback-mode.js';
import { PlaybackModeSession } from '../web/js/playback/mode-session.js';

const IDS = ['a', 'b', 'c', 'd', 'e'];
const session = (options = {}) => {
  const state = new PlaybackModeSession(options);
  state.setQueue(IDS.map((id) => ({ id })), IDS[0]);
  return state;
};
// Deterministic "random": always picks the first remaining candidate.
const firstChoices = () => 0;

test('底层重复模式按 列表循环 → 单曲循环 → 顺序播放 循环切换', () => {
  assert.deepEqual(REPEAT_ORDER, [REPEAT_ALL, REPEAT_ONE, REPEAT_OFF]);
  assert.equal(nextRepeatMode(REPEAT_ALL), 'one');
  assert.equal(nextRepeatMode('one'), 'off');
  assert.equal(nextRepeatMode('off'), REPEAT_ALL);
  assert.equal(nextRepeatMode('bogus'), 'one', '非法值回退到默认模式后再切换');
  assert.equal(normalizeRepeatMode('bogus'), REPEAT_ALL);
  assert.equal(describeRepeatMode(REPEAT_ONE), '单曲循环');
  assert.equal(describeRepeatMode('off'), '顺序播放');
  assert.equal(describeRepeatMode(REPEAT_ALL), '列表循环');
});

test('顺序播放到最后停止，列表循环回到第一首', () => {
  const state = createPlaybackModeState({ repeatMode: REPEAT_OFF, order: IDS });
  state.currentTrackId = 'e';
  assert.deepEqual(resolveAdvance(state, 'next'), { action: 'end' });
  assert.deepEqual(resolveAdvance(state, 'auto'), { action: 'end' });

  state.repeatMode = REPEAT_ALL;
  const wrapped = resolveAdvance(state, 'next');
  assert.equal(wrapped.action, 'play');
  assert.equal(wrapped.trackId, 'a');
  assert.equal(wrapped.wrapped, true);
});

test('单曲循环锁定当前曲，下一首也重播而不是前进', () => {
  const state = createPlaybackModeState({ repeatMode: REPEAT_ONE, order: IDS });
  state.currentTrackId = 'c';
  assert.deepEqual(resolveAdvance(state, 'auto'), { action: 'restart', trackId: 'c', index: 2 });
  assert.deepEqual(resolveAdvance(state, 'next'), { action: 'restart', trackId: 'c', index: 2 });
});

test('线性上一首/下一首在边界处被限制', () => {
  const state = createPlaybackModeState({ repeatMode: REPEAT_OFF, order: IDS });
  state.currentTrackId = 'a';
  assert.equal(linearPreviousId(state), null);
  // 第一首没有更早的播放路径：重播当前曲，而不是跳到清单末尾。
  assert.deepEqual(resolveBack(state), { action: 'restart', trackId: 'a', index: 0 });
  assert.equal(linearNextId(state), 'b');

  state.currentTrackId = 'e';
  assert.equal(linearNextId(state), null);
  assert.equal(linearPreviousId(state), 'd');
});

test('随机播放一轮内不重复，并覆盖除当前曲之外的全部歌曲', () => {
  const cycle = createShuffleCycle(7, 3);
  assert.equal(cycle.length, 6);
  assert.equal(new Set(cycle).size, 6);
  assert.ok(!cycle.includes(3));
  assert.deepEqual([...cycle].sort((left, right) => left - right), [0, 1, 2, 4, 5, 6]);
});

test('随机播放以当前曲为锚点，重新生成时不会带回本轮已播放的歌曲', () => {
  const played = [1, 4];
  const cycle = createShuffleCycle(7, 2, () => 0, played);
  assert.ok(!cycle.includes(2), '锚点不在轮次里');
  assert.ok(!cycle.includes(1) && !cycle.includes(4), '已播放的歌曲不再出现');
  assert.deepEqual([...cycle].sort((left, right) => left - right), [0, 3, 5, 6]);
});

test('随机播放按轮次前进，一轮内每首只出现一次', () => {
  const playback = session({ repeatMode: REPEAT_ALL, shuffle: true });
  const played = [playback.currentTrackId];
  for (let step = 0; step < IDS.length - 1; step += 1) {
    // The look-ahead used by the native adapter must agree with what is committed.
    const looked = playback.peekNextId();
    const decision = playback.resolveNext();
    assert.equal(looked, decision.trackId, 'peekNextId 必须与实际提交的目标一致');
    playback.commit(decision);
    played.push(playback.currentTrackId);
  }
  assert.equal(new Set(played).size, IDS.length, '一轮内不应重复');
  assert.deepEqual([...played].sort(), [...IDS].sort(), '一轮应覆盖全部歌曲');
});

test('一轮结束后的下一首开启新一轮，不会提前重复上一轮', () => {
  const playback = session({ repeatMode: REPEAT_ALL, shuffle: true });
  for (let step = 0; step < IDS.length - 1; step += 1) playback.commit(playback.resolveNext());
  const second = [playback.currentTrackId];
  for (let step = 0; step < IDS.length - 1; step += 1) {
    playback.commit(playback.resolveNext());
    second.push(playback.currentTrackId);
  }
  assert.equal(new Set(second).size, IDS.length, '第二轮同样覆盖全部歌曲且不重复');
});

test('顺序播放模式下随机一轮播完即结束，不开启新一轮', () => {
  const playback = session({ repeatMode: REPEAT_OFF, shuffle: true });
  for (let step = 0; step < IDS.length - 1; step += 1) playback.commit(playback.resolveNext());
  assert.equal(playback.resolveNext().action, 'end');
});

test('手动选歌以该曲开启新一轮随机', () => {
  const playback = session({ repeatMode: REPEAT_ALL, shuffle: true });
  playback.commit(playback.resolveNext());
  playback.commit(playback.resolveNext());
  playback.adoptSelection('d');
  assert.equal(playback.currentTrackId, 'd');
  const order = playback.previewOrder();
  assert.equal(order[0], 'd', '选中的歌曲排在随机顺序首位');
  assert.equal(order.length, IDS.length);
  assert.equal(new Set(order).size, IDS.length);
});

test('关闭随机后按清单顺序播放', () => {
  const state = createPlaybackModeState({ repeatMode: REPEAT_OFF, shuffle: true, order: IDS });
  state.currentTrackId = 'b';
  resolveAdvance(state, 'next', { random: firstChoices });
  state.shuffle = false;
  assert.equal(resolveAdvance(state, 'next').trackId, 'c');
});

test('上一首/下一首可回到之前播放过的歌曲', () => {
  const playback = session({ repeatMode: REPEAT_OFF });
  playback.commit(playback.resolveNext());
  assert.equal(playback.currentTrackId, 'b');
  playback.commit(playback.resolveNext());
  assert.equal(playback.currentTrackId, 'c');
  playback.commit(playback.resolvePrevious());
  assert.equal(playback.currentTrackId, 'b');
  assert.equal(playback.peekNext(), 'c', '回到中间后下一首仍是前进方向');
});

test('连续上一首逐首后退，不会在两首之间来回跳', () => {
  const playback = session({ repeatMode: REPEAT_ALL });
  // 听过的路径：a → b → c → d
  for (let step = 0; step < 3; step += 1) playback.commit(playback.resolveNext());
  assert.equal(playback.currentTrackId, 'd');

  playback.commit(playback.resolvePrevious());
  assert.equal(playback.currentTrackId, 'c', '第一次后退到刚听过的那首');
  playback.commit(playback.resolvePrevious());
  assert.equal(playback.currentTrackId, 'b', '第二次后退继续往前，而不是跳回 d');
  playback.commit(playback.resolvePrevious());
  assert.equal(playback.currentTrackId, 'a', '第三次后退到路径起点');

  // 路径走完后再按上一首：重播当前曲（第一首没有更早的路径）。
  const atStart = playback.resolvePrevious();
  assert.equal(atStart.action, 'restart');
  assert.equal(playback.currentTrackId, 'a');
});

test('后退之后再前进，沿原路返回', () => {
  const playback = session({ repeatMode: REPEAT_ALL });
  for (let step = 0; step < 3; step += 1) playback.commit(playback.resolveNext());
  assert.equal(playback.currentTrackId, 'd');
  playback.commit(playback.resolvePrevious());
  playback.commit(playback.resolvePrevious());
  assert.equal(playback.currentTrackId, 'b');
  assert.equal(playback.peekNext(), 'c', 'peekNext 先沿路径返回');
  playback.commit(playback.resolveNext());
  assert.equal(playback.currentTrackId, 'c');
  playback.commit(playback.resolveNext());
  assert.equal(playback.currentTrackId, 'd', '继续前进回到原位置');
  assert.equal(playback.peekNext(), 'e', '路径走完后按清单继续');
});

test('手动选歌会重置播放路径', () => {
  const playback = session({ repeatMode: REPEAT_ALL });
  playback.commit(playback.resolveNext());
  playback.commit(playback.resolveNext());
  playback.adoptSelection('e');
  assert.equal(playback.currentTrackId, 'e');
  // 新路径只包含当前曲，所以上一首落到清单邻居 d（而不是旧路径里的歌）。
  assert.equal(playback.peekPrevious(), 'd');
  const back = playback.resolvePrevious();
  assert.equal(back.action, 'play');
  assert.equal(back.trackId, 'd');
  playback.commit(back);
  assert.equal(playback.currentTrackId, 'd');
});

test('随机播放的上一首优先回到刚播放过的歌曲', () => {
  const playback = session({ repeatMode: REPEAT_ALL, shuffle: true });
  const forward = playback.resolveNext();
  playback.commit(forward);
  const second = playback.resolveNext();
  playback.commit(second);
  playback.commit(playback.resolvePrevious());
  assert.equal(playback.currentTrackId, forward.trackId);
});

test('切换模式会清空缓存的下一首与随机轮次', () => {
  const playback = session({ repeatMode: REPEAT_ALL, shuffle: true });
  playback.resolveNext();
  playback.setRepeatMode(REPEAT_ONE);
  assert.equal(playback.repeatMode, REPEAT_ONE);
  playback.setShuffle(false);
  assert.equal(playback.shuffle, false);
  assert.equal(playback.peekNext(), 'b', '关闭随机后回到清单顺序');
});

test('关闭随机后 previewOrder 返回清单顺序', () => {
  const playback = session({ repeatMode: REPEAT_ALL });
  assert.deepEqual(playback.previewOrder(), IDS);
});

test('队列变化时保留当前曲，移除的曲目不会残留在随机轮次', () => {
  const playback = session({ repeatMode: REPEAT_ALL, shuffle: true });
  playback.setQueue(['a', 'b', 'c', 'd', 'e'].map((id) => ({ id })), 'c');
  playback.setQueue(['a', 'b', 'c'].map((id) => ({ id })), 'c');
  assert.equal(playback.currentTrackId, 'c');
  for (const index of playback.state.remaining) assert.ok(index < 3, '随机轮次索引不越界');
});
