<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="mx-4 lg:mx-16 pt-8 text-[#828282]">
      <div class="h-[1px] bg-[#828282]"></div>
      <div class="my-11 flex justify-center gap-20 lg:text-[22px]">
        <div class="flex flex-col gap-2">
          <div class="font-extrabold lg:text-[26px] font-manrope">Layanan Kami</div>
          <div class="font-manrope">Sales</div>
          <div class="font-manrope">Waitress</div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="font-extrabold lg:text-[26px] font-manrope">Tentang Kami</div>
          <div class="font-manrope">Kontak</div>
          <div class="font-manrope">FAQ</div>
          <div class="font-manrope">About</div>
        </div>
      </div>
      <div class="h-[1px] bg-[#828282]"></div>
      <div class="flex justify-center items-center gap-4 lg:gap-[108px] py-4 f">
        <div class="font-manrope font-extrabold lg:text-[40px]">LOGO</div>
        <div class="text-sm lg:text-xl font-light">© 2024 | Nama Perusahaan</div>
        <div class="flex gap-2 items-center">
          <Icon name="hugeicons:instagram" class="lg:h-[32px] lg:w-[32px]" />
          <Icon name="ic:baseline-whatsapp" class="lg:h-[32px] lg:w-[32px]" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Icon from '../ui/Icon.vue'
</script>
<style lang=""></style>
