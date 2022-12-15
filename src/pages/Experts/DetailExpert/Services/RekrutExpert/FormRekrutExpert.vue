<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import IconStar from '../../../../../partials/icons/icon-star.vue'
import IconBriefcase from '../../../../../partials/icons/icon-briefcase.vue'
import IconLinkedin from '../../../../../partials/icons/icon-linkedin.vue'
import DateSingle from './DateSingleRekrutExpert.vue'
import { PrinterIcon } from '@heroicons/vue/20/solid'
import ModalAjukan from './ModalAjukanRekrutExpert.vue'
import RegionJSON from '../../../../../utils/json/regencies.json'
import { convertRawIntToRupiah } from '../../../../../utils/Helper'

const props = defineProps({
    dataRekrutExpert: Object
})

const { dataRekrutExpert } = props

const formRekrutExpert = ref({
    company: "",
    location: "",
    website: "",
    linkedin: "",
    email: "",
    phone: "",
    projectDetail: "",
    jobDetail: "",
    termCondition: "",
    deadline: "",
    budget: ""
})

const formatBudget = ()=>{
    formRekrutExpert.value.budget = convertRawIntToRupiah(formRekrutExpert.value.budget)
}

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

const isUserAjukan = ref(false)

const openModalAjukanPelatihan = () => {
    isUserAjukan.value = true
}
</script>
<template>
    <div class="relative h-96 bg-slate-200 -z-20 -mt-10 md:mt-0">
        <img class="object-cover h-full w-full object-top"
            src="../../../../../images/jobhun-ilustration-background/banner-ilustrasi-01.png"
            alt="Profile background" />
    </div>
    <div class="lg:px-60 px-10 mb-10">
        <div class="-mt-32 mb-6 sm:mb-3 md:flex">
            <div class="flex flex-col items-center md:w-1/4 sm:flex-row sm:justify-between sm:items-end">
                <div class="inline-flex -mt-1 mb-4 sm:mb-0">
                    <img class="rounded-full ring-8 ring-white" :src="dataRekrutExpert.image"
                        width="200" />
                </div>
            </div>
        </div>
        <header class="mb-6">
            <div class="grid grid-flow-row md:flex">
                <div class="mb-2 flex-none md:w-2/6 mr-0 md:mr-5">
                    <h1 class="text-2xl sm:text-left text-center text-slate-800 font-bold">
                        {{ dataRekrutExpert.name }} ✨
                    </h1>
                    <div class="sm:text-left text-center mt-3">
                        <span class="text-sm">
                            Jabatan
                        </span>
                    </div>
                    <div class="sm:text-left text-center text-black">
                        <span class="font-bold text-sm">
                            {{ dataRekrutExpert.profession }}
                        </span>
                    </div>
                    <div class="sm:text-left text-center mt-3">
                        <span class="text-sm">
                            Pendidikan
                        </span>
                    </div>
                    <div class="sm:text-left text-center text-black">
                        <span class="font-bold text-sm">
                            {{ dataRekrutExpert.education.school }}
                        </span>
                    </div>
                    <div class="sm:text-left text-center mt-3">
                        <span class="text-sm">
                            Domisili
                        </span>
                    </div>
                    <div class="text-center sm:text-left text-black">
                        <span class="font-bold text-sm">
                            {{ dataRekrutExpert.domicile }}
                        </span>
                    </div>
                    <div class="flex justify-center items-center sm:justify-start">
                        <a :href="dataRekrutExpert.social_media.linkedin"
                            class="text-jobhunGreen mt-3 hover:text-gray-900 duration-300">
                            <IconLinkedin class="w-7 h-7" />
                        </a>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 gap-6 w-full h-1/2">
                    <div class="w-full bg-white border border-gray-200 rounded-sm shadow-sm">
                        <div class="flex flex-col items-center p-4 my-5">
                            <div>
                                <IconStar height="30px"/>
                            </div>
                            <div class="font-bold text-sm text-center text-slate-800 mx-auto mt-2">
                                Kemampuan yang dimiliki
                            </div>
                            <div class="text-center">
                                <div class="text-sm inline-flex"
                                    v-for="(capabilities, index) in dataRekrutExpert.service.recruit_expert.capabilities" :key="index">
                                    <div>
                                        <span v-if="index != 0">, </span>{{ capabilities }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full bg-white border border-gray-200 rounded-sm shadow-sm">
                        <div class="flex flex-col items-center p-4 my-5">
                            <div>
                                <IconBriefcase height="30px"/>
                            </div>
                            <div class="font-bold text-sm text-center text-slate-800 mx-auto mt-2">
                                Jenis pekerjaan yang bisa diterima
                            </div>
                            <div class="text-center">
                                <div class="text-sm inline-flex" v-for="(typeOfWorks, index) in dataRekrutExpert.service.recruit_expert.acceptable_type_of_works" :key="index">
                                    <div>
                                        <span v-if="index != 0">, </span>{{ typeOfWorks }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="my-10 border-gray-300 sm:mx-auto" />
        </header>
        <form action="">
            <div>
                <div>
                    <span class="text-lg font-bold text-black">
                        Pengajuan Expert untuk Proyek
                    </span>
                </div>
                <div class="max-w-xl mt-5">
                    <div>
                        <label class="block text-sm font-medium mb-1 text-black">Nama perusahaan</label>
                        <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="formRekrutExpert.company" />
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm font-medium mb-1 text-black">Lokasi perusahaan</label>
                        <div class="flex items-center">
                            <select required v-model="formRekrutExpert.location"
                                class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                @click.prevent="dropdownOpen = !dropdownOpen">
                                <option v-for="city in jsonCity" :key="city">{{city.name}}</option>
                            </select>
                            
                        </div>
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm font-medium mb-1 text-black">Website perusahaan</label>
                        <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="formRekrutExpert.website" />
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm font-medium mb-1 text-black">LinkedIn perusahaan</label>
                        <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="formRekrutExpert.linkedin" />
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm font-medium mb-1 text-black">Email perusahaan</label>
                        <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="formRekrutExpert.email" type="email" />
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm font-medium mb-1 text-black">Nomor telepon perusahaan</label>
                        <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="formRekrutExpert.phone" />
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm font-medium mb-1 text-black">Detail proyek</label>
                        <textarea rows="5"
                            class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="formRekrutExpert.projectDetail" />
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm font-medium mb-1 text-black">Detail pekerjaan expert</label>
                        <textarea rows="5"
                            class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="formRekrutExpert.jobDetail" />
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm font-medium mb-1 text-black">Syarat dan kualifikasi</label>
                        <textarea rows="5"
                            class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="formRekrutExpert.termCondition" />
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm font-medium mb-1 text-black">Batas waktu pekerjaan</label>
                        <div class="flex items-center space-x-2">
                            <DateSingle v-model="formRekrutExpert.deadline" />
                        </div>
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm font-medium mb-1 text-black">Budget yang dimiliki</label>
                        <input
                            class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-md"
                            @input="formatBudget" placeholder="Rp" required v-model="formRekrutExpert.budget" />
                    </div>
                </div>
            </div>
            <div class="mt-10">
                <div class="flex justify-end">
                    <div>
                        <button class="h-9 mt-5 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm"
                            type="submit" @click="openModalAjukanPelatihan">
                            Ajukan
                        </button>
                        <ModalAjukan :isUserAjukan="isUserAjukan" @close-modal="isUserAjukan = false" />
                    </div>
                </div>
            </div>
        </form>
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