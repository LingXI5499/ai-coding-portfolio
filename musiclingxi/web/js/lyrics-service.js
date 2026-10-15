const TIME_TAG = /\[(\d{1,3}):(\d{2})(?:[.:](\d{1,3}))?\]/g;
const INLINE_TIME_TAG = /<(?:\d{1,3}):(\d{2})(?:[.:]\d{1,3})?>/g;
const OFFSET_TAG = /^\[offset:([+-]?\d+)\]$/i;

function timestampToSeconds(minutes, seconds, fraction = '') {
  const decimal = fraction ? Number(`0.${fraction}`) : 0;
  return Number(minutes) * 60 + Number(seconds) + decimal;
}

export function parseLrc(text = '') {
  let offset = 0;
  const rows = [];
  let ordinal = 0;

  for (const rawLine of text.replace(/^\uFEFF/, '').split(/\r?\n/)) {
    const offsetMatch = rawLine.trim().match(OFFSET_TAG);
    if (offsetMatch) {
      offset = Number(offsetMatch[1]) / 1000;
      continue;
    }

    const tags = [...rawLine.matchAll(TIME_TAG)];
    if (!tags.length) continue;
    // Enhanced LRC may contain many <mm:ss.xxx> word tags after the normal
    // line timestamp. We synchronize by line, so keep only readable text.
    const lyricText = rawLine.replace(TIME_TAG, '').replace(INLINE_TIME_TAG, '').trim();
    for (const tag of tags) {
      rows.push({
        time: Math.max(0, timestampToSeconds(tag[1], tag[2], tag[3]) + offset),
        text: lyricText,
        ordinal: ordinal += 1
      });
    }
  }

  return rows.sort((left, right) => left.time - right.time || left.ordinal - right.ordinal)
    .map(({ time, text }) => ({ time, text }));
}

export function findActiveLyricIndex(lines, currentTime) {
  if (!lines.length || !Number.isFinite(currentTime) || currentTime < lines[0].time) return -1;
  let low = 0;
  let high = lines.length - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (lines[middle].time <= currentTime) low = middle + 1;
    else high = middle - 1;
  }
  return high;
}
