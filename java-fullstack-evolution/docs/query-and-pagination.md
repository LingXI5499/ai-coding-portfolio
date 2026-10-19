# 从 CRUD 到条件查询和分页

增删改查是基础。实际列表通常还需要“按什么条件找”和“一次看多少条”。本项目补齐这两项：员工名册在 V01–V04，管理员用户列表在 V07–V10；V05/V06 只管理当前账户，没有开放全体用户列表。仍然只有十个版本，使用 JDK 17，所有源码各自独立。

## 三种查询的关系

| 操作 | 示例 | 含义 |
| --- | --- | --- |
| 按 ID 查询 | GET /api/employees/12 | 获取唯一一条记录，缺失返回 404 |
| 条件查询 | GET /api/employees?department=研发 | 只查询符合条件的员工 |
| 条件分页 | GET /api/employees?department=研发&page=2&pageSize=10 | 符合条件的结果按稳定顺序取第 11–20 条，同时返回总数 |

没有筛选条件就是普通分页。多个员工条件按 AND 组合；管理员关键字匹配用户名 **或** 昵称，再与状态、角色按 AND 组合。

## 请求参数

| 公共参数 | 默认值 | 服务端限制 |
| --- | --- | --- |
| page | 1 | 1–1000000，从 1 开始 |
| pageSize | 10 | 1–100；页面提供 5/10/20/50/100 |

| 员工条件 | 语义 |
| --- | --- |
| name | 姓名包含，最多 50 字符 |
| department | 部门包含，最多 100 字符 |
| gender | 男、女、未说明；不传表示不限 |
| minAge / maxAge | 18–70 闭区间，可只传一侧；最小值不得超过最大值 |

| 管理员条件 | 语义 |
| --- | --- |
| keyword | 用户名或昵称包含，最多 50 字符 |
| status | ACTIVE、DISABLED、DELETED |
| role | USER、ADMIN |

空白文本当作未填写。`page=0`、`pageSize=101`、非法类型、过长关键字和倒置年龄范围返回 HTTP 400。USER 不能通过添加 `role=ADMIN` 查询参数获得管理员权限，接口仍返回 403。

## 返回结构

V01 直接返回分页对象；V02–V10 放在原有 `ApiResponse.data` 中。以下示例为 21 条结果的第三页，仅剩一条：

```json
{
  "records": [
    {"id": 21, "name": "教学员工", "department": "研发部", "age": 25}
  ],
  "total": 21,
  "page": 3,
  "pageSize": 10,
  "totalPages": 3
}
```

此处员工字段仅节选，真实 VO 还包含 gender、phone、salary。`records` 是当前页，`total` 是符合条件的总条数。两者不能混用，也不能先拉前 200 条再在浏览器切片当作分页。

没有匹配数据时 records=[]、total=0、totalPages=0。合法页码超过最后一页时返回空 records，保留请求的 page 和真实 total；服务端不把该情况当作 404。页面在删除/禁用操作使最后一页消失时，自动回到最后一个有效页再查询。

## 后端链路与 SQL

`Controller (@Valid @ModelAttribute) → Query → Service (只读事务) → Mapper.count/search → MySQL`

真实实现以 V04 为例：

- [EmployeeQuery](../V04-vue-fullstack/backend/src/main/java/com/lingxi/evolution/query/EmployeeQuery.java)：条件、长度与范围校验。
- [PageQuery](../V04-vue-fullstack/backend/src/main/java/com/lingxi/evolution/query/PageQuery.java)：默认页码、单页上限、偏移计算。
- [EmployeeMapper.xml](../V04-vue-fullstack/backend/src/main/resources/mapper/EmployeeMapper.xml)：共用 queryConditions，分别 COUNT 与查询当前页。
- [EmployeeServiceImpl](../V04-vue-fullstack/backend/src/main/java/com/lingxi/evolution/service/impl/EmployeeServiceImpl.java)：计数与分页处于只读事务。
- [PageResult](../V04-vue-fullstack/backend/src/main/java/com/lingxi/evolution/pagination/PageResult.java)：保留元数据，映射实体到 VO 时不丢失总数。

```sql
-- 两次查询复用同一组条件。
SELECT COUNT(*) FROM employee WHERE department LIKE ? ESCAPE '!';
SELECT id, name, gender, age, phone, department, salary, create_time, update_time
FROM employee
WHERE department LIKE ? ESCAPE '!'
ORDER BY id ASC
LIMIT ? OFFSET ?;
```

偏移量为 `(page - 1) * pageSize`，Java 用 long 计算。顺序固定为 id 升序，避免翻页时依赖无序结果。Mapper XML 使用 `<where>`、`<if>` 和 `#{}`，不拼接用户输入。输入中的 `%`、`_`、`!` 经 LikePattern 处理，采用 `ESCAPE '!'` 按普通字符查询，避免输入一个 `%` 就匹配全部数据。

V10 的管理员实现位于 [UserQuery](../V10-production-ready/backend/src/main/java/com/lingxi/evolution/query/UserQuery.java) 与 [AccountMapper.xml](../V10-production-ready/backend/src/main/resources/mapper/AccountMapper.xml)。用户名/昵称 OR 条件有括号，防止绕过后面的状态/角色条件；结果仍通过 UserVO 排除哈希。

## 前端行为

页面提交筛选后从第一页查询；翻页保留已提交条件，尚未提交的输入不会偷偷改变当前查询。改变每页条数回到第一页，重置清除条件并重新请求。总数、按钮禁用和空状态都来自后端元数据。

原生页（V01/V02）、XHR/Fetch/Axios 对照页（V03）都已提供控件；Vue 员工页（V04）与管理员页（V07–V10）使用各自目录内的 ListPager 和 usePagedList。后者忽略旧请求的迟到结果，避免快速筛选时旧列表覆盖新列表，不依赖其他版本源码。

## 可重复验收

1. 按本版 README 启动应用，新增至少 12 条同部门员工，其中包含不同年龄。
2. 组合姓名、部门、年龄条件查询，核对 total 与数据库一致。
3. 改为每页 5 条，点击下一页，核对记录不重复且条件保持。
4. 在第二页重新筛选，核对回到第一页；重置后恢复普通分页。
5. 查询不存在的值，确认空状态、总数 0、翻页按钮禁用。
6. 删除最后一页最后一条，确认自动退回有效页；管理员筛选 ACTIVE 后禁用用户，列表与总数同步变化。
7. 用 Network 核对 page/pageSize/条件参数；V03 三种客户端应获得相同分页对象。
8. 运行各版后端/前端测试；集成测试写入 205 条数据，验证第 200 条之后仍可访问，并覆盖非法参数、字面通配符与权限。

## 范围与性能

本次补充没有新增数据库表、迁移、物理外键或依赖。SQL 参数绑定防注入，LIKE 转义控制搜索语义，两者作用不同。包含查询通常不能靠普通 B-tree 索引高效定位，深 OFFSET 与 COUNT 也有成本；这是单体教学的常规分页，不宣称已经验证海量数据性能。数据变化时跨请求翻页可能发生位移，后续需要时再学习游标分页。

API 列表由数组升级为分页对象，调用方必须读取 records。原生页面、三种客户端演示、Vue、测试和文章都已随之修改。

参考：[MyBatis 动态 SQL](https://mybatis.org/mybatis-3/dynamic-sql.html)、[MySQL LIKE 与 ESCAPE](https://dev.mysql.com/doc/refman/8.4/en/string-comparison-functions.html)。
