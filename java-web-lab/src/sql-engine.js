export function snapshot(db) {
  return ['department','employee','project','employee_project'].map(name=>({name,result:db.exec(`SELECT * FROM ${name} ORDER BY 1,2 LIMIT 200`)[0]||{columns:[],values:[]}}));
}
export function executeSQL(db,sql,params=[]) {
  if(!Array.isArray(params))throw Error('绑定参数必须是 JSON 数组。');
  const before=snapshot(db), changesBefore=db.exec('SELECT total_changes()')[0].values[0][0];
  const start=performance.now();let results=[];
  try {
    if(params.length){
      const statement=db.prepare(sql);
      try{
        const count=(sql.match(/\?/g)||[]).length;
        if(count!==params.length)throw Error(`占位符 ${count} 个，绑定参数 ${params.length} 个；请一一对应。`);
        if(sql.replace(/;\s*$/,'').includes(';'))throw Error('带参数的实验请一次执行一条语句；事务脚本使用空参数数组。');
        statement.bind(params);const columns=statement.getColumnNames(),values=[];
        while(statement.step())values.push(statement.get());
        if(columns.length)results.push({columns,values});
      } finally{statement.free();}
    }else results=db.exec(sql);
    const changed=db.exec('SELECT total_changes()')[0].values[0][0]-changesBefore;
    return {ok:true,results,changed,before,after:snapshot(db),elapsed:performance.now()-start};
  }catch(error){
    let rolledBack=false;try{db.exec('ROLLBACK');rolledBack=true;}catch{}
    return {ok:false,error:error.message,rolledBack,before,after:snapshot(db),elapsed:performance.now()-start};
  }
}
