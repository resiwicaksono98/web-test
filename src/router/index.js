import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateEventSchedule from '../views/CreateEventSchedule.vue'
import { authMiddleware } from '@/middleware/authMiddleware'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/create-event-schedule',
      name: 'create-event-schedule',
      component: CreateEventSchedule,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach(authMiddleware)

export default router
