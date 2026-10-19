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
  async function changePassword() {
    busy.value = true;
    error.value = '';
    try {
      await csrf();
      await api.post('/auth/password', password);
      clearCredentials();
      auth.user = null;
      await router.push('/login');
    } catch (e) {
      error.value = e.message;
    } finally {
      busy.value = false;
      password.currentPassword = '';
      password.newPassword = '';
    }
  }
  async function saveProfile() {
    busy.value = true;
    error.value = '';
    try {
      auth.user = await api.put('/account/profile', profile);
      message.value = '资料已保存';
    } catch (e) {
      error.value = e.message;
    } finally {
      busy.value = false;
    }
  }
  async function logoutAll() {
    try {
      await api.post('/auth/logout-all');
      clearCredentials();
      auth.user = null;
      await router.push('/login');
    } catch (e) {
      error.value = e.message;
    }
  }
  async function deactivate() {
    if (!confirm('停用后将不能再登录。确定注销账户？')) return;
    try {
      await api.delete('/account');
      clearCredentials();
      auth.user = null;
      await router.push('/login');
    } catch (e) {
      error.value = e.message;
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
      <section class="card">
        <h2>修改密码</h2>
        <p class="muted">修改后需要重新登录。</p>
        <form class="stack" @submit.prevent="changePassword">
          <label>
            当前密码
            <input
              v-model="password.currentPassword"
              type="password"
              autocomplete="current-password"
              required
              maxlength="64"
            />
          </label>
          <label>
            新密码
            <input
              v-model="password.newPassword"
              type="password"
              autocomplete="new-password"
              required
              minlength="12"
              maxlength="64"
            />
          </label>
          <button :disabled="busy">更新密码</button>
        </form>
      </section>
    </div>
    <div class="grid">
      <section class="card">
        <h2>编辑资料</h2>
        <form class="stack" @submit.prevent="saveProfile">
          <label>
            昵称
            <input v-model="profile.nickname" required maxlength="50" />
          </label>
          <label>
            邮箱
            <input v-model="profile.email" type="email" maxlength="254" />
          </label>
          <button :disabled="busy">保存资料</button>
        </form>
        <p class="caption">邮箱尚未验证，请确认填写的是本人邮箱。</p>
      </section>
      <section class="card">
        <h2>设备与账户</h2>
        <p class="muted">
          退出所有设备会立即使全部访问与刷新凭据失效。注销账户采用状态变更，用户名将保留。
        </p>
        <div class="actions">
          <button class="secondary" @click="logoutAll">退出所有设备</button>
          <button class="danger" @click="deactivate">注销账户</button>
        </div>
      </section>
    </div>
  </template>
</template>
