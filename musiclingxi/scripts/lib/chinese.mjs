// Converts lyric text to Simplified Chinese.
//
// LRCLIB entries are frequently Traditional (演員 / 頭髮 / 著急). Two passes are used:
// `t→cn` first because it is the only preset that maps both 頭髮→头发 and 著急→着急, then
// `tw→cn` for Taiwan-specific wording. Both passes are idempotent, so already-Simplified
// text is left untouched.
import OpenCC from 'opencc-js';

const traditionalToSimplified = OpenCC.Converter({ from: 't', to: 'cn' });
const taiwanToMainland = OpenCC.Converter({ from: 'tw', to: 'cn' });

export function toSimplified(text) {
  if (!text) return '';
  return taiwanToMainland(traditionalToSimplified(text));
}

// Characters whose Simplified form differs; used only to report whether a file needed
// conversion, never to rewrite anything by hand.
const TRADITIONAL_MARKERS = '們個為這來時說會後點裡還開關門東車長風雲應該無與藝術認識語讀寫學覺愛戀夢鬱變讓對龍鳳華麗豐寧靜層歸屬頭髮著';
const TRADITIONAL_SET = new Set([...TRADITIONAL_MARKERS]);

/** True when the text still looks Traditional after conversion (should be false). */
export function looksTraditional(text) {
  return [...String(text)].some((char) => TRADITIONAL_SET.has(char));
}
