<script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { api } from '../api';
  const route = useRoute(),
    employee = ref(null),
    error = ref('');
  onMounted(async () => {
    try {
      employee.value = await api.get(`/employees/${route.params.id}`);
    } catch (e) {
      error.value = e.message;
    }
  });
</script>
<template>
  <section class="card">
    <div v-if="error" class="notice error" role="alert">{{ error }}</div>
    <template v-else-if="employee">
      <h2>{{ employee.name }}</h2>
      <div
        v-for="key in ['id', 'gender', 'age', 'phone', 'department', 'salary']"
        :key="key"
        class="profile-line"
      >
        <span>{{ key }}</span>
        <strong>{{ employee[key] }}</strong>
      </div>
      <div class="actions">
        <RouterLink class="button" :to="`/employees/${employee.id}/edit`">
          编辑资料
        </RouterLink>
        <RouterLink to="/employees">返回名册</RouterLink>
      </div>
    </template>
    <p v-else>正在加载…</p>
  </section>
</template>
