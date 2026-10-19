<script setup>
  import { ref, onMounted } from 'vue';
  import { api, restore } from '../api';
  import { auth } from '../state';
  import ListPager from '../components/ListPager.vue';
  import { usePagedList } from '../composables/usePagedList';
  const {
    records: users,
    loading,
    error,
    filters,
    pagination,
    load,
    search,
    reset,
    changePage,
    changePageSize,
  } = usePagedList('/admin/users', { keyword: '', status: '', role: '' });

  onMounted(async () => {
    try {
      if (!auth.user) auth.user = await restore();
      await load();
    } catch (failure) {
      error.value = failure.message;
    }
  });
</script>
<template>
  <section class="card">
    <h2>用户管理</h2>
    <p class="muted">此页面由服务端校验 ADMIN 权限，筛选与分页由数据库完成。</p>
    <div v-if="error" class="notice error" role="alert">{{ error }}</div>
    <form class="query-form" @submit.prevent="search">
      <div class="filter-fields">
        <label>
          用户关键字
          <input
            v-model.trim="filters.keyword"
            maxlength="50"
            placeholder="用户名或昵称包含…"
          />
        </label>
        <label>
          用户状态
          <select aria-label="用户状态" v-model="filters.status">
            <option value="">全部</option>
            <option value="ACTIVE">正常</option>
            <option value="DISABLED">禁用</option>
            <option value="DELETED">已注销</option>
          </select>
        </label>
        <label>
          用户角色
          <select aria-label="用户角色" v-model="filters.role">
            <option value="">全部</option>
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
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
        <button
          type="button"
          class="secondary"
          :disabled="loading"
          @click="load"
        >
          刷新
        </button>
      </div>
    </form>
    <div v-if="loading" class="empty" role="status">正在加载用户…</div>
    <div v-else-if="!users.length" class="empty">没有符合条件的用户。</div>
    <div v-else class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>用户名</th>
            <th>昵称</th>
            <th>状态</th>
            <th>角色</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.username }}</td>
            <td>{{ user.nickname }}</td>
            <td>{{ user.status }}</td>
            <td>{{ user.role }}</td>
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
