/* 当前源码 → 元素 / 声明 / 执行步骤。只读取源码，预览测量通过受限消息通信。 */
let tracePage = 0;
let traceLanguage = 'css';
let traceQuery = '';
let traceRequest = 0;
let traceRows = [];
function teachingDetails(demo) {
  return (
    demo.detail ||
    LESSON_DETAILS[demo.id] || {
      terms:
        demo.cat === 'layout' || demo.cat === 'css'
          ? [
              '选择器确定作用对象，声明决定具体变化；下面逐条解释本例实际使用的属性。',
              '父容器决定子项的布局方式；看到结果不符时，先检查选择器、布局模式和尺寸约束。',
            ]
          : demo.cat === 'html'
            ? [
                '标签表达内容身份，属性补充信息；下方结构树把每个元素和其属性对应到预览。',
                '默认样式来自浏览器或工作台公共层，语义标签本身不自动提供成品布局。',
              ]
            : [
                '输入是用户操作或原始数据，状态是变量中的当前值，输出是DOM更新或控制台文字。',
                '先定义与登记函数，再在调用或事件发生时执行；逐行索引是语法导读，不是自动运行轨迹。',
              ],
      steps: demo.observe,
    }
  );
}
function renderLessonStart(demo) {
  const container = $('lessonStart');
  const chapter = LEARNING_CHAPTERS[demo.chapterIndex];
  const detail = teachingDetails(demo);
  container.replaceChildren(
    element('small', '', chapter.title),
    element('h2', '', '这一例，先看懂什么？'),
    element('p', '', demo.what),
  );
  const details = element('details');
  details.append(element('summary', '', '基础概念、前置课程与怎么读'));
  detail.terms.forEach((text) => details.append(element('p', '', text)));
  if (demo.prerequisites.length) {
    details.append(element('strong', '', '前置基础（可直接补课）：'));
    const links = element('div', 'prerequisite-links');
    demo.prerequisites.forEach((id) => links.append(lessonButton(id)));
    details.append(links);
  }
  container.append(details);
  if (demo.id === 'layout-wireframe-960') {
    const reference = element('details');
    reference.append(element('summary', '', '查看你上传的尺寸图'));
    const img = element('img');
    img.src = 'assets/960-layout-reference.png';
    img.alt = '960像素版心：头部三列、菜单、主体九栏目与页脚尺寸标注';
    reference.append(
      img,
      element(
        'p',
        '',
        '以标注尺寸计算：200+10+540+10+200=960；主区750+10+200=960；高度总和610。',
      ),
    );
    container.append(reference);
  }
}
function openUploadedGuide() {
  openDialog('上传教程 → 学习主线与纠错');
  const intro = element(
    'p',
    'dialog-intro',
    '依照上传文档的“文档结构 → 文本 → 链接 → 图片 → 列表 → 表格 → 表单 → 容器 → 语义与新能力”展开。标签/属性/结构树先补齐，CSS再从语法、选择器、盒模型和正常流进入布局。',
  );
  $('dialogContent').append(intro);
  const mappings = [
    ['核心概念与语法', 'html-syntax html-tree html-document'],
    [
      '基本标签：标题、段落、链接、图片',
      'heading html-inline links manual-paths html-figure',
    ],
    [
      '列表、表格、表单',
      'lists table-el manual-table-span html-form-submit html-fieldset html-input-types',
    ],
    [
      '块与行内、div/span、属性',
      'div html-attributes css-normal-flow css-inline-boxes',
    ],
    ['HTML5简化语法、布尔属性、语义', 'html-document html-boolean semantic'],
    ['原生输入、音视频、SVG、Canvas', 'html-select html-media media js-canvas'],
    ['存储与浏览器能力扩展', 'js-storage manual-storage-json js-file js-fetch'],
    ['上传图：宽度、间隙、嵌套布局', 'layout-wireframe-960 css-grid-tracks box-model'],
  ];
  for (const [heading, ids] of mappings) {
    const section = element('section', 'uploaded-section');
    section.append(element('h3', '', heading));
    const links = element('div', 'prerequisite-links');
    ids.split(' ').forEach((id) => links.append(lessonButton(id)));
    section.append(links);
    $('dialogContent').append(section);
  }
  const corrections = element('section', 'pitfall-card');
  corrections.append(element('h3', '', '保留学习顺序，修正历史表述'));
  [
    '当前HTML按WHATWG持续更新的标准使用。HTML5是历史版本/技术集合的常见称呼，不代表HTML4与HTML5是两门互斥语言。',
    '旧HTML4 Transitional doctype用于识别历史代码；新实验统一使用<!doctype html>。HTML没有“升级后才支持中文”的限制。',
    '块/行内是CSS显示与布局角色，不是不可改变的标签身份；普通span与img的宽高行为不同。',
    'SVG是独立的矢量标记体系，可嵌入HTML；Canvas通过JS画位图。二者不是同一套绘图方法。',
    'Geolocation、Workers、WebSocket等是浏览器API专题，分属不同规范；权限、来源与网络端点不能省略。文档提到不等于当前实验已模拟真实定位或真实服务器连接。',
    'Application Cache已废弃；Service Worker不是把AppCache名称换一下，也不能在普通file页面完整复现离线安装。',
    'localStorage/sessionStorage配额与限制依浏览器、来源和环境而变；5MB不是普遍保证，Cookie也不能简单理解为整个网站只有4KB总存储。',
    '布尔属性的存在就启用：disabled="false"仍禁用。HTML新功能兼容性逐项检查，不用“现代浏览器全部支持”笼统代替。',
  ].forEach((text) => corrections.append(element('p', '', text)));
  $('dialogContent').append(corrections);
  const sources = element('div', 'prerequisite-links');
  for (const [label, url] of [
    [
      'MDN 正常流',
      'https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Display/Block_and_inline_layout',
    ],
    [
      'MDN 选择器分类',
      'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors',
    ],
    ['WHATWG HTML标准', 'https://html.spec.whatwg.org/multipage/'],
    ['W3C CSS Display', 'https://www.w3.org/TR/css-display-3/'],
    ['菜鸟 CSS 语法', 'https://www.runoob.com/css/css-syntax.html'],
    [
      '小林 HTTP 原理延伸',
      'https://www.xiaolincoding.com/network/2_http/http_interview.html',
    ],
  ]) {
    const link = element('a', 'prerequisite-button', label + ' ↗');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    sources.append(link);
  }
  $('dialogContent').append(
    element(
      'p',
      '',
      '网络原理与面试问答放在扩展阅读；本地可运行实验优先说明真实HTML/CSS/JS行为。',
    ),
    sources,
  );
  const original = element('details');
  original.append(
    element('summary', '', '查看上传Markdown原文（历史表述以上面纠错为准）'),
  );
  const text = element('pre', 'uploaded-original', UPLOADED_GUIDE.text);
  original.append(text);
  $('dialogContent').append(original);
}
function lessonButton(id) {
  const demo = demos.find((item) => item.id === id);
  if (!demo) return element('span');
  const button = element('button', 'prerequisite-button', demo.title);
  button.onclick = () => {
    clearFilters();
    switchDemo(id);
    if ($('learningDialog').open) $('learningDialog').close();
  };
  return button;
}
function renderPedagogy(demo, article) {
  const section = LEARNING_CHAPTERS[demo.chapterIndex];
  const position = element('div', 'learning-position');
  position.append(
    element(
      'small',
      '',
      section.title + ' · 本章 ' + (demo.lessonIndex + 1) + ' / ' + section.ids.length,
    ),
    element('p', '', section.intro),
  );
  article.append(position);
  if (demo.prerequisites.length) {
    const before = element('details', 'teaching-details');
    before.append(element('summary', '', '还没学过这些？先补基础（可直接跳转）'));
    const links = element('div', 'prerequisite-links');
    demo.prerequisites.forEach((id) => links.append(lessonButton(id)));
    before.append(links);
    article.append(before);
  }
  const detail = teachingDetails(demo);
  const terms = element('div', 'concept-card plain-terms');
  terms.append(element('h3', '', '先把这些词讲明白'));
  detail.terms.forEach((text) => terms.append(element('p', '', text)));
  article.append(terms);
  const first = element('div', 'concept-card');
  first.append(element('h3', '', '本例怎么读'));
  const ordered = element('ol');
  detail.steps.forEach((text) => ordered.append(element('li', '', text)));
  first.append(ordered);
  const button = element('button', 'subtle-button', '查看代码 → 页面对应关系 ↑');
  button.onclick = () =>
    $('codeMap').scrollIntoView({ behavior: 'smooth', block: 'start' });
  first.append(button);
  article.append(first);
  if (detail.pitfalls?.length) {
    const box = element('div', 'pitfall-card');
    box.append(element('h3', '', '先避免这些误解'));
    detail.pitfalls.forEach((text) => box.append(element('p', '', text)));
    article.append(box);
  }
  const exercise = element('div', 'experiment-loop');
  exercise.append(
    element('h3', '', '每次只改变一处'),
    element(
      'p',
      '',
      '① 先预测 → ② 修改代码 → ③ 点运行 → ④ 用高亮与计算值核对 → ⑤ 点恢复再做下一次。',
    ),
    element('p', '', demo.challenge),
  );
  article.append(exercise);
}
function selectorMeaning(selector) {
  const notes = [];
  if (selector.includes(',')) notes.push('逗号为并集：任一分支匹配即可');
  if (/\s>\s|>/.test(selector)) notes.push('> 只选直接子元素');
  if (/\s\+\s/.test(selector)) notes.push('+ 选紧随其后的相邻兄弟');
  if (/\s~\s/.test(selector)) notes.push('~ 选后面的同级兄弟');
  if (/\.[\w-]+\.[\w-]+/.test(selector)) notes.push('相连的多个类要求同一元素同时具备');
  if (/\[[^\]]+\]/.test(selector)) notes.push('方括号检查属性存在或属性值');
  if (/::/.test(selector)) notes.push('双冒号选伪元素，它不是独立DOM节点');
  if (/:has\(/.test(selector)) notes.push(':has 根据后代或关系条件选当前元素');
  if (/:(hover|focus|active|checked|disabled)/.test(selector))
    notes.push('伪类需当前状态满足才匹配');
  if (/:nth-/.test(selector)) notes.push('nth 按兄弟元素的位置检查条件');
  if (/#[\w-]+/.test(selector)) notes.push('# 按id匹配');
  if (/\.[\w-]+/.test(selector)) notes.push('. 按class匹配');
  if (!notes.length)
    notes.push(
      /\S\s+\S/.test(selector)
        ? '空格表示后代，可跨多层；最右侧是实际目标'
        : '* 选全部元素；标签名则选对应标签（按此规则实际写法判断）',
    );
  return notes.join('；') + '。';
}
function propertyHelp(name) {
  if (name.startsWith('--'))
    return {
      meaning: '自定义属性：保存可复用的CSS值，本身不直接画出外观。',
      values:
        '用var(' + name + ')读取；未注册的自定义属性通常继承；要看它在哪里被实际使用。',
      initial: '未定义 / 保证无效值',
      inherits: true,
    };
  return (
    CSS_HELP[name] || {
      meaning:
        REFERENCES.find((item) => item.cat === 'css' && item.name === name)
          ?.description || '此属性未收录完整释义，点击规范查看它的适用条件。',
      values: '核对当前布局模式和浏览器支持；不可把写了声明等同于生效。',
      initial: '请查看规范',
      inherits: null,
    }
  );
}
function explainValue(property, value) {
  const notes = [];
  if (/^-?\d+(?:\.\d+)?px$/.test(value))
    notes.push('这是固定CSS长度 ' + value + '，不是保证相同数量的物理像素');
  if (/^-?\d+(?:\.\d+)?rem$/.test(value))
    notes.push('根元素字号 × ' + parseFloat(value));
  if (/^-?\d+(?:\.\d+)?em$/.test(value))
    notes.push(
      '相应字号参考 × ' +
        parseFloat(value) +
        '（font-size参照父级，其余长度通常参照自身）',
    );
  if (value.includes('fr')) notes.push('fr分配扣除固定轨道和gap后的剩余空间');
  if (/var\(/.test(value))
    notes.push('var()读取自定义属性，最终值需结合该元素继承/定义的变量');
  if (/calc\(/.test(value)) notes.push('calc()组合长度计算，不同单位先按各自参考换算');
  if (/clamp\(/.test(value)) notes.push('clamp(下限,理想值,上限)约束结果');
  if (/repeat\(/.test(value))
    notes.push('repeat()重复轨道；auto-fit/auto-fill的数量由可用空间决定');
  if (/^(padding|margin|inset)$/.test(property)) {
    const parts = value.trim().split(/\s+/);
    if (parts.length >= 1 && parts.length <= 4) {
      const [a, b = a, c = a, d = b] = parts;
      notes.push('展开上/右/下/左：' + [a, b, c, d].join(' / '));
    }
  }
  return notes.join('；') + (notes.length ? '。' : '');
}
function attributeMeaning(name, tag) {
  if (HTML_ATTRIBUTE_HELP[name]) return HTML_ATTRIBUTE_HELP[name];
  if (name.startsWith('data-'))
    return '自定义数据属性，值是字符串；可被属性选择器匹配，也可从dataset读取；不自动改变外观。';
  if (name.startsWith('aria-'))
    return '为辅助技术提供名称、关系或状态；必须与实际交互同步。ARIA本身不改变可见布局或实现行为。';
  return (
    HTML_ATTRIBUTE_HELP[name] ||
    (tag === 'svg' || ['path', 'rect', 'circle', 'line', 'polyline'].includes(tag)
      ? 'SVG图形属性，数值需结合viewBox坐标与缩放理解；不是普通HTML布局属性。'
      : '此属性按所属元素解释；查看该元素的MDN定义，避免套用同名CSS属性。')
  );
}
function traceCss(code) {
  const rows = [];
  const doc = new DOMParser().parseFromString(code.html, 'text/html');
  const sources = [
    ...Array.from(doc.querySelectorAll('style'), (node) => ({
      text: node.textContent,
      language: 'html',
      label: 'HTML 中的 style',
    })),
    { text: code.css, language: 'css', label: 'CSS 编辑区' },
  ];
  for (const source of sources) {
    if (!source.text.trim()) continue;
    const sourceOffset =
      source.language === 'css' ? 0 : Math.max(0, code.html.indexOf(source.text));
    for (const row of authoredCssRows(source.text))
      rows.push({
        ...row,
        kind: 'css',
        language: source.language,
        label: source.label,
        offset: row.offset + sourceOffset,
      });
  }
  for (const node of doc.body.querySelectorAll('[style]')) {
    for (const [property, value] of splitDeclarations(node.getAttribute('style')))
      rows.push({
        kind: 'css',
        selector: elementSelector(node),
        property,
        value,
        context: ['HTML 行内 style'],
        language: 'html',
        label: 'HTML 行内样式',
        offset: code.html.indexOf(node.getAttribute('style')),
        line: 0,
      });
  }
  return rows;
}
// 保留作者实际写法、重复声明和关键帧，不让CSSOM把#颜色及简写改写后冒充源码。
function authoredCssRows(text) {
  const rows = [],
    stack = [];
  let buffer = '',
    start = 0,
    quote = '',
    escaped = false,
    comment = false,
    depth = 0;
  const emit = () => {
    const match = buffer.match(/^\s*([\w-]+)\s*:\s*([\s\S]+)$/);
    const block = stack.at(-1);
    if (match && block && !block.header.startsWith('@')) {
      const property = match[1],
        raw = match[2].trim();
      const offset = start + buffer.indexOf(property);
      const context = stack.slice(0, -1).map((item) => item.header);
      rows.push({
        selector: block.header.replace(/\s+/g, ' ').trim(),
        property,
        value: raw.replace(/\s*!important\s*$/i, ''),
        important: /!important\s*$/i.test(raw) ? 'important' : '',
        context,
        line: text.slice(0, offset).split('\n').length,
        offset,
        inspectable: !context.some((s) => /@(?:-\w+-)?keyframes\b/.test(s)),
        supported: CSS.supports(property, raw.replace(/\s*!important\s*$/i, '')),
      });
    }
    buffer = '';
  };
  for (let i = 0; i < text.length; i++) {
    const char = text[i],
      next = text[i + 1];
    if (comment) {
      if (char === '*' && next === '/') {
        comment = false;
        i++;
        if (!buffer.trim()) start = i + 1;
      }
      continue;
    }
    if (escaped) {
      buffer += char;
      escaped = false;
      continue;
    }
    if (char === '\\') {
      buffer += char;
      escaped = true;
      continue;
    }
    if (quote) {
      buffer += char;
      if (char === quote) quote = '';
      continue;
    }
    if (char === '/' && next === '*') {
      comment = true;
      i++;
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      buffer += char;
      continue;
    }
    if (char === '(' || char === '[') depth++;
    if (char === ')' || char === ']') depth--;
    if (depth === 0 && char === '{') {
      stack.push({ header: buffer.trim() });
      buffer = '';
      start = i + 1;
    } else if (depth === 0 && char === '}') {
      emit();
      stack.pop();
      start = i + 1;
    } else if (depth === 0 && char === ';') {
      emit();
      start = i + 1;
    } else buffer += char;
  }
  return rows;
}
function splitDeclarations(text) {
  const rows = [];
  let segment = '',
    quote = '',
    depth = 0,
    escaped = false;
  const push = () => {
    const colon = segment.indexOf(':');
    if (colon > 0)
      rows.push([segment.slice(0, colon).trim(), segment.slice(colon + 1).trim()]);
    segment = '';
  };
  for (const char of text) {
    if (escaped) {
      segment += char;
      escaped = false;
      continue;
    }
    if (char === '\\') {
      segment += char;
      escaped = true;
      continue;
    }
    if (quote) {
      segment += char;
      if (char === quote) quote = '';
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      segment += char;
      continue;
    }
    if (char === '(' || char === '[') depth++;
    if (char === ')' || char === ']') depth--;
    if (char === ';' && depth === 0) push();
    else segment += char;
  }
  push();
  return rows;
}
function elementSelector(node) {
  if (node.id) return '#' + CSS.escape(node.id);
  const parts = [];
  let item = node;
  while (item && item.localName !== 'html') {
    const siblings = item.parentElement ? [...item.parentElement.children] : [];
    parts.unshift(
      item.localName +
        (item.localName === 'body' || item.localName === 'head'
          ? ''
          : ':nth-child(' + (siblings.indexOf(item) + 1) + ')'),
    );
    item = item.parentElement;
  }
  return parts.join(' > ');
}
function traceHtml(code) {
  const doc = new DOMParser().parseFromString(code.html, 'text/html');
  const rows = [];
  const offsets = new Map();
  for (const node of doc.querySelectorAll('*')) {
    if (
      ['html', 'head', 'body'].includes(node.localName) &&
      !new RegExp('<' + node.localName + '(?:\\s|>)', 'i').test(code.html)
    )
      continue;
    const ref = REFERENCES.find(
      (item) =>
        item.cat === 'html' &&
        (item.name === node.localName ||
          (/^h[1-6]$/.test(node.localName) && item.name === 'h1')),
    );
    const opening = new RegExp('<' + node.localName + '(?:\\s|>)', 'ig');
    opening.lastIndex = offsets.get(node.localName) || 0;
    const found = opening.exec(code.html);
    if (found) offsets.set(node.localName, found.index + found[0].length);
    rows.push({
      kind: 'html',
      selector: elementSelector(node),
      tag: node.localName,
      meaning:
        ref?.description ||
        (['svg', 'path', 'rect', 'circle', 'line', 'polyline'].includes(node.localName)
          ? 'SVG矢量图形结构。'
          : '查阅此元素规范，确认内容身份和允许的嵌套。'),
      attrs: Array.from(node.attributes, (attr) => ({
        name: attr.name,
        value: attr.value,
        meaning: attributeMeaning(attr.name, node.localName),
      })),
      language: 'html',
      offset: found?.index || 0,
      text: node.children.length ? '' : node.textContent.trim().slice(0, 90),
    });
  }
  return rows;
}
function jsLineMeaning(line) {
  const notes = [];
  for (const [word, description] of Object.entries(JS_SYNTAX_HELP)) {
    if (new RegExp('(?:^|\\W)' + word + '(?:\\W|$)').test(line))
      notes.push(word + '：' + description);
  }
  for (const [word, description] of Object.entries(JS_API_HELP)) {
    if (new RegExp('(?:^|[.\\s(=])' + word + '(?:\\s*\\(|\\b)').test(line))
      notes.push(word + '：' + description);
  }
  if (/=>/.test(line))
    notes.push(
      '=> 定义箭头函数；要看它作为回调还是直接调用，不能把定义顺序当执行顺序。',
    );
  if (/\.value\b/.test(line))
    notes.push('.value读取/写入控件当前值，输入框中通常是字符串。');
  if (/\.checked\b/.test(line)) notes.push('.checked读取/写入当前选中状态，布尔值。');
  if (/\.style\b/.test(line))
    notes.push('.style修改行内样式；它参与级联，并非直接改外部CSS文件。');
  if (/===|!==/.test(line)) notes.push('严格比较值与类型，不自动转换类型。');
  if (/\?\?/.test(line))
    notes.push('??仅在左侧null或undefined时用右侧默认值，保留0和空串。');
  if (/\?\./.test(line)) notes.push('?.在左侧null/undefined时短路，避免继续访问报错。');
  if (line.trim().startsWith('//')) return '源码注释：解释意图，不执行。';
  if (/^[\s}\]);,]+$/.test(line))
    return '结束前面的代码块、调用或数据结构；请与开始括号配对阅读。';
  if (!notes.length && /\w+\s*[:=]/.test(line))
    notes.push(
      '给字段或变量设置表达式结果；先算右侧，再写入左侧，注意对象字段与变量赋值的区别。',
    );
  if (!notes.length && /[\w.]\s*\(/.test(line))
    notes.push(
      '调用本例定义的函数/方法：找到同名定义，按传入实参追踪内部步骤与返回结果。',
    );
  return (
    notes.join('\n') ||
    '这是上一条语句、数据或表达式的续行；结合前后的括号与函数定义阅读，不独立执行这一行。'
  );
}
function traceJs(code) {
  let offset = 0;
  return code.js.split('\n').flatMap((text, index) => {
    const row = {
      kind: 'js',
      language: 'js',
      line: index + 1,
      offset,
      text,
      meaning: jsLineMeaning(text),
    };
    offset += text.length + 1;
    return text.trim() ? [row] : [];
  });
}
function jumpToCode(row) {
  selectTab(row.language);
  const editor = $('codeEditor');
  const start = Math.max(0, row.offset || 0);
  const end = editor.value.indexOf('\n', start);
  editor.focus({ preventScroll: true });
  editor.setSelectionRange(start, end === -1 ? editor.value.length : end);
  const line = editor.value.slice(0, start).split('\n').length;
  editor.scrollTop = Math.max(
    0,
    (line - 3) * parseFloat(getComputedStyle(editor).lineHeight),
  );
  syncEditorScroll();
  $('codeCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function requestTrace(row) {
  traceRequest += 1;
  $('traceResult').textContent = '正在测量预览中的元素…';
  $('preview').contentWindow.postMessage(
    {
      type: 'flab-inspect-request',
      token: runToken,
      request: traceRequest,
      selector: row.selector,
      property: row.property || 'display',
    },
    '*',
  );
}
function receiveTraceMessage(event) {
  const data = event.data;
  if (
    event.source !== $('preview').contentWindow ||
    !data ||
    data.type !== 'flab-inspect-result' ||
    data.token !== runToken ||
    data.request !== traceRequest ||
    typeof data.text !== 'string'
  )
    return;
  $('traceResult').textContent = data.text.slice(0, 12000);
}
function renderCodeMap(demo) {
  const code = edited(demo);
  traceRows =
    traceLanguage === 'css'
      ? traceCss(code)
      : traceLanguage === 'html'
        ? traceHtml(code)
        : traceJs(code);
  const rows = traceRows.filter((row) =>
    JSON.stringify(row).toLowerCase().includes(traceQuery.toLowerCase()),
  );
  const count = $('traceCount');
  count.textContent = rows.length + ' 条 · 来自当前已运行源码';
  const list = $('traceList');
  list.replaceChildren();
  const pageRows = rows.slice(0, (tracePage + 1) * 16);
  if (!pageRows.length)
    list.append(
      element(
        'p',
        '',
        traceLanguage === 'js'
          ? '这个示例没有JS：效果由HTML和CSS直接实现。'
          : '没有可解析的条目。检查语法，或切换其他语言。',
      ),
    );
  for (const row of pageRows) {
    const card = element('details', 'trace-card');
    const label =
      row.kind === 'css'
        ? row.selector +
          ' → ' +
          row.property +
          ': ' +
          row.value +
          (row.important ? ' !important' : '')
        : row.kind === 'html'
          ? '<' + row.tag + '> ' + (row.text || row.selector)
          : '第 ' + row.line + ' 行 · ' + row.text.trim();
    card.append(element('summary', '', label));
    let opened = false;
    card.addEventListener('toggle', () => {
      if (!card.open || opened) return;
      opened = true;
      const body = element('div', 'trace-body');
      const sourceLine = code[row.language]
        .slice(0, Math.max(0, row.offset || 0))
        .split('\n').length;
      body.append(
        element(
          'small',
          '',
          row.language.toUpperCase() + ' 编辑区 · 第 ' + sourceLine + ' 行',
        ),
      );
      if (row.kind === 'css') {
        if (row.supported === false)
          body.append(
            element(
              'p',
              'trace-condition',
              '当前浏览器不接受这个属性/值组合。源码仍保留供你检查，不能把它当作已生效。',
            ),
          );
        if (row.inspectable === false)
          body.append(
            element(
              'p',
              'trace-condition',
              '这是关键帧内部声明，描述动画某个时刻，不是DOM选择器；请操作动画并检查使用该动画的元素。',
            ),
          );
        const help = propertyHelp(row.property);
        body.append(
          element('p', '', '选中谁：' + selectorMeaning(row.selector)),
          element('p', '', row.property + '：' + help.meaning),
          element('p', '', '值怎么读：' + help.values),
        );
        const valueMeaning = explainValue(row.property, row.value);
        if (valueMeaning)
          body.append(element('p', '', '本行 ' + row.value + '：' + valueMeaning));
        body.append(
          element(
            'small',
            '',
            '规范初始值：' +
              help.initial +
              '；通常继承：' +
              (help.inherits === null ? '查规范' : help.inherits ? '是' : '否') +
              '。这不是保证的当前值，浏览器默认样式与其他规则会改变结果。',
          ),
        );
        if (row.context.length)
          body.append(
            element(
              'p',
              'trace-condition',
              '条件 / 来源：' +
                row.context.join(' → ') +
                '。条件未满足、其他声明胜出或布局不适用时，本声明未必生效。',
            ),
          );
        const link = element('a', '', '属性规范 ↗');
        link.href =
          MDN +
          'Web/CSS/Reference/Properties/' +
          (row.property.startsWith('--') ? '--*' : row.property);
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        body.append(link);
      } else if (row.kind === 'html') {
        body.append(
          element('p', '', row.meaning),
          element('p', '', '页面目标：' + row.selector),
        );
        for (const attr of row.attrs)
          body.append(
            element(
              'p',
              '',
              attr.name +
                '="' +
                (attr.value.length > 240
                  ? attr.value.slice(0, 240) + '…（完整值见源码）'
                  : attr.value) +
                '" → ' +
                attr.meaning,
            ),
          );
        if (!row.attrs.length)
          body.append(
            element('p', '', '这个元素没有显式属性。默认显示取决于浏览器和CSS。'),
          );
      } else body.append(element('p', 'js-line-help', row.meaning));
      const actions = element('div', 'trace-actions');
      const jump = element('button', 'subtle-button', '定位到源码');
      jump.onclick = () => jumpToCode(row);
      actions.append(jump);
      if (row.kind !== 'js' && row.inspectable !== false) {
        const inspect = element('button', 'subtle-button', '高亮目标并测量');
        inspect.dataset.traceSelector = row.selector;
        if (row.property) inspect.dataset.traceProperty = row.property;
        inspect.onclick = () => requestTrace(row);
        actions.append(inspect);
      }
      body.append(actions);
      card.append(body);
    });
    list.append(card);
  }
  $('traceMore').hidden = pageRows.length >= rows.length;
  for (const button of document.querySelectorAll('[data-trace-language]'))
    button.setAttribute(
      'aria-pressed',
      String(button.dataset.traceLanguage === traceLanguage),
    );
  const baseline = $('baselineInfo');
  baseline.textContent = demo.clean
    ? '本例只使用浏览器默认样式与编辑区代码，没有工作台公共示例装饰。'
    : '本例额外使用工作台的 lab-base 公共层（下方可查看完整源码）。它提供白底、文字、表单等基础装饰；普通未分层作者声明通常高于这个普通公共层。';
  $('baselineCode').textContent = demo.clean
    ? '本例未注入公共示例样式。'
    : '@layer lab-base {\n' + LEGACY_BASE + '\n' + LESSON_BASE + '\n}';
  const variables = `\n:root {\n  --lab-gap: ${state.gap}px;\n  --lab-radius: ${state.radius}px;\n  --lab-font: ${state.font}px;\n  --lab-accent: ${state.accent};\n}`;
  $('baseStyles').textContent =
    (demo.clean
      ? '/* 本例未注入公共示例装饰。以下变量仅供使用它们的声明读取。 */'
      : $('baselineCode').textContent) + variables;
}
function initTeachingUI() {
  document.querySelectorAll('[data-trace-language]').forEach((button) => {
    button.onclick = () => {
      traceLanguage = button.dataset.traceLanguage;
      tracePage = 0;
      renderCodeMap(current());
    };
  });
  $('traceSearch').oninput = (event) => {
    traceQuery = event.target.value.trim();
    tracePage = 0;
    renderCodeMap(current());
  };
  $('traceMore').onclick = () => {
    tracePage++;
    renderCodeMap(current());
  };
  window.addEventListener('message', receiveTraceMessage);
}
