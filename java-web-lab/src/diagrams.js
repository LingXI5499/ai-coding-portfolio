const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const configs = [
  {positions:[[60,70],[260,70],[460,70],[660,70],[660,230],[460,230],[260,230],[60,230],[60,390]],edges:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]],labels:['CLIENT','NETWORK','EDGE','JAVA CONTAINER','SPRING MVC','APPLICATION','BUSINESS','DATA ACCESS','RESPONSE']},
  {positions:[[75,190],[270,190],[470,95],[470,285],[690,190],[890,190]],edges:[[0,1],[1,2],[2,3],[3,4],[4,5]],labels:['ARRIVAL','REQUEST QUEUE','WORKERS','DB CONNECTIONS','DATABASE','COMPLETED']},
  {positions:[[85,185],[285,185],[485,95],[685,95],[485,305],[685,305]],edges:[[0,1],[1,2],[2,3],[1,4],[4,5]],labels:['RACE','DEDUPLICATION','ATOMIC WRITE','TRANSACTION','READ CACHE','PROTECTION']},
  {positions:[[75,190],[275,190],[475,75],[475,285],[685,190],[885,190]],edges:[[0,1],[1,2],[1,3],[2,4],[3,4],[4,5]],labels:['CLIENT','ENTRY','INSTANCE A','INSTANCE B','SHARED STATE','DATABASE']},
  {positions:[[75,170],[275,170],[475,75],[685,75],[475,285],[685,285]],edges:[[0,1],[1,2],[2,3],[0,4],[4,5]],labels:['CORE REQUEST','OUTBOX','MESSAGE BROKER','WORKERS','PRIMARY DB','READ REPLICA']},
  {positions:[[75,190],[275,190],[475,75],[475,285],[685,285],[685,75]],edges:[[0,1],[1,2],[1,4],[4,3],[1,5],[2,5],[3,5]],labels:['GATEWAY','ORDER','INVENTORY','PAYMENT','RESILIENCE','OBSERVABILITY']}
];
export function renderDiagram(stage,index,active=0){
  const c=configs[index],w=index===1||index===3?1100:900,h=index===0?490:410;
  let paths=c.edges.map(([a,b],i)=>{
    const [x,y]=c.positions[a],[xx,yy]=c.positions[b];
    const d=`M ${x+130} ${y+36} C ${x+170} ${y+36}, ${xx-40} ${yy+36}, ${xx} ${yy+36}`;
    return `<path class="flow-line" d="${d}"/><circle r="3" fill="#7bc7e7"><animateMotion dur="${2.5+i*.1}s" repeatCount="indefinite" path="${d}"/></circle>`;
  }).join('');
  let nodes=stage.nodes.map((n,i)=>{
    const [x,y]=c.positions[i];
    return `<g class="diagram-node ${i===active?'selected':''}" tabindex="0" role="button" aria-label="${escape(n.title)}" data-node="${i}" transform="translate(${x},${y})"><rect width="130" height="74" rx="10"/><text class="node-index" x="12" y="21">${String(i+1).padStart(2,'0')}</text><text class="node-title" x="12" y="42">${escape(n.title.replace('DispatcherServlet','Dispatcher').replace('Mapper → MySQL','Mapper / SQL'))}</text><text class="node-sub" x="12" y="61">${escape(c.labels[i])}</text></g>`;
  }).join('');
  return `<svg class="architecture-svg" viewBox="0 0 ${w} ${h}" role="group" aria-label="${stage.name}架构图"><defs><pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".8" fill="#333840"/></pattern></defs><rect width="100%" height="100%" fill="url(#dots)"/>${paths}${nodes}</svg>`;
}

export function traceDiagram(failed,fast=false){
  const duration=fast?5:failed?1000:184;
  const spans=fast?[['Gateway',0,5,0],['Circuit breaker · 快速拒绝',1,3,1]]:[['Gateway',0,duration,0],['OrderService.place',8,duration-16,1],['Inventory.reserve',15,45,2],[failed?'Payment · timeout':'Payment.authorize',66,failed?900:80,2],['Order DB',failed?970:152,18,2]];
  return `<div class="trace-axis"><span>0 ms</span><span>${Math.round(duration/2)} ms</span><span>${duration} ms</span></div>${spans.map(([name,start,length,level])=>`<div class="trace-row"><span style="padding-left:${level*12}px">${name}</span><div class="trace-track"><b class="${name.includes('Payment')&&failed?'red':''}" style="left:${start/duration*100}%;width:${Math.max(1,length/duration*100)}%">${length} ms</b></div></div>`).join('')}`;
}
