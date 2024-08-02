<template>
  <div class="pb-20">
    <div class="bg-[#F8F8F8] pt-24">
      <div class="lg:mx-56 bg-white pb-16 lg:px-12 px-4 pt-8">
        <div class="text-2xl font-semibold">Metode Pembayaran</div>
        <div
          class="mt-10 flex justify-between items-center border py-2 px-4 rounded-lg bg-[#6CD99B57]"
          @click="paymentSelected.paymentMethod = 'wallet'"
        >
          <div class="flex items-center gap-6">
            <Icon name="ph:wallet-thin" class="h-8 w-8 md:h-12 md:w-12 text-secondary"></Icon>
            <div class="md:text-xl font-medium">Wallet Saku</div>
          </div>
          <div class="flex items-center gap-6">
            <div class="md:text-xl font-medium text-[#585858]">Rp.50.000</div>
            <div
              class="bg-[#49B247] rounded-full p-1 md:p-2"
              v-if="paymentSelected.paymentMethod === 'wallet'"
            >
              <Icon name="mdi:check" class="h-5 w-5 text-white"></Icon>
            </div>
          </div>
        </div>
        <!-- Virtual account -->
        <Disclosure v-slot="{ open }">
          <DisclosureButton
            class="flex justify-between items-center border py-2 px-4 rounded-lg bg-gray-200 w-full mt-6"
          >
            <div class="flex items-center gap-6">
              <Icon name="tabler:transfer" class="h-8 w-8 md:h-12 md:w-12 text-secondary" />
              <div class="md:text-xl font-medium">Virtual Account</div>
            </div>
            <div class="flex items-center gap-2">
              <div class="text-sm italic text-secondary">Segera hadir</div>
              <Icon
                name="ic:twotone-arrow-drop-down"
                :class="open ? 'rotate-180 transform' : ''"
                class="h-8 w-8 md:h-12 md:w-12 text-[#16205D]"
              />
            </div>
          </DisclosureButton>
          <!-- <DisclosurePanel class="pl-4 md:pl-24 pr-4">
            <div class="flex flex-col gap-4 mt-2">
              <div v-for="bank in banks" :key="bank.name">
                <div
                  class="flex justify-between items-center hover:underline cursor-pointer"
                  @click="
                    () => {
                      paymentSelected.type = bank.name
                      paymentSelected.paymentMethod = 'bank'
                    }
                  "
                >
                  <div class="flex items-center gap-4">
                    <img
                      :src="bank.logo"
                      alt="Logo Bank"
                      class="h-8 w-8 md:h-12 md:w-12 rounded-full"
                    />
                    <div class="md:text-xl font-medium">{{ bank.name }}</div>
                  </div>
                  <div
                    v-if="
                      paymentSelected.paymentMethod === 'bank' && paymentSelected.type === bank.name
                    "
                    class="bg-[#49B247] rounded-full p-1 md:p-2"
                  >
                    <Icon name="mdi:check" class="h-5 w-5 text-white"></Icon>
                  </div>
                </div>
              </div>
            </div>
          </DisclosurePanel> -->
        </Disclosure>
        <!-- E-payment -->
        <Disclosure v-slot="{ open }">
          <DisclosureButton
            class="flex justify-between items-center border py-2 px-4 rounded-lg bg-gray-200 w-full mt-6"
          >
            <div class="flex items-center gap-6">
              <Icon name="uiw:pay" class="h-8 w-8 md:h-12 md:w-12 text-secondary" />
              <div class="md:text-xl font-medium">E-Payment</div>
            </div>
            <div class="flex items-center gap-2">
              <div class="text-sm italic text-secondary">Segera hadir</div>
              <Icon
                name="ic:twotone-arrow-drop-down"
                :class="open ? 'rotate-180 transform' : ''"
                class="h-8 w-8 md:h-12 md:w-12 text-[#16205D]"
              />
            </div>
          </DisclosureButton>
          <!-- <DisclosurePanel class="pl-4 md:pl-24 pr-4">
            <div class="flex flex-col gap-4 mt-2">
              <div v-for="epayment in epayments" :key="epayment.name">
                <div
                  class="flex justify-between items-center hover:underline cursor-pointer"
                  @click="
                    () => {
                      paymentSelected.type = epayment.name
                      paymentSelected.paymentMethod = 'epay'
                    }
                  "
                >
                  <div class="flex items-center gap-4">
                    <img
                      :src="epayment.logo"
                      alt="Logo Bank"
                      class="h-8 w-8 md:h-12 md:w-12 rounded-full"
                    />
                    <div class="md:text-xl font-medium">{{ epayment.name }}</div>
                  </div>
                  <div
                    v-if="
                      paymentSelected.paymentMethod === 'epay' &&
                      paymentSelected.type === epayment.name
                    "
                    class="bg-[#49B247] rounded-full p-1 md:p-2"
                  >
                    <Icon name="mdi:check" class="h-5 w-5 text-white"></Icon>
                  </div>
                </div>
              </div>
            </div>
          </DisclosurePanel> -->
        </Disclosure>

        <Button
          class="mt-10 w-full text-xl"
          :disabled="paymentSelected.paymentMethod === '' ? true : false"
          @click="dialogConfirmPayment = true"
        >
          Selanjutnya
        </Button>
      </div>
    </div>
  </div>
  <!-- Dialog Confirm payment -->
  <Dialog
    :open="dialogConfirmPayment"
    @close="dialogConfirmPayment = false"
    class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40"
  >
    <DialogPanel class="bg-white p-4 md:p-16 rounded-lg">
      <div class="flex justify-center">
        <Icon
          name="fluent:money-hand-20-regular"
          class="h-36 w-36 md:h-[250px] md:w-[250px] text-secondary"
        />
      </div>

      <DialogDescription>
        <div class="text-center md:text-xl font-semibold mt-10">
          Lanjutkan pembayaran dengan Wallet Saku?
        </div>
        <div class="text-center md:text-xl mt-4">Total Pembayaran Rp1.100.000</div>
      </DialogDescription>

      <div class="flex justify-center gap-4 mt-6">
        <Button
          class="w-full bg-gray-soft hover:bg-gray-medium md:text-xl"
          @click="dialogConfirmPayment = false"
          >Batal</Button
        >
        <Button class="w-full md:text-xl" @click="dialogPaymentVirtualAccount = true">Bayar</Button>
      </div>
    </DialogPanel>
  </Dialog>
  <!-- Dialog info payment Qris -->
  <Dialog
    :open="dialogPaymentQris"
    @close="dialogPaymentQris = false"
    class="fixed inset-0 z-50 bg-black bg-opacity-40 overflow-y-auto py-4 lg:px-[300px]"
  >
    <DialogPanel class="bg-white p-4 md:p-16 rounded-lg relative">
      <DialogTitle class="text-lg md:text-3xl md:text-center font-semibold"
        >Info Pembayaran</DialogTitle
      >
      <button
        @click="dialogPaymentQris = false"
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <Icon name="mdi:close" class="h-6 w-6" />
      </button>
      <DialogDescription class="lg:px-28">
        <div class="flex justify-between mt-12 text-center border-b pb-4 border-black">
          <div class="lg:text-xl font-medium">Total Pembayaran</div>
          <div class="lg:text-xl font-bold text-secondary">Rp.1.100.000</div>
        </div>
        <div class="flex justify-center mt-12">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ248EQK4mWIOUyGiUEQAsG2AZAuJOc6D93dg&s"
            alt="Qris Example "
            class="h-[300px] w-[300px]"
          />
        </div>
        <div class="mt-12 flex justify-between items-center">
          <div class="font-normal lg:text-lg">Batas Waktu Pembayaran</div>
          <div class="font-medium lg:text-lg">09-07-2024 09:15</div>
        </div>
      </DialogDescription>

      <div class="mt-10">
        <ol class="list-decimal list-inside text-sm text-black">
          <li>Pastikan kamu memiliki aplikasi pembayaran bank atau e-wallet yang mendukung QRIS</li>
          <li>Buka aplikasi pembayaran bank atau e-Wallet Anda</li>
          <li>Pindai kode QR yang ada pada monitor anda</li>
          <li>Periksa detail transaksi anda pada aplikasi, lalu tap tombol Bayar</li>
          <li>Masukan PIN Anda</li>
          <li>Transaksi Anda telah selesai</li>
        </ol>
      </div>
    </DialogPanel>
  </Dialog>
  <!-- Dialog info payment virtual account -->
  <Dialog
    :open="dialogPaymentVirtualAccount"
    @close="dialogPaymentVirtualAccount = false"
    class="fixed inset-0 z-50 bg-black bg-opacity-40 overflow-y-auto py-4 lg:px-[300px]"
  >
    <DialogPanel class="bg-white p-4 md:p-16 rounded-lg relative">
      <DialogTitle class="text-lg md:text-3xl md:text-center font-semibold"
        >Info Pembayaran</DialogTitle
      >
      <button
        @click="dialogPaymentQris = false"
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <Icon name="mdi:close" class="h-6 w-6" />
      </button>
      <DialogDescription class="lg:px-28">
        <div class="flex justify-between mt-12 text-center border-b pb-4 border-black">
          <div class="lg:text-xl font-medium">Total Pembayaran</div>
          <div class="lg:text-xl font-bold text-secondary">Rp.1.100.000</div>
        </div>
        <div>
          <div class="flex items-center gap-4">
            <img
              src="https://www.bca.co.id/-/media/Feature/Header/Header-Logo/logo-bca.svg"
              alt="Logo Bank BCA"
              class="h-16 w-16"
            />
            <div class="text-xl font-medium">Bank BCA</div>
          </div>
          <div class="ml-20 text-[#00000080] text-md font-medium">No. Virtual Account</div>
          <div class="flex justify-between ml-20 mt-2 text-[#EC5800] text-xl font-medium">
            <div>890 087737839300</div>
            <div
              @click="copyToClipboard('890 087737839300')"
              class="cursor-pointer hover:underline"
            >
              Salin
            </div>
          </div>
        </div>
        <div class="mt-12 flex justify-between items-center border-b pb-4 border-black">
          <div class="font-normal lg:text-lg">Batas Waktu Pembayaran</div>
          <div class="font-medium lg:text-lg">09-07-2024 09:15</div>
        </div>
      </DialogDescription>
    </DialogPanel>
  </Dialog>
</template>
<script setup>
import Icon from '@/components/ui/Icon.vue'
import {
  Dialog,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  DialogPanel,
  DialogDescription,
  DialogTitle
} from '@headlessui/vue'
import { reactive } from 'vue'
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import { toastInfo } from '@/hooks/useToast'
import { onMounted } from 'vue'
import { eventScheduleDetail } from '@/services/eventScheduleService'
import { useRoute } from 'vue-router'

const route = useRoute()
const eventSchedule = ref()

onMounted(() => {
  getDetailEventSchedule()
})

async function getDetailEventSchedule() {
  const { data } = await eventScheduleDetail(route.params.id)
  eventSchedule.value = data.value.data
  console.log(eventSchedule.value)
}

const banks = ref([
  {
    logo: 'https://www.bca.co.id/-/media/Feature/Header/Header-Logo/logo-bca.svg',
    name: 'BCA'
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXzF0QrpEe2JoKuw-C_VHiG6_rHnVGV9TsLQ&s',
    name: 'Bank Mandiri'
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpM9uSKzmRSue_e6lUA1fpzvl6yNQ7I-Xwdw&s',
    name: 'BTN'
  }
])

const epayments = ref([
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUA2QPt9HeBkE397oEoVpO94XdJb3lAhX4A&s',
    name: 'Qris'
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPVQjgSCE39k1viQ0hz8yPNI97n5xtypn8Rg&s',
    name: 'Gopay'
  },
  {
    logo: 'https://pbs.twimg.com/profile_images/1715270877334605824/nL9LDctk_400x400.jpg',
    name: 'Shopee Pay'
  }
])

const paymentSelected = reactive({
  paymentMethod: '',
  type: ''
})

const dialogConfirmPayment = ref(false)
const dialogPaymentQris = ref(false)
const dialogPaymentVirtualAccount = ref(false)

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
  toastInfo('Nomor disalin')
}
</script>
<style lang=""></style>
