import { ref, reactive, computed, onBeforeUnmount } from 'vue';
import { api } from '../api';

/** 只保存当前页；筛选、翻页、计数始终交给后端，忽略晚返回的旧请求。 */
export function usePagedList(endpoint, initialFilters) {
  const records = ref([]),
    loading = ref(false),
    error = ref('');
  const filters = reactive({ ...initialFilters });
  const applied = ref({ ...initialFilters });
  const pagination = reactive({
    page: 1,
    pageSize: 10,
    total: 0,
    totalPages: 0,
  });
  const hasFilters = computed(() =>
    Object.values(applied.value).some((value) => value !== '' && value != null),
  );
  let sequence = 0;
  async function load() {
    const request = ++sequence;
    loading.value = true;
    error.value = '';
    try {
      const params = Object.fromEntries(
        Object.entries(applied.value).filter(
          ([, value]) => value !== '' && value != null,
        ),
      );
      const result = await api.get(endpoint, {
        params: {
          ...params,
          page: pagination.page,
          pageSize: pagination.pageSize,
        },
      });
      if (request !== sequence) return;
      records.value = result.records;
      Object.assign(pagination, {
        total: result.total,
        totalPages: result.totalPages,
      });
      if (pagination.page > Math.max(1, result.totalPages)) {
        pagination.page = Math.max(1, result.totalPages);
        return load();
      }
    } catch (failure) {
      if (request === sequence) {
        error.value = failure.message;
      }
    } finally {
      if (request === sequence) loading.value = false;
    }
  }
  function search() {
    applied.value = { ...filters };
    pagination.page = 1;
    return load();
  }
  function reset() {
    Object.assign(filters, initialFilters);
    return search();
  }
  function changePage(value) {
    if (
      loading.value ||
      value < 1 ||
      value > Math.max(1, pagination.totalPages)
    )
      return;
    pagination.page = value;
    return load();
  }
  function changePageSize(value) {
    pagination.pageSize = Number(value);
    pagination.page = 1;
    return load();
  }
  onBeforeUnmount(() => {
    sequence++;
  });
  return {
    records,
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
  };
}
