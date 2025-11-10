<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userName = ref('')

onMounted(() => {
  userName.value = localStorage.getItem('userName') || ''
})

const logout = () => {
  localStorage.removeItem('userName')
  router.push('/login')
  location.reload() // también recargamos para limpiar el header
}
</script>

<template>
  <header class="app-header">
    <h1 class="logo">📝 Mis Notas</h1>

    <div v-if="userName" class="user-info">
      <span>Bienvenido, {{ userName }}</span>
      <button @click="logout">Cerrar sesión</button>
    </div>
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
  font-size: 1.4rem;
  font-weight: 600;
  color: #3b82f6;
  margin: 0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  color: #334155;
}

.user-info span {
  font-weight: 500;
}

.user-info button {
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 0.9rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.25s ease, transform 0.15s ease;
}

.user-info button:hover {
  background-color: #dc2626;
  transform: scale(1.03);
}
</style>

