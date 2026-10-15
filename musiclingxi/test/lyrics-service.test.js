import test from 'node:test';
import assert from 'node:assert/strict';
import { findActiveLyricIndex, parseLrc } from '../web/js/lyrics-service.js';

test('parseLrc parses multiple tags, fractions and offset', () => {
  const lines = parseLrc('[offset:+500]\n[00:01.00][00:02.5]副歌\n[00:03]尾声');
  assert.deepEqual(lines, [
    { time: 1.5, text: '副歌' },
    { time: 3, text: '副歌' },
    { time: 3.5, text: '尾声' }
  ]);
});

test('parseLrc ignores metadata and sorts timestamps stably', () => {
  const lines = parseLrc('[ti:测试]\n[00:03.00]后\n[00:01.00]先\n[00:03.00]同刻');
  assert.deepEqual(lines, [
    { time: 1, text: '先' },
    { time: 3, text: '后' },
    { time: 3, text: '同刻' }
  ]);
});

test('parseLrc removes enhanced-LRC inline word timestamps', () => {
  const lines = parseLrc('[00:01.20]<00:01.200>逐<00:01.566>字<00:01.932>行');
  assert.deepEqual(lines, [{ time: 1.2, text: '逐字行' }]);
});

test('findActiveLyricIndex finds the last line at or before current time', () => {
  const lines = [{ time: 5, text: 'A' }, { time: 10, text: 'B' }, { time: 15, text: 'C' }];
  assert.equal(findActiveLyricIndex(lines, 0), -1);
  assert.equal(findActiveLyricIndex(lines, 5), 0);
  assert.equal(findActiveLyricIndex(lines, 14.9), 1);
  assert.equal(findActiveLyricIndex(lines, 99), 2);
});
