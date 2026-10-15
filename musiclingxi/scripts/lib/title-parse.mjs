// Song title extraction for the ingest pipeline.
//
// Local filenames carry a leading index ("010.买辣椒也用券 - 起风了.mp3", "072 老男孩 筷子兄弟.mp3").
// Only the song name and the artist are kept; the index is dropped.
//
// Two filename conventions exist locally:
//   "张杰 - 夜空中最亮的星.wav"      (artist first, spaced dash)
//   "青花瓷-周杰伦.mp3"              (title first, tight dash)
// Direction is decided against the explicit artist list below plus the spaced-dash rule.
// Nothing is guessed: when neither side is a known artist only the title is produced,
// so a real song name can never be swapped with a real artist name.

/**
 * Strips a leading track index such as "010." / "072 " / "0074." / "01. ".
 * The pattern requires digits followed by a separator or whitespace, so a title that
 * legitimately starts with a digit ("3D素颜 许嵩") is not mangled into "D素颜 许嵩".
 */
export function stripTrackIndex(stem) {
  return stem
    .replace(/^\s*\d{1,4}\s*[.\-_)]\s*/u, '')
    .replace(/^\s*\d{1,4}\s+/u, '')
    .replace(/[\s\-–—_]+$/u, '')
    .trim();
}

/** Splits on a dash. A spaced dash always separates; a tight dash only when unambiguous. */
export function splitOnDash(text) {
  // Collapse runs of dashes ("一场游戏一场梦--王杰") into one spaced separator first, so
  // the left side never keeps a dangling hyphen.
  const normalized = text.replace(/\s*[-–—]{2,}\s*/gu, ' - ');
  const spaced = normalized.match(/^(.+?)\s*[-–—]\s+(.+)$/u);
  if (spaced) return { parts: [spaced[1].trim(), spaced[2].trim()], spaced: true };
  const tight = normalized.lastIndexOf('-');
  if (tight > 0) {
    return { parts: [normalized.slice(0, tight).trim(), normalized.slice(tight + 1).trim()], spaced: false };
  }
  return { parts: [normalized.trim(), ''], spaced: false };
}

/** Performer names that appear across this catalog; used to resolve the filename direction. */
export const KNOWN_ARTISTS = Object.freeze([
  '买辣椒也用券', '于果', '王杰', '胡彦斌', '周杰伦', '周深', '王菲', '张杰', '林俊杰',
  '薛之谦', '李荣浩', '许嵩', '邓紫棋', 'G.E.M. 邓紫棋', 'G.E.M.邓紫棋', 'G.E.M.',
  '单依纯', '陈粒', '陈雪凝', '蓝心羽', '海伦', '隔壁老樊', '戴羽彤', '容祖儿',
  '刘若英', '李玉刚', '赵传', '焦迈奇', '苏星婕', '鹿晗', '王心凌',
  '李润祺', '葛东琪', '雪二', '是七叔呢', '等什么君', '兔裹煎蛋卷', '时光胶囊', '张碧晨',
  '吉星出租', '小阿七', 'DP龙猪', '阿水', 'Rays', 'GooGoo', '王之睿', '奇幻音乐',
  // Appear concatenated inside filenames such as "072 老男孩 筷子兄弟.mp3".
  '筷子兄弟', '来一碗老于', '信乐团', '李春波', '赵雷', '小乐哥', '李荣浩'
]);

/** Suffixes that describe a release rather than the song itself. */
const VERSION_SUFFIX = /[（(\[【][^）)\]】]*(live|版|remix|cover|伴奏|纯音乐|无损|高清|玄音)[^）)\]】]*[）)\]】]/giu;

/**
 * Removes remaster/version markers from a parsed title: "夏天的风【玄音高端无损】" -> "夏天的风".
 * The original title is kept on the record; this is only used to look the track up.
 */
export function stripVersionSuffix(title) {
  return String(title).replace(VERSION_SUFFIX, '').replace(/\s+/gu, ' ').trim();
}

const normalizeArtist = (value) => value
  .replace(/[（(].*$/u, '')
  .replace(/[;；,，、_]/gu, ';')
  .replace(/;+/gu, ';')
  .replace(/^;|;$/gu, '')
  .trim();

/**
 * True when every part of `value` is a listed performer, so the side can be treated as
 * the artist rather than the song title.
 */
export function isKnownArtist(value, artists = KNOWN_ARTISTS) {
  const parts = String(value)
    .split(/[;；,，、_]/u)
    .map((part) => part.replace(/[（(].*$/u, '').trim())
    .filter(Boolean);
  if (!parts.length) return false;
  return parts.every((part) => artists.some((artist) => artist.toLowerCase() === part.toLowerCase()));
}

/**
 * Splits a trailing performer off a title: "老男孩 筷子兄弟" -> { title: "老男孩", artist: "筷子兄弟" }.
 * Only for filenames that glue the artist to the end with no dash at all, and only when
 * nothing that could start the title follows the last space — that guard is what keeps
 * "3D素颜 许嵩" intact instead of splitting it into "3D素颜" and "许嵩".
 */
export function splitTrailingArtist(text, artists = KNOWN_ARTISTS) {
  for (const artist of [...artists].sort((left, right) => right.length - left.length)) {
    if (text.length <= artist.length + 1) continue;
    if (!text.endsWith(artist)) continue;
    const head = text.slice(0, text.length - artist.length);
    if (!head) continue;
    // Reject when the part before the artist's own last space could be the real title,
    // e.g. "3D素颜 许嵩" (the artist is the final whitespace-separated word) — there the
    // whole string is a single title whose artist was simply never recorded.
    const trimmedHead = head.replace(/[\s\-–—_]+$/u, '').trim();
    if (!/[ \u3000]/u.test(artist) && /[ \u3000]/u.test(trimmedHead)) continue;
    if (trimmedHead.length < 2) continue;
    return { title: trimmedHead, artist };
  }
  return null;
}

/**
 * Returns `{ title, artist }` for a local audio filename, NFC-normalized.
 * `artist` stays empty when the direction cannot be established without guessing.
 */
export function parseTrackTitle(filename, artists = KNOWN_ARTISTS) {
  const stem = String(filename).replace(/\.[^.]+$/u, '').trim();
  const withoutIndex = stripTrackIndex(stem);
  const { parts, spaced } = splitOnDash(withoutIndex);
  const [left, right] = parts;
  if (!right) {
    // No dash: the performer may still be glued to the end of the title.
    const trailing = splitTrailingArtist(withoutIndex, artists);
    if (trailing) {
      return { title: trailing.title.normalize('NFC'), artist: trailing.artist.normalize('NFC') };
    }
    return { title: withoutIndex.normalize('NFC'), artist: '' };
  }

  const leftIsArtist = isKnownArtist(left, artists);
  const rightIsArtist = isKnownArtist(right, artists);
  // A spaced dash with a known artist on the left ("张杰 - 夜空中最亮的星") is the
  // convention that carries the artist first; a tight dash usually carries it last
  // ("青花瓷-周杰伦"). Known-artist checks win over the dash shape.
  if (leftIsArtist && !rightIsArtist) return { title: right.normalize('NFC'), artist: normalizeArtist(left).normalize('NFC') };
  if (rightIsArtist && !leftIsArtist) return { title: left.normalize('NFC'), artist: normalizeArtist(right).normalize('NFC') };
  if (spaced && !leftIsArtist && !rightIsArtist) {
    // Unknown pair with a spaced dash: the left side is the artist in this catalog
    // ("小阿七" style names), so keep both rather than dropping the performer.
    return { title: right.normalize('NFC'), artist: normalizeArtist(left).normalize('NFC') };
  }
  // "张碧晨-年轮" style: neither side is listed, but the artist is the leading run of
  // characters. Left as a title so no real name is invented.
  return { title: withoutIndex.normalize('NFC'), artist: '' };
}

/** "张杰 - 夜空中最亮的星(live版) .wav" -> "夜空中最亮的星(live版) - 张杰" */
export function displayName(filename, artists = KNOWN_ARTISTS) {
  const { title, artist } = parseTrackTitle(filename, artists);
  return artist ? `${title} - ${artist}` : title;
}
