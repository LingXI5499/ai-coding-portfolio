import { access, readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { TRACKS } from '../web/js/library.js';

const root = resolve(import.meta.dirname, '..');
const failures = [];
const assert = async (condition, message) => { if (!condition) failures.push(message); };
const exists = async (path) => access(path).then(() => true).catch(() => false);

await assert(new Set(TRACKS.map((track) => track.id)).size === TRACKS.length, '歌曲 ID 必须唯一');
await assert(TRACKS.every((track) => track.title.trim()), '每首歌必须有曲名');
await assert(TRACKS.every((track) => /^\/media\/audio\/track-\d{3}\.(mp3|wav)$/.test(track.audioSrc)), '音频路径格式无效');

for (const track of TRACKS) {
  await assert(await exists(resolve(root, 'web/public', `.${track.audioSrc}`)), `${track.id} 的音频文件缺失`);
}

const html = await readFile(resolve(root, 'web/index.html'), 'utf8');
await assert(html.includes('viewport-fit=cover'), '缺少安全区 viewport 配置');
await assert(html.includes('id="app"'), '缺少应用主容器');
await assert(await exists(resolve(root, 'web/css/app.css')), '缺少主样式文件');
await assert(await exists(resolve(root, 'web/js/app.js')), '缺少应用入口');

// 播放模式（列表循环 / 单曲循环 / 随机播放）必须同时具备纯规则模块、
// 两个适配器和持久化字段，否则 Android 与浏览器预览会出现行为差异。
for (const modulePath of ['web/js/playback-mode.js', 'web/js/playback/mode-session.js']) {
  await assert(await exists(resolve(root, modulePath)), `缺少播放模式模块 ${modulePath}`);
}
const css = await readFile(resolve(root, 'web/css/app.css'), 'utf8');
const appSource = await readFile(resolve(root, 'web/js/app.js'), 'utf8');

// 播放页底部是一行五键：模式 / 上一首 / 播放暂停 / 下一首 / 播放列表。
for (const token of ['main-controls', 'cycle-playback-mode', 'open-queue', 'queue-sheet']) {
  await assert(appSource.includes(token), `播放页缺少 ${token}`);
}
await assert(css.includes('.main-controls') && css.includes('.queue-sheet'), '缺少五按键或播放列表样式');
for (const field of ['repeatMode', 'shuffle', 'theme']) {
  await assert(appSource.includes(`${field}:`), `UI 状态字段 ${field} 未纳入状态`);
}
await assert(await exists(resolve(root, 'web/js/ui-state.js')), '缺少 UI 状态纯函数模块 web/js/ui-state.js');
await assert(!appSource.includes("data-action=\"toggle-shuffle\""), '不再使用独立的随机按钮，改为单按钮三态循环');
await assert(!/setLoop\(\{\s*loop:\s*true/.test(await readFile(resolve(root, 'web/js/playback/native-playlist-adapter.js'), 'utf8')),
  '原生适配器不应开启插件自身的循环，循环由播放模式模块决定');

// 资源一致性按清单逐首校验，而不是数目录条目：媒体目录里还有 .gitignore 等辅助文件。
const audioEntries = await readdir(resolve(root, 'web/public/media/audio'));
const bundledAudio = new Set(audioEntries.filter((name) => /\.(mp3|wav|m4a|aac|ogg|flac)$/i.test(name)));
for (const track of TRACKS) {
  const name = track.audioSrc.split('/').pop();
  await assert(bundledAudio.has(name), `媒体目录缺少 ${name}`);
}
await assert(bundledAudio.size === TRACKS.length,
  `媒体目录音频数量与清单不一致：目录 ${bundledAudio.size} 首，清单 ${TRACKS.length} 首`);

// 公开仓库里每首歌的音频都是空占位文件，清单必须如实标记，UI 才能显示“暂无音频”
// 而不是报播放错误。
const placeholderCount = TRACKS.filter((track) => track.placeholderAudio).length;
await assert(placeholderCount === TRACKS.length || placeholderCount === 0,
  `占位标记不一致：${placeholderCount}/${TRACKS.length} 首标记为空占位`);
const appHasPlaceholderNotice = appSource.includes('placeholderAudio');
await assert(appHasPlaceholderNotice, 'UI 未处理空占位音频的提示');

if (failures.length) {
  console.error(failures.map((failure) => `✗ ${failure}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`✓ 项目资源检查通过：${TRACKS.length} 首歌曲`);
}
