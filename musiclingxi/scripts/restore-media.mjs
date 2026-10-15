// Restores the real audio into the bundled media directory.
//
//   node scripts/restore-media.mjs
//   node scripts/restore-media.mjs --source "../Music-private-assets/audio"
//
// The published repository ships one zero-byte placeholder per track, which is what gets
// committed. A locally built app must bundle the real audio instead, otherwise nothing
// plays. This script puts the real files back:
//
//   1. for every track in `web/js/library.js`, find a real audio file — in the backup
//      directory first (original names and `track-NNN.ext`), then in the ingest source;
//   2. verify it against the SHA-256 recorded in `media-metadata.local.json`;
//   3. copy it into `web/public/media/audio/<track.file>`;
//   4. refresh `library.js` so `placeholderAudio` is false again.
//
// Nothing is written to Git by this script; the media ignore rules still hold.
import { copyFile, mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { basename, extname, join, resolve } from 'node:path';
import { TRACKS } from '../web/js/library.js';
import { writeLibrary } from './lib/library-manifest.mjs';

const root = resolve(import.meta.dirname, '..');
const audioDirectory = resolve(root, 'web/public/media/audio');
const metadataPath = resolve(root, 'media-metadata.local.json');
const sourceDirectory = resolve(root, 'audio');

const args = process.argv.slice(2);
const backupIndex = args.indexOf('--source');
const backupDirectory = resolve(
  backupIndex >= 0 ? args[backupIndex + 1] : join(root, '..', 'Music-private-assets', 'audio')
);

const sha256 = async (filePath) => createHash('sha256').update(await readFile(filePath)).digest('hex');

if (!existsSync(metadataPath)) {
  console.error('缺少 media-metadata.local.json：请先运行 npm run media:ingest 建立清单。');
  process.exitCode = 1;
  process.exit();
}

const metadata = JSON.parse(await readFile(metadataPath, 'utf8'));
const byId = new Map(metadata.tracks.map((track) => [track.id, track]));

/** Candidate real files for one track, in priority order. */
async function candidates(track, record) {
  const list = [];
  if (record?.sourceName) list.push(join(backupDirectory, record.sourceName), join(sourceDirectory, record.sourceName));
  list.push(join(backupDirectory, track.audioSrc.split('/').pop()));
  list.push(join(sourceDirectory, record?.sourceName ?? ''));
  return list.filter(Boolean).filter((file) => existsSync(file));
}

await mkdir(audioDirectory, { recursive: true });

let restored = 0;
let alreadyReal = 0;
const missing = [];

for (const track of TRACKS) {
  const record = byId.get(track.id);
  const target = join(audioDirectory, track.audioSrc.split('/').pop());

  if (existsSync(target)) {
    const size = (await stat(target)).size;
    if (size > 0) {
      alreadyReal += 1;
      continue;
    }
  }

  let done = false;
  for (const candidate of await candidates(track, record)) {
    const size = (await stat(candidate)).size;
    if (size === 0) continue;
    if (record?.sha256) {
      const hash = await sha256(candidate);
      if (hash !== record.sha256) {
        console.log(`! ${track.id} 跳过 ${basename(candidate)}：SHA-256 与清单不一致`);
        continue;
      }
    }
    await copyFile(candidate, target);
    restored += 1;
    done = true;
    console.log(`✓ ${track.id} 恢复 ${(size / 1048576).toFixed(1)} MB  <- ${basename(candidate)}`);
    break;
  }
  if (!done) missing.push(`${track.id} (${track.title})`);
}

if (missing.length) {
  console.error(`\n✗ ${missing.length} 首没有找到真实音频，仍为空占位：`);
  console.error(missing.slice(0, 30).map((item) => `   ${item}`).join('\n'));
  console.error('请把对应文件放回 audio/ 或备份目录后重试。');
  process.exitCode = 1;
}

// Rewrite the manifest so the UI stops treating these tracks as placeholders.
if (restored > 0 || missing.length === 0) {
  const { placeholderCount } = await writeLibrary({
    libraryPath: resolve(root, 'web/js/library.js'),
    audioDirectory,
    tracks: TRACKS
  });
  console.log(`\n清单已更新：${TRACKS.length - placeholderCount}/${TRACKS.length} 首为真实音频。`);
}

const remainingPlaceholders = TRACKS.filter((track) => track.placeholderAudio).length;
console.log(`\n恢复 ${restored} 首，原本就是真实音频 ${alreadyReal} 首。`);
console.log(remainingPlaceholders ? `仍有 ${remainingPlaceholders} 首是空占位。` : '全部曲目已装入真实音频，可以重新构建 APK。');
