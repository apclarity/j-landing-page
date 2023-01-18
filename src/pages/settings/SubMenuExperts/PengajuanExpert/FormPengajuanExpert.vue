<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import Tooltip from '../../../../components/TooltipRed.vue'
import Multiselect from '@vueform/multiselect'
import { useLayoutStore } from '../../../layout/store'
import { validatePicture, getBase64Image } from '../../../../utils/Helper'
import { useDataExpertStore } from '../../../../stores/store-experts'
import flatPickr from 'vue-flatpickr-component'
import { useOptionsStore } from '../../../../stores/store-options'

const route = useRoute()

const formJadiExpertDashboardStore = useDataExpertStore()
const optionStore = useOptionsStore()

const { formJadiExpertDashboard } = storeToRefs(formJadiExpertDashboardStore)
const { listSector } = storeToRefs(optionStore)

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
    experiences: [
        {
            title: '',
            location: '',
            start_date: null,
            end_date: null
        },
        {
            title: '',
            location: '',
            start_date: null,
            end_date: null
        }
    ],
    experience_yoe: '',
    social_media: '',
    available_services: [],
    teaching_experience: '',
    reason_join: '',
    reason_approve: ''
})

const isUserStillWork = ref(false)

const checkboxUserStillWork = () => {
    isUserStillWork.value = true
    dashboardFormTambahExpert.value.experiences[index].end_date = ''

}

const addExperiences = () => {
    dashboardFormTambahExpert.value.experiences.push({
        title: '',
        location: '',
        start_date: null,
        end_date: null
    })
}

const deleteExperiences = (index) => {
    dashboardFormTambahExpert.value.experiences.splice(index, 1)
}

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
    dateFormat: 'M j, Y',
    prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
    nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
}

const tambahExpert = async ()=> {
    console.log(dashboardFormTambahExpert.value)
    if (dashboardFormTambahExpert.value.image != '' && dashboardFormTambahExpert.value.name != '' && dashboardFormTambahExpert.value.email != '' &&
        dashboardFormTambahExpert.value.phone_number != '' && dashboardFormTambahExpert.value.profession != '' && dashboardFormTambahExpert.value.education.degree != '' &&
        dashboardFormTambahExpert.value.education.start_date != '' && dashboardFormTambahExpert.value.education.end_date != '' && dashboardFormTambahExpert.value.education.school != '' &&
        dashboardFormTambahExpert.value.domicile != '' && dashboardFormTambahExpert.value.description != '' && dashboardFormTambahExpert.value.company != '' &&
        dashboardFormTambahExpert.value.sectors != '' && dashboardFormTambahExpert.value.experiences.title != '' && dashboardFormTambahExpert.value.experiences.location != '' &&
        dashboardFormTambahExpert.value.experiences.start_date != '' && dashboardFormTambahExpert.value.experiences.end_date != '' && dashboardFormTambahExpert.value.experience_yoe != '' && dashboardFormTambahExpert.value.social_media != '' &&
        dashboardFormTambahExpert.value.available_services != '' && dashboardFormTambahExpert.value.teaching_experience != '' && dashboardFormTambahExpert.value.reason_join != '' &&
        dashboardFormTambahExpert.value.reason_approve != '') {
        console.log(dashboardFormTambahExpert.value)
        if (await formJadiExpertDashboardStore.formJadiExpertDashboard(dashboardFormTambahExpert.value)) {
            return
        }
    }
}

const isImageChanged = ref(false)

const choosePhoto = ()=>{
    document.getElementById("fileUpload").click()
}

const validateImageRatio = async(e)=>{
    var ratio = "1:1";
    var maxSize = 1 * 1024 * 1024;
    var validationRes = await validatePicture(e, ratio, maxSize);
    if (!validationRes.isOk) {
        alert(validationRes.message);
        return;
    }
    isImageChanged.value = true;
    let base64img = await getBase64Image(validationRes.theImage);
    dashboardFormTambahExpert.value.image = base64img;
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

const isUserAjukan = ref(false)
const openModalJadiExpertDashboard = () => {
    isUserAjukan.value = true
}

const deleteAvailableServices = (availableServices) => {
    let selectedItems = dashboardFormTambahExpert.value.availableServices
    let index = -1
    for (let i = 0; i < selectedItems.length; i++) {
        if (availableServices == selectedItems[i]) {
            index = i
            break
        }
    }
    if (index < 0) {
        return
    }
    selectedItems.splice(index, 1)
    dashboardFormTambahExpert.value.availableServices = selectedItems
}

const deleteSelectedSector = (sectors) => {
    let selectedItems = dashboardFormTambahExpert.value.sectors
    let index = -1
    for (let i = 0; i < selectedItems.length; i++) {
        if (sectors == selectedItems[i]) {
            index = i
            break
        }
    }
    if (index < 0) {
        return
    }
    selectedItems.splice(index, 1)
    dashboardFormTambahExpert.value.sectors = selectedItems
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
                    <img class="border-2 w-48 h-48 rounded-lg" v-if="dashboardFormTambahExpert.image == null"
                        src="../../../../images/dummy/dummy-profile.png">
                    <img class="border-2 w-48 h-48 rounded-lg" v-else
                        :src="dashboardFormTambahExpert.image" />
                </div>
            </div>
            <div class="grid md:grid-cols-1 md:flex-auto md:max-w-4xl md:min-w-0 md:mx-auto md:px-8 px-0 md:mt-0 mt-4">
                <div class="">
                    <label class="block text-sm font-medium mb-1 text-black">Nama lengkap</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="dashboardFormTambahExpert.name" type="text" readonly />
                </div> 
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Alamat email</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="dashboardFormTambahExpert.email" type="text" readonly />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Nomor HP</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="dashboardFormTambahExpert.phone_number" @keypress="isInputNumber($event)" type="text" readonly />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Jabatan</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="dashboardFormTambahExpert.profession" type="text" readonly />
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
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="dashboardFormTambahExpert.education.degree" type="text" readonly />
                </div>
            </div>
            <div class="mt-4 items-center grid-flow-row md:flex">
                <div class="flex-none md:w-32">
                    <label class="block text-sm mb-1">Asal Instansi Pendidikan</label>
                </div>
                <div class="grid md:grid-cols-1 md:w-3/5">
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="dashboardFormTambahExpert.education.school" type="text" readonly />
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
                            :config="config" v-model="dashboardFormTambahExpert.education.start_date" ></flat-pickr>
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
                            :config="config" v-model="dashboardFormTambahExpert.education.end_date"></flat-pickr>
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
                <Multiselect v-model="dashboardFormTambahExpert.domicile"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm w-full ml-0"
                    :options="domiciles" disabled="true" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">
                    Deskripsi diri
                </label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="dashboardFormTambahExpert.description" type="text" readonly />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Asal perusahaan</label>
                <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="dashboardFormTambahExpert.company" type="text" readonly />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Bidang yang dikuasai</label>
                <Multiselect :close-on-select="false" disabled="true"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm w-full ml-0"
                    :classes="{ containerActive: 'ring-0', search: 'w-full absolute inset-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen appearance-none border-0 text-base font-sans rounded pl-3.5 rtl:pl-0 rtl:pr-3.5', }"
                    :create-option="true" :options="listSector" mode="multiple" :object="true"
                    v-model="dashboardFormTambahExpert.sectors">
                    <template v-slot:multiplelabel="{ values }">
                        <div class="multiselect-multiple-label">
                            {{ values.length }} bidang terpilih
                        </div>
                    </template>
                </Multiselect>
                <div class="mb-2" v-if="dashboardFormTambahExpert.sectors != ''">
                    <div>
                        <span id="badge-dismiss-default" v-for="sectors in dashboardFormTambahExpert.sectors" :key="sectors.label"
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
            <div v-for="experience, index in dashboardFormTambahExpert.experiences" :key="index">
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
                            required v-model="dashboardFormTambahExpert.experiences[index].title" type="text" readonly />
                    </div>
                </div>
                <div class="mt-4 items-center grid-flow-row md:flex">
                    <div class="flex-none md:w-32">
                        <label class="block text-sm mb-1">Lokasi</label>
                    </div>
                    <div class="grid md:grid-cols-1 md:w-3/5">
                        <input
                            class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="dashboardFormTambahExpert.experiences[index].location" type="text" readonly />
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
                                :config="config" v-model="dashboardFormTambahExpert.experiences[index].start_date"></flat-pickr>
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
                                :config="config" v-model="dashboardFormTambahExpert.experiences[index].end_date"></flat-pickr>
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
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Durasi bekerja</label>
                <input
                    class="border-0 inline-flex bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-20"
                    required @keypress="isInputNumber($event)" v-model="dashboardFormTambahExpert.experience_yoe" type="text" readonly />
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
                    required v-model="dashboardFormTambahExpert.social_media" type="text" readonly />
            </div>
            
            <div class="mt-4 inline-flex items-center">
                <label class="block text-sm font-medium mb-1 text-black">
                    Layanan yang bisa ditangani
                </label>
                <Tooltip position="right" class="text-red-800 ml-2">
                    <div class="text-xs whitespace-nowrap text-black">Bisa dipilih lebih dari 1</div>
                </Tooltip>
            </div>
            <div class="mt-1">
                <Multiselect :close-on-select="false" disabled="true"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm w-full ml-0"
                    :classes="{ containerActive: 'ring-0', search: 'w-full absolute inset-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen appearance-none border-0 text-base font-sans rounded pl-3.5 rtl:pl-0 rtl:pr-3.5', }"
                    :create-option="true" :options="availableServices" mode="multiple"
                    :object="true" v-model="dashboardFormTambahExpert.available_services">
                    <template v-slot:multiplelabel="{ values }">
                        <div class="multiselect-multiple-label">
                            {{ values.length }} layanan terpilih
                        </div>
                    </template>
                </Multiselect>
                <div class="mb-2" v-if="dashboardFormTambahExpert.available_services != ''">
                    <div>
                        <span id="badge-dismiss-default" v-for="availableServices in dashboardFormTambahExpert.available_services"
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
                    required v-model="dashboardFormTambahExpert.teaching_experience"  type="text" readonly />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Mengapa kamu tertarik mendaftar menjadi expert
                    di Jobhun?</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="dashboardFormTambahExpert.reason_join"  type="text" readonly />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Mengapa Jobhun harus memilih kamu sebagai
                    expert?</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="dashboardFormTambahExpert.reason_approve"  type="text" readonly />
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