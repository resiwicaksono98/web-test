import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateEventSchedule from '../views/CreateEventSchedule.vue'
import PaymentMethod from '../views/PaymentMethod.vue'
import SearchSakuer from '../views/SearchSakuer.vue'
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
      path: '/event-schedule',
      children: [
        {
          path: 'create',
          name: 'create-event-schedule',
          component: CreateEventSchedule,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: ':id/payment-method',
          name: 'payment-method',
          component: PaymentMethod
        }
      ]
    },
    {
      path: '/search-sakuer',
      name: 'search-sakuer',
      component: SearchSakuer
    }
  ]
})

export default router
