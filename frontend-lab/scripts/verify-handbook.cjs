const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const root = path.resolve(__dirname, '..');
const base = process.env.LAB_URL || 'http://127.0.0.1:4173/';
(async () => {
  const data = vm.runInNewContext(
    fs.readFileSync(path.join(root, 'handbook-data.js'), 'utf8') + '\nHANDBOOK',
  );
  const lessons = JSON.parse(
    fs.readFileSync(path.join(root, 'tests', 'lesson-index.json'), 'utf8'),
  );
  const ids = new Set(lessons.map((item) => item.id));
  assert.equal(data.summary.extractionFailures, 0);
  assert.equal(data.documents.length, data.summary.uniqueTeachingDocuments);
  const invalid = data.entries
    .flatMap((entry) => entry.lessons)
    .filter((id) => !ids.has(id));
  assert.equal(invalid.length, 0);
  for (const project of data.projects)
    for (const part of project.parts) assert.ok(ids.has(part.lesson));
  let sourceBlocks = 0;
  for (const doc of data.documents) {
    const context = { window: {} };
    vm.runInNewContext(
      fs.readFileSync(path.join(root, 'handbook', 'documents', doc.id + '.js'), 'utf8'),
      context,
    );
    const payload = context.window.HANDBOOK_DOCUMENTS[doc.id];
    assert.equal(payload.sections.length, doc.sections);
    sourceBlocks += payload.sections.reduce(
      (count, section) => count + section.blocks.length,
      0,
    );
    if (doc.treatment.includes('完整页面') || doc.treatment.includes('第三方'))
      assert.equal(payload.sections.length, 0);
  }
  const browser = await chromium.launch({
    headless: true,
    executablePath: process.env.BROWSER_PATH,
  });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(base);
  await page.waitForFunction(() => typeof demos !== 'undefined' && demos.length > 200);
  async function select(id) {
    await page.evaluate((id) => switchDemo(id), id);
    await page.waitForFunction(
      () => document.getElementById('runStatus').textContent === '预览已加载',
    );
  }
  const frame = page.frameLocator('#preview');
  await select('manual-atm');
  await frame.locator('#deposit').click();
  assert.equal(await frame.locator('#balance').textContent(), '120.00');
  await frame.locator('#amount').fill('999');
  await frame.locator('#withdraw').click();
  assert.equal(await frame.locator('#balance').textContent(), '120.00');
  assert.equal(await frame.locator('#message').textContent(), '余额不足');
  await select('manual-select-all');
  await frame.locator('#items input').first().check();
  assert.equal(
    await frame.locator('#all').evaluate((node) => node.indeterminate),
    true,
  );
  await frame.locator('#all').check();
  assert.equal(await frame.locator('#items input:checked').count(), 3);
  await select('manual-password-toggle');
  await frame.locator('#toggle').click();
  assert.equal(await frame.locator('#password').getAttribute('type'), 'text');
  assert.equal(await frame.locator('#toggle').getAttribute('aria-pressed'), 'true');
  await select('manual-input-change');
  await frame.locator('#text').fill('<img src=x onerror=alert(1)>');
  await frame.locator('#text').press('Enter');
  assert.equal(await frame.locator('#messages img').count(), 0);
  assert.ok((await frame.locator('#messages').textContent()).includes('<img'));
  await select('manual-dom-tree');
  await frame.locator('#clone').click();
  assert.equal(await frame.locator('#tree li').count(), 3);
  await frame.locator('#tree li').last().locator('button').click();
  assert.equal(await frame.locator('#tree li').count(), 2);
  await select('manual-price-filter');
  assert.equal(await frame.locator('#goods li').count(), 2);
  await frame.locator('#min').fill('60');
  await frame.locator('#max').fill('50');
  await frame.locator('#filter').click();
  assert.equal(await frame.locator('#goods li').count(), 0);
  assert.ok((await frame.locator('#status').textContent()).includes('有效范围'));
  await select('manual-debounce');
  await frame.locator('#search').fill('网页');
  await frame.locator('#settled').filter({ hasText: '稳定结果：网页' }).waitFor();
  await select('manual-thumbnail');
  await frame.locator('[data-index="2"]').click();
  assert.equal(await frame.locator('#main-image').textContent(), '蓝色');
  await select('manual-magnifier');
  await frame.locator('#medium').focus();
  await frame.locator('#medium').press('ArrowRight');
  assert.equal(
    await frame.locator('#mask').evaluate((node) => node.style.left),
    '80px',
  );
  const dimensions = await frame
    .locator('#zoom')
    .evaluate((node) => ({ size: node.style.backgroundSize, width: node.clientWidth }));
  assert.equal(parseFloat(dimensions.size), (220 * dimensions.width) / 80);
  await frame.locator('#medium').evaluate((node) =>
    node.dispatchEvent(
      new PointerEvent('pointermove', {
        clientX: 99999,
        clientY: 99999,
        bubbles: true,
      }),
    ),
  );
  assert.equal(
    await frame.locator('#mask').evaluate((node) => node.style.left),
    '140px',
  );
  await select('manual-carousel-parts');
  await frame.locator('#previous').click();
  assert.equal(await frame.locator('#slide').textContent(), 'JavaScript · 交互');
  await frame.locator('#dots button').nth(1).click();
  assert.equal(await frame.locator('#slide').textContent(), 'CSS · 布局');
  await select('manual-form-rules');
  await frame.locator('form button').click();
  assert.equal(await frame.locator('#username').getAttribute('aria-invalid'), 'true');
  await frame.locator('#username').fill('sample_12');
  await frame.locator('#first-password').fill('sample-password');
  await frame.locator('#confirmation').fill('sample-password');
  await frame.locator('#terms').check();
  await frame.locator('form button').click();
  assert.ok((await frame.locator('#status').textContent()).includes('验证通过'));
  await select('manual-storage-json');
  await frame.locator('#save').click();
  assert.ok((await frame.locator('#result').textContent()).includes('隔离预览'));
  await select('manual-accordion');
  await frame.locator('#accordion button').nth(2).click();
  assert.equal(await frame.locator('#accordion [aria-expanded=true]').count(), 1);
  assert.equal(await frame.locator('#panel-2').isVisible(), true);
  await select('manual-profile-states');
  await frame.locator('#edit').click();
  await frame.locator('#name').fill('修改未保存');
  await frame.locator('#cancel').click();
  assert.ok((await frame.locator('#summary').textContent()).includes('学习者'));
  await frame.locator('#edit').click();
  await frame.locator('#name').fill('新昵称');
  await frame.locator('#editor button').first().click();
  assert.ok((await frame.locator('#summary').textContent()).includes('新昵称'));

  await page.locator('#manualBtn').click();
  assert.equal(await page.locator('#learningDialog').isVisible(), true);
  await page.getByRole('searchbox', { name: '搜索开发手册' }).fill('放大镜');
  await page.waitForFunction(
    () =>
      document.querySelector('.reference-count').textContent.includes('个匹配条目') &&
      document
        .querySelector('.manual-index-item strong')
        ?.textContent.includes('放大镜'),
  );
  await page.locator('.manual-lesson-link').first().click();
  assert.ok((await page.locator('#demoTitle').textContent()).includes('放大镜'));
  await page.locator('#manualBtn').click();
  await page.getByRole('button', { name: '项目拆解', exact: true }).click();
  assert.equal(await page.locator('.manual-index-item').count(), data.projects.length);
  await page.getByRole('searchbox', { name: '搜索开发手册' }).fill('商品详情');
  await page
    .locator('.manual-project-card')
    .filter({ hasText: '商品详情实战' })
    .waitFor();
  assert.equal(await page.locator('.manual-project-parts li').count(), 6);
  await page.getByRole('button', { name: '课程资料', exact: true }).click();
  assert.equal(await page.locator('.manual-index-item').count(), 40);
  const md = data.documents.find(
    (doc) => doc.type === '.md' && doc.title.includes('day05'),
  );
  await page.evaluate(
    (id) => handbookRead(document.querySelector('.manual-detail'), id),
    md.id,
  );
  await page.locator('.manual-section-select select').waitFor();
  const codeSection = await page.evaluate(
    (id) =>
      window.HANDBOOK_DOCUMENTS[id].sections.findIndex((s) =>
        s.blocks.some((b) => b.type === 'code'),
      ),
    md.id,
  );
  await page
    .getByRole('combobox', { name: '选择资料章节或页码' })
    .selectOption(String(codeSection));
  assert.ok((await page.locator('.manual-code').first().textContent()).includes('\n'));
  assert.equal(await page.locator('.manual-source-body script').count(), 0);
  await page.getByRole('button', { name: '纠偏说明', exact: true }).click();
  assert.equal(await page.locator('.manual-index-item').count(), 10);
  await page.getByRole('button', { name: '覆盖统计', exact: true }).click();
  assert.equal(await page.locator('.manual-metrics > div').count(), 6);
  await page.screenshot({
    path: path.join(root, 'verification', 'handbook-report.png'),
    fullPage: true,
  });
  await page.getByRole('button', { name: '知识原子', exact: true }).click();
  await page.getByRole('searchbox', { name: '搜索开发手册' }).fill('原型链');
  await page.locator('.manual-detail h3').filter({ hasText: '原型链' }).waitFor();
  await page.screenshot({
    path: path.join(root, 'verification', 'handbook-desktop.png'),
    fullPage: true,
  });
  for (const width of [390, 768, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    assert.equal(
      await page
        .locator('#learningDialog')
        .evaluate((node) => node.scrollWidth <= node.clientWidth + 1),
      true,
      '手册无横向溢出：' + width,
    );
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({
    path: path.join(root, 'verification', 'handbook-mobile.png'),
    fullPage: true,
  });
  await page.keyboard.press('Escape');
  await page.setViewportSize({ width: 1440, height: 1000 });
  const file = await context.newPage();
  file.on('pageerror', (error) => errors.push(error.message));
  await file.goto('file:///' + path.join(root, 'index.html').replace(/\\/g, '/'));
  await file.waitForFunction(() => typeof HANDBOOK !== 'undefined');
  await file.evaluate(() => openManual('documents'));
  await file.evaluate(
    (id) => handbookRead(document.querySelector('.manual-detail'), id),
    md.id,
  );
  await file.locator('.manual-section-select select').waitFor();
  const pdf = data.documents.find((doc) => doc.type === '.pdf');
  await file.evaluate(
    (id) => handbookRead(document.querySelector('.manual-detail'), id),
    pdf.id,
  );
  await file.locator('.manual-source-body h4').filter({ hasText: '第1页' }).waitFor();
  const xmind = data.documents.find((doc) => doc.type === '.xmind');
  await file.evaluate(
    (id) => handbookRead(document.querySelector('.manual-detail'), id),
    xmind.id,
  );
  await file.locator('.manual-source-body h4').filter({ hasText: '主题树' }).waitFor();
  assert.deepEqual(errors, []);
  const report = {
    date: new Date().toISOString(),
    result: 'passed',
    newLessons: data.summary.newAtomicLessons,
    totalLessons: lessons.length,
    documentsChecked: data.documents.length,
    sourceBlocks,
    projectMaps: data.projects.length,
    uncaughtErrors: errors,
    checked: [
      'native interactions',
      'text injection',
      'magnifier boundaries and ratio',
      'source script syntax',
      'code formatting',
      'source reader isolation',
      'search and project routing',
      'mobile overflow',
      'file protocol chapters, PDF and XMind',
    ],
  };
  fs.writeFileSync(
    path.join(root, 'verification', 'handbook-report.json'),
    JSON.stringify(report, null, 2),
  );
  console.log(JSON.stringify(report, null, 2));
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
