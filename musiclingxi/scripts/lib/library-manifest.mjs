// Generates `web/js/library.js`, the single source of truth for the bundled track list.
//
// Two on-disk forms exist and the manifest must always describe the one that is really
// there, otherwise the UI reports the wrong thing (a zero-byte file marked as playable
// shows a playback error instead of “暂无音频”):
//
//   publishable form — audio files are zero-byte placeholders, flags are true
//   local form       — real audio is in place, flags are false
//
// `npm run media:placeholder` and `npm run media:restore` both go through this module, so
// the flags can never drift away from the actual files.
import { existsSync } from 'node:fs';
import { stat, writeFile } from 'node:fs/promises';
import { basename, join } from 'node:path';

const single = (value) => `'${String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

/** True when the bundled audio file is missing or empty. */
export async function isPlaceholderAudio(audioDirectory, file) {
  const bundled = join(audioDirectory, file);
  if (!existsSync(bundled)) return true;
  return (await stat(bundled)).size === 0;
}

/**
 * Accepts either ingest metadata (`{ file }`) or already-built manifest entries
 * (`{ audioSrc }`), so every script can call this with whatever it has at hand.
 */
function bundledFileOf(track) {
  if (track.file) return track.file;
  if (track.audioSrc) return basename(track.audioSrc);
  throw new Error(`曲目 ${track.id ?? '?'} 缺少 file / audioSrc，无法定位音频文件`);
}

/**
 * Writes the manifest from the ingest metadata, deriving `placeholderAudio` from the
 * files that are actually on disk.
 */
export async function writeLibrary({ libraryPath, audioDirectory, tracks }) {
  const rows = [];
  let placeholderCount = 0;
  for (const track of [...tracks].sort((left, right) => left.id.localeCompare(right.id))) {
    const file = bundledFileOf(track);
    const placeholder = await isPlaceholderAudio(audioDirectory, file);
    if (placeholder) placeholderCount += 1;
    // Real song name and artist only — the leading filename index is never published.
    rows.push(`  { id: ${single(track.id)}, title: ${single(track.title ?? '')}, artist: ${single(track.artist ?? '')}, audioSrc: ${single(`/media/audio/${file}`)}, lyricsSrc: ${single(`/media/lyrics/${track.id}.lrc`)}, durationHint: ${track.durationHint}, placeholderAudio: ${placeholder} }`);
  }

  const source = `// The single source of truth for the bundled track list.
//
// Generated — do not edit by hand.
//   npm run media:ingest       scan audio/ and rebuild this list from real files
//   npm run media:restore      put the real audio back and clear the placeholder flags
//   npm run media:placeholder  write zero-byte placeholders and set the flags
//
// Titles and artists are shown as "歌名 - 歌手"; the numeric filename index is dropped.
// \`placeholderAudio: true\` means the bundled file is empty, which is how the published
// repository ships every track; the UI then shows “暂无音频” instead of a playback error.
export const TRACKS = Object.freeze([
${rows.join(',\n')}
]);

export const getTrack = (id) => TRACKS.find((track) => track.id === id) ?? null;
export const getTrackIndex = (id) => TRACKS.findIndex((track) => track.id === id);

export function getAdjacentTrack(id, direction) {
  const index = getTrackIndex(id);
  const nextIndex = index + direction;
  return index < 0 || nextIndex < 0 || nextIndex >= TRACKS.length ? null : TRACKS[nextIndex];
}
`;
  await writeFile(libraryPath, source, 'utf8');
  return { total: tracks.length, placeholderCount };
}
