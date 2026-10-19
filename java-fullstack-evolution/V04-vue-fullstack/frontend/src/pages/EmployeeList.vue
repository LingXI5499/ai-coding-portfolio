<script setup>
  import { ref, onMounted } from 'vue';
  import { api } from '../api';
  const employees = ref([]),
    loading = ref(false),
    error = ref('');
  async function load() {
    loading.value = true;
    error.value = '';
    try {
      employees.value = await api.get('/employees');
    } catch (e) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  }
  async function remove(employee) {
    if (!confirm(`删除 ${employee.name}？`)) return;
    try {
      await api.delete(`/employees/${employee.id}`);
      await load();
    } catch (e) {
      error.value = e.message;
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
        <small>{{ employees.length }} 人</small>
      </h2>
      <div class="actions">
        <button class="secondary" :disabled="loading" @click="load">
          刷新
        </button>
        <RouterLink class="button" to="/employees/new">添加员工</RouterLink>
      </div>
    </div>
    <div v-if="loading" class="empty" role="status">正在加载员工…</div>
    <div v-else-if="!employees.length" class="empty">
      还没有员工，添加第一条记录开始实验。
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
                <button class="secondary" @click="remove(employee)">
                  删除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
