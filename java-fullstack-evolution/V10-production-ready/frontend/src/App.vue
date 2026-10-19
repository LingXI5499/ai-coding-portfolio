<script setup>
  import { auth } from './state';
</script>
<template>
  <div class="shell">
    <aside class="sidebar">
      <RouterLink class="brand" to="/">
        <span class="brand-mark">J</span>
        进化实验室
      </RouterLink>
      <small>JAVA FULL-STACK / V10</small>
      <nav class="nav">
        <RouterLink to="/account">我的账户</RouterLink>
        <RouterLink v-if="auth.user" to="/files">文件练习</RouterLink>
        <RouterLink v-if="auth.user?.role === 'ADMIN'" to="/dashboard">
          统计与审计
        </RouterLink>
        <RouterLink to="/login">登录</RouterLink>
        <RouterLink to="/register">创建账户</RouterLink>
        <RouterLink v-if="auth.user?.role === 'ADMIN'" to="/admin">
          用户管理
        </RouterLink>
        <RouterLink to="/reset-password">找回密码</RouterLink>
      </nav>
      <div class="sidebar-foot">
        每一次演进，都有迹可循。
        <br />
        Java Full-Stack Evolution Lab
      </div>
    </aside>
    <main class="workspace">
      <header class="topbar">
        <span>实验室 / 账户中心</span>
        <span class="badge">V10 · JWT + Refresh Token</span>
      </header>
      <section class="intro">
        <div>
          <div class="eyebrow">EXPERIMENT 10 / ACCOUNT WORKSPACE</div>
          <h1>你的账户，始终由你掌控。</h1>
          <p>
            从身份认证到安全边界，在可运行的工程中理解每一次请求背后的信任。
          </p>
        </div>
      </section>
      <RouterView />
    </main>
  </div>
</template>
