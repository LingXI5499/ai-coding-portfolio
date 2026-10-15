import { mkdir, readdir, copyFile } from 'node:fs/promises'
import { resolve } from 'node:path'
const source = resolve('node_modules/@mediapipe/tasks-vision/wasm')
const target = resolve('public/mediapipe/wasm')
await mkdir(target, { recursive: true })
for (const name of await readdir(source))
  if (/\.(wasm|js)$/.test(name)) await copyFile(resolve(source, name), resolve(target, name))
console.log('Copied MediaPipe WASM runtime for local lazy loading.')
