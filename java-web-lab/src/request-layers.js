const spring='https://docs.spring.io/spring-framework/reference/web/webmvc/';
const boot='https://docs.spring.io/spring-boot/';
const node=(id,name,tag,owner,meaning,mechanism,code,language,filename,boundary,source)=>({id,name,tag,owner,meaning,mechanism,code,language,filename,boundary,source});
export const requestLayers=[
  node('boot','Spring Boot','启动组装','应用启动入口',
    'Spring Boot 在启动时依据依赖、配置与条件，组装 Spring 应用和 Web 运行环境。它不是每次 HTTP 请求要调用的一层业务方法。',
    ['main 调用 SpringApplication.run，创建并刷新相应 ApplicationContext。','组件扫描、配置类与自动配置注册 Bean；容器创建对象并注入依赖。','在 Servlet Web 应用、嵌入式容器依赖与相关条件满足时启动 WebServer，并注册 Servlet、Filter 等。','服务器就绪后接受请求；Controller、Service 与 Mapper 的对象关系已经建立。'],
    `@SpringBootApplication
public class EmployeeApplication {
  public static void main(String[] args) {
    SpringApplication.run(EmployeeApplication.class, args);
  }
}

// @SpringBootApplication 组合了配置、自动配置与组件扫描。
// Web 应用类型、依赖、配置与替换的 Bean 都会影响结果。`,
    'java','EmployeeApplication.java',
    '这里限定 Servlet + Spring MVC + 嵌入式 Tomcat。WebFlux、外部 WAR 容器、不同 Starter 或条件配置会改变运行方式；Boot 不是 Tomcat，也不是 MVC。',boot+'reference/using/auto-configuration.html'),
  node('tomcat','Tomcat','Web / Servlet 容器','嵌入式 WebServer',
    'Tomcat 是服务器与 Servlet 容器实现。Connector 接入网络和 HTTP；容器按 Web 应用与 Servlet 映射把请求送到目标处理器。',
    ['操作系统接收连接；Connector 解析 HTTP，并组织请求与响应对象。','容器按 Host、Context 与映射选择 Web 应用、Filter 链与 Servlet。','执行 Filter 链后调用目标 Servlet 的 service；MVC 路径的目标通常是 DispatcherServlet。','返回时容器把响应交给 Connector 发送；线程、连接、队列和超时是不同资源。'],
    `server:
  port: 8080
  tomcat:
    threads:
      max: 200   # 示例配置，不是容量结论
    connection-timeout: 5s

# 调大线程数不能消除 JDBC 连接池或数据库锁瓶颈。
# 在真实项目核对所用 Spring Boot/Tomcat 版本与生效配置。`,
    'yaml','application.yml',
    'Tomcat 不负责员工业务或数据库事务。Nginx 可位于它之前；一次请求也不意味着新建一个线程或连接。HTTP 对象、网络报文与 DTO 是不同形态。','https://tomcat.apache.org/tomcat-10.1-doc/architecture/overview.html'),
  node('servlet','Servlet API','容器契约','Tomcat 实现的 Servlet 运行环境',
    'Servlet 是容器调用 Java Web 组件的接口与生命周期契约；HttpServlet 提供 HTTP 方法分派。DispatcherServlet 本身沿继承关系建立在 HttpServlet 上。',
    ['容器初始化 Servlet，管理其生命周期与映射。','HTTP 请求经 service 分派到对应处理方法；不同请求可能并发使用同一实例。','Spring 的 HttpServletBean、FrameworkServlet 在基础 HttpServlet 上补充配置与上下文处理。','DispatcherServlet 扩展 FrameworkServlet，负责 Spring MVC 调度；不是先调用一个“Servlet层”再额外调用另一个 DispatcherServlet。'],
    `jakarta.servlet.Servlet
  ↑ implements
jakarta.servlet.GenericServlet
  ↑ extends
jakarta.servlet.http.HttpServlet
  ↑ extends
org.springframework.web.servlet.HttpServletBean
  ↑ extends
org.springframework.web.servlet.FrameworkServlet
  ↑ extends
org.springframework.web.servlet.DispatcherServlet`,
    'plaintext','Servlet.inheritance.txt',
    '这是继承/契约关系，不是请求顺序。不要把请求可变状态存成共享 Servlet 实例字段。Spring 6+ 使用 jakarta 命名空间；旧 javax 项目不能直接混用。','https://jakarta.ee/specifications/servlet/6.0/apidocs/jakarta.servlet/jakarta/servlet/http/httpservlet'),
  node('filter','Filter','Servlet 横切','容器的 Filter 链',
    'Filter 在目标 Servlet 之前和之后围绕请求执行。它可以包装请求、处理编码与追踪、拒绝请求；Spring Security 也通过接入 Servlet Filter 链建立自己的安全链。',
    ['容器根据 URL/Servlet 映射、DispatcherType 与顺序选择适用 Filter。','Filter 在 chain.doFilter 前执行前置处理。','调用 chain.doFilter 才会继续下一 Filter 或目标 Servlet；不调用可以直接结束响应。','调用返回后执行后置处理；资源清理宜放在 finally。'],
    `public class RequestIdFilter extends OncePerRequestFilter {
  @Override
  protected void doFilterInternal(HttpServletRequest request,
      HttpServletResponse response, FilterChain chain)
      throws ServletException, IOException {
    String requestId = UUID.randomUUID().toString();
    response.setHeader("X-Request-Id", requestId);
    try {
      MDC.put("requestId", requestId);
      chain.doFilter(request, response);
    } finally {
      MDC.remove("requestId");
    }
  }
}
// 将此 Filter 注册为 Bean 或明确的容器 Filter。`,
    'java','RequestIdFilter.java',
    'Filter 不是 Controller，执行时未必已有 handler 或 DTO。其异常不保证被 MVC ControllerAdvice 捕获。上例只是追踪，不是身份认证或授权。','https://docs.spring.io/spring-security/reference/servlet/architecture.html'),
  node('dispatcher','DispatcherServlet','MVC 前端控制器','Servlet 实例 / Spring MVC 基础设施',
    'DispatcherServlet 是 Spring MVC 的入口 Servlet。它协调策略组件寻找处理器、执行拦截器、调用适配器，并处理分派结果与异常。',
    ['从请求中寻找可用 HandlerMapping，获得 handler 与 HandlerExecutionChain。','选择能执行该 handler 类型的 HandlerAdapter。','执行适用 Interceptor 的 preHandle，成功后由适配器执行 handler。','协调结果、异常解析与视图；REST 返回值的转换通常在 RequestMappingHandlerAdapter 的返回值处理链中完成。'],
    `// 只提炼 doDispatch 的控制流程，非框架源码完整复制。
HandlerExecutionChain chain = getHandler(request);
HandlerAdapter adapter = getHandlerAdapter(chain.getHandler());
if (!chain.applyPreHandle(request, response)) return;
ModelAndView mv = adapter.handle(request, response, chain.getHandler());
chain.applyPostHandle(request, response, mv);
processDispatchResult(request, response, chain, mv, exception);
// 最终完成回调、异步分派与异常路径还有专门的处理。`,
    'java','DispatcherServlet.flow.java',
    '这是一段机制伪代码，内部方法非业务代码可直接调用。DispatcherServlet 不直接执行全部 JSON、校验或 SQL 工作；它依赖 MVC 策略组件。',spring+'mvc-servlet.html'),
  node('mapping','HandlerMapping','找到处理方法','Spring MVC 策略组件',
    'HandlerMapping 根据路径、HTTP 方法及其他映射条件找到 handler。注解 Controller 通常由 RequestMappingHandlerMapping 管理映射元数据。',
    ['启动阶段检查 Controller 方法上的映射条件，形成注册表。','请求阶段组合路径、Method、consumes、produces、Header 等条件查找方法。','返回 HandlerMethod 及适用的拦截器链。','尚未在这一步调用 Service，也未必已解析请求体 DTO。'],
    `@RestController
@RequestMapping("/employees")
class EmployeeController {
  @PostMapping(consumes = "application/json")
  ResponseEntity<EmployeeView> create(
      @Valid @RequestBody CreateEmployeeRequest dto) {
    return ResponseEntity.status(201).body(employeeService.create(dto));
  }
}
// 这里“找到 create 方法”与“执行 create 方法”是两步。`,
    'java','RequestMapping.example.java',
    '同一路径可能对应不同 Method。404、405、415 与业务不存在是不同失败；多个匹配时会按规则判断，不能说按注册顺序随便取一个。',spring+'mvc-controller/ann-requestmapping.html'),
  node('adapter','HandlerAdapter','调用适配器','Spring MVC 策略组件',
    'HandlerAdapter 将统一的 MVC 调度接口适配为具体 handler 的执行方式。注解方法通常由 RequestMappingHandlerAdapter 调用。',
    ['检查是否支持这个 handler 类型。','参数解析器处理 PathVariable、RequestParam、RequestBody 等参数来源。','调用 Controller 方法，并由返回值处理器解释返回对象。','在适用情况下调用 HttpMessageConverter 读/写消息体，而不是让 Controller 手工解析字节。'],
    `HandlerAdapter：统一执行入口
  └─ RequestMappingHandlerAdapter：处理注解方法
       ├─ HandlerMethodArgumentResolver：解析参数
       │    └─ RequestResponseBodyMethodProcessor
       │         └─ HttpMessageConverter：JSON → DTO
       └─ HandlerMethodReturnValueHandler：处理返回值
            └─ HttpMessageConverter：VO → JSON

@RequestParam / @PathVariable 也由解析器处理，
不意味着所有请求都需要 JSON DTO。`,
    'plaintext','HandlerAdapter.components.txt',
    'Mapping 负责找，Adapter 负责执行。参数解析、校验、转换器选择与返回值处理是不同职责；不是 Mapper 数据库接口。',spring+'mvc-servlet/special-bean-types.html'),
  node('mvc','Spring MVC','表示层框架','Spring ApplicationContext 内的 Web 基础设施',
    'Spring MVC 是 Servlet 栈上的 Web 框架，包括前端控制器、映射、适配、参数解析、校验、返回值处理、异常处理等。Controller 是它使用的业务入口，不等于整个 MVC。',
    ['Servlet 容器把请求送到 DispatcherServlet。','MVC 基础设施寻找并适配 Controller 方法。','Controller 将业务交给 Service，并返回视图信息或响应对象。','传统 MVC 可渲染 View；REST 常把对象转为 JSON，前端自行渲染界面。'],
    `Servlet 栈
Tomcat → DispatcherServlet
             ├─ HandlerMapping
             ├─ HandlerAdapter / 参数与返回值处理
             ├─ HandlerInterceptor
             ├─ HandlerExceptionResolver
             └─ ViewResolver（需要服务端 View 时）

@RestController = @Controller + @ResponseBody 的语义组合
Service / Mapper 是项目分层，并非 MVC 必须规定的三层。`,
    'plaintext','SpringMVC.structure.txt',
    'MVC 的 Model/View/Controller 与工程 Controller/Service/Mapper 不是同一套分类。Spring Boot 自动配置 MVC，不表示 Boot 就是 MVC。',spring+'mvc-servlet.html'),
  node('dto','DTO','输入数据契约','HTTP 与应用边界',
    'DTO（Data Transfer Object）表达传输数据。请求 DTO 接收允许客户端提供的字段，通过消息转换或参数解析构造，再执行基础校验。',
    ['JSON 由选中的 HttpMessageConverter/Jackson 读取为目标 Java 类型。','字段映射、类型转换失败时可能在进入 Controller 方法之前被拒绝。','@Valid 配合约束检查必填、格式与范围；跨字段、权限和并发规则仍需业务处理。','显式映射 DTO 到业务对象，防客户端覆盖 status、审计或权限字段。'],
    `record CreateEmployeeRequest(
    @NotBlank String username,
    @NotBlank String name,
    @Positive Long departmentId,
    @Min(0) long salary) {}

@PostMapping("/employees")
EmployeeView create(@Valid @RequestBody CreateEmployeeRequest dto) {
  return employeeService.create(dto);
}
// DTO 不接收 createUser / passwordHash / version 等内部字段。`,
    'java','CreateEmployeeRequest.java',
    '上例说明请求体绑定机制，具体字段以当前业务文件为准。DTO 也可用于响应或服务间传输，不是数据库表；@Valid 不提供授权或唯一性保证。',spring+'mvc-controller/ann-methods/requestbody.html'),
  node('controller','Controller','HTTP 适配边界','MVC Handler / Spring Bean',
    'Controller 接收已经绑定的参数，调用应用业务，并选择返回状态与表示。它把 HTTP 合约与业务服务连接起来。',
    ['映射找到方法，适配器准备参数。','方法取得 DTO、路径/查询参数和可信身份上下文。','调用 Service，接收业务结果或异常。','返回 VO/ResponseEntity，交给返回值处理链；避免手写 JDBC 或容器生命周期。'],
    '', 'java','EmployeeController.java',
    '用户输入的 operatorId 不能直接当可信身份。HTTP 200、201、204、404、409 应依据合约；业务异常由适用的统一异常机制转换。',spring+'mvc-controller.html'),
  node('service','Service','业务与事务','Spring Bean / 可被 AOP 代理',
    'Service 组织一个业务用例：验证业务规则、决定数据修改、协调 Mapper，并定义合适的事务边界。',
    ['外部调用通过受管理的 Service Bean/代理进入。','事务拦截器按传播、回滚规则和事务管理器启动或加入事务。','目标方法执行业务与数据库操作，可跨多张表。','正常返回时尝试提交；指定异常触发回滚。事务代理返回之后，MVC 才继续处理响应。'],
    '', 'java','EmployeeService.java',
    '默认代理模式的 this 自调用不会经过代理。吞异常、长外部调用、跨数据源或 HTTP 操作都可能破坏预期；本地事务不自动保证远端一致性。','https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html'),
  node('entity','Entity / DO','持久化数据形态','业务与数据库映射边界',
    '本项目的 Entity/DO 表达员工持久字段。它与输入 DTO、输出 VO 的字段与用途可以不同；命名不是唯一标准。',
    ['DTO 提供经过接纳的输入字段。','业务代码补充状态、版本、审计等服务器控制字段。','Mapper 将持久化对象字段绑定到 SQL，或从结果行映射对象。','返回接口前选择展示字段形成 VO；不能默认暴露持久化对象全部属性。'],
    `class EmployeeEntity {
  Long id;
  String username;
  String name;
  Long departmentId;
  long salary;
  String status;
  int version;
}

// DTO → Entity 是显式数据映射，不是继承关系。
// MyBatis 的 POJO 不自动拥有 JPA 的实体状态机。`,
    'java','EmployeeEntity.java',
    'Entity 也可能表示领域实体或 JPA @Entity，需要限定语境。字段名与列名、ResultMap、生成键、NULL 映射都应具体配置，而非靠名称想当然。','https://mybatis.org/mybatis-3/sqlmap-xml.html'),
  node('mapper','Mapper / MyBatis','SQL 映射与执行','DAO / 数据访问适配层',
    'Mapper 接口通常由 MyBatis 代理实现，方法映射为 SQL，处理参数绑定与结果映射。它不是 HandlerMapping，也不负责 HTTP 路由。',
    ['调用代理方法，找到对应 MappedStatement。','处理动态 SQL 和参数，形成带占位符的最终语句。','通过 Executor、StatementHandler 等与 JDBC 交互。','ResultSet 经映射成为 Java 对象；由业务决定返回哪些字段。'],
    '', 'java','EmployeeMapper.java',
    '#{值} 通过绑定避免把值拼成语法；${文本} 是拼接，需要严格白名单。表名/排序列通常不能像普通值那样绑定。','https://mybatis.org/mybatis-3/sqlmap-xml.html'),
  node('jdbc','JDBC / 连接池','数据库协议适配','MyBatis 与数据库之间',
    'JDBC 是 Java 数据库访问 API；驱动实现与数据库通信，连接池复用连接。MyBatis 封装常见 JDBC 工作，但没有消除连接与事务的约束。',
    ['从 DataSource 获取连接；事务上下文可能复用已绑定连接。','创建 PreparedStatement，按位置设置参数。','执行 SQL，取得行数或 ResultSet。','释放语句、结果集，并由事务/连接管理结束使用；池化连接 close 通常归还池。'],
    `try (Connection conn = dataSource.getConnection();
     PreparedStatement ps = conn.prepareStatement(
       "SELECT id,name FROM employee WHERE id=?")) {
  ps.setLong(1, 3L);
  try (ResultSet rs = ps.executeQuery()) {
    while (rs.next()) {
      long id = rs.getLong("id");
      String name = rs.getString("name");
    }
  }
}
// 独立 JDBC 例子；Spring/MyBatis 项目由其事务集成管理连接。`,
    'java','JdbcExample.java',
    'PreparedStatement 绑定不是权限校验，驱动也不一定使用服务端预编译。池大小、SQL 耗时与锁等待共同决定瓶颈，不能盲目增大连接数。','https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html'),
  node('sql','SQL / 数据库','关系运算与持久化','数据库进程',
    '数据库执行关系运算、约束检查与数据读写；SQL 是表达这些操作的语言。一次 Service 用例可以执行多条 SQL，甚至跨多张表。',
    ['数据库解析语句并依据实际引擎选择执行计划。','根据谓词、连接、分组、排序等得到结果或执行写入。','约束、锁、隔离与事务控制影响并发下的行为。','返回结果行、更新计数或异常，经 JDBC/MyBatis 返回业务层。'],
    '', 'sql','query.sql',
    '本工作台只在 SQLite 真实执行 SQL；MySQL 的锁、MVCC、优化器和方言必须在 MySQL 环境核对。结果表行数不自动等于业务实体个数。','https://dev.mysql.com/doc/refman/8.4/en/sql-statements.html'),
  node('vo','VO / 响应对象','输出数据契约','应用与 HTTP 响应边界',
    '这里 VO 指 View Object：为前端展示设计的对象。它可以合并多表字段和子列表，隐藏持久化内部字段。VO 在领域建模里也可能指 Value Object。',
    ['Service 或表示层取得业务结果、实体或查询投影。','按接口合约选择字段并组装单对象、集合或分页对象。','一对多查询的多行结果需按父 ID 归组；直接 LIMIT JOIN 行常不是正确父对象分页。','返回值处理器选择转换器，把 VO 序列化为 JSON。'],
    `record DepartmentBrief(long id, String name) {}
record ProjectBrief(long id, String name) {}
record EmployeeDetailView(long id, String name,
    DepartmentBrief department, List<ProjectBrief> projects) {}

// 多表结果不是必须直接输出“平铺重复行”。
// 无部门：department=null；无项目：projects=[]。
// 组装需考虑 NULL、重复子行、字段授权及父对象分页。`,
    'java','EmployeeView.java',
    'VO 不是必须继承 Entity 或 DTO。Map 转 JSON 的实验只帮助观察列与值，不能自动替代正式 VO、分页外壳与敏感字段审查。',spring+'mvc-controller/ann-methods/return-types.html'),
  node('json','Jackson / Converter','响应转换','MVC 返回值处理链',
    'HttpMessageConverter 是消息体读写的框架契约，Jackson 是常见 JSON 映射引擎。MVC 返回值处理器选择适用转换器，把 Java 对象写成响应表示。',
    ['处理返回类型，例如 @ResponseBody 或 ResponseEntity。','结合可用转换器、Content-Type、Accept 与映射条件选择表示。','Jackson 按序列化配置把对象、集合或记录组件写成 JSON。','容器发送响应；序列化或网络失败不撤销已经提交的业务事务。'],
    `// Java 输出对象
new EmployeeDetailView(3, "王五", department, projects);

// 示例 HTTP 表示（这里只展示数据形态）
HTTP/1.1 200 OK
Content-Type: application/json

{"id":3,"name":"王五",
 "department":{"id":2,"name":"产品"},
 "projects":[{"id":2,"name":"账务"},{"id":3,"name":"推荐"}]}`,
    'plaintext','response.http',
    'Jackson 不负责选择 SQL 或开启事务。懒加载、循环引用和异常对象暴露都可能影响序列化；HTTP 已提交之后不能简单替换为另一错误响应。',spring+'message-converters.html'),
  node('interceptor','Interceptor','MVC 处理器横切','HandlerExecutionChain',
    'HandlerInterceptor 围绕已经映射的 handler 执行，能看到方法相关上下文；Filter 围绕 Servlet 请求执行，二者位置、覆盖面和错误路径不同。',
    ['HandlerMapping 返回 handler 与适用拦截器链。','按顺序执行 preHandle；false 可停止后续 handler。','正常执行后进行 postHandle，适用情况下进行 afterCompletion 清理。','异步请求、异常、未匹配路径等有不同回调行为，需要结合实际配置测试。'],
    `class TimingInterceptor implements HandlerInterceptor {
  public boolean preHandle(HttpServletRequest request,
      HttpServletResponse response, Object handler) {
    request.setAttribute("startedAt", System.nanoTime());
    return true;
  }
  public void afterCompletion(HttpServletRequest request,
      HttpServletResponse response, Object handler, Exception ex) {
    // 记录本次 handler 的完成状态；不把请求状态存入实例字段。
  }
}
// 还需通过 WebMvcConfigurer.addInterceptors 注册并限定路径。`,
    'java','TimingInterceptor.java',
    '安全保护优先使用专门的安全链；拦截器路径匹配与 Controller 映射可能存在差异，不能把单个 JWT Interceptor 当成完整 Spring Security。',spring+'mvc-servlet/handlermapping-interceptor.html')
];
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function layerDiagram(selected,mode){
  const button=(id,label)=>`<button data-sql="layer" data-layer="${id}" class="${selected===id?'active':''}">${escape(label||requestLayers.find(n=>n.id===id).name)}</button>`;
  const run=['tomcat','filter','dispatcher','mapping','interceptor','adapter','dto','controller','service','entity','mapper','jdbc','sql','vo','json'];
  return `<section class="runtime-map"><div class="runtime-map-toolbar"><b>运行时全景</b><div>${[['containment','封装关系'],['sequence','请求顺序'],['data','数据形态']].map(([id,name])=>`<button data-sql="flow-mode" data-mode="${id}" class="${mode===id?'active':''}">${name}</button>`).join('')}</div></div>${mode==='containment'?`<div class="runtime-start">${button('boot')}<span>启动时组装 Bean、嵌入式容器与注册关系 ↓</span></div><div class="runtime-nested tomcat"><div class="runtime-group-title">${button('tomcat')}<span>Connector / Servlet 容器</span>${button('servlet','Servlet 契约 ↗')}</div><div class="runtime-filter">${button('filter')}<i>→ chain.doFilter →</i></div><div class="runtime-nested mvc"><div class="runtime-group-title">${button('mvc')}<span>框架能力，不等于三层架构</span></div><div class="runtime-component-row">${button('dispatcher')}${button('mapping')}${button('adapter')}${button('interceptor')}</div><div class="runtime-application"><span>应用业务分层</span>${button('controller')}<i>→</i>${button('service')}<i>→</i>${button('mapper')}</div><div class="runtime-data-mini">${button('dto')}${button('entity')}${button('vo')}${button('json')}</div></div></div><div class="runtime-external">${button('jdbc')}<i>↔</i>${button('sql')}<span>数据库进程在应用之外</span></div><p class="runtime-legend">边框表示运行位置与职责归属；Bean 的创建管理属于 Spring 容器。Filter 不属于 MVC，Boot 启动不是每次请求的第一步。</p>`:mode==='sequence'?`<div class="runtime-sequence">${run.map((id,i)=>`<div><small>${i+1}</small>${button(id)}${i<run.length-1?'<i>→</i>':''}</div>`).join('')}</div><p class="runtime-legend">同步 Servlet / 注解 REST 示例。Mapping 找方法 → Adapter 解析参数并调用；Service 事务代理提交后才返回。Entity/DTO/VO 是数据形态，不是三个额外服务；返回转换在 MVC 适配链内。</p>`:`<div class="runtime-data-flow"><div><span>HTTP 请求体</span><code>JSON / bytes</code></div><i>→</i>${button('dto')}<i>→</i>${button('entity')}<i>↔</i>${button('sql')}<i>→</i>${button('vo')}<i>→</i>${button('json')}</div><p class="runtime-legend">输入：HTTP → Converter/Jackson → DTO → 业务映射。输出：SQL 行 → 结果映射/归组 → VO → Converter/Jackson → JSON。GET 可直接使用路径/查询参数；不是所有请求都要经过同一 DTO。</p>`}</section>`;
}
export function layerExplanation(id){const n=requestLayers.find(n=>n.id===id);return `<div class="layer-explanation"><div><span>${escape(n.tag)} / ${escape(n.owner)}</span><h3>${escape(n.name)}</h3></div><p>${escape(n.meaning)}</p><ol>${n.mechanism.map(t=>`<li>${escape(t)}</li>`).join('')}</ol><div class="layer-boundary"><b>必须分清的边界</b><p>${escape(n.boundary)}</p></div><a href="${escape(n.source)}" target="_blank" rel="noopener noreferrer">官方机制 ↗</a></div>`;}
