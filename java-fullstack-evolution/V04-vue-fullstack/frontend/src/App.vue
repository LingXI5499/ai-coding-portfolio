<script setup></script>
<template>
  <div class="shell">
    <aside class="sidebar">
      <RouterLink class="brand" to="/">
        <span class="brand-mark">J</span>
        进化实验室
      </RouterLink>
      <small>JAVA FULL-STACK / V04</small>
      <nav class="nav">
        <RouterLink to="/employees">员工名册</RouterLink>
        <RouterLink to="/employees/new">添加员工</RouterLink>
      </nav>
      <div class="sidebar-foot">
        每一次演进，都有迹可循。
        <br />
        Java Full-Stack Evolution Lab
      </div>
    </aside>
    <main class="workspace">
      <header class="topbar">
        <span>实验室 / 员工工作台</span>
        <span class="badge">V04 · Vue 3</span>
      </header>
      <section class="intro">
        <div>
          <div class="eyebrow">EXPERIMENT 04 / EMPLOYEE WORKSPACE</div>
          <h1>让数据与界面，保持同步。</h1>
          <p>从组件到 REST API，再到数据库。一个完整、可观察的全栈请求链路。</p>
        </div>
      </section>
      <RouterView />
    </main>
  </div>
</template>
