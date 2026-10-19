<script setup>
  import { ref, computed, onMounted } from 'vue';
  import {
    ElConfigProvider,
    ElAlert,
    ElButton,
    ElInput,
    ElTable,
    ElTableColumn,
    ElPagination,
    ElEmpty,
  } from 'element-plus';
  import zhCn from 'element-plus/es/locale/lang/zh-cn';
  import { api, restore } from '../api';
  import { auth } from '../state';
  import { usePagedList } from '../composables/usePagedList';
  import ReportChart from '../components/ReportChart.vue';

  const dashboard = ref(null),
    error = ref(''),
    loading = ref(true);
  const audit = usePagedList('/admin/audit-events', {
    keyword: '',
    action: '',
  });
  const labels = { ACTIVE: '正常', DISABLED: '禁用', DELETED: '已注销' };
  const pie = computed(() => ({
    animation: false,
    tooltip: { trigger: 'item', renderMode: 'richText' },
    legend: { bottom: 0 },
    series: [
      {
        type: 'pie',
        radius: ['42%', '70%'],
        data: (dashboard.value?.userStates || []).map((item) => ({
          name: labels[item.status] || item.status,
          value: item.total,
        })),
      },
    ],
  }));
  const line = computed(() => ({
    animation: false,
    tooltip: { trigger: 'axis', renderMode: 'richText' },
    grid: { left: 38, right: 16, bottom: 32, top: 20 },
    xAxis: {
      type: 'category',
      data: (dashboard.value?.activityDays || []).map((item) =>
        item.day.slice(5),
      ),
    },
    yAxis: { type: 'value', minInterval: 1 },
    series: [
      {
        name: '审计事件',
        type: 'line',
        data: (dashboard.value?.activityDays || []).map((item) => item.total),
      },
    ],
  }));
  onMounted(async () => {
    try {
      if (!auth.user) auth.user = await restore();
      if (auth.user?.role !== 'ADMIN') throw new Error('需要管理员权限');
      dashboard.value = await api.get('/admin/dashboard');
      await audit.load();
    } catch (failure) {
      error.value = failure.message;
    } finally {
      loading.value = false;
    }
  });
</script>
<template>
  <ElConfigProvider :locale="zhCn">
    <ElAlert
      v-if="error"
      :title="error"
      type="error"
      :closable="false"
      role="alert"
    />
    <p v-if="loading" role="status">正在加载统计…</p>
    <template v-if="dashboard">
      <section class="card">
        <h2>统计与审计</h2>
        <p>
          当前共有 {{ dashboard.totalUsers }} 个账户；近七日事件按 UTC
          自然日统计。
        </p>
        <div class="report-grid">
          <section>
            <h3>账户状态</h3>
            <ReportChart
              v-if="dashboard.totalUsers"
              :option="pie"
              label="账户状态分布"
            />
            <ElEmpty v-else description="暂无账户数据" />
          </section>
          <section>
            <h3>近七日活动</h3>
            <ReportChart :option="line" label="近七日审计事件趋势" />
          </section>
        </div>
      </section>
      <section class="card">
        <h2>审计事件</h2>
        <form class="audit-query" @submit.prevent="audit.search">
          <ElInput
            v-model="audit.filters.keyword"
            aria-label="审计用户名关键字"
            placeholder="用户名包含"
            maxlength="50"
            clearable
          />
          <ElInput
            v-model="audit.filters.action"
            aria-label="审计操作"
            placeholder="操作，如 LOGIN"
            maxlength="50"
            clearable
          />
          <ElButton
            native-type="submit"
            type="primary"
            :disabled="audit.loading.value"
          >
            查询事件
          </ElButton>
          <ElButton :disabled="audit.loading.value" @click="audit.reset">
            重置
          </ElButton>
        </form>
        <ElAlert
          v-if="audit.error.value"
          :title="audit.error.value"
          type="error"
          :closable="false"
          role="alert"
        />
        <ElTable :data="audit.records.value" empty-text="没有符合条件的事件">
          <ElTableColumn prop="id" label="事件 ID" width="95" />
          <ElTableColumn prop="username" label="账户" min-width="130">
            <template #default="scope">
              {{ scope.row.username || '系统事件' }}
            </template>
          </ElTableColumn>
          <ElTableColumn prop="action" label="操作" min-width="180" />
          <ElTableColumn prop="createdAt" label="时间（UTC）" min-width="200" />
        </ElTable>
        <div class="report-pager">
          <ElPagination
            :current-page="audit.pagination.page"
            :page-size="audit.pagination.pageSize"
            :total="audit.pagination.total"
            :page-sizes="[5, 10, 20, 50, 100]"
            :disabled="audit.loading.value"
            layout="total, sizes, prev, next"
            @current-change="audit.changePage"
            @size-change="audit.changePageSize"
          />
        </div>
      </section>
    </template>
  </ElConfigProvider>
</template>
<style scoped>
  .report-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
  }
  .audit-query {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin: 20px 0;
  }
  .audit-query .el-input {
    flex: 1 1 180px;
  }
  .report-pager {
    overflow: auto;
    margin-top: 16px;
  }
  .report-pager .el-pagination {
    width: max-content;
  }
  @media (max-width: 760px) {
    .report-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
