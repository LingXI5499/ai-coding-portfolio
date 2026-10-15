# AtlasFlow · 全球地图相册

拖动三维地球，选择经纬度，检索附近的 Wikimedia Commons 公开照片，再进入动态照片墙。支持照片来源查看、高清预览、分页加载，以及摄像头手势聚合照片球和散开效果。

技术：Vue 3、TypeScript、Vite、MapLibre GL、GSAP、MediaPipe。

```powershell
npm ci
npm run dev
```

`npm ci` 自动把锁定版本的 MediaPipe WASM 复制到 public/mediapipe/wasm。模型保留在 public/mediapipe/gesture_recognizer.task。可选配置见 .env.example。

```powershell
npm test
npm run build
npm run test:e2e
```

浏览器测试默认使用 Edge，可通过 ATLASFLOW_BROWSER=chromium 改用已安装的 Playwright Chromium。摄像头需要 localhost 或 HTTPS，并由用户主动授权；照片与地图依赖外网。照片代表点击位置附近的公开影像，保留作者、许可与来源署名。构建产物为 dist，可部署到静态托管服务。
