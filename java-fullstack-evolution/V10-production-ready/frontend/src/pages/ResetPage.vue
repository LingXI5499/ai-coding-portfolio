<script setup>
  import { ref, reactive } from 'vue';
  import { api, csrf } from '../api';
  const username = ref(''),
    form = reactive({ token: '', newPassword: '' }),
    error = ref(''),
    message = ref(''),
    busy = ref(false);
  async function request() {
    busy.value = true;
    error.value = '';
    try {
      await csrf();
      await api.post('/auth/forgot-password', { username: username.value });
      message.value = '如该账户可用且已设置邮箱，将发送重置说明。';
    } catch (e) {
      error.value = e.message;
    } finally {
      busy.value = false;
    }
  }
  async function reset() {
    busy.value = true;
    error.value = '';
    try {
      await csrf();
      await api.post('/auth/reset-password', form);
      form.token = '';
      form.newPassword = '';
      message.value = '密码已重置，请重新登录。';
    } catch (e) {
      error.value = e.message;
    } finally {
      busy.value = false;
    }
  }
</script>
<template>
  <div v-if="error" class="notice error" role="alert">{{ error }}</div>
  <div v-if="message" class="notice" role="status">{{ message }}</div>
  <div class="grid">
    <section class="card">
      <h2>找回密码</h2>
      <p class="muted">重置说明会发送至账户中登记的邮箱。</p>
      <form class="stack" @submit.prevent="request">
        <label>
          用户名
          <input
            v-model="username"
            required
            pattern="[a-z0-9_]{3,32}"
            autocomplete="username"
          />
        </label>
        <button :disabled="busy">发送重置说明</button>
      </form>
    </section>
    <section class="card">
      <h2>设置新密码</h2>
      <form class="stack" @submit.prevent="reset">
        <label>
          邮件中的重置令牌
          <input
            v-model="form.token"
            required
            maxlength="128"
            autocomplete="off"
          />
        </label>
        <label>
          新密码
          <input
            v-model="form.newPassword"
            type="password"
            required
            minlength="12"
            maxlength="64"
            autocomplete="new-password"
          />
        </label>
        <button :disabled="busy">重置密码</button>
      </form>
      <p class="caption">重置凭据 15 分钟内有效，仅可使用一次。</p>
    </section>
  </div>
</template>
