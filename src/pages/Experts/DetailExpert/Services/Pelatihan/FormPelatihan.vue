<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import IconCalendar from '../../../../../partials/icons/icon-calendar.vue'
import IconClock from '../../../../../partials/icons/icon-clock.vue'
import IconMateri from '../../../../../partials/icons/icon-materi.vue'
import IconLinkedin from '../../../../../partials/icons/icon-linkedin.vue'
import IconTarif from '../../../../../partials/icons/icon-rupiah.vue'
import Tooltip from '../../../../../components/TooltipRed.vue'
import MultiSel from './MultipleSelectFormPelatihan.vue'
import DropdownCheckbox from './DropdownCheckbox.vue'
import { PrinterIcon } from '@heroicons/vue/20/solid'
import ModalAjukan from './ModalAjukanPelatihan.vue'
import Multiselect from '@vueform/multiselect'

const props = defineProps({
    dataExpertPelatihan: Object
})

const { dataExpertPelatihan } = props

const formExpertPelatihan = ref({
    typePelatihan: "",
    totalPerson: "",
    session: "",
    topic: "",
    startHour: "",
    startMinute: "",
    days: null
})

const days = [
    'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'
]

const isNumberCurrency = (evt) => {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
    } else {
        return true;
    }
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

const radioPelatihan = [
    {
        text: 'Privat'
    },
    {
        text: 'Grup'
    }
]

const isUserAjukan = ref(false)

const openModalAjukanPelatihan = () => {
    isUserAjukan.value = true
}

const dropdownDay = ref(false)
</script>
<style src="@vueform/multiselect/themes/default.css">

</style>
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
                    <img class="rounded-full ring-8 ring-white" :src="dataExpertPelatihan.profile.imgProfile"
                        width="200" />
                </div>
            </div>
        </div>
        <header class="mb-6">
            <div class="grid grid-flow-row md:flex">
                <div class="mb-2 flex-none md:w-2/6 mr-0 md:mr-5">
                    <h1 class="text-2xl sm:text-left text-center text-slate-800 font-bold">
                        {{ dataExpertPelatihan.profile.name }} ✨
                    </h1>
                    <div class="sm:text-left text-center mt-3">
                        <span class="text-sm">
                            Jabatan
                        </span>
                    </div>
                    <div class="sm:text-left text-center text-black">
                        <span class="font-bold text-sm">
                            {{ dataExpertPelatihan.profile.position }}
                        </span>
                    </div>
                    <div class="sm:text-left text-center mt-3">
                        <span class="text-sm">
                            Pendidikan
                        </span>
                    </div>
                    <div class="sm:text-left text-center text-black">
                        <span class="font-bold text-sm">
                            {{ dataExpertPelatihan.profile.formalEducation }}
                        </span>
                    </div>
                    <div class="sm:text-left text-center mt-3">
                        <span class="text-sm">
                            Domisili
                        </span>
                    </div>
                    <div class="text-center sm:text-left text-black">
                        <span class="font-bold text-sm">
                            {{ dataExpertPelatihan.profile.domicile }}
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
                    <div class="" v-for="services in dataExpertPelatihan.profile.detailPelatihans" :key="services">
                        <div class="w-full bg-white border border-gray-200 rounded-sm shadow-sm">
                            <div class="flex flex-col items-center p-4 my-5">
                                <div>
                                    <IconCalendar height="30px" v-if="services.id == 'jadwal'" />
                                    <IconClock height="30px" v-if="services.id == 'waktu'" />
                                </div>
                                <div class="font-bold text-center text-sm text-slate-800 mx-auto mt-2">
                                    {{ services.title }}
                                </div>
                                <div class="flex items-center text-center">
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
            </div>
            <hr class="my-10 border-gray-300 sm:mx-auto" />
        </header>
        <form action="">
            <div>
                <div>
                    <span class="text-lg font-bold text-black">
                        Daftar pelatihan
                    </span>
                </div>
                <div class="max-w-xl mt-5">
                    <div>
                        <label class="block text-sm font-medium mb-1 text-black">Jenis pelatihan</label>
                        <div class="flex items-center">
                            <input type="radio" v-model="formExpertPelatihan.typePelatihan" required value="Privat"
                                class="w-4 h-4 text-jobhunGreen bg-gray-200 border-gray-200 focus:ring-jobhunGreen focus:ring-1 hover:ring-jobhunGreen hover:ring-1">
                                <span class="text-sm ml-1 text-black">Privat</span>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" v-model="formExpertPelatihan.typePelatihan" required value="Grup"
                                class="w-4 h-4 text-jobhunGreen bg-gray-200 border-gray-200 focus:ring-jobhunGreen focus:ring-1 hover:ring-jobhunGreen hover:ring-1">
                            <span class="text-sm ml-1 text-black">Grup</span>
                        </div>
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm font-medium mb-1 text-black">Jika grup, berapa peserta yang akan mengikuti
                            pelatihan?</label>
                        <input
                            class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-md"
                            @keypress="isNumberCurrency($event)" required placeholder="Input angka" v-model="formExpertPelatihan.totalPerson" />
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm font-medium mb-1 text-black">Berapa sesi pertemuan yang diajukan?</label>
                        <input
                            class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-md"
                            @keypress="isNumberCurrency($event)" required placeholder="Input angka" v-model="formExpertPelatihan.session" />
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm font-medium mb-1 text-black">Jelaskan secara spesifik topik/pembahasan apa saja yang ingin kamu pelajari?</label>
                        <textarea rows="5"
                            class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="formExpertPelatihan.topic" />
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm font-medium mb-1 text-black">Pengajuan hari kelas</label>
                        <Multiselect v-model="formExpertPelatihan.days" mode="tags"
                            :close-on-select="false" class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm w-full"
                            :create-option="true" :options="days" />
                    </div>
                    <div class="mt-4">
                        <label class="block text-sm font-medium mb-1 text-black">Pengajuan waktu mentoring</label>
                        <div class="flex items-center space-x-2">
                            <select required v-model="formExpertPelatihan.startHour"
                                class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-14"
                                @click.prevent="dropdownOpen = !dropdownOpen">
                                <option v-for="hour in hours" :key="hour.text">{{hour.text}}</option>
                            </select>
                            <span class="px-1">:</span>
                            <select required v-model="formExpertPelatihan.startMinute"
                                class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-14">
                                <option v-for="minute in minutes" :key="minute.text">{{minute.text}}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-10">
                <div class="flex justify-end">
                    <div>
                        <button class="h-9 mt-5 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm"
                            @click="openModalAjukanPelatihan" type="submit">
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