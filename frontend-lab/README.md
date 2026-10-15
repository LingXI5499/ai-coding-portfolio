# Frontend Lab · 界面实验室

原生 HTML、CSS、JavaScript 交互学习工作台，包含 263 个可运行实验、技术速查和开发手册。支持源码编辑、隔离预览、控制台、响应式宽度、草稿与进度保存、独立 HTML 导出。

直接打开 index.html 即可使用，运行不依赖框架或后端。也可以使用本地 HTTP 服务：

```powershell
npm ci
npm run dev
```

访问 http://127.0.0.1:4173/。Node.js 只用于开发服务和回归测试。

```powershell
npx playwright install chromium
npm test
npm run test:teaching
npm run test:handbook
```

测试前保持 npm run dev 运行。课程和 handbook/documents 是实际产品数据，需要完整保留。scripts 中仅保留开发服务与回归测试；原始课程审计、转换过程和报告不在集合中。来源标记保留于课程内容，外部参考链接需要网络。
