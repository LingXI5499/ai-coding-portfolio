/* 原生学习工作台：课程、编辑、运行、持久化与自测。 */
'use strict';
const CATEGORIES = {
  html: 'HTML 基础',
  css: 'CSS 样式',
  js: 'JavaScript',
  layout: '网页布局',
  project: '综合实战',
};
const SYMBOLS = { html: '⌗', css: '✳', js: '⚡', layout: '▤', project: '◈' };
const $ = (id) => document.getElementById(id);
const demos = organizeLessons([
  ...FOUNDATION_LESSONS,
  ...LESSONS,
  ...MANUAL_LESSONS,
  ...LEGACY_DEMOS,
]);
const validIds = new Set(demos.map((demo) => demo.id));
let storageAvailable = true;
const storage = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      storageAvailable = false;
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      storageAvailable = false;
      updateStorageNotice();
      return false;
    }
  },
};
function storedSet(key) {
  const value = storage.get(key, []);
  return new Set(Array.isArray(value) ? value.filter((id) => validIds.has(id)) : []);
}
const drafts = new Map();
const storedDrafts = storage.get('flab-drafts-v2', {});
if (storedDrafts && typeof storedDrafts === 'object') {
  for (const [id, code] of Object.entries(storedDrafts)) {
    if (
      validIds.has(id) &&
      code &&
      ['html', 'css', 'js'].every((key) => typeof code[key] === 'string')
    )
      drafts.set(id, code);
  }
}
const state = {
  category: 'all',
  query: '',
  level: 'all',
  module: 'all',
  unfinished: false,
  selected: null,
  tab: 'html',
  device: 'pc',
  wrap: false,
  gap: 16,
  radius: 12,
  font: 15,
  accent: '#2563eb',
  saved: storedSet('flab-saved'),
  done: storedSet('flab-done'),
  drafts,
};
let saveTimer;
let runToken = '';
let logs = [];
const current = () => demos.find((demo) => demo.id === state.selected) || demos[0];
const original = (demo) => ({ html: demo.html, css: demo.css, js: demo.js });
const edited = (demo) => state.drafts.get(demo.id) || original(demo);
const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char],
  );
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function updateStorageNotice() {
  $('storageNotice').textContent = storageAvailable
    ? '进度与草稿自动保存在此浏览器'
    : '存储不可用；本次代码仍可运行与导出';
}
function flushDrafts() {
  clearTimeout(saveTimer);
  const success = storage.set('flab-drafts-v2', Object.fromEntries(state.drafts));
  $('draftStatus').textContent = success
    ? state.drafts.has(state.selected)
      ? '草稿已保存到浏览器'
      : '原始示例'
    : '草稿仅在本次会话保留';
}
function persistEdit() {
  if (!state.selected) return;
  const demo = current();
  const code = { ...edited(demo), [state.tab]: $('codeEditor').value };
  if (['html', 'css', 'js'].every((key) => code[key] === demo[key]))
    state.drafts.delete(demo.id);
  else state.drafts.set(demo.id, code);
  $('draftStatus').textContent = state.drafts.has(demo.id) ? '草稿保存中…' : '原始示例';
  clearTimeout(saveTimer);
  saveTimer = setTimeout(flushDrafts, 450);
}
function filtered() {
  const query = state.query.toLowerCase();
  return demos.filter((demo) => {
    const category =
      state.category === 'all' ||
      (state.category === 'saved'
        ? state.saved.has(demo.id)
        : demo.cat === state.category);
    return (
      category &&
      (state.level === 'all' || demo.level === state.level) &&
      (state.module === 'all' || demo.module === state.module) &&
      (!state.unfinished || !state.done.has(demo.id)) &&
      [
        demo.title,
        demo.subtitle,
        demo.what,
        demo.module,
        CATEGORIES[demo.cat],
        ...demo.tags,
        demo.html,
        demo.css,
        demo.js,
      ]
        .join(' ')
        .toLowerCase()
        .includes(query)
    );
  });
}
function renderList() {
  const list = filtered();
  const container = $('demoList');
  container.replaceChildren();
  if (!list.length) {
    const empty = element(
      'div',
      'empty-list',
      '没有匹配课程。换一个关键词，或清除筛选。',
    );
    const reset = element('button', 'subtle-button', '清除筛选');
    reset.onclick = clearFilters;
    empty.append(reset);
    container.append(empty);
  }
  let lastGroup;
  for (const demo of list) {
    const group = CATEGORIES[demo.cat] + ' / ' + demo.module;
    if (lastGroup !== group) {
      container.append(element('div', 'demo-group-label', group));
      lastGroup = group;
    }
    const button = element(
      'button',
      'demo-item' + (demo.id === state.selected ? ' current' : ''),
    );
    button.dataset.lesson = demo.id;
    if (demo.id === state.selected) button.setAttribute('aria-current', 'page');
    button.append(
      element('span', 'item-symbol', SYMBOLS[demo.cat]),
      element('span', 'item-text', demo.title),
      element(
        'span',
        'done-mark',
        state.done.has(demo.id) ? '✓' : state.saved.has(demo.id) ? '★' : '',
      ),
    );
    button.onclick = () => {
      switchDemo(demo.id);
      closeSidebar();
    };
    container.append(button);
  }
  $('visibleCount').textContent = list.length + ' 条';
  $('allCount').textContent = demos.length;
  for (const category of Object.keys(CATEGORIES))
    $(category + 'Count').textContent = demos.filter(
      (demo) => demo.cat === category,
    ).length;
  $('savedCount').textContent = state.saved.size;
  $('countLabel').textContent = demos.length + ' 个实验';
  $('progressText').textContent = state.done.size + ' / ' + demos.length;
  $('courseProgress').value = (state.done.size / demos.length) * 100;
  document.querySelectorAll('[data-category]').forEach((button) => {
    const active = button.dataset.category === state.category;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  const index = list.findIndex((demo) => demo.id === state.selected);
  $('previousBtn').disabled = index <= 0;
  $('nextBtn').disabled = index < 0 || index >= list.length - 1;
}
function clearFilters() {
  Object.assign(state, {
    category: 'all',
    level: 'all',
    module: 'all',
    query: '',
    unfinished: false,
  });
  $('search').value = '';
  $('levelFilter').value = 'all';
  $('moduleFilter').value = 'all';
  $('unfinishedOnly').checked = false;
  renderList();
}
function textChildren(id, values, tag, className) {
  $(id).replaceChildren(...values.map((value) => element(tag, className, value)));
}
function updateLessonState() {
  $('doneCheckbox').checked = state.done.has(state.selected);
  const saved = state.saved.has(state.selected);
  $('saveButton').setAttribute('aria-pressed', String(saved));
  $('saveButton').replaceChildren(
    document.createTextNode(saved ? '★ ' : '☆ '),
    element('span', '', saved ? '已收藏' : '收藏'),
  );
}
function switchDemo(id, options = {}) {
  if (!validIds.has(id)) return;
  if (state.selected) {
    persistEdit();
    flushDrafts();
  }
  state.selected = id;
  const demo = current();
  $('breadcrumb').textContent = CATEGORIES[demo.cat] + ' / ' + demo.module;
  $('eyebrow').textContent =
    demo.cat.toUpperCase() +
    ' STUDIO · ' +
    String(demos.indexOf(demo) + 1).padStart(2, '0');
  for (const [node, value] of [
    ['demoTitle', demo.title],
    ['demoSubtitle', demo.subtitle],
    ['whatTitle', demo.title],
    ['whatText', demo.what],
    ['challengeText', demo.challenge],
    ['practicePrompt', demo.challenge],
    ['pathText', demo.id],
  ])
    $(node).textContent = value;
  $('practiceHint').textContent =
    demo.observe[0] || '找到对应代码，每次只改变一处，运行后比较。';
  $('practiceHelp').open = false;
  $('previewHint').textContent = demo.js
    ? '在预览中操作，再观察页面与控制台反馈。'
    : '切换设备或修改代码，观察真实布局。';
  textChildren('tagList', demo.tags, 'span', 'pill');
  textChildren('useCases', demo.uses, 'span', 'case-pill');
  textChildren('observeList', demo.observe, 'li');
  $('lessonMeta').replaceChildren(
    element('span', 'level-pill', demo.level),
    element('span', '', '约 ' + demo.minutes + ' 分钟'),
    element('span', '', demo.module),
  );
  $('sourceLink').href = demo.doc;
  $('runoobLink').href = RUNOOB[demo.cat];
  updateLessonState();
  renderTeaching(demo);
  renderLessonStart(demo);
  renderLessonProvenance(demo);
  showEditor();
  renderList();
  renderPreview();
  storage.set('flab-last', id);
  if (!options.fromHash) {
    try {
      history.replaceState(null, '', '#lesson=' + encodeURIComponent(id));
    } catch {
      /* 本地文件仍可学习。 */
    }
  }
}
function quizFor(demo) {
  if (demo.quiz) return demo.quiz;
  const correct = demo.observe[0] || demo.what;
  const wrong =
    demo.cat === 'html'
      ? 'HTML 必须借助框架才能表达结构。'
      : demo.cat === 'css' || demo.cat === 'layout'
        ? '所有设备都应强制使用相同固定宽度。'
        : '改变界面只能重新加载整个页面。';
  return [
    '关于“' + demo.title + '”，哪一项正确？',
    [wrong, correct, '预览只是图片，无法操作。'],
    1,
    correct,
  ];
}
function renderTeaching(demo) {
  const article = $('lessonExplanation');
  article.replaceChildren();
  renderPedagogy(demo, article);
  const intro = element('div', 'concept-card');
  intro.append(element('h3', '', '核心知识'), element('p', '', demo.what));
  article.append(intro);
  const steps = element('div', 'walkthrough');
  demo.observe.forEach((text, index) => {
    const step = element('div', 'walkthrough-step');
    step.append(
      element('span', '', String(index + 1).padStart(2, '0')),
      element('p', '', text),
    );
    steps.append(step);
  });
  article.append(steps);
  if (demo.pitfalls?.length) {
    const pitfalls = element('div', 'pitfall-card');
    pitfalls.append(element('h3', '', '容易踩的坑'));
    demo.pitfalls.forEach((text) => pitfalls.append(element('p', '', text)));
    article.append(pitfalls);
  }
  const [question, answers] = quizFor(demo);
  const fieldset = $('quizOptions');
  fieldset.replaceChildren(element('legend', '', '理解自测 · ' + question));
  answers.forEach((answer, index) => {
    const label = element('label', 'quiz-option');
    const input = element('input');
    input.type = 'radio';
    input.name = 'answer';
    input.value = index;
    input.required = true;
    label.append(input, element('span', '', answer));
    fieldset.append(label);
  });
  $('quizFeedback').textContent = '';
}

// 源码先转义，再进行词法片段着色；高亮层不会改变实际代码。
function highlight(code, language) {
  const pattern =
    language === 'html'
      ? /<!--[\s\S]*?-->|<\/?[\w:-]+|\b[\w:-]+(?==)|"[^"]*"|'[^']*'|\/>|>/g
      : language === 'css'
        ? /\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|#[\da-f]{3,8}\b|\b[\w-]+(?=\s*:)|\b\d+(?:\.\d+)?(?:px|rem|em|ms|s|%|vh|vw)?\b/g
        : /\/\*[\s\S]*?\*\/|\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b(?:const|let|var|function|return|if|else|for|of|in|while|new|class|extends|async|await|try|catch|finally|throw|switch|case|break|import|export|default|true|false|null|undefined)\b|\b\d+(?:\.\d+)?\b/g;
  let cursor = 0;
  let html = '';
  for (const match of code.matchAll(pattern)) {
    html += escapeHtml(code.slice(cursor, match.index));
    const token = match[0];
    const type = /^(\/\/|\/\*|<!--)/.test(token)
      ? 'comment'
      : /^["'`]/.test(token)
        ? 'string'
        : /^\d|^#[\da-f]/i.test(token)
          ? 'number'
          : 'keyword';
    html += '<span class="syntax-' + type + '">' + escapeHtml(token) + '</span>';
    cursor = match.index + token.length;
  }
  return html + escapeHtml(code.slice(cursor)) + '\n';
}
function showEditor() {
  $('codeEditor').value = edited(current())[state.tab];
  document.querySelectorAll('.code-tab').forEach((button) => {
    const selected = button.dataset.code === state.tab;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  $('editorPanel').setAttribute('aria-labelledby', state.tab + 'Tab');
  $('codeEditor').setAttribute('aria-label', state.tab.toUpperCase() + ' 可编辑源码');
  $('codeEditor').scrollTop = 0;
  $('codeEditor').scrollLeft = 0;
  $('draftStatus').textContent = state.drafts.has(state.selected)
    ? '已恢复代码草稿'
    : '原始示例';
  updateEditorInfo();
}
function updateEditorInfo() {
  const box = $('codeEditor');
  const lines = box.value.split('\n').length;
  $('editorInfo').textContent =
    { html: 'HTML', css: 'CSS', js: 'JavaScript' }[state.tab] + ' · ' + lines + ' 行';
  $('lineNumbers').textContent = Array.from(
    { length: lines },
    (_, index) => index + 1,
  ).join('\n');
  $('codeHighlight').innerHTML = highlight(box.value, state.tab);
  syncEditorScroll();
}
function syncEditorScroll() {
  const box = $('codeEditor');
  $('codeHighlight').scrollTop = box.scrollTop;
  $('codeHighlight').scrollLeft = box.scrollLeft;
  $('lineNumbers').scrollTop = box.scrollTop;
}
function selectTab(tab, focus = false) {
  persistEdit();
  state.tab = tab;
  showEditor();
  if (focus) $(tab + 'Tab').focus();
}
function editKey(event) {
  const box = event.target;
  if (event.key === 'Escape') {
    event.preventDefault();
    $('runBtn').focus();
    return;
  }
  if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
    event.preventDefault();
    runCode();
    return;
  }
  if (!['Tab', 'Enter'].includes(event.key)) return;
  event.preventDefault();
  const start = box.selectionStart;
  const end = box.selectionEnd;
  if (event.key === 'Enter') {
    const lineStart = box.value.lastIndexOf('\n', start - 1) + 1;
    const previous = box.value.slice(lineStart, start);
    const indent = previous.match(/^\s*/)[0];
    const addition = /[{[(]\s*$/.test(previous) ? '  ' : '';
    box.setRangeText('\n' + indent + addition, start, end, 'end');
  } else if (start === end && !event.shiftKey)
    box.setRangeText('  ', start, end, 'end');
  else {
    const first = box.value.lastIndexOf('\n', start - 1) + 1;
    const endLine = box.value.indexOf('\n', end);
    const last = endLine === -1 ? box.value.length : endLine;
    const changed = box.value
      .slice(first, last)
      .split('\n')
      .map((line) => (event.shiftKey ? line.replace(/^ {1,2}|^\t/, '') : '  ' + line))
      .join('\n');
    box.setRangeText(changed, first, last, 'select');
  }
  updateEditorInfo();
  persistEdit();
}

function bridgeScript(token) {
  return `(() => {
    const token = ${JSON.stringify(token)};
    const serialize = value => {
      if (value instanceof Error) return value.name + ': ' + value.message;
      if (typeof value === 'string') return value;
      try { return JSON.stringify(value, (_, item) => typeof item === 'bigint' ? String(item) + 'n' : item, 2) ?? String(value); }
      catch { return String(value); }
    };
    const send = (level, values) => parent.postMessage({ type: 'flab-console', token, level, text: values.map(serialize).join(' ') }, '*');
    for (const level of ['log', 'info', 'warn', 'error']) {
      const original = console[level].bind(console);
      console[level] = (...values) => { original(...values); send(level, values); };
    }
    window.addEventListener('error', event => send('error', [event.message + (event.lineno ? '（预览文档第 ' + event.lineno + ' 行）' : '')]));
    window.addEventListener('unhandledrejection', event => send('error', ['未处理的 Promise：', event.reason]));
    document.addEventListener('click', event => { if (event.target.closest('a[href="#"]')) event.preventDefault(); });
    let marks = [];
    window.addEventListener('message', event => {
      const data = event.data;
      if (event.source !== parent || !data || data.type !== 'flab-inspect-request' || data.token !== token || typeof data.selector !== 'string' || typeof data.property !== 'string' || data.selector.length > 2000) return;
      marks.forEach(node => node.remove()); marks = [];
      let text = '';
      try {
        const pseudoMatch = data.selector.match(/::(before|after|first-letter|first-line)$/);
        const pseudo = pseudoMatch ? pseudoMatch[0] : null;
        const selector = pseudo ? data.selector.slice(0, -pseudo.length) : data.selector;
        const nodes = [...document.querySelectorAll(selector)];
        text = '选择器：' + data.selector + '\\n匹配元素：' + nodes.length + ' 个';
        if (!nodes.length) text += '\\n没有当前匹配：检查HTML、状态伪类，或JS是否已改变结构。';
        for (const [index, node] of nodes.slice(0, 8).entries()) {
          const style = getComputedStyle(node, pseudo);
          const rect = node.getBoundingClientRect();
          text += '\\n\\n' + (index+1) + '. <' + node.localName + '>' + (node.id ? '#' + node.id : '') +
            '\\n' + data.property + ' 当前计算值 = ' + style.getPropertyValue(data.property) +
            '\\n边框矩形 ' + Math.round(rect.width*100)/100 + ' × ' + Math.round(rect.height*100)/100 + 'px；左/顶 ' + Math.round(rect.left) + '/' + Math.round(rect.top) + 'px' +
            '\\ndisplay=' + style.display + '；position=' + style.position + '；float=' + style.cssFloat +
            '\\nbox-sizing=' + style.boxSizing + '；padding=' + style.padding + '；margin=' + style.margin;
          if (pseudo) text += '\\n伪元素值单独读取；高亮和矩形属于宿主元素，不是伪元素的独立测量。';
          if (style.position === 'absolute' || style.position === 'fixed') text += '\\n定位：不保留普通流占位。';
          else if (style.cssFloat !== 'none') text += '\\n浮动：脱离普通流，但仍影响文字环绕。';
          else text += '\\n未因absolute/fixed/float脱离流；具体位置还取决于父级布局。';
          if (rect.width && rect.height) {
            const mark = document.createElement('div');
            mark.setAttribute('aria-hidden', 'true');
            mark.style.cssText = 'all:initial;position:fixed;pointer-events:none;z-index:2147483647;border:2px solid #ef4444;box-sizing:border-box;background:rgba(239,68,68,.07);left:' + rect.left + 'px;top:' + rect.top + 'px;width:' + rect.width + 'px;height:' + rect.height + 'px;';
            document.body.append(mark); marks.push(mark);
          }
        }
        if (nodes.length > 8) text += '\\n仅展示前8个测量结果，匹配总数已完整统计。';
        text += '\\n\\n矩形反映画面与变换，不能单靠坐标证明原占位。计算值可能来自其他获胜声明；本面板不是完整的级联调试器。';
      } catch (error) { text = '不能测量该选择器：' + error.message + '。关键帧位置或特殊伪元素不一定能通过querySelector测量。'; }
      parent.postMessage({type:'flab-inspect-result', token, request:data.request, text}, '*');
      setTimeout(() => { marks.forEach(node => node.remove()); marks = []; }, 5000);
    });
    window.addEventListener('load', () => send('ready', ['预览已加载']));
  })();`;
}
function buildHtml(demo, exporting = false) {
  const code = edited(demo);
  const doc = new DOMParser().parseFromString(code.html, 'text/html');
  doc.documentElement.lang ||= 'zh-CN';
  doc
    .querySelectorAll('meta[http-equiv="Content-Security-Policy"], base')
    .forEach((node) => node.remove());
  const charset = doc.createElement('meta');
  charset.setAttribute('charset', 'utf-8');
  const viewport = doc.createElement('meta');
  viewport.name = 'viewport';
  viewport.content = 'width=device-width, initial-scale=1';
  doc
    .querySelectorAll('meta[charset], meta[name=viewport]')
    .forEach((node) => node.remove());
  if (!doc.title) doc.title = demo.title + ' · 界面实验室';
  if (!exporting) {
    const csp = doc.createElement('meta');
    csp.httpEquiv = 'Content-Security-Policy';
    csp.content =
      "default-src 'none'; img-src data: blob:; media-src data: blob:; style-src 'unsafe-inline'; script-src 'unsafe-inline' blob:; connect-src blob:; font-src data:; frame-src 'self' about:; form-action 'none'; base-uri 'none'";
    doc.head.prepend(csp);
    const bridge = doc.createElement('script');
    bridge.textContent = bridgeScript(runToken);
    doc.head.append(bridge);
  }
  doc.head.prepend(charset, viewport);
  const style = doc.createElement('style');
  style.textContent =
    '@layer lab-base {\n' +
    (demo.clean ? '' : LEGACY_BASE) +
    '\n' +
    (demo.clean ? '' : LESSON_BASE) +
    '\n}\n' +
    `:root { --lab-gap: ${state.gap}px; --lab-radius: ${state.radius}px; --lab-font: ${state.font}px; --lab-accent: ${state.accent}; }\n` +
    code.css;
  doc.head.append(style);
  const script = doc.createElement('script');
  script.textContent = code.js;
  doc.body.append(script);
  // 使用占位符防止脚本内容中的结束标签提前终止元素。
  const scripts = [];
  doc.querySelectorAll('script').forEach((node) => {
    scripts.push(node.textContent.replace(/<\/script/gi, '<\\/script'));
    node.textContent = '__FLAB_SCRIPT_' + (scripts.length - 1) + '__';
  });
  const attributes = Array.from(doc.documentElement.attributes)
    .map((attribute) => ' ' + attribute.name + '="' + escapeHtml(attribute.value) + '"')
    .join('');
  let serialized =
    '<html' +
    attributes +
    '>\n  <head>\n' +
    doc.head.innerHTML +
    '\n  </head>\n  <body>\n' +
    doc.body.innerHTML +
    '\n  </body>\n</html>';
  serialized = serialized.replace(
    /__FLAB_SCRIPT_(\d+)__/g,
    (_, index) => scripts[Number(index)],
  );
  return '<!doctype html>\n' + serialized;
}
function clearConsole() {
  logs = [];
  $('consoleOutput').textContent = '这里会显示 console.log 和 JavaScript 错误。';
  $('consoleOutput').classList.remove('has-error');
}
function renderPreview() {
  clearConsole();
  tracePage = 0;
  traceQuery = '';
  $('traceSearch').value = '';
  $('traceResult').textContent =
    '打开说明并测量，查看匹配数量、计算值、宽高和占位提示。';
  renderCodeMap(current());
  runToken = String(Date.now()) + '-' + Math.random().toString(36).slice(2);
  $('runStatus').textContent = '正在载入预览…';
  $('preview').srcdoc = buildHtml(current());
}
function receiveMessage(event) {
  const data = event.data;
  if (
    event.source !== $('preview').contentWindow ||
    !data ||
    data.type !== 'flab-console' ||
    data.token !== runToken ||
    typeof data.text !== 'string' ||
    !['ready', 'log', 'info', 'warn', 'error'].includes(data.level)
  )
    return;
  if (data.level === 'ready') {
    if (!logs.some((log) => log.level === 'error'))
      $('runStatus').textContent = '预览已加载';
    return;
  }
  logs.push({ level: data.level, text: data.text.slice(0, 6000) });
  if (logs.length > 100) logs.shift();
  $('consoleOutput').textContent = logs
    .map((log) => '[' + log.level + '] ' + log.text)
    .join('\n');
  if (data.level === 'error') {
    $('runStatus').textContent = 'JavaScript 出现错误，请查看控制台';
    $('consoleOutput').classList.add('has-error');
  }
}
function runCode() {
  persistEdit();
  flushDrafts();
  renderPreview();
  toast('已运行代码');
}
function showDevice(device) {
  state.device = device;
  $('browserShell').classList.remove('tablet', 'phone');
  if (device !== 'pc') $('browserShell').classList.add(device);
  document.querySelectorAll('.device').forEach((button) => {
    const selected = button.dataset.device === device;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  $('viewportInfo').textContent = {
    pc: '电脑：弹性宽度',
    tablet: '平板：最多 768px',
    phone: '手机：最多 390px',
  }[device];
}
function updateControls() {
  persistEdit();
  for (const [key, input, output] of [
    ['gap', 'gapControl', 'gapValue'],
    ['radius', 'roundControl', 'roundValue'],
    ['font', 'fontControl', 'fontValue'],
  ]) {
    state[key] = Number($(input).value);
    $(output).textContent = state[key] + 'px';
  }
  renderPreview();
}
function resetDemo() {
  clearTimeout(saveTimer);
  state.drafts.delete(state.selected);
  Object.assign(state, { gap: 16, radius: 12, font: 15, accent: '#2563eb' });
  $('gapControl').value = 16;
  $('roundControl').value = 12;
  $('fontControl').value = 15;
  for (const [output, value] of [
    ['gapValue', '16px'],
    ['roundValue', '12px'],
    ['fontValue', '15px'],
  ])
    $(output).textContent = value;
  document
    .querySelectorAll('.color-button')
    .forEach((button) =>
      button.classList.toggle('selected', button.dataset.color === state.accent),
    );
  flushDrafts();
  showEditor();
  renderPreview();
  toast('已恢复当前实验原始代码');
}
function toggleSaved() {
  if (state.saved.has(state.selected)) state.saved.delete(state.selected);
  else state.saved.add(state.selected);
  storage.set('flab-saved', [...state.saved]);
  updateLessonState();
  renderList();
  toast(state.saved.has(state.selected) ? '已加入收藏' : '已取消收藏');
}
function setDone(done) {
  if (done) state.done.add(state.selected);
  else state.done.delete(state.selected);
  storage.set('flab-done', [...state.done]);
  updateLessonState();
  renderList();
}
function shiftDemo(delta) {
  const list = filtered();
  const index = list.findIndex((demo) => demo.id === state.selected);
  if (index >= 0 && list[index + delta]) switchDemo(list[index + delta].id);
}
function toast(message) {
  $('toast').textContent = message;
  $('toast').classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => $('toast').classList.remove('show'), 2500);
}
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const helper = element('textarea');
    helper.value = text;
    helper.style.cssText = 'position:fixed;left:-9999px';
    document.body.append(helper);
    helper.select();
    let copied = false;
    try {
      copied = document.execCommand('copy');
    } catch {
      /* 返回失败状态。 */
    }
    helper.remove();
    return copied;
  }
}
function download() {
  persistEdit();
  flushDrafts();
  const url = URL.createObjectURL(
    new Blob([buildHtml(current(), true)], { type: 'text/html;charset=utf-8' }),
  );
  const link = element('a');
  link.href = url;
  link.download = 'experiment-' + current().id + '.html';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast('已导出可独立打开的完整 HTML');
}
function closeSidebar() {
  $('sidebar').classList.remove('open');
  $('sidebarBackdrop').hidden = true;
  $('sidebarToggle').setAttribute('aria-expanded', 'false');
}
function openDialog(title) {
  $('learningDialog').classList.remove('manual-open');
  $('dialogTitle').textContent = title;
  $('dialogContent').replaceChildren();
  if (!$('learningDialog').open) $('learningDialog').showModal();
}
function openRoadmap() {
  openDialog('从零开始，到一件完整作品');
  $('dialogContent').append(
    element(
      'p',
      'dialog-intro',
      '按顺序学习核心课程，也可以随时探索其他实验。进度和草稿保存在浏览器里。',
    ),
  );
  const grid = element('div', 'path-grid');
  for (const path of BEGINNER_PATHS) {
    const card = element('section', 'path-card');
    const done = path.ids.filter((id) => state.done.has(id)).length;
    card.append(
      element('h3', '', path.title),
      element('p', '', path.description),
      element('small', '', done + ' / ' + path.ids.length + ' 已完成'),
    );
    for (const id of path.ids) {
      const demo = demos.find((item) => item.id === id);
      if (!demo) continue;
      const button = element(
        'button',
        'path-lesson',
        (state.done.has(id) ? '✓ ' : '○ ') + demo.title,
      );
      button.onclick = () => {
        clearFilters();
        switchDemo(id);
        $('learningDialog').close();
      };
      card.append(button);
    }
    grid.append(card);
  }
  $('dialogContent').append(grid);
  const chapters = element('section', 'chapter-roadmap');
  chapters.append(
    element('h3', '', '完整主线 · 24 章（含全部实验）'),
    element(
      'p',
      '',
      'HTML按上传文档的基础顺序展开；先结构、再样式、再布局、再交互。章节前置知识可在每个实验中补课。',
    ),
  );
  for (const section of LEARNING_CHAPTERS) {
    const details = element('details');
    details.append(
      element('summary', '', section.title + ' · ' + section.ids.length + ' 个实验'),
      element('p', '', section.intro),
    );
    for (const id of section.ids) details.append(lessonButton(id));
    chapters.append(details);
  }
  $('dialogContent').append(chapters);
  const guide = element(
    'button',
    'subtle-button',
    '上传教程的顺序、实验对应与现代纠错',
  );
  guide.onclick = openUploadedGuide;
  $('dialogContent').append(guide);
}
function openReference() {
  openDialog('技术速查 · ' + REFERENCES.length + ' 个知识条目');
  const intro = element(
    'p',
    'dialog-intro',
    '常用 HTML 元素、CSS 属性与 JavaScript / Web API 的快速索引。细节与兼容性请继续查看 MDN。',
  );
  const tools = element('div', 'reference-tools');
  const input = element('input');
  input.type = 'search';
  input.placeholder = '搜索标签、属性、方法或用途…';
  input.setAttribute('aria-label', '搜索技术速查');
  const select = element('select');
  select.setAttribute('aria-label', '技术类型');
  for (const [value, label] of [
    ['all', '全部技术'],
    ['html', 'HTML'],
    ['css', 'CSS'],
    ['js', 'JavaScript'],
  ]) {
    const option = element('option', '', label);
    option.value = value;
    select.append(option);
  }
  tools.append(input, select);
  const count = element('p', 'reference-count');
  count.setAttribute('role', 'status');
  const cards = element('div', 'reference-grid');
  const render = () => {
    const query = input.value.trim().toLowerCase();
    const items = REFERENCES.filter(
      (item) =>
        (select.value === 'all' || item.cat === select.value) &&
        [item.name, item.description, item.group]
          .join(' ')
          .toLowerCase()
          .includes(query),
    );
    count.textContent = items.length + ' 个匹配条目';
    cards.replaceChildren();
    for (const item of items) {
      const card = element('article', 'reference-card');
      card.append(
        element('small', '', item.cat.toUpperCase() + ' / ' + item.group),
        element('h3', '', item.name),
        element('p', '', item.description),
        element('pre', '', item.example),
      );
      if (item.cat === 'css' && CSS_HELP[item.name]) {
        const help = CSS_HELP[item.name];
        const detail = element('details', 'reference-property-detail');
        detail.append(
          element('summary', '', '取值、适用条件与初始值'),
          element('p', '', help.meaning),
          element('p', '', help.values),
          element(
            'small',
            '',
            '规范初始值：' +
              help.initial +
              '；通常继承：' +
              (help.inherits ? '是' : '否'),
          ),
        );
        card.append(detail);
      }
      const link = element('a', '', 'MDN 说明 ↗');
      link.href = item.doc;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      card.append(link);
      const associated = demos.find(
        (demo) =>
          demo.cat === item.cat &&
          [demo.title, ...demo.tags, demo.html, demo.css, demo.js]
            .join(' ')
            .toLowerCase()
            .includes(item.name.toLowerCase()),
      );
      if (associated) {
        const button = element('button', 'reference-try', '打开相关实验 →');
        button.onclick = () => {
          clearFilters();
          switchDemo(associated.id);
          $('learningDialog').close();
        };
        card.append(button);
      }
      cards.append(card);
    }
    if (!items.length) cards.append(element('p', '', '没有匹配项，请换一个关键词。'));
  };
  input.oninput = render;
  select.onchange = render;
  $('dialogContent').append(intro, tools, count, cards);
  render();
  input.focus();
}
function hashLesson() {
  try {
    return new URLSearchParams(location.hash.slice(1)).get('lesson');
  } catch {
    return null;
  }
}
function init() {
  initTeachingUI();
  $('baseStyles').textContent =
    '@layer lab-base {\n' + LEGACY_BASE + '\n' + LESSON_BASE + '\n}';
  $('copyBase').onclick = async () =>
    toast(
      (await copyText($('baseStyles').textContent))
        ? '公共样式已复制'
        : '复制失败，可直接选中公共样式',
    );
  for (const module of new Set(demos.map((demo) => demo.module))) {
    const option = element('option', '', module);
    option.value = module;
    $('moduleFilter').append(option);
  }
  document.querySelectorAll('[data-category]').forEach(
    (button) =>
      (button.onclick = () => {
        state.category = button.dataset.category;
        state.module = 'all';
        $('moduleFilter').value = 'all';
        renderList();
      }),
  );
  $('search').oninput = (event) => {
    state.query = event.target.value.trim();
    renderList();
  };
  for (const [id, property] of [
    ['levelFilter', 'level'],
    ['moduleFilter', 'module'],
  ])
    $(id).onchange = (event) => {
      state[property] = event.target.value;
      renderList();
    };
  $('unfinishedOnly').onchange = (event) => {
    state.unfinished = event.target.checked;
    renderList();
  };
  $('saveButton').onclick = toggleSaved;
  $('doneCheckbox').onchange = (event) => setDone(event.target.checked);
  $('completeNext').onclick = () => {
    const list = filtered();
    const index = list.findIndex((demo) => demo.id === state.selected);
    setDone(true);
    if (index >= 0 && list[index + 1]) {
      switchDemo(list[index + 1].id);
      $('demoTitle').scrollIntoView({ block: 'start' });
    } else toast('当前课程已完成，继续探索其他实验吧。');
  };
  document
    .querySelectorAll('.device')
    .forEach((button) => (button.onclick = () => showDevice(button.dataset.device)));
  document.querySelectorAll('.code-tab').forEach((button) => {
    button.onclick = () => selectTab(button.dataset.code);
    button.onkeydown = (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const tabs = ['html', 'css', 'js'];
      const index = tabs.indexOf(state.tab);
      const next =
        event.key === 'Home'
          ? 0
          : event.key === 'End'
            ? 2
            : (index + (event.key === 'ArrowRight' ? 1 : -1) + 3) % 3;
      selectTab(tabs[next], true);
    };
  });
  $('codeEditor').oninput = () => {
    updateEditorInfo();
    persistEdit();
  };
  $('codeEditor').onkeydown = editKey;
  $('codeEditor').onscroll = syncEditorScroll;
  $('runBtn').onclick = runCode;
  $('refreshBtn').onclick = runCode;
  $('resetBtn').onclick = resetDemo;
  $('copyBtn').onclick = async () => {
    const copied = await copyText($('codeEditor').value);
    if (!copied) {
      $('codeEditor').focus();
      $('codeEditor').select();
    }
    toast(copied ? '当前代码已复制' : '代码已选中，可按 Ctrl/Cmd+C');
  };
  $('shareLesson').onclick = async () =>
    toast(
      (await copyText(location.href)) ? '课程链接已复制' : '复制失败，可复制地址栏链接',
    );
  $('downloadBtn').onclick = download;
  $('wrapBtn').onclick = () => {
    state.wrap = !state.wrap;
    $('editorShell').classList.toggle('wrapped', state.wrap);
    $('codeEditor').wrap = state.wrap ? 'soft' : 'off';
    $('wrapBtn').setAttribute('aria-pressed', String(state.wrap));
    $('wrapBtn').textContent = state.wrap ? '关闭换行' : '自动换行';
    syncEditorScroll();
  };
  $('previousBtn').onclick = () => shiftDemo(-1);
  $('nextBtn').onclick = () => shiftDemo(1);
  for (const id of ['gapControl', 'roundControl', 'fontControl'])
    $(id).oninput = updateControls;
  document.querySelectorAll('.color-button').forEach(
    (button) =>
      (button.onclick = () => {
        persistEdit();
        state.accent = button.dataset.color;
        document
          .querySelectorAll('.color-button')
          .forEach((item) => item.classList.toggle('selected', item === button));
        renderPreview();
      }),
  );
  $('clearConsole').onclick = clearConsole;
  $('quizForm').onsubmit = (event) => {
    event.preventDefault();
    const [, , answer, explanation] = quizFor(current());
    const selected = Number(new FormData(event.target).get('answer'));
    $('quizFeedback').textContent =
      (selected === answer ? '回答正确。' : '再想一想。') + explanation;
    $('quizFeedback').className = selected === answer ? 'correct' : 'incorrect';
  };
  $('roadmapBtn').onclick = openRoadmap;
  $('startPathBtn').onclick = openRoadmap;
  $('referenceBtn').onclick = openReference;
  $('manualBtn').onclick = openManual;
  $('openManualBtn').onclick = openManual;
  $('openReferenceBtn').onclick = openReference;
  $('closeDialog').onclick = () => $('learningDialog').close();
  $('learningDialog').addEventListener('click', (event) => {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      event.currentTarget.close();
  });
  $('sidebarToggle').onclick = () => {
    const open = $('sidebar').classList.toggle('open');
    $('sidebarToggle').setAttribute('aria-expanded', String(open));
    $('sidebarBackdrop').hidden = !open;
  };
  $('sidebarBackdrop').onclick = closeSidebar;
  window.addEventListener('keydown', (event) => {
    if (
      event.key === '/' &&
      !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName) &&
      !$('learningDialog').open
    ) {
      event.preventDefault();
      $('search').focus();
    }
    if (event.key === 'Escape') closeSidebar();
  });
  window.addEventListener('message', receiveMessage);
  window.addEventListener('pagehide', () => {
    persistEdit();
    flushDrafts();
  });
  window.addEventListener('hashchange', () => {
    const id = hashLesson();
    if (validIds.has(id)) {
      clearFilters();
      switchDemo(id, { fromHash: true });
    }
  });
  const last = hashLesson() || storage.get('flab-last', 'html-syntax');
  switchDemo(validIds.has(last) ? last : 'html-syntax', {
    fromHash: Boolean(hashLesson()),
  });
  showDevice('pc');
  updateStorageNotice();
  const handbookMode = new URLSearchParams(location.search).get('handbook');
  if (
    [
      'knowledge',
      'projects',
      'documents',
      'resources',
      'corrections',
      'report',
    ].includes(handbookMode)
  )
    openManual(handbookMode);
}
init();
