<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="fixed top-0 w-full bg-white text-black p-4 px-10 z-50 shadow-md">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-10">
        <div class="logo text-primary-dark text-2xl font-extrabold font-manrope">GASPOLL.IN</div>
        <div class="text-primary font-semibold font-manrope">Waitress Kami</div>
        <div class="text-primary font-semibold font-manrope">Sales Kami</div>
      </div>
      <div class="flex items-center gap-6">
        <!-- User logged in -->
        <div class="flex items-center gap-6" v-if="user">
          <!-- Profile -->
          <Popover class="relative pt-1" v-slot="{ open }">
            <PopoverButton
              @click="dialogProfile = !dialogProfile"
              class="outline-none ring-0 flex items-center gap-1"
            >
              <img
                :src="user?.demander?.photoProfileFile || '/src/assets/images/avatar.png'"
                alt="avatar"
                class="h-10 w-10 rounded-full"
              />
              <Icon name="gg:chevron-down" class="h-6 w-6" v-if="!open" />
              <Icon name="gg:chevron-up" class="h-6 w-6" v-else />
            </PopoverButton>
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-y-0 opacity-100"
              leave-to-class="translate-y-1 opacity-0"
            >
              <PopoverPanel
                v-if="open"
                class="absolute right-0 mt-3 bg-white p-5 z-50 rounded-lg w-52 shadow-xl border"
              >
                <Button
                  @click="logout"
                  class="bg-red px-4 py-1 rounded-md flex items-center w-full justify-center gap-1"
                >
                  <Icon name="gg:log-out" class="h-3 w-3 md:h-4 md:w-4" />
                  Keluar
                </Button>
              </PopoverPanel>
            </transition>
          </Popover>
        </div>
        <!-- User not logged in -->
        <div class="flex items-center gap-6" v-else>
          <Button class="py-1 rounded-full cursor-pointer" @click="dialogLoginRegister = true"
            >Masuk/Daftar</Button
          >
        </div>
      </div>
    </div>
  </nav>
  <!-- Dialog Login or Register -->
  <Dialog
    :open="dialogLoginRegister"
    @close="dialogLoginRegister = false"
    class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40"
  >
    <Login @close="dialogLoginRegister = false" />
  </Dialog>
</template>
<script setup>
import { ref } from 'vue'
import Button from '../ui/Button.vue'
import Login from './Login.vue'
import { Dialog } from '@headlessui/vue'
import { useGetUser } from '../../hooks/useGetUser'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import Icon from '../ui/Icon.vue'
import { useAuthStore } from '@/stores/authStore'

const user = useGetUser()
const auth = useAuthStore()
const dialogLoginRegister = ref(false)

function logout() {
  auth.logout()

  dialogLoginRegister.value = false
}
</script>
<style lang=""></style>
