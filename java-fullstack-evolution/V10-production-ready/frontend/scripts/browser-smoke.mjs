import { chromium, expect } from '@playwright/test';
import { spawn, spawnSync, execFileSync } from 'node:child_process';
import { mkdir, open, readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createServer } from 'node:net';

// This is a verification orchestrator, not application source shared between versions.
const frontend = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const series = path.resolve(frontend, '../..');
const selected = process.env.SMOKE_VERSION;
const mysql = process.env.SMOKE_MYSQL === 'true';
const versions = (await readdir(series))
  .filter(
    (name) => /^V\d{2}-/.test(name) && (!selected || name.startsWith(selected)),
  )
  .sort();
assert(versions.length > 0, 'No matching version');
const java = process.env.JAVA_HOME
  ? path.join(
      process.env.JAVA_HOME,
      'bin',
      process.platform === 'win32' ? 'java.exe' : 'java',
    )
  : 'java';
const javaVersion = spawnSync(java, ['-version'], { encoding: 'utf8' });
assert.equal(javaVersion.status, 0, 'Java is unavailable');
assert(
  /version "17\./.test(javaVersion.stderr),
  'Browser checks require JDK 17',
);
const browser = await chromium.launch({ headless: true });
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function freePort() {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  await new Promise((resolve) => server.close(resolve));
  return port;
}

async function ready(url, process) {
  for (let attempt = 0; attempt < 120; attempt++) {
    if (process.exitCode !== null)
      throw new Error(`Server exited: ${process.exitCode}`);
    try {
      if ((await fetch(url)).ok) return;
    } catch {
      /* Wait for the child server to bind. */
    }
    await sleep(500);
  }
  throw new Error(`Server did not become ready: ${url}`);
}

async function employee(page, n, restart) {
  const name = `浏览器员工${n}`;
  if (n <= 2) {
    await page.getByLabel('姓名', { exact: true }).fill(name);
    await page.getByLabel('部门', { exact: true }).fill('研发部');
    await page.getByRole('button', { name: '保存员工' }).click();
    let row = page.locator('tbody tr').filter({ hasText: name });
    await expect(row).toHaveCount(1);
    await row.getByRole('button', { name: '编辑', exact: true }).click();
    await page.getByLabel('姓名', { exact: true }).fill(name + '修改');
    await page.getByRole('button', { name: '保存员工' }).click();
    row = page.locator('tbody tr').filter({ hasText: name + '修改' });
    await expect(row).toHaveCount(1);
    if (n === 1 && restart) await restart();
    await page.reload();
    await expect(row).toHaveCount(1);
    page.once('dialog', (dialog) => dialog.accept());
    await row.getByRole('button', { name: '删除', exact: true }).click();
    await expect(row).toHaveCount(0);
  } else if (n === 3) {
    for (const name of ['XMLHttpRequest', 'Fetch', 'Axios']) {
      const card = page
        .locator('.client-row .card')
        .filter({ has: page.getByRole('heading', { name, exact: true }) });
      await card.getByRole('button', { name: '新增', exact: true }).click();
      await expect(card.locator('pre')).toContainText('教学员工');
      await card.getByRole('button', { name: '查询', exact: true }).click();
      await expect(card.locator('pre')).toContainText('教学员工');
      await card.getByRole('button', { name: '400', exact: true }).click();
      await expect(card.locator('pre')).toContainText('HTTP 400');
      await card.getByRole('button', { name: '断网', exact: true }).click();
      await expect(card.locator('pre')).not.toHaveText('请求中…');
    }
    await expect(page.locator('#business tr')).toHaveCount(3);
  } else {
    await page
      .getByRole('link', { name: '添加员工', exact: true })
      .first()
      .click();
    await page.getByLabel('姓名', { exact: true }).fill(name);
    await page.getByLabel('部门', { exact: true }).fill('研发部');
    await page.getByRole('button', { name: '保存员工' }).click();
    let row = page.locator('tbody tr').filter({ hasText: name });
    await expect(row).toHaveCount(1);
    await row.getByRole('link', { name: '编辑', exact: true }).click();
    await page.getByLabel('姓名', { exact: true }).fill(name + '修改');
    await page.getByRole('button', { name: '保存员工' }).click();
    row = page.locator('tbody tr').filter({ hasText: name + '修改' });
    await expect(row).toHaveCount(1);
    await row.getByRole('link', { name: name + '修改', exact: true }).click();
    await expect(
      page.getByRole('heading', { name: name + '修改' }),
    ).toBeVisible();
    await page.reload();
    await expect(
      page.getByRole('heading', { name: name + '修改' }),
    ).toBeVisible();
    await page.getByRole('link', { name: '返回名册' }).click();
    page.once('dialog', (dialog) => dialog.accept());
    await page
      .locator('tbody tr')
      .filter({ hasText: name + '修改' })
      .getByRole('button', { name: '删除' })
      .click();
    await expect(page.locator('tbody tr')).toHaveCount(0);
  }
}

async function employeeQuery(page, context, origin, runtime, n) {
  const prefix = `分页员工${n}-`;
  const department = `分页研发${n}`;
  const ids = [];
  try {
    for (let i = 1; i <= 14; i++) {
      const response = await context.request.post(origin + '/api/employees', {
        data: {
          name: prefix + String(i).padStart(2, '0'),
          gender: '未说明',
          age: i === 13 ? 50 : 25,
          phone: '',
          department: i === 14 ? '市场' : department,
          salary: 8000,
        },
      });
      assert.equal(response.status(), 201);
      const body = await response.json();
      ids.push((n === 1 ? body : body.data).id);
    }
    await page.getByLabel('姓名关键字', { exact: true }).fill(prefix);
    await page.getByLabel('部门关键字', { exact: true }).fill(department);
    await page.getByLabel('最小年龄', { exact: true }).fill('25');
    await page.getByLabel('最大年龄', { exact: true }).fill('25');
    await page.getByLabel('性别筛选', { exact: true }).selectOption('未说明');
    await page
      .locator('.query-form')
      .getByRole('button', { name: '查询', exact: true })
      .click();
    const summary = page.locator('.pagination-summary');
    await expect(summary).toContainText('共 12 条');
    await page.getByLabel('每页条数', { exact: true }).selectOption('5');
    const rows = page.locator(n === 3 ? '#business tr' : 'tbody tr');
    await expect(rows).toHaveCount(5);
    await expect(summary).toHaveText(/第\s*1\s*\/\s*3\s*页/);
    await page.getByRole('button', { name: '下一页', exact: true }).click();
    await expect(rows.first()).toContainText(prefix + '06');
    await expect(summary).toHaveText(/第\s*2\s*\/\s*3\s*页/);
    if (n === 3) {
      for (const name of ['XMLHttpRequest', 'Fetch', 'Axios']) {
        const card = page
          .locator('.client-row .card')
          .filter({ has: page.getByRole('heading', { name, exact: true }) });
        await card.getByRole('button', { name: '查询', exact: true }).click();
        await expect(card.locator('pre')).toContainText('"total": 12');
        const data = JSON.parse(await card.locator('pre').innerText());
        assert.equal(data.page, 2);
        assert.equal(data.records.length, 5);
      }
    }
    if (n === 4)
      await page.screenshot({
        path: path.join(runtime, 'employee-query.png'),
        fullPage: true,
      });
    await page.getByLabel('姓名关键字', { exact: true }).fill(prefix + '12');
    await page
      .locator('.query-form')
      .getByRole('button', { name: '查询', exact: true })
      .click();
    await expect(rows).toHaveCount(1);
    await expect(summary).toHaveText(/共\s*1\s*条.*第\s*1\s*\/\s*1\s*页/);
    await page.getByLabel('姓名关键字', { exact: true }).fill('不会匹配的姓名');
    await page
      .locator('.query-form')
      .getByRole('button', { name: '查询', exact: true })
      .click();
    await expect(rows).toHaveCount(0);
    await expect(summary).toContainText('共 0 条');
    await expect(
      page.getByRole('button', { name: '下一页', exact: true }),
    ).toBeDisabled();
    await page.getByRole('button', { name: '重置筛选', exact: true }).click();
    await expect(page.getByLabel('姓名关键字', { exact: true })).toHaveValue(
      '',
    );
    await expect(rows).toHaveCount(5);
  } finally {
    for (const id of ids)
      await context.request.delete(origin + '/api/employees/' + id);
  }
}

function administratorFixtures(username, n) {
  assert(/^[a-z0-9_]+$/.test(username));
  const statements = [
    `UPDATE app_user SET role='ADMIN' WHERE username='${username}'`,
  ];
  for (let i = 1; i <= 8; i++) {
    statements.push(`INSERT INTO app_user(username,password_hash,nickname,status,role)
      SELECT '${username}p${i}',password_hash,'${username}分页学员${i}','${i === 8 ? 'DISABLED' : 'ACTIVE'}','USER'
      FROM app_user WHERE username='${username}'`);
  }
  // CI-only fixture setup through the temporary database, never a public privilege API.
  execFileSync(
    'mysql',
    [
      '-h',
      '127.0.0.1',
      '-u',
      process.env.DB_USERNAME,
      `java_fullstack_v${String(n).padStart(2, '0')}`,
      '-e',
      statements.join(';'),
    ],
    {
      env: { ...process.env, MYSQL_PWD: process.env.DB_PASSWORD },
      stdio: 'pipe',
    },
  );
}

async function adminQuery(page, username, n) {
  await page.getByRole('link', { name: '用户管理', exact: true }).click();
  await page.getByLabel('用户关键字', { exact: true }).fill(username);
  await page.getByLabel('用户状态', { exact: true }).selectOption('ACTIVE');
  await page.getByLabel('用户角色', { exact: true }).selectOption('USER');
  await page
    .locator('.query-form')
    .getByRole('button', { name: '查询', exact: true })
    .click();
  const summary = page.locator('.pagination-summary');
  await expect(summary).toContainText('共 7 条');
  await page.getByLabel('每页条数', { exact: true }).selectOption('5');
  await expect(page.locator('tbody tr')).toHaveCount(5);
  await page.getByRole('button', { name: '下一页', exact: true }).click();
  await expect(page.locator('tbody tr')).toHaveCount(2);
  await page.getByLabel('用户状态', { exact: true }).selectOption('DISABLED');
  await page
    .locator('.query-form')
    .getByRole('button', { name: '查询', exact: true })
    .click();
  await expect(summary).toHaveText(/共\s*1\s*条.*第\s*1\s*\/\s*1\s*页/);
  if (n >= 9) {
    await page.getByRole('button', { name: '恢复', exact: true }).click();
    await expect(summary).toContainText('共 0 条');
  }
  await page.getByRole('button', { name: '重置筛选', exact: true }).click();
  await expect(page.getByLabel('用户关键字', { exact: true })).toHaveValue('');
  await page.getByRole('link', { name: '我的账户', exact: true }).click();
  await expect(
    page.getByRole('button', { name: '退出当前设备' }),
  ).toBeVisible();
}

async function account(page, context, origin, runtime, n) {
  const username = `browser_${n}_${Date.now().toString(36)}`;
  const password = 'browser-classroom-password-123';
  await page.goto(origin + '/register');
  await page.getByLabel('用户名', { exact: true }).fill(username);
  await page.getByLabel('昵称', { exact: true }).fill('浏览器学员');
  await page
    .getByLabel('邮箱（可选）', { exact: true })
    .fill(username + '@example.invalid');
  await page.locator('input[autocomplete=new-password]').fill(password);
  await page.getByRole('button', { name: '创建账户', exact: true }).click();
  await expect(page).toHaveURL(/\/login$/);
  if (mysql && n >= 7) administratorFixtures(username, n);
  await page.getByLabel('用户名', { exact: true }).fill(username);
  await page.getByLabel('密码', { exact: true }).fill(password);
  await page.getByRole('button', { name: '登录', exact: true }).click();
  await expect(
    page.getByText('浏览器学员', { exact: true }).first(),
  ).toBeVisible();
  await page.reload();
  await expect(
    page.getByText('浏览器学员', { exact: true }).first(),
  ).toBeVisible();
  const cookies = await context.cookies();
  const credential = cookies.find(
    (cookie) => cookie.name === (n >= 8 ? 'REFRESH' : 'JSESSIONID'),
  );
  assert(credential?.httpOnly, 'Credential cookie must be HttpOnly');
  assert.equal(credential.sameSite, 'Strict');
  assert.equal(
    await page.evaluate(
      () =>
        Object.keys(localStorage).length + Object.keys(sessionStorage).length,
    ),
    0,
  );
  assert.equal(
    (
      await context.request.post(
        origin + (n >= 8 ? '/api/auth/refresh' : '/api/auth/logout'),
      )
    ).status(),
    403,
  );
  if (mysql && n >= 7) await adminQuery(page, username, n);
  if (n === 10) {
    await page.getByRole('link', { name: '文件练习', exact: true }).click();
    await page.getByLabel('选择学习图片', { exact: true }).setInputFiles({
      name: 'classroom.png',
      mimeType: 'image/png',
      buffer: await page.screenshot({
        clip: { x: 0, y: 0, width: 2, height: 2 },
      }),
    });
    await page.getByRole('button', { name: '上传图片', exact: true }).click();
    await expect(
      page.getByRole('status').filter({ hasText: '上传成功' }),
    ).toBeVisible();
    const uploadedRow = page.locator('tr').filter({ hasText: 'classroom.png' });
    await uploadedRow
      .getByRole('button', { name: '预览', exact: true })
      .click();
    const image = page.getByAltText('已上传图片预览');
    await expect(image).toBeVisible();
    await expect
      .poll(() => image.evaluate((node) => node.naturalWidth))
      .toBeGreaterThan(0);
    await page.setViewportSize({ width: 390, height: 844 });
    assert(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
      'Files mobile page overflows',
    );
    await page.screenshot({
      path: path.join(runtime, 'files-mobile.png'),
      fullPage: true,
    });
    await page.setViewportSize({ width: 1440, height: 1000 });
    if (mysql) {
      await page.getByRole('link', { name: '统计与审计', exact: true }).click();
      await expect(
        page.getByRole('img', { name: '账户状态分布' }).locator('svg'),
      ).toBeVisible();
      await expect(
        page.getByRole('img', { name: '近七日审计事件趋势' }).locator('svg'),
      ).toBeVisible();
      await page.getByLabel('审计用户名关键字', { exact: true }).fill(username);
      await page.getByLabel('审计操作', { exact: true }).fill('FILE_UPLOADED');
      await page.getByRole('button', { name: '查询事件', exact: true }).click();
      await expect(
        page.locator('tr').filter({ hasText: 'FILE_UPLOADED' }),
      ).toHaveCount(1);
      await page.setViewportSize({ width: 390, height: 844 });
      assert(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
        'Dashboard mobile page overflows',
      );
      await expect
        .poll(() =>
          page.locator('.report-chart').evaluateAll((charts) =>
            charts.every((chart) => {
              const svg = chart.querySelector('svg');
              return (
                svg &&
                Math.abs(
                  svg.getBoundingClientRect().width - chart.clientWidth,
                ) <= 1
              );
            }),
          ),
        )
        .toBe(true);
      await page.screenshot({
        path: path.join(runtime, 'dashboard-mobile.png'),
        fullPage: true,
      });
      await page.setViewportSize({ width: 1440, height: 1000 });
    }
    await page.getByRole('link', { name: '我的账户', exact: true }).click();
    await expect(
      page.getByRole('button', { name: '保存资料', exact: true }),
    ).toBeVisible();
  }

  if (n >= 9) {
    await page.getByLabel('昵称', { exact: true }).fill('浏览器修改资料');
    await page.getByRole('button', { name: '保存资料', exact: true }).click();
    await expect(page.getByRole('status')).toContainText('资料已保存');
    await page.setViewportSize({ width: 390, height: 844 });
    assert(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
      'Mobile page overflows',
    );
    await page.screenshot({
      path: path.join(runtime, 'account-mobile.png'),
      fullPage: true,
    });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.screenshot({
      path: path.join(runtime, 'account-desktop.png'),
      fullPage: true,
    });
    await page.getByRole('link', { name: '找回密码', exact: true }).click();
    await page.getByLabel('用户名', { exact: true }).fill(username);
    await page.getByRole('button', { name: '发送重置说明' }).click();
    await expect(page.getByRole('status')).toContainText('如该账户可用');
    const files = await readdir(path.join(runtime, '.local-mail'));
    let token;
    for (const file of files) {
      const text = await readFile(
        path.join(runtime, '.local-mail', file),
        'utf8',
      );
      if (text.includes(username + '@example.invalid'))
        token = text.split(': ').at(-1).trim();
    }
    assert(token, 'Development mail was not delivered');
    await page.getByLabel('邮件中的重置令牌', { exact: true }).fill(token);
    await page
      .getByLabel('新密码', { exact: true })
      .fill('new-browser-password-456');
    await page.getByRole('button', { name: '重置密码', exact: true }).click();
    await expect(page.getByRole('status')).toContainText('密码已重置');
  } else if (n >= 6) {
    await page.getByLabel('当前密码', { exact: true }).fill(password);
    await page
      .getByLabel('新密码', { exact: true })
      .fill('new-browser-password-456');
    await page.getByRole('button', { name: '更新密码', exact: true }).click();
    await expect(page).toHaveURL(/\/login$/);
  }
  await page.goto(origin + '/login');
  await page.getByLabel('用户名', { exact: true }).fill(username);
  await page
    .getByLabel('密码', { exact: true })
    .fill(n >= 6 ? 'new-browser-password-456' : password);
  await page.getByRole('button', { name: '登录', exact: true }).click();
  await expect(
    page.getByRole('button', { name: '退出当前设备' }),
  ).toBeVisible();
  await page.getByRole('button', { name: '退出当前设备' }).click();
  await expect(page).toHaveURL(/\/login$/);
  await page.goto(origin + '/account');
  await expect(page.getByRole('heading', { name: '你尚未登录' })).toBeVisible();
}

try {
  for (const version of versions) {
    const n = Number(version.slice(1, 3));
    const project = path.join(series, version);
    const runtime = path.join(frontend, 'test-results', version);
    await mkdir(runtime, { recursive: true });
    const log = await open(path.join(runtime, 'servers.log'), 'w');
    const servers = [];
    const context = await browser.newContext({
      viewport: { width: 1440, height: 1000 },
    });
    if (n === 10) {
      const nginx = await readFile(
        path.join(project, 'deploy/nginx.conf'),
        'utf8',
      );
      const policy = nginx.match(
        /add_header Content-Security-Policy "([^"]+)"/,
      )[1];
      // 浏览器也使用交付配置中的 CSP，验证组件样式与私有 Blob 预览。
      await context.route('**/*', async (route) => {
        if (route.request().resourceType() !== 'document')
          return route.continue();
        const response = await route.fetch();
        await route.fulfill({
          response,
          headers: { ...response.headers(), 'content-security-policy': policy },
        });
      });
    }
    try {
      const backendPort = await freePort();
      const startBackend = () =>
        spawn(
          java,
          [
            '-jar',
            path.join(
              project,
              'backend',
              'target',
              `evolution-v${String(n).padStart(2, '0')}-1.0.0.jar`,
            ),
            `--spring.profiles.active=${mysql ? 'ci' : 'demo'}`,
            `--server.port=${backendPort}`,
          ],
          {
            cwd: runtime,
            env: {
              ...process.env,
              ...(mysql
                ? {
                    DB_URL: `jdbc:mysql://127.0.0.1:3306/java_fullstack_v${String(n).padStart(2, '0')}?connectionTimeZone=UTC&forceConnectionTimeZoneToSession=true`,
                  }
                : {}),
            },
            stdio: ['ignore', log.fd, log.fd],
            windowsHide: true,
          },
        );
      let backend = startBackend();
      servers.push(backend);
      const endpoint = `http://127.0.0.1:${backendPort}`;
      await ready(
        endpoint + (n <= 4 ? '/api/employees' : '/api/auth/csrf'),
        backend,
      );
      let origin = endpoint;
      if (n >= 3) {
        const frontendPort = await freePort();
        const vite = spawn(
          process.execPath,
          [
            path.join(project, 'frontend/node_modules/vite/bin/vite.js'),
            'preview',
            '--port',
            String(frontendPort),
          ],
          {
            cwd: path.join(project, 'frontend'),
            env: { ...process.env, API_TARGET: endpoint },
            stdio: ['ignore', log.fd, log.fd],
            windowsHide: true,
          },
        );
        servers.push(vite);
        origin = `http://127.0.0.1:${frontendPort}`;
        await ready(origin, vite);
      }
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      if (n === 10)
        page.on('console', (message) => {
          if (
            message.type() === 'error' &&
            message.text().includes('Content Security Policy')
          )
            errors.push(message.text());
        });
      await page.goto(origin);
      const restart = async () => {
        await new Promise((resolve) => {
          backend.once('exit', resolve);
          backend.kill();
        });
        backend = startBackend();
        servers.push(backend);
        await ready(endpoint + '/api/employees', backend);
      };
      if (n <= 4) {
        await employee(page, n, mysql ? restart : null);
        await employeeQuery(page, context, origin, runtime, n);
      } else await account(page, context, origin, runtime, n);
      assert.deepEqual(errors, [], 'Unhandled browser errors');
      console.log(
        `PASS ${version}: real browser workflow, no unhandled page errors`,
      );
    } finally {
      await context.close();
      for (const server of servers.reverse()) server.kill();
      await log.close();
    }
  }
} finally {
  await browser.close();
}
