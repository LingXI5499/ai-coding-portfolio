<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { login } from '../api';
  import { auth } from '../state';
  const username = ref(''),
    password = ref(''),
    busy = ref(false),
    error = ref('');
  const router = useRouter();
  async function submit() {
    busy.value = true;
    error.value = '';
    try {
      auth.user = await login(username.value, password.value);
      password.value = '';
      await router.push('/account');
    } catch (e) {
      error.value = e.message;
    } finally {
      busy.value = false;
    }
  }
</script>
<template>
  <section class="card auth-wrap">
    <div class="eyebrow">WELCOME BACK</div>
    <h2>登录你的账户</h2>
    <p class="muted">继续管理资料与安全设置。</p>
    <div v-if="error" class="notice error" role="alert">{{ error }}</div>
    <form class="stack" @submit.prevent="submit">
      <label>
        用户名
        <input
          v-model="username"
          name="username"
          autocomplete="username"
          maxlength="32"
          required
        />
      </label>
      <label>
        密码
        <input
          v-model="password"
          name="password"
          type="password"
          autocomplete="current-password"
          maxlength="64"
          required
        />
      </label>
      <button :disabled="busy">{{ busy ? '正在验证…' : '登录' }}</button>
    </form>
    <p class="caption">
      第一次来？
      <RouterLink to="/register">创建账户</RouterLink>
    </p>
  </section>
</template>
