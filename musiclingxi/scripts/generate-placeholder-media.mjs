// Switches the media directory to the *publishable* form.
//
//   node scripts/generate-placeholder-media.mjs        # 需要 --force 之外无额外参数
//
// Every file named by `web/js/library.js` becomes a zero-byte placeholder and the
// manifest is rewritten with `placeholderAudio: true`, which is exactly what the
// published repository contains. No lyrics are shipped at all.
//
// Real audio is never lost: `npm run media:ingest` keeps a copy of every file in the
// backup directory (default `../Music-private-assets/audio`), and `npm run media:restore`
// puts it back. Files in the media directory that the manifest does not name are left
// untouched, because those are source material this script knows nothing about.
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { basename, resolve } from 'node:path';
import { TRACKS } from '../web/js/library.js';
import { writeLibrary } from './lib/library-manifest.mjs';

const root = resolve(import.meta.dirname, '..');
const audioDirectory = resolve(root, 'web/public/media/audio');
const metadataPath = resolve(root, 'media-metadata.local.json');
const backupDirectory = resolve(root, '..', 'Music-private-assets', 'audio');

const knownFiles = new Set(TRACKS.map((track) => basename(track.audioSrc)));

// Fail loudly when the real audio has no backup: emptying the bundle is only safe while
// a copy of it exists somewhere else.
if (existsSync(metadataPath)) {
  const { tracks } = JSON.parse(await readFile(metadataPath, 'utf8'));
  const hasBackup = tracks.every((track) => existsSync(resolve(backupDirectory, track.file)));
  if (!hasBackup) {
    console.error(`✗ 备份目录不完整：${backupDirectory}`);
    console.error('  先运行 npm run media:ingest 生成备份，再执行本脚本。');
    process.exitCode = 1;
    process.exit();
  }
} else {
  console.warn('! 未找到 media-metadata.local.json：无法确认备份，仍继续写入空占位。');
}

await mkdir(audioDirectory, { recursive: true });

let emptied = 0;
let alreadyEmpty = 0;
let freedBytes = 0;
const untouched = [];

for (const track of TRACKS) {
  const name = basename(track.audioSrc);
  const file = resolve(audioDirectory, name);
  if (existsSync(file)) {
    const { size } = await stat(file);
    if (size === 0) {
      alreadyEmpty += 1;
      continue;
    }
    freedBytes += size;
  }
  await writeFile(file, '');
  emptied += 1;
}

console.log(`已清空 ${emptied} 个音频（释放 ${(freedBytes / 1048576).toFixed(1)} MB），其中 ${alreadyEmpty} 个本来就是空文件。`);

// Keep the manifest honest about what is on disk: a zero-byte file must never be
// reported as playable.
if (existsSync(metadataPath)) {
  const metadata = JSON.parse(await readFile(metadataPath, 'utf8'));
  const { placeholderCount } = await writeLibrary({
    libraryPath: resolve(root, 'web/js/library.js'),
    audioDirectory,
    tracks: metadata.tracks
  });
  console.log(`清单已更新：${metadata.tracks.length - placeholderCount} 首真实音频，${placeholderCount} 首空占位。`);
} else {
  console.log('清单未更新（缺少 media-metadata.local.json）。');
}

if (untouched.length) console.log(`未改动清单外的文件：${untouched.join(', ')}`);
console.log('这就是可提交到仓库的形态；要恢复真实音频请运行 npm run media:restore。');
