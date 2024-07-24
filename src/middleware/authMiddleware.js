import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'

export const authMiddleware = async (to, from, next) => {
  try {
    const authStore = useAuthStore()
    await authStore.me()
    const { user } = storeToRefs(authStore)
    if (to.meta.requiresAuth) {
      if (!user.value) {
        next({ name: 'home' })
      }
    }
    next()
  } catch (error) {
    next({ name: 'home' })
  }
}
