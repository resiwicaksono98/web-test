<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="z-10 mb-14 bg-white mt-28 md:mt-0">
    <!-- Main information about Sales and Waitress Part Time services -->
    <div class="flex justify-between gap-4 container px-4 lg:mx-16">
      <div class="flex flex-col justify-center">
        <div class="text-shadow text-5xl lg:text-6xl font-manrope font-extrabold text-secondary">
          Maksimallin<br />Bisnis Kamu.
        </div>
        <p class="text-shadow mt-4 text-[#564E4E] text-2xl lg:text-[26px] font-normal">
          Dengan rekrut Sales dan <br />
          Waitress Part Time. <br />
          Kembangin bisnis jadi lebih <br />
          aman.
        </p>
        <div class="flex items-center gap-4 mt-12">
          <div class="bg-[#FAF8FD] py-4 px-6 text-center rounded-2xl shadow-card text-primary">
            <h5 class="md:text-lg text-secondary">Sales</h5>
            <p class="mt-1 text-xs md:text-sm text-secondary">Mulai dari 15k / <br />Jam</p>
            <Button
              @click="$router.push('/event-schedule/create?sales')"
              class="mt-2 py-1 text-xs md:text-sm rounded-xl px-2 font-bold text-[#FAF8FD]"
              >Pesan Sekarang</Button
            >
          </div>
          <div class="bg-[#FAF8FD] py-4 px-6 text-center rounded-2xl shadow-card text-primary">
            <h5 class="md:text-lg text-secondary">Waitress</h5>
            <p class="mt-1 text-xs md:text-sm text-secondary">
              Mulai dari 12.5k / <br />
              Jam
            </p>
            <Button
              class="mt-2 py-1 text-xs md:text-sm rounded-xl px-2 font-bold text-[#FAF8FD]"
              @click="$router.push('/event-schedule/create?waitress')"
              >Pesan Sekarang</Button
            >
          </div>
        </div>
      </div>
      <div class="hidden md:block md:h-[700px] lg:h-[700px] lg:w-[850px]">
        <Vue3Lottie :animationData="LottieHomepage1" :noMargin="true" />
      </div>
    </div>
    <!-- Why Choose Us -->
    <div class="grid md:grid-cols-2 gap-4 mt-12 md:mt-4 px-4 lg:mx-16">
      <div class="relative lg:h-[490px] lg:w-[676px]">
        <Vue3Lottie :animationData="LottieHomepage2" :noMargin="true" />
      </div>
      <div class="">
        <div class="text-2xl lg:text-[32px] font-medium mb-8">
          Gaspollin Cari Cuan, Dengan Lebih <br />
          Gampang Cari Karyawan Part Time.
        </div>
        <div class="flex gap-4 mb-4">
          <div class="mt-1">
            <Icon name="mdi:dollar" class="h-8 w-8" />
          </div>
          <div>
            <div class="font-medium text-xl lg:text-[28px]">Tanpa Biaya Pendaftaran</div>
            <div class="font-light lg:text-xl">
              Langsung pesan karyawan part-time, dan tentukan kecocokannya dengan kebutuhanmu.
            </div>
          </div>
        </div>
        <div class="flex gap-4 mb-4">
          <div class="mt-1">
            <Icon name="mdi:user-search-outline" class="h-8 w-8" />
          </div>
          <div>
            <div class="font-medium text-xl lg:text-[28px]">Pencarian Karyawan Yang Praktis</div>
            <div class="font-light lg:text-xl">
              Butuh part-timer dalam waktu kurang dari 1 Hari? Buat lowongannya sekarang, kami akan
              langsung datangkan!
            </div>
          </div>
        </div>
        <div class="flex gap-4 mb-4">
          <div class="mt-1">
            <Icon name="mdi:shield-account-variant-outline" class="h-8 w-8" />
          </div>
          <div>
            <div class="font-medium text-xl lg:text-[28px]">Karyawan Part Time Berpengalaman</div>
            <div class="font-light lg:text-xl">
              Gak perlu khawatir dengan karyawan yang gabisa kerja, Semua Mitra Kami telah dilatih
              dan dibekali dengan pengetahuan dan pengalaman pada bidangnya !
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Promo banner -->
    <div class="mt-12 mb-8 mx-6 md:mx-16">
      <Carousel
        :items-to-show="1"
        :autoplay="2000"
        :wrapAround="true"
        class="shadow-card-swiper rounded-xl"
      >
        <Slide v-for="banner in promoBanners" :key="banner.title">
          <div class="h-[300px] text-center flex items-center justify-center text-4xl font-bold">
            {{ banner.title }}
          </div>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
    <!--  Join Sakutambah as sakuer  -->
    <div class="bg-[#EEE2FA] mt-20">
      <div class="mx-6 lg:mx-16 py-10">
        <img src="@/assets/images/logo-sakutambah.png" alt="Logo Sakutambah" class="h-16" />
        <div class="grid grid-cols-1 md:grid-cols-2 items-center">
          <div class="mt-6">
            <Vue3Lottie :animationData="LottieHomepage3" />
          </div>
          <div class="mt-6">
            <div class="text-2xl md:text-4xl font-extrabold">Mau Jadi Pekerja Paruh Waktu?</div>
            <div class="mt-4 text-[14px] lg:text-[22px] font-light">
              Gaspoll.in didukung oleh Sakutambah dalam menyediakan mitra pekerja paruh waktu yang
              terbaik. Sakutambah membuka peluang untuk masyarakat Indonesia yang ingin lebih
              mengembangkan diri dan memakai waktunya untuk hal yang lebih bermanfaat.
            </div>
            <button class="py-2 px-4 text-white mt-6 text-lg rounded-xl bg-[#5F2B8C] font-bold">
              Gabung Sakutambah
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Partners -->
    <div class="md:mx-16 mt-32">
      <div class="text-center text-[32px] font-semibold mb-7">Trusted By</div>
      <Carousel
        v-bind="partnerSettings.settings"
        :autoplay="3000"
        :wrapAround="true"
        :breakpoints="partnerSettings.breakpoints"
      >
        <Slide v-for="partner in partners" :key="partner.name">
          <img :src="partner.image" :alt="partner.name" class="h-20" />
        </Slide>
      </Carousel>
    </div>
    <!-- Testimonial -->
    <div class="mx-4 lg:mx-16 mt-32">
      <div class="text-center text-2xl lg:text-[40px] font-medium mb-[58px]">
        What they're saying about Gaspollin
      </div>
      <Carousel :items-to-show="1" :autoplay="5000" :wrapAround="true">
        <Slide v-for="testi in testiomonials" :key="testi.name">
          <div
            class="flex justify-center items-center text-center gap-12 w-full px-12 md:px-20 lg:px-24"
          >
            <div class="hidden lg:block">
              <img
                :src="testi.profile"
                alt="Profile"
                class="h-20 w-20 lg:h-[296px] lg:w-[296px] rounded-full"
              />
            </div>
            <div class="flex flex-col gap-10 justify-center text-center lg:justify-start">
              <div class="flex items-center gap-8 justify-center">
                <div class="font-normal text-sm lg:text-[30px]">
                  {{ testi.name }}, {{ testi.job }}
                </div>
                <div class="lg:text-[30px] font-medium">|</div>
                <div class="font-bold lg:text-[30px]">{{ testi.work }}</div>
              </div>
              <div
                class="lg:max-w-[708px] italic font-medium lg:text-[32px] text-center md:text-start"
              >
                “{{ testi.testimonial }}“
              </div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>
<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import LottieHomepage1 from '@/assets/lottie/homepage1.json'
import LottieHomepage2 from '@/assets/lottie/homepage2.json'
import LottieHomepage3 from '@/assets/lottie/homepage3.json'
import Button from '@/components/ui/Button.vue'
import Icon from '@/components/ui/Icon.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref } from 'vue'
import BankBTN from '@/assets/images/partner/btn.png'
import PigMeUp from '@/assets/images/partner/pigmeup.png'
import SayurBox from '@/assets/images/partner/sayurbox.png'
import Isse from '@/assets/images/partner/isse.png'
import Silyco from '@/assets/images/partner/silyco.png'
import SultanCare from '@/assets/images/partner/sultancare.png'
import Kimbo from '@/assets/images/partner/kimbo.png'
import AtapLaniv from '@/assets/images/partner/ataplaniv.png'
import PopIce from '@/assets/images/partner/popice.png'

const promoBanners = ref([
  { icon: 'iconoir:developer', title: 'Banner Promo' },
  { icon: 'iconoir:design-nib', title: 'Banner Promo' }
])

const testiomonials = ref([
  {
    name: 'John Doe',
    job: 'Sales',
    work: 'Kimbo',
    profile: 'https://picsum.photos/200/300',
    testimonial:
      'Selama menggunakan aplikasi ini, saya telah menerima layanan yang berkualitas. Dan bisa mendapatkan pekerja yang bertanggungjawab.'
  },
  {
    name: 'Mark Don',
    job: 'Marketing',
    work: 'Mayora',
    profile: 'https://picsum.photos/200/300',
    testimonial:
      'Selama menggunakan aplikasi ini, saya telah menerima layanan yang berkualitas. Dan bisa mendapatkan pekerja yang bertanggungjawab.'
  }
])

const partners = ref([
  {
    name: 'Bank BTN',
    image: BankBTN
  },
  {
    name: 'Pig Me Up',
    image: PigMeUp
  },
  {
    name: 'Sayur Box',
    image: SayurBox
  },
  {
    name: 'Isse',
    image: Isse
  },
  {
    name: 'Silyco',
    image: Silyco
  },
  {
    name: 'Sultan Care',
    image: SultanCare
  },
  {
    name: 'Kimbo',
    image: Kimbo
  },
  {
    name: 'Atap Laniv',
    image: AtapLaniv
  },
  {
    name: 'Pop Ice',
    image: PopIce
  }
])

const partnerSettings = ref({
  settings: {
    itemsToShow: 3,
    snapAlign: 'center'
  },
  breakpoints: {
    // 700px and up
    700: {
      itemsToShow: 9,
      snapAlign: 'center'
    }
  }
})
</script>

<style lang="scss">
.text-shadow {
  text-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
}
.shadow-card {
  box-shadow: 0px 4px 5px 0px #00000040;
}

.shadow-card-swiper {
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: #82828280;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.carousel__pagination-button::after {
  height: 10px;
  width: 10px;
  border-radius: 50% !important;
}

.carousel__prev,
.carousel__next {
  background-color: black;
  height: 25px !important;
  width: 25px !important;
  border-radius: 50%;
  .carousel__icon {
    font-size: 100px;
    color: white;
  }

  @media screen and (min-width: 768px) {
    height: 50px !important;
    width: 50px !important;
  }
}
</style>
