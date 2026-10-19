<script setup>
  import { ref, reactive, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { api, csrf, restore, logout, clearCredentials } from '../api';
  import { auth } from '../state';
  const busy = ref(true),
    error = ref(''),
    message = ref('');
  const password = reactive({ currentPassword: '', newPassword: '' });
  const profile = reactive({ nickname: '', email: '' });
  const router = useRouter();
  onMounted(async () => {
    try {
      auth.user = await restore();
      profile.nickname = auth.user.nickname;
      profile.email = auth.user.email || '';
    } catch (e) {
      auth.user = null;
    } finally {
      busy.value = false;
    }
  });
  async function signout() {
    busy.value = true;
    try {
      await logout();
      auth.user = null;
      await router.push('/login');
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
  <div v-if="busy" class="empty" role="status">正在加载账户…</div>
  <section v-else-if="!auth.user" class="card empty">
    <h2>你尚未登录</h2>
    <p>登录后查看个人资料与安全设置。</p>
    <RouterLink class="button" to="/login">前往登录</RouterLink>
  </section>
  <template v-else>
    <div class="stat-row">
      <div class="stat">
        <small>当前账户</small>
        <strong>{{ auth.user.nickname }}</strong>
      </div>
      <div class="stat">
        <small>账户状态</small>
        <strong>
          {{ auth.user.status === 'ACTIVE' ? '正常' : auth.user.status }}
        </strong>
      </div>
      <div class="stat">
        <small>角色</small>
        <strong>{{ auth.user.role }}</strong>
      </div>
    </div>
    <div class="grid">
      <section class="card">
        <h2>个人资料</h2>
        <div
          v-for="key in ['username', 'nickname', 'email', 'status']"
          :key="key"
          class="profile-line"
        >
          <span>
            {{
              {
                username: '用户名',
                nickname: '昵称',
                email: '邮箱',
                status: '状态',
              }[key]
            }}
          </span>
          <strong>{{ auth.user[key] || '未设置' }}</strong>
        </div>
        <div class="actions">
          <button class="secondary" @click="signout">退出当前设备</button>
        </div>
      </section>
    </div>
  </template>
</template>
