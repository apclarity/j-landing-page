<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import Multiselect from '@vueform/multiselect'
import { useDataExpertStore } from '../../../stores/store-experts'
import flatPickr from 'vue-flatpickr-component'
import { useOptionsStore } from '../../../stores/store-options'
import DateSingle from './DateSingle.vue'
import RegionJSON from '../../../utils/json/regencies.json'
import { convertRawIntToRupiah } from '../../../utils/Helper'

const route = useRoute()
const id = route.params.id

const formTambahTransaksiRekrutExpert = useDataExpertStore()
const optionStore = useOptionsStore()
const { formTambahTransaksiRekrutExpertDashboard } = storeToRefs(formTambahTransaksiRekrutExpert)

const formatBudget = () => {
    formTambahDashboardRekrutExpert.value.budget = convertRawIntToRupiah(formTambahDashboardRekrutExpert.value.budget)
}

const formTambahDashboardRekrutExpert = ref({
    company: "",
    location: "",
    website: "",
    linkedin: "",
    email: "",
    phone: "",
    project_detail: "",
    job_detail: "",
    description: "",
    deadline: "",
    budget: "",
    expert: ""
})

const jsonCity = [
    {
        "id": "1101",
        "province_id": "11",
        "name": "KABUPATEN SIMEULUE",
        "alt_name": "KABUPATEN SIMEULUE",
        "latitude": 2.61667,
        "longitude": 96.08333
    },
    {
        "id": "1102",
        "province_id": "11",
        "name": "KABUPATEN ACEH SINGKIL",
        "alt_name": "KABUPATEN ACEH SINGKIL",
        "latitude": 2.41667,
        "longitude": 97.91667
    },
    {
        "id": "1103",
        "province_id": "11",
        "name": "KABUPATEN ACEH SELATAN",
        "alt_name": "KABUPATEN ACEH SELATAN",
        "latitude": 3.16667,
        "longitude": 97.41667
    },
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

const experts = [
    {
        value: 'bondangprakoso',
        name: 'Bondan Prakoso',
        proffession: 'Musisi'
    },
    {
        value: 'saykoji',
        name: 'Saykoji',
        proffession: 'Rapper'
    }
]

const config = {
    wrap: true,
    required: true,
    altInput: true,
    altFormat: "F j, Y",
    static: true,
    required: true,
    monthSelectorType: 'static',
    dateFormat: 'Z',
    prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
    nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
}

const isInputNumber = (evt) => {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
    } else {
        return true;
    }
}

const formValidation = async () => {
    if (formTambahDashboardRekrutExpert.value.start_date != '' && formTambahDashboardRekrutExpert.value.start_hour != '' && formTambahDashboardRekrutExpert.value.start_minute != '' &&
        formTambahDashboardRekrutExpert.value.discussion != '' && formTambahDashboardRekrutExpert.value.description != '' && formTambahDashboardRekrutExpert.value.total != '' &&
        formTambahDashboardRekrutExpert.value.duration != '') {
            if(await formTambahTransaksiRekrutExpert.formTambahTransaksiRekrutExpertDashboard(formTambahDashboardRekrutExpert.value)){
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
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Tambah Transaksi Rekrut Expert ✨</h1>
            </div>
        </div>
    </div>
    <form @submit.prevent="formValidation()">
        <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-4 md:mt-0">
            <div>
                <label class="block text-sm font-medium mb-1 text-black">Nama perusahaan</label>
                <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="formTambahDashboardRekrutExpert.company" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Lokasi perusahaan</label>
                <div class="flex items-center">
                    <select required v-model="formTambahDashboardRekrutExpert.location"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        @click.prevent="dropdownOpen = !dropdownOpen">
                        <option v-for="city in jsonCity" :key="city">{{ city.name }}</option>
                    </select>
                
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Website perusahaan</label>
                <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="formTambahDashboardRekrutExpert.website" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">LinkedIn perusahaan</label>
                <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="formTambahDashboardRekrutExpert.linkedin" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Email perusahaan</label>
                <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="formTambahDashboardRekrutExpert.email" type="email" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Nomor telepon perusahaan</label>
                <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="formTambahDashboardRekrutExpert.phone" @keypress="isInputNumber($event)" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Detail proyek</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="formTambahDashboardRekrutExpert.project_detail" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Detail pekerjaan expert</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="formTambahDashboardRekrutExpert.job_detail" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Syarat dan kualifikasi</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="formTambahDashboardRekrutExpert.description" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Batas waktu pekerjaan</label>
                <div class="flex items-center space-x-2">
                    <DateSingle v-model="formTambahDashboardRekrutExpert.deadline" />
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Budget yang dimiliki</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-md"
                    @input="formatBudget" placeholder="Rp" required v-model="formTambahDashboardRekrutExpert.budget" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Cari expert</label>
                <Multiselect v-model="formTambahDashboardRekrutExpert.expert" :close-on-select="true" :searchable="true"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm w-full ml-0"
                        :classes="{ containerActive: 'ring-0', search: 'w-full absolute inset-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen appearance-none border-0 text-base font-sans rounded pl-3.5 rtl:pl-0 rtl:pr-3.5', }"
                    required :options="experts">
                            <template v-slot:singlelabel="{ value }">
                                <div class="multiselect-single-label">
                                    <span>{{ value.name }} - {{ value.proffession }}</span>
                                </div>
                            </template>
                            <template v-slot:option="{ option }">
                                <span>{{ option.name }} - {{ option.proffession }}</span>
                        </template>
                </Multiselect>
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