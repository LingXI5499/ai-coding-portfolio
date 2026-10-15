// Acquires synchronised lyrics for the local catalog from LRCLIB and converts them to
// Simplified Chinese.
//
//   npm run lyrics:fetch                  # all tracks that still have no lyrics
//   npm run lyrics:fetch -- --force        # refetch and overwrite existing files
//   npm run lyrics:fetch -- track-001 track-002
//
// What it does per track:
//   1. query LRCLIB (client header + 350ms rate limit + 3 retries with backoff)
//   2. keep only candidates whose normalised track name equals the local title and whose
//      duration is within 5s of the local audio — this is what prevents live/cover/remix
//      versions from being mixed up
//   3. convert the lyric body to Simplified Chinese (opencc-js)
//   4. write `web/public/media/lyrics/track-NNN.lrc` (UTF-8, no BOM, LF)
//   5. record provenance in `lyrics-report.json`
//
// Lyrics are copyrighted: they are written to the git-ignored media directory and must
// never be committed. `lyrics-report.json` records only provenance and timings, never the
// lyric body.
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { basename, resolve } from 'node:path';
import { TRACKS } from '../web/js/library.js';
import { looksTraditional, toSimplified } from './lib/chinese.mjs';
import { probeMediaDuration } from './lib/media-duration.mjs';
import { stripVersionSuffix } from './lib/title-parse.mjs';

const root = resolve(import.meta.dirname, '..');
const lyricsDirectory = resolve(root, 'web/public/media/lyrics');
const audioDirectory = resolve(root, 'web/public/media/audio');
const metadataPath = resolve(root, 'media-metadata.local.json');
const reportPath = resolve(root, 'lyrics-report.json');

const API = 'https://lrclib.net/api';
const CLIENT = 'MusicLingXi/1.0 (personal offline player)';
const DURATION_TOLERANCE = 5;
const REQUEST_INTERVAL_MS = 350;

const args = process.argv.slice(2);
const force = args.includes('--force');
const quiet = args.includes('--quiet');
const requested = args.filter((argument) => !argument.startsWith('--'));

const normalize = (value = '') => String(value)
  .toLocaleLowerCase('zh-CN')
  .replace(/[\s\-_·•()[\]【】]/gu, '');

const sleep = (ms) => new Promise((resolveWait) => setTimeout(resolveWait, ms));

/** A file:// HEAD request is not available on device; the real duration is measured. */
async function localDuration(track) {
  const file = resolve(audioDirectory, basename(track.audioSrc));
  if (existsSync(file)) {
    const size = (await stat(file)).size;
    if (size > 0) {
      const { seconds } = await probeMediaDuration(file);
      if (seconds > 1) return { seconds, source: 'measured' };
    }
  }
  return { seconds: track.durationHint, source: 'manifest' };
}

async function request(path) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(`${API}${path}`, { headers: { 'Lrclib-Client': CLIENT } });
      if (response.status === 404) return [];
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      return Array.isArray(payload) ? payload : [payload];
    } catch (error) {
      lastError = error;
      await sleep(600 * attempt);
    }
  }
  throw lastError;
}

/** Strips version/remaster markers so "(Live)" and "【无损】" releases can still match. */
function baseTitle(title) {
  const stripped = stripVersionSuffix(title);
  return stripped || String(title);
}

async function findLyrics(track) {
  const duration = await localDuration(track);
  const bare = baseTitle(track.title);
  // The bare title is tried last but matched against either title form, so a track stored
  // as "夏天的风【玄音高端无损】" still finds the plain "夏天的风" entry.
  const queries = [
    [track.title, track.artist].filter(Boolean).join(' '),
    bare,
    [bare, track.artist].filter(Boolean).join(' ')
  ].filter((query, index, list) => query && list.indexOf(query) === index);

  const accepted = new Set([normalize(track.title), normalize(bare)]);
  const attempts = [];
  for (const query of queries) {
    const candidates = await request(`/search?q=${encodeURIComponent(query)}`);
    await sleep(REQUEST_INTERVAL_MS);
    const graded = candidates
      .filter((candidate) => candidate.syncedLyrics)
      .filter((candidate) => accepted.has(normalize(candidate.trackName)) || accepted.has(normalize(baseTitle(candidate.trackName))))
      .map((candidate) => ({ ...candidate, delta: Math.abs(Number(candidate.duration) - duration.seconds) }))
      .sort((left, right) => left.delta - right.delta);
    attempts.push({ query, candidateCount: candidates.length, matchedCount: graded.length });
    const best = graded[0];
    if (best && best.delta <= DURATION_TOLERANCE) {
      return { duration, candidate: best, attempts, queries };
    }
    if (best) attempts[attempts.length - 1].bestDelta = Number(best.delta.toFixed(1));
  }
  return { duration, candidate: null, attempts, queries };
}

/** Normalises line endings and reports trailing lines that run past the audio. */
function cleanLyrics(text, durationSeconds) {
  const lines = String(text)
    .replace(/^\uFEFF/, '')
    .replace(/\r\n?/g, '\n')
    // Enhanced LRC carries per-word <mm:ss.xxx> tags; the player only highlights whole
    // lines, so the enhanced form is stripped to keep the stored file readable.
    .replace(/<\d{1,3}:\d{2}(?:[.:]\d{1,3})?>/g, '')
    .split('\n');
  const timeTag = /\[(\d{1,3}):(\d{2})(?:[.:](\d{1,3}))?\]/g;
  let overflowLines = 0;
  let emptyTimedLines = 0;
  const kept = [];
  for (const line of lines) {
    const tags = [...line.matchAll(timeTag)];
    if (!tags.length) { kept.push(line); continue; }
    const last = tags[tags.length - 1];
    const seconds = Number(last[1]) * 60 + Number(last[2]) + (last[3] ? Number(`0.${last[3]}`) : 0);
    if (seconds > durationSeconds + DURATION_TOLERANCE) { overflowLines += 1; continue; }
    const body = line.replace(timeTag, '').trim();
    if (!body) emptyTimedLines += 1;
    kept.push(line.replace(/[ \t]+$/u, ''));
  }
  return { text: `${kept.join('\n').replace(/\n+$/u, '')}\n`, overflowLines, emptyTimedLines };
}

await mkdir(lyricsDirectory, { recursive: true });

const metadata = existsSync(metadataPath)
  ? JSON.parse(await readFile(metadataPath, 'utf8'))
  : { tracks: [] };
const byId = new Map(metadata.tracks.map((track) => [track.id, track]));

const targets = requested.length ? TRACKS.filter((track) => requested.includes(track.id)) : TRACKS;
const results = [];

for (const track of targets) {
  const file = resolve(lyricsDirectory, `${track.id}.lrc`);
  if (!force && existsSync(file) && (await stat(file)).size > 0) {
    results.push({ id: track.id, title: track.title, status: 'skipped-existing' });
    if (!quiet) console.log(`- ${track.id} ${track.title}：已有歌词，跳过`);
    continue;
  }

  let outcome;
  try {
    outcome = await findLyrics(track);
  } catch (error) {
    results.push({ id: track.id, title: track.title, status: 'error', reason: error.message });
    console.log(`✗ ${track.id} ${track.title}：请求失败 ${error.message}`);
    continue;
  }

  if (!outcome.candidate) {
    const best = outcome.attempts.find((attempt) => attempt.bestDelta !== undefined);
    results.push({
      id: track.id,
      title: track.title,
      status: 'missing',
      duration: Math.round(outcome.duration.seconds),
      bestDelta: best?.bestDelta ?? null,
      attempts: outcome.attempts
    });
    console.log(`✗ ${track.id} ${track.title}：无可靠候选${best ? `（最接近差 ${best.bestDelta}s）` : ''}`);
    continue;
  }

  const candidate = outcome.candidate;
  const simplified = toSimplified(candidate.syncedLyrics);
  const { text, overflowLines, emptyTimedLines } = cleanLyrics(simplified, outcome.duration.seconds);
  await writeFile(file, text, 'utf8');

  const record = {
    id: track.id,
    title: track.title,
    status: overflowLines ? 'needs-review' : 'verified',
    source: 'lrclib',
    candidateId: candidate.id,
    candidateName: candidate.trackName,
    candidateArtist: candidate.artistName,
    durationDelta: Number(candidate.delta.toFixed(2)),
    localDuration: Number(outcome.duration.seconds.toFixed(2)),
    durationSource: outcome.duration.source,
    converted: looksTraditional(candidate.syncedLyrics),
    overflowLines,
    emptyTimedLines,
    lineCount: text.split('\n').filter(Boolean).length
  };
  results.push(record);

  const byIdRecord = byId.get(track.id);
  if (byIdRecord) {
    byIdRecord.lyrics = { source: 'lrclib', candidateId: candidate.id, status: record.status, durationDelta: record.durationDelta };
  }

  console.log(`✓ ${track.id} ${track.title}：${record.lineCount} 行，时长差 ${record.durationDelta}s${record.converted ? '，已转简体' : ''}${overflowLines ? `，裁剪 ${overflowLines} 行越界时间戳` : ''}`);
}

if (metadata.tracks.length) {
  await writeFile(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8');
}

const tally = results.reduce((acc, item) => { acc[item.status] = (acc[item.status] ?? 0) + 1; return acc; }, {});
await writeFile(reportPath, `${JSON.stringify({
  generatedAt: new Date().toISOString(),
  source: 'lrclib',
  note: '只记录来源与时间轴信息，不含歌词正文。',
  tally,
  tracks: results
}, null, 2)}\n`, 'utf8');

console.log('\n=== 统计 ===');
for (const [status, count] of Object.entries(tally)) console.log(`  ${status.padEnd(18)} ${count}`);
const unresolved = results.filter((item) => item.status === 'missing' || item.status === 'error');
if (unresolved.length) {
  console.log(`\n=== 未取得歌词（${unresolved.length} 首）===`);
  for (const item of unresolved) console.log(`  ${item.id} ${item.title}${item.reason ? ` — ${item.reason}` : item.bestDelta ? ` — 最接近差 ${item.bestDelta}s` : ''}`);
}
console.log(`\n报告：${reportPath}（已被 .gitignore 排除）`);
console.log('歌词只保存在本机，请勿提交到 Git。');
