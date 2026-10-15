import test from 'node:test';
import assert from 'node:assert/strict';
import {networkTiming,simulatePool,inventoryRace,distribute,queueSeries,Breaker} from '../src/models.js';

test('connection reuse removes setup cost but preserves request and application time',()=>{
  assert.deepEqual(networkTiming(100,false),[20,100,100,50,42,50]);
  assert.deepEqual(networkTiming(100,true),[0,0,0,50,42,50]);
});
test('pool conserves arrivals across completed, expired and still outstanding work',()=>{
  const r=simulatePool({rate:40,threads:8,connections:2,sqlMs:300});
  assert.equal(r.created,r.completed+r.failed+r.outstanding);
  assert.ok(r.failed>0);assert.ok(r.outstanding>0);
  assert.ok(r.snapshots.every(s=>s.active<=2&&s.active+s.waitingConnection<=8));
});
test('more workers do not remove a database connection bottleneck in this model',()=>{
  const a=simulatePool({rate:40,threads:8,connections:2,sqlMs:300});
  const b=simulatePool({rate:40,threads:20,connections:2,sqlMs:300});
  assert.equal(a.completed,b.completed);
});
test('shorter SQL reduces backlog and improves completion throughput',()=>{
  const slow=simulatePool({rate:30,threads:8,connections:3,sqlMs:400});
  const fast=simulatePool({rate:30,threads:8,connections:3,sqlMs:50});
  assert.ok(fast.completed>slow.completed);assert.equal(fast.failed,0);assert.ok(fast.outstanding<slow.outstanding);
});
test('unsafe race creates two orders, conditional update preserves one-stock invariant',()=>{
  assert.equal(inventoryRace(false).orders,2);assert.equal(inventoryRace(true).orders,1);assert.equal(inventoryRace(true).stock,0);
});
test('round robin distributes evenly and never routes to an excluded instance',()=>{
  const a=distribute({count:12,instances:3});assert.deepEqual(a.nodes.map(n=>n.received),[4,4,4]);
  const b=distribute({count:12,instances:3,disabled:1});assert.ok(!b.assignments.includes(1));assert.deepEqual(b.nodes.map(n=>n.received),[6,0,6]);
});
test('least-work model reduces allocations to a slow instance',()=>{
  const r=distribute({count:12,instances:3,slow:1,strategy:'least'});assert.ok(r.nodes[1].received<r.nodes[0].received);
});
test('message backlog grows only when production exceeds consumption',()=>{
  assert.equal(queueSeries(20,8).at(-1).backlog,120);assert.equal(queueSeries(8,20).at(-1).backlog,0);
  for(const d of queueSeries(20,8))assert.equal(d.produced,d.consumed+d.backlog);
});
test('breaker rejects while open, probes after cooldown and closes on success',()=>{
  const b=new Breaker();b.call(true,0);b.call(true,1);b.call(true,2);assert.equal(b.state,'OPEN');
  assert.equal(b.call(false,3).status,'快速拒绝');
  assert.equal(b.call(false,8002).status,'订单成功');assert.equal(b.state,'CLOSED');
});
test('failed half-open probe reopens the breaker',()=>{
  const b=new Breaker();b.call(true,0);b.call(true,1);b.call(true,2);b.call(true,8002);assert.equal(b.state,'OPEN');assert.equal(b.openedAt,8002);
});
