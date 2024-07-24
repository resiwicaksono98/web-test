<script setup>
import { RouterView } from 'vue-router'
import MainTemplate from './components/templates/MainTemplate.vue'
import { useLoaderStore } from './stores/loaderStore'
import { storeToRefs } from 'pinia'

const { isLoading } = storeToRefs(useLoaderStore())
</script>

<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
    <div class="loader"></div>
  </div>
  <div v-else>
    <MainTemplate>
      <RouterView />
    </MainTemplate>
  </div>
</template>

<style lang="scss">
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: #5f2b8c;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
