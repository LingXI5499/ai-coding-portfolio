import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { TRACKS } from '../web/js/library.js';
import { parseLrc } from '../web/js/lyrics-service.js';

const root = resolve(import.meta.dirname, '..');

// Lyrics are copyrighted content and are never committed: a clean clone has none of
// them and the player degrades to “暂无歌词”. This check therefore validates whichever
// LRC files exist locally, and only fails when a file is present but unusable.
const missing = [];
const invalid = [];

for (const track of TRACKS) {
  try {
    const text = await readFile(resolve(root, 'web/public', `.${track.lyricsSrc}`), 'utf8');
    const lines = parseLrc(text);
    if (!lines.length) {
      invalid.push(`${track.id}: 没有有效的时间歌词行`);
      continue;
    }
    const tooLong = lines.filter((line) => !Number.isFinite(line.time) || line.time < 0 || line.time > track.durationHint + 5);
    if (tooLong.length) invalid.push(`${track.id}: ${tooLong.length} 行时间戳超出歌曲时长`);
  } catch {
    missing.push(track.id);
  }
}

if (invalid.length) {
  console.error(invalid.map((failure) => `✗ ${failure}`).join('\n'));
  process.exitCode = 1;
} else if (missing.length === TRACKS.length) {
  console.log(`✓ 歌词检查通过：${TRACKS.length} 首均为无歌词状态（公开仓库形态，播放时显示「暂无歌词」）`);
} else if (missing.length) {
  console.log(`✓ 歌词检查通过：${TRACKS.length - missing.length}/${TRACKS.length} 首有有效歌词，${missing.length} 首暂无歌词`);
} else {
  console.log(`✓ 歌词检查通过：${TRACKS.length} 首歌词格式与时长匹配`);
}
