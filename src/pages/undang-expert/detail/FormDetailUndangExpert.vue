<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import Multiselect from '@vueform/multiselect'
import { useDataExpertStore } from '../../../stores/store-experts'
import flatPickr from 'vue-flatpickr-component'
import { useOptionsStore } from '../../../stores/store-options'
import DateSingle from './DateSingle.vue'

// const route = useRoute()
// const id = route.params.id

// const formSubmissionExpertTempStore = useDataExpertStore()
// const optionStore = useOptionsStore()

// await formSubmissionExpertTempStore.getDataSubmissionExpertTemp(id)
// const { submissionExpertTemp } = storeToRefs(formSubmissionExpertTempStore)

// const { listSector, listDomicile, listService, listTitle } = storeToRefs(optionStore)

const formDetailDashboardUndangExpert = ref({
    company: "",
    company_description: "",
    event: "",
    event_description: "",
    start_date: "",
    format_event: "",
    target: "",
    fee: "",
    benefit: ""
})

const formatBudget = () => {
    formDetailDashboardUndangExpert.value.budget = convertRawIntToRupiah(formDetailDashboardUndangExpert.value.budget)
}

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

const config = {
    wrap: true,
    required: true,
    altInput: true,
    altFormat: "F j, Y",
    static: true,
    readonly: true,
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
</script>
<style src="@vueform/multiselect/themes/default.css">

</style>
<template>
    <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-8 py-3 md:py-8">
        <div class="sm:flex sm:justify-between sm:items-center mb-5 grid grid-flow-row md:flex">
            <div class="">
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Undang Expert ✨</h1>
            </div>
        </div>
    </div>
    <form >
        <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-4 md:mt-0">
            <div>
                <label class="block text-sm font-medium mb-1 text-black">Asal perusahaan/organisasi/komunitas</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full    "
                    readonly v-model="formDetailDashboardUndangExpert.company" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Penjelasan singkat tentang
                    perusahaan/organisasi/komunitas</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    readonly v-model="formDetailDashboardUndangExpert.company_description" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Nama acara/kegiatan</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    v-model="formDetailDashboardUndangExpert.event" readonly type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Penjelasan tentang acara/kegiatan</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    readonly v-model="formDetailDashboardUndangExpert.event_description" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Tanggal pelaksanaan acara</label>
                <div class="flex items-center space-x-2">
                    <DateSingle v-model="formDetailDashboardUndangExpert.start_date" />
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Format acara</label>
                <div class="flex items-center">
                    <input type="radio" v-model="formDetailDashboardUndangExpert.format_event" value="Talkshow" disabled
                        class="w-4 h-4 text-jobhunGreen bg-gray-200 border-gray-200 focus:ring-jobhunGreen focus:ring-1 hover:ring-jobhunGreen hover:ring-1">
                    <span class="text-sm ml-1 text-black">Talkshow</span>
                </div>
                <div class="flex items-center">
                    <input type="radio" v-model="formDetailDashboardUndangExpert.format_event" value="Workshop" disabled
                        class="w-4 h-4 text-jobhunGreen bg-gray-200 border-gray-200 focus:ring-jobhunGreen focus:ring-1 hover:ring-jobhunGreen hover:ring-1">
                    <span class="text-sm ml-1 text-black">Workshop</span>
                </div>
                <div class="flex items-center">
                    <input type="radio" v-model="formDetailDashboardUndangExpert.format_event" value="Lainnya" disabled
                        class="w-4 h-4 text-jobhunGreen bg-gray-200 border-gray-200 focus:ring-jobhunGreen focus:ring-1 hover:ring-jobhunGreen hover:ring-1">
                    <span class="text-sm ml-1 text-black">Lainnya</span>
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Jumlah target peserta secara spesifik</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-md"
                    @keypress="isNumberCurrency($event)" readonly v-model="formDetailDashboardUndangExpert.target" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Berapa budget yang diajukan untuk fee
                    speaker?</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-md"
                    @input="formatBudget" readonly v-model="formDetailDashboardUndangExpert.fee" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Apakah Jobhun bisa mendapatkan benefit promosi lainnya? Jika ada, sebutkan!</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    readonly v-model="formDetailDashboardUndangExpert.benefit" type="text" />
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