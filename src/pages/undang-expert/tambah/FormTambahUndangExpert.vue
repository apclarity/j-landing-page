<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import Multiselect from '@vueform/multiselect'
import { useDataExpertStore } from '../../../stores/store-experts'
import flatPickr from 'vue-flatpickr-component'
import { useOptionsStore } from '../../../stores/store-options'
import DateSingle from './DateSingle.vue'
import { convertRawIntToRupiah } from '../../../utils/Helper'

const route = useRoute()
const id = route.params.id

const formTambahTransaksiUndangExpert = useDataExpertStore()
const optionStore = useOptionsStore()
const { formTambahTransaksiUndangExpertDashboard } = storeToRefs(formTambahTransaksiUndangExpert)

const duration = ref(1)
const price = ref(200000)

const increment = () => {
    duration.value += 1
}

const decrement = () => {
    if (duration.value === 1) return
    duration.value -= 1
}

const pricePerHour = computed(() => {
    var pricePerHour = price.value
    return "Rp" + pricePerHour.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")
    return pricePerHour
})

const total = computed(() => {
    var total = duration.value * price.value
    return "Rp" + total.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")
    return total
})

const formTambahDashboardUndangExpert = ref({
    company: "",
    company_description: "",
    event: "",
    event_description: "",
    start_date: "",
    format_event: "",
    target: "",
    fee: "",
    benefit: "",
    expert: ""
})

const discussions = [
    'Teori', 'Praktik', 'Tools', 'Soft Skill'
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

const formatBudget = () => {
    formTambahDashboardUndangExpert.value.fee = convertRawIntToRupiah(formTambahDashboardUndangExpert.value.fee)
}

const formValidation = async () => {
    if (formTambahDashboardUndangExpert.value.start_date != '' && formTambahDashboardUndangExpert.value.start_hour != '' && formTambahDashboardUndangExpert.value.start_minute != '' &&
        formTambahDashboardUndangExpert.value.discussion != '' && formTambahDashboardUndangExpert.value.description != '' && formTambahDashboardUndangExpert.value.total != '' &&
        formTambahDashboardUndangExpert.value.duration != '') {
            if(await formTambahTransaksiUndangExpert.formTambahTransaksiUndangExpertDashboard(formTambahDashboardUndangExpert.value)){
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
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Tambah Transaksi Undang Expert ✨</h1>
            </div>
        </div>
    </div>
    <form @submit.prevent="formValidation()">
        <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-4 md:mt-0">
            <div>
                <label class="block text-sm font-medium mb-1 text-black">Asal perusahaan/organisasi/komunitas</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full    "
                    require v-model="formTambahDashboardUndangExpert.company" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Penjelasan singkat tentang
                    perusahaan/organisasi/komunitas</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    require v-model="formTambahDashboardUndangExpert.company_description" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Nama acara/kegiatan</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    v-model="formTambahDashboardUndangExpert.event" require type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Penjelasan tentang acara/kegiatan</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    require v-model="formTambahDashboardUndangExpert.event_description" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Tanggal pelaksanaan acara</label>
                <div class="flex items-center space-x-2">
                    <DateSingle v-model="formTambahDashboardUndangExpert.start_date" />
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Format acara</label>
                <div class="flex items-center">
                    <input type="radio" v-model="formTambahDashboardUndangExpert.format_event" require value="Talkshow"
                        class="w-4 h-4 text-jobhunGreen bg-gray-200 border-gray-200 focus:ring-jobhunGreen focus:ring-1 hover:ring-jobhunGreen hover:ring-1">
                    <span class="text-sm ml-1 text-black">Talkshow</span>
                </div>
                <div class="flex items-center">
                    <input type="radio" v-model="formTambahDashboardUndangExpert.format_event" require value="Workshop"
                        class="w-4 h-4 text-jobhunGreen bg-gray-200 border-gray-200 focus:ring-jobhunGreen focus:ring-1 hover:ring-jobhunGreen hover:ring-1">
                    <span class="text-sm ml-1 text-black">Workshop</span>
                </div>
                <div class="flex items-center">
                    <input type="radio" v-model="formTambahDashboardUndangExpert.format_event" require value="Lainnya"
                        class="w-4 h-4 text-jobhunGreen bg-gray-200 border-gray-200 focus:ring-jobhunGreen focus:ring-1 hover:ring-jobhunGreen hover:ring-1">
                    <span class="text-sm ml-1 text-black">Lainnya</span>
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Jumlah target peserta secara spesifik</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-md"
                    @keypress="isNumberCurrency($event)" require v-model="formTambahDashboardUndangExpert.target" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Berapa budget yang diajukan untuk fee
                    speaker?</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-md"
                    @input="formatBudget" require v-model="formTambahDashboardUndangExpert.fee" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Apakah Jobhun bisa mendapatkan benefit promosi lainnya? Jika ada, sebutkan!</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    require v-model="formTambahDashboardUndangExpert.benefit" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Cari expert</label>
                <Multiselect v-model="formTambahDashboardUndangExpert.expert" :close-on-select="true" :searchable="true"
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