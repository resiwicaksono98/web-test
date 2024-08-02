<template>
  <div class="pb-28 mt-12">
    <Vue3Lottie :animationData="lottieSearchSakuer" :height="500" :width="500" />
    <div class="text-center text-3xl font-semibold">
      Kami lagi cariin <br />
      sakuer-nya nih buat kamu!
    </div>
  </div>
</template>
<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import lottieSearchSakuer from '@/assets/lottie/searchsakuer.json'
</script>
<style lang=""></style>
