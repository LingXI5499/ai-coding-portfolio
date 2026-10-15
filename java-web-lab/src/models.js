// Deterministic teaching models. No production traffic, random benchmark data or implied capacity claims.
export function networkTiming(rtt, reused = false) {
  return [reused ? 0 : 20, reused ? 0 : rtt, reused ? 0 : rtt, rtt / 2, 42, rtt / 2];
}

export function simulatePool({rate=20,threads=8,connections=3,sqlMs=200,duration=10,timeout=3}) {
  const dt=.01, jobs=[], active=[], snapshots=[];
  let created=0, completed=0, failed=0;
  const latencies=[];
  for(let tick=0;tick<=Math.round(duration/dt);tick++) {
    const time=tick*dt;
    // Remove completed work before admitting new work at this instant.
    for(let i=active.length-1;i>=0;i--) {
      const j=active[i];
      if(j.end <= time + 1e-8) {
        active.splice(i,1); completed++; latencies.push((time-j.arrival)*1000);
      }
    }
    while(created < Math.floor(time*rate + 1e-8) && time < duration) {
      jobs.push({id:++created,arrival:created/rate});
    }
    // The pool model abstracts request/connection waiting into FIFO admission.
    for(let i=jobs.length-1;i>=0;i--) {
      if(time-jobs[i].arrival>=timeout) {jobs.splice(i,1); failed++;}
    }
    const slots=Math.min(threads,connections);
    while(jobs.length && active.length<slots) {
      const job=jobs.shift(); active.push({...job,end:time+sqlMs/1000+.02});
    }
    if(tick%10===0) snapshots.push({time,active:active.length,waitingConnection:Math.min(jobs.length,Math.max(0,threads-active.length)),queued:Math.max(0,jobs.length-(threads-active.length)),completed,failed,inflight:jobs.length+active.length});
  }
  latencies.sort((a,b)=>a-b);
  return {snapshots,created,completed,failed,outstanding:jobs.length+active.length,rps:completed/duration,p95:latencies[Math.max(0,Math.ceil(latencies.length*.95)-1)]||0,avg:latencies.length?latencies.reduce((a,b)=>a+b,0)/latencies.length:0};
}

export function inventoryRace(safe) {
  return safe
    ? {orders:1,stock:0,events:[['A','尝试条件更新 WHERE stock > 0','等待写锁'],['A','受影响行数 = 1，扣减并创建订单','成功'],['B','获得锁后重新检查 stock > 0','条件不满足'],['B','受影响行数 = 0，不创建订单','售罄']]}
    : {orders:2,stock:0,events:[['A','查询 stock，读到 1','读取'],['B','查询 stock，也读到 1','读取'],['A','创建订单，写入 stock = 0','成功'],['B','创建订单，再写 stock = 0','重复售出']]};
}

export function distribute({count=12,instances=3,disabled=-1,slow=1,strategy='rr'}) {
  const nodes=Array.from({length:instances},(_,i)=>({id:i,received:0,load:0}));
  const usable=nodes.filter(n=>n.id!==disabled);
  if(!usable.length) return {nodes,assignments:[]};
  const assignments=[];
  for(let i=0;i<count;i++) {
    // Arrive every 100ms; service duration differs for the designated slow node.
    for(const n of usable) n.load=Math.max(0,n.load-100);
    const n=strategy==='rr'?usable[i%usable.length]:usable.reduce((a,b)=>a.load<=b.load?a:b);
    n.received++; n.load+=(n.id===slow?650:180); assignments.push(n.id);
  }
  return {nodes,assignments};
}

export function queueSeries(production,consumption,seconds=10) {
  return Array.from({length:seconds+1},(_,time)=>({time,produced:time*production,consumed:time*Math.min(production,consumption),backlog:Math.max(0,time*(production-consumption))}));
}

export class Breaker {
  constructor(){this.reset();}
  reset(){this.state='CLOSED';this.failures=0;this.openedAt=0;}
  call(failure,now) {
    if(this.state==='OPEN' && now-this.openedAt<8000) return {status:'快速拒绝',duration:5,state:this.state};
    if(this.state==='OPEN') this.state='HALF_OPEN';
    if(failure) {
      this.failures++;
      if(this.failures>=3 || this.state==='HALF_OPEN') {this.state='OPEN';this.openedAt=now;}
      return {status:'支付超时 · 结果未知',duration:1000,state:this.state};
    }
    this.failures=0;this.state='CLOSED';
    return {status:'订单成功',duration:184,state:this.state};
  }
}
