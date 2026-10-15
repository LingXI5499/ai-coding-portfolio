export const sources = [
  ['原始博客 · 六阶段认知地图', 'https://yulanlin.cn/useradmin/blog/posts/http-java-web'],
  ['MDN · HTTP 与连接', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview'],
  ['MDN · TCP 握手', 'https://developer.mozilla.org/en-US/docs/Glossary/TCP_handshake'],
  ['MDN · TLS 安全', 'https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Transport_Layer_Security'],
  ['Spring MVC · 请求分派', 'https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-servlet/sequence.html'],
  ['Tomcat 10.1 · Connector', 'https://tomcat.apache.org/tomcat-10.1-doc/config/http.html'],
  ['HikariCP · 池大小与配置', 'https://github.com/brettwooldridge/HikariCP'],
  ['Spring · 声明式事务', 'https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html'],
  ['MySQL 8.4 · InnoDB 锁', 'https://dev.mysql.com/doc/refman/8.4/en/innodb-locking.html'],
  ['NGINX · 负载均衡', 'https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/'],
  ['RabbitMQ · 工作队列', 'https://www.rabbitmq.com/tutorials/tutorial-two-java'],
  ['OpenTelemetry · Trace', 'https://opentelemetry.io/docs/concepts/signals/traces/'],
  ['MySQL · 复制', 'https://dev.mysql.com/doc/refman/8.4/en/replication.html'],
  ['Redis · Cache-aside', 'https://redis.io/docs/latest/develop/use-cases/cache-aside/'],
  ['微服务 · 领域与独立部署', 'https://martinfowler.com/articles/microservices.html']
];

export const cities = {
  shanghai: {name:'上海',en:'SHANGHAI',lat:31.2304,lon:121.4737,role:'浏览器 · 请求发起端'},
  tokyo: {name:'东京',en:'TOKYO',lat:35.6762,lon:139.6503,role:'网络接入 · 教学中继'},
  singapore: {name:'新加坡',en:'SINGAPORE',lat:1.3521,lon:103.8198,role:'区域入口 · 教学中继'},
  frankfurt: {name:'法兰克福',en:'FRANKFURT',lat:50.1109,lon:8.6821,role:'应用机房 · 示例目的地'},
  sanfrancisco: {name:'旧金山',en:'SAN FRANCISCO',lat:37.7749,lon:-122.4194,role:'应用机房 · 示例目的地'}
};
export const routes = [
  {name:'上海 → 东京 → 旧金山',ids:['shanghai','tokyo','sanfrancisco'],rtt:145},
  {name:'上海 → 新加坡 → 法兰克福',ids:['shanghai','singapore','frankfurt'],rtt:190},
  {name:'上海 → 新加坡',ids:['shanghai','singapore'],rtt:65}
];

const node = (id,title,sub,detail,tag='') => ({id,title,sub,detail,tag});
export const stages = [
  {
    name:'单次请求',en:'THE FIRST REQUEST',icon:'Globe2',headline:'一次请求的\n世界之旅。',intro:'从浏览器的一次点击出发，穿过网络、进入 Java，直到一条 SQL 带着结果返回。',question:'点击“查看文章”之后，数据到底经过了什么？',duration:5,
    tags:['HTTP / HTTPS','Spring MVC','MyBatis'],
    takeaway:'先建立完整路径，再讨论哪一段需要优化。',
    nodes:[
      node('browser','浏览器','Vue / Fetch','页面触发 fetch。Path 放资源标识，Query 放筛选条件，Header 放元信息，Body 放提交数据。跨源请求可能先发 OPTIONS；CORS 是浏览器约束，不是服务端鉴权。','客户端'),
      node('network','DNS · TCP · TLS','Connection setup','DNS 返回地址，TCP 建立可靠字节流，TLS 验证服务端证书并协商加密。DNS 缓存与连接复用可以跳过部分步骤。HTTP/2 基于 TCP，HTTP/3 基于 QUIC / UDP，并不走相同握手流程。','网络'),
      node('nginx','反向代理','NGINX / TLS termination','入口可终止 TLS、路由 /api、输出访问日志。代理到应用是另一段连接；它可用 HTTP，也可再次使用 TLS。静态资源或 CDN 命中不必进入 Java。','接入'),
      node('tomcat','Tomcat','Connector → Servlet','网络连接由 Connector 管理，请求进入 Filter 链。同步 MVC 业务执行期间通常占用工作线程；一个空闲 keep-alive 连接不长期绑定业务线程。','容器'),
      node('mvc','DispatcherServlet','Mapping → Adapter','查找 HandlerMapping 得到处理器与拦截器链。HandlerAdapter 负责参数解析和调用控制器。Filter 属于 Servlet 链，Interceptor 属于 MVC 处理链，职责与执行范围不同。','框架'),
      node('controller','Controller','HTTP contract','@GetMapping 匹配 URL，@PathVariable 绑定路径变量。入口进行基础校验，把业务交给 Service。业务异常由 @RestControllerAdvice 转换为清楚的 HTTP 状态与错误体。','应用'),
      node('service','Service','Business / Transaction','组织业务规则。事务通常通过 Spring 代理生效，类内 self-invocation 绕过代理是常见坑。查询文章不一定需要显式写事务，订单多步写入则要明确边界。','业务'),
      node('database','Mapper → MySQL','MyBatis / JDBC / HikariCP','Mapper 的动态代理定位 SQL；通过 JDBC 借连接、发送 SQL、映射结果并释放资源。XML 是 SQL 配置方式之一。#{id} 使用参数绑定，不把输入拼到 SQL 中。','数据'),
      node('response','JSON → 页面','Jackson / HTTP response','@ResponseBody 返回对象由消息转换器处理；Jackson 常用于 JSON。不是每个响应都用 Jackson。HTTP 状态、Header 和 Body 一起返回，页面再更新状态。','返回')
    ],
    lessons:[
      ['逻辑抽象','请求是一次跨边界的调用','网络负责送达，容器负责承接，框架负责分派，业务层决定做什么，数据层负责持久化。把这五种职责分开，才知道错误属于哪一层。'],
      ['真实开发','同一个 URL 会有不同路径','DNS 命中、长连接、CDN 缓存、304、鉴权失败、404、SQL 超时，都会让请求缩短或提前结束。图中显示的是一次新连接、缓存未命中的成功查询。'],
      ['补充知识','连接不是请求，也不是线程','HTTP/1.1 可以复用连接；HTTP/2 可以在连接上复用多个流。HTTP/3 使用 QUIC。演示时先明确协议基线，不能把每个请求都讲成重新三次握手。']
    ],
    code:[
      {name:'浏览器',file:'article-api.js',lang:'javascript',note:'客户端只在演示中展示代码，按钮运行本地模型，不向博客发送请求。',text:`// 实际项目应统一处理非 2xx 状态
export async function loadArticle(id) {
  const response = await fetch('/api/articles/' + encodeURIComponent(id), {
    headers: { Accept: 'application/json' }
  });
  if (!response.ok) {
    throw new Error('HTTP ' + response.status);
  }
  return response.json();
}`},
      {name:'Controller',file:'ArticleController.java',lang:'java',note:'片段省略 package / import；示例基线为 Java 17+ 与 Servlet Spring MVC。',text:`@RestController
@RequestMapping("/api/articles")
public class ArticleController {
    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping("/{id}")
    public ArticleView get(@PathVariable("id") Long id) {
        return articleService.find(id);
    }
}`},
      {name:'Service',file:'ArticleService.java',lang:'java',note:'异常映射为 404，而不是让 IllegalArgumentException 意外成为 500。',text:`@Service
public class ArticleService {
    private final ArticleMapper articleMapper;

    public ArticleService(ArticleMapper articleMapper) {
        this.articleMapper = articleMapper;
    }

    public ArticleView find(Long id) {
        ArticleView article = articleMapper.find(id);
        if (article == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                "Article not found");
        }
        return article;
    }
}`},
      {name:'Mapper / SQL',file:'ArticleMapper.java',lang:'java',note:'MyBatis 参数绑定；ArticleView 可定义为 record ArticleView(Long id, String title)。',text:`@Mapper
public interface ArticleMapper {
    @Select("SELECT id, title FROM article WHERE id = #{id}")
    ArticleView find(@Param("id") Long id);
}

// 数据库异常应由统一异常处理层映射为合适的错误响应。
// 连接由 MyBatis / Spring 管理，业务层不要长期持有 Connection。`}
    ],
    notes:['开场：请大家想象刚刚点击了“查看文章”。不要急着说 Controller，先问：浏览器怎么找到服务器？','用地球视图讲距离与网络延迟。强调城市是真实坐标，路线和 RTT 是教学假设，不是 traceroute。','切到请求解剖，逐步走过网络、Servlet、MVC、Service、SQL 和响应。点击节点显示职责。','切到代码实现，把同一 URL 与 @GetMapping、Mapper SQL 对上。过渡：如果同时来 100 个请求呢？'],
    quiz:{q:'浏览器复用已建立的 HTTPS 连接，再次请求一定要做 TCP 三次握手吗？',options:['一定需要，每个 HTTP 请求各建一个连接','不一定，连接复用可以省去重新建立连接','由 Controller 决定是否握手'],answer:1,explain:'HTTP 请求与连接不是一对一。这个演示可切换“复用连接”，观察握手阶段被跳过。'},refs:[1,2,3,4,5]
  },
  {
    name:'单机并发',en:'CONCURRENCY & QUEUES',icon:'Layers3',headline:'请求变多，\n等待在哪里？',intro:'让多个请求同时进入一台服务器。观察工作线程与数据库连接如何被占用、等待与复用。',question:'为什么加了线程，接口还是越来越慢？',duration:5,tags:['Tomcat','HikariCP','Little’s Law'],takeaway:'工作线程与数据库连接是两种不同的有限资源。',
    nodes:[node('arrival','请求到达','Arrival rate','RPS 是单位时间请求数，在线人数不是 RPS。开环压测保持到达率，闭环虚拟用户会因响应变慢而降低发送速度。'),node('queue','等待队列','Bounded waiting','当需求超过服务能力时出现等待。实验使用简化 FIFO 请求队列，不把它等同于 Tomcat 的 acceptCount；后者属于连接等待队列配置。'),node('threads','工作线程池','Execution slots','同步数据库调用期间，线程通常仍被占用。调大线程数会增加调度、内存和下游压力。异步 Servlet、WebFlux 和虚拟线程要另行分析。'),node('pool','HikariCP','Borrow / Return','获取连接后执行 SQL，用完归还。池满时获取会等待，到 connectionTimeout 仍未拿到就失败。等待连接的线程本身也消耗线程资源。'),node('mysql','MySQL','SQL service time','模型假设固定 SQL 耗时且数据库可并行执行，忽略锁、CPU、I/O 争用；生产中池越大不一定越快。'),node('done','完成 / 超时','Latency distribution','平均值会隐藏长尾。P95 是观测样本中约 95% 的请求耗时不超过的值。必须一起观察错误率与尚未完成的请求。')],
    lessons:[['逻辑抽象','两道资源闸门','线程允许请求执行，连接允许访问数据库。SQL 慢会占住连接，连接等待又占住线程，最终连不访问数据库的接口也可能受到影响。'],['真实开发','从池指标定位问题','先看工作线程活跃数，再看连接池 active / pending，再看慢 SQL 与锁等待。少凭一个 CPU 指标做判断。'],['补充知识','Little 定律的前提','稳定系统、相同统计边界下，平均在途数 L = 吞吐率 λ × 平均停留时间 W。正在不断积压的过载实验不满足稳态，不能拿完成样本平均值当全系统容量。']],
    code:[{name:'池配置',file:'application.yml',lang:'yaml',note:'参数仅用于实验理解，不能作为生产容量建议。不同 Spring Boot / Tomcat 版本应核实属性。',text:`server:
  tomcat:
    threads:
      max: 200
spring:
  datasource:
    hikari:
      maximum-pool-size: 20
      connection-timeout: 3000
# maxThreads ≠ maxConnections ≠ acceptCount
# 扩容 5 个实例后，总连接预算至少需要重新评估。`},{name:'本机压测',file:'local-load.js',lang:'javascript',note:'仅对本机测试接口。不要直接压测博客或生产服务器。',text:`import http from 'k6/http';
export const options = {
  scenarios: {
    arrival: {
      executor: 'constant-arrival-rate',
      rate: 20, timeUnit: '1s', duration: '30s',
      preAllocatedVUs: 10, maxVUs: 40
    }
  },
  thresholds: { http_req_failed: ['rate<0.01'] }
};
export default function () {
  http.get('http://localhost:8080/api/articles/1001');
}`},{name:'观测',file:'diagnosis.txt',lang:'plaintext',note:'用真实指标验证推断；实验面板的全部数字来自本地模型。',text:`1. Tomcat: busy / current threads
2. HikariCP: active / idle / pending / timeout
3. MySQL: query duration / locks / CPU / IO
4. HTTP: achieved RPS / P95 / error ratio

同一时间窗口比较，分别记录成功与失败。
不要用“线程数 × 1 秒”直接推导请求容量。`}],
    notes:['先把到达率调到 30 RPS，连接设为 2，SQL 设为 300ms，开始实验。','观察“等待连接”与积压数。增加线程但不增加连接，看瓶颈仍然存在。','把 SQL 降到 50ms，重新运行。对比优化慢 SQL 与一味增大线程的效果。','强调这是简化资源模型。生产需要把锁、CPU、网络和 GC 也纳入观测。'],
    quiz:{q:'线程池 100，连接池 10，所有请求都在同步查库时，最多有多少个请求同时持有连接？',options:['100','10','在线用户数量'],answer:1,explain:'这个应用实例最多借出 10 个池连接。更多线程会等待，数据库能否高效并行还要另外测量。'},refs:[5,6]
  },
  {
    name:'正确性与性能',en:'CORRECTNESS BEFORE SPEED',icon:'ShieldCheck',headline:'快之前，\n先保证正确。',intro:'让两个用户争抢最后一件商品，亲眼看见竞态。再用条件更新、事务和幂等约束守住业务边界。',question:'为什么加了 @Transactional，还可能卖出两件？',duration:6,tags:['Transaction','Atomic SQL','Cache-aside'],takeaway:'事务不自动消除竞态，缓存不代替业务约束。',
    nodes:[node('clients','请求 A / B','Concurrent orders','两个事务可能先后读到同一个库存值。先查后改产生竞态；是否发生还取决于具体 SQL、隔离级别和执行交错。'),node('idempotency','幂等校验','Business request key','重试必须复用同一个业务幂等键，并用数据库唯一约束兜底。只在内存 Set 中检查，无法跨实例防重，也无法可靠承受重启。'),node('stock','条件扣库存','Atomic UPDATE','UPDATE ... SET stock = stock - 1 WHERE id = ? AND stock > 0；检查 affectedRows。相同记录上的写由 InnoDB 进行锁协调。'),node('transaction','本地事务','Stock + Order','库存扣减与订单创建在同一数据库事务中成功或回滚。长事务扩大锁持有时间。Spring 默认代理模式下，类内调用与异常回滚规则要特别核实。'),node('cache','Redis 旁路缓存','Read-mostly data','先查缓存，未命中查库再回填。写库后删缓存仍存在竞争窗口；需要失效重试、TTL 和一致性策略。热点击穿与穿透也需处理。'),node('guard','过载保护','429 / Timeout','限流拒绝过量工作，超时缩短等待，隔离避免资源耗尽。客户端只能对可重试且幂等的动作退避重试，避免重试风暴。')],
    lessons:[['逻辑抽象','读 → 判断 → 写，不能假设原子','事务是一组操作的边界。隔离程度、锁定方式与 SQL 语义共同决定并发结果，给错误逻辑贴一个注解不保证变正确。'],['真实开发','用数据库约束守住不变量','库存不为负，幂等键不重复，订单与库存同事务。应用代码先判断便于交互，数据库条件与唯一约束负责最终兜底。'],['补充知识','读视图与写锁各司其职','MVCC 支持一致性读取，并不替代更新时的锁。锁范围与索引、访问条件和隔离级别有关；大范围扫描也可能扩大影响。']],
    code:[{name:'条件更新',file:'StockMapper.java',lang:'java',note:'同一数据库的本地事务示意。金额、用户校验与完整订单字段应按实际业务补齐。',text:`@Update("UPDATE product SET stock = stock - 1 " +
        "WHERE id = #{id} AND stock > 0")
int decreaseStock(@Param("id") Long id);

// 从外部通过 Spring Bean 代理调用该方法
@Transactional(rollbackFor = Exception.class)
public void placeOrder(Long productId, String requestKey) {
    // order.request_key 设置唯一索引；失败将回滚库存操作。
    if (stockMapper.decreaseStock(productId) != 1) {
        throw new OutOfStockException();
    }
    orderMapper.insert(productId, requestKey);
}`},{name:'缓存策略',file:'cache-aside.txt',lang:'plaintext',note:'伪代码。删缓存失败需要可重试的失效机制；强一致场景应另外设计。',text:`READ
  cache.get(key)
  if miss: value = database.find(id)
           cache.set(key, value, TTL + jitter)
  return value

WRITE
  transaction: database.update(id, value)
  after commit: invalidate(key)

TTL 不是完整一致性方案。
对缓存为空、热点失效和无效 ID 分别设计保护。`}],
    notes:['执行“错误：先查后改”，让 A 与 B 同时读到 1，最后成功订单为 2。','换成“条件更新”，相同输入只允许 1 笔订单成功。强调这是受影响行数在起作用。','解释扣库存和建订单的事务边界，再引入网络重试与唯一幂等键。','切到缓存实验：命中减少重复读，但写操作的正确性仍应由数据库保证。'],
    quiz:{q:'给“先查询库存，再无条件更新”加上 @Transactional 就一定能避免超卖吗？',options:['一定，事务自动排队所有请求','不一定，还要看 SQL、隔离和锁策略','只有加 Redis 才能避免'],answer:1,explain:'事务不会自动把任意业务流程串行化。条件更新与受影响行数能把约束放到数据库执行层。'},refs:[7,8,13]
  },
  {
    name:'多实例集群',en:'SCALE OUT THE APPLICATION',icon:'Network',headline:'多一台机器，\n多一层问题。',intro:'把同一份 Spring Boot 应用复制到多个实例。改变分流策略、摘除故障节点，观察共享数据库与 Session 的边界。',question:'应用扩到 3 台，吞吐量就会变为 3 倍吗？',duration:5,tags:['NGINX','Load balancing','Stateless'],takeaway:'应用实例可以增加，数据库容量不会自动一起增加。',
    nodes:[node('client','客户端','One public origin','客户端只认统一入口。入口本身也要考虑高可用、容量和 TLS 配置。'),node('lb','负载均衡','Round robin / Least load','请求分配给可用实例。轮询以请求轮次分配，最少负载实验按模型的在途请求数选择；NGINX least_conn 实际依据连接数，两者不能完全等同。'),node('appA','Spring Boot A','Same application','A 与 B、C 运行完整相同应用。这是单体的多实例部署，并非按业务能力拆分的微服务。'),node('appB','Spring Boot B','Independent process','某个进程中的 synchronized 只能保护该进程内共享对象，不能自动保护其他机器上的数据。'),node('shared','共享状态','Redis Session / Object storage','本地 Session 会在跨实例访问时丢失。可用共享 Session 或适合业务的无状态认证。本地上传文件也需要共享或对象存储。'),node('db','共享 MySQL','Global connection budget','每实例 20 连接 × 5 实例 = 应用侧最高 100 连接，还不包括运维和其他服务。实例扩容要一起预算数据库连接与 SQL 压力。')],
    lessons:[['逻辑抽象','复制应用，分散工作','同一套代码跑在不同进程，入口负责分配。应用容量与故障影响面改变了，业务边界并没有自动改变。'],['真实开发','会话、文件、定时任务','会话共享、文件外置、定时任务协调、优雅下线、健康检查都需要处理。增加实例也可能把数据库压得更慢。'],['补充知识','重试不能只看网络错误','上游超时不意味着后端没成功。尤其下单和支付，代理自动重试必须考虑方法、请求体与业务幂等，不应盲目重放。']],
    code:[{name:'入口配置',file:'nginx.conf',lang:'nginx',note:'简化片段，生产需补齐 HTTPS、日志和适配环境的健康检查。默认不把业务写请求任意重放。',text:`upstream article_app {
    server 10.0.0.11:8080 max_fails=3 fail_timeout=10s;
    server 10.0.0.12:8080 max_fails=3 fail_timeout=10s;
}
location /api/ {
    proxy_pass http://article_app;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_connect_timeout 2s;
    proxy_read_timeout 5s;
}`},{name:'扩容核对',file:'scale-out.txt',lang:'plaintext',note:'在实际容量测量后进行扩容；应用线程池和 DB 池需要分别预算。',text:`部署 A + B + C（同一完整应用）
  ✓ 外置 Session / 明确认证方案
  ✓ 文件进入对象存储
  ✓ 健康检查与优雅排空
  ✓ 总数据库连接预算
  ✓ 定时任务不重复执行
  ✓ 只对符合幂等要求的操作重试

跨实例共享状态需要跨实例的约束。`}],
    notes:['发送 12 个请求，观察轮询在 A / B / C 上分配。','模拟 B 较慢，比较轮询与最少负载；说明动画是请求计数模型，和真实 least_conn 有差别。','将 B 摘除后再次发送，观察流量只到剩余实例。','播放会话实验：登录在 A，读取落到 B；再切换共享 Session。'],
    quiz:{q:'把相同 Spring Boot 单体复制到三台服务器，是什么架构？',options:['自动变成三个微服务','单体应用的多实例集群','必须使用三个独立数据库'],answer:1,explain:'架构服务边界由业务拆分和部署方式决定，机器数量不是微服务的判定标准。'},refs:[9]
  },
  {
    name:'数据与异步',en:'DATA & ASYNCHRONOUS WORK',icon:'Workflow',headline:'把等待，\n移出主链路。',intro:'先保存核心业务，再异步发送通知。观察生产、消费与积压，并体验读副本延迟导致的“刚写完却查不到”。',question:'有了消息队列，处理能力就无限了吗？',duration:6,tags:['Replication','RabbitMQ','Outbox'],takeaway:'MQ 改变时间结构，复制与分片改变数据访问方式。',
    nodes:[node('order','核心请求','Local transaction','先完成核心数据库写入。异步接口返回“已接受”与业务真正完成不是同一个状态；应提供任务 ID 和状态查询。'),node('outbox','事务发件箱','Order + Outbox row','把业务记录和待发事件写在同一个本地事务。发布器重试发送，成功后标记；若发送后崩溃仍可能重复，消费者要幂等。'),node('mq','消息队列','Buffer / Delivery','持久化、发布确认、消费者确认分别处理不同故障窗口。消息进入速率长期超过消费速率，积压会持续增长。'),node('worker','消费者','Idempotent processing','先可靠完成业务，再 ack；中途崩溃可能重投。使用唯一业务键或消费记录防止重复效果；失败需要重试上限与死信处理。'),node('primary','主库','Write / Critical read','写入与需要立即看到新值的读取可走主库。先优化 SQL 和索引再考虑更多数据库节点。'),node('replica','读副本','Replication lag','异步复制存在延迟。刚写完读副本可能是旧值；不是所有查询都适合分流。分片则按规则分布不同数据，引入跨分片查询成本。')],
    lessons:[['逻辑抽象','三个工具解决三个问题','复制增加部分读能力；分片分布数据；消息队列把任务延后执行。它们可按需求组合，不能互相代替。'],['真实开发','提交成功，消息却没发出去','业务库与消息代理不是天然同一个事务。Outbox 用本地原子写入留下可靠发送意图，但仍需要发布重试、去重、监控与清理。'],['补充知识','“至少一次”不等于重复效果','消费者可能收到同一消息多次，用业务幂等约束让重复投递不会重复发券或扣款。要关注最老消息年龄，而不只看队列长度。']],
    code:[{name:'Outbox',file:'order-outbox.sql',lang:'sql',note:'示意本地事务。发布器必须实现确认、重试和状态更新；不是“自动恰好一次”。',text:`START TRANSACTION;
INSERT INTO orders (id, request_key, status)
VALUES (?, ?, 'CREATED');
INSERT INTO outbox_event (event_id, aggregate_id, payload, status)
VALUES (?, ?, ?, 'PENDING');
COMMIT;

-- 独立发布器轮询 PENDING，发消息并等待确认。
-- 发送成功后再标记 SENT；崩溃窗口可能导致重复发送。
-- event_id 唯一；消费者以 event_id / 业务键防重。`},{name:'消费确认',file:'consumer.txt',lang:'plaintext',note:'逻辑伪代码。数据库消费记录应有唯一约束，并与业务写入在同一事务。',text:`onMessage(event):
  begin local transaction
    insert processed_event(event.id) // UNIQUE
    apply business effect
  commit
  ack message

if duplicate and previous effect committed:
  ack message
if transient failure:
  retry with backoff and a finite limit
if exhausted:
  dead letter + alert`}],
    notes:['将生产设为 20/s，消费设为 8/s，运行 10 秒，观察积压约 120 条。','提高消费能力重跑，强调 MQ 没有消灭工作量，只是缓冲。','演示“写主库，立刻读副本”，读到旧值；等待复制或读主库才能看到新值。','讲 Outbox 与重复投递。过渡：当这些工作分散到独立服务，会增加什么？'],
    quiz:{q:'生产 100 条/s，消费 60 条/s，长期持续，队列会怎样？',options:['自动清空','每秒约新增 40 条积压','因为异步所以没有上限'],answer:1,explain:'缓冲只能吸收有限突发。长期速率不匹配要扩展消费、优化任务或减少输入。'},refs:[10,12]
  },
  {
    name:'微服务治理',en:'DISTRIBUTED SYSTEMS',icon:'Boxes',headline:'边界拆开了，\n复杂度连起来。',intro:'追踪一笔订单在多个服务之间的调用。注入支付超时，比较盲目重试与熔断保护，再从 Trace 中找出真正的慢点。',question:'本地方法变成网络调用，会失去哪种确定性？',duration:6,tags:['Gateway','Circuit breaker','OpenTelemetry'],takeaway:'按业务与团队边界拆分，并为不可靠网络设计。',
    nodes:[node('gateway','API Gateway','Routing / Auth','统一入口提供路由、鉴权和限流。网关不是所有内部业务规则的集中实现地，服务也需落实资源权限。'),node('orderSvc','订单服务','Own business boundary','独立部署和管理订单生命周期。跨边界调用需要超时预算、错误语义、版本兼容与业务幂等。'),node('inventorySvc','库存服务','Reserve / Release','库存预留是一个业务步骤。跨服务失败需要补偿或状态机，不能让一个本地 @Transactional 覆盖所有远端数据库。'),node('paymentSvc','支付服务','Uncertain remote result','超时可能是支付没执行，也可能是支付成功但响应丢失。用同一支付业务号查询状态或安全重试，不能简单再次扣款。'),node('breaker','熔断 / 隔离','Closed → Open → Half-open','失败达到规则后短期快速拒绝，恢复窗口用少量探测请求。阈值应来自业务容忍度和测量；熔断不能恢复已经丢失的数据。'),node('trace','Trace / Metrics / Logs','Observe the whole path','Trace 串联调用和时间，Metrics 看整体趋势，Logs 提供事件上下文。Span 可包含父子关系与并行任务，不能把所有耗时简单相加。')],
    lessons:[['逻辑抽象','从函数边界到网络边界','服务可独立发布，但调用会部分失败、超时与重复。获得自治的同时，需要增加协议、可观测性和故障治理。'],['真实开发','不要无预算地层层重试','三层各重试三次会放大下游工作量。统一截止时间、退避与抖动，限制重试数量，只对安全的业务操作重试。'],['补充知识','先尝试模块化单体','业务域不清晰、团队较小、独立发布收益有限时，模块化单体可能更合适。微服务不是流量达到某个数值后的必选升级。']],
    code:[{name:'调用预算',file:'resilience.yml',lang:'yaml',note:'Resilience4j 配置示意；版本与集成方式应以项目实际依赖为准。',text:`resilience4j:
  circuitbreaker:
    instances:
      payment:
        slidingWindowSize: 10
        minimumNumberOfCalls: 5
        failureRateThreshold: 50
        waitDurationInOpenState: 10s
        permittedNumberOfCallsInHalfOpenState: 2
# 另配 HTTP connect/read timeout 和整体截止时间。
# 重试只使用相同业务幂等键，限制次数并加退避。`},{name:'链路传播',file:'trace-context.txt',lang:'plaintext',note:'通常通过 OpenTelemetry SDK / Java Agent 自动埋点；不要自行生成固定 trace ID。',text:`HTTP headers:
  traceparent: 00-<trace-id>-<parent-span-id>-01

Trace: place-order
  ├─ Gateway
  └─ Order service
       ├─ Reserve inventory
       ├─ Call payment    ← timeout / unknown result
       └─ Persist order status

日志带 trace_id / span_id，敏感数据不要写入。
超时后先查询支付状态，再推进业务状态机。`}],
    notes:['先看正常 Trace，指出嵌套 Span 与关键路径。','注入支付超时，观察订单耗时增加，并说明远端结果此时可能不确定。','连续运行失败调用，打开熔断器。观察后续请求快速失败，再等待半开探测。','收尾：六阶段是一条学习路线，选型应由业务边界、测量和团队需求决定。'],
    quiz:{q:'订单服务调用支付超时，能确认支付没有成功吗？',options:['可以，超时就是没执行','不可以，可能执行成功但响应丢失','重启订单服务就知道了'],answer:1,explain:'这是不确定结果。要靠业务幂等键、状态查询与恢复流程确认，而不是无条件重复扣款。'},refs:[11,14]
  }
];

export const networkSteps = [
  {name:'DNS 解析',short:'DNS',detail:'查询或复用 DNS 缓存中的地址。示例域名与 IP 只用于教学。',ms:20},
  {name:'TCP 握手',short:'TCP',detail:'SYN → SYN-ACK → ACK。新建 TCP 连接约需要一个 RTT；此处忽略重传。',ms:0},
  {name:'TLS 协商',short:'TLS',detail:'示意 TLS 1.3 全握手：校验证书并建立加密上下文，通常再需要约一个 RTT。',ms:0},
  {name:'发送请求',short:'HTTP',detail:'加密的应用数据经网络到达入口。HTTP/2 在 TLS 上复用流；HTTPS 不让中继看到明文 Body。',ms:0},
  {name:'执行 Java',short:'JAVA',detail:'Tomcat → Filter → DispatcherServlet → Controller → Service → Mapper → MySQL。',ms:42},
  {name:'响应返回',short:'JSON',detail:'Java 对象序列化，响应经过网络回到浏览器，完成页面更新。',ms:0}
];
