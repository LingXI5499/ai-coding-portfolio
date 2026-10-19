import { createEmployeeQueryControls } from './pagination.js';
let editing = null;
const form = document.querySelector('#employee-form');
const list = document.querySelector('#list');
const message = document.querySelector('#message');
function notify(text, error = false) {
  message.className = `notice${error ? ' error' : ''}`;
  message.textContent = text;
}
async function request(path = '', options = {}) {
  const response = await fetch(`/api/employees${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers },
  });
  if (response.status === 204) return null;
  const body = await response.json().catch(() => {
    throw new Error('服务端未返回 JSON');
  });
  if (!response.ok) throw new Error(body.message || `HTTP ${response.status}`);
  return body.data;
}
function reset() {
  editing = null;
  form.reset();
  document.querySelector('#form-title').textContent = '新增员工';
}
const controls = createEmployeeQueryControls(
  document.querySelector('#employee-filters'),
  document.querySelector('#employee-pagination'),
  load,
);
async function load() {
  controls.setBusy(true);
  list.textContent = '正在加载…';
  try {
    const data = await request('?' + controls.query());
    if (controls.update(data)) {
      await load();
      return;
    }
    const rows = data.records;
    if (!rows.length) {
      list.textContent = '没有符合条件的员工，请调整筛选或新增员工。';
      return;
    }
    const table = document.createElement('table');
    const header = table.createTHead().insertRow();
    for (const label of ['姓名', '部门', '年龄', '月薪', '操作']) {
      const th = document.createElement('th');
      th.textContent = label;
      header.append(th);
    }
    const tbody = table.createTBody();
    for (const employee of rows) {
      const tr = tbody.insertRow();
      for (const key of ['name', 'department', 'age', 'salary'])
        tr.insertCell().textContent = employee[key];
      const cell = tr.insertCell();
      const edit = document.createElement('button');
      edit.textContent = '编辑';
      edit.className = 'secondary';
      edit.onclick = () => {
        editing = employee.id;
        for (const key of [
          'name',
          'gender',
          'age',
          'phone',
          'department',
          'salary',
        ])
          form.elements[key].value = employee[key] ?? '';
        document.querySelector('#form-title').textContent = '编辑员工';
        form.scrollIntoView({ behavior: 'smooth' });
      };
      const remove = document.createElement('button');
      remove.textContent = '删除';
      remove.className = 'danger';
      remove.onclick = async () => {
        if (!confirm(`删除 ${employee.name}？`)) return;
        try {
          await request(`/${employee.id}`, { method: 'DELETE' });
          notify('已删除');
          await load();
        } catch (e) {
          notify(e.message, true);
        }
      };
      cell.append(edit, ' ', remove);
    }
    list.replaceChildren(table);
  } catch (e) {
    list.textContent = '加载失败，请检查后端与数据库。';
    notify(e.message, true);
  } finally {
    controls.setBusy(false);
  }
}
form.onsubmit = async (event) => {
  event.preventDefault();
  const button = form.querySelector('[type=submit]');
  button.disabled = true;
  try {
    const body = Object.fromEntries(new FormData(form));
    body.age = Number(body.age);
    body.salary = Number(body.salary);
    await request(editing ? `/${editing}` : '', {
      method: editing ? 'PUT' : 'POST',
      body: JSON.stringify(body),
    });
    reset();
    notify('已保存到数据库');
    await load();
  } catch (e) {
    notify(e.message, true);
  } finally {
    button.disabled = false;
  }
};
document.querySelector('#reload').onclick = load;
document.querySelector('#cancel').onclick = reset;
load();
