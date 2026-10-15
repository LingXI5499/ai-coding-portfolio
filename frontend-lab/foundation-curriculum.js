/* 零基础补课。独立样式，不依赖工作台的公共示例装饰。 */
const FOUNDATION_LESSONS = [];
function foundation(
  cat,
  id,
  title,
  what,
  html,
  css,
  js,
  observe,
  challenge,
  detail,
  ref,
) {
  FOUNDATION_LESSONS.push({
    cat,
    id,
    title,
    what,
    subtitle: what.split('。')[0] + '。',
    module: '从零认识代码',
    level: '入门',
    minutes: 10,
    tags: [title, '零基础', '代码与效果'],
    uses: ['理解页面与代码的对应关系'],
    html,
    css: css || '',
    js: js || '',
    observe,
    challenge,
    pitfalls: detail.pitfalls || [],
    detail,
    clean: true,
    doc: 'https://developer.mozilla.org/en-US/docs/' + ref,
  });
}
foundation(
  'html',
  'html-syntax',
  '标签、元素、属性：先读懂一行 HTML',
  'HTML 给内容标明身份。<p> 是开始标签，</p> 是结束标签，中间是内容；这一整段才叫一个元素。属性写在开始标签里，给元素补充信息。',
  `<h1>我的第一张网页</h1>
<p class="note" title="把鼠标停在这里">这是一个段落。</p>
<p>这是另一个段落。</p>`,
  '',
  '',
  [
    '页面有一个大标题和两个段落。换行来自 h1、p 的默认块级显示，不是源码中的回车。',
    'class="note" 只是给段落分组；还没有 .note CSS，所以它不会自动变红。',
    'title 属性在鼠标停留时可能显示提示；它不是浏览器标签页的 title 元素。',
  ],
  '只把第一段文字改成“我知道元素是什么了”，运行；第二段和标题应保持原样。',
  {
    terms: [
      '标签：尖括号内的标记；结束标签多一个 /。',
      '元素：开始标签、内容、结束标签组成的整体。img、input 等空元素没有结束标签。',
      '属性：元素的附加信息，常写成 名称="值"。双引号包住完整值。',
      '浏览器：读取文字形式的源码，生成能显示和操作的页面。',
    ],
    steps: [
      '找 <p class="note">：p 决定内容身份，class 是属性，note 是属性值。',
      '只改两个标签之间的文字，看到的是内容变化。',
      '在 CSS 加 .note { color: red; }，看到的是外观变化。',
    ],
    pitfalls: [
      '不要把 class 和 CSS 的 . 混写：HTML 写 class="note"，CSS 写 .note。',
      '注释 <!-- 说明 --> 不显示在正文里；它用于给读代码的人解释。',
    ],
  },
  'Learn_web_development/Core/Structuring_content/Basic_HTML_syntax',
);
foundation(
  'html',
  'html-tree',
  '嵌套、父子、兄弟：读懂页面结构树',
  '缩进帮助人看懂结构，标签的嵌套关系才决定结构。包住另一个元素的叫父元素；被直接包住的叫子元素；拥有同一个父元素的叫兄弟元素。',
  `<div id="card">
  <h2>卡片标题</h2>
  <p>这是<span>重点文字</span>。</p>
</div>
<p>这是卡片外的段落。</p>`,
  '#card { border: 2px solid #2563eb; padding: 12px; }\n#card span { color: #c2410c; }',
  '',
  [
    '蓝框对应整个 div；h2 和里面的 p 是直接子元素。',
    'span 是 p 的子元素，也是 div 的后代，但不是 div 的直接子元素。',
    '外面的 p 不在蓝框里；#card span 只选卡片里的 span。',
  ],
  '把 span 移到 div 外面再运行：它不再被 #card span 选中，橙色应消失。',
  {
    terms: [
      '父元素：直接包住当前元素的一层。',
      '祖先 / 后代：向外或向内跨越任意层数。',
      '兄弟：同层、同父元素；不是“看起来挨着”的任意两项。',
    ],
    steps: [
      '从外到内读 div → p → span。',
      '配对开始和结束标签，再看缩进。',
      '后面学选择器和事件冒泡时，仍用这棵树判断范围。',
    ],
    pitfalls: ['p 不能包 div；浏览器会修复错误嵌套，实际结构可能与你的缩进不同。'],
  },
  'Web/API/Document_Object_Model/Introduction',
);
foundation(
  'html',
  'html-whitespace',
  '空格、换行、实体与代码文本',
  '普通 HTML 文本会合并连续空白。需要新段落就用 p，需要确实的断行才用 br；要把 < 当文字显示，写 &lt;。',
  `<p>甲       乙
丙</p>
<p>甲<br>乙</p>
<pre><code>&lt;p&gt;段落&lt;/p&gt;
第二行保留换行</code></pre>
<p>价格：¥ 10 &amp; 20；空白实体：甲&nbsp;乙</p>`,
  '',
  '',
  [
    '第一段的很多空格与源码换行，通常都变成一个空格。',
    '第二段的 br 明确换行，但没有创建第二个段落。',
    'pre 保留空格和换行；code 表明内容是代码，不会执行它。',
  ],
  '在 pre 中增加两个空格，再在普通 p 中增加两个空格，对比结果。',
  {
    terms: [
      '实体：用 &名称; 表示特殊字符，例如 &lt; 是小于号。',
      '空白折叠：普通排版把连续空白合并。',
      'pre：预格式文本；长行可能溢出，需要配合 overflow。',
    ],
    steps: [
      '源码换行用于阅读，不保证页面换行。',
      '文章段落用 p；诗句、地址内部的确实断行可用 br。',
      '不要用很多 &nbsp; 做布局，布局交给 CSS。',
    ],
  },
  'Web/HTML/Reference/Elements/pre',
);
foundation(
  'html',
  'html-boolean',
  '布尔属性：出现就表示启用',
  'disabled、required、checked 这类布尔属性靠“有没有写”表示真假。disabled="false" 仍然表示禁用；要启用就删除 disabled 属性。',
  `<label>必填姓名 <input id="name" required></label>
<button disabled="false">写着 false 也无法点</button>
<button>没有 disabled，可以点</button>
<label><input type="checkbox" checked> 初始选中</label>`,
  'label { display: block; margin: 16px 0; }',
  '',
  [
    '两个按钮对比：第一个 disabled 存在，所以仍禁用。',
    'required 在提交原生表单时参与校验；单独在页面输入不会自动弹出提交错误。',
    'checked 是初始选中属性；交互后实时状态应读取 JavaScript 的 checked 属性。',
  ],
  '删除第一个按钮的整个 disabled="false"，运行后应恢复可点击。',
  {
    terms: [
      '布尔：只有是 / 否两个状态。',
      'HTML 属性是初始设置；DOM 属性可表示当前状态。',
      'readonly 与 disabled 不同：前者不可编辑但通常仍提交，后者通常不参与提交。',
    ],
    steps: [
      '先看属性有没有出现。',
      '再观察实际按钮或输入框状态。',
      '不要把字符串 false 当作布尔值 false。',
    ],
  },
  'Glossary/Boolean/HTML',
);
foundation(
  'html',
  'html-form-submit',
  '表单从输入到数据：name、value、提交',
  '表单收集用户输入。label 给控件起可见名称，name 是提交字段名，value 是字段值；id 主要供关联和查询，并不代替 name。',
  `<form id="signup">
  <label for="nickname">昵称（必填）</label>
  <input id="nickname" name="nickname" required>
  <label><input type="checkbox" name="newsletter" value="yes"> 接收消息</label>
  <button type="submit">查看收集的数据</button>
  <button type="reset">重置输入</button>
</form>
<pre id="result">请填昵称后提交。没有连接服务器。</pre>`,
  'label { display: block; margin: 12px 0; }\npre { white-space: pre-wrap; }',
  `document.querySelector('#signup').addEventListener('submit', (event) => {
  event.preventDefault(); // 保留当前页面，不真的发送请求
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form));
  document.querySelector('#result').textContent = JSON.stringify(data, null, 2);
});`,
  [
    '空昵称提交，原生 required 校验会阻止提交。',
    '填“小雨”再提交，输出 nickname；勾选后还会出现 newsletter: yes。',
    '取消选中的复选框通常不提交该字段；删除输入框的 name 后，该值不会被 FormData 收集。',
  ],
  '只删除昵称输入框的 name，填内容并提交，观察 id 仍在但数据中不再有 nickname。',
  {
    terms: [
      'for 与 id 相同：点标签能聚焦对应控件。',
      'name：数据里的键名；value：用户当前输入或预设选项值。',
      'submit 事件：通过校验后触发表单提交。',
      'preventDefault：取消默认提交导航，本例只是本地观察数据。',
    ],
    steps: [
      'HTML 创建输入框。',
      '浏览器先做必填校验。',
      'JS 接收 submit → 收集 FormData → 把 JSON 文本写入 pre。',
    ],
    pitfalls: ['真实 action / method 涉及服务器，本实验不声称数据已保存到服务器。'],
  },
  'Learn_web_development/Extensions/Forms/Your_first_form',
);
foundation(
  'css',
  'css-syntax',
  'CSS 规则：选谁、改什么、改成多少',
  '一条 CSS 规则有两部分：大括号前的选择器决定选谁，括号里的声明决定改什么。每条声明由属性名、冒号、值和分号组成。',
  `<p class="note">我有 note 类名。</p>
<p>我没有 note 类名。</p>`,
  `.note {
  color: #c2410c;
  background-color: #ffedd5;
  padding: 16px;
}`,
  '',
  [
    '.note 对应 class="note" 的第一段，不影响第二段。',
    'color 改文字，background-color 改背景，padding 在文字和边缘间增加内部留白。',
    '把值从 16px 改成 32px，内部留白增大；属性名 padding 不用改。',
  ],
  '只把 color 改为 blue，运行：文字变蓝，但橙色背景和留白保持原样。',
  {
    terms: [
      '选择器：要应用样式的元素范围。',
      '声明：例如 color: blue;。',
      '属性：例如 color，表示控制哪种外观。',
      '值：例如 blue 或 16px，表示具体设置。',
      'px：CSS 像素单位；16px 的数值和单位之间不能加空格。',
    ],
    steps: [
      '在 HTML 找 class="note"。',
      '在 CSS 找 .note。',
      '逐行看文字、背景、内部留白。',
    ],
    pitfalls: [
      'CSS 用冒号，不用等号；属性名用连字符，例如 background-color。',
      '颜色发生变化不代表所有属性都有效，每条声明分别计算。',
    ],
  },
  'Learn_web_development/Core/Styling_basics/What_is_CSS',
);
foundation(
  'css',
  'css-style-sources',
  '样式写在哪里：行内、style、外部 CSS',
  'CSS 可以写在元素的 style 属性、页面 head 里的 style 元素，或独立 .css 文件中。工作台的 CSS 编辑区会变成页面里的 style；它不是 HTML 正文。',
  `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title>样式来源</title>
    <style>
      .inside { color: green; }
    </style>
  </head>
  <body>
    <p style="color: red">红色来自元素的 style 属性。</p>
    <p class="inside">绿色来自 HTML 里的 style 元素。</p>
    <p class="editor">蓝色来自 CSS 编辑区。</p>
  </body>
</html>`,
  '.editor { color: blue; }',
  '',
  [
    '三个段落分别展示三种位置中的前两种，以及工作台嵌入 CSS 的方式。',
    '外部文件应在 head 中用 <link rel="stylesheet" href="style.css"> 引入，本例没有伪造一个不存在的文件。',
    '本组基础实验没有工作台公共装饰；空 CSS 时仍会有标题大小等浏览器默认样式。',
  ],
  '把 .editor 改成 .inside，运行：同一普通作者层级中后写的绿色段落规则变蓝。',
  {
    terms: [
      '样式表：多条 CSS 规则组成的文件或 style 内容。',
      '浏览器默认样式：没有写 CSS，h1 也会较大，p 也有外边距。',
      'CSS 编辑区最终插在 head 后面；HTML 中的 style 也会一起保留。',
    ],
    steps: [
      '先确定样式来源，再检查是否选中元素。',
      '修改 selector 后观察范围变化。',
      '外部文件只改变组织方式，语法仍是同样的规则。',
    ],
    pitfalls: [
      '行内普通声明通常胜过普通选择器声明，但 !important、来源和层级仍会影响结果。',
    ],
  },
  'Learn_web_development/Core/Styling_basics/Getting_started',
);
foundation(
  'css',
  'css-selector-basics',
  '选择器分类 ①：标签、类、ID、通配与并集',
  '选择器先学“选谁”，再学冲突时谁胜出。p 按标签选，.note 按 class 选，#special 按 id 选，* 选所有元素，逗号表示多个选择器的并集。',
  `<h1>选择器练习</h1>
<p class="note">段落 A：note 类</p>
<p id="special">段落 B：special ID</p>
<span class="note">文字 C：note 类</span>
<p>段落 D：普通段落</p>`,
  `* { box-sizing: border-box; }
p { border-left: 4px solid #94a3b8; padding-left: 8px; }
.note { background-color: #fef3c7; }
#special { color: #b91c1c; }
h1, #special { text-decoration: underline; }`,
  '',
  [
    'A、B、D 都是 p，所以都有左边框；C 是 span，没有该边框。',
    'A 和 C 共享 note 类，所以都有黄色背景。',
    'B 的 id 是 special，所以字红；h1 和 B 都被逗号规则加下划线。',
  ],
  '给 D 加 class="note"：它应获得黄背景，而且原来的左边框仍在。',
  {
    terms: [
      '标签选择器：p。',
      '类选择器：.note；一个元素可有多个类，类也可复用。',
      'ID 选择器：#special；同一文档中 ID 应唯一。',
      '通配选择器：*；不包含 ::before 这样的伪元素。',
      '选择器列表：h1, #special 是“或”，不是“且”。',
    ],
    steps: [
      '先在 HTML 找标签、class、id。',
      '分别对照每条规则选中了谁。',
      '一个元素被多条规则命中很正常，它们可以控制不同属性。',
    ],
  },
  'Learn_web_development/Core/Styling_basics/Basic_selectors',
);
foundation(
  'css',
  'css-selector-attributes',
  '选择器分类 ②：属性存在、相等、包含',
  '属性选择器检查 HTML 属性。方括号 [data-level] 只检查有没有；[data-level="beginner"] 检查值完全相等；^=、$=、*= 分别检查开头、结尾、包含。',
  `<p data-level="beginner">入门教程</p>
<p data-level="advanced">进阶教程</p>
<p>没有 level 属性</p>
<a href="#intro">页内链接</a>
<a href="#intro-more">另一个页内链接</a>`,
  `[data-level] { padding: 8px; border: 1px solid #94a3b8; }
[data-level="beginner"] { background-color: #dcfce7; }
a[href^="#"] { color: #c2410c; }`,
  '',
  [
    '前两段有 data-level，所以有边框；只有第一段的值完全等于 beginner，因此有绿背景。',
    '两个链接的 href 都以 # 开头，所以都橙色。',
    'data-* 自定义数据本身不会制造颜色，是选择器把它与样式连接起来。',
  ],
  '把第二段的 advanced 改成 beginner，运行，它也应获得绿色背景。',
  {
    terms: [
      '[属性]：存在匹配。',
      '[属性="值"]：完全相等。',
      '^= 开头，$= 结尾，*= 包含；~= 按空格分隔的完整词匹配。',
    ],
    steps: [
      '先判断有没有属性。',
      '再判断值是否满足条件。',
      '匹配成功后才应用大括号中的样式。',
    ],
  },
  'Web/CSS/Reference/Selectors/Attribute_selectors',
);
foundation(
  'css',
  'css-selector-states',
  '选择器分类 ③：伪类状态与伪元素',
  '伪类用一个冒号描述状态或结构条件，例如 :hover、:focus-visible、:first-child；伪元素用两个冒号描述元素的一部分，例如 ::before。',
  `<button class="action">悬停或按 Tab 聚焦我</button>
<ul>
  <li>第一项</li>
  <li>第二项</li>
</ul>
<p class="message">这是正文。</p>`,
  `.action:hover { background-color: #fde68a; }
.action:focus-visible { outline: 3px solid #2563eb; }
li:first-child { color: #b91c1c; }
.message::before { content: "提示："; color: #2563eb; }`,
  '',
  [
    'hover 只有指针悬停时匹配；Tab 键聚焦按钮时显示蓝色外轮廓。',
    'li:first-child 要求 li 同时是父元素的第一个元素子节点，不只是“第一个 li”。',
    '提示二字来自 content 生成的伪元素，HTML 正文里没有这几个字。',
  ],
  '把 :first-child 改成 :last-child，运行：红色应从第一项移到第二项。',
  {
    terms: [
      '伪类：选中满足状态或结构条件的真实元素。',
      '伪元素：生成或选择元素的某一部分，不是可 querySelector 的独立 DOM 节点。',
      '焦点：键盘输入当前指向的控件。',
    ],
    steps: [
      '先在静止状态看列表。',
      '再悬停按钮，再用 Tab 聚焦。',
      '最后对照 HTML，找出哪段文字是 CSS 生成的。',
    ],
    pitfalls: [
      '::before、::after 通常需要 content 才显示。',
      '不要只提供鼠标 hover 状态，键盘用户也需要可见焦点。',
    ],
  },
  'Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements',
);
foundation(
  'css',
  'css-normal-flow',
  '文档流 ①：不定位时，盒子怎样排队',
  '正常流是浏览器的默认排版规则。在本例从左到右、从上到下的书写方式中，普通块盒子逐个往下排；行内文字在同一行接着排，空间不足再换行。',
  `<div class="parent">
  <div class="box">A 块盒子</div>
  <div class="box">B 块盒子</div>
  <p>文字前面 <span>行内 A</span> <span>行内 B</span> 文字后面</p>
</div>`,
  `body { margin: 16px; font-family: sans-serif; }
.parent { width: 300px; border: 2px dashed #64748b; }
.box { width: 100px; height: 40px; background-color: #bfdbfe; margin: 0; }
.box + .box { background-color: #bbf7d0; }
p { margin: 0; }
span { background-color: #fef3c7; }`,
  '',
  [
    '父盒宽 300px，A 和 B 各宽 100px，明明横着能放下，但它们还是上下排列：普通块盒子默认另起一行。',
    'A 占 40px 高，B 从 A 后面开始；把 A 的 height 改成 80px，B 和后面的段落都会向下移 40px。',
    '两个 span 与文字在同一行接着排，宽度由内容决定；父容器变窄时会换行。',
  ],
  '只把 A、B 共用的 height 从 40px 改成 60px：每个盒子增高 20px，段落整体应向下移 40px。',
  {
    terms: [
      '盒子：浏览器为元素生成的排版区域，有内容、内边距、边框与外边距。',
      '正常流 / 文档流：没有浮动或绝对定位等特殊处理时的排列关系。',
      '占位：后面的内容会把前面盒子的空间计算进去。',
      '包含块：尺寸与位置的参考区域，常由父级内容区域形成，但定位情况下规则会改变。',
    ],
    steps: [
      '先找 HTML 中 A → B → p 的顺序。',
      '再看页面 A → B → p 的顺序。',
      '只加高前面的盒子，观察后面的盒子被推下去。',
      'width 只是宽度，不是“让盒子并排”的开关；并排后面用 Flex 或 Grid。',
    ],
    pitfalls: [
      '“块元素占满一行”是在解释排版规则，不等于它的彩色背景必定与父盒同宽。设置 width 后仍会另起一行。',
      '这里所有方向说明以普通横排为前提；竖排见逻辑属性实验。',
    ],
  },
  'Web/CSS/Guides/Display/Block_and_inline_layout',
);
foundation(
  'css',
  'css-inline-boxes',
  '文档流 ②：block、inline、inline-block 对照',
  'display 控制盒子如何参与排版。block 通常另起一行；普通非替换 inline 随文字排，width / height 不决定它的大小；inline-block 可以跟文字并排，也能设置宽高。',
  `<div class="row block"><span>A</span> <span>B</span></div>
<div class="row inline"><span>A</span> <span>B</span></div>
<div class="row inline-block"><span>A</span> <span>B</span></div>`,
  `.row { margin-bottom: 16px; border: 1px dashed #64748b; }
.row span { width: 100px; height: 40px; background-color: #bfdbfe; }
.block span { display: block; }
.inline span { display: inline; }
.inline-block span { display: inline-block; vertical-align: top; }`,
  '',
  [
    '第一组 span 改成 block，两个 100×40 盒子上下排。',
    '第二组保持 inline：虽然 CSS 也写了 100×40，但普通 span 的这两个尺寸不会决定盒子大小。',
    '第三组 inline-block：两项横着排，并且各有 100×40 的尺寸；HTML 空格仍会形成项间空白。',
  ],
  '把第三组 display 改成 block，运行：宽高还在，但横排变成上下排。',
  {
    terms: [
      'display 的外部类型：自己与周围盒子怎么排。',
      '内部类型：自己的直接子元素怎么排；flex、grid 是内部布局方式。',
      '替换元素：img 等内容由外部资源提供，不能把普通 span 的尺寸规则直接套给 img。',
    ],
    steps: [
      '三组共用同样的宽高。',
      '唯一核心差别是 display。',
      '因此看到的尺寸与位置差别来自排版方式。',
    ],
    pitfalls: [
      'img 默认可为 inline，却能设置宽高；“所有行内元素不能设宽高”是不准确的。',
    ],
  },
  'Web/CSS/Reference/Properties/display',
);
foundation(
  'css',
  'css-flow-position',
  '文档流 ③：relative 留位，absolute 不留位',
  'relative 先正常排版，再把自己画到偏移后的位置，原占位仍保留。absolute 从普通排版中移出，后面的盒子不再为它留位；定位位置由包含块和 top / left 等决定。',
  `<label>只改变 B 的 position：
  <select id="mode">
    <option>static</option><option>relative</option><option>absolute</option><option>fixed</option>
  </select>
</label>
<div class="parent">
  <div class="box">A</div>
  <div class="box target">B</div>
  <div class="box">C</div>
</div>
<pre id="measure"></pre>`,
  `body { margin: 16px; font-family: sans-serif; }
.parent { position: relative; margin-top: 16px; width: 280px; border: 2px dashed #64748b; }
.box { width: 100px; height: 40px; background-color: #bfdbfe; }
.target { position: static; top: 20px; left: 120px; background-color: #fed7aa; }
pre { white-space: pre-wrap; }`,
  `const target = document.querySelector('.target');
const parentBox = document.querySelector('.parent');
function measure() {
  const b = target.getBoundingClientRect();
  const c = parentBox.children[2].getBoundingClientRect();
  document.querySelector('#measure').textContent =
    'B position = ' + getComputedStyle(target).position +
    '\\n父盒高度 = ' + parentBox.getBoundingClientRect().height + 'px（含上下边框）' +
    '\\nB 顶边 = ' + Math.round(b.top) + 'px；C 顶边 = ' + Math.round(c.top) + 'px（相对预览视口）';
}
document.querySelector('#mode').addEventListener('change', (event) => {
  target.style.position = event.target.value;
  measure();
});
measure();`,
  [
    'static：top、left 不用于偏移，A、B、C 各高 40，父盒含边框高 124px。',
    'relative：B 向右 120、向下 20，但 C 仍保留原位置，父盒仍高 124px。',
    'absolute：B 不再占普通排版位置，C 接到 A 后面，父盒变为 84px；父盒 position: relative 为 B 建立定位参考。',
    'fixed：本例没有建立 fixed 包含块的变换祖先，所以 B 相对预览视口定位，也不留普通占位。',
  ],
  '先切 relative 再 absolute，不改其他值；预测 C 是否会上移 40px，再核对测量输出。',
  {
    terms: [
      'static：默认定位方式，按正常布局排。',
      'relative：相对自身原位置偏移，仍占位。',
      'absolute：脱离正常流，通常相对最近建立绝对定位包含块的祖先定位。',
      'fixed：常相对视口固定，但 transform 等祖先可能改变参考。',
      'sticky：仍占位，滚动达到阈值才吸附；另看定位实验。',
    ],
    steps: [
      '记住 C 的顶边。',
      '切 relative，观察 B 的画面变了，C 的顶边没变。',
      '切 absolute，观察 C 接替 B 原占位。',
      '测量的是实际画面，offsetTop 与坐标参考不能混用。',
    ],
    pitfalls: [
      '脱离正常流不是“从页面消失”，它仍会绘制，可能遮住别人。',
      'transform 也能移动画面，但通常不会让后面的正常流盒子填补原占位。',
    ],
  },
  'Web/CSS/Reference/Properties/position',
);
foundation(
  'css',
  'css-float-wrap',
  '文档流 ④：float 为文字环绕而设计',
  'float 把盒子浮到一侧，使相邻行内文字绕开它。浮动盒子脱离普通流，但仍影响行盒子的可用宽度；它不是“absolute 的另一种写法”。',
  `<div class="article">
  <div class="picture">浮动图块</div>
  <p>这一段文字围绕图块排版。把页面缩窄，观察左边图块旁的每一行文字；超过图块底部后，文字恢复整行宽度。</p>
</div>
<div class="after">下一块内容</div>`,
  `.article { display: flow-root; max-width: 420px; border: 2px dashed #64748b; }
.picture { float: left; width: 100px; height: 100px; margin-right: 12px; background-color: #bfdbfe; }
p { margin: 0; line-height: 1.8; }
.after { background-color: #bbf7d0; }`,
  '',
  [
    '文字不是整个 p 移到右边，而是每一行绕开左侧的浮动区域。',
    'flow-root 创建独立块格式化上下文，父盒高度会包含浮动图块。',
    '删除 flow-root，当文字高度不足 100px 时，父盒高度可能不足以包住浮动图块。',
  ],
  '先把段落文字缩成“短文字”，再删除 display: flow-root，观察边框高度；恢复后边框重新包含浮动。',
  {
    terms: [
      'float: left：向左浮动，让文字从右边绕过。',
      'clear：让当前盒子避开指定侧的前置浮动。',
      'BFC：一块独立的块排版环境；flow-root 是明确创建它的方法。',
    ],
    steps: [
      '先看长文字的环绕。',
      '缩短文字，让浮动高度大于普通文字。',
      '去掉 / 恢复 flow-root，对比父盒是否包住浮动。',
    ],
    pitfalls: ['现代整页分栏通常先选 Flex 或 Grid，float 更适合文字环绕。'],
  },
  'Web/CSS/Reference/Properties/float',
);
foundation(
  'css',
  'css-flex-axes',
  'Flex 入门：父盒排队，主轴与交叉轴',
  '给父盒 display: flex 后，它的直接子元素成为 Flex 项。flex-direction 指定主轴；justify-content 沿主轴分配空白，align-items 沿交叉轴对齐。',
  `<div class="parent"><div>A</div><div>B</div><div>C</div></div>`,
  `.parent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 160px;
  border: 2px solid #64748b;
}
.parent > div { width: 60px; height: 40px; background-color: #bfdbfe; }`,
  '',
  [
    'row 在本例横排：300 - 3×60 = 120px 剩余空间，被 space-between 分到两个间隙，各 60px。',
    'align-items: center 使每项在 160px 高的内容区域中上下居中。',
    '改 column 后主轴竖直，justify-content 的方向随之改变，不再表示左右分布。',
  ],
  '只把 row 改 column；预测哪些方向改变，再查看三个盒子的位置。',
  {
    terms: [
      'Flex 容器：写 display: flex 的父元素。',
      'Flex 项：容器的直接子元素，不包括任意深的后代。',
      '主轴：由 flex-direction 决定。',
      '交叉轴：与主轴垂直。',
      'gap：固定项间间距；space-between 分的是剩余空白，两者可以一起存在。',
    ],
    steps: [
      '先找父盒的 display。',
      '再判断主轴方向。',
      '最后解释主轴和交叉轴各自的对齐属性。',
    ],
    pitfalls: [
      '不要死记 justify-content 是水平、align-items 是垂直，column 时会换方向。',
      'Flex 项默认可能收缩；尺寸约束实验继续学习 flex-shrink。',
    ],
  },
  'Web/CSS/Guides/Flexible_box_layout/Basic_concepts',
);
foundation(
  'css',
  'css-grid-tracks',
  'Grid 入门：列、轨道、间隙与 fr',
  'Grid 同时管理行与列。grid-template-columns 定义每列宽度；gap 是列与列之间的间隙；fr 分配扣除固定轨道和间隙后的剩余空间。',
  `<div class="grid"><div>A</div><div>B</div><div>C</div><div>D</div></div>`,
  `.grid { display: grid; width: 300px; grid-template-columns: 100px 1fr; gap: 10px; }
.grid > div { min-width: 0; height: 60px; background-color: #bfdbfe; }`,
  '',
  [
    '两列：第一列 100px，间隙 10px，第二列 1fr 得到 300-100-10=190px。',
    '四项按 DOM 顺序依次填入两列，形成两行；行间隙也是 10px。',
    '改成 1fr 1fr，剩余 290px 平分，每列 145px。',
  ],
  '只把列定义改为 1fr 2fr；本例两列约 96.67px 和 193.33px，间隙仍为 10px。',
  {
    terms: [
      '轨道：两条网格线之间的列或行。',
      '网格项：Grid 容器的直接子元素。',
      'fr：剩余空间的比例，不是固定像素。',
      'min-width: 0：允许项目缩到其内容固有最小宽度以下；长文本另需处理换行。',
    ],
    steps: [
      '总宽减去 gap。',
      '按列定义分配剩余空间。',
      '项目按顺序填格子；命名区域和跨列在后面的实验学。',
    ],
  },
  'Web/CSS/Guides/Grid_layout/Basic_concepts',
);
foundation(
  'layout',
  'layout-wireframe-960',
  '上传布局图：960px 版心的逐层计算',
  '按图上标注而不是图片像素计算。页面宽 960px，统一间隙 10px；先拆成头部、菜单、主体、页脚，再拆主体内部的左右区域和卡片。',
  `<label><input id="adaptive" type="checkbox"> 切换为窄屏自适应（固定尺寸将改变）</label>
<div class="scroll-view">
  <div class="page">
    <header class="header"><div>logo<br>200 × 80</div><div>banner1<br>540 × 80</div><div>banner2<br>200 × 80</div></header>
    <nav class="menu">菜单 960 × 30</nav>
    <main class="main">
      <section class="left">
        <div class="top"><article>栏目一<br>370 × 200</article><article>栏目二<br>370 × 200</article></div>
        <div class="bottom"><article>栏目三<br>180 × 200</article><article>栏目四<br>180 × 200</article><article>栏目五<br>180 × 200</article><article>栏目六<br>180 × 200</article></div>
      </section>
      <aside class="right"><article>栏目七<br>200 × 130</article><article>栏目八<br>200 × 130</article><article>栏目九<br>200 × 130</article></aside>
    </main>
    <footer class="footer">页脚 960 × 60</footer>
  </div>
</div>
<pre id="sizes"></pre>`,
  `* { box-sizing: border-box; }
body { margin: 16px; font-family: sans-serif; }
.scroll-view { overflow-x: auto; margin-top: 12px; }
.page { width: 960px; margin-inline: auto; display: grid; gap: 10px; }
.header { display: grid; grid-template-columns: 200px 540px 200px; gap: 10px; height: 80px; }
.header > div, .menu, .footer { background-color: #e2e8f0; display: grid; place-items: center; text-align: center; }
.menu { height: 30px; }
.main { display: grid; grid-template-columns: 750px 200px; gap: 10px; }
.left { display: grid; gap: 10px; }
.top { display: grid; grid-template-columns: repeat(2, 370px); gap: 10px; }
.bottom { display: grid; grid-template-columns: repeat(4, 180px); gap: 10px; }
.left article { height: 200px; }
.right { display: grid; grid-template-columns: 200px; gap: 10px; }
.right article { height: 130px; }
article { border: 1px solid #334155; display: grid; place-items: center; text-align: center; }
.footer { height: 60px; }
pre { white-space: pre-wrap; }
/* 单独的响应式变体，不偷偷改变标注尺寸。 */
.page.adaptive { width: min(960px, 100%); }
.adaptive .header { grid-template-columns: 1fr 2.7fr 1fr; }
.adaptive .main { grid-template-columns: minmax(0, 1fr) 200px; }
.adaptive .top { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.adaptive .bottom { grid-template-columns: repeat(4, minmax(0, 1fr)); }
@media (max-width: 650px) {
  .adaptive .main { grid-template-columns: 1fr; }
  .adaptive .bottom { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .adaptive .right { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}`,
  `const page = document.querySelector('.page');
function measure() {
  const rect = page.getBoundingClientRect();
  const first = document.querySelector('.top article').getBoundingClientRect();
  document.querySelector('#sizes').textContent =
    '实际页面：' + Math.round(rect.width) + ' × ' + Math.round(rect.height) + 'px' +
    '\\n栏目一：' + Math.round(first.width) + ' × ' + Math.round(first.height) + 'px' +
    '\\n固定模式：头部 200+10+540+10+200=960' +
    '\\n主体 750+10+200=960；左下 180×4+10×3=750' +
    '\\n主体高度 200+10+200=410；右栏 130×3+10×2=410' +
    '\\n页面高度 80+10+30+10+410+10+60=610';
}
document.querySelector('#adaptive').addEventListener('change', (event) => {
  page.classList.toggle('adaptive', event.target.checked);
  measure();
});
new ResizeObserver(measure).observe(page);
measure();`,
  [
    '固定模式完全采用图中的尺寸：960×610；窄预览会横向滚动，不会把 960 偷换成 100%。',
    '头部三列和两个 gap 相加等于 960。主体左750、右200、中间10。',
    '左上两张370加10等于750；左下四张180加三个10也等于750。',
    'box-sizing: border-box 让栏目边框包含在 370×200 等标注尺寸中。',
    '切自适应后数值会改变；预览中的文字仍标示设计图尺寸，测量输出才是实际尺寸。',
  ],
  '把左上 gap 从 10 改 20，预测 370×2+20=760 会超出 750；再把两列都改 365，恢复刚好装下。',
  {
    terms: [
      '版心：页面内容的统一宽度区域，本图为 960px。',
      '间隙：相邻项目之间的距离；n 个项目只有 n-1 个内部间隙。',
      '嵌套布局：外层分左右，内层各自分行列。',
      '固定尺寸与响应式：先验证设计图计算，再另建窄屏规则。',
    ],
    steps: [
      '第一层：page 的四个孩子按正常顺序组成头、菜单、主体、页脚。',
      '第二层：main 使用两列 750 / 200。',
      '第三层：left 拆 top 与 bottom；right 自己排三行。',
      '第四层：top 两列，bottom 四列。',
      '先算每行宽度，再算主体高度，最后算页面总高度。',
    ],
    pitfalls: [
      '图片实际文件是 1140×720，但图中标注的是 CSS 设计尺寸 960；两者不能混算。',
      '固定模式无需给整个 page 写 height: 610px，它由各区域自然相加得到。',
    ],
  },
  'Web/CSS/How_to/Layout_cookbook',
);
foundation(
  'js',
  'js-page-pipeline',
  '页面如何出现：HTML → CSS → JS → 重新绘制',
  'HTML 先建立页面结构，CSS 计算外观与布局，JavaScript 可以修改结构、样式或状态。页面更新时浏览器按需要重新计算布局与绘制，不是每次都重新下载整张网页。',
  `<p id="message">HTML 创建了这段文字。</p>
<button id="text">只改文字</button>
<button id="wide">切换宽度</button>
<pre id="result">点击按钮，观察代码造成的变化。</pre>`,
  '#message { width: 180px; padding: 12px; background-color: #dbeafe; }\n#message.wide { width: 300px; }\npre { white-space: pre-wrap; }',
  `const message = document.querySelector('#message');
document.querySelector('#text').addEventListener('click', () => {
  message.textContent = 'JavaScript 修改了 DOM 中的文字。';
  document.querySelector('#result').textContent = 'textContent 改内容；新文字可能改变换行和高度。';
});
document.querySelector('#wide').addEventListener('click', () => {
  message.classList.toggle('wide');
  document.querySelector('#result').textContent =
    'classList 切换类名 → CSS 匹配规则改变 → 宽度改变 → 布局更新。';
});`,
  [
    'HTML 中的 id 把元素与 CSS #message、JS querySelector 连接起来。',
    '改文字按钮更新 textContent；切换宽度按钮更新 class，而具体尺寸仍在 CSS 中。',
    'width 改变会影响布局；只改颜色一般不用改变盒子几何尺寸，但仍需要绘制。',
  ],
  '把 .wide 的 width 从 300px 改成 240px，再点击切换宽度按钮，验证 JS 不变也能改变效果。',
  {
    terms: [
      'DOM：浏览器中可被 JS 查询和修改的结构树。',
      '样式计算：判断哪些规则匹配，计算属性最终值。',
      '布局：计算盒子的大小和位置。',
      '绘制：把文字、背景、边框等画出来。',
      'HTTP：网络传输协议，与 HTML 标记语言不同；本实验直接本地运行，不模拟真实网络请求。',
    ],
    steps: [
      '先看 HTML 的内容。',
      '再看 CSS 的宽度。',
      '最后看 JS 监听哪个按钮、修改什么。',
    ],
    pitfalls: [
      '“改颜色一定只有重绘”只是便于入门的概括，实际渲染管线还有合成等优化，应结合开发者工具判断。',
    ],
  },
  'Web/Performance/Guides/How_browsers_work',
);
