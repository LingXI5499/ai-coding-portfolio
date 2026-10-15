<script setup lang="ts">
import EditorPage from "./pages/EditorPage.vue";
import PrintPage from "./pages/PrintPage.vue";
const printing = window.location.pathname === "/print";
</script>
<template><PrintPage v-if="printing" /><EditorPage v-else /></template>
