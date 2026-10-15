import initSqlJs from 'sql.js';
import wasmUrl from 'sql.js/dist/sql-wasm.wasm?url';
import {schemaSql,seedSql} from './sql-curriculum.js';
import {executeSQL,snapshot} from './sql-engine.js';
let SQL,db;
function reset(){db?.close();db=new SQL.Database();db.exec('PRAGMA foreign_keys=ON;');db.exec(schemaSql);db.exec(seedSql);}
const ready=initSqlJs({locateFile:()=>wasmUrl}).then(module=>{SQL=module;reset();});
self.onmessage=async ({data})=>{
  try{
    await ready;
    if(data.reset)reset();
    self.postMessage({id:data.id,reset:!!data.reset,...(data.sql?executeSQL(db,data.sql,data.params):{ok:true,after:snapshot(db),results:[],changed:0,elapsed:0})});
  }catch(e){self.postMessage({id:data.id,ok:false,error:e.message});}
};
