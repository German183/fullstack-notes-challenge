<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'AppHeader',
  components: { RouterLink },
}
</script>

<template>
  <header class="app-header">
    <div class="logo-section">
      <h1 class="logo">📝 Mis Notas</h1>
    </div>

    <nav class="nav">
      <RouterLink to="/" class="nav-link" active-class="active-link">
        Inicio
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
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
  transition: color 0.2s, border-bottom 0.2s;
}

.nav-link:hover {
  color: #42b883;
}

.active-link {
  color: #42b883;
  font-weight: 600;
  border-bottom: 2px solid #42b883;
}
</style>
