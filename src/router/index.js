import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { authMiddleware } from '../../middleware/AuthMiddleware'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

router.beforeEach(authMiddleware)

export default router
