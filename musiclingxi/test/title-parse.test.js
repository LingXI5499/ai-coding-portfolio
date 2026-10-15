import test from 'node:test';
import assert from 'node:assert/strict';
import { displayName, parseTrackTitle, splitOnDash, stripTrackIndex, stripVersionSuffix } from '../scripts/lib/title-parse.mjs';

test('去掉文件名前的序号', () => {
  assert.equal(stripTrackIndex('010.买辣椒也用券 - 起风了'), '买辣椒也用券 - 起风了');
  assert.equal(stripTrackIndex('072 老男孩 筷子兄弟'), '老男孩 筷子兄弟');
  assert.equal(stripTrackIndex('0074.海伦 - 游京'), '海伦 - 游京');
  assert.equal(stripTrackIndex('01. 步步'), '步步');
  assert.equal(stripTrackIndex('013.一场游戏一场梦--王杰'), '一场游戏一场梦--王杰');
});

test('序号剥离不会吃掉以数字开头的歌名', () => {
  // 关键回归：旧规则把 "3D素颜 许嵩" 误读成 "D素颜 许嵩"。
  assert.equal(stripTrackIndex('3D素颜 许嵩'), '3D素颜 许嵩');
  // 歌手名粘在歌名末尾时会被切开，但数字前缀必须完整保留。
  assert.deepEqual(parseTrackTitle('3D素颜 许嵩.mp3'), { title: '3D素颜', artist: '许嵩' });
  assert.equal(parseTrackTitle('3D素颜.mp3').title, '3D素颜');
  assert.equal(stripTrackIndex('2046'), '2046', '纯数字文件名不应被清空');
});

test('按横线方向拆出歌名与歌手', () => {
  // 歌手在前（空格横线）
  assert.deepEqual(parseTrackTitle('张杰 - 夜空中最亮的星(live版) .wav'), {
    title: '夜空中最亮的星(live版)',
    artist: '张杰'
  });
  assert.deepEqual(parseTrackTitle('薛之谦 - 演员.mp3'), { title: '演员', artist: '薛之谦' });
  // 歌手在后（紧凑横线）
  assert.deepEqual(parseTrackTitle('034.青花瓷-周杰伦.mp3'), { title: '青花瓷', artist: '周杰伦' });
  assert.deepEqual(parseTrackTitle('0464.蓝心羽-寂寞烟火.mp3'), { title: '寂寞烟火', artist: '蓝心羽' });
});

test('多位歌手用分号或顿号连接', () => {
  assert.deepEqual(parseTrackTitle('林俊杰;G.E.M. 邓紫棋 - 手心的蔷薇.mp3'), {
    title: '手心的蔷薇',
    artist: '林俊杰;G.E.M. 邓紫棋'
  });
});

test('无法确定方向时只返回歌名，不猜歌手', () => {
  // 只有歌名、没有任何歌手线索：整串保留，绝不拆半个人名。
  assert.deepEqual(parseTrackTitle('十年.mp3'), { title: '十年', artist: '' });
  assert.deepEqual(parseTrackTitle('057.死了都要爱.mp3'), { title: '死了都要爱', artist: '' });
});

test('空格横线始终按「歌手 - 歌名」处理，即使歌手名里还有横线', () => {
  assert.deepEqual(parseTrackTitle('奇幻音乐-戴羽彤 - 红色高跟鞋.mp3'), { title: '红色高跟鞋', artist: '奇幻音乐-戴羽彤' });
  assert.deepEqual(parseTrackTitle('从前说 - 小阿七.mp3'), { title: '从前说', artist: '小阿七' });
});

test('名单内的歌手出现在横线任一侧都能拆开', () => {
  assert.deepEqual(parseTrackTitle('张碧晨-年轮.mp3'), { title: '年轮', artist: '张碧晨' });
  assert.deepEqual(parseTrackTitle('老男孩 筷子兄弟.mp3'), { title: '老男孩', artist: '筷子兄弟' });
});

test('歌手名紧贴在歌名末尾时切开', () => {
  assert.deepEqual(parseTrackTitle('072 老男孩 筷子兄弟.mp3'), { title: '老男孩', artist: '筷子兄弟' });
  assert.deepEqual(parseTrackTitle('288 我的名字 焦迈奇.mp3'), { title: '我的名字', artist: '焦迈奇' });
  assert.deepEqual(parseTrackTitle('0288.来一碗老于-解药.mp3'), { title: '解药', artist: '来一碗老于' });
});

test('去掉版本后缀用于检索', () => {
  assert.equal(stripVersionSuffix('夏天的风【玄音高端无损】'), '夏天的风');
  assert.equal(stripVersionSuffix('Angel(live版)'), 'Angel');
  assert.equal(stripVersionSuffix('慢冷 (Live)'), '慢冷');
  assert.equal(stripVersionSuffix('起风了'), '起风了');
});

test('空格横线分隔的未知组合仍保留歌手位', () => {
  assert.deepEqual(parseTrackTitle('从前说 - 小阿七.mp3'), { title: '从前说', artist: '小阿七' });
  assert.deepEqual(parseTrackTitle('慢冷 (Live) - 李荣浩.mp3'), { title: '慢冷 (Live)', artist: '李荣浩' });
});

test('结果做 NFC 规整，便于后续简繁比对', () => {
  const { title, artist } = parseTrackTitle('陈粒 - 走马.mp3');
  assert.equal(title.normalize('NFC'), title);
  assert.equal(artist.normalize('NFC'), artist);
});

test('displayName 输出「歌名 - 歌手」，无歌手时只有歌名', () => {
  assert.equal(displayName('张杰 - 看月亮爬上来 .wav'), '看月亮爬上来 - 张杰');
  assert.equal(displayName('十年.mp3'), '十年');
});

test('拆横线规则：空格横线优先，紧凑横线回退', () => {
  assert.deepEqual(splitOnDash('a - b').parts, ['a', 'b']);
  assert.deepEqual(splitOnDash('a-b').parts, ['a', 'b']);
  assert.deepEqual(splitOnDash('无横线').parts, ['无横线', '']);
});
