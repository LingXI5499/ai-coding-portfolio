<script setup>
  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { api, csrf } from '../api';
  const form = reactive({
    username: '',
    password: '',
    nickname: '',
    email: '',
  });
  const error = ref(''),
    busy = ref(false);
  const router = useRouter();
  async function submit() {
    busy.value = true;
    error.value = '';
    try {
      await csrf();
      await api.post('/auth/register', form);
      form.password = '';
      await router.push('/login');
    } catch (e) {
      error.value = e.message;
    } finally {
      busy.value = false;
    }
  }
</script>
<template>
  <section class="card auth-wrap">
    <div class="eyebrow">A NEW BEGINNING</div>
    <h2>创建账户</h2>
    <p class="muted">用户名使用 3–32 位小写字母、数字或下划线。</p>
    <div v-if="error" class="notice error" role="alert">{{ error }}</div>
    <form class="stack" @submit.prevent="submit">
      <label>
        用户名
        <input
          v-model="form.username"
          autocomplete="username"
          pattern="[a-z0-9_]{3,32}"
          required
        />
      </label>
      <label>
        昵称
        <input v-model="form.nickname" maxlength="50" required />
      </label>
      <label>
        邮箱（可选）
        <input
          v-model="form.email"
          type="email"
          maxlength="254"
          autocomplete="email"
        />
      </label>
      <label>
        密码
        <input
          v-model="form.password"
          type="password"
          minlength="12"
          maxlength="64"
          autocomplete="new-password"
          required
        />
        <small>12–64 字符，UTF-8 编码不超过 72 字节。</small>
      </label>
      <button :disabled="busy">{{ busy ? '正在创建…' : '创建账户' }}</button>
    </form>
    <p class="caption">
      已有账户？
      <RouterLink to="/login">前往登录</RouterLink>
    </p>
  </section>
</template>
