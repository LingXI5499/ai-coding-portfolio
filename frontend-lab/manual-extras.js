visual(
  'marquee',
  '无缝走马灯：重复轨道与暂停',
  '变换与动画',
  '将同一组装饰内容复制一次，轨道平移半个总宽度后重置，形成循环。真实重要内容不应只能随动画读取。',
  `<div class="marquee" tabindex="0" aria-label="课程关键词展示"><div class="marquee-track"><div>HTML　CSS　JavaScript　布局　交互　</div><div aria-hidden="true">HTML　CSS　JavaScript　布局　交互　</div></div></div>`,
  `.marquee { overflow: hidden; background: #deede2; }
.marquee-track { display: flex; width: max-content; animation: marquee 12s linear infinite; }
.marquee-track > div { flex-shrink: 0; padding: 20px; white-space: nowrap; }
.marquee:hover .marquee-track, .marquee:focus-within .marquee-track { animation-play-state: paused; }
@keyframes marquee { to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }`,
  ['两组内容宽度一致', '-50%轨道宽度等于一组宽度', '悬停聚焦暂停'],
  '加入一个显式暂停开关并支持触屏。',
  '副本用aria-hidden避免读屏重复，减少动态效果时停止。',
  'Web/CSS/Reference/Properties/animation',
);
interaction(
  'clock',
  '图形时钟：角度、原点与实时日期',
  '秒针每秒6度，分针叠加秒数，时针叠加分钟。旋转原点设为针尾，并每次读取真实日期以避免漂移。',
  `<div class="clock"><span id="hour" class="hand hour"></span><span id="minute" class="hand minute"></span><span id="second" class="hand second"></span><b class="twelve">12</b><b class="six">6</b></div><p id="time" role="timer"></p>`,
  `.clock { position: relative; width: 220px; height: 220px; margin: 20px auto; border: 6px solid #7aa98a; border-radius: 50%; background: #eff5e9; }
.hand { position: absolute; bottom: 50%; left: calc(50% - 2px); width: 4px; transform-origin: center bottom; border-radius: 4px; }
.hour { height: 55px; background: #345e41; }
.minute { height: 80px; background: #5e8f70; }
.second { height: 88px; width: 2px; background: #b98538; }
.twelve, .six { position: absolute; left: calc(50% - 8px); }
.twelve { top: 6px; } .six { bottom: 6px; }`,
  `function render() {
  const now = new Date(); const seconds = now.getSeconds(); const minutes = now.getMinutes() + seconds / 60; const hours = now.getHours() % 12 + minutes / 60;
  document.querySelector('#second').style.transform = 'rotate(' + seconds * 6 + 'deg)';
  document.querySelector('#minute').style.transform = 'rotate(' + minutes * 6 + 'deg)';
  document.querySelector('#hour').style.transform = 'rotate(' + hours * 30 + 'deg)';
  document.querySelector('#time').textContent = new Intl.DateTimeFormat('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(now);
}
render(); setInterval(render, 1000);`,
  ['秒针每秒6度', '时针含分钟偏移', '文字时钟同步显示'],
  '增加24小时文字格式与时区选择。',
  '不要只用CSS无限旋转代替真实时间。',
  'Web/JavaScript/Reference/Global_Objects/Date',
);
interaction(
  'accordion',
  '手风琴：单项展开与响应状态',
  '手风琴是一组按钮和内容面板，每次展开一项；用aria-expanded、aria-controls与hidden保持语义和视图一致。',
  `<div id="accordion">${['HTML结构', 'CSS样式', 'JavaScript交互'].map((title, i) => `<section><h3><button aria-expanded="${i === 0}" aria-controls="panel-${i}">${title}</button></h3><div id="panel-${i}" ${i === 0 ? '' : 'hidden'}><p>${title}的知识点可以在实验室独立查看。</p></div></section>`).join('')}</div>`,
  `#accordion section { border-bottom: 1px solid #bcd5c4; }
#accordion h3 { margin: 0; }
#accordion h3 button { width: 100%; text-align: left; }
#accordion [aria-expanded=true] { background: #cee5d5; }`,
  `const buttons = [...document.querySelectorAll('#accordion button')];
buttons.forEach(button => button.onclick = () => {
  const open = button.getAttribute('aria-expanded') !== 'true';
  buttons.forEach(item => { const selected = item === button && open; item.setAttribute('aria-expanded', String(selected)); document.getElementById(item.getAttribute('aria-controls')).hidden = !selected; });
});`,
  ['展开新项关闭其他项', '当前项可再次折叠', '按钮天然支持Enter和空格'],
  '改成多项同时展开模式。',
  '不要把可点击标题仅做成div，必须提供键盘交互。',
);
interaction(
  'dpr-calculator',
  'CSS 像素、DPR 与二倍图换算',
  '显示尺寸以CSS像素计；高密度屏幕可用更多源像素描述同一显示面积。DPR不是给所有CSS尺寸直接乘二。',
  `<label>显示宽度（CSS px）<input id="width" type="number" min="1" value="160"></label><label>DPR <input id="dpr" type="number" min="1" step="0.5" value="2"></label><button id="calculate">计算素材宽度</button><pre id="result"></pre>`,
  '',
  `function calculate() { const width = Number(document.querySelector('#width').value); const dpr = Number(document.querySelector('#dpr').value); document.querySelector('#result').textContent = Number.isFinite(width) && width > 0 && Number.isFinite(dpr) && dpr >= 1 ? '建议源图至少约' + Math.ceil(width * dpr) + '像素宽；显示仍是' + width + ' CSS px。当前设备DPR：' + window.devicePixelRatio : '请输入有效正数'; }
document.querySelector('#calculate').onclick = calculate; calculate();`,
  ['160px显示宽配320px二倍素材', 'CSS宽度保持160px', '实际设备DPR单独显示'],
  '用srcset的1x、2x描述符实现选择。',
  'SVG矢量图不需要固定二倍位图；图片选取还受缩放与浏览器策略影响。',
  'Web/API/Window/devicePixelRatio',
);
interaction(
  'profile-states',
  '个人资料：编辑、确认与取消',
  '会员原型中的添加家庭成员、资料确认和编辑页面可拆成同一表单的编辑状态与只读状态，取消时保留原数据。',
  `<div id="view"><p id="summary"></p><button id="edit">编辑资料</button></div><form id="editor" hidden><label>昵称 <input id="name" required maxlength="20"></label><label>生日 <input id="birthday" type="date" required></label><button>确认</button><button id="cancel" type="button">取消</button><p id="error" role="status"></p></form>`,
  '',
  `let profile = { name: '学习者', birthday: '2000-01-01' };
const view = document.querySelector('#view'); const form = document.querySelector('#editor');
function render() { document.querySelector('#summary').textContent = profile.name + ' · ' + profile.birthday; view.hidden = false; form.hidden = true; }
document.querySelector('#edit').onclick = () => { document.querySelector('#name').value = profile.name; document.querySelector('#birthday').value = profile.birthday; document.querySelector('#error').textContent = ''; view.hidden = true; form.hidden = false; document.querySelector('#name').focus(); };
document.querySelector('#cancel').onclick = render;
form.addEventListener('submit', event => { event.preventDefault(); const name = document.querySelector('#name').value.trim(); if (!name) { document.querySelector('#error').textContent = '昵称不能全是空白'; return; } profile = { name, birthday: document.querySelector('#birthday').value }; render(); document.querySelector('#edit').focus(); });
render();`,
  ['编辑时使用当前数据', '取消不提交修改', '确认后显示新资料'],
  '增加成员数组，按稳定id编辑或删除。',
  '示例不收集真实个人资料，数据仅保存在当前预览内。',
);
interaction(
  'channel-indicator',
  '横向频道栏：滚动与下划线定位',
  '移动视频页的频道栏可以拆成横向溢出容器、按钮状态与动态指示线。坐标取按钮与轨道的矩形差，尺寸变化后重新计算。',
  `<div class="channel-scroll"><div id="channels"><button aria-current="page">首页</button><button>动画</button><button>音乐</button><button>科技</button><button>生活</button><button>知识</button><span id="indicator" aria-hidden="true"></span></div></div><p id="selected-channel" role="status">当前：首页</p>`,
  `.channel-scroll { overflow-x: auto; }
#channels { position: relative; display: flex; width: max-content; gap: 8px; padding-bottom: 8px; }
#channels button { flex-shrink: 0; min-width: 75px; background: transparent; }
#channels [aria-current] { color: #276343; font-weight: 700; }
#indicator { position: absolute; bottom: 0; height: 3px; background: #4c8c61; transition: left .2s, width .2s; }
@media (prefers-reduced-motion: reduce) { #indicator { transition: none; } }`,
  `const track = document.querySelector('#channels'); const line = document.querySelector('#indicator'); let active = track.querySelector('button');
function position() { const rect = active.getBoundingClientRect(); const parent = track.getBoundingClientRect(); line.style.left = rect.left - parent.left + 'px'; line.style.width = rect.width + 'px'; }
track.addEventListener('click', event => { const button = event.target.closest('button'); if (!button) return; active = button; track.querySelectorAll('button').forEach(item => item === active ? item.setAttribute('aria-current','page') : item.removeAttribute('aria-current')); position(); active.scrollIntoView({ block: 'nearest', inline: 'nearest' }); document.querySelector('#selected-channel').textContent = '当前：' + active.textContent; });
new ResizeObserver(position).observe(track); position();`,
  ['轨道可横向滚动', '指示线跟随实际按钮宽度', '键盘按钮也可选择'],
  '加入动态频道并重新计算宽度。',
  'offsetLeft的参照是offsetParent；不要与视口坐标混用。',
  'Web/API/Element/getBoundingClientRect',
);
interaction(
  'favorite-state',
  '收藏切换：布尔状态与可访问反馈',
  '活动卡片和个人收藏页面可共享一个布尔状态。按钮aria-pressed和可见文字同步更新，纯前端练习不需要登录。',
  `<article><h3>周末布局练习</h3><p>把活动卡片拆成封面、状态标签、收藏按钮和详情。</p><button id="favorite" aria-pressed="false">☆ 收藏</button><p id="feedback" role="status">尚未收藏</p></article>`,
  '',
  `let saved = false; const button = document.querySelector('#favorite');
button.onclick = () => { saved = !saved; button.setAttribute('aria-pressed', String(saved)); button.textContent = saved ? '★ 已收藏' : '☆ 收藏'; document.querySelector('#feedback').textContent = saved ? '已加入当前预览的收藏' : '已取消收藏'; };`,
  ['一次点击收藏', '再次点击取消', '状态同时用文字、形状和aria表达'],
  '增加收藏数组，并渲染空状态。',
  '网络持久化场景还需失败回退，不能只在UI显示成功。',
);
interaction(
  'category-filter',
  '分类筛选：稳定数据、排他状态与组合条件',
  '英雄列表和商品列表的分类筛选由数据数组、当前分类与渲染函数组成。只更新状态，不给const数组重新赋值。',
  `<div id="categories"><button data-type="all" aria-pressed="true">全部</button><button data-type="layout" aria-pressed="false">布局</button><button data-type="interaction" aria-pressed="false">交互</button></div><ul id="results"></ul><p id="count" role="status"></p>`,
  '',
  `const records = [{ name: '课程卡片', type: 'layout' }, { name: '商品筛选', type: 'interaction' }, { name: '多列页脚', type: 'layout' }]; let current = 'all';
function render() { const selected = records.filter(item => current === 'all' || item.type === current); const list = document.querySelector('#results'); list.replaceChildren(); selected.forEach(item => { const li = document.createElement('li'); li.textContent = item.name; list.append(li); }); document.querySelector('#count').textContent = selected.length + '个结果'; }
document.querySelector('#categories').addEventListener('click', event => { const button = event.target.closest('button'); if (!button) return; current = button.dataset.type; document.querySelectorAll('#categories button').forEach(item => item.setAttribute('aria-pressed', String(item === button))); render(); });
render();`,
  ['初始全部3项', '布局分类2项', '按钮排他选中且原始数据保持'],
  '加入文本搜索，以AND组合分类与关键词。',
  '原课程的某些筛选例子试图重赋const变量；应新建结果数组并保留源数据。',
);
