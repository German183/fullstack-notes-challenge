import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NoteView from '../views/NoteView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/nota/:id',
      name: 'note',
      component: NoteView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    // Redirección para rutas no existentes
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

// Protección de rutas — redirige al login si no hay usuario
router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('userName')
  if (!user && to.name !== 'login') {
    next({ name: 'login' })
  } else if (user && to.name === 'login') {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
