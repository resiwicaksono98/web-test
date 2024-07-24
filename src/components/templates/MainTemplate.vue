<template>
  <div>
    <Navbar />
    <div class="bg-[#F8F8F8]">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/container/Navbar.vue'
import Footer from '@/components/container/Footer.vue'
</script>
