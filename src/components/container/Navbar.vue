<template>
  <nav class="bg-white shadow text-black p-4 px-12 z-50">
    <div class="flex items-center justify-between">
      <div class="logo">Logo</div>
      <div class="flex items-center gap-6">
        <div>Cari Waitress</div>
        <div>Cari Sales</div>
        <!-- User not logged in -->
        <div class="flex items-center gap-6" v-if="!user">
          <div class="py-1 rounded-full cursor-pointer" @click="isOpen = true">Login</div>
          <Button class="py-1 rounded-full">Daftar</Button>
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
    <Login @close="isOpen = false" />
  </Dialog>
</template>
<script setup>
import { ref } from 'vue'
import Button from '../ui/Button.vue'
import Login from './Login.vue'
import { Dialog } from '@headlessui/vue'
import Icon from '../ui/Icon.vue'

const isOpen = ref(false)
const user = ref(false)
</script>
<style lang=""></style>
