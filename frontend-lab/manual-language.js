/* JavaScript 知识原子：复核本地课程的边界和现代语义。 */
logic(
  'conversion',
  '显式转换、隐式转换与 NaN',
  'JavaScript 基础拆解',
  '加号可能拼接字符串，减号尝试数值转换。Number、parseInt、parseFloat 的规则不同，用户输入应验证有限数值。',
  `print('2' + 3, '2' - 3);
print(Number(''), Number('12px'), parseInt('12px', 10), parseFloat('12.5元'));
print(Number.isNaN(NaN), Number.isFinite(Infinity));
const amount = Number('18.50');
print('有效金额：', Number.isFinite(amount) && amount >= 0);`,
  ['加号输出23，减号输出-1', '空字符串转换为0', 'parseInt只读取数字开头部分'],
  '加入空白、十六进制与无效金额，比较转换。',
  '不要把 parseInt 当成完整输入验证。',
  'Web/JavaScript/Reference/Global_Objects/Number',
);
logic(
  'types',
  '八种语言类型与包装对象',
  'JavaScript 基础拆解',
  '现代 JavaScript 有七种原始类型和 Object。typeof null 是历史遗留的 object；原始字符串的方法由装箱行为提供，不意味着原始值本身是对象。',
  `const values = [undefined, null, true, 12, 12n, 'hello', Symbol('id'), {}];
for (const value of values) print(String(value), typeof value);
print('数组判断：', Array.isArray([]));
print('原始字符串：', 'hello' instanceof String);
print('包装对象：', new String('hello') instanceof String);
print('包装false的真值：', Boolean(new Boolean(false)));`,
  ['null 的 typeof 是 object', 'bigint、symbol也是原始类型', 'Boolean包装对象为真值'],
  '给出区分数组、null、普通对象的函数。',
  '尽量避免 new String/Number/Boolean。',
  'Web/JavaScript/Guide/Data_structures',
);
logic(
  'short-circuit',
  '短路、默认值与空值合并',
  'JavaScript 基础拆解',
  '&& 和 || 返回操作数而非固定布尔值。?? 只在 null/undefined 时使用默认值，保留有效的0和空字符串。',
  `print(0 || 10, 0 ?? 10);
print('' || '默认', '' ?? '默认');
print(null ?? '默认', undefined ?? '默认');
const user = { profile: { points: 0 } };
print(user.profile?.points ?? 100);
let called = false;
false && (called = true);
print('右侧执行了吗？', called);`,
  ['||将0当作假值', '??保留0', '短路时右侧不执行'],
  '将 points 改为 null、undefined 和空字符串。',
  '?? 与 &&/|| 混用需加括号。',
  'Web/JavaScript/Reference/Operators/Nullish_coalescing',
);
logic(
  'increment',
  '自增、比较与运算顺序',
  'JavaScript 基础拆解',
  '前置自增返回更新值，后置自增返回旧值。严格比较避免隐式类型转换；复杂表达式可以拆成多行。',
  `let count = 2;
print('后置返回：', count++, '更新后：', count);
print('前置返回：', ++count, '更新后：', count);
print('宽松/严格：', '2' == 2, '2' === 2);
print('优先级：', 2 + 3 * 4, (2 + 3) * 4);`,
  ['后置返回旧值', '前置先更新', '括号明确优先级'],
  '将复杂计算拆成中间变量。',
  '避免在同一表达式中反复修改同一变量。',
  'Web/JavaScript/Reference/Operators/Increment',
);
logic(
  'leap-year',
  '闰年、分支与边界用例',
  'JavaScript 基础拆解',
  '公历闰年满足能被4整除且不能被100整除，或能被400整除。用世纪年份验证条件。',
  `function isLeapYear(year) { return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0); }
for (const year of [1900, 2000, 2023, 2024, 2100]) print(year, isLeapYear(year));`,
  ['1900不是闰年', '2000是闰年', '2024是闰年'],
  '增加年份输入并拒绝非整数。',
  '只判断 year%4===0 会在世纪年份出错。',
);
logic(
  'switch',
  'switch、break 与函数返回',
  'JavaScript 基础拆解',
  'switch 按严格相等匹配分支；缺少 break 会贯穿后续分支。函数里的 return 可以直接返回结果。',
  `function calculate(a, operator, b) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': if (b === 0) throw new Error('除数不能是0'); return a / b;
    default: throw new Error('未知运算符');
  }
}
print(calculate(12, '*', 3));
try { print(calculate(8, '/', 0)); } catch (error) { print(error.message); }`,
  ['每个有效分支返回结果', '除以0给出提示', 'default处理未知符号'],
  '增加取余操作。',
  '不要让未知运算符静默返回undefined。',
  'Web/JavaScript/Reference/Statements/switch',
);
logic(
  'loops',
  'while、break、continue 与循环边界',
  'JavaScript 基础拆解',
  '循环需要可达到的退出条件；continue 跳过本轮剩余语句，break 结束循环。while 中的更新位置尤其容易遗漏。',
  `let index = 0;
const selected = [];
while (index < 10) {
  index += 1;
  if (index % 2 === 0) continue;
  if (index > 7) break;
  selected.push(index);
}
print('选出的奇数：', selected);`,
  ['continue不退出循环', 'break在9时结束', 'index在continue前更新'],
  '改为for循环，保持输出1、3、5、7。',
  '交互式ATM应使用事件驱动，避免无限prompt循环。',
  'Web/JavaScript/Reference/Statements/while',
);
logic(
  'multiplication',
  '嵌套循环与九九乘法表',
  'JavaScript 基础拆解',
  '外层控制行，内层控制每行列数。九九乘法表的第n行有n个表达式，收集字符串再输出。',
  `for (let row = 1; row <= 9; row += 1) {
  const cells = [];
  for (let column = 1; column <= row; column += 1) cells.push(column + '×' + row + '=' + column * row);
  print(cells.join('  '));
}`,
  ['外层9行', '内层随行号增长', 'join控制分隔符'],
  '输出倒三角星号。',
  '注意 < 与 <= 的边界。',
  'Web/JavaScript/Guide/Loops_and_iteration',
);
logic(
  'array-statistics',
  '数组求和、平均值与最大值',
  '数组算法与方法',
  '遍历时累积总和与最大值，平均值需要处理空数组。最大值初始用第一个元素或 -Infinity，不能默认0。',
  `function statistics(values) {
  if (values.length === 0) return { count: 0, sum: 0, average: null, max: null };
  let sum = 0;
  let max = -Infinity;
  for (const value of values) { sum += value; if (value > max) max = value; }
  return { count: values.length, sum, average: sum / values.length, max };
}
print(statistics([-8, -2, -6]));
print(statistics([]));`,
  ['负数最大值为-2', '空数组平均值为null', '总和逐项累积'],
  '拒绝含NaN的数组。',
  '最大值初始设为0会让全负数输入出错。',
);
logic(
  'bubble-sort',
  '冒泡排序：比较、交换与提前退出',
  '数组算法与方法',
  '每轮把较大元素移动到末尾；若一轮没有交换可提前结束。实际普通排序可优先使用 sort。',
  `function bubbleSort(values) {
  const result = [...values];
  for (let end = result.length - 1; end > 0; end -= 1) {
    let changed = false;
    for (let i = 0; i < end; i += 1) {
      if (result[i] > result[i + 1]) { [result[i], result[i + 1]] = [result[i + 1], result[i]]; changed = true; }
    }
    if (!changed) break;
  }
  return result;
}
const source = [8, 3, 5, 3, -1];
print(bubbleSort(source));
print('原数组：', source);`,
  ['保留重复值', '复制后排序不改原值', '有序输入提前退出'],
  '记录有序和逆序输入的比较次数。',
  '冒泡排序通常是平方时间，不适合大数据。',
);
logic(
  'array-mutate',
  'push、pop、shift、unshift 与 splice',
  '数组算法与方法',
  '这些方法修改原数组，返回值各不相同。splice 删除、插入或替换；slice 返回区间副本。',
  `const list = ['HTML', 'CSS'];
print('push返回长度：', list.push('JS'));
print('pop返回项：', list.pop());
list.unshift('开始');
print('shift：', list.shift());
print('splice删除项：', list.splice(1, 1, '布局', '交互'));
print('当前数组：', list);
print('slice副本：', list.slice(0, 2));`,
  ['push返回长度', 'splice返回被删除的数组', 'slice不改原数组'],
  '删除中间两项并保留原数组副本。',
  '明确是否允许修改共享数据。',
  'Web/JavaScript/Reference/Global_Objects/Array/splice',
);
logic(
  'find-every',
  'find、findIndex、some 与 every',
  '数组算法与方法',
  'find 返回首个匹配值，findIndex 返回索引；some 判断至少一个匹配，every 判断全部匹配。',
  `const scores = [72, 95, 61];
print('首个优秀：', scores.find(score => score >= 90));
print('优秀索引：', scores.findIndex(score => score >= 90));
print('有不及格：', scores.some(score => score < 60));
print('全部及格：', scores.every(score => score >= 60));
print('空数组every：', [].every(() => false));
print('没找到索引：', scores.findIndex(score => score === 100));`,
  ['未找到索引是-1', 'some判断存在性', '空数组every为true'],
  '写“已选择全部商品”判断并排除空购物车。',
  '不要把 -1 当作有效索引。',
  'Web/JavaScript/Reference/Global_Objects/Array/every',
);
logic(
  'reduce',
  'reduce 累计与初始值',
  '数组算法与方法',
  'reduce 将数组折叠为结果，显式初始值可处理空数组。金额以整数分累计，减少小数误差。',
  `const cart = [{ cents: 1290, count: 2 }, { cents: 850, count: 3 }];
const total = cart.reduce((sum, item) => sum + item.cents * item.count, 0);
print('总价：', (total / 100).toFixed(2));
print('空数组：', [].reduce((sum, item) => sum + item, 0));
const counts = ['css', 'html', 'css'].reduce((acc, tag) => { acc[tag] = (acc[tag] ?? 0) + 1; return acc; }, {});
print(counts);`,
  ['总价51.30', '空数组结果0', '累计结果也可为对象'],
  '加入优惠并保证应付金额不低于0。',
  '无初始值的空数组reduce会抛错。',
  'Web/JavaScript/Reference/Global_Objects/Array/reduce',
);
logic(
  'array-like',
  '伪数组、NodeList 与 Array.from',
  '数组算法与方法',
  '类数组有索引和 length 但不一定拥有数组方法。Array.from 转换类数组或可迭代对象，并可执行映射。',
  `const likeArray = { 0: 'HTML', 1: 'CSS', length: 2 };
print(Array.isArray(likeArray));
print(Array.from(likeArray, item => item.toLowerCase()));
print(Array.from({ length: 5 }, (_, index) => index + 1));
print(Array.from(document.querySelectorAll('h2')).map(node => node.textContent));`,
  ['类数组不是Array', '转换时可以映射', 'NodeList可转成数组'],
  '生成1到10的平方数组。',
  'NodeList支持forEach但仍不是完整Array。',
  'Web/JavaScript/Reference/Global_Objects/Array/from',
);
logic(
  'string-methods',
  '字符串拆分、截取、检索与替换',
  '字符串与数值',
  '字符串方法通常返回新值。substring 不包含终止位置；indexOf 未找到返回-1，includes 返回布尔值。',
  `const text = '  html,css,javascript  ';
const cleaned = text.trim();
print(cleaned.split(','));
print(cleaned.substring(0, 4), cleaned.slice(-10));
print(cleaned.startsWith('html'), cleaned.endsWith('script'));
print(cleaned.includes('css'), cleaned.indexOf('vue'));
print(cleaned.toUpperCase(), cleaned.replace('css', 'CSS'));
print('原值：', text);`,
  ['trim删除两端空白', 'split生成数组', 'substring(0,4)取得html'],
  '从文件名提取扩展名并转小写。',
  'length计数UTF-16代码单元，不一定等于可见字符数。',
  'Web/JavaScript/Reference/Global_Objects/String',
);
logic(
  'number-rounding',
  'toFixed、舍入与整数金额',
  '字符串与数值',
  'toFixed 返回定点数字字符串；二进制小数无法精确表示许多十进制数。货币计算优先用整数最小单位。',
  `print('浮点求和：', 0.1 + 0.2);
print('toFixed类型：', typeof (12.345).toFixed(2));
const totalCents = 10 + 20;
print('整数分计算：', (totalCents / 100).toFixed(2));
print('取整：', Math.floor(-1.2), Math.ceil(-1.2), Math.trunc(-1.2), Math.round(1.5));`,
  ['0.1+0.2不严格等于0.3', 'toFixed返回字符串', 'floor和trunc对负数不同'],
  '以整数分计算三件12.90元商品。',
  '格式化显示不等于解决全部金额计算误差。',
  'Web/JavaScript/Reference/Global_Objects/Number/toFixed',
);
logic(
  'random',
  '随机整数、随机点名与不重复抽取',
  'JavaScript 小算法',
  '闭区间随机整数公式为 floor(random*(max-min+1))+min；不重复抽取可从候选池删除。',
  `function randomInteger(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
const pool = ['小林', '小雨', '小周', '小陈'];
const selected = [];
while (pool.length > 0) { const index = randomInteger(0, pool.length - 1); selected.push(pool.splice(index, 1)[0]); }
print('不重复随机顺序：', selected);
print('1到6：', randomInteger(1, 6));`,
  ['+1纳入上界', '删除已抽元素避免重复', '每次顺序可能不同'],
  '仅抽两人且不改传入数组。',
  'Math.random不用于密码和安全令牌。',
  'Web/JavaScript/Reference/Global_Objects/Math/random',
);
logic(
  'scope-hoist',
  '块作用域、提升与暂时性死区',
  '函数与作用域',
  'var 声明可见但尚未赋值；let/const 声明前处于暂时性死区。函数声明可先调用，函数表达式需要先赋值。',
  `print('函数声明：', declared());
function declared() { return '可先调用'; }
print('var声明前：', value);
var value = 8;
try { print(before); } catch (error) { print('let声明前：', error.name); }
let before = 9;
let outer = '外部';
{ let outer = '块内部'; print(outer); }
print(outer);`,
  ['var声明前undefined', 'let声明前ReferenceError', '内层遮蔽外层变量'],
  '用const函数表达式对比提前调用。',
  '并非所有声明都可提前使用。',
  'Web/JavaScript/Guide/Grammar_and_types',
);
logic(
  'parameters',
  'arguments、剩余参数与默认参数',
  '函数与作用域',
  '普通函数有 arguments 类数组，剩余参数是真数组。默认值只替换 undefined，不替换 null 或0。',
  `function inspect(first = 10, ...rest) { print('首项：', first, '其余：', rest, '参数数量：', arguments.length); }
inspect(undefined, 2, 3);
inspect(null, 0);
const sum = (...values) => values.reduce((total, value) => total + value, 0);
print(sum(2, 3, 4));`,
  ['undefined触发默认值', 'null保留', 'rest可直接reduce'],
  '加入有限数字验证。',
  '箭头没有自己的arguments；rest必须是最后一个形参。',
  'Web/JavaScript/Reference/Functions/rest_parameters',
);
logic(
  'destructure',
  '多级解构、重命名与安全默认值',
  '函数与作用域',
  '解构按属性或位置读值，可以重命名和设置默认值；嵌套对象缺失时需为该层提供默认对象。',
  `const payload = { data: { user: { name: '小雨', points: 0 } } };
const { data: { user: { name: username, points = 100 } } } = payload;
print(username, points);
const { profile: { city = '未知' } = {} } = {};
print(city);
const [first, , third, ...rest] = [10, 20, 30, 40, 50];
print(first, third, rest);`,
  ['name重命名为username', '0不会触发默认100', '数组可跳过位置'],
  '从接口结构取列表，缺失时用空数组。',
  '默认值只替换undefined；嵌套层为null需另处理。',
  'Web/JavaScript/Reference/Operators/Destructuring',
);
logic(
  'iife',
  '立即执行函数与模块隔离',
  '函数与作用域',
  '立即执行函数建立私有作用域。旧页面用 IIFE 隔离变量，现代页面也可用 type=module。',
  `const summary = (() => { const privateValue = 12; return { total: privateValue * 2 }; })();
print(summary);
print('私有变量：', typeof privateValue);
const values = [1, 2, 3];
;(() => print('独立IIFE：', values.length))();`,
  ['内部变量不泄露', '可返回公开结果', '显式分号处理语句边界'],
  '返回两个函数共享私有计数。',
  '以 ( 或 [ 开头的语句要注意前一行分号。',
  'Glossary/IIFE',
);
logic(
  'constructor',
  '构造函数、实例与返回对象的例外',
  '对象与原型',
  'new 创建实例并绑定 this。返回原始值通常被忽略，但显式返回对象会替换默认实例；“所有return无效”不准确。',
  `function Student(name) { this.name = name; }
Student.school = '前端实验室';
Student.prototype.greet = function () { return '你好，' + this.name; };
const a = new Student('小林');
const b = new Student('小雨');
print(a.greet(), b.greet());
print('静态：', Student.school, '实例：', a.school);
function Replacement() { this.ignored = true; return { replaced: true }; }
print(new Replacement());`,
  ['实例属性独立', '方法来自共享原型', '返回对象替换实例'],
  '增加年级和静态create方法。',
  '箭头函数不能作为构造函数。',
  'Web/JavaScript/Reference/Operators/new',
);
logic(
  'prototype-chain',
  '原型链、constructor 与继承',
  '对象与原型',
  '对象沿原型链查找属性。Object.getPrototypeOf 读取原型，Object.hasOwn 检查自有属性；constructor 是普通可写属性。',
  `const base = { greet() { return '你好，' + this.name; } };
const child = Object.create(base);
child.name = '小雨';
print(child.greet());
print('自有greet：', Object.hasOwn(child, 'greet'));
print('原型相同：', Object.getPrototypeOf(child) === base);
print('终点：', Object.getPrototypeOf(Object.prototype));
function Parent() {}
function Child() {}
Child.prototype = Object.create(Parent.prototype);
Object.defineProperty(Child.prototype, 'constructor', { value: Child, writable: true, configurable: true });
print(new Child() instanceof Parent);`,
  ['greet通过原型读取', '原型终点为null', '子原型连接父原型'],
  '增加同名自有方法并比较。',
  '不要重写Array.prototype添加课堂方法。',
  'Web/JavaScript/Guide/Inheritance_and_the_prototype_chain',
);
logic(
  'object-methods',
  'Object.keys、values、entries 与 assign',
  '对象与原型',
  '静态方法处理对象自身可枚举属性。assign 是浅复制；for...in 还可能遍历继承属性。',
  `const user = { name: '小林', age: 20 };
print(Object.keys(user));
print(Object.values(user));
print(Object.entries(user));
const merged = Object.assign({}, user, { age: 21 });
print('合并：', merged, '原值：', user);
print(Object.fromEntries([['html', 12], ['css', 18]]));`,
  ['keys和values返回数组', '后面同名字段覆盖', '新目标不改原顶层值'],
  '过滤值为null的字段再重建对象。',
  'assign不复制嵌套对象。',
  'Web/JavaScript/Reference/Global_Objects/Object',
);
logic(
  'this-binding',
  '普通函数、箭头函数与 call/apply/bind',
  '函数与作用域',
  '普通函数this由调用方式决定；箭头继承外层this。call/apply立即调用，bind返回新函数且可预置参数。',
  `function introduce(prefix, suffix) { return prefix + this.name + suffix; }
const user = { name: '小雨' };
print(introduce.call(user, '你好，', '！'));
print(introduce.apply(user, ['欢迎，', '。']));
const bound = introduce.bind(user, '绑定参数：');
print(bound('完成'));
const group = { name: '实验室', read() { const arrow = () => this.name; return arrow.call({ name: '其他' }); } };
print('箭头this：', group.read());
function strictThis() { 'use strict'; return this; }
print('严格裸调用：', strictThis());`,
  ['call逐个传参，apply数组', 'bind不立即调用', 'call不能修改箭头this'],
  '拆出对象方法并用bind修复。',
  '箭头事件回调也可通过event.currentTarget访问元素。',
  'Web/JavaScript/Reference/Global_Objects/Function/bind',
);
logic(
  'copy-depth',
  '浅复制、深复制与 structuredClone',
  '对象与原型',
  '赋值共享整个对象，浅复制创建新顶层但共享嵌套引用。structuredClone 支持多种内置类型及循环引用。',
  `const source = { name: '原值', nested: { count: 1 }, date: new Date('2024-01-01') };
const shallow = { ...source };
shallow.name = '独立顶层'; shallow.nested.count = 2;
print('共享嵌套：', source.nested.count);
const deep = structuredClone(source);
deep.nested.count = 9;
print('未影响原值：', source.nested.count, 'Date：', deep.date instanceof Date);
const cyclic = {}; cyclic.self = cyclic;
const cloned = structuredClone(cyclic);
print('循环关系：', cloned.self === cloned);`,
  ['顶层独立', '浅复制共享nested', 'structuredClone支持Date和循环'],
  '克隆函数并捕获DataCloneError。',
  'JSON往返丢失undefined、将Date转为字符串，不能处理循环引用。',
  'Web/API/Window/structuredClone',
);
logic(
  'recursion-copy',
  '递归复制：退出条件与循环引用',
  '对象与原型',
  '递归必须有基本情况。教学版复制用 WeakMap 记录已有副本，避免循环引用无限递归，并明确只支持数组与普通对象。',
  `function clonePlain(value, seen = new WeakMap()) {
  if (value === null || typeof value !== 'object') return value;
  if (seen.has(value)) return seen.get(value);
  if (!Array.isArray(value) && Object.getPrototypeOf(value) !== Object.prototype) throw new TypeError('仅支持普通对象和数组');
  const copy = Array.isArray(value) ? [] : {};
  seen.set(value, copy);
  for (const key of Object.keys(value)) Object.defineProperty(copy, key, { value: clonePlain(value[key], seen), enumerable: true, writable: true, configurable: true });
  return copy;
}
const source = { tags: ['HTML'], info: { level: 1 } };
source.self = source;
const copy = clonePlain(source); copy.info.level = 2;
print(source.info.level, copy.info.level, copy.self === copy);`,
  ['原嵌套值未改', 'WeakMap保留循环关系', '拒绝复杂类型'],
  '用递归统计树形菜单节点。',
  '此实现不是所有JavaScript值的通用复制工具。',
  'Web/JavaScript/Guide/Functions',
);
logic(
  'error-handling',
  'throw、try/catch/finally 与零值验证',
  '调试与可靠性',
  '验证数值不能用 !value 排除0。throw抛错，catch在边界处理，finally负责清理。',
  `function sum(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) throw new TypeError('需要有限数字');
  return a + b;
}
for (const pair of [[0, 5], [undefined, 2]]) {
  try { print('结果：', sum(...pair)); }
  catch (error) { print(error.name + '：' + error.message); }
  finally { print('该次校验结束'); }
}`,
  ['0和5合法', '无效输入被catch', 'finally每次执行'],
  '增加除法并处理除数0。',
  'catch不应静默吞错；finally中的return可能覆盖原结果。',
  'Web/JavaScript/Reference/Statements/try...catch',
);
logic(
  'event-loop',
  '同步任务、微任务与定时器',
  '调试与可靠性',
  '同步代码先执行；Promise回调等微任务在当前任务结束后运行；定时器回调是后续任务。0ms不表示立即执行。',
  `print('1 同步开始');
setTimeout(() => print('4 定时器任务'), 0);
Promise.resolve().then(() => print('3 Promise微任务'));
print('2 同步结束');`,
  ['顺序1、2、3、4', 'then不打断同步代码', '0ms也要排队'],
  '增加queueMicrotask并预测顺序。',
  '长同步循环会阻塞交互和渲染。',
  'Web/JavaScript/Reference/Execution_model',
);
logic(
  'regex-anchors',
  '正则边界、字符组与量词',
  '正则与验证',
  '字符组定义字符，量词定义次数，^与$约束整体输入。匹配子串不能证明完整输入合规。',
  `const username = /^[a-zA-Z0-9_]{6,16}$/;
for (const value of ['abc', 'abc_12', 'abc_12!', 'abcdefgh123456789']) print(value, username.test(value));
print('子串：', /web/.test('学习web开发'));
print('完整：', /^web$/.test('学习web开发'));
print('数字：', /^\\d+$/.test('123'));`,
  ['长度6到16', '不允许感叹号', '边界约束整体'],
  '加入字母开头要求，测试5、6、16、17位。',
  '前端验证不能替代服务端校验。',
  'Web/JavaScript/Guide/Regular_expressions',
);
logic(
  'regex-flags',
  '正则替换、捕获与 g 的状态',
  '正则与验证',
  'i忽略大小写，g查找多个结果；带g的test会修改lastIndex，重复独立校验时要注意状态。',
  `print('HTML css html'.replace(/html/gi, '网页'));
const result = '2026-10-12'.match(/^(\\d{4})-(\\d{2})-(\\d{2})$/);
print(result.slice(1));
const stateful = /a/g;
print(stateful.test('a'), stateful.lastIndex);
print(stateful.test('a'), stateful.lastIndex);
stateful.lastIndex = 0;
print(stateful.test('a'));`,
  ['gi替换全部大小写匹配', '捕获组提取年月日', '连续test结果可能不同'],
  '用replace回调隐藏中间字符。',
  '敏感词替换不是HTML转义和安全过滤。',
  'Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex',
);
logic(
  'date-countdown',
  '时间戳与目标时间倒计时',
  '浏览器 API 拆解',
  '倒计时使用目标时间减当前时间，避免每秒减一累积漂移。padStart补零显示。',
  `const target = Date.now() + 65000;
function displayRemaining() {
  const seconds = Math.max(0, Math.ceil((target - Date.now()) / 1000));
  output.textContent = String(Math.floor(seconds / 60)).padStart(2, '0') + ':' + String(seconds % 60).padStart(2, '0');
  if (seconds === 0) clearInterval(timer);
}
const timer = setInterval(displayRemaining, 1000);
displayRemaining();`,
  ['初始约01:05', '每次计算差值', '到0清定时器'],
  '增加小时显示并处理跨小时。',
  '日期应明确时区；业务截止时间需可信来源。',
  'Web/JavaScript/Reference/Global_Objects/Date',
);
logic(
  'bom-url',
  'location、navigator 与 URL 查询参数',
  '浏览器 API 拆解',
  'URLSearchParams负责参数编码解码。响应布局优先根据尺寸和能力判断，避免UA判断强制跳转。',
  `const url = new URL('https://example.com/course?id=12&tag=css&tag=html#intro');
print(url.pathname, url.hash);
print(url.searchParams.get('id'), url.searchParams.getAll('tag'));
url.searchParams.set('keyword', '盒子 模型');
print(url.href);
print('语言：', navigator.language, '在线提示：', navigator.onLine);
print('窄视口：', matchMedia('(max-width: 600px)').matches);`,
  ['get只取首项', 'getAll取全部', '参数自动编码'],
  '删除id并输出URL。',
  'navigator.onLine不保证目标服务可用。',
  'Web/API/URLSearchParams',
);
