import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NoteView from '../views/NoteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/nota/:id',
      name: 'note',
      component: NoteView,
    },
    // Redirección para rutas no existentes
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
