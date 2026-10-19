import { chromium, expect } from '@playwright/test';
import { spawn, spawnSync } from 'node:child_process';
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
assert(/version "17\./.test(javaVersion.stderr), 'Browser checks require JDK 17');
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
    try {
      const backendPort = await freePort();
      const startBackend = () => spawn(
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
          env: { ...process.env, ...(mysql ? { DB_URL: `jdbc:mysql://127.0.0.1:3306/java_fullstack_v${String(n).padStart(2, '0')}?serverTimezone=UTC` } : {}) },
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
      await page.goto(origin);
      const restart = async () => {
        await new Promise(resolve => { backend.once('exit', resolve); backend.kill(); });
        backend = startBackend(); servers.push(backend);
        await ready(endpoint + '/api/employees', backend);
      };
      if (n <= 4) await employee(page, n, mysql ? restart : null);
      else await account(page, context, origin, runtime, n);
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
