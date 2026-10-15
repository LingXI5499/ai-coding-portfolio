# MusicLingXi · Android 离线音乐播放器

原生 HTML/CSS/JavaScript 业务层，使用 Capacitor 8 和 Android 原生媒体会话实现后台、通知与锁屏控制。支持搜索、播放队列、列表/单曲/随机模式、LRC 同步歌词、点击歌词跳转、明暗主题与状态记忆。

```powershell
npm ci
npm run dev
```

集合提供 77 个空音频占位文件，不含真实音频或歌词正文，页面会明确显示“暂无音频 / 暂无歌词”。将自己的音频放入 audio 后执行 npm run media:ingest；歌词按清单中的 track ID 保存到 web/public/media/lyrics。

```powershell
npm test
npm run check
npm run lyrics:check
npm run build
```

Android 构建需要 Android SDK 和匹配 Gradle 的 JDK，配置 ANDROID_HOME 或本机 local.properties 后执行 npm run android:debug。该命令先同步 Web 资源和插件，再构建 debug APK。浏览器预览使用 HTMLAudioElement，后台和锁屏能力需在 Android 真机验证。

真实音频、歌词、音频备份、媒体元数据和本机 SDK 路径均不纳入 Git。media:ingest / media:restore 默认备份目录为当前项目旁边的 Music-private-assets，属于本地私有资源。导入真实音频后，提交前先运行 npm run media:placeholder，并检查 git diff，确保已跟踪的占位文件未被真实音频替换。
