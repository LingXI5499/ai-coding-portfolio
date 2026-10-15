/* 桌面与移动项目交互的独立原生实现。 */
interaction(
  'atm',
  'ATM 状态：存入、取出与校验',
  '把循环式prompt题改成事件驱动：表单收集金额，动作函数验证后更新余额，错误不改变已有状态。',
  `<p>余额：<strong id="balance">100.00</strong> 元</p><label>金额 <input id="amount" type="number" min="0.01" step="0.01" value="20"></label><button id="deposit">存入</button><button id="withdraw">取出</button><p id="message" role="status"></p>`,
  '',
  `let balance = 10000;
function change(direction) {
  const value = document.querySelector('#amount').value;
  const cents = Math.round(Number(value) * 100);
  const message = document.querySelector('#message');
  if (!value.trim() || !Number.isSafeInteger(cents) || cents <= 0) { message.textContent = '请输入有效的正金额'; return; }
  if (direction === -1 && cents > balance) { message.textContent = '余额不足'; return; }
  balance += direction * cents;
  document.querySelector('#balance').textContent = (balance / 100).toFixed(2);
  message.textContent = direction === 1 ? '存入成功' : '取出成功';
}
document.querySelector('#deposit').onclick = () => change(1);
document.querySelector('#withdraw').onclick = () => change(-1);`,
  ['余额以整数分保存', '取款超过余额会拒绝', '输入空值不会改变余额'],
  '增加交易记录数组并渲染成列表。',
  '这是本地状态练习，没有账户、支付或服务器事务功能。',
);
interaction(
  'guess-number',
  '猜数字：有限次数与重新开始',
  '随机目标、剩余次数、输入验证和结束状态共同组成小型状态机，输入无效时不消耗次数。',
  `<p>猜1到20的整数，最多5次。</p><label>数字 <input id="guess" type="number" min="1" max="20"></label><button id="check">猜一次</button><button id="restart">重新开始</button><p id="result" role="status"></p>`,
  '',
  `let target; let remaining;
const check = document.querySelector('#check');
const result = document.querySelector('#result');
function restart() { target = Math.floor(Math.random() * 20) + 1; remaining = 5; check.disabled = false; result.textContent = '还有5次机会'; }
check.onclick = () => {
  const raw = document.querySelector('#guess').value;
  const value = Number(raw);
  if (!raw || !Number.isInteger(value) || value < 1 || value > 20) { result.textContent = '请输入1到20的整数'; return; }
  remaining -= 1;
  if (value === target) { result.textContent = '猜对了！'; check.disabled = true; }
  else if (remaining === 0) { result.textContent = '机会用完，答案是' + target; check.disabled = true; }
  else result.textContent = (value < target ? '偏小' : '偏大') + '，剩余' + remaining + '次';
};
document.querySelector('#restart').onclick = restart;
restart();`,
  ['有效猜测才扣次数', '成功或耗尽后禁用按钮', '重新开始恢复状态'],
  '把范围和次数放到配置对象。',
  '禁用按钮时应继续显示结束原因。',
);
interaction(
  'bar-chart',
  '数据生成柱形图：比例与标签',
  '数组生成节点，最大值决定比例。每条柱子保留数值文本和可访问标签，不用document.write生成整页。',
  `<div id="chart"></div><button id="shuffle">生成新数据</button>`,
  `.chart-row { display: grid; grid-template-columns: 50px minmax(0,1fr) 40px; align-items: center; gap: 10px; margin: 12px 0; }
.chart-bar { height: 24px; background: #70a984; border-radius: 4px; }`,
  `function render(values) {
  const chart = document.querySelector('#chart'); chart.replaceChildren();
  const max = Math.max(1, ...values);
  values.forEach((value, index) => {
    const row = document.createElement('div'); row.className = 'chart-row';
    const label = document.createElement('span'); label.textContent = '第' + (index + 1) + '组';
    const bar = document.createElement('div'); bar.className = 'chart-bar'; bar.style.width = value / max * 100 + '%'; bar.setAttribute('aria-hidden', 'true');
    const number = document.createElement('span'); number.textContent = value;
    row.append(label, bar, number); chart.append(row);
  });
}
document.querySelector('#shuffle').onclick = () => render(Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)));
render([25, 60, 42, 80, 35]);`,
  ['最长柱为容器100%', '零值不导致除零', '数据文本保留可读性'],
  '加入负值策略或拒绝负值。',
  '图形必须同时提供数值；用户文本用textContent写入。',
);
interaction(
  'select-all',
  '全选、部分选中与 indeterminate',
  '全选需要同步每个子项；部分选中用indeterminate表达中间状态，购物车和批量列表可以共用。',
  `<label><input id="all" type="checkbox"> 全选</label><div id="items"><label><input type="checkbox" value="HTML">HTML</label><label><input type="checkbox" value="CSS">CSS</label><label><input type="checkbox" value="JS">JS</label></div><p id="summary" role="status"></p>`,
  '',
  `const all = document.querySelector('#all');
const items = [...document.querySelectorAll('#items input')];
function sync() { const selected = items.filter(item => item.checked); all.checked = selected.length === items.length; all.indeterminate = selected.length > 0 && selected.length < items.length; document.querySelector('#summary').textContent = '已选' + selected.length + '项'; }
all.onchange = () => { items.forEach(item => item.checked = all.checked); sync(); };
items.forEach(item => item.onchange = sync);
sync();`,
  ['部分选择显示横线', '全部选中时主框打勾', '全部取消时主框清空'],
  '增加反选按钮并重新同步。',
  'indeterminate是DOM属性，不能单靠HTML属性实现。',
  'Web/API/HTMLInputElement/indeterminate',
);
interaction(
  'password-toggle',
  '显示密码：类型切换与状态名称',
  '密码可见性通过input.type切换；按钮同时更新aria-pressed与文字，输入内容和焦点不丢失。',
  `<label for="password">密码</label><input id="password" type="password" value="demo-password" autocomplete="off"><button id="toggle" type="button" aria-pressed="false">显示密码</button>`,
  '',
  `const input = document.querySelector('#password');
const toggle = document.querySelector('#toggle');
toggle.onclick = () => { const visible = input.type === 'password'; input.type = visible ? 'text' : 'password'; toggle.setAttribute('aria-pressed', String(visible)); toggle.textContent = visible ? '隐藏密码' : '显示密码'; };`,
  ['按钮切换类型', '状态名称随之变化', '内容保持'],
  '增加caps lock提示并避免记录密码。',
  '不要把密码写入localStorage、日志或示例登录数据库。',
  'Web/HTML/Reference/Elements/input/password',
);
interaction(
  'agreement-countdown',
  '协议确认与验证码按钮倒计时',
  '协议勾选与冷却时间是两个独立状态，按钮是否可用由两者共同决定。倒计时结束必须清理定时器。',
  `<label><input id="agree" type="checkbox"> 我已阅读示例协议</label><button id="send" disabled>发送示例验证码</button><p id="notice" role="status">这里只演示按钮状态，不发送短信。</p>`,
  '',
  `const agree = document.querySelector('#agree');
const send = document.querySelector('#send');
let until = 0; let timer = null;
function update() { const seconds = Math.max(0, Math.ceil((until - Date.now()) / 1000)); send.disabled = !agree.checked || seconds > 0; send.textContent = seconds ? seconds + '秒后可重试' : '发送示例验证码'; if (!seconds && timer) { clearInterval(timer); timer = null; } }
agree.onchange = update;
send.onclick = () => { until = Date.now() + 5000; timer = setInterval(update, 200); update(); document.querySelector('#notice').textContent = '模拟已发送，冷却5秒'; };
update();`,
  ['未勾选时按钮禁用', '点击进入5秒冷却', '取消协议仍不能重新发送'],
  '加上邮箱有效性作为第三个可用条件。',
  '实际验证码必须由服务端校验并限制频率。',
);
interaction(
  'input-change',
  'input、change、焦点与组合输入',
  'input随值变化触发，change在提交修改时触发。中文输入法的组合阶段需通过isComposing避免错误提交。',
  `<label>输入内容 <input id="text" placeholder="输入并按Enter"></label><p id="status" role="status"></p><ul id="messages"></ul>`,
  '',
  `const input = document.querySelector('#text');
const status = document.querySelector('#status');
input.addEventListener('input', () => status.textContent = 'input：' + input.value.length + '个代码单元');
input.addEventListener('change', () => status.textContent = 'change：已提交修改');
input.addEventListener('focus', () => status.textContent = '获得焦点');
input.addEventListener('keydown', event => {
  if (event.key !== 'Enter' || event.isComposing) return;
  const text = input.value.trim(); if (!text) return;
  const li = document.createElement('li'); li.textContent = text; document.querySelector('#messages').append(li); input.value = '';
});`,
  ['输入时更新长度', '失焦后change提交修改', 'Enter添加纯文本条目'],
  '加入100字符限制和剩余字符提示。',
  '忽略isComposing会误把中文候选确认当作消息提交。',
  'Web/API/Element/input_event',
);
interaction(
  'event-flow',
  '事件捕获、冒泡与解绑',
  '捕获从祖先走向目标，冒泡从目标走向祖先。解绑需要同一函数引用和一致的capture选项；stopPropagation不等于preventDefault。',
  `<div id="outer"><button id="inner">点击观察顺序</button></div><button id="remove">解绑外层冒泡监听</button><pre id="trace"></pre>`,
  `#outer { padding: 24px; border: 2px dashed #81ad8f; }`,
  `const trace = document.querySelector('#trace');
function log(text) { trace.textContent += text + '\\n'; }
const outer = document.querySelector('#outer');
outer.addEventListener('click', () => log('1 外层捕获'), true);
function bubble() { log('3 外层冒泡'); }
outer.addEventListener('click', bubble);
document.querySelector('#inner').addEventListener('click', event => log('2 目标：' + event.currentTarget.id));
document.querySelector('#remove').onclick = () => { outer.removeEventListener('click', bubble); log('已解绑冒泡'); };`,
  ['初始顺序1、2、3', '解绑后只输出1、2', 'currentTarget是当前注册监听的元素'],
  '加入stopPropagation并解释哪些监听还会执行。',
  '用新的匿名函数去remove不会移除原来的监听。',
  'Web/API/EventTarget/removeEventListener',
);
interaction(
  'mouseenter',
  'mouseover 与 mouseenter 的边界差异',
  'mouseover会冒泡，跨子元素也可能触发；mouseenter不冒泡并按整体边界判断。委托悬停可配合relatedTarget过滤内部移动。',
  `<div id="zone">父区域 <button>子按钮</button></div><pre id="counts"></pre>`,
  `#zone { padding: 35px; border: 2px solid #7dad8e; background: #e2efe6; }`,
  `let over = 0; let enter = 0;
const zone = document.querySelector('#zone');
function render() { document.querySelector('#counts').textContent = 'mouseover：' + over + '\\nmouseenter：' + enter; }
zone.addEventListener('mouseover', () => { over += 1; render(); });
zone.addEventListener('mouseenter', () => { enter += 1; render(); });
render();`,
  ['进入父区域两者加一', '移入子按钮mouseover再次增加', 'mouseenter不因内部切换重复'],
  '用pointerover和relatedTarget过滤父区域内移动。',
  '不要以为mouseenter可以通过普通冒泡委托。',
  'Web/API/Element/mouseenter_event',
);
interaction(
  'dom-tree',
  '节点关系、克隆与安全删除',
  'parentElement、children与相邻元素用于查找关系。cloneNode复制结构和属性，但不会复制addEventListener注册的事件；克隆后需避免重复id。',
  `<ul id="tree"><li>第一项 <button>删除</button></li><li>第二项 <button>删除</button></li></ul><button id="clone">克隆第一项</button><p id="info" role="status"></p>`,
  '',
  `const tree = document.querySelector('#tree');
function report() { document.querySelector('#info').textContent = 'children：' + tree.children.length + '，childNodes：' + tree.childNodes.length; }
document.querySelector('#clone').onclick = () => { if (!tree.firstElementChild) return; tree.append(tree.firstElementChild.cloneNode(true)); report(); };
tree.addEventListener('click', event => { if (event.target.closest('button')) { event.target.closest('li').remove(); report(); } });
report();`,
  ['children只含元素', 'childNodes还可能含空白文本', '委托让克隆按钮同样可删'],
  '用before与after插入条目。',
  '克隆表单时还要检查label与id关联，不要制造重复id。',
  'Web/API/Node/cloneNode',
);
interaction(
  'price-filter',
  '按价格范围筛选商品',
  '数组filter根据最小和最大价格生成结果，输入验证和空结果反馈也是组件的一部分；数据写入用textContent。',
  `<label>最低价 <input id="min" type="number" value="0"></label><label>最高价 <input id="max" type="number" value="50"></label><button id="filter">筛选</button><p id="status" role="status"></p><ul id="goods"></ul>`,
  '',
  `const products = [{ name: '笔记本', price: 12 }, { name: '桌面灯', price: 48 }, { name: '背包', price: 89 }];
function render() {
  const min = Number(document.querySelector('#min').value); const max = Number(document.querySelector('#max').value);
  const status = document.querySelector('#status'); const list = document.querySelector('#goods'); list.replaceChildren();
  if (!Number.isFinite(min) || !Number.isFinite(max) || min < 0 || min > max) { status.textContent = '请输入有效范围：最低价不能超过最高价'; return; }
  const selected = products.filter(item => item.price >= min && item.price <= max);
  for (const item of selected) { const li = document.createElement('li'); li.textContent = item.name + ' · ￥' + item.price.toFixed(2); list.append(li); }
  status.textContent = selected.length ? selected.length + '件商品' : '这个范围没有商品';
}
document.querySelector('#filter').onclick = render;
render();`,
  ['默认显示两件商品', '区间端点包含', '无结果有提示'],
  '增加名称搜索并组合价格条件。',
  'filter返回新数组但仍共享其中对象，不等于深复制。',
);
interaction(
  'debounce',
  '原生防抖：最后一次输入后执行',
  '防抖每次触发都清除旧定时器，等待安静期后执行。搜索建议可以只处理最后一次输入，组件销毁时需取消定时器。',
  `<label>搜索 <input id="search" placeholder="连续输入几个字"></label><p id="raw">输入事件0次</p><p id="settled" role="status">等待输入</p>`,
  '',
  `function debounce(callback, delay) {
  let timer;
  const wrapped = function (...args) { clearTimeout(timer); timer = setTimeout(() => callback.apply(this, args), delay); };
  wrapped.cancel = () => clearTimeout(timer);
  return wrapped;
}
let count = 0;
const update = debounce(value => document.querySelector('#settled').textContent = '稳定结果：' + value, 400);
document.querySelector('#search').addEventListener('input', event => { document.querySelector('#raw').textContent = '输入事件' + (++count) + '次'; update(event.target.value); });
window.addEventListener('pagehide', () => update.cancel());`,
  ['每次输入立即计数', '停止400ms才更新结果', '快速输入取消旧计划'],
  '增加手动取消按钮。',
  '异步搜索还要处理旧请求晚返回的竞态，防抖本身不解决它。',
);
interaction(
  'throttle',
  '原生节流：连续事件限制频率',
  '节流在持续触发中按时间间隔执行，与等待最后一次的防抖不同。这里使用首触发策略；需要最终值时应补尾调用。',
  `<div id="pad" tabindex="0">移动指针或按方向键</div><p id="raw">原始0次</p><p id="limited" role="status">节流0次</p>`,
  `#pad { padding: 45px; border: 2px dashed #80ae8e; background: #e5f0e8; touch-action: pan-y; }`,
  `function throttle(callback, delay) { let previous = -Infinity; return function (...args) { const now = performance.now(); if (now - previous >= delay) { previous = now; callback.apply(this, args); } }; }
let raw = 0; let limited = 0;
const update = throttle(() => document.querySelector('#limited').textContent = '节流' + (++limited) + '次', 300);
function handle() { document.querySelector('#raw').textContent = '原始' + (++raw) + '次'; update(); }
document.querySelector('#pad').addEventListener('pointermove', handle);
document.querySelector('#pad').addEventListener('keydown', handle);`,
  ['原始计数快速增加', '节流每300ms至多执行一次', '键盘也可触发'],
  '加入尾调用以保留最后一次事件。',
  '这份首触发实现可能丢失最后一个值，应根据业务选择策略。',
);
interaction(
  'hover-intent',
  '延迟关闭浮层与清除定时器',
  '商品放大区域和导航下拉中，短延迟关闭可以容忍指针跨越间隙。重新进入时清除旧定时器，键盘使用focus管理。',
  `<div id="hover-wrap"><button id="trigger" aria-expanded="false" aria-controls="panel">规格说明</button><div id="panel" hidden><p>进入此浮层不会关闭。</p><button id="close">关闭</button></div></div>`,
  `#panel { margin-top: 8px; padding: 20px; background: #d9ecdf; border: 1px solid #91b69c; }`,
  `const wrap = document.querySelector('#hover-wrap'); const trigger = document.querySelector('#trigger'); const panel = document.querySelector('#panel'); let timer;
function open() { clearTimeout(timer); panel.hidden = false; trigger.setAttribute('aria-expanded', 'true'); }
function close() { panel.hidden = true; trigger.setAttribute('aria-expanded', 'false'); }
wrap.addEventListener('pointerenter', open);
wrap.addEventListener('pointerleave', () => { timer = setTimeout(() => { if (!wrap.contains(document.activeElement)) close(); }, 200); });
wrap.addEventListener('focusin', open);
wrap.addEventListener('focusout', event => { if (!wrap.contains(event.relatedTarget)) close(); });
trigger.onclick = () => panel.hidden ? open() : close();
document.querySelector('#close').onclick = () => { close(); trigger.focus(); close(); };`,
  ['离开后200ms关闭', '重新进入清掉旧任务', '键盘聚焦保持展开'],
  '增加Escape关闭并恢复焦点。',
  'mouse事件仅支持鼠标；pointer与键盘需一起考虑。',
);
interaction(
  'thumbnail',
  '缩略图选择、事件委托与主图状态',
  '商品图切换可以由一组按钮控制当前索引。委托通过closest定位按钮，更新主图和aria-pressed。',
  `<div id="main-image" role="img" aria-label="绿色商品图">绿色</div><div id="thumbnails"><button data-index="0" aria-pressed="true">绿色</button><button data-index="1" aria-pressed="false">橙色</button><button data-index="2" aria-pressed="false">蓝色</button></div>`,
  `#main-image { display: grid; place-items: center; height: 220px; font-size: 30px; background: #b4d7bf; }
#thumbnails [aria-pressed=true] { outline: 3px solid #497d5a; }`,
  `const colors = [{ label: '绿色', color: '#b4d7bf' }, { label: '橙色', color: '#edcf9c' }, { label: '蓝色', color: '#b2cde3' }];
document.querySelector('#thumbnails').addEventListener('click', event => {
  const button = event.target.closest('button'); if (!button) return;
  const item = colors[Number(button.dataset.index)]; const image = document.querySelector('#main-image');
  image.textContent = item.label; image.style.background = item.color; image.setAttribute('aria-label', item.label + '商品图');
  document.querySelectorAll('#thumbnails button').forEach(node => node.setAttribute('aria-pressed', String(node === button)));
});`,
  ['点击后主区域变化', '选中按钮有视觉与语义状态', '无外部图片依赖'],
  '用本地图片替换色块并保持alt随索引更新。',
  '不要只绑定mouseover，否则键盘和触屏无法切换。',
);
interaction(
  'magnifier',
  '放大镜：坐标换算、边界与比例',
  '使用clientX/clientY减getBoundingClientRect得到盒内坐标。遮罩位置限制到边界，放大内容按视窗与原图比例移动。',
  `<p>移动指针；或聚焦图案后用方向键移动。</p><div class="magnifier-layout"><div id="medium" tabindex="0" aria-label="放大镜原图，方向键移动"><div id="mask"></div></div><div id="zoom" aria-label="放大区域"></div></div><p id="coords"></p>`,
  `.magnifier-layout { display: flex; flex-wrap: wrap; gap: 20px; }
#medium, #zoom { width: 220px; height: 220px; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Crect width='220' height='220' fill='%23dbe9bb'/%3E%3Cpath d='M0 0h55v55H0zM110 0h55v55h-55zM55 55h55v55H55zM165 55h55v55h-55zM0 110h55v55H0zM110 110h55v55h-55zM55 165h55v55H55zM165 165h55v55h-55z' fill='%2379b291'/%3E%3C/svg%3E"); flex-shrink: 0; }
#medium { position: relative; touch-action: pan-y; }
#mask { position: absolute; width: 80px; height: 80px; background: #efd07577; border: 1px solid #a97928; pointer-events: none; }
#zoom { border: 2px solid #82ab8e; }`,
  `const medium = document.querySelector('#medium'); const mask = document.querySelector('#mask'); const zoom = document.querySelector('#zoom'); let x = 70; let y = 70;
function render() { const maxX = medium.clientWidth - mask.offsetWidth; const maxY = medium.clientHeight - mask.offsetHeight; x = Math.max(0, Math.min(maxX, x)); y = Math.max(0, Math.min(maxY, y)); mask.style.left = x + 'px'; mask.style.top = y + 'px'; const ratio = zoom.clientWidth / mask.offsetWidth; zoom.style.backgroundSize = medium.clientWidth * ratio + 'px ' + medium.clientHeight * ratio + 'px'; zoom.style.backgroundPosition = -x * ratio + 'px ' + -y * ratio + 'px'; document.querySelector('#coords').textContent = '遮罩：' + Math.round(x) + '，' + Math.round(y); }
medium.addEventListener('pointermove', event => { const rect = medium.getBoundingClientRect(); x = event.clientX - rect.left - mask.offsetWidth / 2; y = event.clientY - rect.top - mask.offsetHeight / 2; render(); });
medium.addEventListener('keydown', event => { const map = { ArrowLeft: [-10,0], ArrowRight: [10,0], ArrowUp: [0,-10], ArrowDown: [0,10] }; if (!map[event.key]) return; event.preventDefault(); x += map[event.key][0]; y += map[event.key][1]; render(); });
render();`,
  ['遮罩不会离开原图', '视窗宽/遮罩宽决定放大比', '键盘移动也更新预览'],
  '将遮罩改为100px并同步计算背景尺寸。',
  '不要混用pageX和相对视口的rect.left；页面滚动后会出现偏移。',
  'Web/API/Element/getBoundingClientRect',
);
interaction(
  'carousel-parts',
  '轮播组件：索引、圆点、暂停与触摸',
  '轮播可拆为当前索引、上一项下一项、圆点定位、定时推进、焦点暂停和滑动手势。用取模处理边界。',
  `<div id="carousel" tabindex="0" aria-label="示例轮播"><div id="slide" aria-live="polite"></div><button id="previous" aria-label="上一项">←</button><button id="next" aria-label="下一项">→</button><div id="dots"></div><button id="pause" aria-pressed="false">暂停自动播放</button></div>`,
  `#slide { padding: 45px; text-align: center; font-size: 25px; background: #cce3d3; }
#carousel { touch-action: pan-y; }
#dots [aria-pressed=true] { background: #376e4b; color: white; }`,
  `const slides = ['HTML · 结构', 'CSS · 布局', 'JavaScript · 交互']; let index = 0; let paused = false; let timer; let startX = null;
const carousel = document.querySelector('#carousel'); const dots = document.querySelector('#dots');
slides.forEach((_, i) => { const button = document.createElement('button'); button.textContent = String(i + 1); button.setAttribute('aria-label', '转到第' + (i + 1) + '项'); button.onclick = () => move(i); dots.append(button); });
function move(next) { index = (next + slides.length) % slides.length; document.querySelector('#slide').textContent = slides[index]; [...dots.children].forEach((button, i) => button.setAttribute('aria-pressed', String(i === index))); }
function stop() { clearInterval(timer); }
function start() { stop(); if (!paused && !matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => move(index + 1), 3000); }
document.querySelector('#previous').onclick = () => move(index - 1);
document.querySelector('#next').onclick = () => move(index + 1);
document.querySelector('#pause').onclick = event => { paused = !paused; event.currentTarget.setAttribute('aria-pressed', String(paused)); event.currentTarget.textContent = paused ? '继续自动播放' : '暂停自动播放'; paused ? stop() : start(); };
carousel.addEventListener('pointerenter', stop); carousel.addEventListener('pointerleave', () => { if (!carousel.contains(document.activeElement)) start(); });
carousel.addEventListener('focusin', stop); carousel.addEventListener('focusout', event => { if (!carousel.contains(event.relatedTarget)) start(); });
carousel.addEventListener('pointerdown', event => startX = event.clientX);
carousel.addEventListener('pointerup', event => { if (startX !== null && Math.abs(event.clientX - startX) > 40) move(index + (event.clientX < startX ? 1 : -1)); startX = null; });
carousel.addEventListener('pointercancel', () => startX = null);
move(0); start();`,
  ['上一项从首项回到末项', '圆点直接定位', '聚焦或悬停暂停自动推进'],
  '增加左右方向键操作和当前项计数。',
  '不要自动抢走用户焦点；轮播需提供暂停控制。',
);
interaction(
  'scroll-nav',
  '滚动头部、电梯导航与回到顶部',
  '滚动页面的导航可以拆为观察当前区块、更新选中项、滚动到目标与返回顶部。IntersectionObserver减少持续滚动计算。',
  `<nav id="elevator" aria-label="内容导航"><button data-target="part1">结构</button><button data-target="part2">布局</button><button data-target="part3">交互</button><button id="top">↑ 顶部</button></nav><div id="content"><section id="part1"><h3>结构</h3></section><section id="part2"><h3>布局</h3></section><section id="part3"><h3>交互</h3></section></div>`,
  `#elevator { position: sticky; top: 0; background: #d9e9dd; z-index: 1; padding: 4px; }
#elevator [aria-current] { background: #407b54; color: white; }
#content section { min-height: 300px; padding: 24px; border-bottom: 1px solid #c6dccd; scroll-margin-top: 65px; }`,
  `const buttons = [...document.querySelectorAll('[data-target]')];
const behavior = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
buttons.forEach(button => button.onclick = () => document.getElementById(button.dataset.target).scrollIntoView({ behavior }));
document.querySelector('#top').onclick = () => window.scrollTo({ top: 0, behavior });
const observer = new IntersectionObserver(entries => { const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0]; if (!visible) return; buttons.forEach(button => { if (button.dataset.target === visible.target.id) button.setAttribute('aria-current', 'location'); else button.removeAttribute('aria-current'); }); }, { threshold: [0,.5,1] });
document.querySelectorAll('#content section').forEach(section => observer.observe(section));`,
  ['导航黏在顶部', '点击滚动到区块', '可见区块更新状态'],
  '在主导航离开视口后显示第二条固定导航。',
  '平滑滚动需尊重减少动态效果；scroll-margin避免标题被黏性栏遮住。',
  'Web/API/Intersection_Observer_API',
);
interaction(
  'form-rules',
  '逐项表单验证与错误关联',
  '注册页拆成用户名规则、重复密码、协议确认和提交反馈。HTML约束与业务验证配合，错误消息关联对应控件。',
  `<form id="registration" novalidate><label for="username">用户名（6–16位字母、数字或下划线）</label><input id="username" aria-describedby="name-error" autocomplete="off"><p id="name-error"></p><label for="first-password">示例密码</label><input id="first-password" type="password" autocomplete="off"><label for="confirmation">再次输入</label><input id="confirmation" type="password" aria-describedby="password-error" autocomplete="off"><p id="password-error"></p><label><input id="terms" type="checkbox">同意示例协议</label><button>验证</button><p id="status" role="status"></p></form>`,
  `[aria-invalid=true] { border: 2px solid #b65a41 !important; }
#name-error, #password-error { color: #9a4b35; min-height: 20px; }`,
  `const form = document.querySelector('#registration');
function validate() {
  const username = document.querySelector('#username'); const first = document.querySelector('#first-password'); const confirmation = document.querySelector('#confirmation');
  const nameValid = /^[a-zA-Z0-9_]{6,16}$/.test(username.value); const passwordValid = first.value.length >= 6 && first.value === confirmation.value;
  username.setAttribute('aria-invalid', String(!nameValid)); confirmation.setAttribute('aria-invalid', String(!passwordValid));
  document.querySelector('#name-error').textContent = nameValid ? '' : '用户名格式不符合要求';
  document.querySelector('#password-error').textContent = passwordValid ? '' : '示例密码需至少6位，且两次相同';
  return nameValid && passwordValid && document.querySelector('#terms').checked;
}
form.addEventListener('submit', event => { event.preventDefault(); const valid = validate(); document.querySelector('#status').textContent = valid ? '验证通过（未注册真实账户）' : '请检查字段并确认协议'; if (!valid) form.querySelector('[aria-invalid=true]')?.focus(); });
form.addEventListener('change', validate);`,
  ['错误关联输入项', '提交不刷新页面', '不保存示例密码'],
  '增加邮箱字段与HTML原生validity检查。',
  '这些规则仅演示输入反馈，不是实际身份认证或密码安全方案。',
);
interaction(
  'storage-json',
  'localStorage、sessionStorage 与复杂数据',
  'Storage保存字符串，复杂数据先JSON编码，并在读取时捕获访问错误、解析错误与结构不符。实验隔离页不能同源存储，导出后可测试。',
  `<label>昵称 <input id="nickname" value="小雨"></label><label>存储类型 <select id="type"><option value="localStorage">localStorage</option><option value="sessionStorage">sessionStorage</option></select></label><button id="save">保存</button><button id="read">读取</button><button id="clear">清除</button><pre id="result"></pre>`,
  '',
  `const key = 'lab-manual-profile';
function action(kind) {
  const result = document.querySelector('#result');
  try {
    const storage = window[document.querySelector('#type').value];
    if (kind === 'save') { storage.setItem(key, JSON.stringify({ nickname: document.querySelector('#nickname').value, version: 1 })); result.textContent = '已保存'; }
    if (kind === 'clear') { storage.removeItem(key); result.textContent = '已清除本例键值'; }
    if (kind === 'read') { const value = JSON.parse(storage.getItem(key) || 'null'); result.textContent = value && typeof value.nickname === 'string' ? '昵称：' + value.nickname : '没有有效记录'; }
  } catch (error) { result.textContent = '当前隔离预览不允许存储或数据不可读。导出HTML后测试。\\n' + error.name; }
}
['save','read','clear'].forEach(kind => document.getElementById(kind).onclick = () => action(kind));`,
  ['localStorage跨会话，sessionStorage按标签会话', '只清理本例键', '隔离环境显示解释'],
  '增加数据版本迁移和解析失败后的回退。',
  '不要为试验Storage解除整个实验iframe的同源隔离。',
  'Web/API/Web_Storage_API',
);
interaction(
  'history',
  'History 状态与前进后退',
  'history管理同一浏览上下文的历史条目。pushState增加条目，replaceState修改当前条目，popstate用于恢复状态。隔离预览展示限制并建议导出。',
  `<button id="page-one">第一步</button><button id="page-two">第二步</button><button id="back">后退</button><p id="status" role="status">当前步骤1</p>`,
  '',
  `const status = document.querySelector('#status');
function show(step) { status.textContent = '当前步骤' + step; }
function navigate(step) { try { history.pushState({ step }, '', '#step=' + step); show(step); } catch (error) { status.textContent = '隔离预览限制History写入，请导出后测试：' + error.name; } }
document.querySelector('#page-one').onclick = () => navigate(1);
document.querySelector('#page-two').onclick = () => navigate(2);
document.querySelector('#back').onclick = () => { if (history.state?.step) history.back(); else status.textContent = '没有本例历史，请先选择步骤'; };
window.addEventListener('popstate', event => show(event.state?.step || 1));`,
  ['pushState不请求新页面', '后退触发popstate', '状态与视图分别管理'],
  '加入replaceState初始化状态。',
  'pushState本身不会触发popstate；不要写可能把用户带离实验的无条件history.back。',
  'Web/API/History_API',
);
