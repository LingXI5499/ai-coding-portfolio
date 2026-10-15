/* 可搜索的开发手册：来源内容按需加载，始终以文本呈现。 */
const handbookLoads = new Map();
let handbookGeneration = 0;
function handbookLessonButton(id, label) {
  const demo = demos.find((item) => item.id === id);
  const button = element('button', 'manual-lesson-link', label || demo?.title || id);
  button.onclick = () => {
    clearFilters();
    switchDemo(id);
    $('learningDialog').close();
  };
  return button;
}
function handbookSources(container, sources) {
  const details = element('details', 'manual-sources');
  details.append(element('summary', '', '来源路径 · ' + sources.length + ' 个副本'));
  for (const source of sources)
    details.append(element('p', '', '课程资料/' + source));
  container.append(details);
}
function loadHandbookDocument(id) {
  if (window.HANDBOOK_DOCUMENTS?.[id])
    return Promise.resolve(window.HANDBOOK_DOCUMENTS[id]);
  if (handbookLoads.has(id)) return handbookLoads.get(id);
  const promise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    // IDs are fixed hexadecimal hashes from the source inventory, not user input.
    script.src = 'handbook/documents/' + id + '.js';
    script.onload = () => {
      script.remove();
      const data = window.HANDBOOK_DOCUMENTS?.[id];
      data ? resolve(data) : reject(new Error('资料未返回内容'));
    };
    script.onerror = () => {
      script.remove();
      handbookLoads.delete(id);
      reject(new Error('资料文件载入失败'));
    };
    document.head.append(script);
  });
  handbookLoads.set(id, promise);
  return promise;
}
function handbookText(container, text) {
  // Lightweight safe rendering: no Markdown/HTML from a source is evaluated.
  for (const paragraph of text.split(/\n\s*\n/)) {
    const lines = paragraph.split('\n');
    if (lines.every((line) => /^\s*[-*+]\s/.test(line) || !line.trim())) {
      const list = element('ul');
      lines
        .filter((line) => line.trim())
        .forEach((line) =>
          list.append(element('li', '', line.replace(/^\s*[-*+]\s/, ''))),
        );
      container.append(list);
    } else container.append(element('p', 'manual-prose', paragraph));
  }
}
function handbookCode(container, block) {
  const header = element('div', 'manual-code-header');
  header.append(
    element('small', '', (block.language || 'CODE').toUpperCase() + ' · 只读来源片段'),
  );
  const button = element('button', '', '复制代码');
  button.onclick = async () => {
    toast(
      (await copyText(block.text))
        ? '已复制格式化片段'
        : '复制失败，可选中代码手动复制',
    );
  };
  header.append(button);
  const pre = element('pre', 'manual-code');
  const code = element('code');
  const language = { javascript: 'js', js: 'js', css: 'css', html: 'html' }[
    block.language
  ];
  if (language) code.innerHTML = highlight(block.text, language);
  else code.textContent = block.text;
  pre.append(code);
  container.append(header, pre);
  if (block.note) container.append(element('p', 'manual-note', block.note));
}
async function handbookRead(container, docId, sectionIndex = 0) {
  const generation = ++handbookGeneration;
  const meta = HANDBOOK.documents.find((item) => item.id === docId);
  container.replaceChildren(element('p', '', '正在读取课程内容…'));
  try {
    const payload = await loadHandbookDocument(docId);
    if (generation !== handbookGeneration || !container.isConnected) return;
    container.replaceChildren(
      element('small', 'eyebrow', meta.module + ' / ' + meta.type),
      element('h3', '', meta.title),
      element('p', 'manual-note', meta.treatment),
    );
    const links = element('div', 'manual-links');
    meta.lessons.slice(0, 4).forEach((id) => links.append(handbookLessonButton(id)));
    container.append(links);
    if (!payload.sections.length) {
      container.append(
        element(
          'p',
          '',
          '这个文件作为完整页面、原型或第三方实现保留索引。按下面的组件拆解进入独立实验。',
        ),
      );
      const related = HANDBOOK.projects.filter((project) =>
        meta.projects.includes(project.id),
      );
      related.forEach((project) => renderHandbookProject(container, project));
      if (!related.length)
        container.append(
          element(
            'p',
            '',
            '原生替代可查阅 CSS 变量、十二列栅格、SVG 图标、深复制及防抖节流实验。',
          ),
        );
    } else {
      const label = element('label', 'manual-section-select', '章节 / 页码');
      const select = element('select');
      select.setAttribute('aria-label', '选择资料章节或页码');
      payload.sections.forEach((section, index) => {
        const option = element('option', '', index + 1 + ' · ' + section.title);
        option.value = index;
        select.append(option);
      });
      select.value = Math.min(sectionIndex, payload.sections.length - 1);
      label.append(select);
      const body = element('article', 'manual-source-body');
      const draw = () => {
        const section = payload.sections[Number(select.value)];
        body.replaceChildren(element('h4', '', section.title));
        const hint = section.page
          ? '原PDF第' + section.page + '页 · 图示请核对原件'
          : section.line
            ? '原Markdown第' + section.line + '行起'
            : '原文件内容';
        body.append(element('small', 'manual-location', hint));
        // Corrections stay visible beside archival source text.
        body.append(
          element(
            'p',
            'manual-note',
            '课程出处供核查；当前实践以独立实验讲解与“纠偏说明”为准。含库或排错代码的片段不会在此执行。',
          ),
        );
        section.blocks.forEach((block) =>
          block.type === 'code'
            ? handbookCode(body, block)
            : handbookText(body, block.text),
        );
        body.scrollTop = 0;
      };
      select.onchange = draw;
      container.append(label, body);
      draw();
    }
    handbookSources(container, meta.sources);
  } catch (error) {
    if (generation === handbookGeneration)
      container.replaceChildren(
        element(
          'p',
          'manual-note',
          error.message + '。请确认 handbook/documents 随网站完整保留。',
        ),
      );
  }
}
function renderHandbookProject(container, project) {
  const card = element('article', 'manual-project-card');
  card.append(element('h3', '', project.title), element('p', '', project.note));
  const steps = element('ol', 'manual-project-parts');
  project.parts.forEach((part) => {
    const li = element('li');
    li.append(handbookLessonButton(part.lesson, part.title + ' →'));
    steps.append(li);
  });
  card.append(
    steps,
    element(
      'small',
      '',
      '关联来源文件：' + project.sources.length + ' 个（按文件名与目录归组）',
    ),
  );
  container.append(card);
}
function renderHandbookReport(container) {
  const stats = HANDBOOK.summary;
  container.replaceChildren(element('h3', '', '课程覆盖与统计口径'));
  const grid = element('div', 'manual-metrics');
  [
    ['物理文件', stats.physicalFiles],
    ['去重教学文件', stats.uniqueTeachingDocuments],
    ['独立实验', stats.atomicLessons],
    ['手册入口', stats.handbookEntries],
    ['来源章节 / 页', stats.sourceSections],
    ['项目拆解', stats.projectDecompositions],
  ].forEach(([label, value]) => {
    const card = element('div');
    card.append(element('strong', '', String(value)), element('span', '', label));
    grid.append(card);
  });
  container.append(grid);
  const explanations = [
    '目录总量 ' +
      (stats.physicalBytes / 1e9).toFixed(2) +
      ' GB；全部物理文件记录了路径、字节和 SHA-256。',
    stats.archives +
      ' 个 ZIP/RAR 包共列出 ' +
      stats.archiveEntries +
      ' 个成员。包内成员与目录文件可能重复，不直接相加。',
    stats.teachingOccurrences +
      ' 次教学文本出现，经原始字节哈希去重为 ' +
      stats.uniqueTeachingDocuments +
      ' 个文件；不同导出版本仍分别保留。',
    'PDF 页级文字抽取共 ' +
      stats.pdfPages +
      ' 页，提取失败 ' +
      stats.extractionFailures +
      ' 项。配图、视频和设计源文件保留资源清单，没有宣称完成 OCR 或逐帧转录。',
    '新增 ' +
      stats.newAtomicLessons +
      ' 个原生实验。Less / Bootstrap / lodash 等作为来源索引，运行能力由原生代码实现。完整项目页只提供组件拆解。',
    '实验关联是明确主题规则生成的导航建议，不代表每行来源代码都人工审核。' +
      stats.unlinkedSections +
      ' 个导读、练习或笼统标题保留正文，未强行标成等价实验。',
  ];
  explanations.forEach((text) => container.append(element('p', 'manual-prose', text)));
  container.append(element('h4', '', '资料处理分类'));
  const table = element('table', 'manual-stat-table');
  Object.entries(stats.documentTreatments).forEach(([label, count]) => {
    const row = element('tr');
    row.append(element('th', '', label), element('td', '', String(count)));
    table.append(row);
  });
  container.append(table);
}
function renderHandbookCorrection(container, item) {
  container.replaceChildren(
    element('small', 'eyebrow', '课程核查 / 当前规范'),
    element('h3', '', '修正：' + item.original),
    element('p', 'manual-prose', item.corrected),
    handbookLessonButton(item.lesson),
  );
  const link = element('a', '', '官方说明 ↗');
  link.href = item.doc;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  container.append(link);
}
function openManual(initialMode = 'knowledge', initialQuery = '') {
  if (typeof initialMode !== 'string') initialMode = 'knowledge';
  openDialog('开发手册 · 知识、组件与课程出处');
  $('learningDialog').classList.add('manual-open');
  const intro = element(
    'p',
    'dialog-intro',
    '从一个知识点找到讲解、代码与独立实验，或从完整项目反查组成模块。',
  );
  const tabs = element('div', 'manual-tabs');
  tabs.setAttribute('role', 'group');
  tabs.setAttribute('aria-label', '手册目录类型');
  const tabItems = [
    ['knowledge', '知识原子'],
    ['projects', '项目拆解'],
    ['documents', '课程资料'],
    ['resources', '资源清单'],
    ['corrections', '纠偏说明'],
    ['report', '覆盖统计'],
  ];
  const tools = element('div', 'reference-tools');
  const input = element('input');
  input.type = 'search';
  input.placeholder = '搜索知识、代码、项目或来源路径…';
  input.setAttribute('aria-label', '搜索开发手册');
  input.value = initialQuery;
  const category = element('select');
  category.setAttribute('aria-label', '手册模块');
  [
    ['all', '全部模块'],
    ...[...new Set(HANDBOOK.entries.map((item) => item.module))]
      .sort()
      .map((x) => [x, x]),
  ].forEach(([value, label]) => {
    const option = element('option', '', label);
    option.value = value;
    category.append(option);
  });
  tools.append(input, category);
  const count = element('p', 'reference-count');
  count.setAttribute('role', 'status');
  const workbench = element('div', 'manual-workbench');
  const list = element('div', 'manual-index');
  list.setAttribute('aria-label', '手册条目列表');
  const detail = element('section', 'manual-detail');
  detail.setAttribute('aria-label', '手册条目内容');
  workbench.append(list, detail);
  const pagination = element('div', 'manual-pagination');
  let mode = initialMode;
  let offset = 0;
  let selected = null;
  const selectItem = (item, button) => {
    selected = item;
    list.querySelectorAll('button').forEach((node) => {
      node.classList.remove('selected');
      node.removeAttribute('aria-current');
    });
    button?.classList.add('selected');
    button?.setAttribute('aria-current', 'true');
    ++handbookGeneration;
    if (mode === 'projects') {
      detail.replaceChildren();
      renderHandbookProject(detail, item);
    } else if (mode === 'corrections') renderHandbookCorrection(detail, item);
    else if (mode === 'documents' || item.doc)
      handbookRead(detail, item.doc || item.id, item.section || 0);
    else if (mode === 'resources') {
      detail.replaceChildren(
        element('h3', '', item.path),
        element('p', '', '资源类型：' + (item.extension || '无扩展名')),
        element('p', '', '大小：' + item.bytes.toLocaleString() + ' 字节'),
        element('pre', 'manual-code', 'SHA-256\n' + item.hash),
        element(
          'p',
          'manual-note',
          '资源、软件和设计文件仅登记用途与出处。安装程序不执行，完整媒体不作为可运行实验。',
        ),
      );
    } else {
      const demo = demos.find((d) => d.id === item.lessons[0]);
      detail.replaceChildren(
        element('small', 'eyebrow', item.module + ' / 独立实验'),
        element('h3', '', item.title),
        element('p', 'manual-prose', item.summary),
      );
      if (demo) {
        const points = element('ul');
        demo.observe.forEach((point) => points.append(element('li', '', point)));
        detail.append(points, element('h4', '', '注意边界'));
        (demo.pitfalls || []).forEach((text) =>
          detail.append(element('p', 'manual-note', text)),
        );
        detail.append(
          handbookLessonButton(demo.id),
          element('h4', '', '一个可继续的练习'),
          element('p', '', demo.challenge),
        );
        const related = HANDBOOK.entries
          .filter((entry) => entry.doc && entry.lessons.includes(demo.id))
          .slice(0, 5);
        if (related.length) {
          detail.append(element('h4', '', '对应课程章节'));
          related.forEach((entry) => {
            const link = element('button', 'manual-lesson-link', entry.title);
            link.onclick = () => handbookRead(detail, entry.doc, entry.section);
            detail.append(link);
          });
        }
      }
    }
    detail.scrollTop = 0;
  };
  const render = () => {
    tabButtons.forEach(([value, button]) => {
      button.classList.toggle('active', value === mode);
      button.setAttribute('aria-pressed', String(value === mode));
    });
    workbench.hidden = mode === 'report';
    tools.hidden = mode === 'report';
    pagination.hidden = mode === 'report';
    let report = $('manualReport');
    if (mode === 'report') {
      if (!report) {
        report = element('section');
        report.id = 'manualReport';
        $('dialogContent').append(report);
      }
      report.hidden = false;
      renderHandbookReport(report);
      count.textContent = '可复核统计 · 原目录保持只读';
      return;
    }
    if (report) report.hidden = true;
    const items =
      mode === 'projects'
        ? HANDBOOK.projects
        : mode === 'documents'
          ? HANDBOOK.documents
          : mode === 'resources'
            ? HANDBOOK.files
            : mode === 'corrections'
              ? HANDBOOK.corrections
              : HANDBOOK.entries;
    const query = input.value.trim().toLowerCase();
    const filtered = items.filter(
      (item) =>
        (category.value === 'all' || item.module === category.value) &&
        [
          item.title,
          item.original,
          item.corrected,
          item.path,
          item.summary,
          item.searchText,
          item.treatment,
          item.module,
          ...(item.keywords || []),
          ...(item.sources || []),
        ]
          .join(' ')
          .toLowerCase()
          .includes(query),
    );
    count.textContent =
      filtered.length +
      ' 个匹配条目 · 当前 ' +
      (filtered.length ? offset + 1 : 0) +
      '–' +
      Math.min(offset + 40, filtered.length);
    list.replaceChildren();
    const current = filtered.slice(offset, offset + 40);
    current.forEach((item) => {
      const button = element('button', 'manual-index-item');
      button.append(
        element('small', '', item.kind || item.type || item.extension || '组件'),
        element('strong', '', item.title || item.original || item.path),
        element('span', '', item.module || item.treatment || ''),
      );
      button.onclick = () => selectItem(item, button);
      list.append(button);
    });
    pagination.replaceChildren();
    const previous = element('button', '', '← 上一页');
    previous.disabled = offset === 0;
    previous.onclick = () => {
      offset = Math.max(0, offset - 40);
      render();
    };
    const next = element('button', '', '下一页 →');
    next.disabled = offset + 40 >= filtered.length;
    next.onclick = () => {
      offset += 40;
      render();
    };
    pagination.append(previous, element('span', '', '每页40条'), next);
    if (current.length) selectItem(current[0], list.firstElementChild);
    else {
      ++handbookGeneration;
      detail.replaceChildren(element('p', '', '没有匹配结果，请调整关键词或模块。'));
    }
  };
  const tabButtons = tabItems.map(([value, label]) => {
    const button = element('button', '', label);
    button.onclick = () => {
      mode = value;
      offset = 0;
      category.value = 'all';
      input.value = '';
      render();
    };
    tabs.append(button);
    return [value, button];
  });
  let searchTimer;
  input.oninput = () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      offset = 0;
      render();
    }, 100);
  };
  category.onchange = () => {
    offset = 0;
    render();
  };
  $('dialogContent').append(intro, tabs, tools, count, workbench, pagination);
  render();
  input.focus();
  return detail;
}
function renderLessonProvenance(demo) {
  const box = $('lessonProvenance');
  if (!box) return;
  const entries = HANDBOOK.entries.filter(
    (item) => item.doc && item.lessons.includes(demo.id),
  );
  const projects = HANDBOOK.projects.filter((project) =>
    project.parts.some((part) => part.lesson === demo.id),
  );
  box.replaceChildren();
  if (entries.length) {
    box.append(element('small', '', '关联课程章节：' + entries.length + ' 项'));
    entries.slice(0, 3).forEach((item) => {
      const button = element('button', 'provenance-link', item.title + ' ↗');
      button.onclick = () => {
        const detail = openManual('knowledge', item.title);
        handbookRead(detail, item.doc, item.section);
      };
      box.append(button);
    });
  } else
    box.append(
      element('p', '', '此项为实验室扩展知识。可在开发手册查看课程资料与组件地图。'),
    );
  if (projects.length) {
    const button = element(
      'button',
      'provenance-link',
      '查看 ' + projects.length + ' 组项目中的组合用途 →',
    );
    button.onclick = () => openManual('projects', demo.title);
    box.append(button);
  }
}
