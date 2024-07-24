<template>
  <div class="">
    <div class="bg-[#F8F8F8] pt-24">
      <div class="md:mx-56 bg-white">
        <!-- Header -->
        <div class="flex justify-center items-center">
          <div class="h-[100px] w-[500px] md:h-[281px] md:w-[500px]">
            <Vue3Lottie :animationData="eventSchedule1" />
          </div>
          <div class="md:max-w-lg max-w-sm">
            <div class="lg:text-[76px] font-semibold">Sales</div>
            <div class="md:text-2xl text-xs font-light">
              Layanan penjualan oleh SPG/SPB untuk bisnismu agar berjalan lancar dan berhasil.
            </div>
          </div>
        </div>
        <div class="px-5 md:px-12 mt-8">
          <!-- Form -->
          <Form>
            <div class="flex flex-col gap-2 mb-4">
              <Label name="Pekerjaan" />
              <SingleSelect
                name="job"
                :options="['sales', 'waitress']"
                :placeholder="'Pilih Job'"
              />
            </div>
            <div class="flex flex-col gap-2 mb-4">
              <Label name="Jumlah" />
              <Input name="sakuerNeeded" :placeholder="'Total sakuer'" />
            </div>
            <div class="flex flex-col gap-2 mb-4">
              <Label name="Jenis Kelamin" />
              <SingleSelect
                name="gender"
                :options="['Laki-Laki', 'Perempuan', 'Laki-Laki dan Perempuan']"
                :placeholder="'Pilih Jenis Kelamin'"
              />
            </div>
            <div class="flex flex-col gap-2 mb-12">
              <Label name="Syarat Dan Deskripsi" />
              <Input name="description" :placeholder="'Syarat dan Deskripsi'" />
            </div>
            <div class="flex flex-col gap-4 mb-12">
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-4">
                  <Icon name="system-uicons:location" class="h-8 w-8" />
                  <Label name="Pilih Lokasi" />
                </div>
                <div class="text-secondary text-xl">Pilih</div>
              </div>
              <div class="text-xl font-normal text-[#64748B] mx-12">
                Jl. Raya Kresek No.1 3, RT.1/RW.8, Duri Kosambi, Kecamatan Cengkareng, Kota Jakarta
                Barat, Daerah Khusus Ibukota Jakarta 11750, Indonesia
              </div>
              <div class="text-xl font-normal text-[#64748B] mx-12">Pagar Putih</div>
            </div>
            <div class="flex flex-col gap-4 mb-4">
              <Label name="Jenis Sakuer" />
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import eventSchedule1 from '@/assets/lottie/eventschedule1.json'
import { Form } from 'vee-validate'
import SingleSelect from '@/components/ui/SingleSelect.vue'
import Label from '@/components/ui/Label.vue'
import Input from '@/components/ui/Input.vue'
import Icon from '@/components/ui/Icon.vue'
</script>
<style lang=""></style>
