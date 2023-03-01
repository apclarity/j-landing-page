<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import Multiselect from '@vueform/multiselect'
import { useDataExpertStore } from '../../../../stores/store-experts'
import flatPickr from 'vue-flatpickr-component'
import { useOptionsStore } from '../../../../stores/store-options'
import DateSingle from './DateSingle.vue'

// const route = useRoute()
// const id = route.params.id

// const formSubmissionExpertTempStore = useDataExpertStore()
// const optionStore = useOptionsStore()

// await formSubmissionExpertTempStore.getDataSubmissionExpertTemp(id)
// const { submissionExpertTemp } = storeToRefs(formSubmissionExpertTempStore)

// const { listSector, listDomicile, listService, listTitle } = storeToRefs(optionStore)

const formDetailDashboardPelatihan = ref({
    type: "",
    ifgroup: "",
    session: "",
    description: "",
    start_hour: "",
    start_minute: "",
    day: []
})

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

const radioPelatihan = [
    {
        text: 'Privat'
    },
    {
        text: 'Grup'
    }
]

const dropdownDay = ref(false)

const isNumberCurrency = (evt) => {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
    } else {
        return true;
    }
}
</script>
<style src="@vueform/multiselect/themes/default.css">

</style>
<template>
    <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-8 py-3 md:py-8">
        <div class="sm:flex sm:justify-between sm:items-center mb-5 grid grid-flow-row md:flex">
            <div class="">
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Detail Pelatihan ✨</h1>
            </div>
        </div>
    </div>
    <form >
        <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-4 md:mt-0">
            <div>
                <label class="block text-sm font-medium mb-1 text-black">Jenis pelatihan</label>
                <div class="flex items-center">
                    <input type="radio" v-model="formDetailDashboardPelatihan.type" disabled value="Privat"
                        class="w-4 h-4 text-jobhunGreen bg-gray-200 border-gray-200 focus:ring-jobhunGreen focus:ring-1 hover:ring-jobhunGreen hover:ring-1">
                        <span class="text-sm ml-1 text-black">Privat</span>
                </div>
                <div class="flex items-center">
                    <input type="radio" v-model="formDetailDashboardPelatihan.type" disabled value="Grup"
                        class="w-4 h-4 text-jobhunGreen bg-gray-200 border-gray-200 focus:ring-jobhunGreen focus:ring-1 hover:ring-jobhunGreen hover:ring-1">
                    <span class="text-sm ml-1 text-black">Grup</span>
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Jika grup, berapa peserta yang akan mengikuti
                    pelatihan?</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-md"
                    @keypress="isNumberCurrency($event)" readonly placeholder="Input angka" v-model="formDetailDashboardPelatihan.ifgroup" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Berapa sesi pertemuan yang diajukan?</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-md"
                    @keypress="isNumberCurrency($event)" readonly placeholder="Input angka" v-model="formDetailDashboardPelatihan.session" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Jelaskan secara spesifik topik/pembahasan apa saja yang ingin kamu pelajari?</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    readonly v-model="formDetailDashboardPelatihan.description" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Pengajuan hari kelas</label>
                <Multiselect v-model="formDetailDashboardPelatihan.days" mode="tags" disabled
                    :close-on-select="false" class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm w-full"
                    :create-option="true" :options="days" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Pengajuan waktu pelatihan</label>
                <div class="flex items-center space-x-2">
                    <select disabled v-model="formDetailDashboardPelatihan.start_hour"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-14"
                        @click.prevent="dropdownOpen = !dropdownOpen">
                        <option v-for="hour in hours" :key="hour.text">{{ hour.text }}</option>
                    </select>
                    <span class="px-1">:</span>
                    <select disabled v-model="formDetailDashboardPelatihan.start_minute"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-14">
                        <option v-for="minute in minutes" :key="minute.text">{{ minute.text }}</option>
                    </select>
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