# 官方资料与版本依据

开发时访问官方资料，并通过依赖解析和真实构建核对可用版本。网站最新主版本可能变化，代码以本系列 pom.xml/package-lock.json 为准。

| 技术 | 本系列固定值 | 依据 |
| --- | --- | --- |
| Java | release 17；本机 Oracle 17.0.18 | [Spring Boot 3.5 系统要求](https://docs.spring.io/spring-boot/3.5/system-requirements.html)，Boot 3.5 最低 Java 17 |
| Spring Boot | 3.5.16 | 同上；沿用已有示例的 3.5 主次版本线，更新补丁 |
| MyBatis Starter | 3.0.5 | [官方兼容矩阵](https://mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/)，3.0 对应 Boot 3.2–3.5 |
| MySQL | 8.4 CI 服务与目标版本 | [MySQL 8.4 文档](https://dev.mysql.com/doc/refman/8.4/en/) |
| Maven / Wrapper | 3.9.16 / 3.3.4 only-script | [Wrapper](https://maven.apache.org/wrapper/)，版本与发行包固定 |
| Node | 24.15.0 | [Node 下载](https://nodejs.org/en/download/)，[Vite 要求](https://vite.dev/guide/) |
| Vue / Router | 3.5.44 / 5.4.0 | [Vue 工具链](https://vuejs.org/guide/scaling-up/tooling)，[Vue Router](https://router.vuejs.org/) |
| Axios / Vite / Vitest | 1.20.0 / 8.3.4 / 5.0.5 | [Axios](https://axios-http.com/docs/intro)、[Vite](https://vite.dev/guide/)、[Vitest](https://vitest.dev/guide/) |
| Spring Security | 由 Boot BOM 统一管理 | [6.5 Session](https://docs.spring.io/spring-security/reference/6.5/servlet/authentication/session-management.html)、[CSRF](https://docs.spring.io/spring-security/reference/6.5/servlet/exploits/csrf.html)、[JWT](https://docs.spring.io/spring-security/reference/6.5/servlet/oauth2/resource-server/jwt.html) |
| Springdoc | 2.8.17 | [Springdoc 兼容表](https://springdoc.org/#what-is-the-compatibility-matrix-of-springdoc-openapi-with-spring-boot) |

## 数据、HTTP 与安全

- [MyBatis XML、参数绑定与字符串替换](https://mybatis.org/mybatis-3/sqlmap-xml.html)
- [Spring MVC @RequestBody 与 Bean Validation](https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/requestbody.html)
- [MDN Fetch：HTTP 错误与网络拒绝](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [OWASP SQL 注入防护](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)
- [OWASP 密码存储](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
- [OWASP Session 管理](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
- [GitHub Actions Java 构建与测试](https://docs.github.com/en/actions/use-cases-and-examples/building-and-testing/building-and-testing-java-with-maven)

引用只用于核实设计，不能替代本仓库测试结果。原始规格要求 JDK 21 优先，已按用户后续要求改为 JDK 17；物理外键同样已按用户要求全部排除。
