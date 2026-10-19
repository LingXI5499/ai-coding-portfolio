<script setup>
  import { onMounted } from 'vue';
  import { api } from '../api';
  import ListPager from '../components/ListPager.vue';
  import { usePagedList } from '../composables/usePagedList';
  const {
    records: employees,
    loading,
    error,
    filters,
    pagination,
    hasFilters,
    load,
    search,
    reset,
    changePage,
    changePageSize,
  } = usePagedList('/employees', {
    name: '',
    department: '',
    gender: '',
    minAge: '',
    maxAge: '',
  });
  async function remove(employee) {
    if (!confirm(`删除 ${employee.name}？`)) return;
    try {
      await api.delete(`/employees/${employee.id}`);
      await load();
    } catch (failure) {
      error.value = failure.message;
    }
  }
  onMounted(load);
</script>
<template>
  <div v-if="error" class="notice error" role="alert">{{ error }}</div>
  <section class="card">
    <div class="toolbar">
      <h2>
        员工名册
        <small>共 {{ pagination.total }} 人</small>
      </h2>
      <div class="actions">
        <button class="secondary" :disabled="loading" @click="load">
          刷新
        </button>
        <RouterLink class="button" to="/employees/new">添加员工</RouterLink>
      </div>
    </div>
    <form class="query-form" @submit.prevent="search">
      <div class="filter-fields">
        <label>
          姓名关键字
          <input
            v-model.trim="filters.name"
            maxlength="50"
            placeholder="姓名包含…"
          />
        </label>
        <label>
          部门关键字
          <input
            v-model.trim="filters.department"
            maxlength="100"
            placeholder="部门包含…"
          />
        </label>
        <label>
          性别筛选
          <select aria-label="性别筛选" v-model="filters.gender">
            <option value="">全部</option>
            <option>未说明</option>
            <option>男</option>
            <option>女</option>
          </select>
        </label>
        <label>
          最小年龄
          <input
            v-model.number="filters.minAge"
            type="number"
            min="18"
            max="70"
          />
        </label>
        <label>
          最大年龄
          <input
            v-model.number="filters.maxAge"
            type="number"
            min="18"
            max="70"
          />
        </label>
      </div>
      <div class="actions">
        <button :disabled="loading">查询</button>
        <button
          type="button"
          class="secondary"
          :disabled="loading"
          @click="reset"
        >
          重置筛选
        </button>
      </div>
    </form>
    <div v-if="loading" class="empty" role="status">正在加载员工…</div>
    <div v-else-if="!employees.length" class="empty">
      {{
        hasFilters
          ? '没有符合条件的员工，请调整筛选条件。'
          : '还没有员工，添加第一条记录开始实验。'
      }}
    </div>
    <div v-else class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>姓名</th>
            <th>部门</th>
            <th>年龄</th>
            <th>月薪</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee.id">
            <td>
              <RouterLink :to="`/employees/${employee.id}`">
                {{ employee.name }}
              </RouterLink>
            </td>
            <td>{{ employee.department }}</td>
            <td>{{ employee.age }}</td>
            <td>¥ {{ employee.salary }}</td>
            <td>
              <div class="actions">
                <RouterLink :to="`/employees/${employee.id}/edit`">
                  编辑
                </RouterLink>
                <button
                  class="secondary"
                  :disabled="loading"
                  @click="remove(employee)"
                >
                  删除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ListPager
      v-bind="pagination"
      :loading="loading"
      @page="changePage"
      @page-size="changePageSize"
    />
  </section>
</template>
