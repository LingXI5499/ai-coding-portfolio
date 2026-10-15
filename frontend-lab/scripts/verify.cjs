// 浏览器回归：可通过 PLAYWRIGHT_PATH 和 BROWSER_PATH 指定本地工具。
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const root = path.resolve(__dirname, '..');
const baseUrl = process.env.LAB_URL || 'http://127.0.0.1:4173/';

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: process.env.BROWSER_PATH });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, acceptDownloads: true });
  const page = await context.newPage();
  const errors = [];
  const expectedErrors = [];
  let injectingError = false;
  page.on('pageerror', error => (injectingError ? expectedErrors : errors).push(error.message));
  await page.goto(baseUrl);
  await page.waitForFunction(() => typeof demos !== 'undefined' && document.getElementById('demoTitle').textContent === '标签、元素、属性：先读懂一行 HTML');
  const inventory = await page.evaluate(() => ({
    total: demos.length, references: REFERENCES.length,
    counts: Object.fromEntries(Object.keys(CATEGORIES).map(cat => [cat, demos.filter(d => d.cat === cat).length])),
    ids: demos.map(d => d.id),
  }));
  assert.equal(new Set(inventory.ids).size, inventory.total, '课程 id 唯一');
  const failures = [];
  for (const id of process.env.INTERACTIONS_ONLY ? [] : inventory.ids) {
    await page.evaluate(id => switchDemo(id), id);
    await page.waitForFunction(() => document.getElementById('runStatus').textContent !== '正在载入预览…', { timeout: 5000 });
    await page.waitForTimeout(id.startsWith('js-') ? 550 : 30);
    const status = await page.evaluate(() => ({
      errors: logs.filter(log => log.level === 'error'),
      lines: document.getElementById('codeEditor').value.split('\n').length,
    }));
    if (status.errors.length) failures.push({ id, errors: status.errors });
    assert.ok(status.lines > 1, id + ' HTML 源码应为多行');
  }
  console.log('Inventory:', JSON.stringify(inventory.counts), 'references:', inventory.references);
  console.log('Lesson failures:', JSON.stringify(failures));
  assert.deepEqual(failures, [], '全部实验初始运行无错误');
  assert.deepEqual(errors, [], '宿主及子页面未捕获异常');

  await page.evaluate(() => switchDemo('css-layers'));
  await page.waitForFunction(() => document.getElementById('runStatus').textContent === '预览已加载');
  assert.equal(await page.frameLocator('#preview').locator('.layer-button').evaluate(node => getComputedStyle(node).backgroundColor), 'rgb(210, 232, 218)', '公共样式不覆盖教学用的级联层');

  await page.evaluate(() => { clearFilters(); switchDemo('events'); });
  await page.waitForFunction(() => document.getElementById('runStatus').textContent === '预览已加载');
  const frame = page.frameLocator('#preview');
  await frame.locator('#plus').click();
  assert.equal(await frame.locator('#count').textContent(), '1');

  await page.evaluate(() => switchDemo('js-array-methods'));
  await page.locator('#jsTab').click();
  const initial = await page.locator('#codeEditor').inputValue();
  await page.locator('#codeEditor').fill(initial + '\nconsole.log("草稿验证");');
  await page.locator('#runBtn').click();
  await page.waitForFunction(() => document.getElementById('consoleOutput').textContent.includes('草稿验证'));
  await page.reload();
  await page.locator('#jsTab').click();
  assert.ok((await page.locator('#codeEditor').inputValue()).includes('草稿验证'), '刷新恢复草稿');
  injectingError = true;
  await page.locator('#codeEditor').fill('const invalid = ;');
  await page.locator('#runBtn').click();
  await page.waitForFunction(() => document.getElementById('runStatus').textContent.includes('错误'));
  injectingError = false;
  await page.locator('#resetBtn').click();
  await page.waitForFunction(() => document.getElementById('runStatus').textContent === '预览已加载');

  await page.locator('#saveButton').click();
  await page.locator('[data-category=saved]').click();
  assert.ok(await page.locator('#demoList [data-lesson="js-array-methods"]').count());
  await page.evaluate(() => clearFilters());
  await page.locator('#doneCheckbox').check();
  await page.reload();
  assert.equal(await page.locator('#doneCheckbox').isChecked(), true, '学习状态持久化');

  await page.locator('#roadmapBtn').click();
  assert.equal(await page.locator('.path-card').count(), 4);
  await page.keyboard.press('Escape');
  await page.locator('#referenceBtn').click();
  await page.getByRole('searchbox', { name: '搜索技术速查' }).fill('grid-template-columns');
  assert.equal(await page.locator('.reference-card').count(), 1);
  await page.locator('#closeDialog').click();

  await page.evaluate(() => switchDemo('html-document'));
  await page.locator('#quizOptions input[value="1"]').check();
  await page.locator('#quizForm button[type=submit]').click();
  assert.ok((await page.locator('#quizFeedback').textContent()).startsWith('回答正确'));

  const downloadPromise = page.waitForEvent('download');
  await page.locator('#downloadBtn').click();
  const download = await downloadPromise;
  const exportPath = path.join(root, 'verification', 'exported-example.html');
  fs.mkdirSync(path.dirname(exportPath), { recursive: true });
  await download.saveAs(exportPath);
  const exported = await context.newPage();
  await exported.goto('file:///' + exportPath.replace(/\\/g, '/'));
  assert.equal(await exported.title(), '你好，Web');
  assert.equal(await exported.locator('h1').textContent(), '你好，Web');
  assert.equal(await exported.locator('html').count(), 1, '完整 HTML 不嵌套重复文档');
  await exported.close();
  await page.bringToFront();

  await page.evaluate(() => { clearFilters(); switchDemo('project-portfolio'); });
  await page.waitForFunction(() => document.getElementById('runStatus').textContent === '预览已加载');
  const portfolio = page.frameLocator('#preview');
  await portfolio.locator('[data-filter=tool]').click();
  await portfolio.locator('.project-card').nth(2).waitFor({ state: 'detached' });
  assert.equal(await portfolio.locator('.project-card').count(), 2);
  await portfolio.getByRole('button', { name: '查看详情' }).first().click();
  assert.ok(await portfolio.locator('dialog').evaluate(node => node.open));
  await portfolio.getByRole('button', { name: '关闭', exact: true }).click();
  assert.equal(await portfolio.locator('dialog').evaluate(node => node.open), false, '作品详情按钮关闭原生对话框');

  await page.evaluate(() => switchDemo('html-dialog'));
  await page.waitForFunction(() => document.getElementById('runStatus').textContent === '预览已加载');
  await page.frameLocator('#preview').locator('#open').click();
  await page.frameLocator('#preview').getByRole('button', { name: '开始学习' }).click();
  assert.equal(await page.frameLocator('#preview').locator('dialog').evaluate(node => node.open), false);
  assert.equal(await page.frameLocator('#preview').locator('#decision').textContent(), '准备开始！');

  await page.evaluate(() => switchDemo('project-quiz'));
  await page.waitForFunction(() => document.getElementById('runStatus').textContent === '预览已加载');
  const quiz = page.frameLocator('#preview');
  for (const answer of [0, 1, 1]) {
    await quiz.locator('input[value="' + answer + '"]').check();
    await quiz.locator('#quizNext').click();
    await quiz.locator('#quizNext').click();
  }
  assert.ok((await quiz.locator('#questionProgress').textContent()).includes('3 / 3'));
  await quiz.locator('#quizRestart').click();
  assert.equal(await quiz.locator('#quizForm').isVisible(), true);

  await page.evaluate(() => switchDemo('project-expenses'));
  await page.waitForFunction(() => document.getElementById('runStatus').textContent === '预览已加载');
  const expenses = page.frameLocator('#preview');
  await expenses.locator('[name=title]').fill('<img src=x onerror=alert(1)>');
  await expenses.locator('[name=amount]').fill('19.90');
  await expenses.getByRole('button', { name: '加入记录' }).click();
  assert.ok((await expenses.locator('#expenseTotal').textContent()).includes('19.90'));
  assert.equal(await expenses.locator('#records img').count(), 0, '用户内容以纯文本呈现');
  await expenses.locator('#records button').click();
  assert.ok((await expenses.locator('#expenseTotal').textContent()).includes('暂无记录'));

  await page.evaluate(() => switchDemo('project-cart'));
  await page.waitForFunction(() => document.getElementById('runStatus').textContent === '预览已加载');
  const cart = page.frameLocator('#preview');
  assert.ok((await cart.locator('#cartTotal').textContent()).includes('37.70'));
  await cart.getByRole('button', { name: '增加学习笔记本', exact: true }).click();
  assert.ok((await cart.locator('#cartTotal').textContent()).includes('57.60'));

  await page.evaluate(() => switchDemo('js-fetch'));
  await page.waitForFunction(() => document.getElementById('runStatus').textContent === '预览已加载');
  await page.frameLocator('#preview').locator('#load').click();
  await page.frameLocator('#preview').locator('#response').filter({ hasText: 'HTML 语义' }).waitFor();

  await page.evaluate(() => switchDemo('project-portfolio'));
  await page.waitForFunction(() => document.getElementById('runStatus').textContent === '预览已加载');
  await page.evaluate(() => scrollTo(0, 0));
  await page.evaluate(() => { clearTimeout(toast.timer); document.getElementById('toast').classList.remove('show'); });
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(root, 'verification', 'desktop.png'), fullPage: true });

  for (const width of [390, 768, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, width + 'px 宿主不横向溢出');
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator('#sidebarToggle').click();
  assert.equal(await page.locator('#sidebarToggle').getAttribute('aria-expanded'), 'true');
  await page.locator('#sidebarBackdrop').click({ position: { x: 360, y: 100 } });
  assert.equal(await page.locator('#sidebarToggle').getAttribute('aria-expanded'), 'false');
  await page.waitForTimeout(300);
  await page.evaluate(() => scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(root, 'verification', 'mobile.png'), fullPage: true });

  const filePage = await context.newPage();
  await filePage.goto('file:///' + path.join(root, 'index.html').replace(/\\/g, '/'));
  await filePage.waitForFunction(() => document.getElementById('demoList').children.length > 20);
  assert.equal(await filePage.locator('#allCount').textContent(), String(inventory.total), '双击文件可运行');
  await filePage.close();
  assert.deepEqual(errors, [], '正常交互无未捕获异常');
  assert.equal(expectedErrors.length, 1, '注入语法错误被捕获一次');
  const report = { date: new Date().toISOString(), ...inventory, failures, uncaughtErrors: errors, expectedInjectedErrors: expectedErrors, allLessonsChecked: !process.env.INTERACTIONS_ONLY, result: 'passed' };
  fs.writeFileSync(path.join(root, 'verification', 'report.json'), JSON.stringify(report, null, 2));
  console.log('PASS: all lessons, drafts, errors, favorites, progress, quiz, references, export, portfolio, responsive widths, file URL.');
  await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
