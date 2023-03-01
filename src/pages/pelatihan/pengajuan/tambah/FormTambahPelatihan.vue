<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import Multiselect from '@vueform/multiselect'
import { useDataExpertStore } from '../../../../stores/store-experts'
import { useOptionsStore } from '../../../../stores/store-options'

const route = useRoute()
const id = route.params.id

const formTambahTransaksiPelatihan = useDataExpertStore()
const optionStore = useOptionsStore()
const { formTambahTransaksiPelatihanDashboard } = storeToRefs(formTambahTransaksiPelatihan)

const formTambahDashboardPelatihan = ref({
    type: "",
    ifgroup: "",
    session: "",
    description: "",
    start_hour: "",
    start_minute: "",
    day: []
})

const radioPelatihan = [
    {
        text: 'Privat'
    },
    {
        text: 'Grup'
    }
]

const hours = [
    { text: '00' }, { text: '01' }, { text: '02' }, { text: '03' }, { text: '04' }, { text: '05' }, { text: '06' }, { text: '07' }, { text: '08' },
    { text: '09' }, { text: '10' }, { text: '11' }, { text: '12' }, { text: '13' }, { text: '14' }, { text: '15' }, { text: '16' }, { text: '17' },
    { text: '18' }, { text: '19' }, { text: '20' }, { text: '21' }, { text: '22' }, { text: '23' }, { text: '24' },
]

const minutes = [
    { text: '00' }, { text: '01' }, { text: '02' }, { text: '03' }, { text: '04' }, { text: '05' }, { text: '06' }, { text: '07' }, { text: '08' },
    { text: '09' }, { text: '10' }, { text: '11' }, { text: '12' }, { text: '13' }, { text: '14' }, { text: '15' }, { text: '16' }, { text: '17' },
    { text: '18' }, { text: '19' }, { text: '20' }, { text: '21' }, { text: '22' }, { text: '23' }, { text: '24' },
    { text: '25' }, { text: '26' }, { text: '27' }, { text: '28' }, { text: '29' }, { text: '30' }, { text: '31' }, { text: '32' }, { text: '33' },
    { text: '34' }, { text: '35' }, { text: '36' }, { text: '37' }, { text: '38' }, { text: '39' }, { text: '40' }, { text: '41' }, { text: '42' },
    { text: '43' }, { text: '44' }, { text: '45' }, { text: '46' }, { text: '47' }, { text: '48' }, { text: '49' },
    { text: '50' }, { text: '51' }, { text: '52' }, { text: '53' }, { text: '54' }, { text: '55' }, { text: '56' }, { text: '57' }, { text: '58' },
    { text: '59' }
]

const days = [
    'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'
]

const config = {
    wrap: true,
    required: true,
    altInput: true,
    altFormat: "F j, Y",
    static: true,
    monthSelectorType: 'static',
    dateFormat: 'Z',
    prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
    nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
}

const isNumberCurrency = (evt) => {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
    } else {
        return true;
    }
}

const dropdownDay = ref(false)

const formValidation = async () => {
    if (formTambahDashboardPelatihan.value.start_date != '' && formTambahDashboardPelatihan.value.start_hour != '' && formTambahDashboardPelatihan.value.start_minute != '' &&
        formTambahDashboardPelatihan.value.discussion != '' && formTambahDashboardPelatihan.value.description != '' && formTambahDashboardPelatihan.value.total != '' &&
        formTambahDashboardPelatihan.value.duration != '') {
            if(await formTambahTransaksiPelatihan.formTambahTransaksiPelatihanDashboard(formTambahDashboardPelatihan.value)){
            return
        }
    }
}
</script>
<style src="@vueform/multiselect/themes/default.css">

</style>
<template>
    <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-8 py-3 md:py-8">
        <div class="sm:flex sm:justify-between sm:items-center mb-5 grid grid-flow-row md:flex">
            <div class="">
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Tambah Transaksi Pelatihan ✨</h1>
            </div>
        </div>
    </div>
    <form @submit.prevent="formValidation()">
        <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-4 md:mt-0">
            <div>
                <label class="block text-sm font-medium mb-1 text-black">Jenis pelatihan</label>
                <div class="flex items-center">
                    <input type="radio" v-model="formTambahDashboardPelatihan.type" required value="Privat"
                        class="w-4 h-4 text-jobhunGreen bg-gray-200 border-gray-200 focus:ring-jobhunGreen focus:ring-1 hover:ring-jobhunGreen hover:ring-1">
                        <span class="text-sm ml-1 text-black">Privat</span>
                </div>
                <div class="flex items-center">
                    <input type="radio" v-model="formTambahDashboardPelatihan.type" required value="Grup"
                        class="w-4 h-4 text-jobhunGreen bg-gray-200 border-gray-200 focus:ring-jobhunGreen focus:ring-1 hover:ring-jobhunGreen hover:ring-1">
                    <span class="text-sm ml-1 text-black">Grup</span>
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Jika grup, berapa peserta yang akan mengikuti
                    pelatihan?</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-md"
                    @keypress="isNumberCurrency($event)" required placeholder="Input angka" v-model="formTambahDashboardPelatihan.ifgroup" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Berapa sesi pertemuan yang diajukan?</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-md"
                    @keypress="isNumberCurrency($event)" required placeholder="Input angka" v-model="formTambahDashboardPelatihan.session" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Jelaskan secara spesifik topik/pembahasan apa saja yang ingin kamu pelajari?</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="formTambahDashboardPelatihan.description" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Pengajuan hari kelas</label>
                <Multiselect v-model="formTambahDashboardPelatihan.days" mode="tags"
                    :close-on-select="false" class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm w-full"
                    :create-option="true" :options="days" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Pengajuan waktu pelatihan</label>
                <div class="flex items-center space-x-2">
                    <select required v-model="formTambahDashboardPelatihan.start_hour"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-14"
                        @click.prevent="dropdownOpen = !dropdownOpen">
                        <option v-for="hour in hours" :key="hour.text">{{ hour.text }}</option>
                    </select>
                    <span class="px-1">:</span>
                    <select required v-model="formTambahDashboardPelatihan.start_minute"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-14">
                        <option v-for="minute in minutes" :key="minute.text">{{ minute.text }}</option>
                    </select>
                </div>
            </div>
            <div>
                <div class="flex justify-end">
                    <div>
                        <button type="submit"
                            class="h-9 mt-5 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                            Tambah
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
<style>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    margin: 0;
}

.custom-number-input input:focus {
    outline: none !important;
}

.custom-number-input button:focus {
    outline: none !important;
}
</style>