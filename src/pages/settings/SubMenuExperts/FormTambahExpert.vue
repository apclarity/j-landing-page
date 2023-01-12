<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import Tooltip from '../../../components/TooltipRed.vue'
import { PrinterIcon } from '@heroicons/vue/20/solid'
import Multiselect from '@vueform/multiselect'
import { useLayoutStore } from '../../layout/store'
import { validatePicture, getBase64Image } from '../../../utils/Helper'
import { useDataExpertStore } from '../../../stores/store-experts'
import DateSingle from './DateSingle.vue'

const route = useRoute()

const formJadiExpertDashboardStore = useDataExpertStore()

const { formJadiExpertDashboard } = storeToRefs(formJadiExpertDashboardStore)

const layoutStore = useLayoutStore()

const session = computed(() => layoutStore.session)
layoutStore.getSession()
const isSessionEmpty = computed(() => isObjectEmpty(layoutStore.sessionFirstName))

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
        start_date: '',
        end_date: ''
    },
    description: '',
    company: '',
    sectors: '',
    experiences: {
        title: '',
        location: '',
        start_date: '',
        end_date: ''
    },
    experience_yoe: '',
    social_media: '',
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

const jadiExpert = async () => {
    if (dashboardFormTambahExpert.value.image == '' && dashboardFormTambahExpert.value.name == '' && dashboardFormTambahExpert.value.email == '' &&
        dashboardFormTambahExpert.value.phone_number == '' && dashboardFormTambahExpert.value.profession == '' && dashboardFormTambahExpert.value.education.degree == '' &&
        dashboardFormTambahExpert.value.education.start_date == '' && dashboardFormTambahExpert.value.education.end_date == '' && dashboardFormTambahExpert.value.education.school == '' &&
        dashboardFormTambahExpert.value.domicile == '' && dashboardFormTambahExpert.value.description == '' && dashboardFormTambahExpert.value.company == '' &&
        dashboardFormTambahExpert.value.sectors == '' && dashboardFormTambahExpert.value.experiences.title == '' && dashboardFormTambahExpert.value.experiences.location == '' &&
        dashboardFormTambahExpert.value.experiences.start_date == '' && dashboardFormTambahExpert.value.experiences.end_date == '' && dashboardFormTambahExpert.value.experience_yoe == '' && dashboardFormTambahExpert.value.social_media == '' &&
        dashboardFormTambahExpert.value.available_services == '' && dashboardFormTambahExpert.value.teaching_experience == '' && dashboardFormTambahExpert.value.reason_join == '' &&
        dashboardFormTambahExpert.value.reason_approve == '') {
        if (await formJadiExpertStore.formJadiExpertDashboard(dashboardFormTambahExpert.value)) {
            return
        }
    }
}

const file = ref('')
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
    dashboardFormTambahExpert.value.photo = base64img;
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

const dropdownDay = ref(false)

const formValidation = () => {
    if (dashboardFormTambahExpert.value.image == '' && dashboardFormTambahExpert.value.name == '' && dashboardFormTambahExpert.value.email == '' &&
        dashboardFormTambahExpert.value.phone_number == '' && dashboardFormTambahExpert.value.profession == '' && dashboardFormTambahExpert.value.education.degree == '' &&
        dashboardFormTambahExpert.value.education.start_date == '' && dashboardFormTambahExpert.value.education.end_date == '' && dashboardFormTambahExpert.value.education.school == '' &&
        dashboardFormTambahExpert.value.domicile == '' && dashboardFormTambahExpert.value.description == '' && dashboardFormTambahExpert.value.company == '' &&
        dashboardFormTambahExpert.value.sectors == '' && dashboardFormTambahExpert.value.experiences.title == '' && dashboardFormTambahExpert.value.experiences.location == '' &&
        dashboardFormTambahExpert.value.experiences.start_date == '' && dashboardFormTambahExpert.value.experiences.end_date == '' && dashboardFormTambahExpert.value.experience_yoe == '' && dashboardFormTambahExpert.value.social_media == '' &&
        dashboardFormTambahExpert.value.available_services == '' && dashboardFormTambahExpert.value.teaching_experience == '' && dashboardFormTambahExpert.value.reason_join == '' &&
        dashboardFormTambahExpert.value.reason_approve == '') {
    } 
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
</script>
<style src="@vueform/multiselect/themes/default.css">

</style>
<template>
    <div class="px-4 sm:px-6 lg:px-8 py-3 md:py-8 w-full mx-auto">
        <div class="sm:flex sm:justify-between sm:items-center mb-5">
            <div class="">
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Formulir Pengajuan Menjadi Expert✨</h1>
            </div>
        </div>
    </div>
    <form @submit.prevent="submitTambahExpert">
        <div class="grid grid-flow-row md:flex sm:px-6 lg:px-8 px-6">
            <div class="flex-none md:w-1/1">
                <div class="mb-4 sm:mb-0">
                    <img class="border-2 w-48 h-48 rounded-lg" v-if="dashboardFormTambahExpert.photo == null"
                        src="../../../images/dummy/dummy-profile.png">
                    <img class="border-2 w-48 h-48 rounded-lg" v-else
                        :src="dashboardFormTambahExpert.photo" />
                    <p class="mt-1 text-xs text-gray-500">*ukuran maksimal 1MB</p>
                    <p class="mt-1 text-xs text-gray-500">*foto 1:1</p>
                </div>
                <div class="md:flex md:flex-col overflow-hidden">
                    <input type="file" @change="validateImageRatio" ref="file" style="display: none"  id="fileUpload">
                    <button @click.prevent="choosePhoto"
                        class="h-9 md:mt-5 sm:mt-4 mt-0 md:mb-0 sm:mb-0 mb-4 bg-gray-500 hover:bg-emerald-600 text-white px-5 rounded text-sm mx-auto">
                        Unggah foto
                    </button>
                </div>
            </div>
            <div class="grid md:grid-cols-1 md:w-2/5 md:ml-5 ml-0 sm:mt-4 md:mt-0">
                <div class="">
                    <label class="block text-sm font-medium mb-1 text-black">Nama lengkap</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="dashboardFormTambahExpert.name" />
                </div> 
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Alamat email</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="dashboardFormTambahExpert.email" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Nomor HP</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="dashboardFormTambahExpert.phone_number" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Jabatan</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="dashboardFormTambahExpert.position" />
                </div>
            </div>
        </div>
        <div class="sm:px-6 lg:px-8 px-6">
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Pendidikan</label>
            </div>
            <div class="mt-4 items-center grid-flow-row md:flex">
                <div class="flex-none md:w-32">
                    <label class="block text-sm mb-1">Gelar</label>
                </div>
                <div class="grid md:grid-cols-1 md:w-2/5">
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-2/4 w-full"
                        required v-model="dashboardFormTambahExpert.education.degree" />
                </div>
            </div>
            <div class="mt-4 items-center grid-flow-row md:flex">
                <div class="flex-none md:w-32">
                    <label class="block text-sm mb-1">Lembaga</label>
                </div>
                <div class="grid md:grid-cols-1 md:w-2/5">
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-2/4 w-full"
                        required v-model="dashboardFormTambahExpert.education.school" />
                </div>
            </div>
            <div class="mt-4 items-center grid-flow-row md:flex">
                <div class="flex-none md:w-32">
                    <label class="block text-sm mb-1">Tanggal mulai</label>
                </div>
                <d iv class="grid md:grid-cols-1 md:w-2/5">
                    <DateSingle class="" v-model="dashboardFormTambahExpert.education.start_date" required />
                </d>
            </div>
            <div class="mt-4 items-center grid-flow-row md:flex">
                <div class="flex-none md:w-32">
                    <label class="block text-sm mb-1">Tanggal berakhir</label>
                </div>
                <div class="grid md:grid-cols-1 md:w-2/5">
                    <DateSingle v-model="dashboardFormTambahExpert.education.end_date" required />
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">
                    Domisili
                </label>
                <Multiselect v-model="dashboardFormTambahExpert.domicile"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm md:w-2/6 w-full ml-0"
                    :options="domiciles" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">
                    Deskripsi diri
                </label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/2"
                    required v-model="dashboardFormTambahExpert.description" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Asal perusahaan</label>
                <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-2/6 w-full"
                    required v-model="dashboardFormTambahExpert.company" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Bidang yang dikuasai</label>
                <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-2/6 w-full"
                    required v-model="dashboardFormTambahExpert.sectors" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Pengalaman kerja</label>
            </div>
            <div class="mt-4 items-center grid-flow-row md:flex">
                <div class="flex-none md:w-32">
                    <label class="block text-sm mb-1">Posisi</label>
                </div>
                <div class="grid md:grid-cols-1 md:w-2/5">
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-2/4 w-full"
                        required v-model="dashboardFormTambahExpert.experiences.title" />
                </div>
            </div>
            <div class="mt-4 items-center grid-flow-row md:flex">
                <div class="flex-none md:w-32">
                    <label class="block text-sm mb-1">Lokasi</label>
                </div>
                <div class="grid md:grid-cols-1 md:w-2/5">
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-2/4 w-full"
                        required v-model="dashboardFormTambahExpert.experiences.location" />
                </div>
            </div>
            <div class="mt-4 items-center grid-flow-row md:flex">
                <div class="flex-none md:w-32">
                    <label class="block text-sm mb-1">Tanggal mulai</label>
                </div>
                <div class="grid md:grid-cols-1 md:w-2/5">
                    <DateSingle v-model="dashboardFormTambahExpert.experiences.start_date" required />
                </div>
            </div>
            <div class="mt-4 items-center grid-flow-row md:flex">
                <div class="flex-none md:w-32">
                    <label 
                    class="block text-sm mb-1">Tanggal berakhir</label>
                </div>
                <div class="grid md:grid-cols-1 md:w-2/5">
                    <DateSingle v-model="dashboardFormTambahExpert.experiences.end_date" required />
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Durasi bekerja</label>
                <input
                    class="border-0 inline-flex bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-12"
                    required @keypress="isInputNumber($event)" v-model="dashboardFormTambahExpert.experience_yoe" />
                <span class="text-sm">
                    tahun
                </span>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">
                    Url akun Linkedin
                </label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-2/6 w-full"
                    required v-model="dashboardFormTambahExpert.social_media" />
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
                <Multiselect :close-on-select="false"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm md:w-2/6 w-full ml-0"
                    :classes="{ containerActive: 'ring-0', search: 'w-full absolute inset-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen appearance-none border-0 text-base font-sans rounded pl-3.5 rtl:pl-0 rtl:pr-3.5', }"
                    :create-option="true" :options="availableServices" placeholder="Keahlian expert" mode="multiple"
                    :searchable="true" :object="true" v-model="dashboardFormTambahExpert.available_services">
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
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/2"
                    required v-model="dashboardFormTambahExpert.teaching_experience" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Mengapa kamu tertarik mendaftar menjadi expert
                    di Jobhun?</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/2"
                    required v-model="dashboardFormTambahExpert.reason_join" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Mengapa Jobhun harus memilih kamu sebagai
                    expert?</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/2"
                    required v-model="dashboardFormTambahExpert.reason_approve" />
            </div>
            <div class="flex justify-end">
                <button type="submit" class="h-9 mt-16 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                    Tambah
                </button>
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