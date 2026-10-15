/* 原生实验：把本地课程中的组件和语法拆成独立的开发手册示例。 */
const MANUAL_LESSONS = [];
function manual(
  cat,
  id,
  title,
  module,
  what,
  html,
  css,
  js,
  observe,
  challenge,
  pitfall,
  ref,
) {
  MANUAL_LESSONS.push({
    cat,
    id: 'manual-' + id,
    title,
    module,
    what,
    subtitle: what.split('。')[0] + '。',
    html: html.trim(),
    css: css.trim(),
    js: js.trim(),
    observe,
    challenge,
    pitfalls: [pitfall],
    tags: [module, title, '课程拆解'],
    uses: [module, '可复用页面片段'],
    level: '进阶',
    minutes: 12,
    doc: MDN + ref,
  });
}
function visual(
  id,
  title,
  module,
  what,
  html,
  css,
  observe,
  challenge,
  pitfall,
  ref = 'Web/CSS',
) {
  manual(
    'css',
    id,
    title,
    module,
    what,
    `<section class="lesson-demo"><h2>${title}</h2>${html}</section>`,
    css,
    '',
    observe,
    challenge,
    pitfall,
    ref,
  );
}
function layout(id, title, what, html, css, observe, challenge, pitfall) {
  manual(
    'layout',
    id,
    title,
    '项目组件拆解',
    what,
    `<section class="lesson-demo"><h2>${title}</h2>${html}</section>`,
    css,
    '',
    observe,
    challenge,
    pitfall,
    'Web/CSS/How_to/Layout_cookbook',
  );
}
function logic(
  id,
  title,
  module,
  what,
  code,
  observe,
  challenge,
  pitfall,
  ref = 'Web/JavaScript/Guide',
) {
  manual(
    'js',
    id,
    title,
    module,
    what,
    `<section class="lesson-demo"><h2>${title}</h2><p>修改代码并运行，对比输出。</p><pre id="result" aria-live="polite"></pre></section>`,
    '',
    `const output = document.querySelector('#result');
function print(...values) {
  const text = values.map(value => typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)).join(' ');
  output.textContent += text + '\\n';
  console.log(...values);
}
${code}`,
    observe,
    challenge,
    pitfall,
    ref,
  );
}
function interaction(
  id,
  title,
  what,
  html,
  css,
  js,
  observe,
  challenge,
  pitfall,
  ref = 'Web/API/Document_Object_Model',
) {
  manual(
    'js',
    id,
    title,
    '组件交互拆解',
    what,
    `<section class="lesson-demo"><h2>${title}</h2>${html}</section>`,
    css,
    js,
    observe,
    challenge,
    pitfall,
    ref,
  );
}

manual(
  'html',
  'paths',
  '相对路径、绝对路径与 URL 解析',
  'HTML 开发基础',
  '资源路径相对当前文档 URL 解析。../ 回到上级目录，/ 从网站根目录出发；file 协议与 HTTP 的网站根目录不是同一个概念。',
  `<section class="lesson-demo"><h2>路径计算器</h2><label>文档 URL <input id="base" value="https://example.com/course/index.html"></label><label>资源路径 <input id="path" value="../images/logo.svg"></label><button id="resolve">解析路径</button><pre id="result"></pre></section>`,
  '',
  `function resolvePath() { try { document.querySelector('#result').textContent = new URL(document.querySelector('#path').value, document.querySelector('#base').value).href; } catch { document.querySelector('#result').textContent = '请输入有效的 URL'; } }
document.querySelector('#resolve').onclick = resolvePath;
resolvePath();`,
  [
    '../images 返回 https://example.com/images/logo.svg',
    '改为 /images/logo.svg 比较根路径',
    '改为 ./logo.svg 比较当前目录',
  ],
  '加入带查询参数和片段的路径，解释 href、search、hash。',
  'Windows 磁盘路径不是可跨设备使用的网站资源 URL。',
  'Web/API/URL/URL',
);
manual(
  'html',
  'table-span',
  '表格行列合并与表头关联',
  'HTML 开发基础',
  'colspan 跨列，rowspan 跨行；合并后仍需计算每行占据的总列数。caption 和 scope 帮助读屏软件理解表格。',
  `<section class="lesson-demo"><table><caption>学习安排</caption><thead><tr><th scope="col">日期</th><th scope="col">上午</th><th scope="col">下午</th></tr></thead><tbody><tr><th scope="row" rowspan="2">周末</th><td>HTML</td><td>CSS</td></tr><tr><td colspan="2">综合练习（跨两列）</td></tr></tbody></table></section>`,
  '',
  '',
  ['第一列占据两行', '第二行只有一个跨两列的单元格', '表格描述数据而不承担页面布局'],
  '添加一行 JavaScript 安排，保持三列对齐。',
  '少写或多写 td 会改变表格网格；不要用废弃的 align、bgcolor 控制外观。',
  'Web/HTML/Reference/Elements/td',
);
manual(
  'html',
  'head-meta',
  '页面标题、描述与 Favicon',
  'HTML 开发基础',
  'title 描述页面主题，description 概括内容，favicon 作为标签页图标。meta keywords 不用于 Google 搜索排名，付费广告也不等于自然搜索优化。',
  `<!doctype html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>前端实验室 · 盒子模型</title><meta name="description" content="通过可编辑案例理解盒子模型、布局与交互。"><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23134c38'/%3E%3Ctext x='7' y='24' fill='white' font-size='24'%3EF%3C/text%3E%3C/svg%3E"></head><body><section class="lesson-demo"><h2>检查 HTML 标签页与元信息</h2><p>导出此案例后打开，查看页面标题和图标；这些 head 元素不在正文显示。</p></section></body></html>`,
  '',
  '',
  ['title 在浏览器标签页显示', 'description 不在正文渲染', '导出的独立文件包含图标'],
  '给一篇新闻设置独特标题和准确描述。',
  '文件名以 .html 结尾不保证排名；标题描述应与实际内容一致。',
  'Web/HTML/Reference/Elements/meta',
);

visual(
  'display-modes',
  '块、行内与行内块的尺寸差异',
  'CSS 基础细节',
  'display 决定元素参与布局的方式。普通行内非替换元素不按 width、height 扩张；inline-block 可以设定尺寸但仍参与行内排版。',
  `<p>行内 <span class="inline sample">宽高被忽略</span> 文本</p><p>行内块 <span class="inline-block sample">80 × 50</span> 文本</p><div class="block sample">块级独占一行</div>`,
  `.sample { width: 100px; height: 50px; background: #d3e9dd; border: 1px solid #438265; padding: 8px; }
.inline { display: inline; }
.inline-block { display: inline-block; }
.block { display: block; }`,
  [
    '改变 display 比较 width 的效果',
    '行内块与文字共享一行',
    '行内的上下 padding 可能绘制到相邻行',
  ],
  '用 Flex 排列三个按钮，对比 inline-block 的空白间隙。',
  'img 是替换元素，可以有尺寸；不要把所有 inline 都当成普通文字。',
  'Web/CSS/Reference/Properties/display',
);
visual(
  'font-shorthand',
  'font 简写、行高与基线',
  'CSS 基础细节',
  'font 简写至少包含 font-size 和 font-family，行高写在字号之后的斜杠后。无单位 line-height 按每个元素自身字号计算。',
  `<p class="a">第一行文字<br><strong>第二行较大文字</strong></p><p class="b">固定像素行高<br><strong>第二行较大文字</strong></p>`,
  `.a { font: italic 400 16px/1.8 system-ui; }
.b { font: 16px/28px system-ui; }
strong { font-size: 26px; }
.a, .b { border: 1px dashed #438265; }`,
  [
    '无单位行高随 strong 的字号变化',
    '简写中的 /1.8 是行高',
    '固定行高在大字号下可能拥挤',
  ],
  '给正文添加首行缩进 2em，再增大字号观察缩进。',
  'font 简写会重置未明确指定的字体相关属性。',
  'Web/CSS/Reference/Properties/font',
);
visual(
  'link-states',
  '链接状态、键盘焦点与 LVHA',
  'CSS 选择器',
  '链接可以按 :link、:visited、:hover、:active 设置状态。相同优先级时后出现的规则生效；键盘使用者还需要 :focus-visible。',
  `<a class="state-link" href="#target">用 Tab 聚焦，再点击</a><p id="target">链接目标区域</p>`,
  `.state-link:link { color: #136345; }
.state-link:visited { color: #6e4984; }
.state-link:hover { color: #ad6529; text-decoration: underline; }
.state-link:active { color: #c33632; }
.state-link:focus-visible { outline: 3px solid #af872b; outline-offset: 5px; }`,
  ['鼠标悬停改变颜色', '按下时 active 颜色覆盖 hover', 'Tab 可见焦点轮廓'],
  '将 active 规则移到 hover 前面，对比同时命中时结果。',
  'visited 可读样式受隐私保护限制，不能据此探测浏览历史。',
  'Web/CSS/Reference/Selectors/:link',
);
visual(
  'selector-combinations',
  '后代、子代、并集与交集选择器',
  'CSS 选择器',
  '空格匹配任意层级后代，> 只匹配直接子元素，逗号合并多个选择器，连续类名要求同一元素同时具有这些类。',
  `<div class="scope"><p class="card selected">直接子段落</p><div><p class="card">嵌套段落</p></div><small>并集中的 small</small></div>`,
  `.scope p { border-left: 4px solid #4d9c76; padding: 8px; }
.scope > p { background: #e4f3e9; }
.card.selected { font-weight: 700; }
.scope small, .scope .selected { color: #a05a26; }`,
  [
    '两个段落都命中后代选择器',
    '只有第一个命中直接子选择器',
    '.card.selected 中没有空格',
  ],
  '给嵌套段落增加 selected 类，解释新增效果。',
  '.card .selected 匹配后代，不等于同一元素具有两个类。',
  'Web/CSS/Reference/Selectors',
);
visual(
  'specificity',
  '优先级的三列比较与继承',
  'CSS 选择器',
  '优先级按 ID、类/属性/伪类、类型/伪元素三列逐列比较，不做十进制相加。元素自身规则优先于继承来的值。',
  `<div id="scope" style="color: purple"><p class="message">比较匹配规则与继承值</p><p>这段没有类</p></div>`,
  `#scope { color: purple; }
.message { color: green; }
#scope .message { color: #b06a24; }
div p.message { color: blue; }
p { color: #40594b; }`,
  [
    '#scope .message 优先于 div p.message',
    '第二段使用 p 自身规则而不是父级紫色',
    '删除规则并逐层比较',
  ],
  '删除 #scope .message，观察下一个胜出规则。',
  '不要用 100、10、1 算术进位比较；!important 和级联层需先于优先级判断。',
  'Web/CSS/Guides/Cascade/Specificity',
);
visual(
  'margin-collapse',
  '外边距合并与父子塌陷',
  '盒子与文档流',
  '同一块格式化上下文中，垂直方向的块外边距可能合并。父容器 display: flow-root 创建新的块格式化上下文，阻止子外边距穿过父边界。',
  `<div class="parent"><div class="child">子元素 margin-top: 30px</div></div><div class="siblings"><p>margin-bottom: 30px</p><p>margin-top: 20px</p></div>`,
  `.parent { display: flow-root; background: #d6eadd; }
.child { margin-top: 30px; padding: 10px; background: #80b794; }
.siblings p:first-child { margin-bottom: 30px; }
.siblings p:last-child { margin-top: 20px; }
.siblings p { background: #e9ebd9; }`,
  [
    '父级保留子元素的上外边距',
    '相邻两段间距是 30px 而不是 50px',
    '去掉 flow-root 检查父子边界',
  ],
  '改为 Flex 垂直排列，比较外边距是否合并。',
  '水平外边距不这样合并；Flex 和 Grid 项的外边距也不合并。',
  'Web/CSS/Guides/Box_model/Margin_collapsing',
);
visual(
  'float-clear',
  '浮动包围、clearfix 与 flow-root',
  '盒子与文档流',
  'float 让文本环绕图片，也会让浮动元素脱离普通块高度计算。flow-root 可包含浮动；旧页面常用 ::after 清除浮动。',
  `<div class="float-wrap"><div class="float-art">图</div><p>文本围绕浮动块流动。将文字删短后观察父容器仍包含浮动块。</p></div><p>下一段正文</p>`,
  `.float-wrap { display: flow-root; border: 2px solid #438265; padding: 10px; }
.float-art { float: left; width: 90px; height: 100px; margin: 0 14px 8px 0; background: #badcc8; display: grid; place-items: center; }
/* 旧式替代：.float-wrap::after { content: ''; display: block; clear: both; } */`,
  ['图片左浮动而正文环绕', '父容器边框包含图片', '清除浮动与移除浮动不是同一操作'],
  '用 ::after 替换 flow-root；再比较 overflow:hidden 的裁切影响。',
  '新页面的整页栅格通常用 Flex/Grid；overflow:hidden 清浮动可能裁掉阴影和弹层。',
  'Web/CSS/Reference/Properties/float',
);
visual(
  'border-calculation',
  'content-box 与 border-box 的尺寸计算',
  '盒子与文档流',
  'content-box 的声明宽度只包括内容，外宽再加 padding 与 border；border-box 的声明宽度已经包含这两部分。margin 始终位于边框外。',
  `<div class="box content">content-box：100 + 40 + 10 = 150</div><div class="box border">border-box：总宽 100</div>`,
  `.box { width: 100px; padding: 20px; border: 5px solid #438265; margin: 12px; background: #dceee1; overflow-wrap: anywhere; }
.content { box-sizing: content-box; }
.border { box-sizing: border-box; }`,
  ['第一块的外宽是150px', '第二块内容区仅50px宽', '检查计算样式面板核对尺寸'],
  '加入 margin:10px，计算每块在布局中占据的横向空间。',
  '公共样式经常设置 border-box；本例显式声明两种模式避免误判。',
  'Web/CSS/Reference/Properties/box-sizing',
);
visual(
  'baseline',
  '图片基线空隙与 vertical-align',
  'CSS 基础细节',
  '行内图片默认与文字基线对齐，行盒为文字下降部留出空间。把图片设为块或改变 vertical-align 可以处理底部间隙。',
  `<div class="image-row"><svg width="110" height="70" viewBox="0 0 110 70" aria-label="绿色图块"><rect width="110" height="70" fill="#93c6a7"/></svg> 基线文字 gy</div><div class="image-row fixed"><svg width="110" height="70" viewBox="0 0 110 70"><rect width="110" height="70" fill="#93c6a7"/></svg> 底部对齐 gy</div>`,
  `.image-row { background: #f3dfbb; margin: 12px 0; line-height: 1.8; }
.fixed svg { vertical-align: bottom; }`,
  ['第一行图块下方留出下降部空间', '第二行使用 bottom', '加大字号可放大差异'],
  '改为 display:block，观察文字换行。',
  'vertical-align 用于行内或表格单元格，不会把普通块放到父盒子垂直中央。',
  'Web/CSS/Reference/Properties/vertical-align',
);
visual(
  'background-modes',
  '背景平铺、定位、cover 与 contain',
  '背景与装饰',
  'contain 保证背景完整进入容器，cover 保证容器被背景覆盖但可能裁切。background-position 的百分比取决于容器与背景尺寸之差。',
  `<div class="background cover">cover：填满</div><div class="background contain">contain：完整</div><div class="background repeat">平铺纹理</div>`,
  `.background { height: 130px; border: 1px solid #438265; margin: 12px 0; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='80'%3E%3Crect width='160' height='80' fill='%2365aa81'/%3E%3Ccircle cx='80' cy='40' r='30' fill='%23f1ca87'/%3E%3C/svg%3E"); background-position: center; color: #173c2a; }
.cover { background-size: cover; background-repeat: no-repeat; }
.contain { background-size: contain; background-repeat: no-repeat; }
.repeat { background-size: 40px 40px; background-repeat: repeat; }`,
  ['cover填满但圆形可能被裁切', 'contain显示完整图案', '平铺的纹理重复出现'],
  '改变容器高宽比，比较 contain 与 cover 的裁切和留白。',
  '装饰背景没有 alt；传递内容的图片应使用 img 和替代文本。',
  'Web/CSS/Reference/Properties/background-size',
);
visual(
  'sprite',
  'CSS 精灵图与负背景定位',
  '背景与装饰',
  '精灵图把多个小图放到同一张图上。容器作为窗口，负 background-position 将目标区域移入窗口；高分辨率素材还需同时缩放背景尺寸与坐标。',
  `<p>一张 120 × 40 的 SVG 精灵图，三个窗口：</p><div class="sprites"><span class="sprite one" aria-label="绿色图标"></span><span class="sprite two" aria-label="橙色图标"></span><span class="sprite three" aria-label="蓝色图标"></span></div>`,
  `.sprites { display: flex; gap: 16px; }
.sprite { display: inline-block; width: 40px; height: 40px; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40'%3E%3Crect width='40' height='40' fill='%2376b48d'/%3E%3Ccircle cx='60' cy='20' r='18' fill='%23dcad68'/%3E%3Cpath d='M80 40L100 0L120 40Z' fill='%237a9ec9'/%3E%3C/svg%3E"); }
.two { background-position: -40px 0; }
.three { background-position: -80px 0; }`,
  ['第一块坐标为0', '第二块向左移40px', '第三块向左移80px'],
  '制作二倍尺寸精灵图，并用 background-size 还原CSS像素尺寸。',
  '背景坐标与显示尺寸必须采用同一缩放比。',
  'Web/CSS/Reference/Properties/background-position',
);
visual(
  'icon-alternative',
  '字体图标的原生 SVG 替代',
  '背景与装饰',
  '课程中的 iconfont 通过字体字形显示图标。原生 SVG 更易明确控制线宽和颜色；纯装饰图标隐藏于辅助技术，按钮保留文字或可访问名称。',
  `<button class="icon-button-example"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></svg>搜索</button><button aria-label="收藏"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z"/></svg></button>`,
  `button svg { width: 22px; height: 22px; fill: none; stroke: currentColor; stroke-width: 1.8; vertical-align: middle; }
.icon-button-example { display: inline-flex; align-items: center; gap: 8px; }`,
  ['SVG 继承按钮文字颜色', '装饰图标 aria-hidden', '无文字按钮用 aria-label'],
  '给搜索按钮增加加载状态，保留可访问名称。',
  '不要把私有 Unicode 字形当成有含义的正文；若用字体需提供字体加载失败的替代。',
  'Web/SVG',
);
visual(
  'opacity',
  'opacity 与透明背景的区别',
  '背景与装饰',
  'opacity 作用于整个元素及其后代的合成结果。只想让背景透明时，应使用带 alpha 的背景色。透明元素仍可能占据空间并接收事件。',
  `<div class="opacity-card">整块 opacity: .45 <button>文字也透明</button></div><div class="alpha-card">背景 alpha: .45 <button>文字不透明</button></div>`,
  `.opacity-card, .alpha-card { padding: 18px; margin: 12px 0; background: #41845a; color: white; }
.opacity-card { opacity: .45; }
.alpha-card { background: rgb(65 132 90 / .45); }`,
  ['第一块连按钮都变透明', '第二块只有背景透明', '透明度会影响对比度'],
  '设置 opacity:0 后尝试 Tab 聚焦，再比较 hidden。',
  'opacity:0 不等于隐藏语义或禁止点击；弹层关闭应同步 hidden、焦点和事件状态。',
  'Web/CSS/Reference/Properties/opacity',
);
visual(
  'transform-order',
  '多重变换的顺序与原点',
  '变换与动画',
  'transform 中函数的组合顺序会影响结果。transform-origin 指定旋转和缩放原点；变换后的视觉位置不会推动周围普通文档流。',
  `<div class="transform-stage"><div class="shape a">平移后旋转</div><div class="shape b">旋转后平移</div></div>`,
  `.transform-stage { min-height: 230px; padding: 35px; }
.shape { width: 110px; padding: 12px; margin: 20px; background: #bddfca; border: 1px solid #438265; transform-origin: left center; }
.a { transform: translateX(80px) rotate(25deg); }
.b { transform: rotate(25deg) translateX(80px); }`,
  [
    '两个方块使用相同数值但位置不同',
    '原点位于左侧中央',
    '变换不改变原本占据的布局位置',
  ],
  '改成 center 原点，再交换 transform 函数顺序。',
  'CSS 的矩阵组合与直觉上的时间顺序不同；用坐标轴和实际效果判断。',
  'Web/CSS/Reference/Properties/transform',
);
visual(
  'double-door',
  '双开门：溢出裁切与左右平移',
  '变换与动画',
  '容器定位并裁切，两个半宽遮罩在 hover 或 focus-within 时向左右平移，构成课程中的双开门效果。',
  `<div class="door" tabindex="0"><strong>打开知识之门</strong><div class="left">左</div><div class="right">右</div></div>`,
  `.door { position: relative; overflow: hidden; height: 180px; display: grid; place-items: center; background: #f0e5c9; }
.door div { position: absolute; top: 0; width: 50%; height: 100%; display: grid; place-items: center; background: #438265; color: white; transition: transform .5s; }
.left { left: 0; }
.right { right: 0; border-left: 1px solid white; }
.door:hover .left, .door:focus-within .left { transform: translateX(-100%); }
.door:hover .right, .door:focus-within .right { transform: translateX(100%); }
@media (prefers-reduced-motion: reduce) { .door div { transition: none; } }`,
  ['hover 向两边打开', 'Tab 聚焦也可打开', '百分比平移按遮罩自身宽度计算'],
  '改成上下开门，并保留键盘触发。',
  '只绑定 hover 会让触屏和键盘用户无法使用。',
  'Web/CSS/Reference/Properties/translate',
);
visual(
  'skew',
  '倾斜装饰与内容反向倾斜',
  '变换与动画',
  'skew 改变元素的坐标角度。把文本放在内层并应用相反倾斜，可以保留文字可读性。',
  `<div class="skew-card"><span>倾斜标签，文字保持直立</span></div>`,
  `.skew-card { display: inline-block; padding: 18px; margin: 24px; background: #c7e4d1; transform: skewX(-15deg); }
.skew-card span { display: block; transform: skewX(15deg); }`,
  ['外层轮廓倾斜', '内层文本抵消倾斜', '变换后可能超出原布局边界'],
  '为标签添加圆角并比较不同倾斜角度。',
  '较大倾斜角容易影响可读性和点击区域理解。',
  'Web/CSS/transform-function/skew',
);
visual(
  'perspective',
  '3D 透视、背面隐藏与翻转卡片',
  '变换与动画',
  '父级 perspective 给子元素建立透视观察距离；preserve-3d 保持子元素的三维关系，backface-visibility 隐藏背面。',
  `<div class="scene" tabindex="0"><div class="flip"><div class="face front">正面 · 悬停或聚焦</div><div class="face back">背面 · 3D 信息</div></div></div>`,
  `.scene { perspective: 700px; width: min(280px, 100%); height: 170px; margin: 20px auto; }
.flip { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform .6s; }
.face { position: absolute; inset: 0; display: grid; place-items: center; background: #c4e1ce; backface-visibility: hidden; border-radius: 12px; }
.back { transform: rotateY(180deg); background: #efddb4; }
.scene:hover .flip, .scene:focus-within .flip { transform: rotateY(180deg); }
@media (prefers-reduced-motion: reduce) { .flip { transition: none; } }`,
  ['正反面都位于同一个盒子', '背面预先旋转180度', '减少 perspective 数值增强透视'],
  '把 rotateY 改为 rotateX，并调整背面。',
  'CSS 视觉翻面不自动隐藏读屏内容；承载真实交互需管理隐藏状态。',
  'Web/CSS/Reference/Properties/perspective',
);
visual(
  'rotate3d',
  '空间坐标、rotate3d 与 translateZ',
  '变换与动画',
  'rotate3d(x,y,z,angle) 绕向量方向旋转，translateZ 让物体靠近或远离观察者。只有存在透视时，Z 轴距离才明显影响视觉尺寸。',
  `<div class="depth"><div class="near">translateZ(80px)</div><div class="far">translateZ(-80px)</div></div>`,
  `.depth { perspective: 500px; height: 230px; display: flex; align-items: center; justify-content: center; gap: 35px; }
.depth div { width: 100px; height: 100px; background: #c2dfcd; padding: 12px; }
.near { transform: translateZ(80px) rotate3d(1, 1, 0, 25deg); }
.far { transform: translateZ(-80px) rotate3d(1, 1, 0, 25deg); }`,
  ['近处的卡片更大', '旋转轴由三个分量指定', '关闭透视对比Z轴效果'],
  '尝试 (1,0,0)、(0,1,0)、(0,0,1) 三个轴。',
  '平面里的 z-index 控制绘制层级，并不等于三维空间里的 translateZ。',
  'Web/CSS/transform-function/rotate3d',
);
visual(
  'animation-controls',
  '动画延迟、方向、填充与暂停',
  '变换与动画',
  'animation 包含名称、时长、缓动、延迟、次数、方向、填充和播放状态。forwards 保留最后关键帧，但动画没有修改原本的属性声明。',
  `<div class="track"><div class="runner">悬停暂停</div></div>`,
  `.track { padding: 16px; height: 160px; background: #edf5ef; }
.runner { width: 100px; padding: 12px; background: #8ac09c; animation: travel 2s ease-in-out .5s infinite alternate both; }
.runner:hover { animation-play-state: paused; }
@keyframes travel { from { transform: translateX(0); opacity: .6; } to { transform: translateX(120px); opacity: 1; } }
@media (prefers-reduced-motion: reduce) { .runner { animation: none; } }`,
  ['有半秒延迟', 'alternate 让方向往返', '悬停暂停后离开继续'],
  '将 infinite 改为 1，对比 none 与 forwards。',
  '无限动画要考虑减少动态效果；尽量动画 transform、opacity。',
  'Web/CSS/Reference/Properties/animation',
);
visual(
  'steps-animation',
  'steps 精灵帧动画',
  '变换与动画',
  'steps 把连续时间分成离散跳变，可用于精灵帧动画或数字显示。背景移动的步长必须等于一帧宽度。',
  `<div class="sprite-frame" role="img" aria-label="四帧颜色动画"></div><p>四帧：绿 → 黄 → 蓝 → 紫</p>`,
  `.sprite-frame { width: 80px; height: 80px; background-image: linear-gradient(to right, #69a982 0 25%, #dbb265 25% 50%, #7b9fce 50% 75%, #b48bc4 75%); background-size: 320px 80px; animation: frames 1.2s steps(4) infinite; }
@keyframes frames { to { background-position: -320px 0; } }
@media (prefers-reduced-motion: reduce) { .sprite-frame { animation: none; } }`,
  ['每次跳动80px', 'steps(4) 对应4帧', '一轮末尾回到第一帧'],
  '增加第五帧，重新计算背景宽度与 steps。',
  '不要在帧间使用普通 ease，否则会把相邻帧混在窗口内。',
  'Web/CSS/easing-function/steps',
);
visual(
  'multiple-animation',
  '多组动画与嵌套变换',
  '变换与动画',
  '同一元素的多个动画如果同时写 transform，默认可能互相覆盖。把位移和旋转放在父子两层，职责更清晰。',
  `<div class="moving"><div class="spinning">✦</div></div>`,
  `.moving { width: 70px; margin: 35px; animation: slide 3s ease-in-out infinite alternate; }
.spinning { padding: 15px; text-align: center; background: #c6e2cf; animation: spin 2s linear infinite; }
@keyframes slide { to { transform: translateX(140px); } }
@keyframes spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .moving, .spinning { animation: none; } }`,
  ['父元素负责横向位移', '子元素独立旋转', '多个动画各有时长'],
  '添加子层缩放动画，并避免覆盖旋转。',
  '不同动画改同一属性时，不应假设它们自动相加。',
  'Web/CSS/Reference/Properties/animation',
);
visual(
  'rem-design',
  'rem 设计稿换算与根字号',
  '移动端适配',
  'rem 相对根字号。课程的十等分方案把根字号设为视口宽度的十分之一，设计稿上的 px 需要除以基准根字号；字号不宜无限随屏幕放大。',
  `<div class="rem-box">宽 5rem</div><p>本实验根字号限制在 16–24px，缩放预览观察尺寸。</p>`,
  `html { font-size: clamp(16px, 3vw, 24px); }
.rem-box { width: 5rem; padding: 1rem; background: #c7e4d0; }
/* 375px 设计稿、根字号37.5px时：150px / 37.5 = 4rem。 */`,
  ['根字号决定 rem 的实际尺寸', 'clamp 限制上下界', '与普通元素的 em 对比'],
  '把盒子改为 4rem，并计算在三种根字号下的实际宽度。',
  '将全页文字按 viewport 无限缩放可能过小或过大；保留浏览器缩放能力。',
  'Web/CSS/Reference/Values/length',
);
visual(
  'vw-vh',
  'vw、vh 与移动浏览器的 dvh',
  '移动端适配',
  'vw 是视口宽度的百分之一，vh 是视口高度的百分之一。移动浏览器地址栏变化会影响可见区域，dvh 跟随动态视口，svh 使用小视口。',
  `<div class="viewport-block">宽度 70vw，上限 600px<br>最小高度 35dvh</div>`,
  `.viewport-block { width: min(70vw, 600px); min-height: 35vh; min-height: 35dvh; padding: 20px; background: #c5e2ce; }`,
  [
    '宽度受视口而不是父容器控制',
    '先写 vh 再写 dvh 作为渐进增强',
    'max-width 防止横向溢出',
  ],
  '改为 width:70%，比较百分比参照对象。',
  '不能简单把 vh 和 vw 混成同一个设计稿缩放系数；注意动态地址栏。',
  'Web/CSS/Reference/Values/length',
);
visual(
  'media-order',
  '移动优先断点与媒体查询顺序',
  '移动端适配',
  '先提供小屏基础样式，再按 min-width 增加布局。多个媒体查询同时命中时，仍按级联与优先级决定最后结果。',
  `<div class="breakpoint">调整预览宽度</div><div class="responsive-panels"><aside>侧栏</aside><main>正文</main></div>`,
  `.breakpoint::after { content: ' · 单列'; }
.responsive-panels { display: grid; gap: 12px; }
.responsive-panels aside, .responsive-panels main { padding: 20px; background: #daecdf; }
@media (min-width: 540px) { .responsive-panels { grid-template-columns: 150px 1fr; } .breakpoint::after { content: ' · 双列'; } }
@media (min-width: 850px) { .responsive-panels { grid-template-columns: 220px 1fr; } }`,
  ['小屏单列', '540px以上变双列', '850px以上侧栏加宽'],
  '交换两个媒体查询的书写顺序，说明冲突原因。',
  '断点按内容需要选择；不要只根据设备品牌判断。',
  'Web/CSS/Reference/At-rules/@media',
);
visual(
  'less-native',
  'Less 的变量、计算与嵌套如何转成 CSS',
  '原生替代与工程习惯',
  'Less 必须编译。变量可以改为 CSS 自定义属性，尺寸计算可以用 calc，嵌套可展开为明确选择器；浏览器不执行 Less 插件的导出注释。',
  `<div class="native-card"><h3>共享设计变量</h3><a href="#">悬停查看颜色</a></div>`,
  `:root { --theme: #2f7b53; --space: 16px; }
.native-card { padding: calc(var(--space) * 2); border: 1px solid var(--theme); }
.native-card h3 { color: var(--theme); }
.native-card a:hover { color: #9f6630; }
/* Less @theme、&:hover、@rootSize 运算对应上面的原生声明。 */`,
  ['一个变量控制多个位置', 'calc 在浏览器运行时计算', '嵌套选择器展开为后代选择器'],
  '增加 --radius 并让两个组件共同使用。',
  'CSS 自定义属性受级联与继承影响，不等同于 Less 的编译期变量。',
  'Web/CSS/Guides/Cascading_variables/Using_custom_properties',
);
visual(
  'reset-focus',
  '基础重置与可访问焦点',
  '原生替代与工程习惯',
  '基础样式可统一 box-sizing、图片尺寸和控件字体，同时保留标题、列表与焦点的语义。reset 不应无差别删除所有可见提示。',
  `<label>姓名 <input placeholder="Tab 聚焦"></label><button>继续</button><ul><li>原生列表仍有标记</li></ul>`,
  `*, *::before, *::after { box-sizing: border-box; }
button, input, textarea, select { font: inherit; }
img { max-width: 100%; height: auto; }
:focus-visible { outline: 3px solid #aa8130; outline-offset: 3px; }`,
  ['控件继承正文字体', '键盘聚焦可见', '只重置确有必要的默认值'],
  '给表单增加错误提示并关联 aria-describedby。',
  'outline:none 不应单独用于去除焦点；用等效的可见样式替代。',
  'Web/CSS/Reference/Selectors/:focus-visible',
);

layout(
  'wrapper',
  '版心：最大宽度与左右留白',
  '用 min() 与自动外边距保留居中版心。课程中的固定 1200/1240px 版心在小屏需要收缩，而不是横向溢出。',
  `<div class="wrapper-example"><p>主体版心</p><div class="inner">内容区</div></div>`,
  `.wrapper-example { width: min(100% - 32px, 720px); margin-inline: auto; padding: 24px; background: #d8ebde; }
.inner { padding: 20px; border: 1px dashed #438265; }`,
  ['居中由 margin-inline:auto 完成', '两侧至少16px留白', '大屏最大720px'],
  '把最大宽度改为60rem并测试窄屏。',
  '宽度与 padding 的关系依赖 box-sizing；固定宽度会伤害移动布局。',
);
layout(
  'header-search',
  '头部组合：标识、导航、搜索与用户区',
  '学成在线、商城和企业网站的头部都可拆成 Flex 对齐、导航状态、弹性搜索与用户入口。小屏应换行并保留核心操作。',
  `<header class="component-header"><strong>LAB</strong><nav aria-label="示例导航"><a href="#" aria-current="page">首页</a><a href="#">课程</a></nav><form role="search"><label class="sr-only" for="search">搜索课程</label><input id="search" placeholder="搜索课程"><button>搜索</button></form><span>访客</span></header>`,
  `.component-header { display: flex; align-items: center; flex-wrap: wrap; gap: 16px; }
.component-header nav { display: flex; gap: 12px; }
.component-header [aria-current] { border-bottom: 2px solid #438265; }
.component-header form { display: flex; flex: 1 1 210px; gap: 4px; }
.component-header input { min-width: 0; width: 100%; }
.sr-only { position: absolute; width: 1px; height: 1px; clip-path: inset(50%); overflow: hidden; }`,
  ['搜索栏吸收剩余空间', '小屏自动换行', '导航用 aria-current 标示当前项'],
  '用提交监听让搜索结果在当前页面显示。',
  '搜索的输入名不能只依赖 placeholder；纯布局实验不会实际搜索。',
);
layout(
  'sidebar-hero',
  'Banner、分类侧栏与信息卡',
  '课程首页和商城首页常在一个区域组合侧导航、主视觉和辅助卡片。使用 Grid 分配列，并在小屏重排为单列。',
  `<div class="hero-split"><nav aria-label="分类"><a href="#">网页基础 →</a><a href="#">布局实践 →</a><a href="#">交互组件 →</a></nav><div class="hero-copy"><h3>每次学习一个小概念</h3><p>从组件组合出页面</p></div><aside><h3>今日计划</h3><p>① 布局</p><p>② 交互</p></aside></div>`,
  `.hero-split { display: grid; grid-template-columns: 150px minmax(0, 1fr) 150px; background: #e6efd9; }
.hero-split > * { padding: 18px; }
.hero-split nav { background: #376647; color: white; }
.hero-split a { display: block; margin-block: 12px; }
.hero-split aside { background: #f1e6c8; }
@media (max-width: 650px) { .hero-split { grid-template-columns: 1fr; } }`,
  ['三种职责对应三个区域', 'minmax(0,1fr) 允许主区域收缩', '窄屏阅读顺序保持一致'],
  '将辅助卡片移到主视觉下方并保留语义顺序。',
  '不要用大量 absolute 拼主布局；长文本会打破固定坐标。',
);
layout(
  'section-title',
  '模块标题、筛选与更多入口',
  '电商和课程列表的标题行可拆成标题、弹性占位、筛选链接和更多入口，使用 flex-wrap 避免内容挤出。',
  `<div class="section-heading"><h3>新鲜好物</h3><nav aria-label="商品分类"><a href="#">全部</a><a href="#">家居</a><a href="#">文具</a></nav><a href="#">更多 →</a></div>`,
  `.section-heading { display: flex; align-items: baseline; flex-wrap: wrap; gap: 16px; border-bottom: 1px solid #c4d8ca; }
.section-heading h3 { margin-right: auto; }
.section-heading nav { display: flex; gap: 12px; }`,
  ['标题右侧自动外边距吸收空间', 'baseline 对齐不同字号', '窄屏换行'],
  '给分类增加选中状态，并让按钮筛选下方列表。',
  '看起来像筛选的按钮应有实际状态和行为；本例只演示布局。',
);
layout(
  'course-card',
  '课程卡片：封面、标题、元信息与角标',
  '课程卡片使用固定比例封面、两行标题、元信息和定位角标；列表用自适应网格重复同一个组件。',
  `<div class="course-list">${['HTML 基础', 'CSS 布局与可复用组件', 'JavaScript 事件与数据'].map((x, i) => `<article class="course-card"><div class="cover-sample">0${i + 1}</div><span class="badge">新课</span><h3>${x}</h3><p>入门 · 12 节</p></article>`).join('')}</div>`,
  `.course-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(180px,100%),1fr)); gap: 16px; }
.course-card { position: relative; border: 1px solid #cadfcf; border-radius: 10px; overflow: hidden; }
.cover-sample { aspect-ratio: 16/9; display: grid; place-items: center; background: #c7e0ce; font-size: 32px; }
.course-card h3, .course-card p { margin: 12px; }
.badge { position: absolute; inset: 8px 8px auto auto; background: #f1ce85; padding: 3px 8px; border-radius: 12px; }`,
  ['角标相对卡片定位', '封面统一比例', '列数随容器宽度变化'],
  '给长标题添加两行截断并保留完整的链接文字。',
  '商品名称和价格不要放在 CSS 伪元素里，否则不利于复制和辅助技术。',
);
layout(
  'hover-reveal',
  '产品悬停：上浮、阴影与详情揭示',
  '商品区域可把详情放在卡片底部，hover/focus-within 时用 transform 上移。静态内容与交互内容分别处理，避免视觉隐藏但仍可聚焦。',
  `<article class="reveal-card" tabindex="0"><div class="product-art">◇</div><h3>原生组件卡片</h3><p>￥ 29.00</p><div class="reveal-info">更多规格 · 绿色 / 小号</div></article>`,
  `.reveal-card { position: relative; width: min(260px,100%); overflow: hidden; border: 1px solid #cadfcf; border-radius: 10px; text-align: center; transition: transform .25s, box-shadow .25s; }
.product-art { background: #d6e8da; padding: 28px; font-size: 50px; }
.reveal-info { position: absolute; inset: auto 0 0; padding: 20px 8px; background: #397c52; color: white; transform: translateY(100%); transition: transform .25s; }
.reveal-card:hover, .reveal-card:focus-within { transform: translateY(-4px); box-shadow: 0 12px 28px #234a2926; }
.reveal-card:hover .reveal-info, .reveal-card:focus-within .reveal-info { transform: translateY(0); }
@media (prefers-reduced-motion: reduce) { .reveal-card, .reveal-info { transition: none; } }`,
  ['底部详情默认移出卡片', '聚焦同样触发展示', '只改变合成变换'],
  '在触屏上把详情设为常显，比较媒体查询。',
  '重要价格和操作应始终可见，不要仅放在悬停面板。',
);
layout(
  'footer-services',
  '多列页脚与服务保障条',
  '商城页脚通常由服务承诺、帮助链接、联系区和版权组成。每块分别使用 Grid，整体按内容选择断点。',
  `<div class="service-strip"><span>✓ 原生组件</span><span>✓ 可编辑代码</span><span>✓ 清晰讲解</span></div><footer class="help-grid"><section><h3>学习帮助</h3><a href="#">入门路线</a><a href="#">常见问题</a></section><section><h3>参考资料</h3><a href="#">文档入口</a></section><section><h3>联系我们</h3><p>工作日 9:00–18:00</p></section><p class="copyright">© 示例页脚 · 学习用途</p></footer>`,
  `.service-strip { display: flex; justify-content: space-around; flex-wrap: wrap; gap: 20px; padding: 24px; background: #dcece1; }
.help-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; padding: 20px; }
.help-grid a { display: block; margin: 8px 0; }
.copyright { grid-column: 1/-1; border-top: 1px solid #d0e0d5; padding-top: 16px; }
@media (max-width: 520px) { .help-grid { grid-template-columns: 1fr; } }`,
  ['保障条自动换行', '版权跨所有列', '小屏按文档顺序排列'],
  '增加隐私入口并保持链接可聚焦。',
  '不要写死页脚高度，文本换行后应自然撑开。',
);
layout(
  'topic-overlay',
  '图片上的标题与渐变遮罩',
  '专题卡片把标题放在封面上方，使用渐变遮罩保证不同图案背景上的文字对比度，避免对整块应用 opacity。',
  `<article class="topic-card"><div class="topic-art"></div><div class="topic-caption"><h3>从一个布局到一张页面</h3><p>专题 · 8 个原子知识点</p></div></article>`,
  `.topic-card { position: relative; overflow: hidden; border-radius: 12px; }
.topic-art { height: 220px; background: repeating-linear-gradient(45deg,#91bea0 0 30px,#d6dfb0 30px 60px); }
.topic-caption { position: absolute; inset: auto 0 0; padding: 35px 20px 12px; color: white; background: linear-gradient(transparent,#173f2bea); }
.topic-caption p { color: #e3efe5; }`,
  ['渐变只在文字区域出现', '文字不随背景透明', '封面容器建立定位上下文'],
  '比较浅色背景下有无渐变的文字可读性。',
  '不要把真实文字烧进图片中；文字应保留语义并适应缩放。',
);
layout(
  'mobile-header',
  '移动标题栏：两侧不等宽时的真正居中',
  '使用 1fr auto 1fr 三列，把标题保持在整体中央；左返回按钮与右侧长操作不会让标题偏移。',
  `<header class="mobile-title"><button aria-label="返回">←</button><h3>选择类型</h3><a href="#">历史记录</a></header><p>对应移动问诊、音乐和个人中心的公共头部。</p>`,
  `.mobile-title { display: grid; grid-template-columns: minmax(0,1fr) auto minmax(0,1fr); align-items: center; gap: 6px; border-bottom: 1px solid #d0e0d5; }
.mobile-title button { justify-self: start; }
.mobile-title a { justify-self: end; font-size: 12px; text-align: right; }
.mobile-title h3 { margin: 0; }`,
  ['标题位于容器中心', '两侧自动均分空间', '长操作允许换行'],
  '把右侧文本加长并测试390px宽度。',
  'space-between 在左右宽度不一致时不能保证中间标题真正居中。',
);
layout(
  'media-row',
  '图文列表：缩略图、弹性文本与尾部动作',
  '问诊类型、音乐排行榜、消息列表都使用同一个媒体对象模式：缩略图固定，正文收缩，尾部动作独立。',
  `<article class="media-row"><div class="thumb">01</div><div class="media-text"><h3>这是一个可能很长的标题，展示文本收缩</h3><p>副标题 · 第二行说明</p></div><button aria-label="查看详情">→</button></article>`,
  `.media-row { display: flex; align-items: center; gap: 14px; border: 1px solid #d0e0d5; padding: 12px; }
.thumb { flex: 0 0 60px; aspect-ratio: 1; background: #c4dfcd; display: grid; place-items: center; }
.media-text { flex: 1; min-width: 0; }
.media-text h3 { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; margin: 0; }
.media-row button { flex-shrink: 0; }`,
  ['min-width:0 允许中间文本收缩', '尾部按钮不被压扁', '长标题用省略号'],
  '改为两行标题并让组件高度自然增长。',
  'Flex 项默认最小宽度可能由内容决定，单加 flex:1 不保证缩短。',
);
layout(
  'bottom-bar',
  '固定下载条、底部导航与安全区',
  '移动音乐、商城与会员页常有固定底部操作。正文必须留出对应空间，安全区使用 env(safe-area-inset-bottom)。',
  `<div class="scroll-body"><p>滚动内容</p>${Array.from({ length: 8 }, (_, i) => `<p>第 ${i + 1} 段：正文不能被底部操作遮挡。</p>`).join('')}</div><div class="download-bar"><span>原生实验室</span><button>继续学习</button></div>`,
  `.scroll-body { padding-bottom: calc(90px + env(safe-area-inset-bottom)); }
.download-bar { position: fixed; inset: auto 0 0; display: flex; align-items: center; justify-content: space-between; padding: 12px 20px calc(12px + env(safe-area-inset-bottom)); background: #d1e6d7; border-top: 1px solid #91b49e; }`,
  ['底条固定到预览视口', '正文额外下边距避免遮挡', '安全区在适用设备上生效'],
  '将按钮改为三项底部导航并设置当前项。',
  '固定元素不占普通文档流，需要为它预留空间。',
);
layout(
  'native-grid12',
  '十二列栅格：原生替代 Bootstrap',
  'Bootstrap 的栅格本质上是断点、列宽与间隙的组合。用 CSS Grid 定义十二列，再按断点调整列跨度。',
  `<div class="grid12"><div class="wide">8列 / 小屏12列</div><div class="narrow">4列 / 小屏12列</div><div class="half">6列</div><div class="half">6列</div></div>`,
  `.grid12 { display: grid; grid-template-columns: repeat(12,minmax(0,1fr)); gap: 12px; }
.grid12 > div { padding: 18px; background: #d6eadc; grid-column: span 12; }
@media (min-width: 540px) { .grid12 .wide { grid-column: span 8; } .grid12 .narrow { grid-column: span 4; } .grid12 .half { grid-column: span 6; } }`,
  ['小屏每项跨12列', '大屏8+4占满一行', 'gap 与列宽由 Grid 一起计算'],
  '增加跨3列的四张卡片。',
  '不要直接复制 col-md-* 类而不加载对应 CSS；实验室使用自己的原生类。',
);
layout(
  'button-table',
  '按钮变体与响应式数据表',
  '组件库中的按钮和表格可以拆成共享基类、状态变体与横向滚动容器。状态应通过 disabled 和语义标签表达。',
  `<div><button class="variant primary">主要操作</button><button class="variant outline">次要操作</button><button class="variant" disabled>不可用</button></div><div class="table-scroll"><table><caption>原生表格组件</caption><thead><tr><th>名称</th><th>负责人</th><th>更新时间</th><th>操作</th></tr></thead><tbody><tr><td>课程卡片</td><td>前端实验室</td><td>2026-10-12</td><td>查看</td></tr><tr><td>布局示例</td><td>学习者</td><td>2026-10-12</td><td>编辑</td></tr></tbody></table></div>`,
  `.variant { border-radius: 8px; padding: 10px 16px; }
.variant.primary { background: #397c52; color: white; }
.variant.outline { border: 1px solid #397c52; background: white; }
.table-scroll { overflow-x: auto; margin-top: 16px; }
.table-scroll table { min-width: 500px; }
tbody tr:nth-child(even) { background: #edf5ef; }`,
  ['基类与变体分开', '禁用按钮无法触发', '小屏只滚动表格区域'],
  '给每行加入真实按钮并使用明确操作名称。',
  '不要为适应小屏直接隐藏关键数据列；表格标题与表头仍需保留。',
);
layout(
  'empty-state',
  '空状态、成功失败与状态徽章',
  '会员原型中的无卡券、无收藏、报名成功或失败可归纳为状态反馈组件。正文说明状态，并给出清晰的下一步。',
  `<section class="empty-state"><div aria-hidden="true">◇</div><h3>还没有收藏</h3><p>打开实验并收藏，下次可从侧栏继续学习。</p><button>浏览实验</button></section><p><span class="status success">已完成</span> <span class="status pending">待处理</span> <span class="status failure">未通过</span></p>`,
  `.empty-state { text-align: center; border: 1px dashed #a4c3af; padding: 28px; border-radius: 12px; }
.empty-state > div { font-size: 48px; color: #80aa8d; }
.status { display: inline-block; border-radius: 20px; padding: 4px 12px; }
.success { background: #cce6d3; }
.pending { background: #f2e1b6; }
.failure { background: #f0d1c9; }`,
  ['状态同时有文字和颜色', '空状态提供下一步', '原型几十个页面共用反馈模式'],
  '增加加载和无搜索结果状态，分别提供不同说明。',
  '仅凭绿色/红色表达状态会遗漏色觉差异用户。',
);
layout(
  'coupon',
  '卡券、虚线分割与缺口装饰',
  '会员卡和优惠券可拆成价格区、详情区、状态区及伪元素装饰。实际数据保留在 HTML，装饰用 CSS。',
  `<article class="coupon"><div class="coupon-price"><strong>20</strong><span>积分券</span></div><div><h3>布局练习奖励</h3><p>完成三项实验后解锁</p><span>待领取</span></div></article>`,
  `.coupon { position: relative; display: grid; grid-template-columns: 110px minmax(0,1fr); gap: 16px; background: #ecdfbd; padding: 20px; overflow: hidden; }
.coupon-price { display: grid; align-content: center; text-align: center; border-right: 2px dashed #bfa15d; }
.coupon-price strong { font-size: 38px; }
.coupon::before, .coupon::after { content: ''; position: absolute; width: 24px; height: 24px; border-radius: 50%; background: white; left: 117px; }
.coupon::before { top: -12px; }
.coupon::after { bottom: -12px; }`,
  ['伪元素做上下缺口', '价格与详情用网格分列', '内容换行时自然增高'],
  '将固定价格列改成响应式尺寸，并同步调整缺口坐标。',
  '缺口的背景颜色应与外部背景一致，装饰不能遮住实际文字。',
);
