<template>
  <div>
    <Navbar />
    <slot></slot>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/container/Navbar.vue'
import Footer from '@/components/container/Footer.vue'
</script>
