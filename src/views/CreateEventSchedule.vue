<template>
  <div class="pb-20">
    <div class="bg-[#F8F8F8] pt-24">
      <div class="lg:mx-56 bg-white pb-16">
        <!-- Header -->
        <div class="flex justify-center items-center">
          <div class="h-[100px] w-[500px] md:h-[281px] md:w-[500px]">
            <Vue3Lottie :animationData="eventSchedule1" />
          </div>
          <div class="md:max-w-lg max-w-sm">
            <div class="md:text-[50px] lg:text-[76px] font-semibold">Sales</div>
            <div class="md:text-2xl text-xs font-light">
              Layanan penjualan oleh SPG/SPB untuk bisnismu agar berjalan lancar dan berhasil.
            </div>
          </div>
        </div>
        <div class="px-5 md:px-12 mt-8">
          <!-- Form -->
          <Form @submit="submitForm" :validationSchema="eventScheduleSchema">
            <div class="flex flex-col gap-2 mb-4">
              <Label> Pekerjaan </Label>
              <SingleSelect
                name="jobTypeId"
                :options="jobTypes"
                selectLabel="name"
                selectValue="id"
                :placeholder="'Pilih Job'"
                @update-value="jobTypeHandle($event)"
              />
            </div>
            <div class="flex flex-col gap-2 mb-4">
              <Label> Jumlah </Label>
              <Input name="sakuerNeeded" :placeholder="'Total sakuer'" type="number" />
            </div>
            <div class="flex flex-col gap-2 mb-4">
              <Label> Jenis Kelamin </Label>
              <div class="flex items-center gap-4 mt-2">
                <CheckBox name="isMaleNeeded" label="Laki-Laki" :input="true" />
                <CheckBox name="isFemaleNeeded" label="Perempuan" :input="true" />
              </div>
            </div>
            <div class="flex flex-col gap-2 mb-4">
              <Label> Syarat Dan Deskripsi </Label>
              <Input
                name="description"
                :placeholder="prerequisiteMessage || 'Syarat dan Deskripsi'"
                @click="dialogPrerequisites = true"
              />
            </div>
            <div class="flex flex-col gap-2 mb-4">
              <Label> Biaya Transportasi </Label>
              <Input
                name="transportRate"
                :placeholder="'Biaya transportasi'"
                type="number"
                @update-value="($event) => (form.transport = $event)"
              />
            </div>
            <div class="flex flex-col gap-2 mb-4">
              <Label> Jam Kerja </Label>
              <TimePickerRange
                name="timeRange"
                placeholder="Pilih Jam Kerja"
                @update-value="timeHandle"
              />
            </div>
            <div class="flex flex-col gap-2 mb-8">
              <Label>Tanggal </Label>
              <DatePickerRange name="date" placeholder="Tanggal" @update-value="dateHandle" />
            </div>
            <!-- Location -->
            <div class="flex flex-col gap-4 mb-8 md:mb-12">
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-4">
                  <Icon name="system-uicons:location" class="h-8 w-8" />
                  <Label> Pilih Lokasi </Label>
                </div>
                <div class="text-secondary text-lg cursor-pointer" @click="dialogSelectMap = true">
                  Pilih
                </div>
              </div>
              <div
                class="text-sm md:text-lg font-normal text-[#64748B] mx-12"
                v-if="form?.location?.fullAddress"
              >
                {{ form?.location?.fullAddress }}
              </div>
              <div
                class="text-sm md:text-lg font-normal text-[#64748B] mx-12"
                v-if="form.location.detail"
              >
                {{ form.location.detail }}
              </div>
            </div>
            <!-- Sakuer type -->
            <div class="flex flex-col gap-4 mb-4">
              <Label class="md:mb-4"> Jenis Sakuer </Label>
              <div
                class="flex items-center justify-between border py-4 px-8 rounded-xl border-slate-300 cursor-pointer"
                v-for="type in sakuerOfficials"
                :key="type"
                :class="{ 'bg-slate-200': form.sakuerOfficialId === type.id }"
                @click="sakuerTypeHandle(type.id)"
              >
                <div class="flex items-center gap-8">
                  <Icon
                    name="fluent:ribbon-star-24-filled"
                    class="h-12 w-12"
                    :class="{
                      'text-primary': type.name == 'Basic',
                      'text-amber-400': type.name == 'Gold'
                    }"
                  />
                  <div class="text-lg font-semibold">Sakuer {{ type.name }}</div>
                </div>
              </div>
              <div class="text-sm font-normal italic">
                Rate : {{ formatRupiah(form.ratePerHour) }}/Jam
              </div>
            </div>
            <!-- Detail Payment -->
            <div class="mt-16 md:mt-24">
              <div class="text-xl md:text-2xl font-semibold mb-6">Rincian Pembayaran</div>
              <div class="flex items-center justify-between mb-4">
                <div class="md:text-lg font-normal text-[#564E4E]">
                  Sakuer
                  <span class="text-[#828282]"
                    >({{ formatRupiah(form?.ratePerHour * form?.diffHours) }} ({{
                      form?.diffHours
                    }}
                    Jam) * {{ form?.day }} hari)</span
                  >
                </div>
                <div class="md:text-lg">
                  {{ formatRupiah(form?.ratePerHour * form?.diffHours * form?.day) }}
                </div>
              </div>
              <div class="flex items-center justify-between mb-4">
                <div class="md:text-lg font-normal text-[#564E4E]">Transportasi</div>
                <div class="md:text-lg">{{ formatRupiah(form?.transport) }}</div>
              </div>
              <div class="flex items-center justify-between mb-4">
                <div class="md:text-lg font-normal text-[#564E4E]">Layanan</div>
                <div class="md:text-lg">{{ formatRupiah(form?.service) }}</div>
              </div>
              <hr class="mt-8" />
              <div class="flex items-center justify-between mb-4 mt-2">
                <div class="md:text-lg font-medium text-[#564E4E]">Total</div>
                <div class="md:text-lg font-medium">{{ formatRupiah(form?.total) }}</div>
              </div>
              <!-- Coupon -->
              <!-- <div class="mt-8">
                <div class="md:text-xl font-medium">Gunakan Kupon Diskon</div>
                <div class="relative flex mt-3">
                  <input
                    type="text"
                    placeholder="Masukkan kode kupon"
                    class="border border-gray-300 rounded-l-lg py-2.5 px-4 w-full focus:outline-0 text-primary"
                    v-model="couponValid.coupon"
                  />
                  <button class="bg-primary text-white rounded-r-lg px-6 py-2.5">
                    <Icon name="mdi:arrow-right" class="h-6 w-6" />
                  </button>
                </div>
                <div class="text-primary mt-2" v-if="couponValid.status">
                  Kupon berhasil di-claim
                </div>
              </div> -->
            </div>
            <Button class="w-full mt-8 md:mt-14 text-xl" type="submit">Bayar Sekarang</Button>
          </Form>
        </div>
      </div>
    </div>
  </div>
  <!-- Dialog prerequisites & description -->
  <Dialog
    :open="dialogPrerequisites"
    @close="dialogPrerequisites = false"
    class="fixed inset-0 z-50 bg-black bg-opacity-40 overflow-y-auto py-4 lg:px-[200px]"
  >
    <DialogPanel class="bg-white px-20 py-8 rounded-lg relative">
      <button
        @click="dialogPrerequisites = false"
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <Icon name="mdi:close" class="h-6 w-6" />
      </button>
      <div class="font-semibold mb-4 text-[#564E4E]">Prasyarat</div>
      <div v-for="prerequisite in prerequisites" :key="prerequisite.id">
        <CheckBox
          name="prerequisites"
          :label="prerequisite.name"
          :input="form.prerequisitesIds.includes(prerequisite.id) ? false : true"
          @update-value="prerequisiteHandle($event, prerequisite.id)"
        />
      </div>
      <div class="font-semibold mt-10 mb-4 text-[#564E4E]">Detail Pekerjaan</div>
      <Textarea
        name="description"
        placeholder="Deskripsi Pekerjaan"
        height="h-28"
        :value="form.description"
        @update-value="form.description = $event.target.value"
      />
      <Button
        class="w-full mt-8"
        @click="
          () => {
            prerequisiteMessage = `Memilih ${form.prerequisitesIds.length} syarat`
            dialogPrerequisites = false
          }
        "
        >Simpan</Button
      >
    </DialogPanel>
  </Dialog>
  <!-- Dialog select map -->
  <Dialog
    :open="dialogSelectMap"
    @close="dialogSelectMap = false"
    class="fixed inset-0 z-50 bg-black bg-opacity-40 overflow-y-auto py-4 lg:px-[200px]"
  >
    <DialogPanel class="bg-white px-12 py-8 rounded-lg">
      <DialogTitle class="text-2xl font-semibold mb-4">Cari Lokasi</DialogTitle>
      <div class="relative">
        <GMapAutocomplete
          placeholder="Masukan alamat tujuan"
          @place_changed="setPlace"
          class="border w-full py-2 px-4 rounded-lg flex-wrap"
        >
        </GMapAutocomplete>
        <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <Icon name="mdi:magnify" class="h-6 w-6" />
        </div>
      </div>
      <GMapMap
        :center="{ lat: form.location?.latitude, lng: form.location?.longitude }"
        :zoom="15"
        class="h-[300px] w-full mt-4"
      >
      </GMapMap>
      <div class="flex flex-col gap-2 mt-8">
        <div class="text-md font-semibold font-manrope">Rincian Alamat</div>
        <Textarea
          height="h-28"
          :placeholder="'Rincian alamat'"
          :value="form.location.detail"
          @update-value="form.location.detail = $event.target.value"
        />
      </div>
      <div class="mt-8 flex justify-end gap-4">
        <Button class="bg-gray-400 hover:bg-gray-darken" @click="dialogSelectMap = false"
          >Batal</Button
        >
        <Button
          @click="
            () => {
              dialogSelectMap = false
            }
          "
          >Konfirmasi</Button
        >
      </div>
    </DialogPanel>
  </Dialog>
</template>
<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import eventSchedule1 from '@/assets/lottie/eventschedule1.json'
import { Form } from 'vee-validate'
import SingleSelect from '@/components/ui/SingleSelect.vue'
import Label from '@/components/ui/Label.vue'
import Input from '@/components/ui/Input.vue'
import Icon from '@/components/ui/Icon.vue'
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'
import { reactive } from 'vue'
import DatePickerRange from '@/components/ui/DatePickerRange.vue'
import TimePickerRange from '@/components/ui/TimePickerRange.vue'
import Button from '@/components/ui/Button.vue'
import CheckBox from '@/components/ui/CheckBox.vue'
import Textarea from '@/components/ui/Textarea.vue'
import { onMounted } from 'vue'
import {
  getJobTypes,
  getPrerequisites,
  getSakuerOfficial,
  detailSakuerOfficialType,
  createSchedule
} from '@/services/eventScheduleService'
import * as yup from 'yup'
import { formatRupiah } from '@/utils/currency'
import { watch } from 'vue'
import { toastError, toastSuccess } from '@/hooks/useToast'
import { format } from 'date-fns'
import { useLoaderStore } from '@/stores/loaderStore'
import router from '@/router'

onMounted(() => {
  fetchJobTypes()
  fetchPrerequisites()
  fetchSakuerOfficial()
})

const eventScheduleSchema = {
  jobTypeId: yup.object().required('Pekerjaan harus dipilih'),
  sakuerNeeded: yup
    .number()
    .typeError('Biaya transportasi harus berupa angka')
    .required('Jumlah sakuer harus diisi'),
  transportRate: yup
    .number()
    .typeError('Biaya transportasi harus berupa angka')
    .required('Biaya transportasi harus diisi'),
  timeRange: yup
    .array()
    .of(
      yup.object().shape({
        hours: yup.string().required(),
        minutes: yup.string().required(),
        seconds: yup.string().required()
      })
    )
    .length(2, 'Jam kerja harus terdiri dari dua waktu')
    .required('Jam kerja harus diisi'),
  date: yup.array().required('Tanggal harus diisi')
}

const form = reactive({
  jobTypeId: '',
  officalType: '',
  sakuerOfficialId: '',
  prerequisitesIds: [],
  description: [],
  diffHours: 0,
  ratePerHour: 0,
  ratePerDay: 0,
  service: 5000,
  transport: 0,
  total: 0,
  day: 0,
  location: {
    latitude: -6.2,
    longitude: 106.816666,
    fullAddress: '',
    detail: '',
    locationName: ''
  }
})

watch(form, () => {
  form.total = form.ratePerHour * form.diffHours * form.day + form.transport + form.service
})

// Job types
const jobTypes = ref([])

async function fetchJobTypes() {
  const { data } = await getJobTypes()
  jobTypes.value = data.value.data
}

async function jobTypeHandle(e) {
  form.jobTypeId = e.id
  if (form.sakuerOfficialId) {
    const { data } = await detailSakuerOfficialType(e.id, form.sakuerOfficialId)
    form.ratePerHour = data.value.data?.ratePerHour
  }
}

// Prerequisites
const dialogPrerequisites = ref(false)
const prerequisites = ref([])
const prerequisiteMessage = ref(``)

async function fetchPrerequisites() {
  const { data } = await getPrerequisites()
  prerequisites.value = data.value.data
}

function prerequisiteHandle(event, id) {
  if (event && !form.prerequisitesIds.includes(id)) {
    form.prerequisitesIds.push(id)
  } else if (!event && form.prerequisitesIds.includes(id)) {
    const index = form.prerequisitesIds.indexOf(id)
    if (index > -1) {
      form.prerequisitesIds.splice(index, 1)
    }
  }
}

// map location
const dialogSelectMap = ref(false)
function setPlace(place) {
  const latitude = place.geometry.location.lat()
  const longitude = place.geometry.location.lng()
  form.location.latitude = latitude
  form.location.longitude = longitude
  form.location.fullAddress = place.formatted_address
  form.location.locationName = place.vicinity
}

// Time
function timeHandle(e) {
  const startTime = e[0].hours
  const endTime = e[1].hours
  let diffHours = endTime - startTime
  if (diffHours < 0) {
    diffHours += 24
  }
  if (diffHours == 0) {
    form.diffHours = 1
  } else {
    form.diffHours = diffHours
  }
}

// date
function dateHandle(e) {
  const startDate = new Date(e[0])
  let diffDays = 1
  if (e[1]) {
    const endDate = new Date(e[1])
    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime())
    diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1
  }
  form.day = diffDays
}

// sakuer official
const sakuerOfficials = ref([])

async function fetchSakuerOfficial() {
  const { data } = await getSakuerOfficial()
  sakuerOfficials.value = data.value.data
}

async function sakuerTypeHandle(id) {
  form.sakuerOfficialId = id
  if (form.jobTypeId) {
    const { data } = await detailSakuerOfficialType(form.jobTypeId, id)
    form.ratePerHour = data.value.data?.ratePerHour
  }
}

async function submitForm(values) {
  if (!form.sakuerOfficialId) {
    toastError('Jenis Sakuer harus dipilih')
    return
  }
  if (!form.location.fullAddress) {
    toastError('Lokasi harus diisi')
    return
  }

  const scheduleForm = {
    sakuerNeeded: values.sakuerNeeded,
    startDate: format(values.date[0], 'yyyy-MM-dd'),
    endDate: values.date[1] ? format(values.date[1], 'yyyy-MM-dd') : null,
    isMaleNeeded: values.isMaleNeeded ?? false,
    isFemaleNeeded: values.isFemaleNeeded ?? false,
    coordinatorCount: 0,
    startTime: values.timeRange[0].hours,
    endTime: values.timeRange[1].hours,
    jobTypeId: form.jobTypeId,
    prerequisiteIds: form.prerequisitesIds,
    description: form.description,
    latitude: form.location.latitude,
    longitude: form.location.longitude,
    locationDetail: form.location.detail,
    totalRate: form.total,
    rateHour: form.ratePerHour,
    transportRate: values.transportRate,
    sakuerOfficialId: form.sakuerOfficialId
  }

  const { data, error, loading } = await createSchedule(scheduleForm)
  const loader = useLoaderStore()
  if (data.value) {
    loader.stopLoading()
    toastSuccess('Berhasil membuat jadwal')
    router.push(`/event-schedule/${data.value.data.id}/payment-method`)
  }

  if (loading.value) {
    loader.startLoading()
  }

  if (error.value) {
    toastError('Gagal membuat jadwal')
    loader.stopLoading()
  }
}
</script>
<style lang=""></style>
