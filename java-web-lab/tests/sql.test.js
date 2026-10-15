import test from 'node:test';
import assert from 'node:assert/strict';
import initSqlJs from 'sql.js';
import {schemaSql,seedSql,sqlLessons} from '../src/sql-curriculum.js';
import {executeSQL,snapshot} from '../src/sql-engine.js';
const SQL=await initSqlJs();
function database(){const db=new SQL.Database();db.exec(schemaSql);db.exec(seedSql);return db;}
function lesson(id,db){const l=sqlLessons.find(l=>l.id===id);assert.ok(l,id);return executeSQL(db,l.sql,l.params);}
test('all 46 lessons execute against a fresh relational database, including deliberate constraint failures',()=>{
  assert.equal(sqlLessons.length,46);assert.equal(new Set(sqlLessons.map(l=>l.id)).size,46);
  for(const l of sqlLessons){const db=database();const r=executeSQL(db,l.sql,l.params);if(l.id==='unique-constraint')assert.match(r.error,/UNIQUE/);else if(l.id==='fk-reject')assert.match(r.error,/FOREIGN KEY/);else assert.equal(r.ok,true,l.id+': '+r.error);assert.equal((l.sql.match(/\?/g)||[]).length,l.params.length,l.id);for(const field of ['goal','request','controller','service','mapper','expected','source'])assert.ok(l[field],l.id+': '+field);assert.ok(l.walkthrough.length>=3&&l.pitfalls.length>=2);db.close();}
});
test('single-table writes change the intended row and preserve related tables',()=>{
  const db=database();let r=lesson('create-employee',db);assert.equal(r.changed,1);assert.equal(db.exec('SELECT COUNT(*) FROM employee')[0].values[0][0],9);
  r=lesson('update-by-id',db);assert.equal(r.changed,1);assert.equal(db.exec('SELECT name FROM employee WHERE id=3')[0].values[0][0],'王五改名');
  r=lesson('logical-delete',db);assert.equal(db.exec('SELECT status,version FROM employee WHERE id=3')[0].values[0][0],'DELETED');assert.equal(db.exec('SELECT version FROM employee WHERE id=3')[0].values[0][0],2);
  r=lesson('delete-by-id',db);assert.equal(db.exec('SELECT COUNT(*) FROM employee WHERE id=8')[0].values[0][0],0);assert.equal(db.exec('SELECT COUNT(*) FROM employee_project')[0].values[0][0],8);db.close();
});
test('conditions, stable offset pagination and keyset pagination produce independently predicted IDs',()=>{
  const db=database();const ids=id=>lesson(id,db).results[0]?.values.map(row=>row[0])||[];
  assert.deepEqual(ids('and-or'),[1,2,3]);assert.deepEqual(ids('null-check'),[5,8]);assert.deepEqual(ids('stable-order'),[2,6,1,3,5,8]);assert.deepEqual(ids('offset-page'),[1,3]);assert.deepEqual(ids('keyset-page'),[1,3]);assert.deepEqual(lesson('count-total',db).results[0].values,[[6]]);assert.deepEqual(ids('not-in-null'),[]);db.close();
});
test('outer join ON preserves empty parent, WHERE rejects it, and fanout is not object count',()=>{
  const db=database();const on=lesson('on-preserves-parent',db).results[0].values,where=lesson('where-removes-null',db).results[0].values;
  assert.equal(on.length,5);assert.deepEqual(on.at(-1),[4,'法务',null]);assert.equal(where.length,4);assert.ok(where.every(row=>row[0]!==4));
  const fanout=lesson('fanout',db).results[0].values;assert.equal(fanout.length,8);assert.equal(new Set(fanout.map(row=>row[0])).size,6);
  const page=lesson('parent-page',db).results[0].values;assert.equal(page.length,3);assert.deepEqual([...new Set(page.map(row=>row[0]))],[1,2]);
  assert.deepEqual(lesson('count-null',db).results[0].values.at(-1),[4,'法务',1,0]);assert.deepEqual(lesson('sum-fanout',db).results[0].values,[[1,'研发',22000,3],[2,'产品',9000,2],[3,'运营',12000,1]]);db.close();
});
test('optimistic update detects repeated stale version, and association deletion preserves the employee',()=>{
  const db=database();assert.equal(lesson('optimistic-update',db).changed,1);assert.equal(lesson('optimistic-update',db).changed,0);assert.deepEqual(db.exec('SELECT salary,version FROM employee WHERE id=3')[0].values,[[9500,2]]);
  assert.equal(lesson('relation-delete',db).changed,1);assert.deepEqual(db.exec('SELECT id FROM employee WHERE id=1')[0].values,[[1]]);assert.deepEqual(db.exec('SELECT project_id FROM employee_project WHERE employee_id=1')[0].values,[[1]]);db.close();
});
test('multi-table commit, explicit rollback and error rollback preserve atomic business invariants',()=>{
  let db=database();assert.deepEqual(lesson('multi-write-commit',db).results[0].values,[[9,'郑十一',2]]);db.close();
  db=database();const before=snapshot(db);assert.deepEqual(lesson('multi-write-rollback',db).results[0].values,[['employee',0],['relation',0]]);assert.deepEqual(snapshot(db),before);
  const r=executeSQL(db,"BEGIN; INSERT INTO employee(id,username,name,salary) VALUES (9,'new','新人',1); INSERT INTO employee_project VALUES (9,999); COMMIT;",[]);assert.equal(r.ok,false);assert.equal(r.rolledBack,true);assert.deepEqual(db.exec('SELECT id FROM employee WHERE id=9'),[]);db.close();
});
test('parameter values remain values and binding mistakes do not execute writes',()=>{
  const db=database();const r=executeSQL(db,'SELECT id FROM employee WHERE username=?',["alice' OR 1=1 --"]);assert.equal(r.ok,true);assert.equal(r.results[0].values.length,0);assert.equal(executeSQL(db,'DELETE FROM employee WHERE id=?',[1,2]).ok,false);assert.equal(db.exec('SELECT COUNT(*) FROM employee')[0].values[0][0],8);db.close();
});
test('multi-table update and deletion preserve parent/reference invariants and joint pagination counts objects',()=>{
  let db=database();const r=lesson('multi-table-transfer',db);assert.equal(r.ok,true);assert.deepEqual(db.exec('SELECT department_id,version FROM employee WHERE id=1')[0].values,[[2,1]]);assert.deepEqual(db.exec('SELECT project_id FROM employee_project WHERE employee_id=1')[0].values,[[3]]);db.close();
  db=database();assert.equal(lesson('multi-table-delete',db).ok,true);assert.deepEqual(db.exec('SELECT COUNT(*) FROM employee')[0].values,[[7]]);assert.deepEqual(db.exec('SELECT COUNT(*) FROM employee_project')[0].values,[[6]]);assert.deepEqual(db.exec('SELECT COUNT(*) FROM department')[0].values,[[4]]);assert.deepEqual(db.exec('SELECT COUNT(*) FROM project')[0].values,[[4]]);db.close();
  db=database();assert.deepEqual(lesson('related-stable-page',db).results[0].values.map(row=>row[0]),[2,1]);assert.deepEqual(lesson('related-count-grain',db).results[0].values,[['join_count_star',4],['join_count_distinct',3],['exists_parent_count',3]]);assert.equal(lesson('one-to-many-view',db).results[0].values.length,3);db.close();
});
