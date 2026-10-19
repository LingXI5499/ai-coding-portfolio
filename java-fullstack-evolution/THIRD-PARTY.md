# 第三方组件说明

每个 backend 的 mvnw/mvnw.cmd 源于 Apache Maven Wrapper 3.3.4，保留原版权与 Apache 2.0 许可头。许可正文在 [docs/licenses/apache-2.0.txt](docs/licenses/apache-2.0.txt)，官方项目为 [apache/maven-wrapper](https://github.com/apache/maven-wrapper)。脚本仅下载固定的 Maven 3.9.16，不提交 Wrapper JAR 或 Maven 发行包。

Spring Boot、MyBatis、Spring Security、Flyway、H2、MySQL Connector/J、Springdoc 等通过 Maven 下载；Vue、Router、Axios、Vite、Vitest、Playwright 等通过 npm 锁文件下载。各依赖保留上游许可，构建发布时需按实际打包依赖审阅许可证，不将整个依赖目录复制进本仓库。

本作品未新增图片、字体、音频或模型素材。代码格式化使用 Google Java Format 和 Prettier，格式化器本体未纳入源码。
