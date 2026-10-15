// Placeholder media policy.
//
// The published repository must not contain copyrighted audio or lyrics. Local music is
// ingested by `scripts/ingest-media.mjs` (`npm run media:ingest`), which keeps the real
// files locally and the real metadata in the git-ignored `media-metadata.local.json`.
//
// The committed placeholder for each track is an **empty file**: it satisfies the
// manifest, the resource checks and the build, while carrying no audio content at all.
// No placeholder lyrics are shipped; the player already degrades to “暂无歌词”.
export const PLACEHOLDER_AUDIO_BYTES = 0;

/** The exact bytes written for a bundled placeholder track. */
export function placeholderAudioBuffer() {
  return Buffer.alloc(PLACEHOLDER_AUDIO_BYTES);
}
