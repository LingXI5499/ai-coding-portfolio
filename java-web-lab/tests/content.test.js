import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {knowledgeDomains,chainSteps,coreTerms} from '../src/knowledge.js';
import {workedCases,questionBank,engineeringCases} from '../src/deep-content.js';
import {conceptDetails} from '../src/concept-details.js';
import {requestLayers,layerDiagram} from '../src/request-layers.js';
test('six stages have worked examples, meaningful state evidence and question reasoning',()=>{
  assert.equal(workedCases.length,12);assert.equal(questionBank.length,48);
  for(let stage=0;stage<6;stage++){
    assert.equal(workedCases.filter(c=>c.stage===stage).length,2);
    assert.equal(questionBank.filter(q=>q.stage===stage).length,8);
    assert.ok(engineeringCases.some(c=>c.stage===stage));
  }
  assert.equal(new Set(questionBank.map(q=>q.id)).size,48);
  for(const c of workedCases){assert.ok(c.steps.length>=6);for(const st of c.steps){assert.ok(st.actor&&st.action&&st.code&&st.evidence);assert.ok(Object.keys(st.state).length>=2);}}
  for(const q of questionBank){assert.ok(q.explanation.length>15&&q.trap&&q.followup);if(q.options.length){assert.ok(Number.isInteger(q.answer));assert.ok(q.answer>=0&&q.answer<q.options.length);}else assert.equal(typeof q.answer,'string');assert.ok(q.source.startsWith('https://'));}
});
test('panorama domains and semantic node relationships are navigable',()=>{
  assert.equal(knowledgeDomains.length,16);const topics=knowledgeDomains.flatMap(d=>d.topics);
  assert.ok(topics.length>=150);assert.equal(new Set(topics.map(t=>t.id)).size,topics.length);
  for(const t of topics){for(const field of ['name','meaning','position','upstream','downstream','example','pitfall'])assert.ok(t[field],t.id+' '+field);assert.ok(t.stage>=0&&t.stage<6);}
  for(const term of coreTerms)assert.ok(topics.some(t=>t.id===term.id));
  assert.ok(chainSteps.length>=18);for(const st of chainSteps)assert.ok(st.name&&st.input&&st.output&&st.explanation&&st.failure&&st.code);
});
test('each of the 165 curated concepts has mechanism, code, decisions, boundaries and independent verification',()=>{
  const ids=knowledgeDomains.flatMap(d=>d.topics.map(t=>t.id));assert.equal(ids.length,165);assert.deepEqual(Object.keys(conceptDetails).sort(),ids.sort());
  for(const id of ids){const d=conceptDetails[id];for(const field of ['definition','exampleCode','language','decision','boundaries','verify'])assert.ok(d[field]?.length,id+' '+field);assert.ok(d.mechanism.length>=3&&d.mechanism.length<=5,id);if(d.source)assert.ok(d.source.startsWith('https://'),id);}
});
test('runtime diagrams distinguish bootstrap, containment, invocation and data contracts',()=>{
  assert.equal(requestLayers.length,18);assert.equal(new Set(requestLayers.map(n=>n.id)).size,18);
  for(const id of ['boot','tomcat','servlet','filter','dispatcher','mapping','adapter','mvc','dto','controller','service','entity','mapper','jdbc','sql','vo','json','interceptor']){const n=requestLayers.find(n=>n.id===id);assert.ok(n);assert.equal(n.mechanism.length,4);assert.ok(n.owner&&n.boundary&&n.source);}
  assert.match(layerDiagram('dto','containment'),/Boot 启动不是每次请求/);assert.match(layerDiagram('dto','data'),/不是所有请求/);
  const atlas=readFileSync(new URL('../src/atlas.js',import.meta.url),'utf8');assert.ok(!atlas.includes('完整材料库'));assert.ok(!atlas.includes('/materials/'));assert.ok(!atlas.includes('pdfjs'));
});
