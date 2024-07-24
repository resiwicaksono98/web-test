<template>
  <nav class="fixed top-0 w-full bg-white text-black p-4 px-10 z-50 shadow-md">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-10">
        <div class="logo text-primary-dark text-2xl font-extrabold font-manrope">GASPOLL.IN</div>
        <div class="text-primary font-semibold font-manrope">Waitress Kami</div>
        <div class="text-primary font-semibold font-manrope">Sales Kami</div>
      </div>
      <div class="flex items-center gap-6">
        <!-- User not logged in -->
        <div class="flex items-center gap-6" v-if="!user">
          <Button class="py-1 rounded-full cursor-pointer" @click="isOpen = true"
            >Masuk/Daftar</Button
          >
        </div>
      </div>
    </div>
  </nav>
  <!-- Dialog Login or Register -->
  <Dialog
    :open="isOpen"
    @close="isOpen = false"
    class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40"
  >
    <LoginRegister @close="isOpen = false" />
  </Dialog>
</template>
<script setup>
import { ref } from 'vue'
import Button from '../ui/Button.vue'
import LoginRegister from './LoginRegister.vue'
import { Dialog } from '@headlessui/vue'
import Icon from '../ui/Icon.vue'
import { onMounted } from 'vue'

const isOpen = ref(false)
const user = ref(false)
</script>
<style lang=""></style>
