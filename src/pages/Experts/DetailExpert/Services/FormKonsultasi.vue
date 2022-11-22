<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import IconCalendar from '../../../../partials/icons/icon-calendar.vue'
import IconClock from '../../../../partials/icons/icon-clock.vue'
import IconMateri from '../../../../partials/icons/icon-materi.vue'
import IconLinkedin from '../../../../partials/icons/icon-linkedin.vue'
import IconTarif from '../../../../partials/icons/icon-rupiah.vue'
import Tooltip from '../../../../components/TooltipRed.vue'
import DateSingle from './DateSingle.vue'
import MultiSel from './MultipleSelectFormKonsultasi.vue'
import { PrinterIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
    dataExpertKonsultasi: Object
})

const { dataExpertKonsultasi } = props

const duration = ref(1)
const price = ref(dataExpertKonsultasi.profile.price)

const increment = ()=>{
    duration.value += 1
}

const decrement = ()=>{
    if(duration.value === 1) return
    duration.value -= 1
}

const pricePerHour = computed(()=>{
    var pricePerHour = price.value
    return "Rp" + pricePerHour.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")
    return pricePerHour
})

const total = computed(()=> {
    var total = duration.value * price.value
    return "Rp" + total.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")
    return total
})
const itemTopic = [
    {
        id: 1,
        title: 'Submarine',
    },
    {
        id: 2,
        title: 'Astronout',
    },
    {
        id: 3,
        title: 'Kang Kayu',
    },
    {
        id: 4,
        title: 'Petani',
    },
    {
        id: 5,
        title: 'Robotics',
    },
    {
        id: 6,
        title: 'Cooking',
    },
    {
        id: 7,
        title: 'Mechanics',
    },
    {
        id: 8,
        title: 'Engineer',
    },
    {
        id: 9,
        title: 'Submarine',
    },
    {
        id: 10,
        title: 'Submarine',
    },
    {
        id: 4,
        title: 'Petani',
    },
    {
        id: 5,
        title: 'Robotics',
    },
    {
        id: 6,
        title: 'Cooking',
    },
    {
        id: 7,
        title: 'Mechanics',
    },
    {
        id: 8,
        title: 'Engineer',
    },
    {
        id: 9,
        title: 'Submarine',
    },
    {
        id: 10,
        title: 'Submarine',
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

const dropdownOpen = ref(false)
</script>
<template>
    <div class="relative h-96 bg-slate-200 -z-20 -mt-10 md:mt-0">
        <img class="object-cover h-full w-full object-top"
            src="../../../../images/jobhun-ilustration-background/banner-ilustrasi-01.png" alt="Profile background" />
    </div>
    <div class="lg:px-60 px-10 mb-10">
        <div class="-mt-32 mb-6 sm:mb-3 md:flex">
            <div class="flex flex-col items-center md:w-1/4 sm:flex-row sm:justify-between sm:items-end">
                <div class="inline-flex -mt-1 mb-4 sm:mb-0">
                    <img class="rounded-full ring-8 ring-white" :src="dataExpertKonsultasi.profile.imgProfile" width="200" />
                </div>
            </div>
        </div>
        <header class="mb-6">
            <div class="grid grid-flow-row md:flex">
                <div class="mb-2 flex-none md:w-2/6 mr-0 md:mr-5">
                    <h1 class="text-2xl sm:text-left text-center text-slate-800 font-bold">{{ dataExpertKonsultasi.profile.name }} ✨
                    </h1>
                    <div class="sm:text-left text-center mt-3">
                        <span class="text-sm">
                            Jabatan
                        </span>
                    </div>
                    <div class="sm:text-left text-center text-black">
                        <span class="font-bold text-sm">
                            {{ dataExpertKonsultasi.profile.position }}
                        </span>
                    </div>
                    <div class="sm:text-left text-center mt-3">
                        <span class="text-sm">
                            Pendidikan
                        </span>
                    </div>
                    <div class="sm:text-left text-center text-black">
                        <span class="font-bold text-sm">
                            {{ dataExpertKonsultasi.profile.formalEducation }}
                        </span>
                    </div>
                    <div class="sm:text-left text-center mt-3">
                        <span class="text-sm">
                            Domisili
                        </span>
                    </div>
                    <div class="text-center sm:text-left text-black">
                        <span class="font-bold text-sm">
                            {{ dataExpertKonsultasi.profile.domicile }}
                        </span>
                    </div>
                    <div class="flex justify-center items-center sm:justify-start">
                        <a href="https://www.linkedin.com/company/13406000/"
                            class="text-jobhunGreen mt-3 hover:text-gray-900 duration-300">
                            <IconLinkedin class="w-7 h-7" />
                        </a>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 gap-6 w-full">
                    <div class="" v-for="services in dataExpertKonsultasi.profile.detailKonsultasis" :key="services">
                        <div class="w-full bg-white border border-gray-200 rounded-sm shadow-sm">
                            <div class="flex flex-col items-center p-4 my-5">
                                <div>
                                    <IconCalendar height="30px" v-if="services.id == 'jadwal'" />
                                    <IconClock height="30px" v-if="services.id == 'waktu'" />
                                    <IconMateri height="30px" v-if="services.id == 'posisi'" />
                                    <IconTarif height="30px" v-if="services.id == 'tarif'" />
                                </div>
                                <div class="font-bold text-sm text-slate-800 mx-auto mt-2">
                                    {{ services.title }}
                                </div>
                                <div class="flex items-center">
                                    <div class="text-sm" v-if="services.id != 'tarif'">
                                        {{ services.desc }}
                                    </div>
                                    <div class="text-sm" v-else>
                                        Tarif {{ pricePerHour }},-/jam
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="flex justify-end mt-5">
                    <div class="font-bold text-lg text-black">
                        Tarif {{ pricePerHour }},-/jam
                    </div>
                </div> -->
                </div>
            <hr class="my-10 border-gray-300 sm:mx-auto" />
        </header>
        <div>
            <div>
                <span class="text-lg font-bold text-black">
                    Daftar konsultasi
                </span>
            </div>
            <div class="max-w-xl mt-5">
                <div>
                    <label class="block text-sm font-medium mb-1 text-black">Pengajuan tanggal mentoring</label>
                    <div class="flex items-center space-x-2">
                        <DateSingle />
                        <Tooltip position="right" class="">
                            <div class="text-xs whitespace-nowrap">Silakan sesuaikan dengan jadwal expert yang tersedia</div>
                        </Tooltip>
                    </div>
                    
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Pengajuan waktu mentoring</label>
                    <!-- <input type="text" 
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required placeholder="Silakan sesuaikan dengan jadwal mentor yang tersedia"> -->
                        <div class="flex items-center space-x-2">
                            <select required 
                                class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-14"
                                @click.prevent="dropdownOpen = !dropdownOpen">
                                <option v-for="hour in hours" :key="hour.text">{{hour.text}}</option>
                            </select>
                            <span class="px-1">:</span>
                            <select required
                                class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-14">
                                <option v-for="minute in minutes" :key="minute.text">{{minute.text}}</option>
                            </select>
                            <span class="text-1xl px-3">-</span>
                            <select required
                                class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-14">
                                <option v-for="hour in hours" :key="hour.text">{{hour.text}}</option>
                            </select>
                            <span class="px-1">:</span>
                            <select required
                                class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-14">
                                <option v-for="minute in minutes" :key="minute.text">{{minute.text}}</option>
                            </select>
                            <Tooltip position="right" class="">
                                <div class="text-xs whitespace-nowrap">Silakan sesuaikan dengan jadwal expert yang tersedia</div>
                            </Tooltip>
                        </div>
                    </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Durasi mentoring</label>
                    <div class="custom-number-input w-32">
                        <div class="flex flex-row h-8 w-full rounded-lg relative bg-transparent mt-1">
                            <button @click="decrement()"
                                class=" border-0 bg-gray-100 hover:bg-gray-300 hover:ring-emerald-500 focus:ring-jobhunGreen h-full w-20 rounded-l cursor-pointer outline-none">
                                <span class="m-auto text-2xl font-thin">−</span>
                            </button>
                            <div type="number"
                                class="border-0 bg-gray-100 hover:ring-emerald-500 focus:ring-jobhunGreen p-1.5 text-sm w-full text-center flex items-center text-gray-700"
                                >
                                {{duration}} jam
                            </div>
                            <button @click="increment()"
                                class="border-0 bg-gray-100 hover:bg-gray-300 hover:ring-emerald-500 focus:ring-jobhunGreen h-full w-20 rounded-r cursor-pointer">
                                <span class="m-auto text-2xl font-thin">+</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Jenis pembahasan</label>
                    <MultiSel :topics="itemTopic" class="w-full"  />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Jelaskan secara spesifik topik/pembahasan apa saja yang ingin kamu pelajari dari expert!</label>
                    <textarea rows="5" class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required/>
                </div>
            </div>
        </div>
        <hr class="my-10 border-gray-300 sm:mx-auto" />
        <div>
            <div class="flex justify-end mt-5">
                <div class="font-bold text-lg text-black">
                    Total {{ total }},-
                </div>
            </div>
        </div>
        <div>
            <div class="flex justify-end">
                <div>
                    <button class="h-9 mt-5 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                        <router-link to="/">Ajukan</router-link>
                    </button>
                </div>
            </div>
        </div>
    </div>
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