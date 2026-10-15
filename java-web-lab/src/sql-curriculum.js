import {productionOperationCode} from './java-operation-code.js';
// SQL 在浏览器由 sql.js / SQLite 执行；Java 片段是服务端教学映射，非远程执行器。
// 每课的 expected 基于新建 schema + seed；连续运行修改会改变后续结果，需按需重置。
export const sqlLabBaseline = '生产讲解以 MySQL 8.4 / InnoDB 为基线。浏览器实验使用 SQLite，真实执行关系运算、绑定参数和提交/回滚，但不模拟 MySQL 行锁、MVCC、隔离级别、复制或优化器成本。LIKE 的大小写/排序规则、自动生成主键、类型与约束细节可能不同；生产须使用实际 MySQL 集成测试。Java片段省略包、import、DTO定义与统一异常处理；每课为独立对照片段，不能把重复路由全部注册在同一应用。Mapper展示MyBatis命名绑定，实验的 ? 是实际SQLite/JDBC风格绑定位置。';

export const schemaSql = `PRAGMA foreign_keys = ON;
CREATE TABLE department (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);
CREATE TABLE employee (
  id INTEGER PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  department_id INTEGER,
  salary INTEGER NOT NULL CHECK (salary >= 0),
  status TEXT NOT NULL DEFAULT 'ACTIVE'
    CHECK (status IN ('ACTIVE','INACTIVE','DELETED')),
  version INTEGER NOT NULL DEFAULT 0 CHECK (version >= 0),
  FOREIGN KEY (department_id) REFERENCES department(id)
);
CREATE TABLE project (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);
CREATE TABLE employee_project (
  employee_id INTEGER NOT NULL,
  project_id INTEGER NOT NULL,
  PRIMARY KEY (employee_id, project_id),
  FOREIGN KEY (employee_id) REFERENCES employee(id),
  FOREIGN KEY (project_id) REFERENCES project(id)
);
CREATE INDEX idx_employee_department ON employee(department_id);
CREATE INDEX idx_employee_status_salary_id ON employee(status, salary, id);
CREATE INDEX idx_employee_project_project ON employee_project(project_id);`;

export const seedSql = `INSERT INTO department(id,name) VALUES
  (1,'研发'),(2,'产品'),(3,'运营'),(4,'法务');
INSERT INTO employee(id,username,name,department_id,salary,status,version) VALUES
  (1,'alice','张三',1,10000,'ACTIVE',0),
  (2,'bob','李四',1,12000,'ACTIVE',0),
  (3,'carol','王五',2,9000,'ACTIVE',1),
  (4,'dave','赵六',2,8000,'INACTIVE',0),
  (5,'eve','钱七',NULL,7000,'ACTIVE',0),
  (6,'frank','孙八',3,12000,'ACTIVE',0),
  (7,'grace','周九',3,6000,'DELETED',2),
  (8,'heidi','吴十',NULL,5000,'ACTIVE',0);
INSERT INTO project(id,name) VALUES
  (1,'订单'),(2,'账务'),(3,'推荐'),(4,'待启动');
INSERT INTO employee_project(employee_id,project_id) VALUES
  (1,1),(1,2),(2,1),(3,2),(3,3),(4,3),(6,1),(7,2);`;

const col = (name,type,role) => ({name,type,role});
export const schemaTables = [
  {name:'department',description:'部门主表；部门 4 无员工，用来观察外连接与零计数。',columns:[col('id','INTEGER','PK：部门唯一标识'),col('name','TEXT','NOT NULL + UNIQUE：部门名')]},
  {name:'employee',description:'员工主表；5/8 未分配部门；4 停用；7 逻辑删除；2/6 工资并列。金额以整数元教学，真实金额宜用最小货币单位整数或精确 DECIMAL。',columns:[col('id','INTEGER','PK：员工唯一标识'),col('username','TEXT','NOT NULL + UNIQUE：不可重复账号'),col('name','TEXT','NOT NULL：展示姓名'),col('department_id','INTEGER','可空 FK → department.id'),col('salary','INTEGER','NOT NULL + CHECK >=0'),col('status','TEXT','ACTIVE / INACTIVE / DELETED'),col('version','INTEGER','乐观并发版本，非自动更新')]},
  {name:'project',description:'项目主表；项目 4 无成员，用于 NOT EXISTS。',columns:[col('id','INTEGER','PK：项目标识'),col('name','TEXT','NOT NULL + UNIQUE')]},
  {name:'employee_project',description:'多对多关系表；员工 1/3 各参加两个项目，制造连接扇出。',columns:[col('employee_id','INTEGER','FK → employee.id；联合 PK 第一列'),col('project_id','INTEGER','FK → project.id；联合 PK 第二列')]}
];

const doc = slug => `https://dev.mysql.com/doc/refman/8.4/en/${slug}.html`;
function lesson(id,group,title,goal,request,sql,params,walkthrough,pitfalls,expected,source,api={}) {
  const statement = sql.trim().split(/\s+/)[0].toUpperCase();
  const read = ['SELECT','WITH'].includes(statement);
  const method = api.method || id.replace(/-([a-z])/g,(_,c)=>c.toUpperCase());
  const names = api.names || params.map((_,i)=>`p${i}`);
  const types = params.map(v=>typeof v === 'number'?'long':'String');
  const args = names.map((n,i)=>`${types[i]} ${n}`).join(', ');
  const values = names.join(', ');
  const resultType = read?'List<Map<String, Object>>':'int';
  const path = api.path || request.split(/[ ?\n]/)[1] || '/employees';
  const verb = request.split(' ')[0];
  const mapping = {GET:'Get',POST:'Post',PATCH:'Patch',PUT:'Put',DELETE:'Delete'}[verb] || 'Post';
  const bindings = names.map((n,i)=>`@RequestParam ${types[i]} ${n}`).join(',\n    ');
  let parameterIndex=0;
  const mappedSql = sql.replace(/\?/g,()=>`#{${names[parameterIndex++]}}`);
  const annotation = read?'Select':statement==='INSERT'?'Insert':statement==='DELETE'?'Delete':'Update';
  const controller = api.controller || `@${mapping}Mapping("${path}")\npublic ${resultType} ${method}(\n    ${bindings}) {\n  return employeeService.${method}(${values});\n}`;
  const service = api.service || `${read?'':'@Transactional\n'}public ${resultType} ${method}(${args}) {\n  // 校验参数、当前用户权限与业务状态；SQL 绑定不是鉴权。\n  ${read?'return':'int affected ='} employeeMapper.${method}(${values});${read?'':'\n  // affected=0：无匹配或冲突；是否报 404/409 由接口合约决定。\n  return affected;'}\n}`;
  const mapper = api.mapper || `@${annotation}("""\n${mappedSql.split('\n').map(l=>'  '+l).join('\n')}\n  """)\n${resultType} ${method}(${names.map((n,i)=>`@Param("${n}") ${types[i]} ${n}`).join(', ')});`;
  return {id,group,title,goal,request,controller,service,mapper,sql,params,walkthrough,pitfalls,expected,source:doc(source),...productionOperationCode({id})};
}

export const sqlLessons = [
  lesson('create-employee','单表','新增：INSERT 的列、值、主键与生成键','把 HTTP 创建数据转换为绑定参数，理解唯一约束与插入结果。','POST /employees?id=9&username=ivan&name=郑十一&departmentId=1&salary=8500',
    `INSERT INTO employee(id,username,name,department_id,salary,status,version)
VALUES (?, ?, ?, ?, ?, 'ACTIVE', 0);`,[9,'ivan','郑十一',1,8500],
    ['HTTP JSON 经 Jackson 转为 CreateEmployeeRequest；Bean Validation 校验基础字段，Service 再校验权限和业务状态。','Service 组织创建，检查部门业务状态；数据库唯一约束是并发下最后一道约束。','Mapper 把 5 个参数分别绑定到 ?；列顺序与值顺序必须完全对应。','本例显式 id=9。生产 MySQL AUTO_INCREMENT 可省略 id 并通过生成键回填；不能用 SELECT MAX(id) 猜新主键。'],
    ['重复 username 报唯一约束错误；先查询“不存在”不能替代唯一索引。','自增键可能有空洞，不能把连续性当业务保证。','参数能绑定值，不能直接绑定任意表名/列名。'],
    '新增员工 9，salary=8500，status=ACTIVE，version=0；employee 共 9 行。','insert',{names:['id','username','name','departmentId','salary']}),
  lesson('read-by-id','单表','主键查询：空结果与 404','区分数据库无行、Java null/Optional、HTTP 404。','GET /employees?id=3',
    `SELECT id, username, name, department_id, salary, status, version
FROM employee
WHERE id = ? AND status <> 'DELETED';`,[3],
    ['主键谓词定位一个员工；status 条件实现默认屏蔽逻辑删除。','数据库返回 0 或 1 行，Mapper 映射成 EmployeeView；页面示例使用 Map 直观看列。','Service 对空结果转换为业务不存在，ControllerAdvice 将异常映射 404。','只选接口需要的列，避免暴露内部信息与无意义 SELECT *。'],
    ['查到行不代表当前用户有权查看；需要组织/租户等授权范围。','不要用空对象伪装成成功员工。'],
    '返回员工 3：carol / 王五 / 产品部门 2 / 9000 / ACTIVE / version=1。','select',{names:['id']}),
  lesson('update-by-id','单表','主键更新：只改需要的字段','理解 PATCH 与覆盖所有列的区别，检查影响行数。','PATCH /employees?id=3&name=王五改名',
    `UPDATE employee
SET name = ?
WHERE id = ? AND status <> 'DELETED';`,['王五改名',3],
    ['HTTP PATCH 表达部分修改；校验 name 非空且长度合理。','Service 先明确授权，再调用按主键更新的 Mapper。','数据库只更新 name，不覆盖 salary、department_id 等未提交字段。','本实验 SQLite changes 表示该语句影响行数；MySQL JDBC 的 changed/matched 计数可受驱动配置影响，不能跨引擎照搬。'],
    ['遗漏 WHERE 会更新全表；SQL 审查必须看谓词。','更新不存在的 id 返回 0，应按合约区分不存在/版本冲突。'],
    'id=3 的 name 变为 王五改名，其他列保持；重新运行同一语句的 affected 语义需看引擎。','update',{names:['name','id']}),
  lesson('delete-by-id','单表','物理删除：外键会保护什么','理解 DELETE 对行的影响与被引用数据的删除策略。','DELETE /employees?id=8',
    `DELETE FROM employee WHERE id = ?;`,[8],
    ['本例 employee 8 没有项目关联，允许物理删除。','DELETE 删除记录，不删除表结构；TRUNCATE、DROP 是不同操作。','生产业务先决定数据保留/审计/关联处理策略，再选择物理删除。','删除 employee 1 会因关系表仍引用它而失败；需显式清理关系或明确级联策略。'],
    ['不能为绕过错误而关闭外键。','无 WHERE 删除全表；条件和权限必须一起审查。'],
    '员工 8 删除，employee 从 8 行变 7 行；其余表不变。','delete',{names:['id']}),
  lesson('logical-delete','单表','逻辑删除：写与读都要遵守规则','用状态转移代替删行，并理解唯一键与关联仍存在。','DELETE /employees/logical?id=3',
    `UPDATE employee
SET status = 'DELETED', version = version + 1
WHERE id = ? AND status <> 'DELETED';`,[3],
    ['Service 将“删除”解释为状态转移；数据库行继续保留。','WHERE 避免重复操作再次递增版本，影响行数可判断首次与重复。','所有默认列表、详情和关联统计都需约定是否排除 DELETED。','username 唯一约束仍占用 carol；逻辑删除不自动允许重用用户名。'],
    ['关系表仍在；统计成员是否排除删除员工需显式条件。','保留数据与隐私删除不是同一业务要求。'],
    '员工 3 status=DELETED、version=2；物理行数仍为 8。','update',{names:['id']}),
  lesson('and-or','单表','条件组合：括号决定业务含义','筛选“在职且属于研发或产品”，防 OR 绕过公共条件。','GET /employees/search?departmentA=1&departmentB=2',
    `SELECT id, name, department_id, status
FROM employee
WHERE status = 'ACTIVE'
  AND (department_id = ? OR department_id = ?)
ORDER BY id;`,[1,2],
    ['先画真值：status 必须 ACTIVE，部门满足 1 或 2 中任一。','AND 优先级高于 OR；括号明确让公共状态约束覆盖两条部门分支。','去掉括号会变成 (ACTIVE 且部门1) 或部门2，停用员工4也进入。','动态 MyBatis where 条件也必须保持同样分组，不能靠字符串看着顺眼。'],
    ['OR 分支常误绕过租户/权限/逻辑删除条件。','NULL department_id 与 =1/=2 都不是 TRUE，因此不入选。'],
    'id=1、2、3 共 3 行；去掉括号会多出 INACTIVE 的 id=4。','operator-precedence',{names:['departmentA','departmentB']}),
  lesson('in-set','单表','IN：集合过滤与空集合','用 IN 表达多个同列等值条件，理解参数数量。','GET /employees?ids=1,3,8',
    `SELECT id, name FROM employee
WHERE id IN (?, ?, ?)
ORDER BY id;`,[1,3,8],
    ['一个 ? 只绑定一个值，不能把 "1,3,8" 当三个值。','Service 把 CSV 转换并校验为 ID 列表，限制最大数量。','MyBatis foreach 为每个元素生成一个 #{item}，不要 ${csv} 拼接。','空集合要约定返回空结果或拒绝，不能静默删除 IN 条件变全表。'],
    ['IN 不是按输入 ID 顺序返回；仍需 ORDER BY。','大集合需考虑请求大小、绑定数限制和批次。'],
    '返回 1 张三、3 王五、8 吴十。','comparison-operators',{names:['id1','id2','id3']}),
  lesson('between-range','单表','BETWEEN：包含两端的范围','准确区分工资区间与日期半开区间。','GET /employees?minSalary=8000&maxSalary=10000',
    `SELECT id,name,salary FROM employee
WHERE salary BETWEEN ? AND ?
ORDER BY salary, id;`,[8000,10000],
    ['BETWEEN 等价于 >= 下界且 <= 上界，包括 8000 与 10000。','先验证 min<=max；这里没筛状态，因此 INACTIVE 的员工4也返回。','日期时间查询通常更适合 >=start AND <nextBoundary，避免一天末尾精度问题。'],
    ['界限反过来不会自动交换。','业务要求在职必须另加 status 条件。'],
    'id=4 /8000，3 /9000，1 /10000，共 3 行。','comparison-operators',{names:['minSalary','maxSalary']}),
  lesson('like-prefix','单表','LIKE：前缀、包含与通配符','理解匹配语义与输入转义；查询模式与排序规则有关。','GET /employees?usernamePrefix=a',
    `SELECT id,username,name FROM employee
WHERE username LIKE ?
ORDER BY id;`,['a%'],
    ['% 匹配零或多个字符，_ 匹配单字符；a% 是前缀，%a% 是包含。','Service 生成匹配模式作为绑定值；SQL 绑定防注入，但不会把 %/_ 自动变成普通字符。','搜索字面量含 %/_ 时应统一 ESCAPE 策略；大小写与中文比较遵从实际排序规则。','是否走索引须在实际 MySQL 数据与执行计划验证，SQLite 计划不能替代生产计划。'],
    ['包含匹配通常难用常规 B-tree 前缀定位，不能宣称所有 LIKE 都走索引。','用户输入模式可扩大结果范围，需分页与长度限制。'],
    'a% 返回 alice / 张三。','string-comparison-functions',{names:['pattern']}),
  lesson('null-check','单表','NULL：未知不等于空字符串','查未分配部门员工，观察三值逻辑。','GET /employees/unassigned',
    `SELECT id,name,department_id
FROM employee
WHERE department_id IS NULL
ORDER BY id;`,[],
    ['NULL 表示缺失/未知；比较 =NULL 或 <>NULL 不会得到 TRUE。','WHERE 只保留 TRUE，FALSE 和 UNKNOWN 都被过滤。','用 IS NULL / IS NOT NULL 明确处理。','字符串空值、数字0、缺失部门不是同一种数据。'],
    ['NOT IN 子查询含 NULL 可能导致意外空结果。','可空外键允许未分配，并不等于指向 id=0。'],
    '返回 id=5 钱七、8 吴十；将条件改为 =NULL 则返回 0 行。','working-with-null'),
  lesson('distinct','单表','DISTINCT：去重的是整个选定组合','查看员工出现过的部门，不误以为自动按 id 去重。','GET /employees/department-ids',
    `SELECT DISTINCT department_id
FROM employee
ORDER BY department_id;`,[],
    ['先投影 department_id，再对相同投影结果去重。','样本部门值包含 NULL、1、2、3；部门4没有员工所以不出现。','若 SELECT DISTINCT department_id,name，名字不同的记录仍是不同组合。'],
    ['DISTINCT 不是修复错误 JOIN 的通用按钮。','NULL 排序位置和 collation 有引擎差异；本实验看到 SQLite 顺序。'],
    'SQLite 按此 ORDER BY 显示 NULL、1、2、3，共 4 个值。','select'),
  lesson('stable-order','单表','稳定排序：并列值加唯一键','让工资榜在并列工资时仍有明确次序。','GET /employees/salary-ranking',
    `SELECT id,name,salary FROM employee
WHERE status = 'ACTIVE'
ORDER BY salary DESC, id ASC;`,[],
    ['第一排序 salary 降序；同为12000的2与6，用 id 升序决定先后。','ORDER BY 写出 API 承诺的顺序，不依赖磁盘布局/主键碰巧返回。','唯一决胜列保证固定数据集的全序；并发修改仍可能让下一页数据移动。'],
    ['只按非唯一工资排序的 OFFSET 分页可能出现不稳定并列顺序。','客户端任意排序列不能直接 ${sort}，用白名单映射。'],
    '在职顺序 id=2、6、1、3、5、8。','select'),
  lesson('offset-page','单表','LIMIT/OFFSET：页码与跳过数量','把 page,size 转成受限 offset，解释深分页。','GET /employees?page=2&size=2',
    `SELECT id,name,salary FROM employee
WHERE status = 'ACTIVE'
ORDER BY salary DESC, id ASC
LIMIT ? OFFSET ?;`,[2,2],
    ['约定页码从1开始，offset=(page−1)×size，本例2。','数据库按稳定排序，跳过前两名，取最多2行。','Service 校验 page>=1、size 在上限内，防整数溢出与无限大查询。','大 offset 需要处理/跳过更多候选，生产用 EXPLAIN 验证并考虑 keyset。'],
    ['列表长度是本页条数，不是总条数。','固定顺序仍不等于跨页固定快照；并发写入可能重复或漏读。'],
    '第二页返回 id=1 张三10000、3 王五9000。','select',{names:['limit','offset']}),
  lesson('count-total','单表','COUNT：总量查询不是分页结果长度','让 total 与 items 使用相同筛选口径。','GET /employees/count?status=ACTIVE',
    `SELECT COUNT(*) AS total
FROM employee
WHERE status = ?;`,['ACTIVE'],
    ['COUNT 在同筛选条件下计算全部匹配行，不加分页 LIMIT。','上课的列表第一页2条，但总数6；空列表也可能是页码超界。','Service 可以封装 Page(items,total,page,size)；COUNT 与列表是两次查询。','两次查询间发生并发修改时口径一致也不保证同一时刻快照；有要求则明确事务/快照策略。'],
    ['COUNT(col) 排除 NULL，COUNT(*) 计行。','不要 COUNT 已分页子查询再当全量总数。'],
    'total=6，结果集是一行统计值。','aggregate-functions',{names:['status']}),
  lesson('keyset-page','进阶','Keyset：用上一页游标定位后续行','为工资降序、id升序构造正确词典序谓词。','GET /employees/cursor?salary=12000&id=6&size=2',
    `SELECT id,name,salary FROM employee
WHERE status = 'ACTIVE'
  AND (salary < ? OR (salary = ? AND id > ?))
ORDER BY salary DESC, id ASC
LIMIT ?;`,[12000,12000,6,2],
    ['上一页末尾是 (salary=12000,id=6)，游标包含全部排序键。','工资更低的行在后面；工资相等时 id 更大才在后面。','本例取接下来的1与3，避免 OFFSET 随深页增长。','游标签名/校验并绑定筛选条件；排序字段并发修改仍需业务一致性设计。'],
    ['不能只用 id>6，因为本例排序首先看工资。','不适合任意跳第100页；需要产品取舍。'],
    '返回 id=1/10000、3/9000。','select',{names:['lastSalary','sameSalary','lastId','limit']}),
  lesson('optimistic-update','进阶','乐观更新：版本条件与冲突','用数据库条件保护“我修改的是刚读过的版本”。','PATCH /employees/salary?id=3&salary=9500&version=1',
    `UPDATE employee
SET salary = ?, version = version + 1
WHERE id = ? AND version = ? AND status = 'ACTIVE';`,[9500,3,1],
    ['客户端读取 id3 version1；提交旧版本令牌。','数据库将版本比较与修改作为同一语句执行。','首次影响1行并变version2；原params重复执行影响0行。','Service 对0行核实不存在/状态不允许/并发冲突，常映射409，不能盲目宣称成功。'],
    ['version 不是数据库自动魔法，每条相关更新都需维护一致约定。','自动重试要重新读并合并业务意图，不能覆盖别人的字段。'],
    '首次 salary=9500、version=2；同参数第二次不再修改。','update',{names:['salary','id','version']}),
  lesson('unique-constraint','进阶','唯一、非空与 CHECK：把约束落到数据库','观察真实约束错误，明确失败不等于回滚整笔业务。','POST /employees?id=9&username=alice&name=重复账号&departmentId=1&salary=8500',
    `INSERT INTO employee(id,username,name,department_id,salary,status,version)
VALUES (?, ?, ?, ?, ?, 'ACTIVE', 0);`,[9,'alice','重复账号',1,8500],
    ['username alice 已存在，数据库 UNIQUE 拒绝新行。','本课预期报错是正确结果，不是 SQL 引擎故障。','将第二个绑定值改为新用户名再运行；把 salary 改负数观察 CHECK。','真实 Java 服务把特定约束冲突转清楚错误码；日志保留原因，不把内部SQL全文暴露用户。'],
    ['先 SELECT 后 INSERT 仍会并发撞唯一键。','SQLite 类型约束不等同 MySQL 严格模式；不能据实验推出生产类型行为。'],
    '默认参数报 UNIQUE constraint failed，employee 仍8行；修改新账号才成功。','create-table',{names:['id','username','name','departmentId','salary']}),
  lesson('batch-insert','单表','批量新增：多行值与事务边界','一次写入两名员工，理解 batch 不等于无限批次。','POST /employees/batch',
    `INSERT INTO employee(id,username,name,department_id,salary,status,version)
VALUES (9,'ivan','郑十一',1,8500,'ACTIVE',0),
       (10,'judy','冯十二',2,8800,'ACTIVE',0);`,[],
    ['一个 INSERT 包含两组完整列值。','真实接收 DTO 列表时逐行校验并参数绑定，限制批次大小。','本语句在数据库中作为一条语句执行；大量批次与其他表写入仍需明确定义事务。'],
    ['不要用吞错继续来模糊“部分成功”合约。','MySQL JDBC batch/rewrite 配置与生成键行为需生产验证。'],
    '新增9/10，employee共10行。','insert'),

  lesson('fk-reject','多表','PK/FK：关系引用与外键拒绝','理解主键唯一身份与外键参照完整性。','POST /employees?id=9&username=ivan&name=郑十一&departmentId=99&salary=8500',
    `INSERT INTO employee(id,username,name,department_id,salary,status,version)
VALUES (?, ?, ?, ?, ?, 'ACTIVE', 0);`,[9,'ivan','郑十一',99,8500],
    ['department PK 保证一个 id 唯一；employee.department_id 引用已存在部门。','id99 部门不存在，因此启用外键的 SQLite 拒绝插入。','允许 NULL 表示尚未分配，NULL 不是需要存在的部门键。','MySQL InnoDB 外键也有参照规则；本实验显式 PRAGMA foreign_keys=ON，不依赖 SQLite 默认值。'],
    ['外键维护引用，不替代用户对该部门的访问权限。','不能因为业务先校验就去掉数据库约束。'],
    '报 FOREIGN KEY constraint failed；员工表无变化。','create-table-foreign-keys',{names:['id','username','name','departmentId','salary']}),
  lesson('inner-join','多表','INNER JOIN：只保留能匹配的行','把部门名称附加到员工，观察无部门员工被排除。','GET /employees/with-department',
    `SELECT e.id,e.name,d.name AS department_name
FROM employee AS e
INNER JOIN department AS d ON d.id = e.department_id
ORDER BY e.id;`,[],
    ['e/d 是别名；ON 表示员工外键等于部门主键。','每个有部门员工匹配唯一部门，形成6行。','未分配部门的5/8没有满足相等的部门，INNER JOIN 不保留。','没有 status 条件，因此停用4与删除7也在结果中；业务需显式筛。'],
    ['遗漏 ON 或错误关联列会得到无意义组合。','同名列要写 e.id/d.id，输出别名避免映射覆盖。'],
    '返回员工1、2、3、4、6、7，共6行。','join'),
  lesson('left-join','多表','LEFT JOIN：保留左表与 NULL 扩展','即使未分配部门也返回员工。','GET /employees/all-with-department',
    `SELECT e.id,e.name,d.name AS department_name
FROM employee AS e
LEFT JOIN department AS d ON d.id = e.department_id
ORDER BY e.id;`,[],
    ['左侧 employee 决定需要保留的主体。','有部门正常匹配，无部门补一行右侧列 NULL。','可以在前端显示“未分配”，数据库保持 NULL 与真实部门名区别。'],
    ['随后 WHERE d.name=... 会过滤补 NULL 行，可能改变保留需求。','LEFT JOIN 不意味着一名员工总一行；右侧若多匹配仍会扇出。'],
    '8名员工全部返回；5/8的 department_name=NULL。','join'),
  lesson('cross-join','多表','CROSS JOIN：所有组合为何爆量','观察笛卡尔积，判断它是需求还是漏关联条件。','GET /department-project-combinations',
    `SELECT d.id AS department_id,p.id AS project_id
FROM department AS d CROSS JOIN project AS p
ORDER BY d.id,p.id;`,[],
    ['4部门与4项目全部配对，共4×4=16。','适合生成维度组合、排班候选等明确需求。','如果只想员工所属部门，CROSS JOIN 是错误模型，不能事后 DISTINCT 掩盖。'],
    ['大表相乘可产生巨量中间结果。','返回16行不说明优化器真的逐个物化，应区分逻辑语义与执行计划。'],
    '16组部门-项目组合。','join'),
  lesson('self-join','多表','Self JOIN：同一表用两个角色','查找同部门员工对，每对只显示一次。','GET /employees/colleagues',
    `SELECT a.id AS employee_a,b.id AS employee_b,a.department_id
FROM employee AS a
JOIN employee AS b
  ON a.department_id = b.department_id AND a.id < b.id
ORDER BY a.id,b.id;`,[],
    ['a/b 是同表两个逻辑角色，不是复制出两张物理表。','同部门相等先形成同事关系；a.id<b.id 排除自己与反向重复。','NULL 部门之间相等为 UNKNOWN，本例不会把所有未分配员工当同部门。'],
    ['只用 a.id<>b.id 会出现 (1,2) 和 (2,1) 两方向。','状态范围要同时约束 a/b 才能符合“在职同事”。'],
    '配对(1,2)研发、(3,4)产品、(6,7)运营，共3行。','join'),
  lesson('on-preserves-parent','多表','ON 筛子表：保留所有部门','列出所有部门及其在职员工，空部门仍出现。','GET /departments/active-members',
    `SELECT d.id AS department_id,d.name,e.id AS employee_id
FROM department AS d
LEFT JOIN employee AS e
  ON e.department_id = d.id AND e.status = 'ACTIVE'
ORDER BY d.id,e.id;`,[],
    ['ON 决定哪些员工有资格匹配该部门。','LEFT JOIN 对没有合格员工的部门仍补 NULL。','研发1/2两人、产品3一人、运营6一人、法务一条NULL，共5行。'],
    ['把状态放 WHERE e.status=ACTIVE，会丢失没有合格员工的部门。','NULL 扩展行不是真正存在一个 id=NULL 的员工。'],
    '5行，部门4保留且employee_id=NULL。','join'),
  lesson('where-removes-null','多表','WHERE 筛子表：为何外连接失去空部门','与上一课对照，看匹配之后的过滤。','GET /departments/matched-active-only',
    `SELECT d.id AS department_id,d.name,e.id AS employee_id
FROM department AS d
LEFT JOIN employee AS e ON e.department_id = d.id
WHERE e.status = 'ACTIVE'
ORDER BY d.id,e.id;`,[],
    ['先按部门连接所有员工；空部门生成 e.status=NULL。','WHERE 要求 ACTIVE，为 NULL 的结果不是TRUE，因此删除补行。','此需求只保留确有在职匹配的组合，结果4行；若需要所有部门就用前课ON条件。'],
    ['LEFT JOIN 语法仍在，但 WHERE 可能在语义上消除空匹配。','WHERE e.status=ACTIVE OR e.id IS NULL 也不一定等价ON：部门只有停用员工时不存在补NULL行。'],
    '4行，部门4消失。可把部门2员工都设停用来观察 OR NULL 的陷阱。','join'),
  lesson('fanout','多表','1:N 扇出：行数不等于员工数','把员工参加的项目展开，看重复员工是关系还是错误。','GET /employees/projects',
    `SELECT e.id,e.name,p.name AS project_name
FROM employee AS e
JOIN employee_project AS ep ON ep.employee_id = e.id
JOIN project AS p ON p.id = ep.project_id
ORDER BY e.id,p.id;`,[],
    ['employee → employee_project 是1:N；关系表 → project 是N:1。','员工1/3各有两关系，分别出现两行；其余关系各一行。','共8个关系，不是8名不同员工。Java 可用 resultMap collection 分组或批量查子表。'],
    ['直接 COUNT(*) 得到关系数，不是员工数。','去重 employee_id 会丢失项目列信息；先明确接口要平面行还是嵌套对象。'],
    '8行，对应6名有项目员工；员工1、3各两行。','join'),
  lesson('parent-page','多表','父表分页：先选员工再加载项目','每页两名员工，而不是 LIMIT 两条关联行。','GET /employees/project-page?page=1&size=2',
    `WITH page_employee AS (
  SELECT id,name FROM employee
  WHERE status = 'ACTIVE'
  ORDER BY id LIMIT ? OFFSET ?
)
SELECT e.id,e.name,p.name AS project_name
FROM page_employee AS e
LEFT JOIN employee_project AS ep ON ep.employee_id = e.id
LEFT JOIN project AS p ON p.id = ep.project_id
ORDER BY e.id,p.id;`,[2,0],
    ['CTE 先在父表选出员工1/2，共两名。','再关联其全部项目，结果3行：员工1有两行、员工2一行。','生产也可两次批量查询：父页 + WHERE employee_id IN (...) 子记录，避免每个员工一条N+1。','分页 total 统计父表同筛选条件；不要统计关联行。'],
    ['JOIN 后 LIMIT 2 会仅返回员工1的两项目，页面看似两行其实只有一名员工。','跨两次查询的一致性需求需要明确；CTE不是自动性能保证。'],
    '员工1订单/账务、员工2订单，共3行但2个父对象。','with',{names:['limit','offset']}),
  lesson('many-to-many-read','多表','M:N 中间表：一个项目有多名员工','按项目找成员，并理解联合主键防重复关系。','GET /projects/members?projectId=1',
    `SELECT p.id AS project_id,p.name AS project_name,e.id,e.name
FROM project AS p
JOIN employee_project AS ep ON ep.project_id = p.id
JOIN employee AS e ON e.id = ep.employee_id
WHERE p.id = ? AND e.status = 'ACTIVE'
ORDER BY e.id;`,[1],
    ['项目与员工互为多对多，不能在员工一列中存CSV项目列表。','中间表每行是一条关系，联合PK(employee_id,project_id)阻止重复对。','按项目过滤再连接员工，状态条件决定有效成员。'],
    ['关联表还可保存加入时间/角色，这些属性属于关系。','关系PK反向查询不一定够，实验另建 project_id 索引。'],
    '订单项目在职成员1张三、2李四、6孙八。','create-table-foreign-keys',{names:['projectId']}),
  lesson('relation-insert','多表','增加关联：只新增中间表一行','已有员工加入已有项目，不重复创建主表。','POST /projects/members?employeeId=5&projectId=3',
    `INSERT INTO employee_project(employee_id,project_id)
VALUES (?, ?);`,[5,3],
    ['Service 校验员工/项目可用及授权；FK保证引用存在，联合PK保证关系唯一。','没有修改employee.department_id；部门归属与项目参与是不同关系。','重复运行会撞联合主键；接口需定义重复加入是幂等成功还是409。'],
    ['不能使用无约束“先查不存在再插”作为唯一防重。','外键存在不代表员工ACTIVE，业务条件仍由Service负责。'],
    '新增(5,3)；关系表从8行变9行。','insert',{names:['employeeId','projectId']}),
  lesson('relation-delete','多表','移除关联：解绑不是删除员工','同时限制两列，只移除一个关系。','DELETE /projects/members?employeeId=1&projectId=2',
    `DELETE FROM employee_project
WHERE employee_id = ? AND project_id = ?;`,[1,2],
    ['要删除的是员工1参与项目2这个关系，不是employee1或project2。','联合条件精确限定目标；只按employee_id会删除其所有项目。','Service检查当前用户是否能管理项目2，并记录审计。'],
    ['把“解绑”误做删除主表会触发数据损失或外键错误。','重复解绑0行的响应语义应与接口幂等性约定一致。'],
    '仅(1,2)删除；员工1仍存在并保留(1,1)，关系表7行。','delete',{names:['employeeId','projectId']}),
  lesson('exists','多表','EXISTS：只问有没有，不展开子行','查询参加至少一个项目的员工而不重复员工。','GET /employees/with-any-project',
    `SELECT e.id,e.name FROM employee AS e
WHERE EXISTS (
  SELECT 1 FROM employee_project AS ep
  WHERE ep.employee_id = e.id
)
ORDER BY e.id;`,[],
    ['对子查询按当前员工关联；只看是否存在至少一行。','员工1有两个项目仍只输出一次；没有产生项目列的扇出。','SELECT 1 是存在性意图，不是要求子行内容等于1。'],
    ['别用 JOIN 后 DISTINCT 当所有存在性问题的唯一解法。','EXISTS 更清楚表达业务，不代表必然比任何JOIN更快；执行计划要测。'],
    '返回员工1、2、3、4、6、7共6行，含停用/删除因本课未筛状态。','exists-and-not-exists-subqueries'),
  lesson('not-exists','多表','NOT EXISTS：查询从未分配的项目','安全表达不存在关联，避免 NULL 反查询陷阱。','GET /projects/without-members',
    `SELECT p.id,p.name FROM project AS p
WHERE NOT EXISTS (
  SELECT 1 FROM employee_project AS ep
  WHERE ep.project_id = p.id
)
ORDER BY p.id;`,[],
    ['对每个项目寻找成员关系；一个也没有才输出。','项目4无关系，项目1/2/3都有。','如果想“没有在职成员”，子查询还需要JOIN employee并加状态，这与没有任何关系不同。'],
    ['NOT IN 子查询可空值会产生UNKNOWN；NOT EXISTS表达不存在更直接。','已删除员工关系是否算成员，必须明确业务定义。'],
    '仅项目4：待启动。','exists-and-not-exists-subqueries'),
  lesson('group-by','多表','GROUP BY：每个部门变成统计行','从成员明细上升为部门维度统计。','GET /departments/salary-summary',
    `SELECT d.id,d.name,COUNT(e.id) AS active_count,
       COALESCE(SUM(e.salary),0) AS salary_total
FROM department AS d
LEFT JOIN employee AS e
  ON e.department_id = d.id AND e.status = 'ACTIVE'
GROUP BY d.id,d.name
ORDER BY d.id;`,[],
    ['先LEFT JOIN所有部门的在职员工。','GROUP BY把同一部门的匹配行作为一组；COUNT(e.id)与SUM分别统计人数和工资。','空部门SUM为NULL，COALESCE定义本接口显示0。','所选非聚合列明确写入GROUP BY，避免依赖SQLite允许裸列行为，适配MySQL分组规则。'],
    ['COUNT(*)在空部门补行上是1，不能代表0员工。','AVG或SUM的NULL语义需单独解释；0与无数据不同。'],
    '研发2人22000；产品1人9000；运营1人12000；法务0人0。','group-by-handling'),
  lesson('having','多表','WHERE 与 HAVING：先筛行再筛组','只看在职成员不少于2的部门。','GET /departments?minActiveMembers=2',
    `SELECT d.id,d.name,COUNT(e.id) AS active_count
FROM department AS d
JOIN employee AS e ON e.department_id = d.id
WHERE e.status = 'ACTIVE'
GROUP BY d.id,d.name
HAVING COUNT(e.id) >= ?
ORDER BY d.id;`,[2],
    ['WHERE先去掉非在职明细；研发保留1/2，产品3，运营6。','GROUP BY再统计部门人数。','HAVING在统计后挑至少2人的组；不能在WHERE写COUNT(e.id)>=2。'],
    ['把员工status过滤放HAVING会混淆分组前后口径。','HAVING不是WHERE的普通同义替换。'],
    '只返回研发：active_count=2。','group-by-handling',{names:['minActiveMembers']}),
  lesson('count-null','进阶','COUNT(*) 与 COUNT(列)：0为什么变1','在同一结果里看外连接补行与真实员工计数。','GET /departments/count-audit',
    `SELECT d.id,d.name,COUNT(*) AS joined_rows,
       COUNT(e.id) AS actual_employees
FROM department AS d
LEFT JOIN employee AS e ON e.department_id = d.id
GROUP BY d.id,d.name
ORDER BY d.id;`,[],
    ['LEFT JOIN对无员工部门4生成一条右侧NULL的结果行。','COUNT(*)数这条行，因此1；COUNT(e.id)排NULL，因此0。','其他部门各有2名员工，二者都2；此课没筛状态。'],
    ['COUNT(1)也是计行，不会凭1这个常量发现空部门。','COUNT(DISTINCT e.id)可数唯一员工，但应先解释连接扇出。'],
    '部门1/2/3：joined_rows=2、actual_employees=2；部门4：1与0。','aggregate-functions'),
  lesson('sum-fanout','进阶','SUM 重复：先在正确粒度上聚合','部门工资不能被员工项目数放大。','GET /departments/salary-and-project-count',
    `WITH project_counts AS (
  SELECT employee_id,COUNT(*) AS project_count
  FROM employee_project GROUP BY employee_id
)
SELECT d.id,d.name,SUM(e.salary) AS salary_total,
       SUM(COALESCE(pc.project_count,0)) AS memberships
FROM department AS d
JOIN employee AS e ON e.department_id = d.id
LEFT JOIN project_counts AS pc ON pc.employee_id = e.id
WHERE e.status = 'ACTIVE'
GROUP BY d.id,d.name
ORDER BY d.id;`,[],
    ['直接把employee与多项目行JOIN再SUM工资，会让员工1的10000重复两次。','CTE先把关系表聚合为每员工一行，再JOIN恢复一员工一行粒度。','工资合计研发22000而非32000；项目关系数研发3。','SUM(DISTINCT salary)不是通用修复：不同员工工资相同会被错误去重。'],
    ['先确定指标粒度，再选择连接/聚合位置。','同时连接两个1:N子表可形成乘积，必须分别预聚合或独立查询。'],
    '研发salary_total=22000/memberships=3；产品9000/2；运营12000/1。','aggregate-functions'),
  lesson('scalar-subquery','进阶','标量子查询：超过平均工资','区分一值子查询与多行子查询。','GET /employees/above-average',
    `SELECT id,name,salary FROM employee
WHERE status = 'ACTIVE'
  AND salary > (
    SELECT AVG(salary) FROM employee WHERE status = 'ACTIVE'
  )
ORDER BY salary DESC,id;`,[],
    ['子查询对6名在职员工求平均：55000/6，约9166.67。','外层保留工资大于该值的在职员工。','聚合无GROUP BY产生一个统计值，适合标量比较。','普通多行SELECT不能无意作为一个值；MySQL对多行标量子查询会报错，SQLite部分行为不同。'],
    ['AVG排除NULL；本模式salary非空。','外层/子查询筛选范围必须一致，避免混入停用或删除员工。'],
    'id=2与6的12000、id=1的10000，共3行。','subqueries'),
  lesson('not-in-null','进阶','NOT IN 的 NULL 陷阱','亲手观察“没有员工的部门”被NULL破坏。','GET /departments/not-in-demo',
    `SELECT id,name FROM department
WHERE id NOT IN (SELECT department_id FROM employee)
ORDER BY id;`,[],
    ['子查询包含NULL部门值。','对部门4，比较不等于1/2/3均TRUE，但不等于NULL是UNKNOWN；整体不是TRUE。','因此明明法务无员工，默认语句仍返回0行。','修复为NOT EXISTS关联条件，或子查询显式排除NULL并确认业务含义。'],
    ['NOT IN并非永远错误；需要理解可空输入。','把NULL替换为0会改变业务数据，不能当通用修复。'],
    '默认0行；子查询加 WHERE department_id IS NOT NULL 后返回法务4。','comparison-operators'),
  lesson('multi-write-commit','多表','多表新增：一个 Service 事务共同提交','新增员工并分配项目，两次写必须一起成功。','POST /employees/with-project',
    `BEGIN;
INSERT INTO employee(id,username,name,department_id,salary,status,version)
VALUES (9,'ivan','郑十一',1,8500,'ACTIVE',0);
INSERT INTO employee_project(employee_id,project_id) VALUES (9,2);
COMMIT;
SELECT e.id,e.name,ep.project_id
FROM employee e JOIN employee_project ep ON ep.employee_id=e.id
WHERE e.id=9;`,[],
    ['Service @Transactional包围两个Mapper，不在Controller散落事务。','先INSERT员工9，再写(9,2)，外键此时可找到同事务员工。','COMMIT使二者共同可见/持久；真正MySQL持久性还依日志配置。','浏览器用BEGIN演示；MySQL可用START TRANSACTION，Java由事务管理器控制。'],
    ['不要将BEGIN/COMMIT完整脚本放一条MyBatis注解；Mapper分别执行参数绑定语句。','异常必须传播到事务边界，默认checked异常回滚规则需按配置明确。'],
    '提交后员工9与关联(9,2)同时存在，最终SELECT返回一行。','commit',{
      service:'@Transactional(rollbackFor = Exception.class)\npublic long createWithProject(CreateEmployeeRequest request) {\n  validatePermission(request);\n  Employee employee = Employee.from(request);\n  employeeMapper.insert(employee); // 生成键回填\n  relationMapper.insert(employee.getId(), request.projectId());\n  return employee.getId();\n}',
      mapper:'// 两个独立 Mapper 方法，共用 Service 事务。\n@Insert("INSERT INTO employee(username,name,department_id,salary,status,version) "\n    + "VALUES(#{username},#{name},#{departmentId},#{salary},\'ACTIVE\',0)")\n@Options(useGeneratedKeys = true, keyProperty = "id")\nint insert(Employee employee);\n\n@Insert("INSERT INTO employee_project(employee_id,project_id) "\n    + "VALUES(#{employeeId},#{projectId})")\nint insertRelation(@Param("employeeId") long employeeId,\n                   @Param("projectId") long projectId);',
      controller:'@PostMapping("/employees/with-project")\npublic ResponseEntity<CreatedEmployee> create(\n    @Valid @RequestBody CreateEmployeeRequest request) {\n  long id = employeeService.createWithProject(request);\n  return ResponseEntity.status(201).body(new CreatedEmployee(id));\n}'
    }),
  lesson('multi-write-rollback','多表','多表回滚：取消整个业务结果','观察两表写入后显式回滚，不能只撤销最后一条。','POST /employees/rollback-demonstration',
    `BEGIN;
INSERT INTO employee(id,username,name,department_id,salary,status,version)
VALUES (9,'ivan','郑十一',1,8500,'ACTIVE',0);
INSERT INTO employee_project(employee_id,project_id) VALUES (9,2);
ROLLBACK;
SELECT 'employee' AS target,COUNT(*) AS remaining
FROM employee WHERE id=9
UNION ALL
SELECT 'relation',COUNT(*) FROM employee_project WHERE employee_id=9;`,[],
    ['BEGIN后两次写暂未提交；ROLLBACK撤销该事务中的全部写。','最终SELECT两目标都0，说明没有半成品员工/关系。','真实业务第二步外键/唯一约束报错时，事务管理器应按规则回滚第一步。','SQLite错误中断脚本不总是自动回滚整个活动事务；实验执行器catch后应尝试ROLLBACK再展示错误。'],
    ['事务内外部发邮件/调用支付无法由本地ROLLBACK撤销。','DDL隐式提交与MySQL/SQLite差異，不在此页推导DDL原子性。'],
    'employee remaining=0，relation remaining=0；种子数据保持。','commit',{
      controller:'@PostMapping("/employees/with-project")\npublic CreatedEmployee create(@Valid @RequestBody CreateEmployeeRequest request) {\n  return employeeService.create(request);\n}',
      service:'@Transactional(rollbackFor = Exception.class)\npublic CreatedEmployee create(CreateEmployeeRequest request) {\n  Employee employee = Employee.from(request);\n  employeeMapper.insert(employee);\n  relationMapper.insert(employee.getId(), request.projectId());\n  // 若第二步失败，异常离开代理边界；两次写一起回滚。\n  return new CreatedEmployee(employee.getId());\n}',
      mapper:'// Mapper只负责各条参数绑定SQL。\n// relationMapper失败时不要吞异常返回假成功。\nint insert(Employee employee);\nint insertRelation(@Param("employeeId") long employeeId,\n                   @Param("projectId") long projectId);'
    })
];

// HTTP 参数可以不同于最终 SQL 绑定值；这些课显式展示解析/分页/游标转换。
Object.assign(sqlLessons.find(l=>l.id==='in-set'), {
  controller:`@GetMapping("/employees")
public List<Map<String, Object>> byIds(@RequestParam List<Long> ids) {
  return employeeService.byIds(ids);
}`,
  service:`public List<Map<String, Object>> byIds(List<Long> ids) {
  if (ids.isEmpty()) return List.of();
  if (ids.size() > 100) throw new IllegalArgumentException("too many ids");
  return employeeMapper.byIds(ids);
}`,
  mapper:`// XML 中 foreach 为每个 ID 生成独立绑定，非文本拼接。
<select id="byIds" resultType="map">
  SELECT id,name FROM employee WHERE id IN
  <foreach collection="ids" item="id" open="(" separator="," close=")">
    #{id}
  </foreach>
  ORDER BY id
</select>`
});
Object.assign(sqlLessons.find(l=>l.id==='like-prefix'), {
  controller:`@GetMapping("/employees")
public List<Map<String, Object>> prefix(@RequestParam String usernamePrefix) {
  return employeeService.prefix(usernamePrefix);
}`,
  service:`public List<Map<String, Object>> prefix(String usernamePrefix) {
  // 本课只允许字母账号前缀，避免用户输入通配符改变含义。
  if (!usernamePrefix.matches("[a-zA-Z]{1,32}")) {
    throw new IllegalArgumentException("invalid prefix");
  }
  return employeeMapper.likePrefix(usernamePrefix + "%");
}`
});
for (const id of ['offset-page','parent-page']) {
  const item = sqlLessons.find(l=>l.id===id);
  const method = id==='offset-page'?'offsetPage':'parentPage';
  Object.assign(item, {
    controller:`@GetMapping("${id==='offset-page'?'/employees':'/employees/project-page'}")
public List<Map<String, Object>> page(@RequestParam int page,
                                     @RequestParam int size) {
  return employeeService.${method}(page, size);
}`,
    service:`public List<Map<String, Object>> ${method}(int page, int size) {
  if (page < 1 || size < 1 || size > 100) {
    throw new IllegalArgumentException("invalid page");
  }
  long offset = Math.multiplyExact((long) page - 1, size);
  return employeeMapper.${method}(size, offset);
}`
  });
}
Object.assign(sqlLessons.find(l=>l.id==='keyset-page'), {
  controller:`@GetMapping("/employees/cursor")
public List<Map<String, Object>> cursor(@RequestParam long salary,
                                       @RequestParam long id,
                                       @RequestParam int size) {
  return employeeService.cursor(salary, id, size);
}`,
  service:`public List<Map<String, Object>> cursor(long salary, long id, int size) {
  if (salary < 0 || id < 1 || size < 1 || size > 100) {
    throw new IllegalArgumentException("invalid cursor");
  }
  // 同一salary绑定两次，分别对应 < 与 = 的占位符。
  return employeeMapper.keysetPage(salary, salary, id, size);
}`
});
Object.assign(sqlLessons.find(l=>l.id==='batch-insert'), {
  request:'POST /employees/batch\nBody: [{id:9,username:"ivan",name:"郑十一",departmentId:1,salary:8500}, {id:10,username:"judy",name:"冯十二",departmentId:2,salary:8800}]',
  controller:`@PostMapping("/employees/batch")
public int batch(@RequestBody List<CreateEmployeeRequest> requests) {
  return employeeService.batch(requests);
}`,
  service:`@Transactional
public int batch(List<CreateEmployeeRequest> requests) {
  if (requests.isEmpty() || requests.size() > 100) {
    throw new IllegalArgumentException("invalid batch size");
  }
  requests.forEach(this::validateCreatePermissionAndFields);
  return employeeMapper.insertBatch(requests);
}`,
  mapper:`<insert id="insertBatch">
  INSERT INTO employee(id,username,name,department_id,salary,status,version)
  VALUES
  <foreach collection="requests" item="r" separator=",">
    (#{r.id},#{r.username},#{r.name},#{r.departmentId},#{r.salary},'ACTIVE',0)
  </foreach>
</insert>`
});

// 业务扩展：一个 HTTP 操作不必等于一条 SQL；以下写操作明确分为多个 Mapper。
sqlLessons.push(
  lesson('multi-table-transfer','多表','调岗与换项目：多表修改共用一次事务',
    '把员工部门更新、旧项目解绑和新项目绑定视为一个业务操作，并防止旧版本覆盖。',
    'PATCH /employees/1/assignment\nContent-Type: application/json\n\n{"departmentId":2,"projectIds":[3],"version":0}',
    `BEGIN;
UPDATE employee SET department_id=2,version=version+1
WHERE id=1 AND status='ACTIVE' AND version=0;
DELETE FROM employee_project WHERE employee_id=1;
INSERT INTO employee_project(employee_id,project_id) VALUES (1,3);
COMMIT;
SELECT e.id,e.name,e.department_id,d.name AS department_name,
       e.version,p.id AS project_id,p.name AS project_name
FROM employee e
JOIN department d ON d.id=e.department_id
LEFT JOIN employee_project ep ON ep.employee_id=e.id
LEFT JOIN project p ON p.id=ep.project_id
WHERE e.id=1 ORDER BY p.id;`,[],
    ['请求改变的是员工1的整体岗位分配，不是删除部门或项目主数据。','Service先校验部门/项目权限，拒绝空值与重复项目ID，再进入同库事务。','employee Mapper用id、ACTIVE与旧version做条件更新，成功1行后version变1；失败应抛冲突并中止后续关系写入。','relation Mapper删除员工1原有(1,1)/(1,2)，再为项目3插入(1,3)。','最后COMMIT使部门与关系共同生效；新项目外键错误或唯一约束错误应使全部回滚。','浏览器脚本固定假设种子version=0；真实Java明确检查影响行数，不能在0行后仍继续解绑。'],
    ['先COMMIT部门再修改关系会留下“已调岗但项目还没换”的窗口。','SQLite单连接脚本不展示MySQL并发锁；多个写入口都应遵守版本与状态约定。','整段BEGIN/COMMIT不应塞进一个MyBatis @Update；事务由Service代理管理。'],
    '员工1变为产品部门2、version=1，只参加推荐项目3；部门/项目主表均仍4行。','commit',{
      controller:`record AssignmentRequest(@Positive long departmentId,
    @NotEmpty List<@Positive Long> projectIds, @Min(0) long version) {}

@PatchMapping("/employees/{id}/assignment")
public ResponseEntity<Void> assign(@PathVariable long id,
    @Valid @RequestBody AssignmentRequest dto) {
  employeeService.assign(id, dto);
  return ResponseEntity.noContent().build();
}`,
      service:`@Transactional(rollbackFor = Exception.class)
public void assign(long id, AssignmentRequest dto) {
  authorizeAndValidateAssignment(id, dto);
  if (new HashSet<>(dto.projectIds()).size() != dto.projectIds().size()) {
    throw new IllegalArgumentException("duplicate projects");
  }
  int changed = employeeMapper.changeDepartment(id,
      dto.departmentId(), dto.version());
  if (changed != 1) throw new AssignmentConflictException(id);
  relationMapper.deleteByEmployee(id);
  for (long projectId : dto.projectIds()) {
    relationMapper.insert(id, projectId);
  }
  // 任何后续写失败，异常离开代理后全部回滚。
}`,
      mapper:`// EmployeeMapper：一条条件更新。
@Update("""
  UPDATE employee SET department_id=#{departmentId},version=version+1
  WHERE id=#{id} AND status='ACTIVE' AND version=#{version}
  """)
int changeDepartment(@Param("id") long id,
    @Param("departmentId") long departmentId,@Param("version") long version);

// RelationMapper：两种独立写操作，同一Service事务。
@Delete("DELETE FROM employee_project WHERE employee_id=#{id}")
int deleteByEmployee(@Param("id") long id);

@Insert("INSERT INTO employee_project(employee_id,project_id) "
    + "VALUES(#{employeeId},#{projectId})")
int insert(@Param("employeeId") long employeeId,
           @Param("projectId") long projectId);`
    }),
  lesson('multi-table-delete','多表','先子后父删除：解绑后移除员工',
    '删除被中间表引用的员工，同时保留共享的部门与项目。','DELETE /employees/1/permanent',
    `BEGIN;
DELETE FROM employee_project WHERE employee_id=1;
DELETE FROM employee WHERE id=1;
COMMIT;
SELECT 'employee_total' AS metric,COUNT(*) AS value FROM employee
UNION ALL SELECT 'relation_total',COUNT(*) FROM employee_project
UNION ALL SELECT 'department_total',COUNT(*) FROM department
UNION ALL SELECT 'project_total',COUNT(*) FROM project
UNION ALL SELECT 'employee_1_remaining',COUNT(*) FROM employee WHERE id=1;`,[],
    ['employee1被两条关系引用；直接删父行会触发外键拒绝。','同一Service事务先删除引用员工1的子关系，再删除员工父行。','项目1/2仍被别人使用，部门1也仍有员工2；不能沿外键把共享主数据一并删除。','真正MySQL并发入口可先锁目标员工行并遵守同一约定；浏览器不执行FOR UPDATE，只展示事务结果。','若第二步因其他未清理引用失败，整个事务回滚，让原来的关系不至于丢失。','本API约定不存在时也返回204；是否允许物理删除必须按审计/保留要求决定。'],
    ['不能关闭foreign_keys以“强行删除”。','代码必须列出全部引用；样本仅一张关系表，真实项目可能还有历史/审计表。','删除事务不自动撤销事务外已发送通知。'],
    'employee_total=7、relation_total=6、department_total=4、project_total=4；employee_1_remaining=0。','delete',{
      controller:`@DeleteMapping("/employees/{id}/permanent")
public ResponseEntity<Void> permanentDelete(@PathVariable long id) {
  employeeService.permanentDelete(id);
  return ResponseEntity.noContent().build();
}`,
      service:`@Transactional(rollbackFor = Exception.class)
public void permanentDelete(long id) {
  authorizePermanentDelete(id);
  // MySQL生产片段：先锁目标行；SQLite实验不模拟该锁。
  if (employeeMapper.lockId(id) == null) return;
  relationMapper.deleteByEmployee(id);
  employeeMapper.deleteById(id);
  // 不删除project或department；后续异常会回滚前面的解绑。
}`,
      mapper:`// EmployeeMapper
@Select("SELECT id FROM employee WHERE id=#{id} FOR UPDATE")
Long lockId(@Param("id") long id);

@Delete("DELETE FROM employee WHERE id=#{id}")
int deleteById(@Param("id") long id);

// RelationMapper
@Delete("DELETE FROM employee_project WHERE employee_id=#{id}")
int deleteByEmployee(@Param("id") long id);`
    }),
  lesson('related-stable-page','多表','关联筛选分页：EXISTS保留员工粒度',
    '查研发或产品的在职员工，要求参加订单或账务项目，每页两名员工。',
    'GET /employees/related-page?departmentA=1&departmentB=2&projectA=1&projectB=2&page=1&size=2',
    `SELECT e.id,e.name,e.department_id,e.salary
FROM employee e
WHERE e.status='ACTIVE'
  AND e.department_id IN (?,?)
  AND EXISTS (
    SELECT 1 FROM employee_project ep
    WHERE ep.employee_id=e.id AND ep.project_id IN (?,?)
  )
ORDER BY e.salary DESC,e.id ASC
LIMIT ? OFFSET ?;`,[1,2,1,2,2,0],
    ['部门条件与项目存在条件共同限定父表employee。','员工1参加两个目标项目仍仅输出一行，因为EXISTS只问存在与否。','匹配的员工是1/2/3；工资降序、id升序给出2、1、3的稳定序列。','先在这个父集合上LIMIT2，第一页是员工2/1，而非两条关系记录。','Service用(page−1)×size算offset；COUNT复用完全相同的status/部门/项目条件，见下一课。','若还需所有项目明细，再批量加载这一页ID的关系；不要把子关系筛选强行当作全部项目展示。'],
    ['JOIN后LIMIT2可能只截到一个人的两条项目，分页单位错误。','COUNT与列表条件一致不代表两次查询自动同一快照；有要求则定义事务隔离策略。','ORDER BY无法阻止并发工资变动导致跨页移动。'],
    '第一页2行：员工2李四12000、员工1张三10000；同筛选total=3；第二页offset=2仅员工3。','exists-and-not-exists-subqueries',{
      names:['departmentA','departmentB','projectA','projectB','limit','offset'],
      controller:`@GetMapping("/employees/related-page")
public List<EmployeeRow> relatedPage(@RequestParam long departmentA,
    @RequestParam long departmentB,@RequestParam long projectA,
    @RequestParam long projectB,@RequestParam int page,@RequestParam int size) {
  return employeeService.relatedPage(departmentA,departmentB,
      projectA,projectB,page,size);
}`,
      service:`public List<EmployeeRow> relatedPage(long departmentA,long departmentB,
    long projectA,long projectB,int page,int size) {
  authorizeFilters(departmentA,departmentB,projectA,projectB);
  if (page<1 || size<1 || size>100) throw new IllegalArgumentException("page");
  long offset=Math.multiplyExact((long)page-1,size);
  return employeeMapper.relatedPage(departmentA,departmentB,
      projectA,projectB,size,offset);
}`,
      mapper:`@Select("""
  SELECT e.id,e.name,e.department_id,e.salary FROM employee e
  WHERE e.status='ACTIVE'
    AND e.department_id IN (#{departmentA},#{departmentB})
    AND EXISTS (SELECT 1 FROM employee_project ep
      WHERE ep.employee_id=e.id
        AND ep.project_id IN (#{projectA},#{projectB}))
  ORDER BY e.salary DESC,e.id ASC LIMIT #{limit} OFFSET #{offset}
  """)
List<EmployeeRow> relatedPage(@Param("departmentA") long departmentA,
    @Param("departmentB") long departmentB,@Param("projectA") long projectA,
    @Param("projectB") long projectB,@Param("limit") int limit,
    @Param("offset") long offset);`
    }),
  lesson('related-count-grain','多表','关联总数：COUNT(*)、DISTINCT与EXISTS对照',
    '同一筛选下分别数关系行与员工，保证分页total使用正确粒度。',
    'GET /employees/related-count?departmentA=1&departmentB=2&projectA=1&projectB=2',
    `WITH eligible_employee AS (
  SELECT id FROM employee
  WHERE status='ACTIVE' AND department_id IN (?,?)
), matched_relation AS (
  SELECT e.id AS employee_id FROM eligible_employee e
  JOIN employee_project ep ON ep.employee_id=e.id
  WHERE ep.project_id IN (?,?)
)
SELECT 'join_count_star' AS metric,COUNT(*) AS total FROM matched_relation
UNION ALL
SELECT 'join_count_distinct',COUNT(DISTINCT employee_id) FROM matched_relation
UNION ALL
SELECT 'exists_parent_count',COUNT(*) FROM eligible_employee e
WHERE EXISTS (SELECT 1 FROM employee_project ep
  WHERE ep.employee_id=e.id AND ep.project_id IN (?,?));`,[1,2,1,2,1,2],
    ['eligible_employee先限定在职且部门1/2，为1/2/3。','关联目标项目1/2后，员工1两行、员工2一行、员工3一行，共4关系行。','COUNT(*)在该JOIN结果数的是4条关系，不是4个人。','COUNT(DISTINCT employee_id)得到3名员工；用EXISTS筛父表再COUNT(*)也为3。','上一课每页最多两员工，total必须是3；本页默认size不是总数计算条件。','生产可把公共筛选定义成XML sql片段或同一个查询对象，避免页面和计数维护成两套逻辑。'],
    ['COUNT(DISTINCT salary)统计不同工资，不是员工。','在COUNT语句里加LIMIT/OFFSET不会把全量总数变正确；必须先决定计数粒度。','逻辑删除、租户权限与可选条件都必须同步应用于items和total。'],
    'join_count_star=4；join_count_distinct=3；exists_parent_count=3。','aggregate-functions',{
      names:['departmentA','departmentB','projectA','projectB','sameProjectA','sameProjectB'],
      controller:`@GetMapping("/employees/related-count")
public CountView count(@RequestParam long departmentA,@RequestParam long departmentB,
    @RequestParam long projectA,@RequestParam long projectB) {
  return employeeService.count(departmentA,departmentB,projectA,projectB);
}`,
      service:`public CountView count(long departmentA,long departmentB,
    long projectA,long projectB) {
  authorizeFilters(departmentA,departmentB,projectA,projectB);
  long total=employeeMapper.countRelated(departmentA,departmentB,projectA,projectB);
  return new CountView(total); // Page.items使用上一课完全相同筛选。
}`,
      mapper:`@Select("""
  SELECT COUNT(*) FROM employee e
  WHERE e.status='ACTIVE'
    AND e.department_id IN (#{departmentA},#{departmentB})
    AND EXISTS (SELECT 1 FROM employee_project ep
      WHERE ep.employee_id=e.id
        AND ep.project_id IN (#{projectA},#{projectB}))
  """)
long countRelated(@Param("departmentA") long departmentA,
    @Param("departmentB") long departmentB,@Param("projectA") long projectA,
    @Param("projectB") long projectB);`
    }),
  lesson('optional-conditions','进阶','动态可选条件：省略、NULL与空集合分别定义',
    '部门筛选可不传，工资下界可不传，但公共在职/权限条件始终存在。',
    'GET /employees/filter?minSalary=9000',
    `SELECT id,name,department_id,salary FROM employee
WHERE status='ACTIVE'
  AND (? IS NULL OR department_id = ?)
  AND (? IS NULL OR salary >= ?)
ORDER BY salary DESC,id;`,[null,null,9000,9000],
    ['实验null部门参数表示不筛部门，并非仅查未分配部门；若要后者需单独unassigned条件。','同一可选值在SQL中出现两次，占两个独立绑定位置。','本课只传minSalary=9000，满足的在职员工是2/6/1/3。','真实MyBatis可用if省略未启用谓词，避免重复绑定门控条件；仍不能省掉公共status/权限条件。','分页COUNT复用同一动态where片段，不能忘记salary下界。','空IN列表要明确返回空/报错，不能当作无筛选扩大数据范围。'],
    ['WHERE条件的动态拼接不等于可接收任意客户端SQL。','OR可空门控与动态SQL的执行计划可能不同，需实际MySQL验证索引与扫描。','空字符串不是null，Controller应明确输入规范。'],
    '返回2/12000、6/12000、1/10000、3/9000；部门参数改成1/1时仅2、1。','select',{
      controller:`@GetMapping("/employees/filter")
public List<EmployeeRow> filter(@RequestParam(required=false) Long departmentId,
    @RequestParam(required=false) Long minSalary) {
  return employeeService.filter(departmentId,minSalary);
}`,
      service:`public List<EmployeeRow> filter(Long departmentId,Long minSalary) {
  if (minSalary!=null && minSalary<0) throw new IllegalArgumentException("salary");
  authorizeOptionalDepartment(departmentId);
  return employeeMapper.filter(departmentId,minSalary);
}`,
      mapper:`<!-- Mapper方法使用@Param("departmentId")与@Param("minSalary")。 -->
<sql id="employeeFilter">
  WHERE status='ACTIVE'
  <if test="departmentId != null">AND department_id=#{departmentId}</if>
  <if test="minSalary != null">AND salary &gt;= #{minSalary}</if>
</sql>
<select id="filter" resultType="EmployeeRow">
  SELECT id,name,department_id,salary FROM employee
  <include refid="employeeFilter"/>
  ORDER BY salary DESC,id
</select>
<select id="countFilter" resultType="long">
  SELECT COUNT(*) FROM employee <include refid="employeeFilter"/>
</select>`
    }),
  lesson('one-to-many-view','多表','一对多VO：两名员工怎样组装三条连接行',
    '将数据库平面行转换为员工嵌套项目数组，保留无项目员工且避免N+1。',
    'GET /employees/project-views?ids=1,5',
    `SELECT e.id AS employee_id,e.name AS employee_name,
       p.id AS project_id,p.name AS project_name
FROM employee e
LEFT JOIN employee_project ep ON ep.employee_id=e.id
LEFT JOIN project p ON p.id=ep.project_id
WHERE e.id IN (?,?) AND e.status='ACTIVE'
ORDER BY e.id,p.id;`,[1,5],
    ['员工1两个项目输出两行，员工5没有项目仍输出一条右侧NULL行，总计3。','最终HTTP对象应只有2个员工：1.projects=[订单,账务]，5.projects=[]。','主对象按employee_id归并；项目id为NULL时不应创建ProjectView(null,null)。','示例生产代码先批量查父行，再对父ID一次批量查项目，以Map分组组装VO，避免每员工一次SQL。','如果结果需要分页，先分页父表再批量子表；total数父行，不是最终连接行。','另一实现是MyBatis resultMap collection；必须正确标父/子id，并明确空子对象规则。'],
    ['按name归并会把同名不同员工混为一人，应按PK。','用全局DISTINCT不能替代对象组装，SELECT项目列后两项目本就不同。','额外查询与lazy loading可能隐藏N+1，使用SQL日志/统计验证查询次数。'],
    'SQL3行：[1,订单]、[1,账务]、[5,NULL]；HTTP应组装2个EmployeeProjectsView。','join',{
      controller:`record ProjectView(long id,String name) {}
record EmployeeProjectsView(long id,String name,List<ProjectView> projects) {}

@GetMapping("/employees/project-views")
public List<EmployeeProjectsView> views(@RequestParam List<Long> ids) {
  return employeeService.views(ids);
}`,
      service:`public List<EmployeeProjectsView> views(List<Long> ids) {
  if (ids.isEmpty()) return List.of();
  if (ids.size()>100) throw new IllegalArgumentException("too many ids");
  List<EmployeeRow> parents=employeeMapper.findActiveByIds(ids);
  if (parents.isEmpty()) return List.of();
  List<Long> parentIds=parents.stream().map(EmployeeRow::id).toList();
  List<ProjectMembershipRow> children=relationMapper.findProjects(parentIds);
  Map<Long,List<ProjectView>> grouped=children.stream().collect(
      Collectors.groupingBy(ProjectMembershipRow::employeeId,
          Collectors.mapping(r -> new ProjectView(r.projectId(),r.projectName()),
              Collectors.toList())));
  return parents.stream().map(e -> new EmployeeProjectsView(e.id(),e.name(),
      grouped.getOrDefault(e.id(),List.of()))).toList();
}`,
      mapper:`<!-- 两条批量SQL，不是循环调用单人Mapper。方法均用@Param("ids"). -->
<select id="findActiveByIds" resultType="EmployeeRow">
  SELECT id,name,department_id,salary FROM employee
  WHERE status='ACTIVE' AND id IN
  <foreach collection="ids" item="id" open="(" separator="," close=")">
    #{id}
  </foreach>
  ORDER BY id
</select>
<select id="findProjects" resultType="ProjectMembershipRow">
  SELECT ep.employee_id AS employeeId,p.id AS projectId,p.name AS projectName
  FROM employee_project ep JOIN project p ON p.id=ep.project_id
  WHERE ep.employee_id IN
  <foreach collection="ids" item="id" open="(" separator="," close=")">
    #{id}
  </foreach>
  ORDER BY ep.employee_id,p.id
</select>`
    })
);
