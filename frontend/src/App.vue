<script setup>
import { RouterView, RouterLink } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="app-container">
    <!-- Header -->
    <header class="app-header">
      <div class="left">
        <h1 class="logo">📝 Mis Notas</h1>
      </div>

      <nav class="nav">
        <RouterLink to="/" class="nav-link" active-class="active-link">
          Inicio
        </RouterLink>
      </nav>
    </header>

    <!-- Main content -->
    <main class="content">
      <RouterView />
    </main>

    <!-- Footer -->
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

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #42b883;
  margin: 0;
}

.nav {
  display: flex;
  gap: 1.2rem;
}

.nav-link {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #42b883;
}

.active-link {
  color: #42b883;
  font-weight: 600;
  border-bottom: 2px solid #42b883;
}

.content {
  flex: 1;
  padding: 2rem 1rem;
  max-width: 1100px;
  margin: 0 auto;
}
</style>
