<script setup>
  import { ref, onMounted } from 'vue';
  import { api, restore } from '../api';
  import { auth } from '../state';
  const users = ref([]),
    error = ref(''),
    loading = ref(true);
  async function load() {
    loading.value = true;
    try {
      if (!auth.user) auth.user = await restore();
      users.value = await api.get('/admin/users');
    } catch (e) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  }
  async function status(user) {
    try {
      await api.patch(`/admin/users/${user.id}/status`, {
        status: user.status === 'ACTIVE' ? 'DISABLED' : 'ACTIVE',
      });
      await load();
    } catch (e) {
      error.value = e.message;
    }
  }
  onMounted(load);
</script>
<template>
  <section class="card">
    <h2>用户管理</h2>
    <p class="muted">此页面由服务端校验 ADMIN 权限。</p>
    <div v-if="error" class="notice error" role="alert">{{ error }}</div>
    <p v-if="loading">正在加载…</p>
    <div v-else class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>用户名</th>
            <th>昵称</th>
            <th>状态</th>
            <th>角色</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.username }}</td>
            <td>{{ user.nickname }}</td>
            <td>{{ user.status }}</td>
            <td>{{ user.role }}</td>
            <td>
              <button
                v-if="user.id !== auth.user?.id && user.status !== 'DELETED'"
                class="secondary"
                @click="status(user)"
              >
                {{ user.status === 'ACTIVE' ? '禁用' : '恢复' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
