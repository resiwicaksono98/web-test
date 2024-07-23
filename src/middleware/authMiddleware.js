import { useAuthStore } from '@/stores/authStore'

export const authMiddleware = async (to, from, next) => {
  try {
    const authStore = useAuthStore()
    authStore.me()
    next()
  } catch (error) {
    next({ name: 'home' })
  }
}
