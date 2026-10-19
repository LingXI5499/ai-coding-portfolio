import { readdir, readFile, lstat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const versions = (await readdir(root)).filter(name => /^V\d{2}-/.test(name)).sort();
assert.equal(versions.length, 10, 'Exactly ten versions are required');
const excluded = new Set(['target', 'node_modules', 'dist', 'test-results', 'playwright-report', '.local-mail']);

async function inspect(directory) {
  for (const name of await readdir(directory)) {
    if (excluded.has(name)) continue;
    assert.notEqual(name, '.git', 'Nested Git repositories are forbidden');
    const file = path.join(directory, name);
    const stat = await lstat(file);
    assert(!stat.isSymbolicLink(), `Source symlink: ${file}`);
    if (stat.isDirectory()) { await inspect(file); continue; }
    if (file.endsWith('.sql')) {
      const sql = await readFile(file, 'utf8');
      assert(!/FOREIGN\s+KEY|REFERENCES\s+\w+/i.test(sql), `Physical foreign key: ${file}`);
    }
    if (file.includes(`${path.sep}mapper${path.sep}`) && file.endsWith('.xml')) {
      assert(!(await readFile(file, 'utf8')).includes('${'), `SQL string substitution: ${file}`);
    }
  }
}

for (const [index, name] of versions.entries()) {
  const number = String(index + 1).padStart(2, '0');
  assert(name.startsWith(`V${number}-`), `Missing version ${number}`);
  const base = path.join(root, name);
  const backend = path.join(base, 'backend');
  const pom = await readFile(path.join(backend, 'pom.xml'), 'utf8');
  assert(pom.includes('<java.version>17</java.version>'), `Wrong Java target: ${name}`);
  assert(!pom.includes('<modules>'), `Aggregate project: ${name}`);
  for (const file of ['README.md', '.gitignore']) assert((await readFile(path.join(base, file), 'utf8')).length > 0);
  for (const file of ['mvnw', 'mvnw.cmd', '.mvn/wrapper/maven-wrapper.properties']) assert((await readFile(path.join(backend, file), 'utf8')).length > 0);
  if (index >= 2) {
    const frontend = path.join(base, 'frontend');
    const pkg = JSON.parse(await readFile(path.join(frontend, 'package.json'), 'utf8'));
    const lock = JSON.parse(await readFile(path.join(frontend, 'package-lock.json'), 'utf8'));
    assert.equal(pkg.name, lock.name, `Lock file mismatch: ${name}`);
  }
  await inspect(base);
}
assert.equal((await readdir(path.join(root, 'docs/articles'))).filter(name => /^V\d{2}-.*\.md$/.test(name)).length, 10);
console.log('PASS: ten independent layouts, JDK 17, frontend locks, ten articles, logical foreign keys, bound SQL, no nested Git or source symlinks');
