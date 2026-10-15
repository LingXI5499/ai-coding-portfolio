/* 原创教学案例。参考目录结构和规范；不复制第三方教程正文。 */
const LESSONS = [];
const MDN = 'https://developer.mozilla.org/en-US/docs/';
const RUNOOB = {
  html: 'https://www.runoob.com/html/html-tutorial.html',
  css: 'https://www.runoob.com/css/css-tutorial.html',
  js: 'https://www.runoob.com/js/js-tutorial.html',
  layout: 'https://www.runoob.com/css/css-tutorial.html',
  project: 'https://www.runoob.com/js/js-examples.html',
};

const LESSON_BASE = `
.lesson-demo {
  max-width: 780px;
  margin: 24px auto;
  padding: 24px;
  background: white;
  border: 1px solid #dce6e0;
  border-radius: var(--lab-radius);
}
.lesson-demo h1 { font-size: 1.7rem; }
.lesson-demo h2 { font-size: 1.25rem; }
.lesson-demo p { color: #55665d; }
.lesson-demo label { display: block; margin: 12px 0; }
.lesson-demo input:not([type=checkbox]):not([type=radio]),
.lesson-demo select, .lesson-demo textarea {
  max-width: 100%;
  padding: 10px;
  border: 1px solid #b5c9be;
  border-radius: 6px;
}
.lesson-demo button {
  padding: 10px 16px;
  margin: 4px;
  border: 1px solid #c5d8cd;
  border-radius: 7px;
  background: #edf5f0;
  color: #134c38;
}
.lesson-demo button:disabled { opacity: .5; cursor: wait; }
.lesson-demo pre {
  padding: 16px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  background: #122b24;
  color: #d0eadb;
  border-radius: 8px;
  min-height: 72px;
}
.lesson-demo table { width: 100%; border-collapse: collapse; }
.lesson-demo th, .lesson-demo td {
  padding: 10px; border: 1px solid #dce6e0; text-align: left;
}
.lesson-demo :focus-visible { outline: 3px solid #bd8e39; outline-offset: 3px; }
@media (max-width: 480px) {
  .lesson-demo { margin: 12px; padding: 16px; }
}
`;

function lesson(
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
  quiz,
  ref,
  extra = {},
) {
  LESSONS.push({
    cat,
    id,
    title,
    module,
    what,
    subtitle: what.split('。')[0] + '。',
    html: html.trim(),
    css: (css || '').trim(),
    js: (js || '').trim(),
    observe,
    challenge,
    quiz,
    doc: MDN + ref,
    uses: extra.uses || [module, '实际页面开发'],
    tags: extra.tags || [module, cat.toUpperCase()],
    level: extra.level || '入门',
    minutes: extra.minutes || 15,
    pitfalls: extra.pitfalls || [],
    ...extra,
  });
}

function language(
  id,
  title,
  module,
  what,
  js,
  observe,
  challenge,
  quiz,
  ref,
  extra = {},
) {
  lesson(
    'js',
    id,
    title,
    module,
    what,
    `<main class="lesson-demo">
  <h1>${title}</h1>
  <p>观察输出，再修改 JavaScript 并运行。输出同时会显示在工作台控制台。</p>
  <pre id="result" aria-live="polite"></pre>
</main>`,
    '',
    `// 把结果写到页面，而不是只在开发者工具里查看。
function print(...values) {
  const text = values.map(value => {
    return typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);
  }).join(' ');
  document.getElementById('result').textContent += text + '\\n';
  console.log(...values);
}

${js}`,
    observe,
    challenge,
    quiz,
    ref,
    extra,
  );
}

// HTML：语义、文本、多媒体、表单和原生组件。
lesson(
  'html',
  'html-document',
  '从一份 HTML 文档开始',
  '文档与语义',
  'doctype 声明现代 HTML 文档；head 放元信息，body 放内容。lang 帮助读屏软件选择语言，viewport 让移动端按设备宽度布局。',
  `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="我的第一份前端作品">
    <title>你好，Web</title>
  </head>
  <body>
    <main class="lesson-demo">
      <h1>你好，Web</h1>
      <p>这是一份完整、可读的 HTML 文档。</p>
    </main>
  </body>
</html>`,
  '',
  '',
  [
    'title 显示在浏览器标签，不会成为正文标题。',
    'charset 统一使用 UTF-8。',
    '打开手机预览检查 viewport 的作用。',
  ],
  '添加二级标题和一段介绍，再导出 HTML；检查导出文件的标签标题。',
  ['正文应该放在哪里？', ['head', 'body', 'meta'], 1, 'body 承载用户看到的页面内容。'],
  'Learn_web_development/Core/Structuring_content/Basic_HTML_syntax',
  {
    pitfalls: [
      '不要把可见正文放在 head 内。',
      '标签嵌套要正确，段落 p 里不要嵌套 div。',
    ],
  },
);

lesson(
  'html',
  'html-inline',
  '强调、引用与文本语义',
  '文档与语义',
  'strong 表示重要性，em 表示重读强调，mark 标记当前相关内容。视觉上的粗体不等同于语义上的重要。',
  `<article class="lesson-demo">
  <h1>一段有语义的笔记</h1>
  <p><strong>保存草稿</strong>后再退出，<em>尤其</em>是在网络不稳定的时候。</p>
  <p>搜索结果：<mark>语义化</mark> HTML。</p>
  <blockquote cite="https://developer.mozilla.org/">
    <p>先说明内容的意义，再决定它的外观。</p>
  </blockquote>
  <p>术语 <abbr title="HyperText Markup Language">HTML</abbr>，按 <kbd>Ctrl</kbd> + <kbd>S</kbd> 保存。</p>
  <p>水：H<sub>2</sub>O；面积：m<sup>2</sup>；<del>旧价格 99</del> <ins>新价格 79</ins>。</p>
  <p>更新时间：<time datetime="2026-10-11">2026 年 10 月 11 日</time></p>
</article>`,
  '',
  '',
  [
    'abbr 的 title 给出缩略语全称。',
    'datetime 提供机器可读日期。',
    'del 和 ins 表达内容修订。',
  ],
  '用 code 标记一个变量名，并用 samp 展示程序输出。',
  [
    '哪个标签表示重要内容？',
    ['b', 'strong', 'span'],
    1,
    'strong 有重要性的语义；b 主要用于引起注意。',
  ],
  'Web/HTML/Reference/Elements/strong',
);

lesson(
  'html',
  'html-description',
  '描述列表与联系信息',
  '文档与语义',
  'dl、dt、dd 表达术语与说明，也适合产品参数。address 表达作者或组织的联系方式，不是任意邮寄地址的通用容器。',
  `<main class="lesson-demo">
  <h1>作品信息</h1>
  <dl>
    <dt>技术栈</dt><dd>HTML、CSS、JavaScript</dd>
    <dt>开发目标</dt><dd>让抽象知识可以被操作和观察</dd>
    <dt>运行环境</dt><dd>现代桌面与移动浏览器</dd>
  </dl>
  <address>维护者：<a href="mailto:hello@example.com">hello@example.com</a></address>
</main>`,
  'dt { font-weight: 700; margin-top: 16px; }\ndd { margin: 4px 0; color: #60746a; }',
  '',
  ['一个 dt 后可以跟多个 dd。', '默认 dd 缩进可以用 CSS 修改。'],
  '添加“设计理念”和两条解释。',
  [
    '参数名适合哪一个元素？',
    ['dt', 'dd', 'li'],
    0,
    'dt 是名称或术语，dd 是相应的描述。',
  ],
  'Web/HTML/Reference/Elements/dl',
);

lesson(
  'html',
  'html-attributes',
  '全局属性与 data-*',
  '文档与语义',
  'id 唯一标识元素，class 用于复用样式，data-* 存放轻量业务信息。hidden 隐藏非当前内容，属性和 DOM 属性之间存在映射。',
  `<main class="lesson-demo">
  <h1>课程卡片</h1>
  <article id="course" class="course-card" data-level="beginner" title="入门课程">
    <h2>HTML 基础</h2>
    <p lang="en">Learn by doing.</p>
    <p id="extra" hidden>每天完成一项实验即可。</p>
    <button id="more" type="button" aria-expanded="false" aria-controls="extra">阅读建议</button>
  </article>
</main>`,
  '',
  `const button = document.getElementById('more');
const extra = document.getElementById('extra');

button.addEventListener('click', () => {
  extra.hidden = !extra.hidden;
  button.setAttribute('aria-expanded', String(!extra.hidden));
  console.log(document.getElementById('course').dataset.level);
});`,
  ['data-level 通过 dataset.level 读取。', 'aria-expanded 与显示状态同步。'],
  '再加一个 data-duration 属性，并在控制台打印出来。',
  [
    '同一文档的 id 应该如何设置？',
    ['可以随意重复', '保持唯一', '只能是数字'],
    1,
    '唯一 id 可确保标签关联、锚点和查询的目标清晰。',
  ],
  'Web/HTML/Reference/Global_attributes',
);

lesson(
  'html',
  'html-figure',
  '图片、替代文本与图注',
  '媒体与嵌入',
  'figure 把图片与 figcaption 图注组合起来。alt 描述有意义的图片；纯装饰图片使用空 alt。width 和 height 预留空间以减少布局跳动。',
  `<main class="lesson-demo">
  <h1>城市的颜色</h1>
  <figure>
    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='240'%3E%3Crect width='600' height='240' fill='%23c8ded2'/%3E%3Ccircle cx='420' cy='85' r='50' fill='%23dea952'/%3E%3Cpath d='M0 240L200 70L350 240Z' fill='%23426d59'/%3E%3C/svg%3E" alt="绿色山峰与一轮金色太阳的几何插画" width="600" height="240">
    <figcaption>图 1：用几何图形练习视觉层次。</figcaption>
  </figure>
</main>`,
  'figure { margin: 0; }\nimg { display: block; max-width: 100%; height: auto; }\nfigcaption { margin-top: 10px; color: #65766d; }',
  '',
  ['禁用图片时 alt 仍能说明含义。', '图片按比例缩放而不是拉伸。'],
  '把图注改成作品名，为图片设置 loading="lazy"。',
  [
    '纯装饰图片的 alt 推荐是什么？',
    ['图片', '空字符串', '省略 alt'],
    1,
    '空 alt 表示无需读屏软件重复朗读装饰内容。',
  ],
  'Web/HTML/Reference/Elements/img',
);

lesson(
  'html',
  'html-picture',
  'picture 与响应式图片',
  '媒体与嵌入',
  'picture 的 source 可以根据媒体条件选择不同构图，img 是回退内容。srcset 与 sizes 则帮助浏览器选择合适分辨率，不能把两种目的混淆。',
  `<main class="lesson-demo">
  <h1>宽屏与窄屏的不同构图</h1>
  <picture>
    <source media="(max-width: 480px)" srcset="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='240'%3E%3Crect width='300' height='240' fill='%23e8be85'/%3E%3Ctext x='30' y='120' font-size='28'%3EMOBILE%3C/text%3E%3C/svg%3E">
    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='240'%3E%3Crect width='700' height='240' fill='%23a7cbb7'/%3E%3Ctext x='240' y='120' font-size='28'%3EDESKTOP%3C/text%3E%3C/svg%3E" alt="随容器宽度切换的示意图" width="700" height="240">
  </picture>
</main>`,
  'img { max-width: 100%; height: auto; }',
  '',
  ['切换手机预览后图片内容变成 MOBILE。', 'img 回退不可省略，alt 写在 img 上。'],
  '将 media 的阈值改成 800px，比较三个设备。',
  [
    'picture 的替代文字应该放在哪里？',
    ['source', 'picture', 'img'],
    2,
    'img 是实际的图片元素，并提供回退与替代文本。',
  ],
  'Web/HTML/Reference/Elements/picture',
);

lesson(
  'html',
  'html-media',
  '音频与视频原生控件',
  '媒体与嵌入',
  'audio 和 video 用 controls 提供播放控制，source 指定媒体类型。没有素材时要清楚说明空状态；本实验不依赖外部媒体资源。',
  `<main class="lesson-demo">
  <h1>选择本地媒体来试播</h1>
  <label>本地音频 <input id="audioFile" type="file" accept="audio/*"></label>
  <audio id="player" controls preload="metadata">浏览器不支持 audio。</audio>
  <label>本地视频 <input id="videoFile" type="file" accept="video/*"></label>
  <video id="video" controls playsinline width="480">浏览器不支持 video。</video>
  <p>文件只在当前预览中播放，不会上传。正式视频应配字幕 track。</p>
</main>`,
  'audio, video { display: block; max-width: 100%; margin: 12px 0; }',
  `for (const [inputId, playerId] of [['audioFile', 'player'], ['videoFile', 'video']]) {
  let previousUrl;
  document.getElementById(inputId).addEventListener('change', event => {
    const file = event.target.files[0];
    if (!file) return;
    if (previousUrl) URL.revokeObjectURL(previousUrl);
    previousUrl = URL.createObjectURL(file);
    document.getElementById(playerId).src = previousUrl;
  });
}`,
  ['选择文件后播放原生媒体。', 'object URL 在重新选择文件时释放。'],
  '给 video 加 muted，并观察自动播放限制。',
  [
    '字幕适合使用哪个标签？',
    ['track', 'summary', 'caption'],
    0,
    'track 提供字幕或其他定时文本。',
  ],
  'Web/HTML/Reference/Elements/video',
);

lesson(
  'html',
  'html-embed',
  'iframe 与独立浏览上下文',
  '媒体与嵌入',
  'iframe 在文档中嵌入独立页面。sandbox 限制子页面能力，title 帮助用户理解框架内容。本学习工作台也用隔离的 iframe 运行代码。',
  `<main class="lesson-demo">
  <h1>一个嵌套的迷你页面</h1>
  <iframe title="欢迎卡片示例" sandbox srcdoc="<h2>你好，子页面</h2><p>我的 DOM 与外层页面分开。</p>"></iframe>
  <p>空 sandbox 保留所有限制；添加 allow-scripts 才允许执行脚本。</p>
</main>`,
  'iframe { width: 100%; min-height: 180px; border: 1px solid #b8cfc2; border-radius: 8px; }',
  '',
  ['子文档不会继承外部页面 CSS。', 'srcdoc 中的引号需要正确编码。'],
  '把 srcdoc 的标题和段落换成自己的内容。',
  [
    'sandbox="allow-scripts" 允许什么？',
    ['访问父页面 DOM', '执行子页面脚本', '自动获得同源身份'],
    1,
    'allow-scripts 只解除脚本执行限制，不等于允许同源访问。',
  ],
  'Web/HTML/Reference/Elements/iframe',
  { level: '进阶' },
);

lesson(
  'html',
  'html-input-types',
  '输入类型与浏览器校验',
  '表单与可访问性',
  'email、url、number、date 等 type 提供适合的输入体验。required、min、max、step 和 pattern 声明输入约束，不能替代服务端验证。',
  `<main class="lesson-demo">
  <h1>课程报名</h1>
  <form id="signup">
    <label>邮箱 <input name="email" type="email" required autocomplete="email"></label>
    <label>主页 <input name="website" type="url" placeholder="https://example.com"></label>
    <label>每周学习小时 <input name="hours" type="number" min="1" max="40" step="1" value="5" required></label>
    <label>开始日期 <input name="start" type="date" required></label>
    <button type="submit">检查报名信息</button>
    <output id="formResult" aria-live="polite"></output>
  </form>
</main>`,
  '',
  `document.getElementById('signup').addEventListener('submit', event => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target));
  document.getElementById('formResult').textContent = '验证通过：' + data.email + '（本地演示，不提交）';
});`,
  ['无效邮箱会阻止 submit 事件。', '只有带 name 的表单控件进入 FormData。'],
  '加入一个 required 的 tel 输入框，设置 pattern="[0-9]{11}"。',
  [
    'FormData 使用哪个属性作为字段名？',
    ['id', 'name', 'class'],
    1,
    'id 用于关联与查询；name 才是提交字段名。',
  ],
  'Web/HTML/Reference/Elements/input',
);

lesson(
  'html',
  'html-fieldset',
  'fieldset、label 与选项分组',
  '表单与可访问性',
  'fieldset 和 legend 为相关控件分组。同名 radio 形成单选组，checkbox 可以多选；label 让点击文字也能操作控件。',
  `<main class="lesson-demo">
  <h1>定制学习计划</h1>
  <form>
    <fieldset>
      <legend>学习方向（单选）</legend>
      <label><input type="radio" name="track" value="html" checked> HTML</label>
      <label><input type="radio" name="track" value="css"> CSS</label>
      <label><input type="radio" name="track" value="js"> JavaScript</label>
    </fieldset>
    <fieldset>
      <legend>想要练习（多选）</legend>
      <label><input type="checkbox" name="practice" value="layout"> 页面布局</label>
      <label><input type="checkbox" name="practice" value="interaction"> 交互开发</label>
    </fieldset>
    <label for="notes">学习目标</label>
    <textarea id="notes" name="notes" rows="3" maxlength="200"></textarea>
  </form>
</main>`,
  'fieldset { border: 1px solid #cadcd1; border-radius: 8px; margin: 12px 0; }',
  '',
  ['点击文字即可切换选项。', '改变 radio 的 name 会破坏组内互斥关系。'],
  '加入一个“接收提醒”复选框，默认选中。',
  [
    'radio 通过什么形成同组？',
    ['相同 name', '相同 id', '相同 value'],
    0,
    'name 相同的单选按钮在同一组里互斥。',
  ],
  'Web/HTML/Reference/Elements/fieldset',
);

lesson(
  'html',
  'html-select',
  'select、datalist 与 output',
  '表单与可访问性',
  'select 限制用户从给定选项选择，datalist 只提供建议，用户仍可输入其他值。output 用来表示计算结果。',
  `<main class="lesson-demo">
  <h1>学习预算</h1>
  <label>计划
    <select id="plan"><optgroup label="学习时长"><option value="15">每日 15 分钟</option><option value="30">每日 30 分钟</option></optgroup></select>
  </label>
  <label>兴趣 <input list="topics" placeholder="也可以自行输入"></label>
  <datalist id="topics"><option value="排版"><option value="动画"><option value="交互"></datalist>
  <p>一周学习时间：<output id="total" for="plan">105</output> 分钟</p>
</main>`,
  '',
  `document.getElementById('plan').addEventListener('change', event => {
  document.getElementById('total').value = Number(event.target.value) * 7;
});`,
  ['input list 关联 datalist 的 id。', 'output 的 for 可以关联参与计算的控件。'],
  '加入 60 分钟选项，检查结果。',
  [
    'datalist 是否限制只能选已有选项？',
    ['是', '否', '只有手机限制'],
    1,
    'datalist 提供输入建议，不强制限制取值。',
  ],
  'Web/HTML/Reference/Elements/datalist',
);

lesson(
  'html',
  'html-progress-meter',
  'progress 与 meter 的区别',
  '原生组件',
  'progress 表达任务完成进度；meter 表达已知范围中的测量值，例如存储使用量。未知总进度时省略 progress 的 value。',
  `<main class="lesson-demo">
  <h1>任务与测量</h1>
  <label>学习完成度 <progress value="45" max="100">45%</progress></label>
  <label>磁盘使用 <meter min="0" max="100" low="30" high="80" optimum="20" value="65">65%</meter></label>
  <label>正在寻找资料 <progress>正在加载</progress></label>
</main>`,
  'progress, meter { width: 220px; max-width: 100%; vertical-align: middle; }',
  '',
  [
    '不确定型 progress 由浏览器显示等待状态。',
    'meter 的 high、low、optimum 影响原生颜色。',
  ],
  '把 meter 的 value 改成 95，观察变化。',
  [
    '显示文件上传任务应选什么？',
    ['meter', 'progress', 'time'],
    1,
    'progress 专门表示任务的进展。',
  ],
  'Web/HTML/Reference/Elements/progress',
);

lesson(
  'html',
  'html-dialog',
  '原生 dialog 与表单关闭',
  '原生组件',
  'dialog.showModal() 提供模态顶层、焦点管理和 Esc 关闭。form method="dialog" 可以关闭对话框并设置 returnValue。',
  `<main class="lesson-demo">
  <h1>原生确认框</h1>
  <button id="open" type="button">打开学习确认</button>
  <p id="decision" aria-live="polite">尚未选择</p>
  <dialog id="confirm" aria-labelledby="dialogTitle">
    <h2 id="dialogTitle">开始这个实验？</h2>
    <p>先观察预览，再修改一行代码。</p>
    <form method="dialog">
      <button value="cancel">稍后</button>
      <button value="start" autofocus>开始学习</button>
    </form>
  </dialog>
</main>`,
  'dialog { max-width: 85%; border: 0; border-radius: 14px; padding: 28px; }\ndialog::backdrop { background: #12342588; }',
  `const dialog = document.getElementById('confirm');
document.getElementById('open').addEventListener('click', () => {
  dialog.returnValue = '';
  dialog.showModal();
});
dialog.addEventListener('close', () => {
  document.getElementById('decision').textContent = dialog.returnValue === 'start' ? '准备开始！' : '已取消';
});`,
  ['Tab 焦点被限制在模态框内部。', '关闭后焦点回到触发按钮。'],
  '添加第三个“先看讲解”的选项。',
  [
    '哪一个方法打开模态 dialog？',
    ['show()', 'showModal()', 'open()'],
    1,
    'showModal 打开模态对话框，show 打开非模态对话框。',
  ],
  'Web/HTML/Reference/Elements/dialog',
);

lesson(
  'html',
  'html-popover',
  'Popover 原生浮层',
  '原生组件',
  'popover 可以用声明式按钮打开，自动浮层支持点击外部或 Esc 关闭。它不是模态框，不会阻止与页面其余部分交互。',
  `<main class="lesson-demo">
  <h1>不用 JavaScript 的提示层</h1>
  <button popovertarget="tip">查看提示</button>
  <div id="tip" popover>
    <h2>小提示</h2>
    <p>先改变一个参数，更容易观察因果关系。</p>
    <button popovertarget="tip" popovertargetaction="hide">知道了</button>
  </div>
</main>`,
  '[popover] { max-width: 85%; padding: 24px; border: 1px solid #c8d9cf; border-radius: 12px; }',
  '',
  ['popover 与 popovertarget 的 id 对应。', '使用前在 MDN 检查目标浏览器兼容性。'],
  '将 popover="manual" 并比较点击外部的效果。',
  [
    '自动 popover 是否阻止背景交互？',
    ['是', '否', '必须设置 JS'],
    1,
    'popover 是非模态浮层。',
  ],
  'Web/HTML/Reference/Global_attributes/popover',
  { level: '进阶' },
);

lesson(
  'html',
  'html-template',
  'template 与可复用 DOM 片段',
  '原生组件',
  'template 内的内容不会立即渲染，使用 content.cloneNode(true) 复制后加入页面。避免把用户输入拼进 innerHTML。',
  `<main class="lesson-demo">
  <h1>复制课程卡片</h1>
  <button id="add">添加课程</button>
  <div id="courses"></div>
  <template id="cardTemplate">
    <article class="course-card"><h2></h2><p>打开源码，观察如何克隆节点。</p></article>
  </template>
</main>`,
  '.course-card { padding: 12px; margin-top: 12px; background: #eef5f0; border-radius: 8px; }',
  `let count = 0;
document.getElementById('add').addEventListener('click', () => {
  const fragment = document.getElementById('cardTemplate').content.cloneNode(true);
  fragment.querySelector('h2').textContent = '课程 ' + (++count);
  document.getElementById('courses').append(fragment);
});`,
  ['template 本身不可见。', 'cloneNode(true) 复制所有后代。'],
  '在模板加入一个按钮并为新按钮绑定事件。',
  [
    'template 的片段在哪里？',
    ['innerText', 'content', 'value'],
    1,
    'content 是存放模板节点的 DocumentFragment。',
  ],
  'Web/HTML/Reference/Elements/template',
);

lesson(
  'html',
  'html-accessibility',
  '键盘导航与无障碍命名',
  '表单与可访问性',
  '优先用 button、a 和 label 等原生元素。键盘用户需要可见焦点，输入框需要明确标签，图标按钮需要可访问名称。',
  `<main class="lesson-demo">
  <a href="#article">跳到正文</a>
  <h1>试着只使用键盘</h1>
  <label for="searchField">搜索课程</label>
  <input id="searchField" type="search">
  <button type="button" aria-label="收藏课程">☆</button>
  <article id="article" tabindex="-1"><h2>正文区域</h2><p>按 Tab 移动，按 Enter 激活按钮。</p></article>
</main>`,
  ':focus-visible { outline: 3px solid #b27a20; outline-offset: 4px; }',
  '',
  ['Tab 按 DOM 顺序访问控件。', 'tabindex=-1 可以程序化聚焦，不加入常规 Tab 顺序。'],
  '将图标按钮文字改成“收藏”，思考 aria-label 是否还必要。',
  [
    '键盘焦点轮廓应该怎样处理？',
    ['全部移除', '提供清晰可见的样式', '只给鼠标显示'],
    1,
    '焦点指示让键盘用户知道当前操作位置。',
  ],
  'Learn_web_development/Core/Accessibility/HTML',
);

lesson(
  'html',
  'html-table-span',
  '复杂表格与表头关联',
  '文档与语义',
  'caption 描述表格目的，scope 标明行列标题。colspan、rowspan 合并单元格；表格用于数据关系，不用于页面布局。',
  `<main class="lesson-demo">
  <table>
    <caption>本周学习安排</caption>
    <thead><tr><th scope="col">阶段</th><th scope="col">主题</th><th scope="col">时长</th></tr></thead>
    <tbody>
      <tr><th scope="row" rowspan="2">基础</th><td>HTML 语义</td><td>30 分钟</td></tr>
      <tr><td>CSS 盒模型</td><td>45 分钟</td></tr>
      <tr><th scope="row">进阶</th><td>DOM 事件</td><td>60 分钟</td></tr>
    </tbody>
    <tfoot><tr><th colspan="2" scope="row">合计</th><td>135 分钟</td></tr></tfoot>
  </table>
</main>`,
  'caption { text-align: left; font-weight: 700; padding-bottom: 14px; }',
  '',
  ['合并后每一行仍要对应相同的总列数。', 'th 与 td 提供不同的语义。'],
  '加入一个新阶段，再更新合计时间。',
  [
    '横向合并使用哪个属性？',
    ['rowspan', 'colspan', 'span-row'],
    1,
    'colspan 表示跨越的列数。',
  ],
  'Web/HTML/Reference/Elements/table',
);

// CSS：每个例子专注一组能够观察差异的机制。
const cssCases = [
  [
    'css-cascade',
    '级联、继承与优先级',
    '选择器与级联',
    '同一个属性冲突时，级联综合来源、重要性、层、优先级和顺序。颜色可继承，边框通常不继承。',
    '<section class="cascade"><h2 id="headline" class="title">我最终是什么颜色？</h2><p>这段文字继承父级颜色。</p></section>',
    '.cascade { color: #317051; }\nh2 { color: #b45309; }\n.title { color: #2563eb; }\n#headline { color: #7c3aed; }',
    ['id 选择器优先级高于类选择器。', '删除 id 规则后观察 class 规则生效。'],
    '删掉两条规则，逐步观察最终颜色。',
    [
      '在相同来源和层中，哪个优先级通常更高？',
      ['标签', '类', 'id'],
      2,
      'id 的优先级高于类与标签；仍需先考虑级联层和重要性。',
    ],
    'Web/CSS/CSS_cascade/Specificity',
  ],
  [
    'css-layers',
    '@layer 管理样式层',
    '选择器与级联',
    '命名级联层使样式覆盖顺序可控。普通声明中后面的层优先，未分层普通声明高于分层声明；important 的层顺序相反。',
    '<button class="layer-button">层控制的按钮</button>',
    '@layer reset, components, overrides;\n@layer components { .layer-button { background: #dbeafe; padding: 18px; } }\n@layer overrides { button { background: #d2e8da; } }',
    ['低优先级选择器可以在后面的层覆盖前面层。', '实验普通声明，不使用 important。'],
    '交换层的声明顺序，比较按钮背景。',
    [
      '普通声明中谁优先？',
      ['前面的层', '后面的层', '按层名排序'],
      1,
      '普通声明优先采用后声明的层。',
    ],
    'Web/CSS/Reference/At-rules/@layer',
  ],
  [
    'css-display',
    'display 与文档流',
    '盒模型与尺寸',
    'block 独占行，inline 在行内排列，inline-block 保留行内位置但可设置尺寸。display:none 移除布局占位，visibility:hidden 保留占位。',
    '<div class="flow"><span>inline</span><span>inline</span><b>inline-block</b><p>block 独占一行</p><span>最后一项</span></div>',
    '.flow { border: 1px dashed #9bb8a7; padding: 16px; }\n.flow span { background: #e7c78f; }\n.flow b { display: inline-block; width: 140px; padding: 12px; background: #cae1d2; }\n.flow p { background: #dbeafe; }',
    ['span 默认不独占行。', '改 visibility 和 display 比较占位。'],
    '把 p 改成 inline-block。',
    [
      '隐藏并移除占位使用什么？',
      ['visibility: hidden', 'display: none', 'opacity: 0'],
      1,
      'display:none 让元素不生成布局盒子。',
    ],
    'Web/CSS/Reference/Properties/display',
  ],
  [
    'css-sizing',
    'box-sizing 与实际宽度',
    '盒模型与尺寸',
    'content-box 的 width 不包含 padding 和 border；border-box 包含它们。相同声明宽度可能生成不同的外部尺寸。',
    '<div class="size content">content-box：200 + 40 + 4 = 244px</div><div class="size border">border-box：总宽 200px</div>',
    '.size { width: 200px; padding: 20px; border: 2px solid #658a74; margin: 12px 0; background: #e6f1e9; }\n.content { box-sizing: content-box; }\n.border { box-sizing: border-box; }',
    ['边框宽度有左右两边。', 'border-box 中内容宽度为 156px。'],
    '把 padding 改成 30px，重新计算总宽度。',
    [
      'border-box 的 width 包含什么？',
      ['仅内容', '内容、内边距和边框', '还包含 margin'],
      1,
      '外边距始终位于声明盒尺寸之外。',
    ],
    'Web/CSS/Reference/Properties/box-sizing',
  ],
  [
    'css-units',
    'px、rem、em 与视口单位',
    '盒模型与尺寸',
    'rem 相对根字号，em 在 font-size 中相对父字号，在多数其他属性中相对自身字号。vw、vh 随视口变化，dvh 更适合动态移动视口。',
    '<div class="units"><p class="rem">1.5rem 字号</p><p class="em">1.5em 字号</p><div class="viewport">宽度 30vw</div></div>',
    '.units { font-size: 20px; }\n.rem { font-size: 1.5rem; }\n.em { font-size: 1.5em; }\n.viewport { width: 30vw; padding: 1em; background: #d6e9dc; }',
    ['调整右侧根字号，观察 rem。', 'em 示例使用父字号 20px。'],
    '把 .units 字号改成 30px。',
    [
      'rem 相对于哪个字号？',
      ['父元素', '根元素', '浏览器宽度'],
      1,
      'rem 始终以根元素字号为基准。',
    ],
    'Web/CSS/Reference/Values/length',
  ],
  [
    'css-math',
    'calc、min、max 与 clamp',
    '盒模型与尺寸',
    'CSS 数学函数把固定值与相对值组合。clamp(min, preferred, max) 让尺寸在边界内流动，适合响应式字号。',
    '<h2 class="fluid-title">让文字自然适配宽度</h2><div class="math-card">宽度 min(100%, 480px)</div>',
    '.fluid-title { font-size: clamp(22px, 4vw, 48px); }\n.math-card { width: min(100%, 480px); padding: calc(12px + 1vw); background: #e5efe7; }',
    ['手机与电脑字号不同但不超过边界。', 'calc 运算的加减号两侧保留空格。'],
    '修改 clamp 的最大字号为 64px。',
    [
      'clamp 参数顺序是什么？',
      ['最大、理想、最小', '最小、理想、最大', '理想、最大、最小'],
      1,
      'clamp 在最小与最大值之间约束理想值。',
    ],
    'Web/CSS/Reference/Values/clamp',
  ],
  [
    'css-margin',
    '外边距折叠',
    '盒模型与尺寸',
    '普通块布局中相邻垂直 margin 可能折叠成较大的值。Flex 和 Grid 子项的外边距不会按同样方式折叠。',
    '<div class="normal"><p>普通块：下 30px</p><p>普通块：上 20px</p></div><div class="flex-margin"><p>Flex：下 30px</p><p>Flex：上 20px</p></div>',
    '.normal, .flex-margin { border: 1px solid #b5ccbd; padding: 10px; margin: 15px 0; }\n.normal p, .flex-margin p { background: #deeddf; margin: 0; }\n.normal p:first-child, .flex-margin p:first-child { margin-bottom: 30px; }\n.normal p:last-child, .flex-margin p:last-child { margin-top: 20px; }\n.flex-margin { display: flex; flex-direction: column; }',
    ['普通块间距为 30px，Flex 间距为 50px。', '边框避免父子 margin 折叠干扰实验。'],
    '把普通容器也改成 flex。',
    [
      '两个正的相邻折叠 margin 如何计算？',
      ['相加', '取较大值', '取较小值'],
      1,
      '简单的两个正 margin 折叠后取较大值。',
    ],
    'Web/CSS/CSS_box_model/Mastering_margin_collapsing',
  ],
  [
    'css-logical',
    '逻辑属性与书写方向',
    '盒模型与尺寸',
    'inline 和 block 按书写方向定义尺寸与边界。padding-inline、margin-block 等逻辑属性能减少左右方向的硬编码。',
    '<div class="logical" dir="ltr">LTR → 阅读方向</div><div class="logical" dir="rtl">RTL ← 阅读方向</div>',
    '.logical { border-inline-start: 5px solid #457c5d; padding-inline: 18px; padding-block: 12px; margin-block: 14px; background: #e9f2ec; }',
    ['dir=rtl 时起始边框转到右边。', '逻辑属性更适合多语言界面。'],
    '设置 writing-mode:vertical-rl 比较起始边。',
    [
      'inline-start 在 RTL 中通常是哪边？',
      ['左', '右', '下'],
      1,
      '水平方向的 RTL 行内起始侧在右边。',
    ],
    'Web/CSS/CSS_logical_properties_and_values',
  ],
  [
    'css-flex-grow',
    'Flex 伸缩与 min-width',
    '布局机制',
    'flex-grow 分配剩余空间，flex-shrink 分担不足空间，flex-basis 是分配前的基准。长内容需要 min-width:0 才能按预期收缩。',
    '<div class="flex-lab"><div>A：1 份</div><div>B：2 份</div><div>C：1 份</div></div>',
    '.flex-lab { display: flex; gap: 12px; }\n.flex-lab > div { flex: 1 1 0; min-width: 0; padding: 20px; background: #dbeade; }\n.flex-lab > div:nth-child(2) { flex-grow: 2; background: #ecdcbf; }',
    ['第二项获得两份可分配空间。', 'gap 不参与 flex-grow 比例。'],
    '把第二项 flex-grow 改成 3。',
    [
      '分配剩余空间由什么控制？',
      ['flex-grow', 'flex-shrink', 'order'],
      0,
      'grow 控制剩余空间分配的相对比例。',
    ],
    'Web/CSS/Reference/Properties/flex',
  ],
  [
    'css-grid-areas',
    'Grid 命名区域',
    '布局机制',
    'grid-template-areas 用区域名字描述页面结构。每个同名区域必须形成矩形，媒体查询可以重排区域而不修改 DOM。',
    '<div class="areas"><header>页头</header><nav>导航</nav><article>主要内容</article><footer>页脚</footer></div>',
    '.areas { display: grid; grid-template-columns: 130px 1fr; grid-template-areas: "header header" "nav main" "footer footer"; gap: 12px; }\n.areas > * { padding: 20px; background: #e1ede4; }\n.areas header { grid-area: header; }\n.areas nav { grid-area: nav; }\n.areas article { grid-area: main; }\n.areas footer { grid-area: footer; }\n@media (max-width: 480px) { .areas { grid-template-columns: 1fr; grid-template-areas: "header" "nav" "main" "footer"; } }',
    ['宽屏导航在左边，窄屏回到一列。', '可视顺序不要与阅读和焦点顺序冲突。'],
    '增加一个右侧 aside 区域。',
    [
      '同名网格区域应是什么形状？',
      ['任意形状', '矩形', '圆形'],
      1,
      '不规则同名区域使声明无效。',
    ],
    'Web/CSS/Reference/Properties/grid-template-areas',
  ],
  [
    'css-auto-fit',
    'auto-fit 与自适应卡片',
    '布局机制',
    'repeat(auto-fit,minmax(...)) 根据可用空间自动确定列数。min(100%,180px) 避免极窄设备溢出。',
    '<div class="auto-grid"><article>HTML</article><article>CSS</article><article>JavaScript</article><article>Web API</article></div>',
    '.auto-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 180px), 1fr)); gap: 16px; }\n.auto-grid article { padding: 32px 20px; background: #dfede3; border-radius: 10px; }',
    ['无需多个断点即可自动改变列数。', 'auto-fit 折叠空轨道，auto-fill 保留空轨道。'],
    '将最小卡片宽度改为 240px。',
    [
      'auto-fit 会如何处理空轨道？',
      ['折叠', '始终保留', '改为一列'],
      0,
      'auto-fit 将空轨道折叠，剩余轨道可扩展。',
    ],
    'Web/CSS/Reference/Values/repeat',
  ],
  [
    'css-stacking',
    'z-index 与层叠上下文',
    '布局机制',
    'z-index 在当前层叠上下文比较。transform、opacity 等可能建立新上下文，子元素再大的 z-index 也不能逃出父上下文。',
    '<div class="stack"><div class="parent">父层 1<div class="child">子层 999</div></div><div class="other">另一个父层 2</div></div>',
    '.stack { position: relative; height: 230px; }\n.parent { position: relative; z-index: 1; width: 200px; height: 150px; padding: 12px; background: #c6dfce; }\n.child { position: absolute; z-index: 999; top: 70px; left: 80px; width: 200px; padding: 25px; background: #d9bb82; }\n.other { position: absolute; z-index: 2; top: 100px; left: 150px; padding: 40px; background: #b8cfea; }',
    ['子层 999 仍被另一个父层 2 覆盖。', '提高 parent 的层级会改变结果。'],
    '把 parent 的 z-index 改为 3。',
    [
      '子元素能靠极大 z-index 逃出父上下文吗？',
      ['能', '不能', '只能在手机上'],
      1,
      '层叠上下文整体作为一个单元参与父级排序。',
    ],
    'Web/CSS/CSS_positioned_layout/Stacking_context',
  ],
  [
    'css-pseudo',
    '伪元素与生成内容',
    '选择器与级联',
    '::before、::after 创建装饰性生成内容；::first-letter 可以修饰首字。重要信息应在 HTML 中，不能只依赖 CSS content。',
    '<p class="quote">每次修改一个变量，才能看清变化的原因。</p><p class="dropcap">从一个很小的页面开始，让每次改动都有可见的反馈。</p>',
    '.quote::before { content: "“"; color: #a17835; font-size: 3rem; vertical-align: middle; }\n.quote::after { content: "”"; color: #a17835; font-size: 3rem; vertical-align: middle; }\n.dropcap::first-letter { float: left; font-size: 3rem; line-height: 1; margin-inline-end: 10px; }',
    ['伪元素不是真实 DOM 节点。', '首字下沉使用 float 使文字环绕。'],
    '用 ::after 添加一个装饰性圆点。',
    [
      '关键提示只写在 content 里是否合适？',
      ['合适', '不合适', '只要颜色足够深'],
      1,
      '关键信息应该作为实际 HTML 内容存在。',
    ],
    'Web/CSS/Reference/Selectors/Pseudo-elements',
  ],
  [
    'css-has',
    ':has 与关系选择器',
    '选择器与级联',
    ':has() 可以根据后代或相邻元素的状态选择父级。复杂选择器要兼顾性能，并检查目标浏览器支持。',
    '<label class="choice"><input type="checkbox"> 我愿意每天练习 15 分钟</label><label class="choice"><input type="checkbox"> 我会记录学习笔记</label>',
    '.choice { padding: 20px; border: 1px solid #cbdccf; border-radius: 10px; }\n.choice:has(input:checked) { background: #e2f0e7; border-color: #427a58; }',
    ['勾选后父级卡片也改变外观。', '不需要 JavaScript 切换 class。'],
    '加一个 :has(input:focus-visible) 样式。',
    [
      '哪个规则选中包含勾选框的父卡片？',
      ['.choice:checked', '.choice:has(input:checked)', 'input:has(.choice)'],
      1,
      ':has 匹配存在相应关系元素的目标。',
    ],
    'Web/CSS/Reference/Selectors/:has',
  ],
  [
    'css-background',
    '背景图层与混合',
    '视觉与排版',
    '多个 background 图层按前面的在上方叠加。渐变可作为背景图，background-size 和 position 控制尺寸及位置。',
    '<div class="layer-art"><h2>只用 CSS 画一张封面</h2><p>渐变、光点与底色</p></div>',
    '.layer-art { padding: 50px 30px; color: white; border-radius: 16px; background: radial-gradient(circle at 80% 20%, #f7cc7688 0 12%, transparent 13%), linear-gradient(120deg, #153d30, #6c9178); }\n.layer-art p { color: #e2ede5; }',
    [
      '第一张 radial-gradient 在 linear-gradient 上方。',
      '改变光点位置可调整视觉重心。',
    ],
    '增加第二个 radial-gradient 光点。',
    [
      '背景图层谁在最上层？',
      ['最后一个', '第一个', '面积最大的'],
      1,
      'background 列表中的第一个图层在最前面。',
    ],
    'Web/CSS/Reference/Properties/background',
  ],
  [
    'css-object-fit',
    'object-fit 与图片裁切',
    '视觉与排版',
    '固定图片盒中，contain 保持完整图片，cover 填满但可能裁切。object-position 决定裁切时关注的位置。',
    "<div class=\"fit-grid\"><img class=\"contain\" alt=\"完整的山峰插画\" src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='180'%3E%3Crect width='400' height='180' fill='%23cadfce'/%3E%3Ccircle cx='320' cy='55' r='35' fill='%23dbac5b'/%3E%3C/svg%3E\"><img class=\"cover\" alt=\"裁切后的山峰插画\" src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='180'%3E%3Crect width='400' height='180' fill='%23cadfce'/%3E%3Ccircle cx='320' cy='55' r='35' fill='%23dbac5b'/%3E%3C/svg%3E\"></div>",
    '.fit-grid { display: flex; flex-wrap: wrap; gap: 16px; }\n.fit-grid img { width: 160px; height: 180px; background: #eee; }\n.contain { object-fit: contain; }\n.cover { object-fit: cover; object-position: right; }',
    ['contain 上下可能有留白。', 'cover 配合 right 保留右侧太阳。'],
    '把 object-position 改成 left。',
    [
      '保持完整图片应选什么？',
      ['cover', 'contain', 'fill'],
      1,
      'contain 在盒子内完整展示图片并保留宽高比。',
    ],
    'Web/CSS/Reference/Properties/object-fit',
  ],
  [
    'css-text-wrap',
    '换行、断词与阅读宽度',
    '视觉与排版',
    '长链接和标识符可能撑破容器。overflow-wrap:anywhere 允许必要的断词，max-width 用 ch 控制大致行宽，中文仍要实际检查阅读效果。',
    '<article class="reading"><h2>一段舒适的文字</h2><p>内容需要合理的行宽与行高。太宽的行会让视线返回下一行变得困难，太窄又会频繁打断阅读。</p><p>VeryLongContinuousIdentifierWithoutAnySpacesForTestingOverflow</p></article>',
    '.reading { max-width: 55ch; line-height: 1.85; }\n.reading p { overflow-wrap: anywhere; }',
    ['窄屏长标识符不再溢出。', 'ch 基于字体中字符 0 的宽度。'],
    '把 max-width 改成 35ch，比较阅读感受。',
    [
      '防止长单词撑破容器可使用什么？',
      ['overflow-wrap:anywhere', 'white-space:nowrap', 'text-align:center'],
      0,
      '必要时允许长内容断词能避免横向溢出。',
    ],
    'Web/CSS/Reference/Properties/overflow-wrap',
  ],
  [
    'css-custom-properties',
    '自定义属性与设计令牌',
    '视觉与排版',
    'CSS 自定义属性参与级联，var() 读取变量并可设置回退值。统一颜色、间距和圆角可保持组件视觉一致。',
    '<div class="tokens"><button>主要按钮</button><article>同一组设计变量</article><button class="alternate">局部覆盖</button></div>',
    '.tokens { --brand: #236347; --space: 16px; --radius: 10px; display: grid; gap: var(--space); }\n.tokens button, .tokens article { padding: var(--space); border-radius: var(--radius); background: var(--brand, #444); color: white; }\n.tokens .alternate { --brand: #a77832; }',
    ['修改一个变量影响多个组件。', '局部覆盖只影响当前元素与后代。'],
    '添加 --border 变量并应用到组件。',
    [
      '读取自定义属性使用什么？',
      ['get()', 'var()', 'value()'],
      1,
      'var(--name, fallback) 引用自定义属性。',
    ],
    'Web/CSS/Reference/Properties/--*',
  ],
  [
    'css-reduced-motion',
    '尊重减少动画偏好',
    '响应式与体验',
    'prefers-reduced-motion:reduce 检测用户减少动画的偏好。优先减少大幅运动，保留必要的状态反馈，而不是让信息消失。',
    '<div class="motion-ball" aria-hidden="true"></div><p>系统启用“减少动画”后，小球停止移动。</p>',
    '.motion-ball { width: 60px; height: 60px; border-radius: 50%; background: #78a486; animation: travel 2s ease-in-out infinite alternate; }\n@keyframes travel { to { transform: translateX(180px); } }\n@media (prefers-reduced-motion: reduce) { .motion-ball { animation: none; } }',
    ['用系统设置或开发者工具模拟偏好。', '小球装饰使用 aria-hidden。'],
    '给小球加入颜色变化，保留静态反馈。',
    [
      '检测减少动画偏好使用什么？',
      ['prefers-color-scheme', 'prefers-reduced-motion', 'orientation'],
      1,
      '该媒体特性反映用户希望减少非必要运动的设置。',
    ],
    'Web/CSS/Reference/At-rules/@media/prefers-reduced-motion',
  ],
  [
    'css-scroll-snap',
    '滚动吸附与横向画廊',
    '响应式与体验',
    'scroll-snap-type 在滚动容器声明吸附，子项用 scroll-snap-align 给出吸附点。避免强制吸附妨碍内容访问。',
    '<div class="snap-gallery" tabindex="0" aria-label="横向课程画廊"><article>01 HTML</article><article>02 CSS</article><article>03 JavaScript</article><article>04 项目</article></div>',
    '.snap-gallery { display: flex; overflow-x: auto; gap: 16px; scroll-snap-type: x proximity; padding-bottom: 16px; }\n.snap-gallery article { flex: 0 0 230px; padding: 60px 24px; scroll-snap-align: start; background: #e0ede5; border-radius: 14px; }',
    ['横向滚动靠近卡片时自然吸附。', '容器可聚焦，支持键盘滚动。'],
    '试验 mandatory 与 proximity 的区别。',
    [
      '吸附点在哪里声明？',
      ['子项 scroll-snap-align', 'body margin', '容器 z-index'],
      0,
      '子项声明对齐点，容器声明吸附方向与强度。',
    ],
    'Web/CSS/Reference/Properties/scroll-snap-type',
  ],
  [
    'css-print',
    '打印样式与屏幕样式',
    '响应式与体验',
    '@media print 可以移除导航和装饰，改成易于纸面阅读的排版。打印页面应保留有意义的内容和链接信息。',
    '<nav class="screen-only">这条导航仅用于屏幕</nav><article><h2>学习记录</h2><p>本周完成 HTML 语义和 CSS 盒模型。</p><a href="https://developer.mozilla.org/">参考资料</a></article>',
    '.screen-only { padding: 12px; background: #e5f0e8; }\n@media print { .screen-only { display: none; } body { background: white; color: black; } a::after { content: " (" attr(href) ")"; } article { break-inside: avoid; } }',
    ['导出 HTML 后使用浏览器打印预览。', '打印规则不影响普通预览。'],
    '添加打印专用页脚。',
    [
      '打印样式使用哪种媒体？',
      ['screen', 'print', 'paper'],
      1,
      '@media print 匹配打印输出。',
    ],
    'Web/CSS/CSS_media_queries/Printing',
  ],
  [
    'css-supports',
    '@supports 与渐进增强',
    '响应式与体验',
    '@supports 根据浏览器是否理解声明启用增强样式。先提供基本可用的回退，再添加更先进的布局或视觉效果。',
    '<div class="enhance">基础样式可用，支持时增加混合效果</div>',
    '.enhance { padding: 32px; background: #e4eee7; border: 1px solid #bed3c4; border-radius: 12px; }\n@supports (background: color-mix(in srgb, green, white)) { .enhance { background: color-mix(in srgb, #397752 18%, white); } }',
    ['不支持新声明时仍有背景色。', '检测语法支持不保证所有使用情境都一致。'],
    '检测 display:grid 后给容器设置 grid。',
    [
      '@supports 用来检测什么？',
      ['用户屏幕宽度', '浏览器对 CSS 声明的支持', '网络速度'],
      1,
      '它是 CSS 功能查询。',
    ],
    'Web/CSS/Reference/At-rules/@supports',
  ],
  [
    'css-aspect-ratio',
    'aspect-ratio 与比例盒',
    '盒模型与尺寸',
    'aspect-ratio 为自动尺寸提供宽高比。常用于视频封面与卡片占位；当宽高都明确时，比例不再决定尺寸。',
    '<div class="ratio wide">16 / 9</div><div class="ratio square">1 / 1</div>',
    '.ratio { width: min(100%, 300px); display: grid; place-items: center; margin: 16px 0; background: #c9e0d1; border-radius: 12px; }\n.wide { aspect-ratio: 16 / 9; }\n.square { aspect-ratio: 1; }',
    ['宽度相同，高度由比例计算。', '有助于在图片加载前预留空间。'],
    '把比例改成 4/3。',
    [
      '宽高都固定时 aspect-ratio 会怎样？',
      ['一定覆盖高度', '通常不再决定盒尺寸', '删除元素'],
      1,
      '比例影响自动尺寸，不会强制覆盖两个明确的尺寸。',
    ],
    'Web/CSS/Reference/Properties/aspect-ratio',
  ],
  [
    'css-bfc',
    'flow-root 与浮动包含',
    '布局机制',
    'display:flow-root 建立新的块格式化上下文，包含内部浮动，避免容器高度只由非浮动内容决定。它也用于隔离部分外边距折叠。',
    '<div class="float-card"><div class="avatar">头像</div><p>短文字。</p></div><p>这一段位于卡片之外。</p>',
    '.float-card { display: flow-root; border: 1px solid #bbd1c1; padding: 16px; }\n.avatar { float: left; width: 100px; height: 140px; margin-right: 16px; background: #cadfd0; display: grid; place-items: center; }',
    [
      '删除 flow-root 后容器不再完全包含浮动。',
      '浮动适合文字环绕，常规布局优先 Flex/Grid。',
    ],
    '改成 Flex 并比较高度与文字环绕。',
    [
      '哪个声明可以包含浮动？',
      ['display:flow-root', 'color:green', 'position:static'],
      0,
      'flow-root 建立新的块格式化上下文。',
    ],
    'Web/CSS/CSS_display/Block_formatting_context',
  ],
];

for (const [
  id,
  title,
  module,
  what,
  html,
  css,
  observe,
  challenge,
  quiz,
  ref,
] of cssCases) {
  lesson(
    'css',
    id,
    title,
    module,
    what,
    `<main class="lesson-demo">\n  <h1>${title}</h1>\n  ${html}\n</main>`,
    css,
    '',
    observe,
    challenge,
    quiz,
    ref,
    { level: /layer|stacking|has|supports|bfc/.test(id) ? '进阶' : '入门' },
  );
}

// JavaScript 语言：从数据与控制流，逐步进入对象、异步和浏览器 API。
const languageCases = [
  [
    'js-variables',
    'let、const 与块级作用域',
    '语法与数据',
    'const 禁止重新绑定变量，但不冻结对象。let 可以重新赋值，两者都使用块级作用域。',
    `const learner = { name: '小雨', days: 1 };
learner.days += 1;
let score = 60;
score += 20;
if (score >= 80) {
  const message = '今天进步了';
  print(message);
}
print(learner, score);`,
    ['const 对象内部可以修改。', '块外无法直接读取 message。'],
    '将 learner 改成数组，并用 push 添加一项。',
    [
      'const 对象的属性能修改吗？',
      ['能', '不能', '必须先用 let'],
      0,
      'const 限制绑定，不意味着深度不可变。',
    ],
    'Web/JavaScript/Guide/Grammar_and_types',
  ],
  [
    'js-types',
    '类型、typeof 与空值',
    '语法与数据',
    '基本类型包括字符串、数字、布尔、undefined、null、bigint 和 symbol。typeof null 是历史遗留结果 object，不能用来识别非空对象。',
    `const values = ['HTML', 42, true, undefined, null, 10n, Symbol('id')];
for (const value of values) {
  print(String(value), '→', typeof value);
}
print('数组识别：', Array.isArray([1, 2]));`,
    ['typeof null 为 object。', 'Array.isArray 比 typeof 更适合判断数组。'],
    '加入一个函数和一个普通对象。',
    [
      'typeof null 是什么？',
      ['null', 'undefined', 'object'],
      2,
      '这是历史遗留行为，需要单独判断 null。',
    ],
    'Web/JavaScript/Guide/Data_structures',
  ],
  [
    'js-conversion',
    '类型转换与严格比较',
    '语法与数据',
    '输入框的 value 是字符串。Number 可显式转换；=== 不做类型强制转换，通常更容易预测。NaN 用 Number.isNaN 判断。',
    `print('5' + 2);
print(Number('5') + 2);
print('5' == 5, '5' === 5);
print(Number(''), Number('abc'));
print('NaN 判断：', Number.isNaN(Number('abc')));`,
    ['加号可能做字符串拼接。', '空字符串 Number 后得到 0。'],
    '比较 parseInt("12px",10) 和 Number("12px")。',
    [
      '"5" === 5 的结果？',
      ['true', 'false', '报错'],
      1,
      '严格比较不把字符串转成数字。',
    ],
    'Web/JavaScript/Guide/Expressions_and_operators',
  ],
  [
    'js-operators',
    '短路运算、可选链与空值合并',
    '语法与数据',
    '|| 按真假选择，?? 只在 null 或 undefined 时回退。?. 在链式访问遇到空值时返回 undefined。',
    `const settings = { volume: 0, profile: null };
print('||：', settings.volume || 50);
print('??：', settings.volume ?? 50);
print('可选链：', settings.profile?.name ?? '匿名');`,
    ['0 是合法数值，但在 || 中被当作假值。', '可选链不能对未声明变量使用。'],
    '把 volume 改成空字符串和 null。',
    [
      '保留 0 的默认值操作适合什么？',
      ['||', '??', '&&'],
      1,
      '?? 仅在 null/undefined 时使用默认值。',
    ],
    'Web/JavaScript/Reference/Operators/Nullish_coalescing',
  ],
  [
    'js-control',
    'if、switch 与条件表达式',
    '控制流与函数',
    '分支根据条件执行不同代码。switch 比较具体值，通常需要 break，三元表达式适合简单的二选一。',
    `const score = 86;
if (score >= 90) {
  print('优秀');
} else if (score >= 60) {
  print('通过');
} else {
  print('继续练习');
}
const category = 'css';
switch (category) {
  case 'html': print('内容结构'); break;
  case 'css': print('外观布局'); break;
  default: print('行为交互');
}
print(score >= 60 ? '通过' : '未通过');`,
    ['else if 按从上到下的顺序判断。', '遗漏 break 可能发生贯穿。'],
    '加入 80 分以上“良好”的分支。',
    [
      'switch 忘写 break 可能发生什么？',
      ['贯穿后续分支', '自动结束', '固定报错'],
      0,
      '没有 break 会继续执行后续分支代码。',
    ],
    'Web/JavaScript/Guide/Control_flow_and_error_handling',
  ],
  [
    'js-loops',
    'for、while 与 for...of',
    '控制流与函数',
    '循环适合重复任务。for...of 迭代可迭代对象的值，for...in 遍历可枚举属性键，不推荐拿它遍历数组值。',
    `const topics = ['HTML', 'CSS', 'JavaScript'];
for (const topic of topics) {
  print('主题：', topic);
}
for (let i = 1; i <= 3; i++) {
  print('第', i, '次练习');
}
let remaining = 2;
while (remaining > 0) {
  print('剩余：', remaining--);
}`,
    ['while 必须让条件逐渐结束。', 'for...of 得到内容而不是下标。'],
    '用 continue 跳过 CSS，用 break 提前停止。',
    [
      '数组值遍历常用什么？',
      ['for...of', 'for...in', 'switch'],
      0,
      'for...of 遍历数组的值。',
    ],
    'Web/JavaScript/Guide/Loops_and_iteration',
  ],
  [
    'js-functions',
    '函数、参数与返回值',
    '控制流与函数',
    '函数封装可重复的操作。默认参数只在参数为 undefined 时使用，return 返回值并结束当前函数。',
    `function total(price, count = 1) {
  return price * count;
}
const discount = (amount, rate = 0.9) => amount * rate;
print(total(29, 3));
print(discount(total(29, 3)).toFixed(2));`,
    ['返回值可以交给另一个函数使用。', '箭头函数的表达式体可以省略 return。'],
    '为 total 加运费参数。',
    [
      '默认参数在什么情况下启用？',
      ['null', 'undefined', '0'],
      1,
      '未传入参数或显式传 undefined 才会使用默认值。',
    ],
    'Web/JavaScript/Guide/Functions',
  ],
  [
    'js-closure',
    '闭包与独立状态',
    '控制流与函数',
    '闭包让内部函数保留对外层词法环境的访问。工厂函数可以创建各自独立的私有状态。',
    `function createCounter(start = 0) {
  let count = start;
  return () => ++count;
}
const first = createCounter();
const second = createCounter(10);
print(first(), first(), second(), first());`,
    ['两个计数器的状态不共享。', '外部无法直接读取 count。'],
    '返回包含 increase 和 reset 的对象。',
    [
      '闭包保留了什么？',
      ['外层词法环境访问', '整个浏览器缓存', '仅函数名称'],
      0,
      '内部函数可以持续访问外层作用域的绑定。',
    ],
    'Web/JavaScript/Guide/Closures',
  ],
  [
    'js-array',
    '数组增删与复制',
    '集合与对象',
    'push/pop 修改尾部，shift/unshift 修改头部。slice 返回浅复制，splice 修改原数组。是否变更原数据需要明确。',
    `const topics = ['HTML', 'CSS'];
topics.push('JavaScript');
const copy = topics.slice();
copy.splice(1, 1, '布局');
print('原数组：', topics);
print('复制后：', copy);
print('最后一项：', topics.at(-1));`,
    ['修改 copy 不改变原数组结构。', '浅复制的嵌套对象仍然共享引用。'],
    '添加一项对象，再观察浅复制的引用。',
    [
      '哪个方法会修改原数组？',
      ['slice', 'splice', 'map'],
      1,
      'splice 原地删除或插入数组成员。',
    ],
    'Web/JavaScript/Guide/Indexed_collections',
  ],
  [
    'js-array-methods',
    'map、filter 与 reduce',
    '集合与对象',
    'map 转换每一项，filter 保留符合条件的项，reduce 逐项累积结果。三者可组成清晰的数据处理管道。',
    `const courses = [
  { name: 'HTML', minutes: 15 },
  { name: 'CSS', minutes: 30 },
  { name: 'JS', minutes: 45 },
];
print('名字：', courses.map(course => course.name));
print('短课：', courses.filter(course => course.minutes <= 30));
print('总时长：', courses.reduce((sum, course) => sum + course.minutes, 0));`,
    ['reduce 的初始值 0 让空数组也可处理。', '这些方法不会原地改变数组结构。'],
    '计算短课的总时长。',
    [
      '筛选数据使用什么？',
      ['map', 'filter', 'reduce'],
      1,
      'filter 保留谓词结果为真的成员。',
    ],
    'Web/JavaScript/Reference/Global_Objects/Array',
  ],
  [
    'js-array-search',
    '查找、判断与数值排序',
    '集合与对象',
    'find 找到第一个符合条件的值，some/every 做整体判断。sort 默认按字符串顺序且原地修改，需要比较函数与复制。',
    `const values = [12, 3, 25, 8];
print('找到：', values.find(value => value > 10));
print('存在大于 20：', values.some(value => value > 20));
print('全部为正：', values.every(value => value > 0));
print('升序：', [...values].sort((a, b) => a - b));
print('原数组：', values);`,
    ['扩展语法复制后再 sort。', '数值排序不能省略比较函数。'],
    '按降序排列并找到最小值。',
    [
      '数值升序比较函数是什么？',
      ['(a,b)=>a-b', '(a,b)=>a+b', '(a,b)=>a===b'],
      0,
      '返回负值时 a 排在 b 前面。',
    ],
    'Web/JavaScript/Reference/Global_Objects/Array/sort',
  ],
  [
    'js-object',
    '对象、解构与扩展语法',
    '集合与对象',
    '对象组织具名数据，解构读取字段，扩展语法组合对象。扩展复制是浅复制，后面的同名属性覆盖前面的。',
    `const defaults = { theme: 'light', size: 16 };
const settings = { ...defaults, theme: 'dark' };
const { theme, size: fontSize, language = 'zh-CN' } = settings;
print(settings);
print(theme, fontSize, language);
print(Object.entries(settings));`,
    ['重命名解构不修改原属性。', '默认值用于 undefined。'],
    '加入嵌套 profile 并尝试复制。',
    ['对象扩展是深复制吗？', ['是', '否', '只对数组是'], 1, '扩展语法仅复制顶层属性。'],
    'Web/JavaScript/Guide/Working_with_objects',
  ],
  [
    'js-json',
    'JSON 序列化与解析',
    '集合与对象',
    'JSON 是文本格式，适合数据交换与存储。不能表示函数、undefined、循环引用或原生 BigInt；解析外部文本需要处理失败。',
    `const data = { title: '学习计划', completed: false, days: [1, 2, 3] };
const text = JSON.stringify(data, null, 2);
print(text);
const parsed = JSON.parse(text);
print(parsed.title);
try {
  JSON.parse('{invalid}');
} catch (error) {
  print('解析失败：', error.name);
}`,
    ['stringify 返回字符串。', 'JSON 对象键名要求双引号。'],
    '删去 try/catch，观察工作台错误信息。',
    [
      'JSON.parse 的输入通常是什么？',
      ['JSON 字符串', 'DOM 元素', '函数'],
      0,
      'parse 将符合 JSON 语法的文本解析为 JavaScript 值。',
    ],
    'Web/JavaScript/Reference/Global_Objects/JSON',
  ],
  [
    'js-string',
    '字符串、模板字面量与搜索',
    '语法与数据',
    '字符串不可变，trim 清除两端空白，includes 判断子串。模板字面量支持插值和多行字符串。',
    `const input = '  Frontend Lab  ';
const name = input.trim();
print(name.toLowerCase());
print(name.includes('Lab'));
print(name.replace('Lab', 'Studio'));
print(name.split(' '));
print(\`欢迎来到 \${name}，共 \${name.length} 个 UTF-16 代码单元。\`);`,
    ['方法返回新字符串。', 'length 对部分表情不等于可见字符数。'],
    '使用 Array.from 比较表情字符串长度。',
    [
      'trim 会修改原字符串吗？',
      ['会', '不会', '看浏览器'],
      1,
      '字符串不可变，trim 返回新字符串。',
    ],
    'Web/JavaScript/Guide/Text_formatting',
  ],
  [
    'js-number',
    '数值精度与金额计算',
    '语法与数据',
    '二进制浮点不能精确表示所有十进制小数。金额可在安全整数范围内用最小货币单位计算，展示时再格式化。',
    `print(0.1 + 0.2);
const priceInCents = 1990;
const totalInCents = priceInCents * 3;
print(new Intl.NumberFormat('zh-CN', {
  style: 'currency', currency: 'CNY',
}).format(totalInCents / 100));
print('安全整数：', Number.isSafeInteger(totalInCents));`,
    ['toFixed 返回字符串，不是精度修复。', '整数方案也要注意安全整数范围。'],
    '给总价添加 500 分优惠。',
    [
      'toFixed 返回什么？',
      ['数字', '字符串', '数组'],
      1,
      'toFixed 用于展示，返回格式化的字符串。',
    ],
    'Web/JavaScript/Reference/Global_Objects/Number',
  ],
  [
    'js-date',
    'Date 与 Intl 格式化',
    '语法与数据',
    'Date 表示时间点，Intl 用指定语言和时区格式化。构造器数字月份从 0 开始，日期显示不应依赖机器默认时区。',
    `const date = new Date('2026-10-11T12:00:00Z');
print(date.toISOString());
print(new Intl.DateTimeFormat('zh-CN', {
  dateStyle: 'full', timeStyle: 'short', timeZone: 'Asia/Shanghai',
}).format(date));
print('数字构造器月份：', new Date(2026, 0, 1).getMonth());`,
    ['UTC 与上海时间显示不同。', '数字月份 0 表示一月。'],
    '把时区改成 UTC 比较结果。',
    [
      'new Date(2026,0,1) 是几月？',
      ['一月', '零月', '十二月'],
      0,
      'Date 的数字月份参数从 0 开始。',
    ],
    'Web/JavaScript/Reference/Global_Objects/Date',
  ],
  [
    'js-regexp',
    '正则表达式与文本匹配',
    '语法与数据',
    '正则表达式描述文本模式，test 做判断，match 提取匹配。输入验证要明确范围；复杂邮箱校验优先用原生 email 输入。',
    `const text = '学习 HTML 15 分钟，CSS 30 分钟';
print(text.match(/\\d+/g));
print(/^\\d{4}$/.test('2026'));
print(text.replace(/\\d+/g, value => Number(value) * 2));`,
    ['g 标志提取所有匹配。', '^ 和 $ 限制完整字符串匹配。'],
    '验证一个 3 到 8 位的英文用户名。',
    ['\\d 表示什么？', ['数字字符', '任意字母', '空白'], 0, '\\d 匹配数字字符。'],
    'Web/JavaScript/Guide/Regular_expressions',
  ],
  [
    'js-map-set',
    'Map、Set 与去重',
    '集合与对象',
    'Set 存放不重复的值，Map 存放键值对且键可以是对象。对象成员按引用比较，并不会按结构自动去重。',
    `const skills = new Set(['HTML', 'CSS', 'HTML', 'JS']);
print([...skills]);
const progress = new Map([['HTML', 80], ['CSS', 50]]);
progress.set('JS', 20);
print([...progress.entries()]);
print(progress.get('CSS'), progress.has('HTML'));`,
    ['Set 保留首次插入顺序。', 'Map 用 size 而非 length。'],
    '删除 CSS，再添加完成进度。',
    [
      'Set 按结构去重两个新对象吗？',
      ['会', '不会', '只在严格模式会'],
      1,
      '两个不同对象引用是两个不同的 Set 成员。',
    ],
    'Web/JavaScript/Guide/Keyed_collections',
  ],
  [
    'js-class',
    'class、实例与原型',
    '集合与对象',
    'class 提供基于原型的语法，constructor 初始化实例，方法通常放在原型上。实例状态属于每个实例。',
    `class Course {
  constructor(title, minutes) {
    this.title = title;
    this.minutes = minutes;
  }
  describe() {
    return this.title + ' · ' + this.minutes + ' 分钟';
  }
}
const html = new Course('HTML', 15);
const css = new Course('CSS', 30);
print(html.describe(), css.describe());
print(html.describe === css.describe);`,
    ['不同实例共享原型方法。', '普通方法的 this 由调用方式决定。'],
    '添加继承 Course 的 PracticeCourse。',
    [
      '实例方法通常放在哪里？',
      ['原型', 'localStorage', 'document'],
      0,
      'class 普通方法在原型上共享。',
    ],
    'Web/JavaScript/Guide/Using_classes',
    { level: '进阶' },
  ],
  [
    'js-this',
    'this 与箭头函数',
    '控制流与函数',
    '普通函数的 this 取决于调用方式，箭头函数从外部词法环境捕获 this。不要把箭头函数误当作需要动态 this 的对象方法。',
    `const learner = {
  name: '小雨',
  describe() { return this.name; },
};
print(learner.describe());
const detached = learner.describe;
print(detached.call({ name: '星雨' }));
const bound = detached.bind(learner);
print(bound());`,
    ['call 显式指定 this。', 'bind 返回绑定后的新函数。'],
    '使用 apply 调用一个带两个参数的方法。',
    [
      'bind 会立即执行原函数吗？',
      ['会', '不会，返回函数', '会执行两次'],
      1,
      'bind 创建一个固定 this 的函数。',
    ],
    'Web/JavaScript/Reference/Operators/this',
    { level: '进阶' },
  ],
  [
    'js-errors',
    'try、catch、finally 与主动抛错',
    '异步与错误',
    'try/catch 处理当前调用链的异常，throw 表达失败。异步 Promise 拒绝要用 await 或 catch，finally 适合清理状态。',
    `function divide(a, b) {
  if (b === 0) throw new Error('除数不能是 0');
  return a / b;
}
try {
  print(divide(10, 0));
} catch (error) {
  print('已处理：', error.message);
} finally {
  print('操作结束，清理界面状态');
}`,
    ['错误被处理后后续代码仍运行。', '不要用空 catch 掩盖失败。'],
    '修改除数让计算成功。',
    [
      'finally 通常用于什么？',
      ['清理资源或状态', '只处理语法错误', '生成随机数'],
      0,
      'finally 在正常或异常路径结束时执行清理逻辑。',
    ],
    'Web/JavaScript/Guide/Control_flow_and_error_handling',
  ],
  [
    'js-promise',
    'Promise 与异步结果',
    '异步与错误',
    'Promise 表示未来的结果，有 pending、fulfilled、rejected 三种状态。then 返回新的 Promise，可继续链式处理。',
    `function wait(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}
print('开始等待');
wait(400)
  .then(() => { print('等待完成'); return 'HTML'; })
  .then(topic => print('下一课：', topic))
  .catch(error => print('失败：', error.message));`,
    ['同步开始信息先出现。', '链式返回值传给下一步。'],
    '返回 Promise.reject 并观察 catch。',
    [
      'then 返回什么？',
      ['新的 Promise', '固定 undefined', '原数组'],
      0,
      'then 创建新的 Promise，支持链式组合。',
    ],
    'Web/JavaScript/Guide/Using_promises',
    { level: '进阶' },
  ],
  [
    'js-async',
    'async、await 与 finally',
    '异步与错误',
    'async 函数始终返回 Promise，await 暂停当前异步函数等待结果，不阻塞整个浏览器。用 try/finally 恢复加载状态。',
    `const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function loadCourse() {
  print('加载中…');
  try {
    await delay(400);
    print('已得到课程：HTML');
  } catch (error) {
    print(error.message);
  } finally {
    print('恢复操作按钮');
  }
}
loadCourse();
print('页面仍然可以响应其他操作');`,
    ['await 之后的代码延后执行。', 'async 函数中的错误变成 Promise 拒绝。'],
    '再等待 200ms 并打印下一步。',
    [
      'await 会冻结浏览器吗？',
      ['会', '不会', '只能在手机上不会'],
      1,
      'await 暂停当前异步函数，不阻塞主线程等待。',
    ],
    'Web/JavaScript/Reference/Statements/async_function',
    { level: '进阶' },
  ],
  [
    'js-event-loop',
    '事件循环与微任务',
    '异步与错误',
    '同步代码先执行，当前任务结束后清空微任务队列，再处理后续任务。Promise 回调与定时器回调属于不同队列。',
    `print('1 同步开始');
setTimeout(() => print('4 定时器任务'), 0);
Promise.resolve().then(() => print('3 Promise 微任务'));
print('2 同步结束');`,
    ['0ms 不表示立即执行。', 'Promise.then 先于当前任务后注册的定时器运行。'],
    '在 then 中再加入一个 Promise.then。',
    [
      '这里谁先执行？',
      ['setTimeout 回调', 'Promise.then 回调', '随机'],
      1,
      '当前任务后的微任务检查点先于下一次定时器任务。',
    ],
    'Web/JavaScript/Reference/Execution_model',
    { level: '进阶' },
  ],
  [
    'js-promise-all',
    '并行请求与 Promise.all',
    '异步与错误',
    'Promise.all 同时等待多个 Promise，结果按输入顺序排列；任何一个拒绝就整体拒绝，其他任务并不会自动取消。',
    `const task = (name, ms) => new Promise(resolve => setTimeout(() => resolve(name), ms));
async function run() {
  const started = performance.now();
  const results = await Promise.all([task('HTML', 450), task('CSS', 200)]);
  print(results);
  print('耗时约', Math.round(performance.now() - started), 'ms');
}
run();`,
    ['CSS 先完成但结果仍在第二项。', '耗时接近最慢任务而不是两者相加。'],
    '加入失败任务，改用 allSettled 查看每个结果。',
    [
      'all 的结果顺序由什么决定？',
      ['完成速度', '输入顺序', '名称字母顺序'],
      1,
      '结果保持传入可迭代对象的顺序。',
    ],
    'Web/JavaScript/Reference/Global_Objects/Promise/all',
    { level: '进阶' },
  ],
  [
    'js-modules',
    'ES Modules：导出与导入',
    '控制流与函数',
    'ES Modules 用 export/import 划分职责。本案例用 Blob 创建本地模块，不依赖打包器；真实项目用 HTTP 服务加载相对路径模块。',
    `async function main() {
  const source = 'export const title = "HTML"; export function minutes(days) { return days * 15; }';
  const url = URL.createObjectURL(new Blob([source], { type: 'text/javascript' }));
  try {
    const course = await import(url);
    print(course.title, course.minutes(7));
  } finally {
    URL.revokeObjectURL(url);
  }
}
main().catch(error => print(error.message));`,
    ['模块拥有自己的作用域。', '真实文件使用 script type=module。'],
    '增加一个默认导出，并读取 course.default。',
    [
      '模块中的变量默认属于谁？',
      ['全局 window', '模块作用域', '所有 iframe'],
      1,
      '模块顶层绑定不会自动成为全局属性。',
    ],
    'Web/JavaScript/Guide/Modules',
    { level: '进阶' },
  ],
];
for (const [
  id,
  title,
  module,
  what,
  js,
  observe,
  challenge,
  quiz,
  ref,
  extra,
] of languageCases) {
  language(id, title, module, what, js, observe, challenge, quiz, ref, extra);
}

// DOM 与 Web API：用真实按钮和输入触发操作。
lesson(
  'js',
  'js-dom',
  'DOM 查询、创建与删除',
  'DOM 与事件',
  'DOM 是文档的对象树。querySelector 查询元素，createElement 创建节点，textContent 安全写入文本，remove 删除节点。',
  `<main class="lesson-demo">
  <h1>动态课程列表</h1>
  <label>课程名 <input id="name" value="HTML"></label>
  <button id="create">创建课程</button>
  <ul id="list"></ul>
</main>`,
  '',
  `document.querySelector('#create').addEventListener('click', () => {
  const value = document.querySelector('#name').value.trim();
  if (!value) return;
  const item = document.createElement('li');
  item.textContent = value + ' ';
  const remove = document.createElement('button');
  remove.textContent = '删除';
  remove.addEventListener('click', () => item.remove());
  item.append(remove);
  document.querySelector('#list').append(item);
});`,
  ['输入 HTML 字符串只会显示文字。', '新节点必须 append 后才会进入页面。'],
  '把输入改成 form，让 Enter 也能添加。',
  [
    '安全展示用户文字优先使用什么？',
    ['innerHTML', 'textContent', 'eval'],
    1,
    'textContent 不会把输入解释为 HTML。',
  ],
  'Web/API/Document_Object_Model/Introduction',
);

lesson(
  'js',
  'js-bubbling',
  '事件捕获、冒泡与目标',
  'DOM 与事件',
  '事件沿祖先捕获到目标，再冒泡回祖先。target 是原始目标，currentTarget 是当前监听节点。stopPropagation 阻止传播，不等于取消默认行为。',
  `<main class="lesson-demo">
  <h1>点击内层按钮看传播顺序</h1>
  <div id="outer"><div id="inner"><button id="target">事件目标</button></div></div>
  <pre id="events" aria-live="polite"></pre>
</main>`,
  '#outer, #inner { padding: 20px; background: #e1ede4; border: 1px dashed #6c9a7b; }',
  `const output = document.getElementById('events');
for (const id of ['outer', 'inner', 'target']) {
  const node = document.getElementById(id);
  for (const capture of [true, false]) {
    node.addEventListener('click', event => {
      const text = id + ' / ' + (capture ? '捕获' : '冒泡') + ' / target=' + event.target.id;
      output.textContent += text + '\\n';
      console.log(text);
    }, capture);
  }
}`,
  ['target 一直为最内层按钮。', 'currentTarget 会随着监听器不同而改变。'],
  '在 inner 的冒泡监听器加入 stopPropagation。',
  [
    'preventDefault 是否阻止冒泡？',
    ['是', '否', '只在按钮上是'],
    1,
    'preventDefault 取消默认行为；传播由 stopPropagation 控制。',
  ],
  'Web/API/Event',
  { level: '进阶' },
);

lesson(
  'js',
  'js-delegation',
  '事件委托与动态元素',
  'DOM 与事件',
  '把监听器放在稳定父容器，用 closest 查找操作按钮。这样动态加入的子项也能响应，避免为每一项单独绑定同样的事件。',
  `<main class="lesson-demo">
  <h1>事件委托</h1>
  <button id="addItem">加入一项</button>
  <ul id="items"><li>HTML <button data-action="remove">删除</button></li></ul>
</main>`,
  '',
  `const items = document.getElementById('items');
document.getElementById('addItem').addEventListener('click', () => {
  const item = document.createElement('li');
  item.textContent = '新课程 ';
  const button = document.createElement('button');
  button.dataset.action = 'remove';
  button.textContent = '删除';
  item.append(button);
  items.append(item);
});
items.addEventListener('click', event => {
  const button = event.target.closest('[data-action="remove"]');
  if (button && items.contains(button)) button.closest('li').remove();
});`,
  ['新增子项无须重新绑定删除监听器。', 'contains 限制操作范围。'],
  '给每一项增加 data-action="done" 的按钮。',
  [
    '委托主要利用哪个机制？',
    ['事件冒泡', 'CSS 继承', '定时器'],
    0,
    '子元素的事件冒泡到父容器监听器。',
  ],
  'Web/API/Element/closest',
);

lesson(
  'js',
  'js-formdata',
  'FormData 与提交状态',
  'DOM 与事件',
  'FormData 读取可提交控件，同名多值用 getAll。disabled 控件不参与提交，未勾选 checkbox 通常也不会出现在结果里。',
  `<main class="lesson-demo">
  <h1>收集学习偏好</h1>
  <form id="preferences">
    <label>昵称 <input name="nickname" required value="小雨"></label>
    <label><input name="skill" type="checkbox" value="html" checked> HTML</label>
    <label><input name="skill" type="checkbox" value="css" checked> CSS</label>
    <button type="submit">读取表单</button>
  </form>
  <pre id="data"></pre>
</main>`,
  '',
  `document.getElementById('preferences').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.target);
  const result = { nickname: form.get('nickname'), skills: form.getAll('skill') };
  document.getElementById('data').textContent = JSON.stringify(result, null, 2);
});`,
  ['getAll 保留多个勾选值。', '本例读取本地数据，不发送网络请求。'],
  '将一个控件 disabled，观察数据变化。',
  [
    '同名多选字段应使用什么？',
    ['getAll', '只用 get', 'querySelectorAll 后直接 stringify'],
    0,
    'getAll 返回指定字段的全部值。',
  ],
  'Web/API/FormData',
);

lesson(
  'js',
  'js-debounce',
  '防抖：等待输入停下',
  '浏览器 API',
  '防抖在触发停止一段时间后执行，只保留最后一次意图。适合搜索建议，仍需在真实请求中处理过期结果与失败。',
  `<main class="lesson-demo"><h1>防抖搜索</h1><label>输入关键词 <input id="keyword" type="search"></label><p id="status" aria-live="polite">等待输入</p></main>`,
  '',
  `function debounce(callback, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
}
let count = 0;
const update = debounce(value => {
  document.getElementById('status').textContent = '第 ' + (++count) + ' 次处理：' + (value || '全部');
}, 500);
document.getElementById('keyword').addEventListener('input', event => update(event.target.value));`,
  ['连续输入时次数不会每个字都增加。', '回调捕获的是当时的字符串值。'],
  '把延迟从 500ms 改成 1000ms。',
  [
    '防抖何时执行？',
    ['每次输入立即', '停止触发一段时间后', '只执行第一次'],
    1,
    '这里演示尾触发防抖。',
  ],
  'Web/API/Window/setTimeout',
  { level: '进阶' },
);

lesson(
  'js',
  'js-throttle',
  '节流：限制处理频率',
  '浏览器 API',
  '节流让高频事件最多每个时间窗口处理一次。适合滚动和指针移动；动画相关更新常用 requestAnimationFrame 与渲染节奏对齐。',
  `<main class="lesson-demo"><h1>移动指针看节流</h1><div id="pad">在这里移动指针</div><p id="counts">原始 0 次 / 处理 0 次</p></main>`,
  '#pad { padding: 70px 20px; background: #e1ede4; border-radius: 12px; }',
  `let raw = 0;
let handled = 0;
let last = -Infinity;
document.getElementById('pad').addEventListener('pointermove', () => {
  raw++;
  const now = performance.now();
  if (now - last >= 150) {
    last = now;
    handled++;
  }
  document.getElementById('counts').textContent = '原始 ' + raw + ' 次 / 处理 ' + handled + ' 次';
});`,
  ['处理次数明显少于原始事件次数。', 'performance.now 使用单调时钟。'],
  '把 150ms 调到 500ms。',
  [
    '节流的主要目的是什么？',
    ['限制执行频率', '延迟直到停止', '完全取消事件'],
    0,
    '节流在持续触发期间按间隔执行。',
  ],
  'Web/API/Performance/now',
  { level: '进阶' },
);

lesson(
  'js',
  'js-fetch',
  'Fetch：响应、失败与取消',
  '异步与错误',
  'fetch 返回 Response，HTTP 错误要检查 response.ok，解析 JSON 仍是异步。本例通过 Blob URL 实际调用 fetch，离线可用且不连接后端。',
  `<main class="lesson-demo"><h1>本地 Fetch 实验</h1><button id="load">加载课程</button><pre id="response" aria-live="polite">等待加载</pre></main>`,
  '',
  `const button = document.getElementById('load');
button.addEventListener('click', async () => {
  button.disabled = true;
  const url = URL.createObjectURL(new Blob([
    JSON.stringify({ title: 'HTML 语义', minutes: 15 }),
  ], { type: 'application/json' }));
  const controller = new AbortController();
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error('HTTP 状态：' + response.status);
    const data = await response.json();
    document.getElementById('response').textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    document.getElementById('response').textContent = error.name + ': ' + error.message;
  } finally {
    URL.revokeObjectURL(url);
    button.disabled = false;
  }
});`,
  [
    'Blob URL 提供真实 Response，省去外部服务依赖。',
    '外部 HTTP 请求还有 CORS、认证和状态码问题。',
  ],
  '在 fetch 前调用 controller.abort()，观察 AbortError。',
  [
    'fetch 收到 HTTP 404 必然 reject 吗？',
    ['是', '否，需检查 ok', '只在 Chrome 会'],
    1,
    'HTTP 错误响应仍可 resolve；网络失败或取消等才 reject。',
  ],
  'Web/API/Fetch_API/Using_Fetch',
  { level: '进阶', tags: ['fetch', 'JSON', 'AbortController', '本地数据'] },
);

lesson(
  'js',
  'js-storage',
  'localStorage 与隔离环境',
  '浏览器 API',
  'localStorage 存字符串，常用 JSON 编码，并捕获访问或配额错误。实验 iframe 没有同源权限，因此在这里展示受限状态；导出独立 HTML 后可测试实际存储。',
  `<main class="lesson-demo"><h1>记住你的昵称</h1><label>昵称 <input id="nickname" value="小雨"></label><button id="store">保存</button><button id="read">读取</button><p id="storageStatus" aria-live="polite">预览受隔离限制，可导出 HTML 测试。</p></main>`,
  '',
  `function operate(action) {
  try {
    if (action === 'save') {
      localStorage.setItem('lab-nickname', document.getElementById('nickname').value);
    }
    const value = localStorage.getItem('lab-nickname');
    document.getElementById('storageStatus').textContent = '已存储：' + (value ?? '暂无');
  } catch (error) {
    document.getElementById('storageStatus').textContent = '当前环境不允许存储：' + error.name + '。请导出独立 HTML。';
  }
}
document.getElementById('store').addEventListener('click', () => operate('save'));
document.getElementById('read').addEventListener('click', () => operate('read'));`,
  ['隔离状态下捕获 SecurityError。', '实际网站也要处理隐私模式与配额限制。'],
  '导出后保存昵称并刷新，再点击读取。',
  [
    'localStorage 的值是什么类型？',
    ['字符串', '任意对象', 'DOM 节点'],
    0,
    '对象通常需要 JSON.stringify 与 JSON.parse。',
  ],
  'Web/API/Window/localStorage',
);

lesson(
  'js',
  'js-file',
  'File API 与本地文本',
  '浏览器 API',
  '用户主动选择文件后，File API 可读取其内容。本例限制大小并使用 text()，只展示文本，不把内容当 HTML 运行。',
  `<main class="lesson-demo"><h1>读取本地文本文件</h1><label>选择文本 <input id="file" type="file" accept=".txt,.md,.json,text/plain"></label><pre id="fileText" aria-live="polite">内容会显示在这里，不会上传。</pre></main>`,
  '',
  `document.getElementById('file').addEventListener('change', async event => {
  const file = event.target.files[0];
  if (!file) return;
  const output = document.getElementById('fileText');
  if (file.size > 1024 * 1024) {
    output.textContent = '请选择小于 1MB 的文件';
    return;
  }
  try {
    output.textContent = await file.text();
  } catch (error) {
    output.textContent = '读取失败：' + error.message;
  }
});`,
  ['accept 是选择提示，不是严格安全验证。', 'textContent 不执行文件中的 HTML。'],
  '显示文件名和字节大小。',
  [
    'accept 属性是可靠的安全验证吗？',
    ['是', '否', '仅对文本是'],
    1,
    'accept 主要提示文件选择器，仍需验证内容与大小。',
  ],
  'Web/API/File',
);

lesson(
  'js',
  'js-raf',
  'requestAnimationFrame 与时间',
  '浏览器 API',
  'requestAnimationFrame 在浏览器准备绘制前回调。按时间差计算位移，避免把每帧固定像素与不同刷新率绑定。',
  `<main class="lesson-demo"><h1>基于时间的运动</h1><button id="startMotion">开始 / 暂停</button><div class="track"><div id="ball"></div></div></main>`,
  '.track { height: 80px; overflow: hidden; background: #e8f0ea; border-radius: 10px; }\n#ball { width: 36px; height: 36px; margin-top: 22px; border-radius: 50%; background: #568766; }',
  `let running = false;
let frame;
let previous;
let position = 0;
const ball = document.getElementById('ball');
function tick(time) {
  if (!running) return;
  if (previous !== undefined) position += Math.min(time - previous, 50) * 0.1;
  previous = time;
  const limit = Math.max(1, ball.parentElement.clientWidth - 36);
  position %= limit;
  ball.style.transform = 'translateX(' + position + 'px)';
  frame = requestAnimationFrame(tick);
}
document.getElementById('startMotion').addEventListener('click', () => {
  running = !running;
  previous = undefined;
  if (running) frame = requestAnimationFrame(tick);
  else cancelAnimationFrame(frame);
});`,
  ['重复点击不会建立多条动画循环。', '恢复后重置时间，避免跳跃。'],
  '加入速度滑块。',
  [
    '为什么根据时间差计算移动？',
    ['适应不同刷新率', '让颜色改变', '减少 DOM 数量'],
    0,
    '时间驱动速度不会随帧率成倍变化。',
  ],
  'Web/API/Window/requestAnimationFrame',
  { level: '进阶' },
);

lesson(
  'js',
  'js-intersection',
  'IntersectionObserver 观察可见性',
  '浏览器 API',
  'IntersectionObserver 异步观察目标与根容器的相交状态。适合延迟加载和进入视口的效果，不需要每次滚动都计算所有位置。',
  `<main class="lesson-demo"><h1>在容器里滚动</h1><div id="scrollBox"><div class="spacer">向下滚动</div><div id="observed">观察目标</div><div class="spacer">继续滚动</div></div><p id="visibility" aria-live="polite">目标未进入</p></main>`,
  '#scrollBox { height: 180px; overflow: auto; border: 1px solid #b8cfc0; }\n.spacer { height: 220px; padding: 20px; }\n#observed { padding: 40px; background: #cee2d3; }',
  `const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    document.getElementById('visibility').textContent = entry.isIntersecting ? '目标已进入观察区域' : '目标已离开观察区域';
  }
}, { root: document.getElementById('scrollBox'), threshold: 0.5 });
observer.observe(document.getElementById('observed'));`,
  ['root 是滚动容器而不是默认视口。', 'threshold=.5 在交叉比例经过一半时通知。'],
  '改成 threshold:1 比较触发时机。',
  [
    'root:null 通常表示什么？',
    ['不观察', '文档视口', '目标父节点'],
    1,
    'null 以文档视口为观察根。',
  ],
  'Web/API/Intersection_Observer_API',
  { level: '进阶' },
);

lesson(
  'js',
  'js-resize',
  'ResizeObserver 与组件尺寸',
  '浏览器 API',
  'ResizeObserver 观察元素尺寸变化，比只监听 window.resize 更适合组件。避免在回调内不断改变自身尺寸形成循环。',
  `<main class="lesson-demo"><h1>拖动右下角改变容器</h1><div id="resizable">可调整的区域</div><output id="size">等待尺寸信息</output></main>`,
  '#resizable { width: 240px; max-width: 100%; min-width: 120px; height: 130px; min-height: 80px; resize: both; overflow: auto; background: #dcebe0; padding: 20px; }',
  `const observer = new ResizeObserver(entries => {
  const { width, height } = entries[0].contentRect;
  document.getElementById('size').textContent = Math.round(width) + ' × ' + Math.round(height) + '（内容盒）';
});
observer.observe(document.getElementById('resizable'));`,
  ['contentRect 默认观察内容盒尺寸。', '移动触屏未必支持手动 resize，可切换设备宽度。'],
  '用边框盒观察选项比较结果。',
  [
    '观察组件尺寸更适合哪个 API？',
    ['ResizeObserver', 'setInterval', 'JSON.parse'],
    0,
    'ResizeObserver 在元素尺寸改变时通知。',
  ],
  'Web/API/ResizeObserver',
  { level: '进阶' },
);

lesson(
  'js',
  'js-canvas',
  'Canvas 绘图与导出',
  '浏览器 API',
  'Canvas 用脚本绘制位图，设置 width/height 决定绘图分辨率。它不自动为每个图形提供语义，因此需要文字说明或替代内容。',
  `<main class="lesson-demo"><h1>绘制一张学习图表</h1><canvas id="chart" width="600" height="240" role="img" aria-label="HTML 80、CSS 60、JavaScript 40 的学习进度柱状图">HTML 80，CSS 60，JavaScript 40。</canvas><p>图形内容：HTML 80%，CSS 60%，JavaScript 40%。</p><button id="redraw">重新绘制</button></main>`,
  'canvas { display: block; width: 100%; height: auto; background: #f5f8f5; border-radius: 10px; }',
  `function draw() {
  const canvas = document.getElementById('chart');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = '18px sans-serif';
  for (const [index, value] of [80, 60, 40].entries()) {
    context.fillStyle = ['#507f60', '#b18b48', '#6685a3'][index];
    context.fillRect(50 + index * 180, 190 - value * 1.5, 110, value * 1.5);
    context.fillStyle = '#263e2d';
    context.fillText(['HTML', 'CSS', 'JavaScript'][index], 50 + index * 180, 220);
  }
}
document.getElementById('redraw').addEventListener('click', draw);
draw();`,
  ['CSS 大小与画布分辨率是不同概念。', 'clearRect 防止重复绘制残留。'],
  '给柱子上方添加数值。',
  [
    'Canvas 图形是每个都对应 DOM 节点吗？',
    ['是', '否', '只有矩形是'],
    1,
    'Canvas 图形是画布上的像素绘制。',
  ],
  'Web/API/Canvas_API',
);

lesson(
  'js',
  'js-custom-event',
  'CustomEvent 与组件通信',
  'DOM 与事件',
  'CustomEvent 可通过 detail 携带数据，dispatchEvent 同步触发监听器。组件可以用事件暴露变化，避免互相依赖内部节点。',
  `<main class="lesson-demo"><h1>组件发出自己的事件</h1><button id="complete">完成一课</button><p id="eventResult" aria-live="polite">等待 course:complete 事件</p></main>`,
  '',
  `document.addEventListener('course:complete', event => {
  document.getElementById('eventResult').textContent = event.detail.title + ' 已完成';
});
document.getElementById('complete').addEventListener('click', event => {
  event.target.dispatchEvent(new CustomEvent('course:complete', {
    detail: { title: '事件系统' },
    bubbles: true,
  }));
});`,
  ['自定义事件默认不冒泡，需要显式设置。', 'detail 提供业务数据。'],
  '加入学习时长并显示在结果中。',
  [
    'CustomEvent 携带数据放在哪？',
    ['detail', 'dataset', 'value'],
    0,
    'detail 保存自定义事件的数据。',
  ],
  'Web/API/CustomEvent',
  { level: '进阶' },
);

lesson(
  'js',
  'js-url',
  'URL 与 URLSearchParams',
  '浏览器 API',
  'URL 解析地址，URLSearchParams 读写查询参数并正确编码。不要手动用字符串拼接处理任意用户输入。',
  `<main class="lesson-demo"><h1>生成课程分享地址</h1><label>关键词 <input id="urlKeyword" value="CSS 布局"></label><button id="makeUrl">生成地址</button><pre id="urlResult"></pre></main>`,
  '',
  `document.getElementById('makeUrl').addEventListener('click', () => {
  const url = new URL('https://example.com/learn');
  url.searchParams.set('q', document.getElementById('urlKeyword').value);
  url.searchParams.set('level', 'beginner');
  document.getElementById('urlResult').textContent = url.href + '\\n解码关键词：' + url.searchParams.get('q');
});`,
  ['中文与空格自动编码。', 'set 覆盖同名参数，append 添加同名多值。'],
  '加入一个参数包含 & 和 =，检查编码。',
  [
    '安全组合查询参数使用什么？',
    ['URLSearchParams', 'eval', '直接拼接所有字符'],
    0,
    'URLSearchParams 处理转义与参数序列。',
  ],
  'Web/API/URLSearchParams',
);

lesson(
  'js',
  'js-abort-listener',
  'AbortController 清理监听器',
  'DOM 与事件',
  'addEventListener 的 signal 选项可绑定 AbortSignal。组件卸载时 abort 可集中移除这些监听器，避免重复注册与状态泄漏。',
  `<main class="lesson-demo"><h1>可清理的事件监听</h1><button id="listen">启动监听</button><button id="fire">点击计数</button><button id="stop">停止监听</button><p id="listenStatus" aria-live="polite">尚未监听</p></main>`,
  '',
  `let controller;
let count = 0;
const output = document.getElementById('listenStatus');
document.getElementById('listen').addEventListener('click', () => {
  controller?.abort();
  controller = new AbortController();
  document.getElementById('fire').addEventListener('click', () => {
    output.textContent = '监听收到 ' + (++count) + ' 次点击';
  }, { signal: controller.signal });
  output.textContent = '监听已启动';
});
document.getElementById('stop').addEventListener('click', () => {
  controller?.abort();
  output.textContent = '监听已停止';
});`,
  ['重复启动前移除旧监听。', '停止后点击不再累计。'],
  '把两种不同事件关联到同一个 signal。',
  [
    'abort 后这些监听器如何处理？',
    ['被移除', '自动重启', '执行一次'],
    0,
    '关联 signal 的事件监听器会被移除。',
  ],
  'Web/API/EventTarget/addEventListener',
  { level: '进阶' },
);

// 综合案例由三门技术协同实现，不依赖框架或后端。
lesson(
  'project',
  'project-portfolio',
  '作品集：筛选与项目详情',
  '综合实战',
  '用语义卡片组织作品，用 Grid 响应式布局，用 JavaScript 根据分类筛选并打开原生详情对话框。所有作品资料都在本地。',
  `<main class="lesson-demo portfolio">
  <header><small>SELECTED WORK / 2026</small><h1>让界面，成为沟通的语言。</h1><p>原生前端作品集 · 从结构到交互</p></header>
  <div id="filters" role="group" aria-label="作品分类"><button data-filter="all" aria-pressed="true">全部</button><button data-filter="web" aria-pressed="false">网站</button><button data-filter="tool" aria-pressed="false">工具</button></div>
  <div id="projects" class="project-grid"></div>
  <dialog id="projectDetail" aria-labelledby="projectName"><h2 id="projectName"></h2><p id="projectDescription"></p><form method="dialog"><button>关闭</button></form></dialog>
</main>`,
  `.portfolio header { padding: 24px 0; }
.portfolio h1 { font-size: clamp(24px, 4vw, 42px); }
.portfolio small { letter-spacing: 3px; color: #94784c; }
.project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr)); gap: 16px; margin-top: 24px; }
.project-card { padding: 24px; background: #edf3ee; border-radius: 12px; }
.project-art { padding: 35px 0; font-size: 48px; color: #5b8069; }
[aria-pressed="true"] { outline: 2px solid #588769; }
dialog { max-width: 85%; padding: 24px; border: 0; border-radius: 14px; }
dialog::backdrop { background: #142f2388; }`,
  `const data = [
  { name: '界面实验室', category: 'web', icon: '◈', description: '编辑、运行与讲解相连的原生前端学习平台。' },
  { name: '旅行札记', category: 'web', icon: '△', description: '响应式内容网站，关注文字层级与图片排版。' },
  { name: '专注计时器', category: 'tool', icon: '◷', description: '通过状态机管理计时、暂停和完成反馈。' },
  { name: '预算助手', category: 'tool', icon: '▤', description: '用数组与整数金额处理支出统计。' },
];
function render(filter) {
  const container = document.getElementById('projects');
  container.replaceChildren();
  for (const item of data.filter(item => filter === 'all' || item.category === filter)) {
    const card = document.createElement('article');
    card.className = 'project-card';
    const art = document.createElement('div');
    art.className = 'project-art';
    art.textContent = item.icon;
    const heading = document.createElement('h2');
    heading.textContent = item.name;
    const button = document.createElement('button');
    button.textContent = '查看详情';
    button.addEventListener('click', () => {
      document.getElementById('projectName').textContent = item.name;
      document.getElementById('projectDescription').textContent = item.description;
      document.getElementById('projectDetail').showModal();
    });
    card.append(art, heading, button);
    container.append(card);
  }
}
document.getElementById('filters').addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  render(button.dataset.filter);
});
render('all');`,
  [
    '筛选后展示真实数据子集。',
    '详情采用原生模态对话框。',
    '所有文字用 textContent 插入。',
  ],
  '替换为你的三个真实项目，加入技术标签和源码地址。',
  [
    '作品筛选的源数据应如何管理？',
    ['保持完整数据并派生结果', '每次直接删除原数据', '写死每种结果'],
    0,
    '保留完整数据可以切换条件并恢复全部作品。',
  ],
  'Web/API/Document_Object_Model',
  { level: '实战', minutes: 45, tags: ['Grid', '筛选', 'dialog', '作品集'] },
);

lesson(
  'project',
  'project-cart',
  '购物清单：数量与金额',
  '综合实战',
  '把商品与数量作为状态，渲染函数派生小计和总计。金额以分计算，界面展示时用 Intl 格式化，所有商品为本地演示数据。',
  `<main class="lesson-demo"><h1>学习补给清单</h1><div id="cart"></div><p>合计：<strong id="cartTotal"></strong></p><button id="checkout">查看订单摘要</button><p id="order" aria-live="polite"></p></main>`,
  '.cart-row { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; border-bottom: 1px solid #dbe6dd; padding: 14px 0; }\n.cart-row strong { margin-right: auto; }',
  `const products = [
  { title: '学习笔记本', cents: 1990, count: 1 },
  { title: '桌面书签', cents: 890, count: 2 },
  { title: '专注贴纸', cents: 590, count: 0 },
];
const money = cents => new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(cents / 100);
function render() {
  const container = document.getElementById('cart');
  container.replaceChildren();
  products.forEach((product, index) => {
    const row = document.createElement('div');
    row.className = 'cart-row';
    const title = document.createElement('strong');
    title.textContent = product.title + ' · ' + money(product.cents);
    row.append(title);
    for (const delta of [-1, 1]) {
      const button = document.createElement('button');
      button.textContent = delta === -1 ? '−' : '+';
      button.setAttribute('aria-label', (delta === -1 ? '减少' : '增加') + product.title);
      button.disabled = delta === -1 && product.count === 0;
      button.addEventListener('click', () => {
        products[index].count = Math.max(0, Math.min(99, product.count + delta));
        render();
      });
      row.append(button);
      if (delta === -1) row.append(document.createTextNode(String(product.count)));
    }
    container.append(row);
  });
  document.getElementById('cartTotal').textContent = money(products.reduce((sum, item) => sum + item.cents * item.count, 0));
  document.getElementById('order').textContent = '';
}
document.getElementById('checkout').addEventListener('click', () => {
  const count = products.reduce((sum, item) => sum + item.count, 0);
  document.getElementById('order').textContent = count ? '共 ' + count + ' 件，仅演示订单摘要，无支付与下单。' : '请先添加商品。';
});
render();`,
  ['数量不低于 0、不高于 99。', 'total 从状态派生，不单独维护重复数据。'],
  '加入满 5000 分减 500 分的折扣，并显示优惠前后金额。',
  [
    '金额计算采用什么？',
    ['整数分', '格式化后的字符串', '随意累加浮点'],
    0,
    '在安全整数范围内以分计算更容易避免小数误差。',
  ],
  'Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat',
  { level: '实战', minutes: 45, tags: ['状态', '数组', '金额'] },
);

lesson(
  'project',
  'project-quiz',
  '测验应用：评分与重新开始',
  '综合实战',
  '题库是数据，当前题目、答案与结果是状态。使用 radio 和 fieldset 提供原生键盘操作，提交后给出答案解释。',
  `<main class="lesson-demo"><h1>前端基础小测</h1><p id="questionProgress"></p><form id="quizForm"><fieldset id="questionArea"></fieldset><button type="submit" id="quizNext">提交答案</button></form><p id="quizExplanation" aria-live="polite"></p><button id="quizRestart" hidden>再试一次</button></main>`,
  'fieldset { border: 1px solid #c6d9cd; border-radius: 10px; }',
  `const questions = [
  { title: '哪个元素用于导航区域？', options: ['nav', 'div', 'span'], answer: 0, explain: 'nav 为主要导航提供语义。' },
  { title: '哪个属性设置网格列？', options: ['display', 'grid-template-columns', 'color'], answer: 1, explain: 'grid-template-columns 定义列轨道。' },
  { title: '哪个方法绑定事件？', options: ['JSON.parse', 'addEventListener', 'slice'], answer: 1, explain: 'addEventListener 为目标注册监听器。' },
];
let index = 0;
let score = 0;
let answered = false;
function render() {
  answered = false;
  const question = questions[index];
  const area = document.getElementById('questionArea');
  area.replaceChildren();
  const legend = document.createElement('legend');
  legend.textContent = question.title;
  area.append(legend);
  question.options.forEach((option, i) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio'; input.name = 'answer'; input.value = i; input.required = true;
    label.append(input, document.createTextNode(' ' + option));
    area.append(label);
  });
  document.getElementById('questionProgress').textContent = '第 ' + (index + 1) + ' / ' + questions.length + ' 题';
  document.getElementById('quizExplanation').textContent = '';
  document.getElementById('quizNext').textContent = '提交答案';
}
document.getElementById('quizForm').addEventListener('submit', event => {
  event.preventDefault();
  if (!answered) {
    const chosen = Number(new FormData(event.target).get('answer'));
    if (chosen === questions[index].answer) score++;
    document.getElementById('quizExplanation').textContent = (chosen === questions[index].answer ? '正确！' : '再记一下：') + questions[index].explain;
    document.querySelectorAll('[name=answer]').forEach(input => input.disabled = true);
    document.getElementById('quizNext').textContent = '下一题 / 查看结果';
    answered = true;
    return;
  }
  if (++index < questions.length) render();
  else {
    document.getElementById('quizForm').hidden = true;
    document.getElementById('questionProgress').textContent = '完成！得分 ' + score + ' / ' + questions.length;
    document.getElementById('quizRestart').hidden = false;
  }
});
document.getElementById('quizRestart').addEventListener('click', () => {
  index = 0; score = 0;
  document.getElementById('quizForm').hidden = false;
  document.getElementById('quizRestart').hidden = true;
  render();
});
render();`,
  [
    '未选答案时原生 required 阻止提交。',
    '每一题只计分一次。',
    '重新开始重置全部状态。',
  ],
  '加入两道你自己的题目，并实现错题回顾。',
  [
    '重复提交为何不能再次加分？',
    ['answered 状态限制', '只靠按钮颜色', '浏览器自动阻止'],
    0,
    '明确状态避免重复计分。',
  ],
  'Web/API/FormData',
  { level: '实战', minutes: 45, tags: ['表单', '状态机', '评分'] },
);

lesson(
  'project',
  'project-expenses',
  '支出账本：新增、删除与统计',
  '综合实战',
  '用表单管理支出记录，用数据渲染表格与汇总。金额从字符串精确转换为分，用户内容以文本显示，数据仅保存在当前实验内存。',
  `<main class="lesson-demo"><h1>我的学习支出</h1><form id="expenseForm"><label>项目 <input name="title" required maxlength="40"></label><label>金额（元）<input name="amount" type="number" min="0.01" max="100000" step="0.01" required></label><button type="submit">加入记录</button></form><table><caption>当前记录</caption><thead><tr><th>项目</th><th>金额</th><th>操作</th></tr></thead><tbody id="records"></tbody></table><p id="expenseTotal"></p></main>`,
  '',
  `let nextId = 1;
let records = [];
function render() {
  const body = document.getElementById('records');
  body.replaceChildren();
  for (const record of records) {
    const row = document.createElement('tr');
    const title = document.createElement('td'); title.textContent = record.title;
    const amount = document.createElement('td'); amount.textContent = (record.cents / 100).toFixed(2);
    const action = document.createElement('td');
    const button = document.createElement('button'); button.textContent = '删除';
    button.setAttribute('aria-label', '删除' + record.title);
    button.addEventListener('click', () => { records = records.filter(item => item.id !== record.id); render(); });
    action.append(button); row.append(title, amount, action); body.append(row);
  }
  document.getElementById('expenseTotal').textContent = records.length ? '合计 ¥' + (records.reduce((sum, item) => sum + item.cents, 0) / 100).toFixed(2) : '暂无记录，先加入一笔支出。';
}
document.getElementById('expenseForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.target);
  const title = data.get('title').trim();
  if (!title) return;
  const [whole, fraction = ''] = data.get('amount').split('.');
  const cents = Number(whole) * 100 + Number(fraction.padEnd(2, '0').slice(0, 2));
  if (!Number.isSafeInteger(cents) || cents <= 0) return;
  records.push({ id: nextId++, title, cents });
  event.target.reset(); render();
});
render();`,
  ['记录有稳定 id，不用数组位置作身份。', '删除后统计从新数据派生。'],
  '加入分类下拉框，再按分类筛选统计。',
  [
    '记录身份应优先使用什么？',
    ['稳定 id', '当前数组下标', '金额'],
    0,
    '下标会随删除排序改变，不能长期代表同一记录。',
  ],
  'Web/JavaScript/Reference/Global_Objects/Array/reduce',
  { level: '实战', minutes: 45, tags: ['CRUD', '表格', '统计'] },
);

lesson(
  'project',
  'project-focus',
  '专注时钟：计时状态与暂停',
  '综合实战',
  '计时器用目标时间而不是假设 setInterval 精准触发。开始、暂停、结束是明确状态；后台标签页恢复时也根据实际时间计算剩余时长。',
  `<main class="lesson-demo focus-app"><small>FOCUS / ONE THING AT A TIME</small><h1>给注意力一点空间</h1><label>本次秒数 <input id="duration" type="number" min="5" max="3600" value="60"></label><div id="clock" role="timer" aria-label="剩余时间">01:00</div><button id="focusStart">开始</button><button id="focusReset">重置</button><p id="focusState" aria-live="polite">准备好了</p></main>`,
  '.focus-app { text-align: center; }\n#clock { font-size: clamp(48px, 10vw, 84px); font-variant-numeric: tabular-nums; margin: 24px 0; color: #396c50; }\n.focus-app small { letter-spacing: 2px; color: #977c4f; }',
  `let remaining = 60000;
let deadline = 0;
let timer;
let running = false;
const clock = document.getElementById('clock');
const button = document.getElementById('focusStart');
function display() {
  const seconds = Math.ceil(Math.max(0, remaining) / 1000);
  clock.textContent = String(Math.floor(seconds / 60)).padStart(2, '0') + ':' + String(seconds % 60).padStart(2, '0');
}
function stop() { clearInterval(timer); running = false; button.textContent = '继续'; }
function reset() {
  stop();
  remaining = Math.max(5, Math.min(3600, Number(document.getElementById('duration').value) || 60)) * 1000;
  button.textContent = '开始';
  document.getElementById('focusState').textContent = '准备好了';
  display();
}
button.addEventListener('click', () => {
  if (running) {
    remaining = Math.max(0, deadline - Date.now()); stop(); display();
    document.getElementById('focusState').textContent = '已暂停';
    return;
  }
  if (remaining <= 0) reset();
  deadline = Date.now() + remaining;
  running = true; button.textContent = '暂停';
  document.getElementById('focusState').textContent = '专注进行中';
  timer = setInterval(() => {
    remaining = Math.max(0, deadline - Date.now()); display();
    if (remaining === 0) { stop(); button.textContent = '再来一次'; document.getElementById('focusState').textContent = '完成，休息一下。'; }
  }, 100);
});
document.getElementById('focusReset').addEventListener('click', reset);
document.getElementById('duration').addEventListener('change', reset);
reset();`,
  ['暂停保存实际剩余时间。', '输入变化重置当前计时。', '完成后清理定时器。'],
  '增加工作与休息阶段，并在阶段切换时给出文字反馈。',
  [
    '计时应该依据什么？',
    ['目标时间与当前时间差', '回调次数', '动画帧数量'],
    0,
    '定时器可能延迟，目标时间更接近实际经过的时间。',
  ],
  'Web/API/Window/setInterval',
  { level: '实战', minutes: 45, tags: ['计时', '状态机', '时间'] },
);

lesson(
  'project',
  'project-color',
  '颜色工具：HEX、RGB 与复制',
  '综合实战',
  '把颜色输入转成 RGB 与文本输出，改变样本背景，并处理 Clipboard 在隔离或不安全上下文中的失败。失败时提供可手动复制的文本。',
  `<main class="lesson-demo"><h1>配色观察室</h1><label>选择颜色 <input id="colorInput" type="color" value="#4f7e61"></label><div id="swatch"></div><label>颜色值 <input id="colorCode" readonly></label><p id="rgb"></p><button id="copyColor">复制 HEX</button><p id="copyStatus" aria-live="polite"></p></main>`,
  '#swatch { height: 150px; border-radius: 12px; margin: 18px 0; }',
  `const input = document.getElementById('colorInput');
function render() {
  const hex = input.value;
  const channels = [1, 3, 5].map(start => parseInt(hex.slice(start, start + 2), 16));
  document.getElementById('swatch').style.background = hex;
  document.getElementById('colorCode').value = hex.toUpperCase();
  document.getElementById('rgb').textContent = 'rgb(' + channels.join(', ') + ')';
  document.getElementById('copyStatus').textContent = '';
}
input.addEventListener('input', render);
document.getElementById('copyColor').addEventListener('click', async () => {
  const code = document.getElementById('colorCode');
  try {
    await navigator.clipboard.writeText(code.value);
    document.getElementById('copyStatus').textContent = '已复制';
  } catch {
    code.focus(); code.select();
    document.getElementById('copyStatus').textContent = '当前环境限制剪贴板，颜色值已选中，可按 Ctrl/Cmd+C。';
  }
});
render();`,
  ['十六进制每两个字符是一条颜色通道。', '复制失败有明确回退操作。'],
  '增加最近使用的五种颜色，并防止重复。',
  [
    'Clipboard 失败时应该如何处理？',
    ['给出手动复制回退', '显示已复制', '忽略'],
    0,
    '实际未复制时不能给成功反馈。',
  ],
  'Web/API/Clipboard/writeText',
  { level: '实战', minutes: 30, tags: ['颜色', 'Clipboard', '降级'] },
);

const PATHS = [
  {
    title: '01 / 搭好结构',
    cat: 'html',
    description: '文档、语义、媒体、表单与可访问性',
    ids: [
      'html-document',
      'semantic',
      'html-inline',
      'html-figure',
      'html-input-types',
      'html-fieldset',
      'html-accessibility',
      'html-dialog',
    ],
  },
  {
    title: '02 / 理解样式',
    cat: 'css',
    description: '级联、盒模型、布局与响应式',
    ids: [
      'css-cascade',
      'box-model',
      'css-sizing',
      'css-units',
      'flex',
      'css-flex-grow',
      'grid-css',
      'css-grid-areas',
      'responsive',
      'css-reduced-motion',
    ],
  },
  {
    title: '03 / 让页面回应',
    cat: 'js',
    description: '语言、DOM、事件与异步操作',
    ids: [
      'js-variables',
      'js-types',
      'js-control',
      'js-functions',
      'js-array-methods',
      'js-dom',
      'events',
      'js-delegation',
      'js-promise',
      'js-fetch',
    ],
  },
  {
    title: '04 / 完成一件作品',
    cat: 'project',
    description: '把知识组合成完整的小应用',
    ids: [
      'project-portfolio',
      'project-cart',
      'project-quiz',
      'project-expenses',
      'project-focus',
      'project-color',
    ],
  },
];
