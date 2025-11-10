<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const userName = ref('')
const router = useRouter()

const handleLogin = () => {
  if (userName.value.trim()) {
    localStorage.setItem('userName', userName.value.trim())
    router.push('/')
    location.reload() // fuerza que se recargue el header
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-card">
      <h1>Bienvenido a tus Notas 📝</h1>
      <p>Ingresá tu nombre para continuar</p>

      <form @submit.prevent="handleLogin">
        <input
          v-model="userName"
          type="text"
          placeholder="Tu nombre..."
          class="login-input"
        />
        <button type="submit" class="login-button">
          Entrar
        </button>
      </form>
    </div>
  </div>
</template>


<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9fafb;
  animation: fadeIn 0.6s ease-in-out;
}

.login-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 380px;
  text-align: center;
  transition: transform 0.3s ease;
}

.login-card:hover {
  transform: translateY(-3px);
}

.login-card h1 {
  font-size: 1.6rem;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.login-card p {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login-input {
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.login-input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
}

.login-button {
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.25s ease, transform 0.15s ease;
}

.login-button:hover {
  background-color: #1d4ed8;
  transform: scale(1.02);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
