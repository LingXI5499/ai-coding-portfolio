import test from 'node:test';
import assert from 'node:assert/strict';
import { TRACKS, getAdjacentTrack } from '../web/js/library.js';
import { formatTime } from '../web/js/format.js';
import { filterTracksByTitle, normalizeTitle } from '../web/js/search.js';

test('tracks have stable unique IDs and bounded adjacency', () => {
  assert.ok(TRACKS.length >= 2, '清单至少需要两首歌才能验证相邻歌曲');
  assert.equal(new Set(TRACKS.map((track) => track.id)).size, TRACKS.length, 'ID 必须唯一');
  assert.equal(getAdjacentTrack(TRACKS[0].id, -1), null);
  assert.equal(getAdjacentTrack(TRACKS.at(-1).id, 1), null);
  assert.equal(getAdjacentTrack(TRACKS[0].id, 1).id, TRACKS[1].id);
  assert.equal(getAdjacentTrack(TRACKS.at(-1).id, -1).id, TRACKS.at(-2).id);
});

test('title search ignores whitespace and returns local matches only', () => {
  assert.equal(normalizeTitle('  示例 曲目-01  '), '示例曲目01');

  // 断言不绑定具体歌名：取清单真实标题构造查询，这样换歌库也不会失效。
  const sample = TRACKS[2];
  const spaced = sample.title.split('').join(' ');
  assert.deepEqual(
    filterTracksByTitle(TRACKS, spaced).map((track) => track.id),
    [sample.id],
    `带空格查询「${spaced}」应只命中 ${sample.id}`
  );
  assert.deepEqual(
    filterTracksByTitle(TRACKS, `  ${sample.title} `).map((track) => track.id),
    [sample.id],
    '首尾空格应被忽略'
  );
  assert.equal(filterTracksByTitle(TRACKS, '不存在的歌曲名').length, 0);
  assert.equal(filterTracksByTitle(TRACKS, '').length, TRACKS.length);
});

test('formatTime handles normal and invalid values', () => {
  assert.equal(formatTime(0), '00:00');
  assert.equal(formatTime(59), '00:59');
  assert.equal(formatTime(60), '01:00');
  assert.equal(formatTime(3599), '59:59');
  assert.equal(formatTime(Number.NaN), '--:--');
  assert.equal(formatTime(Infinity), '--:--');
});
