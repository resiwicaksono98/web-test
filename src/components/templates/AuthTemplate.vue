<template>
  <div class="grid lg:grid-cols-2">
    <div class="relative hidden lg:block rounded-2xl">
      <img
        src="@/assets/images/auth-image.png"
        alt="Login Image"
        class="w-[550px] h-[550px] object-cover rounded-l-2xl"
      />
      <div class="absolute top-20 left-8 text-primary-medium">
        <div class="text-3xl font-medium">Hemat Lebih Banyak Biaya</div>
        <div class="mt-8 max-w-sm">
          <div class="flex items-center mt-4">
            <Icon name="tabler:check" class="w-6 h-6 mr-2" />
            <div class="text-lg flex-1">Pekerjakan hanya saat bisnis berjalan.</div>
          </div>
          <div class="flex items-center mt-4">
            <Icon name="tabler:check" class="w-6 h-6 mr-2" />
            <div class="text-lg flex-1">Biaya jasa pencarian pekerja yang lebih kecil..</div>
          </div>
          <div class="flex items-start mt-4">
            <Icon name="tabler:check" class="w-6 h-6 mr-2 flex-shrink-0" />
            <div class="text-lg flex-1">
              Aman dengan pekerja yang terverifikasi dan terlatih oleh kami...
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between max-w-xl p-4 relative">
      <div class="flex flex-col items-center mx-4 md:mx-20">
        <img
          src="@/assets/images/logo-sakutambah.png"
          alt="Sakutambah logo"
          class="h-12 md:h-20 mt-4"
        />
        <slot />
      </div>
      <!-- terms and condition -->
      <div class="text-xs mt-12 md:text-sm font-light text-gray-medium">
        Dengan bergabung, kamu setuju dengan goSPG
        <span class="underline"> Terms of Service </span> dan dengan terkadang menerima email dari
        kami. Tolong baca <span class="underline">Privacy Policy</span> kami untuk mempelajari
        bagaimana kami meggunakan data personal anda.
      </div>
    </div>
  </div>
</template>
<script setup>
import Icon from '../ui/Icon.vue'
</script>
<style lang=""></style>
