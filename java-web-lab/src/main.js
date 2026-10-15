import './styles.css';
import 'highlight.js/styles/atom-one-dark.css';
import hljs from 'highlight.js/lib/core';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import sql from 'highlight.js/lib/languages/sql';
import yaml from 'highlight.js/lib/languages/yaml';
import nginx from 'highlight.js/lib/languages/nginx';
import plaintext from 'highlight.js/lib/languages/plaintext';
import xml from 'highlight.js/lib/languages/xml';
import {createIcons,Orbit,CircleCheck,ChevronRight,BookOpen,ArrowUpRight,Library,NotebookPen,Minimize,Presentation,Globe2,GitBranch,Code2,Network,Play,SkipForward,RotateCcw,FlaskConical,Lightbulb,ArrowRight,LocateFixed,MousePointer2,Copy,FileCode2,Info,ScanLine,Pause,Activity,ArrowDown,Swords,Send,GitFork,PenLine,Search,Workflow,PackagePlus,Layers3,PackageCheck,Route,Server,X} from 'lucide';
import {stages,sources,cities,routes,networkSteps} from './content.js';
import {createGlobe} from './globe.js';
import {renderDiagram,traceDiagram} from './diagrams.js';
import {networkTiming,simulatePool,inventoryRace,distribute,queueSeries,Breaker} from './models.js';
import {mountAtlas,unmountAtlas} from './atlas.js';
import './day-theme.css';

const $=(s)=>document.querySelector(s);
const esc=(s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icons={Orbit,CircleCheck,ChevronRight,BookOpen,ArrowUpRight,Library,NotebookPen,Minimize,Presentation,Globe2,GitBranch,Code2,Network,Play,SkipForward,RotateCcw,FlaskConical,Lightbulb,ArrowRight,LocateFixed,MousePointer2,Copy,FileCode2,Info,ScanLine,Pause,Activity,ArrowDown,Swords,Send,GitFork,PenLine,Search,Workflow,PackagePlus,Layers3,PackageCheck,Route,Server,X};
for(const [name,language] of Object.entries({java,javascript,sql,yaml,nginx,plaintext,xml}))hljs.registerLanguage(name,language);
const icon=(name,cls='')=>`<i data-lucide="${name.replace(/([a-z0-9])([A-Z])/g,'$1-$2').toLowerCase()}" class="${cls}"></i>`;
const format=(v)=>Math.round(v).toLocaleString('zh-CN');
const state={stage:0,view:'globe',node:0,code:0,route:0,reused:false,playing:false,phase:0,progress:0,speed:1,presentation:false,notes:false,raceSafe:false,cache:false,sessionShared:false,pool:{rate:25,threads:8,connections:3,sqlMs:200},cluster:{instances:3,strategy:'rr',disabled:-1,slow:1},queue:{production:20,consumption:8},paymentFail:false};
let globe,playTimer,labTimer,toastTimer,replicaTimer,probeTimer;
let mode='atlas';
let probing=false;
const breaker=new Breaker();
let breakerRefresh;
const localStorageKey='request-atlas-learning-v1';
let mastered=[];
try{mastered=JSON.parse(localStorage.getItem(localStorageKey)||'[]');if(!Array.isArray(mastered))mastered=[];}catch{}

function iconsRefresh(){createIcons({icons,attrs:{'stroke-width':1.6}});}
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2500);}
function slider(name,label,min,max,value,unit='',step=1){return `<label class="slider-control"><span>${label}<output data-output="${name}">${value}${unit}</output></span><input type="range" data-param="${name}" min="${min}" max="${max}" step="${step}" value="${value}" aria-label="${label}"/><small>${min}${unit}<span>${max}${unit}</span></small></label>`;}

function render(){
  stop();clearInterval(labTimer);clearTimeout(replicaTimer);clearTimeout(probeTimer);probing=false;clearInterval(breakerRefresh);globe?.dispose();globe=null;
  if(mode==='atlas'){mountAtlas($('#app'),i=>{mode='journey';unmountAtlas();setStage(i);});return;}
  const s=stages[state.stage];
  $('#app').innerHTML=`
  <div class="app-shell ${state.presentation?'presenting':''}">
    <aside class="sidebar">
      <a href="#" class="brand" data-action="home"><span class="brand-mark">${icon('Orbit')}</span><span>Request<span class="brand-secondary">Atlas</span></span></a>
      <div class="side-caption">JAVA WEB · 交互式架构实验室</div>
      <div class="chapter-caption">探索六个阶段 <span>01 — 06</span></div>
      <nav class="stage-nav" aria-label="六个演进阶段">${stages.map((st,i)=>`<button data-stage="${i}" class="stage-link ${i===state.stage?'active':''}" aria-current="${i===state.stage?'step':'false'}"><span class="stage-number">0${i+1}</span><span>${st.name}<small>${['从点击到响应','线程 · 连接 · 等待','事务 · 缓存 · 保护','分流 · 故障 · 状态','复制 · 队列 · 一致性','边界 · 容错 · 观测'][i]}</small></span>${mastered.includes(i)?icon('CircleCheck','learned'):icon('ChevronRight','stage-arrow')}</button>`).join('')}</nav>
      <div class="side-journey"><span class="small-label">YOUR LEARNING JOURNEY</span><div class="journey-dots">${stages.map((_,i)=>`<span class="${mastered.includes(i)?'complete':i===state.stage?'current':''}"></span>`).join('')}</div><p><b>${mastered.length} / 6</b> 阶段已掌握</p></div>
      <div class="sidebar-bottom"><button class="atlas-return" data-action="atlas">◎ 全栈学习控制台 →</button><div class="side-version"><span class="status-dot"></span> 本地模拟 · 无真实流量 <b>v2.0</b></div></div>
    </aside>
    <div class="main-shell">
      <header class="topbar"><div class="breadcrumb">架构探索 ${icon('ChevronRight')}<span>0${state.stage+1} ${s.name}</span></div><div class="top-actions"><button class="plain-button" data-action="atlas">${icon('Layers3')}<span>全栈地图 / 案例题库</span></button><button class="plain-button" data-action="sources" aria-label="参考资料">${icon('Library')}<span>参考资料</span></button><button class="plain-button" data-action="notes" aria-label="讲者笔记">${icon('NotebookPen')}<span>讲者笔记</span></button><button class="presentation-button" data-action="presentation">${icon(state.presentation?'Minimize':'Presentation')}<span>${state.presentation?'退出演讲':'演讲模式'}</span></button></div></header>
      <main>
        <div class="page-heading"><div><div class="eyebrow"><span class="status-dot"></span> EXPLORE THE INVISIBLE <span class="eyebrow-separator">/</span> STAGE 0${state.stage+1}</div><h1>${state.stage===0?'从一次 HTTP 请求，到整个系统。':s.name+'：'+s.question}</h1><p>${state.stage===0?'六个阶段，一条请求。把看不见的架构，变成可以探索的世界。':s.intro}</p></div><div class="page-index">0${state.stage+1}<span>/ 06</span></div></div>
        <section class="workspace">
          <div class="workspace-bar"><div class="view-tabs" role="tablist" aria-label="观察视角">${(state.stage===0?[['globe','Globe2','地球链路'],['diagram','GitBranch','请求解剖'],['code','Code2','代码实现']]:[['diagram','Network','架构视图'],['code','Code2','代码实现']]).map(([v,i,l])=>`<button role="tab" aria-selected="${state.view===v}" class="view-tab ${state.view===v?'active':''}" data-view="${v}">${icon(i)}${l}</button>`).join('')}</div><span class="workspace-label"><span class="status-dot"></span> ${state.view==='code'?'CODE EXPLORER':'INTERACTIVE VIEW'}</span></div>
          <div class="workspace-body"><div class="visual-panel ${state.view==='globe'?'globe-panel':''}">${visualMarkup(s)}</div><aside class="inspector">${inspectorMarkup(s)}</aside></div>
          <div class="transport"><button class="play-button" data-action="play" aria-label="播放链路">${icon('Play')}</button><button class="step-button" data-action="step" title="下一步（→）" aria-label="下一步">${icon('SkipForward')}</button><div class="transport-caption"><b id="transport-title">${state.stage===0?'追踪一次请求':'逐步讲解架构'}</b><span id="transport-subtitle">${state.stage===0?'GET /api/articles/1001':'点击节点，查看这一层的职责'}</span></div><input id="scrubber" type="range" min="0" max="100" value="0" aria-label="链路进度"/><select id="speed" aria-label="播放速度"><option value=".5">0.5×</option><option value="1" selected>1×</option><option value="2">2×</option></select><button class="step-button" data-action="reset" aria-label="重置演示" title="重置">${icon('RotateCcw')}</button></div>
        </section>
        <div class="stage-timeline" aria-label="链路阶段">${(state.stage===0?networkSteps:s.nodes).map((n,i)=>`<button data-phase="${i}" class="timeline-item ${i===0?'active':''}"><span class="timeline-index">${String(i+1).padStart(2,'0')}</span><span>${n.name||n.title}<small>${state.stage===0?timingLabel(i):n.sub}</small></span><span class="timeline-dot"></span></button>`).join('')}</div>
        <section class="experiment-section"><div class="section-heading"><div><span class="small-label">HANDS-ON LAB / 0${state.stage+1}</span><h2>${['改变路径，看看请求的成本','给系统加压，找到真正的瓶颈','让竞态发生，再把它修好','把流量分开，把状态连起来','缓冲任务，不是消灭任务','注入故障，观察系统怎样应对'][state.stage]}</h2></div><span class="model-badge">${icon('FlaskConical')} 前端教学模拟</span></div>${labMarkup()}</section>
        <section class="understanding-section"><div class="section-heading"><div><span class="small-label">CONNECT THE DOTS</span><h2>从概念，到真实开发</h2></div><span class="quiet">${s.takeaway}</span></div><div class="lesson-grid">${s.lessons.map(([label,title,body],i)=>`<article class="lesson"><span class="lesson-label"><b>0${i+1}</b>${label}</span><h3>${title}</h3><p>${body}</p></article>`).join('')}</div></section>
        <section class="quiz-section"><div class="quiz-label">${icon('Lightbulb')} 理解检查</div><h3>${s.quiz.q}</h3><div class="quiz-options">${s.quiz.options.map((o,i)=>`<button data-answer="${i}"><span>${String.fromCharCode(65+i)}</span>${o}</button>`).join('')}</div><p id="quiz-feedback" aria-live="polite"></p></section>
        <div class="next-stage"><div><span class="small-label">${state.stage===5?'KEEP IT SIMPLE':'THE NEXT QUESTION'}</span><h3>${state.stage===5?'观察请求，找到瓶颈，用证据做取舍。':stages[state.stage+1].question}</h3></div><button class="primary-button" data-action="next">${state.stage===5?'回到请求起点':'探索下一阶段'} ${icon('ArrowRight')}</button></div>
        <footer>Request Atlas <span>基线：Servlet Spring MVC · 同步阻塞 · 本地模拟</span><button data-action="sources">来源与模型说明 ${icon('ArrowUpRight')}</button></footer>
      </main>
    </div>
  </div><div id="toast" role="status"></div><dialog id="modal"></dialog>${state.notes?notesMarkup():''}`;
  $('#speed').value=state.speed;
  iconsRefresh();
  if(state.view==='globe')mountGlobe();
  if(state.view==='code')highlight();
  if(state.stage===5)breakerRefresh=setInterval(updateBreakerStatus,250);
  if(state.presentation)document.body.classList.add('presentation-mode');else document.body.classList.remove('presentation-mode');
}

function timingLabel(i){const t=networkTiming(routes[state.route].rtt,state.reused)[i];return t?`${t} ms`:'复用 · 跳过';}
function visualMarkup(s){
  if(state.view==='globe')return `<div class="globe-intro"><div class="small-label">THE FIRST REQUEST</div><h2>一次请求的<br/><em>世界之旅。</em></h2><p>每一次点击，都有一段看不见的旅程。</p></div><div id="globe" aria-label="交互式三维地球：拖动旋转，滚轮缩放"></div><div class="globe-route-label"><span class="status-dot"></span> <span id="route-label">${routes[state.route].name}</span><span class="route-protocol">HTTPS / TLS 1.3</span></div><div class="globe-tools"><button data-action="globe-reset" aria-label="恢复地球视角" title="恢复视角">${icon('LocateFixed')}</button></div><div class="globe-hint">${icon('MousePointer2')} 拖动旋转 <span>·</span> 滚轮缩放 <span>·</span> 点击城市</div><div class="globe-scale"><span>真实地理坐标</span><small>路线 / RTT 为教学假设</small></div>`;
  if(state.view==='diagram')return `<div class="diagram-title"><span class="small-label">${s.en}</span><h2>${s.headline.replace('\n','<br/>')}</h2><p>${s.question}</p></div><div id="diagram">${renderDiagram(s,state.stage,state.node)}</div><div class="diagram-caption">${icon('MousePointer2')} 点击节点查看职责与真实开发中的边界 <span class="simulation-label">逻辑拓扑 · 非网络物理路由</span></div>`;
  return `<div class="code-header"><div class="code-tabs">${s.code.map((c,i)=>`<button data-code="${i}" class="${state.code===i?'active':''}">${c.name}</button>`).join('')}</div><button data-action="copy" class="copy-button">${icon('Copy')} 复制</button></div><div class="code-file">${icon('FileCode2')}<span id="code-file">${s.code[state.code].file}</span><span>教学片段</span></div><pre class="code-block"><code id="code-text" class="language-${s.code[state.code].lang}">${esc(s.code[state.code].text)}</code></pre><div class="code-note" id="code-note">${icon('Info')}${s.code[state.code].note}</div>`;
}
function inspectorMarkup(s){
  if(state.stage===0&&state.view==='globe')return `<div class="inspector-heading"><span class="small-label">REQUEST INSPECTOR</span>${icon('ScanLine')}</div><div class="request-badge"><b>GET</b><code>/api/articles/1001</code></div><div class="request-meta"><span>trace_id</span><code>demo-7f3a1001</code><span>目标资源</span><b>文章 #1001</b></div><div class="inspector-rule"></div><div id="step-detail"><span class="detail-step">01 / 06 <span>网络准备</span></span><h3>${networkSteps[0].name}</h3><p>${networkSteps[0].detail}</p></div><div class="inspector-stats"><div><span>示例网络 RTT</span><b id="rtt-stat">${routes[state.route].rtt}<small> ms</small></b></div><div><span>模型总耗时</span><b id="total-stat">${networkTiming(routes[state.route].rtt,state.reused).reduce((a,b)=>a+b,0)}<small> ms</small></b></div></div><div class="packet-box"><span class="small-label">ON THE WIRE</span><div id="wire-detail"><span class="packet-chip">DNS query</span><span class="packet-arrow">→</span><span class="packet-chip muted-chip">Resolver</span></div><p>example.com → 203.0.113.10<br/><small>示例域名 / 文档保留 IP，不是实时解析</small></p></div><div class="inspector-tip">${icon('Info')} 协议模型：TCP + TLS 1.3；可切换连接复用。未计重传、0-RTT 或 TLS 恢复。</div>`;
  const n=s.nodes[state.node];
  return `<div class="inspector-heading"><span class="small-label">NODE INSPECTOR</span>${icon('ScanLine')}</div><div class="node-type">阶段 0${state.stage+1}<span>${n.tag||'逻辑组件'}</span></div><div id="node-detail"><span class="detail-step">${String(state.node+1).padStart(2,'0')} / ${String(s.nodes.length).padStart(2,'0')}</span><h3>${n.title}</h3><p class="detail-sub">${n.sub}</p><p>${n.detail}</p></div><div class="inspector-rule"></div><div class="responsibility"><span class="small-label">KEY QUESTION</span><p>${s.question}</p></div><div class="inspector-tip">${icon('Lightbulb')}${s.takeaway}</div><div class="stage-sources"><span class="small-label">深入阅读</span>${s.refs.slice(0,3).map(i=>`<a href="${sources[i][1]}" target="_blank" rel="noopener noreferrer">${sources[i][0]} ${icon('ArrowUpRight')}</a>`).join('')}</div>`;
}

function mountGlobe(){
  try{globe=createGlobe($('#globe'),{route:state.route,onSelect:showCity});}
  catch(e){$('#globe').innerHTML=`<div class="webgl-fallback"><b>三维视图暂不可用</b><p>浏览器未提供 WebGL。请求解剖、代码和全部实验仍可使用。</p><button class="primary-button" data-view="diagram">查看请求解剖 ${icon('ArrowRight')}</button></div>`;iconsRefresh();console.warn('WebGL unavailable:',e.message);}
}
function showCity(id){const c=cities[id];$('#step-detail').innerHTML=`<span class="detail-step">GEOGRAPHIC NODE <span>真实坐标</span></span><h3>${c.name} <small>${c.en}</small></h3><p>${c.role}</p><p class="coordinate">${c.lat.toFixed(4)}° N / ${Math.abs(c.lon).toFixed(4)}° ${c.lon<0?'W':'E'}</p><p>这个地点用于解释网络距离与跨区域通信。动画弧线不代表真实海底光缆、BGP 或 IP 路由。</p>`;}
function selectNode(i){
  const s=stages[state.stage];state.node=i;
  $('#node-detail').innerHTML=`<span class="detail-step">${String(i+1).padStart(2,'0')} / ${String(s.nodes.length).padStart(2,'0')}</span><h3>${s.nodes[i].title}</h3><p class="detail-sub">${s.nodes[i].sub}</p><p>${s.nodes[i].detail}</p>`;
  document.querySelectorAll('[data-node]').forEach(n=>n.classList.toggle('selected',Number(n.dataset.node)===i));
}
function selectPhase(i,manual=true){
  const s=stages[state.stage];state.phase=i;
  if(manual){state.progress=i/(state.stage===0?5:s.nodes.length-1)*100;$('#scrubber').value=state.progress;}
  document.querySelectorAll('[data-phase]').forEach(el=>{el.classList.toggle('active',Number(el.dataset.phase)===i);el.classList.toggle('passed',Number(el.dataset.phase)<i);});
  if(state.stage===0){
    const step=networkSteps[i];$('#transport-title').textContent=step.name;$('#transport-subtitle').textContent=`步骤 ${i+1} / 6 · ${timingLabel(i)}`;
    if(state.view==='globe'){
      const skipped=state.reused&&i<3;
      $('#step-detail').innerHTML=`<span class="detail-step">0${i+1} / 06 <span>${i<3?'连接准备':i===4?'服务端执行':'数据传输'}</span></span><h3>${step.name}${skipped?' <small>已跳过</small>':''}</h3><p>${skipped?'复用已建立的连接与解析结果，此处不重新握手。':step.detail}</p>`;
      $('#wire-detail').innerHTML=skipped?`<span class="packet-chip">Existing TLS channel</span><span>无需新建</span>`:[`<span class="packet-chip">DNS query</span> → Resolver`,`<span class="packet-chip">SYN</span> → <span class="packet-chip">SYN-ACK</span> → ACK`,`<span class="packet-chip">ClientHello</span> ⇄ ServerHello`,`<span class="packet-chip">Encrypted HTTP</span> → NGINX`,`<span class="packet-chip">Controller</span> → SQL`,`<span class="packet-chip">200 OK</span> ← JSON`][i];globe?.setPhase(i);
    }else if(state.view==='diagram') selectNode([1,1,1,2,5,8][i]);
  }else{
    $('#transport-title').textContent=s.nodes[i].title;$('#transport-subtitle').textContent=s.nodes[i].sub;if($('#node-detail'))selectNode(i);
  }
}
function stop(){clearInterval(playTimer);state.playing=false;globe?.setRunning(false);const b=$('[data-action="play"]');if(b){b.innerHTML=icon('Play');b.setAttribute('aria-label','播放链路');iconsRefresh();}}
function play(){
  if(state.playing){stop();return;}
  if(state.progress>=100)state.progress=0;
  state.playing=true;globe?.setRunning(true);globe?.setSpeed(state.speed);
  $('[data-action="play"]').innerHTML=icon('Pause');$('[data-action="play"]').setAttribute('aria-label','暂停链路');iconsRefresh();
  playTimer=setInterval(()=>{
    state.progress=Math.min(100,state.progress+.28*state.speed);$('#scrubber').value=state.progress;
    const max=state.stage===0?5:stages[state.stage].nodes.length-1;
    let phase=Math.min(max,Math.floor(state.progress/100*(max+1)));
    if(state.stage===0&&state.reused&&phase<3){state.progress=50;phase=3;}
    if(phase!==state.phase)selectPhase(phase,false);
    if(state.progress>=100){selectPhase(max,false);stop();toast('链路演示完成 · 可切换视角继续探索');}
  },30);
}

function labMarkup(){
  switch(state.stage){
    case 0:return `<div class="network-lab"><div class="lab-controls"><label class="field-label">选择示例路径<select id="route-select">${routes.map((r,i)=>`<option value="${i}" ${i===state.route?'selected':''}>${r.name}</option>`).join('')}</select></label><label class="switch-row"><input type="checkbox" id="reuse" ${state.reused?'checked':''}/><span class="switch-track"></span><span>复用已建立的连接<small>跳过本次 DNS / TCP / TLS 建连成本</small></span></label><button class="primary-button" data-action="play">${icon('Play')} 发出请求</button></div><div class="network-cost"><div class="cost-header"><span>请求耗时构成</span><span>简化估算 · 非真实测速</span></div><div id="cost-bars">${costBars()}</div><p id="network-formula">${networkFormula()}</p></div></div>`;
    case 1:return `<div class="lab-grid"><div class="lab-controls">${slider('rate','请求到达率',5,80,state.pool.rate,' /s')}${slider('threads','工作线程',2,24,state.pool.threads,' 个')}${slider('connections','数据库连接',1,12,state.pool.connections,' 个')}${slider('sqlMs','SQL 执行时间',50,500,state.pool.sqlMs,' ms',50)}<button class="primary-button" data-action="pool">${icon('Play')} 运行 10 秒实验</button></div><div class="lab-results"><div class="result-title"><span>${icon('Activity')} 资源与排队</span><span id="pool-clock">t = 0.0 s</span></div><div class="pool-map"><div><span>工作线程</span><div id="thread-slots" class="resource-slots">${slots(state.pool.threads,0)}</div></div><div class="pool-link">${icon('ArrowDown')} 借用连接</div><div><span>数据库连接</span><div id="connection-slots" class="resource-slots db-slots">${slots(state.pool.connections,0)}</div></div></div><div class="pool-legend"><span><i class="legend-dot green"></i>执行 SQL</span><span><i class="legend-dot amber"></i>等待连接</span><span><i class="legend-dot grey"></i>空闲</span></div><div class="stat-row"><div><span>完成</span><b id="pool-done">0</b></div><div><span>排队 / 等待</span><b id="pool-wait">0</b></div><div><span>超时</span><b id="pool-failed">0</b></div><div><span>完成样本 P95</span><b id="pool-p95">—</b></div></div><div id="pool-chart" class="mini-chart">${emptyChart()}</div><p id="pool-conclusion" class="model-note">FIFO 等待模型 · 固定 SQL 耗时 + 20ms 应用时间 · 等待超过 3s 超时 · 忽略 CPU、锁与 I/O 争用。</p></div></div>`;
    case 2:return `<div class="lab-grid race-grid"><div class="lab-controls"><span class="field-label">竞争最后一件商品</span><div class="segmented"><button data-race="false" class="${!state.raceSafe?'active':''}">先查后改</button><button data-race="true" class="${state.raceSafe?'active':''}">条件更新</button></div><p class="control-explanation">用户 A 和 B 并发下单，初始库存为 1。观察受影响行数如何把约束落实到数据库。</p><button class="primary-button" data-action="race">${icon('Play')} 重放竞争过程</button><div class="cache-experiment"><h4>热点读取 · 缓存实验</h4><label class="switch-row"><input id="cache-toggle" type="checkbox" ${state.cache?'checked':''}/><span class="switch-track"></span><span>使用 Redis 旁路缓存</span></label><button class="secondary-button" data-action="cache">读取同一文章 10 次 ${icon('ArrowRight')}</button><p id="cache-result">示例：顺序请求、空缓存开始、无过期或并发回填。</p></div></div><div class="lab-results"><div class="result-title"><span>${icon('Swords')} 并发执行时序</span><span>初始 stock = 1</span></div><div class="race-lanes"><span>用户 A</span><span>MySQL</span><span>用户 B</span></div><div id="race-events" class="race-events"><div class="lab-placeholder">两个执行路径，即将竞争同一个值。<small>点击“重放竞争过程”开始</small></div></div><div class="stat-row race-stats"><div><span>库存</span><b id="race-stock">1</b></div><div><span>成功订单</span><b id="race-orders">0</b></div><div><span>业务不变量</span><b id="race-verdict">待验证</b></div></div></div></div>`;
    case 3:return `<div class="lab-grid"><div class="lab-controls"><label class="field-label">应用实例数<select id="instance-count">${[1,2,3,4,5].map(n=>`<option ${n===state.cluster.instances?'selected':''}>${n}</option>`).join('')}</select></label><label class="field-label">分流策略<select id="lb-strategy"><option value="rr" ${state.cluster.strategy==='rr'?'selected':''}>轮询 Round Robin</option><option value="least" ${state.cluster.strategy==='least'?'selected':''}>最少负载（请求模型）</option></select></label><label class="field-label">模拟摘除故障实例<select id="disabled-node"><option value="-1">全部可用</option>${Array.from({length:state.cluster.instances},(_,i)=>`<option value="${i}" ${i===state.cluster.disabled?'selected':''}>实例 ${String.fromCharCode(65+i)} 下线</option>`).join('')}</select></label><button class="primary-button" data-action="cluster">${icon('Send')} 发送 12 个请求</button><p class="model-note">请求每 100ms 到达，A/C 耗时 180ms，B 耗时 650ms。最少负载依据剩余工作量，非真实 NGINX least_conn。</p></div><div class="lab-results"><div class="result-title"><span>${icon('Network')} 同一应用的多个实例</span><span id="cluster-budget">连接上限预算：${state.cluster.instances*20}</span></div><div class="cluster-origin">浏览器 ${icon('ArrowRight')} NGINX ${icon('GitFork')}</div><div id="cluster-nodes" class="cluster-nodes">${clusterNodes()}</div><p id="cluster-status" class="model-note">实例 A 与 B 运行相同的完整应用；所有实例共享下游数据库。</p><div class="session-box"><div><h4>跨实例 Session</h4><label class="switch-row"><input id="session-toggle" type="checkbox" ${state.sessionShared?'checked':''}/><span class="switch-track"></span><span>共享 Redis Session</span></label></div><button class="secondary-button" data-action="session">A 登录 → B 访问 ${icon('ArrowRight')}</button><p id="session-result">本地状态不会自动出现在另一台机器。</p></div></div></div>`;
    case 4:return `<div class="lab-grid"><div class="lab-controls">${slider('production','生产速度',2,50,state.queue.production,' 条/s')}${slider('consumption','消费速度',2,50,state.queue.consumption,' 条/s')}<button class="primary-button" data-action="queue">${icon('Play')} 模拟 10 秒流量</button><p class="model-note">固定速率、单一队列、初始为空。显示教学时间，播放约 5 秒。积压 = max(0, 生产 − 消费) × 时间。</p><div class="replica-controls"><h4>读副本的一致性</h4><button class="secondary-button" data-action="replica-write">写主库：新标题 ${icon('PenLine')}</button><button class="secondary-button" data-action="replica-read">立即读副本 ${icon('Search')}</button><p>模拟复制延迟：3 秒。</p></div></div><div class="lab-results"><div class="result-title"><span>${icon('Workflow')} 生产 / 缓冲 / 消费</span><span id="queue-clock">t = 0 s</span></div><div class="mq-line"><div>${icon('PackagePlus')}<span>生产者</span><b id="mq-produced">0</b></div>${icon('ArrowRight')}<div class="mq-buffer">${icon('Layers3')}<span>队列积压</span><b id="mq-backlog">0</b></div>${icon('ArrowRight')}<div>${icon('PackageCheck')}<span>消费者</span><b id="mq-consumed">0</b></div></div><div id="mq-chart" class="mini-chart">${emptyChart()}</div><p id="mq-conclusion" class="model-note">异步让请求尽早返回，但业务任务仍然需要执行。</p><div class="replica-display"><span>主库 <b id="primary-title">旧标题</b></span>${icon('ArrowRight')}<span>副本 <b id="replica-title">旧标题</b></span><p id="replica-status" aria-live="polite">两边数据暂时一致。</p></div></div></div>`;
    case 5:return `<div class="lab-grid"><div class="lab-controls"><label class="switch-row"><input type="checkbox" id="payment-fail" ${state.paymentFail?'checked':''}/><span class="switch-track"></span><span>注入支付服务超时<small>模拟截止时间 1000ms</small></span></label><button class="primary-button" data-action="trace">${icon('Route')} 发起订单请求</button><button class="secondary-button" data-action="breaker-reset">${icon('RotateCcw')} 重置熔断器</button><div class="breaker-state"><span class="small-label">CIRCUIT BREAKER</span><b id="breaker-state">${breaker.state}</b><p id="breaker-message">演示规则：连续 3 次失败打开，8 秒后允许半开探测。</p></div><p class="model-note">与代码窗口的生产配置示例分开。这里采用最小状态机，帮助理解关闭 / 打开 / 半开。</p></div><div class="lab-results"><div class="result-title"><span>${icon('Activity')} 分布式追踪 · 时间瀑布</span><span>trace_id: demo-order</span></div><div id="trace-diagram" class="trace-diagram">${traceDiagram(false)}</div><div class="stat-row"><div><span>结果</span><b id="trace-status">待请求</b></div><div><span>模型耗时</span><b id="trace-duration">—</b></div><div><span>远程调用结果</span><b id="trace-remote">—</b></div></div><p class="model-note">Span 包含父子关系，父调用已覆盖子调用时间，不能重复相加。这里是串行路径的教学 Trace，不是自动采集的数据。</p></div></div>`;
  }
}
function costBars(){const t=networkTiming(routes[state.route].rtt,state.reused),sum=t.reduce((a,b)=>a+b,0);return `<div class="cost-bar">${t.map((v,i)=>v?`<span style="width:${v/sum*100}%;background:${['#7893a0','#7bc7e7','#e1bb77','#a49bd7','#69a2bb','#a49bd7'][i]}" title="${networkSteps[i].name}：${v}ms"></span>`:'').join('')}</div><div class="cost-legend">${t.map((v,i)=>`<span class="${!v?'skipped':''}"><i style="background:${['#7893a0','#7bc7e7','#e1bb77','#a49bd7','#69a2bb','#a49bd7'][i]}"></i>${networkSteps[i].short}<b>${v}ms</b></span>`).join('')}</div>`;}
function networkFormula(){return state.reused?`复用连接：1 RTT + Java 42ms = ${routes[state.route].rtt+42}ms。示意不包含资源竞争和响应体传输。`:`新建连接：DNS 20ms + TCP 1 RTT + TLS 1 RTT + 请求往返 1 RTT + Java 42ms = ${routes[state.route].rtt*3+62}ms。`;}
function slots(count,active,waiting=0){return Array.from({length:count},(_,i)=>`<span class="resource-slot ${i<active?'busy':i<active+waiting?'waiting':''}" title="${i<active?'执行中':i<active+waiting?'等待连接':'空闲'}">${i+1}</span>`).join('');}
function emptyChart(){return `<div class="chart-placeholder">运行实验后显示变化曲线<span>模型结果将从相同输入确定性计算</span></div>`;}
function clusterNodes(received=[]){return Array.from({length:state.cluster.instances},(_,i)=>`<div class="instance ${i===state.cluster.disabled?'offline':''}" data-instance="${i}"><div>${icon('Server')}<span class="status-dot"></span></div><b>INSTANCE ${String.fromCharCode(65+i)}</b><span>${i===state.cluster.disabled?'已摘除':i===1?'慢实例 · 650ms':'180ms / request'}</span><strong>${received[i]||0}<small>请求</small></strong><div class="instance-bar"><span style="width:${(received[i]||0)/12*100}%"></span></div></div>`).join('');}
function chart(data,keys,colors){
  const w=640,h=110,pad=12,max=Math.max(1,...data.flatMap(x=>keys.map(k=>x[k])));
  return `<svg viewBox="0 0 ${w} ${h}" aria-label="实验变化曲线" role="img"><path d="M ${pad} ${h-pad} H ${w-pad}" stroke="#333941"/>${keys.map((key,j)=>`<path d="${data.map((d,i)=>`${i?'L':'M'} ${pad+i/Math.max(1,data.length-1)*(w-pad*2)} ${h-pad-d[key]/max*(h-pad*2)}`).join(' ')}" fill="none" stroke="${colors[j]}" stroke-width="2.5"/>`).join('')}<text x="12" y="12" fill="#898f97" font-size="10">${format(max)}</text></svg><div class="chart-legend">${keys.map((k,i)=>`<span><i style="background:${colors[i]}"></i>${{completed:'已完成',inflight:'在途 / 积压',failed:'超时',produced:'生产累计',consumed:'消费累计',backlog:'积压'}[k]}</span>`).join('')}</div>`;
}
function runPool(){
  clearInterval(labTimer);const config={...state.pool},result=simulatePool(config);let index=0;
  document.querySelectorAll('[data-param]').forEach(el=>el.disabled=true);
  const button=$('[data-action="pool"]');button.disabled=true;button.innerHTML='运行中…';
  labTimer=setInterval(()=>{
    const snap=result.snapshots[index++];if(!snap){clearInterval(labTimer);button.disabled=false;document.querySelectorAll('[data-param]').forEach(el=>el.disabled=false);button.innerHTML=icon('Play')+' 重新运行实验';iconsRefresh();
      $('#pool-p95').textContent=format(result.p95)+'ms';$('#pool-conclusion').textContent=`10s：${result.completed} 完成，${result.failed} 超时，${result.outstanding} 尚未完成。完成吞吐约 ${result.rps.toFixed(1)} RPS，P95 仅统计完成样本。${state.pool.connections<state.pool.threads?'尝试减少 SQL 时间，或按数据库容量增加连接，比较结果。':'尝试增加线程或减少 SQL 时间，比较结果。'}`;return;}
    $('#pool-clock').textContent=`t = ${snap.time.toFixed(1)} s`;
    $('#thread-slots').innerHTML=slots(state.pool.threads,snap.active,snap.waitingConnection);$('#connection-slots').innerHTML=slots(state.pool.connections,snap.active);
    $('#pool-done').textContent=snap.completed;$('#pool-wait').textContent=snap.inflight-snap.active;$('#pool-failed').textContent=snap.failed;
    $('#pool-chart').innerHTML=chart(result.snapshots.slice(0,index),['completed','inflight','failed'],['#7bc7e7','#e1bb77','#e6887d']);
  },50);
}
function runRace(){
  clearInterval(labTimer);const result=inventoryRace(state.raceSafe);$('#race-events').innerHTML='';$('#race-stock').textContent='1';$('#race-orders').textContent='0';$('#race-verdict').textContent='验证中';let i=0;
  labTimer=setInterval(()=>{
    const e=result.events[i];if(!e){clearInterval(labTimer);$('#race-stock').textContent=result.stock;$('#race-orders').textContent=result.orders;$('#race-verdict').textContent=state.raceSafe?'保持正确':'发生超卖';$('#race-verdict').className=state.raceSafe?'positive':'negative';return;}
    $('#race-events').insertAdjacentHTML('beforeend',`<div class="race-event ${state.raceSafe?'safe':''}"><span>0${i+1}</span><b>用户 ${e[0]}</b><p>${e[1]}</p><small>${e[2]}</small></div>`);i++;
  },500);
}
function runCluster(){
  clearInterval(labTimer);const result=distribute(state.cluster),received=Array(state.cluster.instances).fill(0);let i=0;
  $('#cluster-nodes').innerHTML=clusterNodes();iconsRefresh();
  labTimer=setInterval(()=>{if(i>=result.assignments.length){clearInterval(labTimer);$('#cluster-status').textContent=`12 个请求已分发。${state.cluster.disabled>=0?'故障实例已摘除。':state.cluster.strategy==='rr'?'轮询不考虑实例处理速度。':'按剩余工作量分配，慢实例通常得到更少请求。'} 总连接预算示例 = ${state.cluster.instances} × 20 = ${state.cluster.instances*20}。`;return;}const n=result.assignments[i++];received[n]++;$('#cluster-nodes').innerHTML=clusterNodes(received);$(`[data-instance="${n}"]`)?.classList.add('receiving');iconsRefresh();},240);
}
function runQueue(){
  clearInterval(labTimer);const series=queueSeries(state.queue.production,state.queue.consumption),button=$('[data-action="queue"]');button.disabled=true;let i=0;
  document.querySelectorAll('[data-param]').forEach(el=>el.disabled=true);
  labTimer=setInterval(()=>{const d=series[i++];if(!d){clearInterval(labTimer);button.disabled=false;document.querySelectorAll('[data-param]').forEach(el=>el.disabled=false);$('#mq-conclusion').textContent=state.queue.production>state.queue.consumption?`每秒多 ${state.queue.production-state.queue.consumption} 条，10 秒后积压 ${series.at(-1).backlog} 条。继续保持此输入会持续积压，需要改变生产/消费速率。`:'该固定速率模型中消费能力不低于生产，队列可被及时消化；真实系统还需考虑突发和消费者故障。';return;}$('#queue-clock').textContent=`t = ${d.time} s`;$('#mq-produced').textContent=d.produced;$('#mq-consumed').textContent=d.consumed;$('#mq-backlog').textContent=d.backlog;$('#mq-chart').innerHTML=chart(series.slice(0,i),['produced','consumed','backlog'],['#829ead','#7bc7e7','#e1bb77']);},450);
}
function runTrace(){
  const failure=state.paymentFail;
  const complete=()=>{probing=false;const result=breaker.call(failure,Date.now()),fast=result.status==='快速拒绝';$('#trace-diagram').innerHTML=traceDiagram(failure,fast);$('#trace-status').textContent=result.status;$('#trace-duration').textContent=result.duration+'ms';$('#trace-remote').textContent=fast?'未调用':failure?'未知 · 需查询':'已确认';$('[data-action="trace"]').disabled=false;updateBreakerStatus();};
  if(breaker.state==='OPEN'&&Date.now()-breaker.openedAt>=8000){probing=true;$('[data-action="trace"]').disabled=true;$('#trace-status').textContent='半开探测中';updateBreakerStatus();probeTimer=setTimeout(complete,800);}else complete();
}
function updateBreakerStatus(){if(!$('#breaker-state'))return;if(probing){$('#breaker-state').textContent='HALF_OPEN';$('#breaker-message').textContent='少量探测请求正在验证下游是否恢复。成功关闭，失败重新打开。';return;}$('#breaker-state').textContent=breaker.state;const remaining=Math.max(0,8-(Date.now()-breaker.openedAt)/1000);$('#breaker-message').textContent=breaker.state==='OPEN'?remaining>0?`快速拒绝中。${remaining.toFixed(1)} 秒后，下次调用可做半开探测。`:'探测窗口已到，下一次请求进入 HALF_OPEN，结果决定关闭或重新打开。':`当前连续失败 ${breaker.failures} 次。累计 3 次失败会打开；探测成功会关闭。`;}

function notesMarkup(){const s=stages[state.stage];return `<aside class="speaker-notes"><div class="notes-header"><span>${icon('NotebookPen')} 讲者笔记 · 阶段 0${state.stage+1}</span><button data-action="notes" aria-label="关闭讲者笔记">${icon('X')}</button></div><span class="small-label">建议 ${s.duration} 分钟 / 总计约 33 分钟</span><h3>${s.question}</h3><ol>${s.notes.map(n=>`<li>${n}</li>`).join('')}</ol><p class="speaker-key">这一阶段要留下的一句话<br/><b>${s.takeaway}</b></p><div class="notes-keyboard"><span>← → 阶段切换</span><span>空格 播放 / 暂停</span><span>N 讲者笔记</span><span>Esc 退出演讲</span></div></aside>`;}
function showSources(){
  const dialog=$('#modal');dialog.innerHTML=`<div class="modal-header"><div><span class="small-label">SOURCES & ASSUMPTIONS</span><h2>来源、补充与模型边界</h2></div><button data-action="close-modal" aria-label="关闭资料">${icon('X')}</button></div><p>基于博客的六阶段主线重新组织成可操作实验，补充网络建连、异常响应、CORS、事务代理、总连接预算、Outbox 与不确定结果。</p><div class="source-warning"><b>所有实验都在浏览器本地运行。</b><p>RTT、城市间链路、线程/连接、SQL 耗时与 Trace 均为可解释的教学假设，不是博客服务器的真实架构、真实光缆路由或性能测量。三维地球采用真实地理坐标与地球贴图。吞吐量模型忽略数据库锁、CPU、I/O、GC 与网络争用，不作生产容量承诺。</p></div><div class="source-list">${sources.map(([label,url],i)=>`<a href="${url}" target="_blank" rel="noopener noreferrer"><span>${String(i+1).padStart(2,'0')}</span>${label}${icon('ArrowUpRight')}</a>`).join('')}</div><div class="asset-credit">地理数据：<a href="https://www.naturalearthdata.com/about/terms-of-use/" target="_blank" rel="noopener noreferrer">Natural Earth · Public Domain</a>。地球贴图：<a href="https://github.com/mrdoob/three.js/tree/dev/examples/textures/planets" target="_blank" rel="noopener noreferrer">Three.js examples / planets</a>，本地打包；底图不代表边界立场。<br/>内容核对：2026-10-12。Java / SQL 为教学片段，已标注省略项与适用前提；项目不包含 Spring Boot 后端或实际中间件。</div>`;iconsRefresh();dialog.showModal();
}
function setStage(i){state.stage=(i+6)%6;state.view=state.stage===0?'globe':'diagram';state.node=0;state.code=0;state.progress=0;state.phase=0;render();window.scrollTo({top:0,behavior:'instant'});}
function highlight(){hljs.highlightElement($('#code-text'));}

document.addEventListener('click',async event=>{
  if(mode==='atlas')return;
  const button=event.target.closest('button,a[data-action]');if(!button)return;
  if(button.dataset.stage!==undefined){setStage(Number(button.dataset.stage));return;}
  if(button.dataset.view){state.view=button.dataset.view;render();return;}
  if(button.dataset.node!==undefined){selectNode(Number(button.dataset.node));return;}
  if(button.dataset.phase!==undefined){stop();selectPhase(Number(button.dataset.phase));return;}
  if(button.dataset.code!==undefined){state.code=Number(button.dataset.code);render();return;}
  if(button.dataset.race!==undefined){state.raceSafe=button.dataset.race==='true';clearInterval(labTimer);document.querySelectorAll('[data-race]').forEach(b=>b.classList.toggle('active',b===button));return;}
  if(button.dataset.answer!==undefined){
    const s=stages[state.stage],correct=Number(button.dataset.answer)===s.quiz.answer;
    document.querySelectorAll('[data-answer]').forEach(b=>{b.classList.remove('correct','incorrect');if(Number(b.dataset.answer)===s.quiz.answer&&correct)b.classList.add('correct');});
    if(!correct)button.classList.add('incorrect');$('#quiz-feedback').textContent=(correct?'理解正确。':'再想一想。')+s.quiz.explain;$('#quiz-feedback').className=correct?'positive':'negative';
    if(correct&&!mastered.includes(state.stage)){mastered.push(state.stage);try{localStorage.setItem(localStorageKey,JSON.stringify(mastered));}catch{}$('.side-journey p').innerHTML=`<b>${mastered.length} / 6</b> 阶段已掌握`;$('.journey-dots')?.children[state.stage]?.classList.add('complete');const nav=$(`[data-stage="${state.stage}"]`);nav?.querySelector('.stage-arrow')?.remove();nav?.insertAdjacentHTML('beforeend',icon('CircleCheck','learned'));iconsRefresh();toast('本阶段理解检查已完成');}return;
  }
  const action=button.dataset.action;if(!action)return;
  if(action==='atlas'){mode='atlas';render();window.scrollTo({top:0,behavior:'instant'});return;}
  if(action==='home'){event.preventDefault();setStage(0);}
  if(action==='play')play();
  if(action==='step'){stop();selectPhase((state.phase+1)%(state.stage===0?6:stages[state.stage].nodes.length));}
  if(action==='reset'){stop();state.progress=0;selectPhase(0);globe?.resetView();}
  if(action==='globe-reset')globe?.resetView();
  if(action==='next')setStage(state.stage+1);
  if(action==='pool')runPool();
  if(action==='race')runRace();
  if(action==='cluster')runCluster();
  if(action==='queue')runQueue();
  if(action==='cache')$('#cache-result').innerHTML=state.cache?'<b class="positive">MySQL 1 次，Redis 命中 9 次。</b> 假设库查询 50ms、缓存 2ms，未计回填和网络开销。':'<b>MySQL 10 次。</b> 同一热点反复查询。假设每次 50ms，顺序共 500ms。';
  if(action==='session')$('#session-result').innerHTML=state.sessionShared?'<b class="positive">B 读到共享 Session，仍保持登录。</b> 本地实验模拟共享会话。':'<b class="negative">B 的本地 Session 没有登录记录。</b> 登录状态不会跨进程自动同步。';
  if(action==='replica-write'){
    $('#primary-title').textContent='新标题';$('#replica-title').textContent='旧标题';$('#replica-status').textContent='主库已提交，副本尚未追上。';
    clearTimeout(replicaTimer);replicaTimer=setTimeout(()=>{if(state.stage!==4)return;$('#replica-title').textContent='新标题';$('#replica-status').textContent='复制已追上，副本现在可以返回新标题。';},3000);
  }
  if(action==='replica-read')$('#replica-status').textContent=`副本返回“${$('#replica-title').textContent}”。${$('#replica-title').textContent==='旧标题'&&$('#primary-title').textContent==='新标题'?'刚写后读未看到新值；强一致需求可读主库。':'当前两边一致。'}`;
  if(action==='trace')runTrace();
  if(action==='breaker-reset'){clearTimeout(probeTimer);probing=false;breaker.reset();$('[data-action="trace"]').disabled=false;updateBreakerStatus();toast('熔断器已重置为 CLOSED');}
  if(action==='sources')showSources();
  if(action==='close-modal')$('#modal').close();
  if(action==='copy'){try{await navigator.clipboard.writeText(stages[state.stage].code[state.code].text);toast('代码已复制');}catch{toast('浏览器未允许剪贴板，请选中代码复制');}}
  if(action==='notes'){state.notes=!state.notes;$('.speaker-notes')?.remove();if(state.notes){$('#app').insertAdjacentHTML('beforeend',notesMarkup());iconsRefresh();}}
  if(action==='presentation'){
    state.presentation=!state.presentation;
    if(state.presentation){try{await document.documentElement.requestFullscreen();}catch{}}
    else if(document.fullscreenElement){try{await document.exitFullscreen();}catch{}}
    render();
  }
});
// SVG nodes also support keyboard activation.
document.addEventListener('click',e=>{const n=e.target.closest('g[data-node]');if(n)selectNode(Number(n.dataset.node));});
document.addEventListener('keydown',e=>{
  if(mode==='atlas')return;
  const n=e.target.closest('g[data-node]');if(n&&(e.key==='Enter'||e.key===' ')){e.preventDefault();selectNode(Number(n.dataset.node));return;}
  if(e.target.closest('input,textarea,select,button,a')||$('#modal')?.open)return;
  if(e.key===' '){e.preventDefault();play();}
  if(e.key==='ArrowRight')setStage(state.stage+1);
  if(e.key==='ArrowLeft')setStage(state.stage-1);
  if(e.key.toLowerCase()==='n')$('[data-action="notes"]').click();
  if(e.key==='Escape'&&state.presentation){state.presentation=false;render();}
});
document.addEventListener('input',e=>{
  if(e.target.dataset.param){const p=e.target.dataset.param,v=Number(e.target.value),o=$(`[data-output="${p}"]`);o.textContent=v+(p==='rate'?' /s':p==='sqlMs'?' ms':p==='production'||p==='consumption'?' 条/s':' 个');if(state.stage===1)state.pool[p]=v;else state.queue[p]=v;}
  if(e.target.id==='scrubber'){stop();state.progress=Number(e.target.value);const max=state.stage===0?5:stages[state.stage].nodes.length-1;selectPhase(Math.min(max,Math.floor(state.progress/100*(max+1))),false);}
});
document.addEventListener('change',e=>{
  const t=e.target;
  if(t.id==='speed'){state.speed=Number(t.value);globe?.setSpeed(state.speed);}
  if(t.id==='route-select'){state.route=Number(t.value);globe?.setRoute(state.route);$('#route-label')&&($('#route-label').textContent=routes[state.route].name);updateNetwork();}
  if(t.id==='reuse'){state.reused=t.checked;updateNetwork();}
  if(t.id==='cache-toggle')state.cache=t.checked;
  if(t.id==='session-toggle')state.sessionShared=t.checked;
  if(t.id==='payment-fail')state.paymentFail=t.checked;
  if(t.id==='instance-count'){state.cluster.instances=Number(t.value);state.cluster.disabled=-1;render();}
  if(t.id==='lb-strategy')state.cluster.strategy=t.value;
  if(t.id==='disabled-node'){state.cluster.disabled=Number(t.value);$('#cluster-nodes').innerHTML=clusterNodes();iconsRefresh();}
});
document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement&&state.presentation){state.presentation=false;render();}});
document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();}});
function updateNetwork(){stop();$('#cost-bars').innerHTML=costBars();$('#network-formula').textContent=networkFormula();$('#rtt-stat')&&($('#rtt-stat').innerHTML=`${routes[state.route].rtt}<small> ms</small>`);$('#total-stat')&&($('#total-stat').innerHTML=`${networkTiming(routes[state.route].rtt,state.reused).reduce((a,b)=>a+b,0)}<small> ms</small>`);document.querySelectorAll('[data-phase] small').forEach((el,i)=>el.textContent=timingLabel(i));selectPhase(0);}
render();
