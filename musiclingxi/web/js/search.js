export function normalizeTitle(value = '') {
  return value.toLocaleLowerCase('zh-CN').trim().replace(/[\s\-_·•]/g, '');
}

export function filterTracksByTitle(tracks, query) {
  const normalizedQuery = normalizeTitle(query);
  if (!normalizedQuery) return tracks;
  return tracks.filter((track) => normalizeTitle(track.title).includes(normalizedQuery));
}
