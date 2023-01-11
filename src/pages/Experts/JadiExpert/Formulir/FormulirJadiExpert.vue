<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import Tooltip from '../../../../components/TooltipRed.vue'
import Multiselect from '@vueform/multiselect'
import { validatePicture, getBase64Image } from '../../../../utils/Helper'
import ModalJadiExpert from './ModalAjukanFormJadiExpert.vue'
import { useDataExpertStore } from '../../../../stores/store-experts.js'
import DateSingle from './DateSingle.vue'

const route = useRoute()

const formJadiExpertStore = useDataExpertStore()

const { formJadiExpert } = storeToRefs(formJadiExpertStore)

const formulirJadiExpert = ref({
    image: null,
    name: '',
    email: '',
    phone_number : '',
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
const object = true

const availableServices = [
    { value: "training", label: "Pelatihan" },
    { value: "consultation", label: "Konsultasi" },
    { value: "invite-expert", label: "Undangan menjadi narasumber" },
    { value: "recruit-expert", label: "Proyek lepas yang berkaitan dengan bidang pekerjaan" }
]

const domiciles = [
    'Surabaya', 'Jakarta', 'Solo', 'Sidoarjo'
]

const jadiExpert = async ()=>{
    console.log(formulirJadiExpert.value)
    if (formulirJadiExpert.value.image != '' && formulirJadiExpert.value.name != '' && formulirJadiExpert.value.email != '' &&
        formulirJadiExpert.value.phone_number != '' && formulirJadiExpert.value.profession != '' && formulirJadiExpert.value.education.degree != '' &&
        formulirJadiExpert.value.education.start_date != '' && formulirJadiExpert.value.education.end_date != '' && formulirJadiExpert.value.education.school != '' &&
        formulirJadiExpert.value.domicile != '' && formulirJadiExpert.value.description != '' && formulirJadiExpert.value.company != '' &&
        formulirJadiExpert.value.sectors != '' && formulirJadiExpert.value.experiences.title != '' && formulirJadiExpert.value.experiences.location != '' &&
        formulirJadiExpert.value.experiences.start_date != '' && formulirJadiExpert.value.experiences.end_date != '' && formulirJadiExpert.value.experience_yoe != '' && formulirJadiExpert.value.social_media != '' &&
        formulirJadiExpert.value.available_services != '' && formulirJadiExpert.value.teaching_experience != '' && formulirJadiExpert.value.reason_join != '' &&
        formulirJadiExpert.value.reason_approve != '') {
        if (await formJadiExpertStore.formJadiExpert(formulirJadiExpert.value)) {
            console.log(formulirJadiExpert.value)
            return
        }
    }
}

const file = ref('')
const isImageChanged = ref(false)

const choosePhoto = () => {
    document.getElementById("fileUpload").click()
}

const validateImageRatio = async (e) => {
    var ratio = "1:1";
    var maxSize = 1 * 1024 * 1024;
    var validationRes = await validatePicture(e, ratio, maxSize);
    if (!validationRes.isOk) {
        alert(validationRes.message);
        return;
    }
    isImageChanged.value = true;
    let base64img = await getBase64Image(validationRes.theImage);
    formulirJadiExpert.value.image = base64img;
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
const openModalJadiExpert = () => {
    isUserAjukan.value = true
}

const formValidation = () => {
    if (formulirJadiExpert.value.image == '' && formulirJadiExpert.value.name == '' && formulirJadiExpert.value.email == '' && 
        formulirJadiExpert.value.phone_number == '' && formulirJadiExpert.value.profession == '' && formulirJadiExpert.value.education.degree == '' &&
        formulirJadiExpert.value.education.start_date == '' && formulirJadiExpert.value.education.end_date == '' && formulirJadiExpert.value.education.school == '' &&
        formulirJadiExpert.value.domicile == '' && formulirJadiExpert.value.description == '' && formulirJadiExpert.value.company == '' &&
        formulirJadiExpert.value.sectors == '' && formulirJadiExpert.value.experiences.title == '' && formulirJadiExpert.value.experiences.location == '' && 
        formulirJadiExpert.value.experiences.start_date == '' && formulirJadiExpert.value.experiences.end_date == '' && formulirJadiExpert.value.experience_yoe == '' && formulirJadiExpert.value.social_media == '' &&
        formulirJadiExpert.value.available_services == '' && formulirJadiExpert.value.teaching_experience == '' && formulirJadiExpert.value.reason_join == '' &&
        formulirJadiExpert.value.reason_approve == '') {
    } else {
        openModalJadiExpert()
    }
}

const submitPhotoProfile = () => {
    this.$refs.uploader.click();
}

const deleteAvailableServices = (available_services) => {
    let selectedItems = formulirJadiExpert.value.available_services
    let index = -1
    for (let i = 0; i < selectedItems.length; i++) {
        if (available_services == selectedItems[i]) {
            index = i
            break
        }
    }
    if (index < 0) {
        return
    }
    selectedItems.splice(index, 1)
    formulirJadiExpert.value.available_services = selectedItems
}

</script>
<style src="@vueform/multiselect/themes/default.css">

</style>
<template>
    <div class="px-10 lg:px-16 py-3 md:py-8 w-full">
        <div class="sm:flex sm:justify-between sm:items-center">
            <div class="">
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Formulir Pengajuan Menjadi Expert</h1>
            </div>
        </div>
    </div>
    <div class="lg:px-10 px-4 mb-10">
        <form @submit.prevent="formValidation">
            <div class="sm:px-6 lg:px-8 px-6">
                <div class="">
                    <label class="block text-sm font-medium mb-1 text-black">Nama lengkap</label>
                    <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/3"
                        required v-model="formulirJadiExpert.name" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Alamat email</label>
                    <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/3"
                        required v-model="formulirJadiExpert.email" type="email" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Nomor HP</label>
                    <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/3"
                        required v-model="formulirJadiExpert.phone_number" @keypress="isInputNumber($event)" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Jabatan</label>
                    <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/3"
                        required v-model="formulirJadiExpert.profession" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Pendidikan</label>
                </div>
                <div class="mt-4 items-center grid-flow-row md:flex">
                    <div class="flex-none md:w-28">
                        <label class="block text-sm mb-1">Gelar</label>
                    </div>
                    <div class="grid md:grid-cols-1 md:w-1/3">
                        <input
                            class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="formulirJadiExpert.education.degree" />
                    </div>
                </div>
                <div class="mt-4 items-center grid-flow-row md:flex">
                    <div class="flex-none md:w-28">
                        <label class="block text-sm mb-1">Lembaga</label>
                    </div>
                    <div class="grid md:grid-cols-1 md:w-1/3">
                        <input
                            class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="formulirJadiExpert.education.school" />
                    </div>
                </div>
                <div class="mt-4 items-center grid-flow-row md:flex">
                    <div class="flex-none md:w-28">
                        <label class="block text-sm mb-1">Tanggal mulai</label>
                    </div>
                    <d iv class="grid md:grid-cols-1 md:w-1/3">
                        <!-- <input
                            class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="formulirJadiExpert.experience.startDate" /> -->
                        <DateSingle class="" v-model="formulirJadiExpert.education.start_date" required />
                    </d>
                </div>
                <div class="mt-4 items-center grid-flow-row md:flex">
                    <div class="flex-none md:w-28">
                        <label class="block text-sm mb-1">Tanggal berakhir</label>
                    </div>
                    <div class="grid md:grid-cols-1 md:w-1/3">
                        <!-- <input
                                            class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                            required v-model="formulirJadiExpert.experience.startDate" /> -->
                        <DateSingle v-model="formulirJadiExpert.education.end_date" required />
                    </div>
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">
                        Domisili
                    </label>
                    <Multiselect v-model="formulirJadiExpert.domicile"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm md:w-1/2 w-full lg:w-1/3 ml-0"
                        :options="domiciles" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">
                        Deskripsi diri
                    </label>
                    <textarea rows="5"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/2"
                        required v-model="formulirJadiExpert.description" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Asal perusahaan</label>
                    <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/3"
                        required v-model="formulirJadiExpert.company" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Bidang yang dikuasai</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-1/3"
                        required v-model="formulirJadiExpert.sectors" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Pengalaman kerja</label>
                </div>
                <div class="mt-4 items-center grid-flow-row md:flex">
                    <div class="flex-none md:w-28">
                        <label class="block text-sm mb-1">Posisi</label>
                    </div>
                    <div class="grid md:grid-cols-1 md:w-1/3">
                        <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="formulirJadiExpert.experiences.title" />
                    </div>
                </div>
                <div class="mt-4 items-center grid-flow-row md:flex">
                    <div class="flex-none md:w-28">
                        <label class="block text-sm mb-1">Lokasi</label>
                    </div>
                    <div class="grid md:grid-cols-1 md:w-1/3">
                        <input
                            class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="formulirJadiExpert.experiences.location" />
                    </div>
                </div>
                <div class="mt-4 items-center grid-flow-row md:flex">
                    <div class="flex-none md:w-28">
                        <label class="block text-sm mb-1">Tanggal mulai</label>
                    </div>
                    <div class="grid md:grid-cols-1 md:w-1/3">
                        <DateSingle v-model="formulirJadiExpert.experiences.start_date" required />
                    </div>
                </div>
                <div class="mt-4 items-center grid-flow-row md:flex">
                    <div class="flex-none md:w-28">
                        <label class="block text-sm mb-1">Tanggal berakhir</label>
                    </div>
                    <div class="grid md:grid-cols-1 md:w-1/3">
                        <DateSingle v-model="formulirJadiExpert.experiences.end_date" required />
                    </div>
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Durasi bekerja</label>
                    <input
                        class="border-0 inline-flex bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-12"
                        required @keypress="isInputNumber($event)" v-model="formulirJadiExpert.experience_yoe" />
                    <span class="text-sm">
                        tahun
                    </span>
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">URL akun media sosial, website, atau halaman
                        yang berisi portfolio</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/3"
                        required v-model="formulirJadiExpert.social_media" />
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
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm md:w-1/2 w-full lg:w-1/3 ml-0"
                        :classes="{ containerActive: 'ring-0', search: 'w-full absolute inset-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen appearance-none border-0 text-base font-sans rounded pl-3.5 rtl:pl-0 rtl:pr-3.5', }"
                        :create-option="true" 
                        :options="availableServices" 
                        placeholder="Keahlian expert" mode="multiple"
                        :searchable="true"
                        :object="true"
                        v-model="formulirJadiExpert.available_services">
                        <template v-slot:multiplelabel="{ values }">
                            <div class="multiselect-multiple-label">
                                {{ values.length }} layanan terpilih
                            </div>
                        </template>
                    </Multiselect>
                    <div class="mb-2" v-if="formulirJadiExpert.available_services != ''">
                        <div>
                            <span id="badge-dismiss-default" v-for="availableServices in formulirJadiExpert.available_services"
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
                        required v-model="formulirJadiExpert.teaching_experience" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Mengapa kamu tertarik mendaftar menjadi expert
                        di Jobhun?</label>
                    <textarea rows="5"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/2"
                        required v-model="formulirJadiExpert.reason_join" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Mengapa Jobhun harus memilih kamu sebagai
                        expert?</label>
                    <textarea rows="5"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/2"
                        required v-model="formulirJadiExpert.reason_approve" />
                </div>
                <div class="mb-4 sm:mb-0 mt-4">
                    <img class="border-2 w-48 h-48 rounded-lg" v-if="formulirJadiExpert.image == null"
                        src="../../../../images/dummy/dummy-profile.png" />
                    <img class="border-2 w-48 h-48 rounded-lg" v-else :src="formulirJadiExpert.image" />
                    <p class="mt-1 text-xs text-gray-500">*ukuran maksimal 1MB</p>
                    <p class="mt-1 text-xs text-gray-500">*foto 1:1</p>
                    <input type="file" @change="validateImageRatio" ref="file" style="display: none" id="fileUpload">
                    <button @click.prevent="choosePhoto"
                        class="h-9 md:mt-5 sm:mt-4 mt-0 md:mb-0 sm:mb-0 mb-4 bg-gray-500 hover:bg-emerald-600 text-white px-5 rounded text-sm mx-auto">
                        Unggah foto
                    </button>
                </div>
                <div class="flex justify-end">
                    <button type="submit" 
                        class="h-9 mt-16 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                        Daftar
                    </button>
                    <ModalJadiExpert :isUserAjukan="isUserAjukan" @close-modal="isUserAjukan = false" />
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