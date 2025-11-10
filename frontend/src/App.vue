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

<style>
/* Reset/normalización básica (global) */
* { box-sizing: border-box; }
html, body, #app { height: 100%; margin: 0; padding: 0; }
body { -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; }

.app-container {
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f9fafb;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100svh;
}

/* Main content - ocupa todo el espacio disponible entre header y footer */
.content {
  flex: 1 1 auto;
  padding: 1.25rem 1rem;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

/* Asegurarse que footer no se expanda ni empuje*/
.app-footer {
  flex-shrink: 0;
}

.app-header {
  flex: 0 0 auto;
}
</style>

