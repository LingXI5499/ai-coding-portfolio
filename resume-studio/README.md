# Resume Studio · 个人简历工作室

本地简历编辑器，支持 A4 实时预览、岗位版本、IndexedDB 自动保存、JSON 备份和中文文本 PDF 导出。使用 Vue、TypeScript、Express 和 Playwright Chromium。

集合内 seed/initial-resume.json 全部为虚构演示资料，头像是中性占位图；可通过界面替换为自己的内容。

```powershell
npm ci
npx playwright install chromium
npm run dev
```

访问 http://127.0.0.1:5186，PDF 服务监听 127.0.0.1:4186。端口在 config.ts 中配置，也可设置 WEB_PORT / API_PORT。

```powershell
npm test
npm run build
npm run test:e2e
npm run test:production
```

生产模式：npm run build 后执行 npm run start，访问 http://127.0.0.1:4186。PDF 依赖本地服务、Chromium 和中文字体，不能只上传 dist。内容超出一页时保留原文并提示精简，不裁切正文。使用自己的资料后，应独立备份 JSON；个人版本、照片、PDF 和截图不要提交到公开仓库。
