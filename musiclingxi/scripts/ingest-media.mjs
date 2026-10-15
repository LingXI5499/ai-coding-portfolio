// Ingests local music into the project.
//
//   node scripts/ingest-media.mjs                 # ingest everything new
//   node scripts/ingest-media.mjs --source <dir>  # ingest from another folder
//
// For every audio file under the source directory (default `audio/` in the project
// root) that is not yet part of the bundle, this script:
//   1. probes its real duration (scripts/lib/media-duration.mjs, no ffprobe needed)
//   2. copies it into `web/public/media/audio/track-NNN.<ext>` with a stable ID
//   3. writes a placeholder LRC so `npm run lyrics:check` stays meaningful
//   4. records the source path, SHA-256, real title/artist and duration in
//      `media-metadata.local.json`
//   5. keeps a copy of the untouched original in the backup directory
//
// `web/js/library.js` is rewritten from that metadata. The published repository only
// ever sees the generic placeholder titles; the real titles live in the git-ignored
// `media-metadata.local.json` so the app is usable locally without publishing
// copyrighted metadata.
//
// Nothing in this script adds copyrighted audio or lyrics to Git: the bundle uses the
// same ignore rules as `npm run media:placeholder`.
import { copyFile, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { basename, extname, join, resolve } from 'node:path';
import { probeMediaDuration } from './lib/media-duration.mjs';
import { parseTrackTitle } from './lib/title-parse.mjs';
import { writeLibrary as writeLibraryManifest } from './lib/library-manifest.mjs';

const root = resolve(import.meta.dirname, '..');
const audioDirectory = resolve(root, 'web/public/media/audio');
const lyricsDirectory = resolve(root, 'web/public/media/lyrics');
const metadataPath = resolve(root, 'media-metadata.local.json');
const libraryPath = resolve(root, 'web/js/library.js');

const SUPPORTED = new Set(['.mp3', '.wav', '.m4a', '.aac', '.ogg', '.flac']);
const args = process.argv.slice(2);
const quiet = args.includes('--quiet');
const refreshTitles = args.includes('--refresh-titles');
const writePlaceholders = args.includes('--placeholders');
const sourceIndex = args.indexOf('--source');
const sourceDirectory = resolve(sourceIndex >= 0 ? args[sourceIndex + 1] : join(root, 'audio'));
const backupDirectory = resolve(root, '..', 'Music-private-assets', 'audio');
const backupMetadataPath = resolve(root, '..', 'Music-private-assets', 'media-metadata.local.json');

/** "010.买辣椒也用券 - 起风了.mp3" -> { title, artist } */
function guessTitleArtist(filename) {
  return parseTrackTitle(filename);
}

async function listAudioFiles(directory) {
  if (!existsSync(directory)) return [];
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await listAudioFiles(full));
    else if (SUPPORTED.has(extname(entry.name).toLowerCase())) files.push(full);
  }
  return files.sort();
}

const sha256 = async (filePath) => createHash('sha256').update(await readFile(filePath)).digest('hex');

const metadata = existsSync(metadataPath) ? JSON.parse(await readFile(metadataPath, 'utf8')) : { tracks: [] };
const knownHashes = new Set(metadata.tracks.map((track) => track.sha256));
const knownNames = new Set(metadata.tracks.map((track) => track.file));
const highestId = metadata.tracks.reduce((max, track) => Math.max(max, Number(track.id.replace('track-', '')) || 0), 0);

await mkdir(audioDirectory, { recursive: true });
await mkdir(lyricsDirectory, { recursive: true });
await mkdir(backupDirectory, { recursive: true });

// ── Mode: refresh titles in place ─────────────────────────────────────────────
// Recomputes `title`/`artist` from the recorded source filename without touching the
// bundled audio, durations or hashes.
if (refreshTitles) {
  let changed = 0;
  for (const track of metadata.tracks) {
    const parsed = guessTitleArtist(track.sourceName ?? track.file);
    if (parsed.title !== track.title || parsed.artist !== track.artist) {
      if (!quiet) console.log(`  ${track.id}  ${JSON.stringify(track.title)} -> ${JSON.stringify(parsed.title)}${parsed.artist ? ` (歌手 ${parsed.artist})` : ''}`);
      track.title = parsed.title;
      track.artist = parsed.artist;
      changed += 1;
    }
  }
  await writeFile(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8');
  await writeFile(backupMetadataPath, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8');
  await writeLibrary();
  console.log(`\n已刷新 ${changed} / ${metadata.tracks.length} 首曲名；剩余 ${metadata.tracks.filter((track) => !track.artist).length} 首未识别歌手。`);
  process.exit();
}
// ── Mode: write zero-byte audio placeholders ──────────────────────────────────
// The published repository only needs an empty file per track. Never overwrite a real
// audio file: every bundled file must match the SHA-256 recorded at ingest time.
if (writePlaceholders) {
  let written = 0;
  let realKept = 0;
  for (const track of metadata.tracks) {
    const bundled = join(audioDirectory, track.file);
    const current = existsSync(bundled) ? await sha256(bundled) : null;
    if (current && current !== track.sha256) {
      realKept += 1;
      continue; // a real file is in place; leave it alone
    }
    if (current === track.sha256) realKept += 1;
    await writeFile(bundled, Buffer.alloc(0));
    written += 1;
  }
  console.log(`已写入 ${written} 个空占位音频；保留真实音频 ${realKept} 个。`);
  console.log('注意：占位音频是可提交的空文件；真实音频请用 npm run media:ingest 重新写入。');
  process.exit();
}

const sourceFiles = await listAudioFiles(sourceDirectory);
console.log(`源目录: ${sourceDirectory}`);
console.log(`发现音频: ${sourceFiles.length} 个；清单中已有 ${metadata.tracks.length} 首\n`);

let nextId = highestId;
let added = 0;
let skipped = 0;

for (const file of sourceFiles) {
  const name = basename(file);
  const hash = await sha256(file);
  if (knownHashes.has(hash) || knownNames.has(name)) {
    skipped += 1;
    continue;
  }

  nextId += 1;
  const id = `track-${String(nextId).padStart(3, '0')}`;
  const extension = extname(name).toLowerCase();
  const bundleName = `${id}${extension}`;
  const { seconds, method } = await probeMediaDuration(file);
  const durationHint = Math.max(1, Math.round(seconds));
  const { artist, title } = guessTitleArtist(name);

  await copyFile(file, join(audioDirectory, bundleName));
  await copyFile(file, join(backupDirectory, bundleName));

  metadata.tracks.push({
    id,
    file: bundleName,
    sourceName: name,
    sha256: hash,
    bytes: (await stat(file)).size,
    title,
    artist,
    durationHint,
    durationMethod: method,
    lyrics: null
  });

  added += 1;
  console.log(`✓ ${id}  ${String(durationHint).padStart(4)}s  ${method.padEnd(18)}  ${title}${artist ? ` - ${artist}` : ''}`);
}

if (!added) {
  console.log('没有新增音频，未做改动。');
} else {
  await writeFile(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8');
  await writeFile(backupMetadataPath, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8');
  await writeLibrary();
  console.log(`\n新增 ${added} 首，跳过 ${skipped} 首；共 ${metadata.tracks.length} 首。`);
  console.log(`真实元数据: ${metadataPath}（已被 .gitignore 排除）`);
}

// The library carries the real song names for the local build; the published repository
// never receives them because `media-metadata.local.json` is git-ignored and the
// committed `web/public/media/audio` holds empty placeholders only.
async function writeLibrary() {
  const { placeholderCount } = await writeLibraryManifest({
    libraryPath,
    audioDirectory,
    tracks: metadata.tracks
  });
  if (!quiet) console.log(`清单已写入：${metadata.tracks.length - placeholderCount} 首真实音频，${placeholderCount} 首空占位。`);
}