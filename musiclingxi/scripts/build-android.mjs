import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const run = (command, args, cwd = root) => {
  const onWindows = process.platform === 'win32';
  const executable = onWindows ? (process.env.ComSpec || 'cmd.exe') : command;
  const commandArgs = onWindows ? ['/d', '/s', '/c', command, ...args] : args;
  const result = spawnSync(executable, commandArgs, { cwd, stdio: 'inherit', shell: false });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
};

run('npm', ['run', 'check']);
run('npm', ['run', 'lyrics:check']);
run('npm', ['test']);
run('npm', ['run', 'android:sync']);

const androidDirectory = resolve(root, 'android');
if (!existsSync(androidDirectory)) {
  console.error('Android 工程不存在。请先执行 npx cap add android。');
  process.exit(1);
}
run(process.platform === 'win32' ? 'gradlew.bat' : './gradlew', ['assembleDebug'], androidDirectory);
