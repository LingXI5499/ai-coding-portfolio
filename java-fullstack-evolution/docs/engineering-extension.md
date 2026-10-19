# 工程组织、依赖管理与可选私服

## 当前项目的组织方式

十个版本各自有后端 POM 与前端锁文件，每版独立构建；它们是对照学习的十份快照。前后端分离表示页面工程和后端服务有各自源码与构建过程，不等同于 Maven 多模块。

V10 的账户、统计、文件与存储适配通过包和接口划分职责。`AssetStorage` 由配置选择本地或 OSS 实现，`FileService` 不需要编写云厂商的协议代码；这已经能够练习模块边界、依赖反转和构造函数注入。

## 继承、聚合和依赖管理分别是什么

| Maven 概念 | 解决的问题 | 本项目中的情况 |
| --- | --- | --- |
| parent 继承 | 复用构建插件、属性和依赖版本约定 | 各 backend 继承匹配的 Spring Boot parent |
| dependencyManagement | 统一版本选择，条目本身不会把依赖加进类路径 | 通过 Spring Boot 的依赖管理及显式锁定版本配合使用 |
| dependencies | 把实际使用的库加入当前工程 | Web、MyBatis、安全、Flyway、OSS 等 |
| modules 聚合 | 在同一个 reactor 中按依赖顺序构建多个模块 | 十个独立教学版本没有聚合到一起 |
| repository / mirror | 决定依赖从哪个仓库解析 | 默认 Maven Central，组织有私服时可用本机 settings 配置 |

将来做更大的单个业务项目时，可以拆分公共契约、业务实现和启动模块，再设计 parent 与聚合。要检查循环依赖、跨模块 API 和构建顺序；不应仅为目录好看就把几段代码拆成多个 JAR。

## 使用已有 Maven 私服

本系列无需私服即可构建。学校或团队已有仓库服务时，可以按管理员给出的 HTTPS 地址与账户，在自己的 Maven `settings.xml` 中配置。以下是说明结构的模板，域名必须替换为真实服务，不能原样启用：

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.2.0">
    <mirrors>
        <mirror>
            <id>learning-repository</id>
            <url>https://packages.example.invalid/repository/maven-public/</url>
            <mirrorOf>*</mirrorOf>
        </mirror>
    </mirrors>
    <servers>
        <server>
            <id>learning-repository</id>
            <username>${env.MAVEN_REPO_USERNAME}</username>
            <password>${env.MAVEN_REPO_PASSWORD}</password>
        </server>
    </servers>
</settings>
```

mirror 与 server 的 ID 必须对应。私服需能代理本项目所需的正式依赖和插件，认证从个人环境注入；不要把带凭据的 settings 提交进仓库。使用独立本地配置时，可在 backend 执行 `mvnw.cmd -s <配置文件路径> clean verify`。

仓库管理服务属于单独部署的软件，例如 [Sonatype Nexus Repository](https://help.sonatype.com/en/installation-and-upgrades.html)；安装方式、Java 要求、磁盘和内存随版本而定，按其官方部署说明准备独立运行环境。本项目的 JDK 17 构建要求保持不变，不需要为了体验 CRUD 在本机先架设私服。

配置依据：[Maven Settings](https://maven.apache.org/settings.html)、[镜像配置](https://maven.apache.org/guides/mini/guide-mirror-settings)、[仓库概念](https://maven.apache.org/guides/introduction/introduction-to-repositories)。

## Lombok 与显式代码

Lombok 可通过注解在编译期生成访问方法等代码，但不是 Spring 或 MyBatis 正常运行的前提。本系列保留显式字段和访问方法，方便在 IDE 中跟踪模型。学习 Lombok 时可以在自己的实验分支比较生成代码、注解处理器和 IDE 支持，避免对持有敏感信息的账户实体盲目生成 toString。

## 读代码时保留的边界

Controller 处理接入，Service 决定业务与事务，Mapper 执行参数化 SQL；DTO/Query 表示输入，Entity 表示持久化模型，VO 表示公开输出。AOP 只处理固定操作的耗时日志，安全过滤链决定认证授权。文件与 OSS 的补偿不是数据库事务的一部分，生产还需对账、权限、配额和恢复机制。
