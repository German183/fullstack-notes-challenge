<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="app-container">
    <AppHeader />

    <main class="content">
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.app-container {
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f9fafb;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 2rem 1rem;
  max-width: 1100px;
  margin: 0 auto;
}
</style>
