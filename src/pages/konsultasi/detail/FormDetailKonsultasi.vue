<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import Multiselect from '@vueform/multiselect'
import { useDataExpertStore } from '../../../stores/store-experts'
import flatPickr from 'vue-flatpickr-component'
import { useOptionsStore } from '../../../stores/store-options'
import DateSingle from './DateSingle.vue'

const route = useRoute()
const id = route.params.id

const formSubmissionExpertTempStore = useDataExpertStore()
const optionStore = useOptionsStore()

await formSubmissionExpertTempStore.getDataSubmissionExpertTemp(id)
const { submissionExpertTemp } = storeToRefs(formSubmissionExpertTempStore)

const { listSector, listDomicile, listService, listTitle } = storeToRefs(optionStore)

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

const formDetailDashboardExpertKonsultasi = ref({
    date: "",
    start_hour: "",
    start_minute: "",
    discussion: [],
    topic: "",
    total: "",
    duration: "",
    payment: "",
    status: "",
    invoice: "",
    star: "",
    review: ""
})

const discussions = [
    'Teori', 'Praktik', 'Tools', 'Soft Skill'
]

const status = [
    {
        text: 'Belum dimulai'
    },
    {
        text: 'Sedang berjalan'
    },
    {
        text: 'Selesai'
    }
]

const payments = [
    {
        text: 'Lunas'
    },
    {
        text: 'Belum dibayar'
    }
]

const star = [
    {
        value: 1
    },
    {
        value: 2
    },
    {
        value: 3
    },
    {
        value: 4
    },
    {
        value: 5
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
</script>
<style src="@vueform/multiselect/themes/default.css">

</style>
<template>
    <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-8 py-3 md:py-8">
        <div class="sm:flex sm:justify-between sm:items-center mb-5 grid grid-flow-row md:flex">
            <div class="">
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Konsultasi ✨</h1>
            </div>
        </div>
    </div>
    <form >
        <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-4 md:mt-0">
            <div>
                <label class="block text-sm font-medium mb-1 text-black">Pengajuan tanggal konsultasi</label>
                <div class="flex items-center space-x-2">
                    <DateSingle v-model="formDetailDashboardExpertKonsultasi.date" />
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Pengajuan waktu konsultasi</label>
                <div class="flex items-center space-x-2">
                    <select v-model="formDetailDashboardExpertKonsultasi.startHour"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-14"
                        @click.prevent="dropdownOpen = !dropdownOpen">
                        <option v-for="hour in hours" :key="hour.text">{{ hour.text }}</option>
                    </select>
                    <span class="px-1">:</span>
                    <select v-model="formDetailDashboardExpertKonsultasi.endMinute"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-14">
                        <option v-for="minute in minutes" :key="minute.text">{{ minute.text }}</option>
                    </select>
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Durasi konsultasi</label>
                <div class="custom-number-input w-32">
                    <div class="flex flex-row h-8 w-full rounded-lg relative bg-transparent mt-1">
                        <div @click="decrement()"
                            class=" border-0 bg-gray-100 hover:bg-gray-300 hover:ring-emerald-500 focus:ring-jobhunGreen h-full w-20 rounded-l cursor-pointer outline-none">
                            <span class="text-2xl ml-2 font-thin">−</span>
                        </div>
                        <div type="number"
                            class="border-0 bg-gray-100 hover:ring-emerald-500 focus:ring-jobhunGreen p-1.5 text-sm w-full text-center flex items-center text-gray-700">
                            {{ duration }} jam
                        </div>
                        <div @click="increment()"
                            class="border-0 bg-gray-100 hover:bg-gray-300 hover:ring-emerald-500 focus:ring-jobhunGreen h-full w-20 rounded-r cursor-pointer">
                            <span class="ml-2 text-2xl font-thin">+</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Jenis pembahasan</label>
                <Multiselect v-model="formDetailDashboardExpertKonsultasi.discussion" mode="tags" :close-on-select="false"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm w-full"
                    :create-option="true" required :options="discussions" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Jelaskan secara spesifik topik/pembahasan apa saja
                    yang ingin kamu pelajari dari expert!</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="formDetailDashboardExpertKonsultasi.topic" />
            </div>
            <div>
                <div class="flex justify-end mt-5">
                    <div class="font-bold text-lg text-black">
                        Total {{ total }},-
                    </div>
                </div>
            </div>
            <hr class="my-10 border-gray-300 sm:mx-auto" />
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Status pembayaran</label>
                <div class="flex items-center space-x-2">
                    <select v-model="formDetailDashboardExpertKonsultasi.payment"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-44"
                        @click.prevent="dropdownOpen = !dropdownOpen">
                        <option v-for="payment in payments" :key="payment.text">{{ payment.text }}</option>
                    </select>
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Status</label>
                <div class="flex items-center space-x-2">
                    <select v-model="formDetailDashboardExpertKonsultasi.status"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-44"
                        @click.prevent="dropdownOpen = !dropdownOpen">
                        <option v-for="status in status" :key="status.text">{{ status.text }}</option>
                    </select>
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Status invoice</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-2/3"
                    v-model="formDetailDashboardExpertKonsultasi.invoice" required type="text" />
            </div>
            <hr class="my-10 border-gray-300 sm:mx-auto" />
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Rating</label>
                <div class="inline-flex space-x-3">
                    <div class="flex items-center space-x-2">
                        <select v-model="formDetailDashboardExpertKonsultasi.star"
                            class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-14"
                            @click.prevent="dropdownOpen = !dropdownOpen">
                            <option v-for="star in star" :key="star.value">{{ star.value }}</option>
                        </select>
                    </div>
                    <div class="flex flex-wrap justify-between items-center">
                        <div class="flex items-center" v-if="formDetailDashboardExpertKonsultasi.star == 5">
                            <div class="flex space-x-1">
                                <div v-for="index in 5" :key="index">
                                    <div v-if="index <= 5">
                                        <span class="sr-only">1 star</span>
                                        <svg class="w-4 h-4 fill-current text-jobhunYellow" viewBox="0 0 16 16">
                                            <path
                                                d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                        </svg>
                                    </div>
                                    <div v-else>
                                        <span class="sr-only">5 stars</span>
                                        <svg class="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                                            <path
                                                d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-between items-center" v-else-if="formDetailDashboardExpertKonsultasi.star == 4">
                            <div class="flex items-center">
                                <div class="flex space-x-1">
                                    <div v-for="index in 5" :key="index">
                                        <div v-if="index <= 4">
                                            <span class="sr-only">1 star</span>
                                            <svg class="w-4 h-4 fill-current text-jobhunYellow" viewBox="0 0 16 16">
                                                <path
                                                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                            </svg>
                                        </div>
                                        <div v-else>
                                            <span class="sr-only">5 stars</span>
                                            <svg class="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                                                <path
                                                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-between items-center" v-else-if="formDetailDashboardExpertKonsultasi.star == 3">
                            <div class="flex items-center">
                                <div class="flex space-x-1">
                                    <div v-for="index in 5" :key="index">
                                        <div v-if="index <= 3">
                                            <span class="sr-only">1 star</span>
                                            <svg class="w-4 h-4 fill-current text-jobhunYellow" viewBox="0 0 16 16">
                                                <path
                                                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                            </svg>
                                        </div>
                                        <div v-else>
                                            <span class="sr-only">5 stars</span>
                                            <svg class="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                                                <path
                                                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-between items-center" v-else-if="formDetailDashboardExpertKonsultasi.star == 2">
                            <div class="flex items-center">
                                <div class="flex space-x-1">
                                    <div v-for="index in 5" :key="index">
                                        <div v-if="index <= 2">
                                            <span class="sr-only">1 star</span>
                                            <svg class="w-4 h-4 fill-current text-jobhunYellow" viewBox="0 0 16 16">
                                                <path
                                                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                            </svg>
                                        </div>
                                        <div v-else>
                                            <span class="sr-only">5 stars</span>
                                            <svg class="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                                                <path
                                                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-between items-center" v-else-if="formDetailDashboardExpertKonsultasi.star == 1">
                            <div class="flex items-center">
                                <div class="flex space-x-1">
                                    <div v-for="index in 5" :key="index">
                                        <div v-if="index <= 1">
                                            <span class="sr-only">1 star</span>
                                            <svg class="w-4 h-4 fill-current text-jobhunYellow" viewBox="0 0 16 16">
                                                <path
                                                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                            </svg>
                                        </div>
                                        <div v-else>
                                            <span class="sr-only">5 stars</span>
                                            <svg class="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                                                <path
                                                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Bagaimana pengalamanmu menggunakan layanan ini?</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="formDetailDashboardExpertKonsultasi.review" />
            </div>
            <div>
                <div class="flex justify-end">
                    <div>
                        <button type="submit"
                            class="h-9 mt-10 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                            Simpan
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