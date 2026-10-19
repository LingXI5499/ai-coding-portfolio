/** 条件改变后从第一页查询；总数由后端 COUNT 返回，页面不做假分页。 */
export function createEmployeeQueryControls(filtersRoot, pagerRoot, reload) {
  const form = document.createElement('form');
  form.className = 'query-form';
  form.innerHTML = `<div class="filter-fields">
  <label>姓名关键字<input name="name" maxlength="50" placeholder="姓名包含…"></label>
  <label>部门关键字<input name="department" maxlength="100" placeholder="部门包含…"></label>
  <label>性别筛选<select name="gender" aria-label="性别筛选"><option value="">全部</option><option>未说明</option><option>男</option><option>女</option></select></label>
  <label>最小年龄<input name="minAge" type="number" min="18" max="70" placeholder="18"></label>
  <label>最大年龄<input name="maxAge" type="number" min="18" max="70" placeholder="70"></label>
</div>
<div class="actions"><button type="submit">查询</button><button type="button" class="secondary" data-reset>重置筛选</button></div>`;
  filtersRoot.append(form);
  pagerRoot.className = 'pagination';
  pagerRoot.setAttribute('aria-label', '分页导航');
  pagerRoot.innerHTML = `<p class="pagination-summary" role="status"></p>
<div class="actions"><label>每页条数<select data-size aria-label="每页条数"><option>5</option><option selected>10</option><option>20</option><option>50</option><option>100</option></select></label>
<button type="button" class="secondary" data-previous>上一页</button><button type="button" class="secondary" data-next>下一页</button></div>`;
  const previous = pagerRoot.querySelector('[data-previous]');
  const next = pagerRoot.querySelector('[data-next]');
  const size = pagerRoot.querySelector('[data-size]');
  const summary = pagerRoot.querySelector('.pagination-summary');
  let page = 1,
    pageSize = 10,
    totalPages = 0,
    busy = false,
    filters = {};

  form.onsubmit = (event) => {
    event.preventDefault();
    if (busy) return;
    filters = Object.fromEntries(
      [...new FormData(form)]
        .map(([key, value]) => [key, value.trim()])
        .filter(([, value]) => value !== ''),
    );
    page = 1;
    reload();
  };
  form.querySelector('[data-reset]').onclick = () => {
    if (busy) return;
    form.reset();
    filters = {};
    page = 1;
    reload();
  };
  previous.onclick = () => {
    if (!busy && page > 1) {
      page--;
      reload();
    }
  };
  next.onclick = () => {
    if (!busy && page < totalPages) {
      page++;
      reload();
    }
  };
  size.onchange = () => {
    pageSize = Number(size.value);
    page = 1;
    reload();
  };
  function setBusy(value) {
    busy = value;
    for (const button of form.querySelectorAll('button'))
      button.disabled = value;
    size.disabled = value;
    previous.disabled = value || page <= 1;
    next.disabled = value || page >= totalPages;
  }
  setBusy(false);
  return {
    query() {
      return new URLSearchParams({ ...filters, page, pageSize }).toString();
    },
    update(data) {
      totalPages = data.totalPages;
      const last = Math.max(1, totalPages);
      if (page > last) {
        page = last;
        return true;
      }
      summary.textContent = `共 ${data.total} 条 · 第 ${data.total ? page : 0} / ${totalPages} 页`;
      setBusy(busy);
      return false;
    },
    firstPage() {
      page = 1;
    },
    setBusy,
  };
}
