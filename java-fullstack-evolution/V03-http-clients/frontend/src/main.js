import './style.css';
import { xhrRequest, fetchRequest, axiosRequest } from './clients';
const clients = {
  XMLHttpRequest: xhrRequest,
  Fetch: fetchRequest,
  Axios: axiosRequest,
};
document.querySelector('#app').innerHTML =
  `<div class="shell"><aside class="sidebar"><a class="brand" href="/"><span class="brand-mark">J</span>进化实验室</a><small>JAVA FULL-STACK / V03</small><div class="sidebar-foot">同一个 API，三种客户端。<br>观察浏览器中的异步请求。</div></aside><main class="workspace"><header class="topbar"><span>实验室 / HTTP 客户端</span><span class="badge">XHR · Fetch · Axios</span></header><div class="intro"><div><div class="eyebrow">EXPERIMENT 03 / HTTP CLIENTS</div><h1>一次请求，三种写法。</h1><p>Ajax 是异步交互模式。下面的客户端调用相同的员工 API，比较响应、错误与取消行为。</p></div></div><section class="card"><h2>新增请求数据</h2><form id="employee" class="form-grid"><label>姓名<input name="name" value="教学员工" required></label><label>部门<input name="department" value="研发部" required></label><label>年龄<input name="age" type="number" value="25" min="18" max="70"></label><label>月薪<input name="salary" type="number" value="8000" min="0" step=".01"></label></form><p class="caption">点击任一客户端的“新增”按钮，使用同一份表单数据；“400”提交缺少字段的请求，“断网”访问不可连接的测试端口。</p></section><div class="client-row" id="clients"></div><section class="card"><div class="toolbar"><h2>员工工作台 · Axios</h2><button id="reload">刷新列表</button></div><div id="business" class="table-wrap"></div><p id="business-error" role="status"></p></section></main></div>`;
const controllers = {};
function body() {
  const data = Object.fromEntries(
    new FormData(document.querySelector('#employee')),
  );
  return {
    ...data,
    age: Number(data.age),
    salary: Number(data.salary),
    gender: '未说明',
    phone: '',
  };
}
for (const [name, request] of Object.entries(clients)) {
  const card = document.createElement('section');
  card.className = 'card';
  const h = document.createElement('h2');
  h.textContent = name;
  card.append(h);
  const output = document.createElement('pre');
  output.className = 'client-result';
  output.textContent = '等待请求';
  output.setAttribute('aria-live', 'polite');
  const actions = document.createElement('div');
  actions.className = 'actions';
  for (const action of ['查询', '新增', '400', '断网', '取消']) {
    const button = document.createElement('button');
    button.textContent = action;
    button.className = action === '查询' ? '' : 'secondary';
    button.onclick = async () => {
      if (action === '取消') {
        controllers[name]?.abort();
        return;
      }
      controllers[name]?.abort();
      const controller = new AbortController();
      controllers[name] = controller;
      const timer = setTimeout(() => controller.abort(), 10000);
      output.textContent = '请求中…';
      try {
        const data = await request(
          action === '断网'
            ? 'http://127.0.0.1:1/unreachable'
            : '/api/employees',
          ['新增', '400'].includes(action) ? 'POST' : 'GET',
          action === '新增' ? body() : action === '400' ? {} : undefined,
          controller.signal,
        );
        output.textContent = JSON.stringify(data, null, 2);
        await load();
      } catch (e) {
        output.textContent = e.message;
      } finally {
        clearTimeout(timer);
      }
    };
    actions.append(button);
  }
  card.append(actions, output);
  document.querySelector('#clients').append(card);
}
async function load() {
  const root = document.querySelector('#business'),
    error = document.querySelector('#business-error');
  root.textContent = '正在加载…';
  error.textContent = '';
  try {
    const rows = await axiosRequest('/api/employees');
    if (!rows.length) {
      root.textContent = '暂无员工';
      return;
    }
    const table = document.createElement('table');
    for (const employee of rows) {
      const tr = table.insertRow();
      for (const value of [
        employee.id,
        employee.name,
        employee.department,
        employee.salary,
      ])
        tr.insertCell().textContent = value;
      const actions = tr.insertCell();
      const edit = document.createElement('button');
      edit.textContent = '修改姓名';
      edit.className = 'secondary';
      edit.onclick = async () => {
        const name = prompt('新的姓名', employee.name);
        if (!name) return;
        const { id, ...data } = employee;
        try {
          await axiosRequest(`/api/employees/${id}`, 'PUT', { ...data, name });
          await load();
        } catch (e) {
          error.textContent = e.message;
        }
      };
      const remove = document.createElement('button');
      remove.textContent = '删除';
      remove.className = 'secondary';
      remove.onclick = async () => {
        if (!confirm('确定删除？')) return;
        try {
          await axiosRequest(`/api/employees/${employee.id}`, 'DELETE');
          await load();
        } catch (e) {
          error.textContent = e.message;
        }
      };
      actions.append(edit, ' ', remove);
    }
    root.replaceChildren(table);
  } catch (e) {
    root.textContent = '加载失败';
    error.textContent = e.message;
  }
}
document.querySelector('#reload').onclick = load;
load();
