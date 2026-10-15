import { defineConfig } from 'vite';

// Two on-disk forms of the media directory exist and must not be confused:
//
//   * publishable form — every file in `web/public/media/audio` is a zero-byte
//     placeholder and `web/js/library.js` marks each track `placeholderAudio: true`.
//     This is what is committed and what a fresh clone builds.
//   * local form — the real audio is in place and the tracks are marked
//     `placeholderAudio: false`. Produced by `npm run media:restore`.
//
// `npm run media:placeholder` flips back to the publishable form; `npm run media:restore`
// flips to the local form. Both rewrite the same generated manifest, so a plain build
// always uses exactly what is on disk and no hidden override can desync the bundle.
export default defineConfig({
  root: 'web',
  publicDir: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: false,
    target: 'es2022'
  }
});
