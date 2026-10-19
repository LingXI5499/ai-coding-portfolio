<script setup>
  import { ref, reactive, onMounted, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { api } from '../api';
  const route = useRoute(),
    router = useRouter();
  const editing = computed(() => !!route.params.id);
  const form = reactive({
    name: '',
    gender: '未说明',
    age: 25,
    phone: '',
    department: '',
    salary: 8000,
  });
  const busy = ref(false),
    error = ref('');
  onMounted(async () => {
    if (editing.value) {
      busy.value = true;
      try {
        const data = await api.get(`/employees/${route.params.id}`);
        for (const key of Object.keys(form)) form[key] = data[key];
      } catch (e) {
        error.value = e.message;
      } finally {
        busy.value = false;
      }
    }
  });
  async function save() {
    busy.value = true;
    error.value = '';
    try {
      if (editing.value) await api.put(`/employees/${route.params.id}`, form);
      else await api.post('/employees', form);
      await router.push('/employees');
    } catch (e) {
      error.value = e.message;
    } finally {
      busy.value = false;
    }
  }
</script>
<template>
  <section class="card">
    <div class="route-title">
      <h2>{{ editing ? '编辑员工' : '添加员工' }}</h2>
      <RouterLink to="/employees">返回名册</RouterLink>
    </div>
    <div v-if="error" class="notice error" role="alert">{{ error }}</div>
    <form @submit.prevent="save">
      <div class="form-grid">
        <label>
          姓名
          <input :disabled="busy" v-model="form.name" required maxlength="50" />
        </label>
        <label>
          性别
          <select :disabled="busy" v-model="form.gender">
            <option>未说明</option>
            <option>男</option>
            <option>女</option>
          </select>
        </label>
        <label>
          年龄
          <input
            :disabled="busy"
            v-model.number="form.age"
            type="number"
            min="18"
            max="70"
            required
          />
        </label>
        <label>
          电话
          <input :disabled="busy" v-model="form.phone" maxlength="20" />
        </label>
        <label>
          部门
          <input
            :disabled="busy"
            v-model="form.department"
            required
            maxlength="100"
          />
        </label>
        <label>
          月薪
          <input
            :disabled="busy"
            v-model.number="form.salary"
            type="number"
            min="0"
            max="99999999.99"
            step=".01"
            required
          />
        </label>
      </div>
      <div class="actions">
        <button :disabled="busy">{{ busy ? '正在保存…' : '保存员工' }}</button>
        <RouterLink to="/employees">取消</RouterLink>
      </div>
    </form>
  </section>
</template>
