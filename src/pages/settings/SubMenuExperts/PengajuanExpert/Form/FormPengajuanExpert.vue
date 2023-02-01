<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import Tooltip from '../../../../../components/TooltipRed.vue'
import Multiselect from '@vueform/multiselect'
import { useDataExpertStore } from '../../../../../stores/store-experts'
import flatPickr from 'vue-flatpickr-component'
import { useOptionsStore } from '../../../../../stores/store-options'

const route = useRoute()
const id = route.params.id

const formSubmissionExpertTempStore = useDataExpertStore()
const optionStore = useOptionsStore()

await formSubmissionExpertTempStore.getDataSubmissionExpertTemp(id)
const { submissionExpertTemp } = storeToRefs(formSubmissionExpertTempStore)

const { listSector, listDomicile, listService, listTitle } = storeToRefs(optionStore)

const dashboardFormTambahExpert = ref({
    image: null,
    name: '',
    email: '',
    phone_number: '',
    profession: '',
    domicile: '',
    education: {
        degree: '',
        school: '',
        start_date: null,
        end_date: null
    },
    description: '',
    company: '',
    sectors: [],
    experiences: [],
    experience_yoe: '',
    social_media: {
        linkedin: ''
    },
    available_services: [],
    teaching_experience: '',
    reason_join: '',
    reason_approve: ''
})

const availableServices = [
    { value: "training", label: "Pelatihan" },
    { value: "consultation", label: "Konsultasi" },
    { value: "invite-expert", label: "Undangan menjadi narasumber" },
    { value: "recruit-expert", label: "Proyek lepas yang berkaitan dengan bidang pekerjaan" }
]

const domiciles = [
    'Surabaya', 'Jakarta', 'Solo', 'Sidoarjo'
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

const acceptExpert = async()=>{
    await formSubmissionExpertTempStore.acceptFormJadiExpertDashboard(id)
}

const rejectExpert = async()=>{
    await formSubmissionExpertTempStore.rejectFormJadiExpertDashboard(id)
}
</script>
<style src="@vueform/multiselect/themes/default.css">

</style>
<template>
    <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-8 py-3 md:py-8">
        <div class="sm:flex sm:justify-between sm:items-center mb-5 grid grid-flow-row md:flex">
            <div class="">
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Formulir Pengajuan Menjadi Expert✨</h1>
            </div>
            <div>
                <div class="md:flex md:justify-end sm:flex sm:justify-start sm:mt-0 mt-4 space-x-4">
                    <button type="submit" class="h-8 bg-jobhunGreen hover:bg-emerald-600 text-white px-6 rounded text-sm">
                        Diterima
                    </button>
                    <button type="submit" class="h-8 bg-red-700 hover:bg-red-800 text-white px-6 rounded text-sm">
                        Ditolak
                    </button>
                </div>
            </div>
        </div>
    </div>
    <form @submit.prevent="tambahExpert()">
        <div class="grid grid-flow-row md:flex flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-8">
            <div class="flex-none md:w-1/1">
                <div class="mb-4 sm:mb-0">
                    <img class="border-2 w-48 h-48 rounded-lg" v-if="submissionExpertTemp.image == null"
                        src="../../../../../images/dummy/dummy-profile.png">
                    <img class="border-2 w-48 h-48 rounded-lg" v-else
                        :src="submissionExpertTemp.image" />
                </div>
            </div>
            <div class="grid md:grid-cols-1 md:flex-auto md:max-w-4xl md:min-w-0 md:mx-auto md:px-8 px-0 md:mt-0 mt-4">
                <div class="">
                    <label class="block text-sm font-medium mb-1 text-black">Nama lengkap</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="submissionExpertTemp.name" type="text" readonly />
                </div> 
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Alamat email</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="submissionExpertTemp.email" type="text" readonly />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Nomor HP</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="submissionExpertTemp.phone_number" @keypress="isInputNumber($event)" type="text" readonly />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Jabatan</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="submissionExpertTemp.profession" type="text" readonly />
                </div>
            </div>
        </div>
        <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-8 md:mt-0 -mt-4">
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Pendidikan</label>
            </div>
            <div class="mt-4 items-center grid-flow-row md:flex">
                <div class="flex-none md:w-32">
                    <label class="block text-sm mb-1">Gelar</label>
                </div>
                <div class="grid md:grid-cols-1 md:w-3/5">
                    <Multiselect v-model="submissionExpertTemp.education.degree"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm w-full ml-0"
                        :options="listTitle" :object="true" />
                </div>
            </div>
            <div class="mt-4 items-center grid-flow-row md:flex">
                <div class="flex-none md:w-32">
                    <label class="block text-sm mb-1">Asal Instansi Pendidikan</label>
                </div>
                <div class="grid md:grid-cols-1 md:w-3/5">
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="submissionExpertTemp.education.school" type="text" readonly />
                </div>
            </div>
            <div class="mt-4 items-center grid-flow-row md:flex">
                <div class="flex-none md:w-32">
                    <label class="block text-sm mb-1">Tanggal mulai</label>
                </div>
                <d iv class="grid md:grid-cols-1 md:w-2/5">
                    <div class="max-w-md">
                        <flat-pickr disabled="true"
                            class="form-input pl-9 border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm"
                            :config="config" v-model="submissionExpertTemp.education.start_date" ></flat-pickr>
                        <div class="absolute inset-0 right-auto flex items-center pointer-events-none">
                            <svg class="w-4 h-4 fill-gray-700 ml-3" viewBox="0 0 16 16">
                                <path
                                    d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
                            </svg>
                        </div>
                    </div>
                </d>
            </div>
            <div class="mt-4 items-center grid-flow-row md:flex">
                <div class="flex-none md:w-32">
                    <label class="block text-sm mb-1">Tanggal berakhir</label>
                </div>
                <div class="grid md:grid-cols-1 md:w-2/5">
                    <div class="max-w-md">
                        <flat-pickr disabled="true"
                            class="form-input pl-9 border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm"
                            :config="config" v-model="submissionExpertTemp.education.end_date"></flat-pickr>
                        <div class="absolute inset-0 right-auto flex items-center pointer-events-none">
                            <svg class="w-4 h-4 fill-gray-700 ml-3" viewBox="0 0 16 16">
                                <path
                                    d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">
                    Domisili
                </label>
                <Multiselect v-model="submissionExpertTemp.domicile"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm w-full ml-0"
                    :options="listDomicile" disabled="true" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">
                    Deskripsi diri
                </label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="submissionExpertTemp.description" type="text" readonly />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Asal perusahaan</label>
                <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="submissionExpertTemp.company" type="text" readonly />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Bidang yang dikuasai</label>
                <Multiselect :close-on-select="false" disabled="true"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm w-full ml-0"
                    :classes="{ containerActive: 'ring-0', search: 'w-full absolute inset-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen appearance-none border-0 text-base font-sans rounded pl-3.5 rtl:pl-0 rtl:pr-3.5', }"
                    :create-option="true" :options="listSector" mode="multiple" :object="true"
                    v-model="submissionExpertTemp.sectors">
                    <template v-slot:multiplelabel="{ values }">
                        <div class="multiselect-multiple-label">
                            {{ values.length }} bidang terpilih
                        </div>
                    </template>
                </Multiselect>
                <div class="mb-2" v-if="submissionExpertTemp.sectors != ''">
                    <div>
                        <span id="badge-dismiss-default" v-for="sectors in submissionExpertTemp.sectors" :key="sectors.label"
                            class="inline-flex items-center py-1 px-2 mr-2 mt-2 text-sm font-medium text-white bg-jobhunGreen rounded">
                            {{ sectors.label}}
                            <button type="button" @click="deleteSelectedSector(sectors)"
                                class="inline-flex items-center p-0.5 ml-2 my-1 text-sm text-white bg-transparent rounded-sm hover:bg-gray-50 hover:text-black"
                                data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                                <svg class="w-3.5 h-3.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            <hr class="my-5">
            <div v-for="experience, index in submissionExpertTemp.experiences" :key="index">
                <div class="mt-4" v-if="index == 0">
                    <label class="block text-sm font-medium mb-1 text-black">Pengalaman kerja</label>
                </div>
                <div class="mt-4" v-if="index > 0">
                    <label class="block text-sm font-medium mb-1 text-black">Pengalaman kerja {{ index + 1 }}</label>
                </div>
                <div class="mt-4 items-center grid-flow-row md:flex">
                    <div class="flex-none md:w-32">
                        <label class="block text-sm mb-1">Posisi</label>
                    </div>
                    <div class="grid md:grid-cols-1 md:w-3/5">
                        <input
                            class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="submissionExpertTemp.experiences[index].title" type="text" readonly />
                    </div>
                </div>
                <div class="mt-4 items-center grid-flow-row md:flex">
                    <div class="flex-none md:w-32">
                        <label class="block text-sm mb-1">Lokasi</label>
                    </div>
                    <div class="grid md:grid-cols-1 md:w-3/5">
                        <input
                            class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="submissionExpertTemp.experiences[index].location" type="text" readonly />
                    </div>
                </div>
                <div class="mt-4 items-center grid-flow-row md:flex">
                    <div class="flex-none md:w-32">
                        <label class="block text-sm mb-1">Tanggal mulai</label>
                    </div>
                    <div class="grid md:grid-cols-1 md:w-2/5">
                        <div class="max-w-md">
                            <flat-pickr disabled="true"
                                class="form-input pl-9 border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm"
                                :config="config" v-model="submissionExpertTemp.experiences[index].start_date"></flat-pickr>
                            <div class="absolute inset-0 right-auto flex items-center pointer-events-none">
                                <svg class="w-4 h-4 fill-gray-700 ml-3" viewBox="0 0 16 16">
                                    <path
                                        d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 items-center grid-flow-row md:flex">
                    <div class="flex-none md:w-32">
                        <label 
                        class="block text-sm mb-1">Tanggal berakhir</label>
                    </div>
                    <div class="grid md:grid-cols-2 md:w-3/5">
                        <div class="">
                            <flat-pickr disabled="true"
                                class="form-input pl-9 border-0 disabled:bg-slate-50 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm"
                                :config="config" v-model="submissionExpertTemp.experiences[index].end_date"></flat-pickr>
                            <div class="absolute inset-0 right-auto flex items-center pointer-events-none">
                                <svg class="w-4 h-4 fill-gray-700 ml-3" viewBox="0 0 16 16">
                                    <path
                                        d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="my-5">
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Durasi bekerja</label>
                <input
                    class="border-0 inline-flex bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-20"
                    required @keypress="isInputNumber($event)" v-model="submissionExpertTemp.experience_yoe" type="text" readonly />
                <span class="text-sm">
                    tahun
                </span>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">
                    Url akun Linkedin
                </label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="submissionExpertTemp.social_media.linkedin" type="text" readonly />
            </div>
            
            <div class="mt-4 inline-flex items-center">
                <label class="block text-sm font-medium mb-1 text-black">
                    Layanan yang bisa ditangani
                </label>
                <Tooltip position="right" class="ml-2">
                    <div class="text-xs whitespace-nowrap text-black">Bisa dipilih lebih dari 1</div>
                </Tooltip>
            </div>
            <div class="mt-1">
                <Multiselect :close-on-select="false" disabled="true"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm w-full ml-0"
                    :classes="{ containerActive: 'ring-0', search: 'w-full absolute inset-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen appearance-none border-0 text-base font-sans rounded pl-3.5 rtl:pl-0 rtl:pr-3.5', }"
                    :create-option="true" :options="listService" mode="multiple"
                    :object="true" v-model="submissionExpertTemp.available_services">
                    <template v-slot:multiplelabel="{ values }">
                        <div class="multiselect-multiple-label">
                            {{ values.length }} layanan terpilih
                        </div>
                    </template>
                </Multiselect>
                <div class="mb-2" v-if="submissionExpertTemp.available_services != ''">
                    <div>
                        <span id="badge-dismiss-default" v-for="availableServices in submissionExpertTemp.available_services"
                            :key="availableServices.label"
                            class="inline-flex items-center py-1 px-2 mr-2 mt-2 text-sm font-medium text-white bg-jobhunGreen rounded">
                            {{availableServices.label}}
                            <button type="button" @click="deleteAvailableServices(availableServices)"
                                class="inline-flex items-center p-0.5 ml-2 my-1 text-sm text-white bg-transparent rounded-sm hover:bg-gray-50 hover:text-black"
                                data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                                <svg class="w-3.5 h-3.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Apakah kamu memiliki pengalaman mengajar
                    sebelumnya?</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="submissionExpertTemp.teaching_experience"  type="text" readonly />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Mengapa kamu tertarik mendaftar menjadi expert
                    di Jobhun?</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="submissionExpertTemp.reason_join"  type="text" readonly />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Mengapa Jobhun harus memilih kamu sebagai
                    expert?</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="submissionExpertTemp.reason_approve"  type="text" readonly />
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