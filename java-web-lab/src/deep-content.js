// 教学案例为原创可推演业务模型；公开工程事实单独列出，不能视为企业面试原题。
const R = {
  mvc: ['Spring MVC 请求处理', 'https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-servlet/sequence.html'],
  tx: ['Spring 事务代理', 'https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html'],
  rollback: ['Spring 回滚规则', 'https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/rolling-back.html'],
  pool: ['HikariCP 池大小', 'https://github.com/brettwooldridge/HikariCP/wiki/About-Pool-Sizing'],
  executor: ['JDK 21 ThreadPoolExecutor', 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html'],
  jmm: ['Java 内存模型', 'https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html'],
  locks: ['MySQL 锁定读', 'https://dev.mysql.com/doc/refman/8.4/en/innodb-locking-reads.html'],
  snapshot: ['MySQL 一致性读', 'https://dev.mysql.com/doc/refman/8.4/en/innodb-consistent-read.html'],
  deadlock: ['MySQL 死锁处理', 'https://dev.mysql.com/doc/refman/8.4/en/innodb-deadlocks-handling.html'],
  proxy: ['NGINX proxy_pass', 'https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass'],
  lb: ['NGINX 负载均衡', 'https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/'],
  cors: ['MDN CORS', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS'],
  rabbit: ['RabbitMQ 确认机制', 'https://www.rabbitmq.com/docs/confirms'],
  outbox: ['Debezium Outbox 路由', 'https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html'],
  redis: ['Redis 分布式锁', 'https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/'],
  replica: ['MySQL 复制', 'https://dev.mysql.com/doc/refman/8.4/en/replication.html'],
  trace: ['OpenTelemetry 上下文传播', 'https://opentelemetry.io/docs/concepts/context-propagation/'],
  retry: ['AWS 超时、重试、退避与抖动', 'https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/'],
  stripe: ['Stripe 幂等请求', 'https://docs.stripe.com/api/idempotent_requests'],
  cloudflare: ['Cloudflare 2019 事故复盘', 'https://blog.cloudflare.com/details-of-the-cloudflare-outage-on-july-2-2019/'],
  github: ['GitHub 2018 事故复盘', 'https://github.blog/news-insights/company-news/oct21-post-incident-analysis/'],
  fetch: ['MDN Fetch 状态处理', 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch'],
  mybatis: ['MyBatis 参数绑定', 'https://mybatis.org/mybatis-3/sqlmap-xml.html'],
  scope: ['Spring Bean 作用域', 'https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html'],
  probe: ['Kubernetes 探针语义', 'https://kubernetes.io/docs/concepts/workloads/pods/probes/'],
  jwt: ['Spring Security JWT 验证', 'https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/jwt.html'],
  index: ['MySQL 索引使用', 'https://dev.mysql.com/doc/refman/8.4/en/mysql-indexes.html'],
  cache: ['Redis Cache-aside', 'https://redis.io/docs/latest/develop/use-cases/cache-aside/'],
  little: ['Columbia 排队论 Little 定律讲义', 'https://www.columbia.edu/~ks20/stochastic-I/stochastic-I-LL.pdf']
};
const ref = key => ({title:R[key][0],url:R[key][1]});
const step = (actor,action,state,code,evidence) => ({actor,action,state,code,evidence});
const scenario = (id,stage,title,problem,assumption,steps,result,failure,refs) => ({id,stage,title,problem,assumption,steps,result,failure,references:refs.map(ref)});

export const workedCases = [
  scenario('article-read',0,'查看文章：从 URL 到 JSON 的八个边界','页面点击后，为什么一条 Mapper 方法会变成 SQL，又变回 JSON？','原创业务案例。HTTPS 在 NGINX 终止，代理 HTTP 到 Tomcat；同步 Spring MVC；文章 42 存在；代码片段省略 import 与配置。',[
    step('浏览器','构造资源请求，浏览器解析域名并建立或复用连接。',{请求:'GET /api/articles/42',连接:'已有连接可复用',状态:'等待响应'},"fetch('/api/articles/42', {headers:{Accept:'application/json'}})",'DevTools Network 看 URL、状态与 Timing；DNS/TLS 并非每次必做。'),
    step('NGINX','匹配 /api/ 并转发；此配置把前缀替换为 /。',{外部路径:'/api/articles/42',上游路径:'/articles/42',应用地址:'127.0.0.1:8080'},'location /api/ {\n  proxy_pass http://127.0.0.1:8080/;\n}','入口 access log 与应用 URI 要对应；尾部 / 会改变路径。'),
    step('Tomcat / Filter','Connector 解析 HTTP；工作线程进入 Servlet Filter 链。',{线程:'http-nio-8080-exec-1',请求范围:'一次 dispatch',鉴权:'允许'},'chain.doFilter(request, response);','Filter 可提前返回；尚未调用 Controller，SQL 就可能完全不执行。'),
    step('DispatcherServlet','HandlerMapping 找到处理器，HandlerAdapter 解析参数并调用它。',{处理器:'ArticleController.find',路径参数:'id = 42',返回约定:'响应体'},'@GetMapping("/articles/{id}")\nArticleView find(@PathVariable long id) {\n  return service.find(id);\n}','断点观察映射、转换和拦截器；不是按类名字符串直接找 Service。'),
    step('Service','应用业务规则：不存在应转为明确异常，避免向前端暴露数据库实体。',{业务:'查询公开文章',边界:'DTO',事务:'只读查询，按需要配置'},'Article row = mapper.find(id);\nif (row == null) throw new ArticleNotFound(id);\nreturn ArticleView.from(row);','验证权限与字段，不把 password、内部标记直接序列化。'),
    step('MyBatis / JDBC','Mapper 代理定位语句；借连接并绑定参数；数据库返回行。',{连接:'Hikari 借出 C1',参数:'id → 42',行数:'1'},'SELECT id, title, body\nFROM article WHERE id = #{id}','MyBatis 日志可看语句与参数；#{id} 绑定参数，不能把它理解为文本拼接。'),
    step('消息转换器','对象转为 JSON；连接在适当的事务或资源边界归还。',{响应:'200 application/json',正文:'id=42, title=HTTP',连接:'已归还'},'return new ArticleView(42L, "HTTP", "...");','@ResponseBody 由 HttpMessageConverter 处理；Jackson 是常见 JSON 实现。'),
    step('浏览器','检查状态、解析 JSON，组件状态触发 DOM 更新。',{HTTP:'成功',数据:'已解析',界面:'文章可见'},'if (!response.ok) throw new Error(String(response.status));\nconst article = await response.json();','fetch 对 404/500 通常仍 resolve；需要自己检查 response.ok。')
  ],'同一个 requestId 串联入口、业务与 SQL，先找最后成功边界，再定位故障。','404 可能来自入口路径、MVC 映射或业务数据；200 也可能 JSON 解析失败。看状态、Content-Type 与实际 Body。',['mvc','proxy']),
  scenario('preflight-reject',0,'登录跨域：OPTIONS 成功不等于登录成功','Vue 在 localhost:5178 调用另一个 origin 的登录接口，服务端日志为何只出现 OPTIONS？','原创案例。跨源 POST application/json 会触发预检；浏览器执行 CORS；鉴权策略必须允许正确的预检。',[
    step('浏览器','识别跨源 JSON 请求，先发送 OPTIONS。',{原始操作:'POST /login',实际先发:'OPTIONS /login',请求头:'Access-Control-Request-Method: POST'},"fetch('https://api.example.test/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)})",'Network 区分 preflight 和实际 POST 两条记录。'),
    step('入口代理','把 OPTIONS 按路由交给应用。',{路由:'/login',上游:'应用实例 A',正文:'预检不带登录 JSON'},'proxy_pass http://app;','预检不是业务登录，不能要求它先有登录 Token。'),
    step('CORS / 安全过滤器','错误配置把 OPTIONS 当未登录请求拒绝。',{响应:'401',允许来源:'缺失',Controller:'未执行'},'// 错误教学分支：所有未认证请求都直接拒绝','看安全 Filter 日志，不应先排查 Mapper。'),
    step('浏览器','预检不通过，拦截实际 POST。',{POST:'没有发送',JS:'网络/CORS 错误',数据库:'没有查询'},'// catch 能看到失败，不能绕过浏览器策略','curl 成功不能证明浏览器 CORS 配置正确；curl 不执行浏览器同源策略。'),
    step('CORS 配置','明确允许来源、方法和请求头；携带凭据时不能用通配来源。',{允许来源:'https://web.example.test',允许方法:'POST',允许请求头:'Content-Type'},'Access-Control-Allow-Origin: https://web.example.test\nAccess-Control-Allow-Methods: POST\nAccess-Control-Allow-Headers: Content-Type','策略需在预检正确返回；不要为解决 CORS 而取消业务鉴权。'),
    step('Controller','预检通过后真正发送 POST；执行参数校验和密码认证。',{预检:'允许',登录:'仍可能 401',安全:'认证与 CORS 分开'},'// 参数校验 → 查询用户 → 验证密码 → 返回认证结果','“能发请求”和“有权限访问”是两个判断。')
  ],'先确定浏览器是否发出实际请求，再分析服务端链路。','CORS 放行不授予业务权限；浏览器隐藏响应也不意味着服务端没有产生副作用。',['cors','mvc']),
  scenario('pool-wait',1,'导出报表拖慢查询：线程与连接的占用账本','8 个同步工作线程、3 个连接，3 个导出各持连接 2 秒。普通查询为什么等待？','原创有限资源模型。每请求最多一连接；所有请求共用池；同步执行；只演示排队，不代替真实压测。',[
    step('请求入口','三条导出和五条查询到达，同步线程开始执行。',{工作线程:'8 / 8',数据库连接:'0 / 3',HTTP:'8 条等待完成'},'// export × 3 + read × 5','同时看入口并发与线程数；用户数不等于活动数据库连接数。'),
    step('导出 A / B / C','三条导出占满连接，在事务内读取大量行。',{工作线程:'3 执行导出',数据库连接:'3 / 3',耗时:'每条持连接 2 秒'},'try (Connection c = dataSource.getConnection()) {\n  exportRows(c);\n}','连接占用时间含取数和事务内工作，不一定等于 SQL 执行日志中的毫秒数。'),
    step('查询 D / E / F / G / H','五条请求在 getConnection 等待。',{工作线程:'5 等连接',数据库连接:'3 / 3',CPU:'可能并不高'},'Connection c = dataSource.getConnection();','线程栈显示连接池等待；CPU 低不能排除资源瓶颈。'),
    step('新请求 I','工作线程已满，新请求在容器的接收/调度边界等待或被拒。',{工作线程:'8 / 8','查询 I':'尚未进入业务',额外延迟:'入口排队'},'// Connector 的接收限制与线程池队列依实际配置','不要把 acceptCount、maxConnections、maxThreads 当同一个参数。'),
    step('连接池','导出释放连接，等待查询依次借到并执行。',{导出:'已完成',连接:'开始归还再借出',延迟:'服务时间 + 排队'},'// close() 在池代理上通常是归还物理连接','观测 Hikari active、idle、pending、acquisition time 与 SQL 持有时间。'),
    step('容量治理','缩短持连接时间，对长任务限流或隔离；压测再调池。',{改进:'减少争用',验证:'吞吐 + p95 + DB负载',全局:'所有实例池容量总和'},'// 流式导出、分页、异步作业；避免在事务内等待远程 API','增加线程可能只增加等待者；增加连接可能把数据库压垮。')
  ],'画出谁持线程、谁持连接、谁等待谁，比背默认参数更有效。','独立连接池也必须受数据库总预算约束；异步只是移动等待，不能创造 DB 容量。',['pool','executor']),
  scenario('executor-admission',1,'批量图片处理：线程池先入队还是先扩线程？','core=2、max=4、queue=2，七个长任务几乎同时提交会发生什么？','原创 JDK ThreadPoolExecutor 模型。七次 execute 顺序提交；提交过程中任务均未结束；默认 AbortPolicy。',[
    step('提交线程','提交任务 1、2，小于核心线程数，启动两条核心线程。',{运行:'1, 2',队列:'空',线程数:'2'},'new ThreadPoolExecutor(2,4,60,SECONDS,\n  new ArrayBlockingQueue<>(2),\n  new ThreadPoolExecutor.AbortPolicy());','核心数量指 worker 数；不是先创建到 max。'),
    step('提交线程','提交 3、4，核心线程已满，进入有界队列。',{运行:'1, 2',队列:'3, 4',线程数:'2'},'executor.execute(task3);\nexecutor.execute(task4);','队列还能接收时，不因 max=4 就立即扩容。'),
    step('线程池','提交 5，队列满且 worker 未到 max，新增非核心线程直接执行 5。',{运行:'1, 2, 5',队列:'3, 4',线程数:'3'},'executor.execute(task5);','后提交的 5 可以先于排队的 3 开始；不能据此承诺全局 FIFO。'),
    step('线程池','提交 6，再建一条线程，达到 max。',{运行:'1, 2, 5, 6',队列:'3, 4',线程数:'4'},'executor.execute(task6);','瞬时可容纳未完成任务是 4 运行 + 2 排队。'),
    step('拒绝策略','提交 7，队列和线程都满，AbortPolicy 抛拒绝异常。',{运行:'4 个',排队:'2 个',任务7:'拒绝'},'try { executor.execute(task7); }\ncatch (RejectedExecutionException e) {\n  // 返回明确过载结果或安排有界重试\n}','CallerRunsPolicy 会让提交线程执行；在 HTTP 线程上可能拖慢请求。'),
    step('生命周期','任务完成后消费队列；应用停止时关池并等待或取消。',{任务:'逐步完成',停机:'停止接收',资源:'可回收'},'executor.shutdown();\nexecutor.awaitTermination(30, TimeUnit.SECONDS);','异常要记录；submit 的异常保存在 Future 中，需要观察结果。')
  ],'先核心线程 → 尝试入队 → 队列满才扩至最大 → 拒绝，是这组配置的推演顺序。','无界队列常使 maxPoolSize 无法发挥预期作用；队列越长尾延迟和内存风险越大。',['executor']),
  scenario('last-stock',2,'最后一件库存：两个事务怎样竞争？','两个人同时购买 stock=1，怎样保证只成功一单？','原创 MySQL InnoDB 案例。sku 是唯一索引；UPDATE 和 INSERT 同一事务；同库；不含支付外部副作用。',[
    step('事务 A','条件更新，当前库存满足 >0，获得行锁并减一。',{已提交库存:'1',A未提交库存:'0',A影响行数:'1'},'UPDATE sku SET stock = stock - 1\nWHERE id = 7 AND stock > 0;','关注 affected rows，而非先 SELECT 再无条件覆盖。'),
    step('事务 B','同样条件 UPDATE 遇到 A 的行锁，等待。',{B:'等待 A',已提交库存:'1',成功订单:'0'},'UPDATE sku SET stock = stock - 1\nWHERE id = 7 AND stock > 0;','B 不是凭之前快照立即成功；写操作的锁与快照读要分开理解。'),
    step('事务 A','确认影响一行，插入订单。',{A订单:'未提交',A库存:'0',锁:'A 仍持有'},'if (changed != 1) throw new SoldOutException();\nINSERT INTO orders(id, sku_id) VALUES (101, 7);','库存与订单必须共用事务边界；Mapper 分开不等于事务分开。'),
    step('事务 A','提交库存和订单，释放行锁。',{已提交库存:'0',已提交订单:'101',A结果:'成功'},'COMMIT;','以提交为持久化边界；不要在提交前向消费者宣称订单已持久化。'),
    step('事务 B','获得执行机会后条件不再满足，影响零行。',{B影响行数:'0',库存:'0',B结果:'售罄'},'if (changed == 0) throw new SoldOutException();','有锁并不代表每个竞争者都会成功；条件保护不变量。'),
    step('异常分支','若 A 插单失败，事务回滚扣减；B 可重新竞争剩余库存。',{原子性:'库存与订单同成同败',日志:'记录业务请求ID',支付:'另建可靠流程'},'@Transactional\npublic Order place(long skuId) { /* 两次写 */ }','用真实数据库并发测试校验 stock ≥ 0 与成功订单数，而非只跑单线程。')
  ],'数据库内条件更新 + 检查影响行数 + 明确事务，保护最后一件库存。','缓存库存不能替代数据库最终约束；应用 synchronized 无法覆盖另一 JVM。',['locks','tx']),
  scenario('rollback-boundary',2,'转账抛了异常，数据库为什么没有回滚？','调用 debit 后抛 checked exception，或同类调用带 @Transactional 的方法，边界在哪？','原创 Spring 默认 proxy 模式案例。明确默认回滚规则；未采用全局 ALL_EXCEPTIONS 改写；同库事务。',[
    step('Controller','外部经注入的代理调用 transfer。',{调用:'外部 → 代理',目标:'TransferService',金额:'100'},'transferService.transfer(1L, 2L, 100);','先判断进入的是代理还是对象本身，不只看方法有无注解。'),
    step('事务代理','匹配 @Transactional 并开启事务，再进入目标方法。',{事务:'活动',连接:'绑定当前事务',autoCommit:'由管理器控制'},'@Transactional(rollbackFor = Exception.class)\npublic void transfer(...) throws Exception { ... }','rollbackFor 显式覆盖本例 checked exception；具体规则以项目配置为准。'),
    step('业务目标','先扣款后加款；中途若失败须保证两次写一起回滚。',{扣款:'未提交',加款:'准备执行',余额约束:'不能只成功一边'},'debit(from, amount);\ncredit(to, amount);','数据库约束、更新行数和业务校验仍需存在。'),
    step('异常','异常从方法抛回代理，代理根据规则决定 rollback。',{异常:'checked Exception',显式规则:'回滚',默认对照:'通常不自动回滚 checked exception'},'throw new Exception("credit failed");','默认 RuntimeException/Error 回滚；可配置 checked exception 与全局规则。'),
    step('对照：同类调用','无事务外部方法 this.transfer() 不经过代理，本例无法开启注解事务。',{调用:'this → 目标',代理:'绕过',边界:'缺失'},'public void batch() {\n  this.transfer(...); // 本例无外层事务\n}','若外层已有事务，内部代码仍在外层事务中；不能笼统说“自调用没有任何事务”。'),
    step('修复与验证','拆为独立业务 Bean 经代理调用，异常向边界传播，集成测试查询余额。',{修复:'明确代理入口',测试:'失败后余额不变',风险:'吞异常会改变回滚判定'},'// 另一 Bean 注入 TransferService 后调用 transfer','不要只 mock Mapper；真实 DB 测试才能验证提交与回滚。')
  ],'事务是运行时拦截边界与回滚规则，注解本身不是自动魔法。','在事务里 catch 并吞掉异常，代理可能看到正常返回；rollback-only 场景又可能在提交时异常。',['tx','rollback']),
  scenario('session-two-jvms',3,'登录在 A，下一次落到 B：Session 为什么丢了？','轮询负载均衡把已登录用户送到 B，B 为什么提示未登录？','原创双实例 Servlet Session 模型。A/B 各自内存保存会话；无会话共享；Cookie 同域发送。',[
    step('浏览器','提交登录，请求带用户名密码。',{Cookie:'尚无 SID',请求:'POST /login',用户:'u42'},'POST /login','认证数据通过 HTTPS 传输；演示不存储真实密码。'),
    step('负载均衡','首个请求轮询选择 A。',{后端:'A',实例:'A 与 B 两个 JVM',策略:'round robin'},'upstream apps { server a:8080; server b:8080; }','NGINX 选择后端，与 Java 的对象是否共享无关。'),
    step('实例 A','认证成功，在 A 内存创建 Session，返回 Cookie。',{A会话:'SID1 → u42',B会话:'空',响应:'Set-Cookie: JSESSIONID=SID1'},'request.getSession().setAttribute("uid", 42L);','Cookie 持会话标识；登录上下文实际放服务端。'),
    step('负载均衡','下一次 /me 轮询到 B，浏览器携带同一 Cookie。',{后端:'B',Cookie:'SID1',请求:'GET /me'},'Cookie: JSESSIONID=SID1','Sticky session 改善路由亲和，但实例下线仍要考虑会话恢复。'),
    step('实例 B','B 内存查不到 SID1，判为未登录。',{A:'仍有会话',B:'未找到',返回:'401'},'HttpSession s = request.getSession(false);','不要把 Cookie 丢失与服务端状态未共享混为一谈。'),
    step('共享身份设计','选择共享 Session 或可验证 Token，并定义过期、撤销、故障处理。',{共享:'集中存储或认证协议',失效:'明确 TTL/撤销',安全:'签名验证与权限校验'},'// Spring Session / 外部身份服务；根据需求选择','JWT 不自动解决撤销、权限更新、密钥轮换；Token 验证仍需安全设计。')
  ],'扩容前列出所有 JVM 本地状态：Session、锁、缓存、定时任务、幂等表。','亲和路由不等于共享状态；本地 synchronized 不会跨实例互斥。',['lb','jmm']),
  scenario('deployment-connections',3,'3 台扩到 10 台：数据库连接为何突然耗尽？','每实例池 max=30；数据库可分配给该服务的预算为 200，扩容会发生什么？','原创预算模型。预算已扣除管理/其他应用/安全余量；maximumPoolSize 是上限，实际建立量随实现和配置。',[
    step('容量计划','三个实例的连接上限为 90，处于服务预算内。',{实例:'3',每池上限:'30',总上限:'90 / 200'},'spring.datasource.hikari.maximum-pool-size=30','不要拿数据库 max_connections 全部给一个服务。'),
    step('流量触发','扩至十台，应用计算能力增加，但池的总上限变为 300。',{实例:'10',总上限:'300',数据库预算:'200'},'// 10 × 30 = 300','实例数与每实例连接数共同决定上游压力。'),
    step('滚动部署','新旧实例重叠时，上限可能比稳定态更高。',{旧实例:'仍承接',新实例:'已启动',峰值:'依 maxSurge / drain'},'// 稳定态 10 台不代表部署期间最多 10 台','检查部署策略与连接预热，避免只计算稳态。'),
    step('数据库','连接获取或建立开始失败，应用重试进一步增加请求。',{连接:'预算不足',请求:'获取连接失败',CPU:'不一定是首要瓶颈'},'// 记录 SQLState、连接获取超时、DB 当前连接','区分无法建立连接与已建立连接上的慢 SQL。'),
    step('限额修正','十实例每池不超过 20 是预算上限；仍需预留部署重叠并压测。',{算术上界:'20',最终配置:'通常更小并测量',性能:'不是公式保证'},'// 200 / 10 = 20；预留新旧实例重叠','预算能证明不会超配，不能证明这一大小最优。'),
    step('部署验证','就绪探针、流量切换、排空与优雅停机配合，检查总连接峰值。',{就绪:'可接流量',排空:'完成在途请求',指标:'池等待/DB连接/p95'},'// readiness → route → drain → shutdown','探活接口能返回 200 不代表数据库还有容量。')
  ],'横向扩容必须同步检查共享依赖预算，应用变多不代表系统瓶颈消失。','无节制扩容与重试可能把可恢复的数据库压力升级为连锁故障。',['pool','lb']),
  scenario('outbox-redelivery',4,'订单落库后发消息：两个失败窗口与一次重复','数据库提交后服务崩溃，消息没发；消费者提交后崩溃，消息又来。怎样对账？','原创事务 Outbox 案例。订单与 outbox 在同一 MySQL 事务；转发至少一次；消费者 inbox 唯一键与业务写在同一事务。',[
    step('订单事务','同时写订单和待发事件，生成稳定 eventId。',{订单:'O101 未提交',事件:'E101 未提交',边界:'同一 DB 事务'},'INSERT INTO orders(id) VALUES (101);\nINSERT INTO outbox(event_id, aggregate_id) VALUES ("E101",101);','只有业务写与事件记录共同提交，才关闭“订单有了事件没了”窗口。'),
    step('数据库','提交两条记录后进程崩溃，事件仍持久化。',{订单:'已提交',outbox:'待发送',应用:'崩溃'},'COMMIT;','可以恢复扫描或 CDC；不要把内存事件当可靠事件记录。'),
    step('Outbox 转发器','读取记录发给 Broker；发布确认只说明发布侧约定已达成。',{消息:'E101',Broker:'已接收',消费者:'尚未完成'},'// CDC/轮询转发 → publisher confirm','publisher confirm 不表示消费者业务已成功。'),
    step('消费者事务','唯一 inbox 写入成功，再更新自己的业务数据并提交。',{inbox:'E101',业务:'通知任务已记录',数据库:'同事务提交'},'INSERT INTO inbox(event_id) VALUES ("E101");\nINSERT INTO notification_jobs(order_id) VALUES (101);\nCOMMIT;','唯一约束实现并发重复检测；只查再插仍存在竞争。'),
    step('崩溃与重投','提交后 ack 前断开，Broker 重新投递 E101。',{业务:'已提交',ack:'未收到',消息:'重复到达'},'// commit → crash → no ack → redelivery','“至少一次”意味可重复；redelivered 标志不是业务去重的唯一凭证。'),
    step('幂等消费者','重复 inbox 插入命中唯一键，确认此前已处理，安全 ack。',{第二次效果:'不重复创建任务',ack:'完成',外部副作用:'仍需单独幂等'},'// 捕获已处理 eventId → 核对语义 → ack','外部发短信/扣费不受本地事务保护；用外部幂等键或另一个可靠任务流程。')
  ],'Outbox 保障可发送，consumer inbox 保障重复时本地效果可去重；不能宣称整个分布式系统自动 exactly-once。','转发器确认后未记发送状态也可能重复；毒消息需有界重试、死信和人工对账。',['outbox','rabbit']),
  scenario('replica-read',4,'写完资料立即刷新：为什么又看到旧昵称？','主库昵称更新成功，立刻读从库却是旧值，是否说明事务失败？','原创异步复制时序。主从复制延迟教学设为 3 秒；真实延迟动态变化，不把所有 MySQL 复制等同固定 3 秒。',[
    step('客户端','提交新昵称 neo。',{旧昵称:'old',新昵称:'neo',操作:'更新'},'PUT /users/42 {"nickname":"neo"}','业务要求需要明确：强 read-your-writes 还是接受短暂陈旧？'),
    step('主库','更新并提交，应用返回成功。',{主库:'neo',从库:'old',响应:'200'},'UPDATE users SET nickname = "neo" WHERE id = 42;\nCOMMIT;','主库提交与每个副本应用完成不是同一时间点。'),
    step('复制链路','binlog 事件传输并由副本应用，当前仍有积压。',{事件:'待副本应用',延迟:'教学值 3s',从库:'old'},'// 主 binlog → 接收 → relay log → 应用','复制存在传输与应用环节；要监测复制状态而非只看 ping。'),
    step('读路由','读写分离将立即查询送往从库。',{查询目标:'副本',读结果:'old',误解:'不是已提交写回滚'},'SELECT nickname FROM users WHERE id = 42;','查数据库目标与 trace，确认读了哪一台。'),
    step('一致性策略','对关键写后读路由主库，或等待确定复制位置再读副本。',{当前要求:'读到本人的写',选择:'主库或复制位置屏障',代价:'容量/延迟'},'// 关键读选主；或以复制位点/GTID 实现可验证等待','固定等待 3 秒不能保证未来也够；粘主窗口只是有条件折中。'),
    step('副本追上','副本应用提交后返回 neo；后台非关键读继续使用副本。',{主库:'neo',从库:'neo',关键读:'已满足'},'// 根据业务等级定义一致性与降级','缓存也可能陈旧；读主只解决复制方向的问题，不自动刷新缓存。')
  ],'把提交、复制、缓存与读取目标画在一条时间轴，陈旧读取就能定位。','主从切换还需数据追平、故障判定、旧主隔离；多副本不是数据一致性的自动保证。',['replica']),
  scenario('retry-budget',5,'下游超时：超时后是否应该立刻重试？','订单调用支付超时，本次支付可能已生效；层层重试为什么让事故更严重？','原创跨服务教学案例，数学示例来自 AWS。每层“总尝试 3 次”包含首次；不是首次 + 3 次重试。支付端假设支持幂等键。',[
    step('订单服务','生成业务操作键 K101，并给跨服务调用分配截止时间。',{总预算:'例如 1500ms',操作键:'K101',语义:'同一次支付'},'Idempotency-Key: K101\n// propagate deadline and trace context','示例毫秒值不是生产推荐；应按依赖延迟与业务 SLA 决定。'),
    step('支付服务','支付已经提交，但返回包丢失。',{支付:'已提交',订单视角:'等待响应',结果:'未知'},'// durable payment(K101) → response lost','网络超时告诉你没及时拿到结果，不告诉你副作用是否发生。'),
    step('订单服务','在同一操作键下查询结果或有界重试。',{第二次键:'仍 K101',参数:'保持一致',风险:'重放'},'// retry same operation with same key','重新生成 key 等于新操作；幂等键必须关联业务意图。'),
    step('支付服务','匹配已完成操作并返回此前结果，不再次扣费。',{扣费次数:'1',返回:'原操作结果',并发:'唯一约束/原子状态'},'// key + semantic hash + state + durable result','具体实现需处理中间态与并发；不是一个内存 Map 就够。'),
    step('调用链','五层各总尝试三次会对末端形成最多 243 次调用。',{层数:'5',总尝试:'3 / 层',最坏放大:'3^5 = 243'},'// 治理：指定一处重试，限制次数与总预算','这是假设所有上层重试触发完整下游链的最坏模型，真实次数依失败位置。'),
    step('韧性策略','退避加抖动、重试预算、并发隔离、必要时快速降级。',{退避:'避免同刻重试',预算:'不能超总截止时间',降级:'明确业务语义'},'// retryable? idempotent? time-left? retry-budget?','无库存降级不能伪造“订单成功”；状态未知时保留待确认并对账。')
  ],'先判定操作是否可安全重复，再安排次数、截止时间与退避；观测实际尝试数。','客户端取消不保证下游停止执行；熔断、限流、隔离和重试分别解决不同问题。',['retry','stripe']),
  scenario('trace-critical-path',5,'总耗时 300ms，为什么两个 span 加起来是 440ms？','订单 span 300ms，同时库存 220ms 和推荐 220ms。能直接相加判定最慢环节吗？','原创固定时序。父请求 0–300ms；两次并行子调用均 20–240ms；其他父内工作 80ms。',[
    step('网关','接收请求并创建根 trace，将上下文传入订单。',{trace:'T101',根区间:'0–300ms',parent:'无'},'traceparent: 00-<trace-id>-<span-id>-01','traceId 关联，spanId 区分一次操作；日志要带上下文。'),
    step('订单服务','在 20ms 发起库存与推荐两个并行调用。',{库存:'20–240ms',推荐:'20–240ms',并发:'重叠'},'// 两个受控并发调用；保留上下文传播','异步线程与消息也需传播上下文，不能只跨 HTTP Header。'),
    step('库存服务','记录自身 SQL/锁等待/序列化子 span。',{库存总耗时:'220ms',数据库:'可能含等待',范围:'库存父 span 内'},'// span: inventory.db.query','父 span 已包含子 span 的墙钟时间；不能再全部相加。'),
    step('推荐服务','同时完成另一条 220ms 分支。',{推荐:'220ms',库存:'220ms',关键路径:'并行阶段 max=220ms'},'// 并行等待两个结果','只对确实并行且同时起止的本例取 max；有依赖的串行调用应沿路径累计。'),
    step('订单服务','两分支结束后组装响应，根 span 在 300ms 完成。',{根耗时:'300ms',子耗时和:'440ms',父自身:'本例 80ms'},'// 20ms 前置 + 220ms 并行 + 60ms 后置','自耗时应扣子区间的并集，本例不是 300 - 440。'),
    step('诊断','结合错误率、尾延迟、队列与资源指标，定位关键路径。',{结论:'并行不相加',证据:'时间轴 + 资源指标',限制:'跨主机时钟/采样'},'// compare trace timelines, p95/p99 and pool waiting','单条 trace 解释该请求；统计分位与样本代表性仍需指标。')
  ],'使用父子关系与时间区间计算关键路径，不用 span 总和替代端到端延迟。','HTTP 200 不保证业务成功；采样遗漏与时钟偏差也会影响观测，需要业务状态与指标交叉验证。',['trace'])
];

const question = (id,stage,title,type,difficulty,prompt,answer,explanation,trap,followup,source,extra={}) => ({id,stage,title,type,difficulty,prompt,code:'',language:'plaintext',options:[],answer,explanation,trap,followup,source:R[source][1],...extra});
export const questionBank = [
  question('s0-q1',0,'Filter 与 MVC 谁先到？','选择题','基础','同步 Servlet MVC 正常请求，哪条路径正确？',1,'Filter 包围 Servlet 调用；MVC 处理链在 DispatcherServlet 内寻找并调用处理器。','Interceptor 与 Filter 并不覆盖完全相同的请求范围。','静态资源或安全 Filter 提前拒绝时，Controller 是否运行？','mvc',{options:['Controller → Filter → Mapper','Filter → DispatcherServlet → HandlerAdapter → Controller','Mapper → DispatcherServlet → Filter','每个请求都必须到 Controller']}),
  question('s0-q2',0,'HTTP 404 会使 fetch reject 吗？','代码阅读','基础','服务端返回 404，下面代码会走 catch 吗？','通常不会因 HTTP 404 本身进入 catch；先检查 response.ok。','fetch resolve 得到 Response；网络错误等才导致 Promise reject。JSON 解析错误可能另行抛错。','HTTP 层成功得到响应，与业务操作成功不同。','若 404 返回 HTML，response.json() 会怎样？','fetch',{language:'javascript',code:'try {\n  const r = await fetch("/api/articles/404");\n  console.log(r.status);\n} catch (e) { console.log("failed"); }'}),
  question('s0-q3',0,'proxy_pass 尾部斜杠','代码阅读','进阶','访问 /api/articles/42，给出的 location 转发成什么路径？','/articles/42。','proxy_pass 包含 URI / 时，用该 URI 替换匹配的 location 前缀；本题为普通前缀 location。','正则 location、变量 URI、rewrite 会影响规则，不能盲目套用。','移除 proxy_pass 中端口后的 /，再推演一次。','proxy',{language:'nginx',code:'location /api/ {\n  proxy_pass http://app:8080/;\n}'}),
  question('s0-q4',0,'预检失败发生在哪个边界？','选择题','基础','跨源 JSON POST 的 OPTIONS 被拒。最先应查看什么？',0,'检查预检响应、允许来源/方法/头和安全过滤策略，实际 POST 可能根本未发送。','此时查询 SQL 索引无法解决浏览器预检失败。','CORS 放行以后是否仍需要登录鉴权？','cors',{options:['OPTIONS 请求与 CORS 响应头','MyBatis resultMap','JVM 堆大小','立即换成微服务']}),
  question('s0-q5',0,'参数占位符如何防注入？','代码阅读','基础','id 来自外部输入，两种写法有什么区别？','#{id} 用绑定参数；${id} 进行文本替换，不能直接用于不可信输入。','参数绑定将数据与 SQL 结构分开；列名/排序方向一般需要白名单而不是绑定占位符。','占位符不能替代权限校验；用户可合法请求别人的 id。','动态 ORDER BY 字段该怎样校验？','mybatis',{language:'sql',code:'SELECT * FROM article WHERE id = #{id};\nSELECT * FROM article WHERE id = ${id};'}),
  question('s0-q6',0,'一个连接等于一个业务线程？','简答题','进阶','为什么不能用“连接数 = 并发请求数 = 工作线程数”解释 Tomcat？','keep-alive 可空闲复用；HTTP/2 一个连接可多流；同步请求执行占工作线程，但空闲连接不必长期独占工作线程。','分开记录连接、活动请求与执行线程，并根据协议和容器实现看调度。','异步 Servlet 与同步 MVC 的线程占用又不同。','把 maxConnections、maxThreads、acceptCount 分别放到图上。','mvc'),
  question('s0-q7',0,'JSON 为什么没有返回？','故障推理','进阶','Controller 已返回对象，客户端却拿到 500。还能失败在哪？','消息转换/序列化、异常处理、响应写出都可能失败；检查转换器异常、循环引用、类型与连接状态。','“进入了 Controller”只证明请求走到这里，后面的编码与网络写出仍有失败边界。','不要根据断点走完业务就认定响应成功。','业务事务已提交而响应丢失，客户端重试写操作会怎样？','mvc'),
  question('s0-q8',0,'网络耗时计算的前提','计算题','进阶','教学 HTTP/1.1 新连接模型：DNS 20ms，TCP 1 RTT，TLS 1 RTT，HTTP 往返 1 RTT，Java 42ms；RTT=100ms。总计？','362ms；若已复用连接且 DNS 不再发生，则此模型为 142ms。','20 + 100 + 100 + 100 + 42；明确串行与握手假设，TLS版本和缓存会改变真实时序。','这是模型，不是对 HTTP/2、HTTP/3 或真实网络的通用公式。','DNS 缓存但连接新建时哪些项还存在？','retry'),

  question('s1-q1',1,'volatile 的 count++','代码阅读','基础','两个线程各执行 1000 次，下列 count 一定为 2000 吗？','不保证。读取、加一、写回是复合操作，volatile 不把整个递增变原子。','可见性/有序性与原子性要分开；用 AtomicInteger.incrementAndGet 或同一锁保护。','线程完成仍需 join 等完成同步，不能立刻读就预期最终值。','画出 A/B 都读到 7 后都写回 8 的交错。','jmm',{language:'java',code:'volatile int count = 0;\nvoid add() { count++; }'}),
  question('s1-q2',1,'线程池第七个任务','计算题','进阶','core=2,max=4,queue=2；七次 execute 期间没有任务完成；AbortPolicy。运行/排队/拒绝各多少？','运行 4、排队 2、拒绝 1。','先核心 2，入队 2，再新增到 max 4，第七次拒绝。','只有在题目假设任务不结束、提交顺序确定时此账本成立。','无界队列下 max=4 会按预期扩容吗？','executor'),
  question('s1-q3',1,'连接池吞吐上限','计算题','基础','3 个连接，每次持连接 200ms，假设无其他瓶颈。理论吞吐上限？','约 15 次/秒。','3 / 0.2 = 15；指持连接段的容量，不是必然达到的端到端 TPS。','SQL 时间不总等于连接持有时间；事务内还可能有别的工作。','持连接时间变成 600ms，增加 HTTP 线程能恢复 15/s 吗？','pool'),
  question('s1-q4',1,'CPU 低为什么还超时？','故障推理','进阶','CPU=20%，连接 active 已满，pending 很高，HTTP p95 上升。先调查什么？','连接持有时间、慢 SQL、锁等待、长事务、泄漏，以及实例连接总预算。','请求可能堵在等待 I/O 或资源，CPU 使用率不是唯一容量指标。','一味加线程只会扩大等待队列。','怎样区分 DB 执行慢与池中拿不到连接？','pool'),
  question('s1-q5',1,'无界队列的风险','选择题','基础','ThreadPoolExecutor 核心已满而队列始终可入队，后续任务怎样安排？',1,'一般先入队，可能长时间不创建超过核心数量的线程，max 不是主动扩线程的目标。','队列可容纳任务不等于业务能在 SLA 内完成。','有界队列与 CallerRunsPolicy 如何产生背压？','executor',{options:['立即全部扩至 max','尝试入队','立即拒绝所有任务','每个任务创建一个线程']}),
  question('s1-q6',1,'submit 吞掉了异常？','代码阅读','进阶','任务抛异常，但日志里没看到。调用方应检查什么？','submit 的任务异常通常保存在 Future，Future.get 会以 ExecutionException 暴露原因；需要收集结果或配置统一异常处理。','忽略 Future 会漏掉任务失败；execute 与 submit 的可观察异常行为不同。','不要把“没打印堆栈”当作任务成功。','如何给批处理记录失败任务并做有限重试？','executor',{language:'java',code:'executor.submit(() -> {\n  throw new IllegalStateException("failed");\n}); // returned Future ignored'}),
  question('s1-q7',1,'单例 Controller 的可变字段','代码阅读','基础','请求 A/B 同时访问，下列字段会怎样？','多个请求共享实例字段，可能互相覆盖；把请求状态放局部变量或明确的请求范围对象。','Spring Controller 常为单例，线程安全取决于状态与操作，不由注解自动保证。','ThreadLocal 在线程池内要 remove，异步跨线程也不能直接假定继承。','数据库连接是否该放 Controller 成员字段？','scope',{language:'java',code:'@RestController\nclass DemoController {\n  private String currentUser;\n  String hello(String name) {\n    currentUser = name;\n    return currentUser;\n  }\n}'}),
  question('s1-q8',1,'Little 定律要用哪个耗时？','计算题','进阶','稳定系统完成率 100/s，平均端到端响应 0.2s。平均系统内请求数？','约 20；L = λW，W 包含该边界内等待与服务。','必须稳定并对同一系统边界使用长期平均量；p95 不能直接代替平均 W。','过载积压增长时不能硬套稳态算式。','若观察到 200 个请求持续积压，说明哪项前提可能失效？','little'),

  question('s2-q1',2,'先查库存再覆盖','代码阅读','基础','A/B 都读到 stock=1，随后各将 stock 写为 0 并插单。结果可能是什么？','stock=0 但生成两单，超卖被最终库存值掩盖。','两个调用的检查与写入不是一个受保护原子决策。条件更新并检查影响行数可保护扣减。','没有出现负库存不代表没有超卖。','为什么只给 readStock() 加 synchronized 不够？','locks',{language:'java',code:'int s = mapper.readStock(7);\nif (s > 0) {\n  mapper.setStock(7, s - 1);\n  mapper.insertOrder(7);\n}'}),
  question('s2-q2',2,'RR 第二次读看到什么？','SQL 推演','进阶','InnoDB RR：A 开事务并普通 SELECT 得到 1；B 更新为 2 并提交；A 再普通 SELECT，未自己修改该行。结果？','通常仍为 1，同一事务复用首次一致性读建立的快照。','本题为普通一致性读；READ COMMITTED 每次一致性读可取新快照。','FOR UPDATE 是锁定读，不能套用相同快照答案。','将 A 第二次读换成 SELECT ... FOR UPDATE，推演区别。','snapshot',{language:'sql',code:'-- A: START TRANSACTION; SELECT v FROM t WHERE id=1;\n-- B: UPDATE t SET v=2 WHERE id=1; COMMIT;\n-- A: SELECT v FROM t WHERE id=1;'}),
  question('s2-q3',2,'自调用事务的准确答案','选择题','进阶','默认 proxy 模式，外部调用无事务 batch()，它执行 this.save()，save 有 @Transactional。',0,'同类自调用绕过代理；本题没有外层事务，所以 save 注解不能在这里开启事务。','若 batch 本身通过代理已有事务，内部写仍可能在该外层事务中。','如何拆 Bean 或使用编程式事务明确边界？','tx',{options:['save 注解不会在此调用开启事务','注解自动创建任何事务','所有 SQL 永远不能回滚','必须把 Controller 改成原型作用域']}),
  question('s2-q4',2,'checked exception 默认回滚？','代码阅读','进阶','默认 Spring 回滚设置下，方法经代理调用且抛 checked Exception，默认是否回滚？','默认一般不因 checked exception 回滚；显式 rollbackFor 或项目全局回滚策略可改变结果。','默认 RuntimeException/Error 会触发回滚；需查看版本与全局配置，不能背成绝对规则。','catch 后返回正常值也会改变代理看到的结果。','异常被捕获但事务已 rollback-only，提交时可能发生什么？','rollback',{language:'java',code:'@Transactional\npublic void write() throws Exception {\n  mapper.insert(...);\n  throw new Exception("checked");\n}'}),
  question('s2-q5',2,'转账死锁','SQL 推演','进阶','A 先锁账户 1 再要 2；B 先锁 2 再要 1。怎样处理？','可能形成死锁；数据库检测后回滚一个受害事务。统一加锁顺序并对整个可重试事务做有界重试。','死锁是循环等待，不只是 SQL 慢；记录 deadlock 信息定位锁顺序。','重试最后一条 SQL 可能破坏整笔业务；事务外副作用必须可重复或可靠补偿。','若两笔转账都按账户 id 升序加锁，改善在哪里？','deadlock',{language:'sql',code:'-- A locks id=1, then id=2\n-- B locks id=2, then id=1'}),
  question('s2-q6',2,'删缓存为什么还读旧值？','故障推理','高级','读线程缓存 miss 读到旧 DB 值，写线程提交新值并删缓存；读线程随后回填旧值。会发生什么？','旧值可能重新写回缓存。应明确一致性要求，考虑版本校验、TTL、可靠失效事件或关键读绕开缓存。','Cache-aside 的读写交错有窗口；单次删除不能证明强一致。','延迟双删也受调度和延迟上界影响，不是数学保证。','画出 invalidate 和 stale put 的交错，怎样识别过期版本？','cache'),
  question('s2-q7',2,'锁定读为什么需要事务？','简答题','基础','SELECT ... FOR UPDATE 后立即 autocommit，再根据结果更新，有何问题？','锁无法持续保护后续业务决策；显式事务中锁保持到提交或回滚，才能覆盖读取与修改边界。','本题需把读、业务判断与写放同一事务；也可用条件 UPDATE 缩短边界。','锁范围受索引、搜索条件和隔离级别影响，不是永远只锁一行。','WHERE 非索引字段筛选时可能扩大什么成本？','locks'),
  question('s2-q8',2,'索引能治所有慢查询吗？','简答题','进阶','给 status 建索引后查询仍慢，应验证什么？','执行计划、选择性、扫描行数、回表/排序、实际行数、锁等待与返回量；对照真实数据分布。','索引有写入和空间成本；低选择性谓词或大结果集未必受益。','不要仅看“用了索引”就判断性能好。','组合索引的列顺序怎样联系等值筛选、范围与排序？','index'),

  question('s3-q1',3,'synchronized 能防跨 JVM 超卖？','选择题','基础','A、B 两实例各有 synchronized place()，能互相锁住吗？',1,'Java monitor 属于具体 JVM 内对象；A/B 没有共享该 monitor。','可以由数据库条件更新、约束或明确的分布式协议保护共享业务。','锁 Redis 时过期和长任务怎样影响正确性？','jmm',{options:['能，因为类名相同','不能，它们持有不同 JVM 内的锁','只能保护所有数据库','会自动创建全局事务']}),
  question('s3-q2',3,'总连接预算','计算题','基础','8 个实例，池上限 25；滚动部署可额外同时启动 2 个新实例。峰值池上限？','250；(8 + 2) × 25。','按新旧重叠计算，且数据库还有其他应用连接；这是配置上限而非必然活动数。','只用稳态 200 会漏掉部署瞬间预算。','数据库分配预算 220，应如何调整并验证？','pool'),
  question('s3-q3',3,'Session 在哪？','故障推理','基础','Cookie JSESSIONID 已发送，B 仍返回 401，A 正常，最可能排查什么？','Session 是否只存在 A 本地，以及请求实际路由；再核对 Cookie 域、路径和失效。','同一 Cookie 不保证每台服务器都能找到相同服务端状态。','Sticky session 减少切换，但故障迁移仍需恢复策略。','共享 Session 存储失效时能否直接放行登录？','lb'),
  question('s3-q4',3,'least_conn 与最快响应','选择题','进阶','least_conn 是否保证下一次请求落到当前真实响应最快的机器？',2,'它依据活动连接及权重选取，并不是对未来响应时间的完美预测。','keep-alive、请求代价和协议都会影响连接数与业务负载的关系。','如何用延迟、错误率和并发指标验证策略？','lb',{options:['是，总能精确预测','只看 CPU，所以保证','否，活动连接只是负载信号','它等同静态轮询']}),
  question('s3-q5',3,'滚动发布的就绪与存活','简答题','进阶','readiness、liveness 与优雅排空解决什么？','就绪决定是否接收新流量；存活帮助发现进程失常；排空让在途工作完成后再退出。','简单 200 探活不代表全部依赖可靠；探针也要避免导致重启风暴。','将依赖偶发故障一律作为存活失败可能反复杀掉健康进程。','长连接或队列消费者怎么配合排空？','probe'),
  question('s3-q6',3,'定时任务重复执行','故障推理','进阶','单体每天关单任务扩成三个实例后，同一订单收到三次关闭操作。怎样设计？','外部调度、任务租约/锁、分片与数据库幂等状态转移配合，确保重复执行无重复副作用。','本地定时器会在各实例运行；调度只减少重复，业务仍需防重。','进程暂停超过租约后旧持有者可能继续执行，需要考虑 fencing 等机制。','UPDATE ... WHERE status="PENDING" 的影响行数有什么作用？','redis'),
  question('s3-q7',3,'JWT 是否天然无状态且可撤销？','简答题','进阶','JWT 能否同时无需服务端状态并立即撤销任意用户的既有 Token？','通常需要短过期、撤销列表、版本检查或集中会话等附加设计；可验证签名不等于撤销能力。','校验签名、算法、issuer、audience、过期和权限；权限更新如何传播需明确。','解码不等于验证；Cookie/Token 都需考虑 XSS、CSRF 与传输安全。','密钥轮换时旧 Token 怎样过渡？','jwt'),
  question('s3-q8',3,'Redis 锁误删','代码阅读','高级','A 锁过期，B 已获取新锁；A 随后执行 DEL，有何风险？','A 会误删 B 的锁；释放应原子核对随机 owner token，仅释放自己的锁。','还需考虑锁过期后 A 继续做业务；owner 校验释放不能单独解决陈旧持有者写入。','“SET NX EX + DEL”不能概括全部正确性条件。','业务存储能否使用递增 fencing token 拒绝过期持有者？','redis',{language:'plaintext',code:'A: SET lock tokenA NX PX 1000\n... lock expired ...\nB: SET lock tokenB NX PX 1000\nA: DEL lock'}),

  question('s4-q1',4,'Confirm 与 Ack','选择题','基础','收到 publisher confirm，能够得出什么？',0,'确认发布侧与 Broker 的约定，不表示消费者已经提交业务事务。','consumer ack 属于消费端确认；两种机制相互独立。','消息路由失败、持久化、队列类型各要怎样检查？','rabbit',{options:['发布侧约定已得到确认','所有消费者业务都成功','订单事务已回滚','消息绝不会重复']}),
  question('s4-q2',4,'commit 之后 ack 之前崩溃','SQL 推演','进阶','消费处理提交数据库成功，发送 ack 之前宕机，恢复后可能发生什么？','未确认消息可能重投；消费者须基于稳定 eventId 对重复处理去重。','inbox 唯一键与本地业务写同事务，可避免重复本地效果。','先 ack 再提交则另有丢失业务效果的窗口。','外部短信不在数据库事务中，如何使其可可靠去重？','rabbit'),
  question('s4-q3',4,'Outbox 关闭哪个窗口？','简答题','进阶','订单 INSERT 和向 MQ 发布分开执行时，Outbox 改善什么？','同一事务提交订单与事件记录，确保成功订单有可恢复的待发事件；转发仍可能重复。','CDC/轮询负责后来投递，消费者继续做幂等和对账。','Outbox 不是分布式事务，也不是自动端到端 exactly-once。','转发器收到 confirm 后未更新状态就崩溃会怎样？','outbox'),
  question('s4-q4',4,'积压速度与清空时间','计算题','基础','生产 120/s，消费 80/s，持续 60s；随后停止生产，消费仍 80/s。积压与清空时间？','积压 2400 条，理论再需 30 秒清空。','(120−80)×60=2400；2400/80=30；假设无失败重投且速率稳定。','只看消息条数无法推断消息年龄和实际处理成本。','生产不停时需要多大消费能力才能逐步清积压？','rabbit'),
  question('s4-q5',4,'读副本看到旧值','故障推理','基础','写主库已成功，马上读副本看旧值，是数据库违反原子性吗？','不一定，异步复制尚未应用可能造成陈旧读取；检查读取目标和复制进度。','需要 read-your-writes 时选择主库或可验证复制位置等待。','固定 sleep 不能保证任意故障下追平。','缓存也有旧值时，单纯读主是否足够？','replica'),
  question('s4-q6',4,'Prefetch 是吞吐保证？','选择题','进阶','提高 prefetch 能否保证消费吞吐提升并平均分配？',2,'prefetch 限制未确认投递；过大可能囤积、增加内存与不均，最优值依工作负载。','消费并发、业务服务时间和 ack 时机都影响实际吞吐。','哪个指标帮助区分 Broker 积压与消费者囤积？','rabbit',{options:['越大越快且永不失衡','固定等于线程数就绝对最优','不能，需测量未确认数和任务时间','它只控制生产者连接']}),
  question('s4-q7',4,'毒消息无限 requeue','故障推理','进阶','某消息字段永远不合法，每次失败都立即 requeue，会怎样？','形成热循环并消耗处理容量；分类永久/暂时错误，有限重试与死信，保留可对账原因。','业务校验不通过的消息通常不会因为重复尝试自然变合法。','死信不是自动修复，仍需监控、修复与重放流程。','重放后如何保持原 eventId 的业务语义？','rabbit'),
  question('s4-q8',4,'同订单消息顺序','简答题','高级','多消费者处理“创建、付款、关闭”，能仅依赖入队顺序保证业务顺序吗？','不能笼统保证处理完成顺序；并发、重投、路由与故障可能改变顺序，应按聚合键分区并用版本/状态机防非法转换。','消息传输顺序、交付顺序与业务生效顺序是三层概念。','即使单消费者也需考虑重投和外部副作用。','先收到关闭后收到付款时，状态机应怎样判断？','rabbit'),

  question('s5-q1',5,'五层三次尝试','计算题','基础','五层调用，每层独立最多总尝试 3 次；末端持续失败。最坏调用放大多少？','243 倍，3^5；如果题目是首次 + 3 次重试，则为 4^5=1024。','首先澄清“尝试”与“重试”的计数口径；实际失败位置和预算会缩小上界。','背 243 不如写出调用树与前提。','仅最上层重试会增加哪种已完成工作的重复成本？','retry'),
  question('s5-q2',5,'超时代表未扣款？','选择题','基础','支付请求超时，客户端能确定什么？',1,'仅能确定在截止时间内没有拿到结果；支付可能已提交，需幂等、查询状态和对账。','重新生成幂等键可能被当成新支付。','如何设计 pending 状态与恢复任务？','stripe',{options:['一定没有扣款','结果未知，不能直接判定副作用','一定已经扣了两次','重试任意次数都安全']}),
  question('s5-q3',5,'总截止时间','计算题','进阶','总预算 1000ms，第一次调用消耗 650ms，退避 100ms，后处理预留 50ms。第二次最多剩多少？','200ms；1000−650−100−50。','重试不能每次重新领取完整总预算，应传播绝对 deadline 或扣除已耗时。','连接、DNS、TLS、队列等待可能不被某个局部 timeout 覆盖。','剩余预算不足最低有效调用时间时怎样处理？','retry'),
  question('s5-q4',5,'熔断、限流、隔离','简答题','进阶','三者各保护什么边界？','限流约束进入速率；隔离约束资源/并发防跨依赖传播；熔断在故障统计触发后暂停调用并受控探测。','并发与速率不同：慢调用即使速率不高也能占满资源。','熔断不能保证无失败，阈值和恢复探针要测试。','限流正常但线程被慢下游占满，应补哪种保护？','retry'),
  question('s5-q5',5,'并行 span 的账本','计算题','进阶','父 300ms；两个子 span 均从20ms到240ms并行。父自身不被子覆盖的时间？','80ms；子时间区间并集为220ms，300−220=80。','不能把两个220ms相加扣掉；端到端耗时沿关键路径计算。','此题是同一可靠时轴；真实跨机时钟与采样有额外限制。','两个子区间部分重叠时如何计算并集？','trace'),
  question('s5-q6',5,'幂等 key 参数变化','故障推理','进阶','第一次 key=K amount=100，重试 key=K amount=200，应如何处理？','拒绝或按约定报告参数不一致，不能当作同一操作默默执行不同金额。','key 代表业务意图，还需要语义参数校验和持久结果/状态。','去重表只存 key 不校验语义会隐藏客户端错误。','幂等记录过期后，历史操作被再次提交的业务约束是什么？','stripe'),
  question('s5-q7',5,'traceId 断了','故障推理','基础','网关与订单 trace 相连，线程池任务与 MQ 消费却是独立 trace。排查什么？','异步任务上下文捕获/恢复，消息注入与提取，instrumentation 配置和采样；明确是否用 parent 或 link。','跨 HTTP 自动传播不保证全部异步边界都自动处理；不要把业务 traceId 存在共享成员字段。','敏感业务数据不应无节制放入 baggage。','一条批处理消息关联多个上游 trace 时如何表达？','trace'),
  question('s5-q8',5,'拆微服务能解决慢 SQL？','简答题','高级','数据库热点写已饱和，把单体拆成五个服务一定改善吞吐吗？','不能；共享瓶颈仍在，还增加网络、部署和一致性成本。先基于领域边界、独立演进与测量决定拆分。','架构升级是满足约束的选择，不是固定六关打怪；单体也能限流、异步和观测。','服务数不是架构成熟度指标。','怎样用数据库锁等待、连接预算和端到端 SLO 验证拆分价值？','pool')
];

export const engineeringCases = [
  {id:'mvc-processing',stage:0,title:'Spring MVC：处理器执行并不等于响应成功',date:'官方请求处理文档 · 2026-10 核对',kind:'真实框架执行约定',fact:'Spring MVC 按处理器映射、处理器执行与异常解析等职责协调请求；框架组件分别承担不同边界，拦截器也可以中止执行。',lesson:'教学归纳：沿日志确认最后成功的边界；参数解析、业务执行和响应编码需要分别验证。本站例子采用响应体 JSON 的 REST 约定。',source:ref('mvc')},
  {id:'nginx-balancing',stage:3,title:'NGINX：负载均衡策略与会话是两个问题',date:'官方负载均衡文档 · 2026-10 核对',kind:'真实代理配置规范',fact:'NGINX 文档分别说明轮询、最少连接和哈希等分流策略；部分会话保持与高级健康检查能力属于 NGINX Plus，需要区分产品版本。',lesson:'教学归纳：分发 HTTP 请求不会复制 JVM 内的 Session。本站最少负载按剩余工作量计算，只用于比较慢实例，不等同 NGINX least_conn。',source:ref('lb')},
  {id:'cf-2019',stage:1,title:'Cloudflare：一条 WAF 正则耗尽 CPU',date:'2019-07-02',kind:'公开事故复盘',fact:'官方复盘说明，新 WAF 规则中的正则出现严重回溯，耗尽 HTTP/HTTPS 处理 CPU，影响代理、CDN 与 WAF，用户看到 502。',lesson:'教学映射：502 需沿入口和上游查证；CPU 密集规则应做对抗输入测试、资源限制、灰度与回滚。不能归因成“Java 线程池太小”。',source:ref('cloudflare')},
  {id:'github-2018',stage:4,title:'GitHub：网络分区后切库与数据一致性',date:'2018-10-21',kind:'公开事故复盘',fact:'GitHub 复盘记录网络分区触发数据库拓扑变化，恢复后两地存在对方没有的写入；跨地区写入延迟也影响服务。团队优先保证数据完整性，暂停部分任务再恢复。',lesson:'教学映射：高可用切换要考虑复制追平、旧主隔离和应用延迟假设；副本数量无法自动证明数据安全。',source:ref('github')},
  {id:'aws-retry',stage:5,title:'AWS：重试既能恢复，也会放大故障',date:'官方实践（历史文章，现站点有迁移日期）',kind:'官方可靠性实践',fact:'AWS 文中分析五层各三次尝试造成 243 倍末端负载，并建议谨慎选择重试位置、次数、退避与抖动。还记录过连接建立被低超时阈值覆盖而出现部署后超时的经验。',lesson:'教学映射：给每次远程调用画预算与资源占用；不要把局部 timeout 当整个链路 deadline。示例业务数值不是 AWS 实际配置。',source:ref('retry')},
  {id:'stripe-key',stage:2,title:'Stripe：幂等请求是明确的 API 合约',date:'官方 API 文档 · 2026-10 核对',kind:'真实 API 规范',fact:'Stripe 文档说明同一幂等键保存首次开始执行请求的状态和响应，重复请求可复用结果，包括 500；会核对参数一致性，并规定记录清理与未开始执行情况的处理。',lesson:'教学映射：幂等不是简单“重复就返回成功”，需要定义并发、参数不一致、失败结果和过期后的业务含义。本站订单模型为原创，并非 Stripe 实现复刻。',source:ref('stripe')},
  {id:'hikari-sizing',stage:1,title:'HikariCP：连接池不是越大越快',date:'项目维护者 Wiki · 2026-10 核对',kind:'项目维护者工程建议',fact:'HikariCP 的池大小文档强调数据库 CPU、I/O 与并发竞争影响最佳连接数，给出的经验起点仍需按实际部署压测；还区分避免资源死锁的下限与最优性能池大小。',lesson:'教学映射：先看持连接时长与等待，再计算跨实例总预算；不能将文档某次基准的收益或公式当所有 MySQL 系统的保证。',source:ref('pool')},
  {id:'rabbit-confirm',stage:4,title:'RabbitMQ：发布确认不等于消费成功',date:'官方文档 · 2026-10 核对',kind:'真实中间件协议语义',fact:'RabbitMQ 将 publisher confirms 与 consumer acknowledgements 分开；连接故障、未确认重投和恢复期间重复需要应用考虑。',lesson:'教学映射：分别在“持久记录→发布→消费事务→ack”标失败窗口，使用可靠事件记录、幂等与对账。不要许诺自动端到端 exactly-once。',source:ref('rabbit')}
];
