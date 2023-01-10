<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Tooltip from '../../../components/TooltipRed.vue'
import { PrinterIcon } from '@heroicons/vue/20/solid'
import Multiselect from '@vueform/multiselect'
import { useLayoutStore } from '../../layout/store'
import { validatePicture, getBase64Image } from '../../../utils/Helper'

const layoutStore = useLayoutStore()

const session = computed(() => layoutStore.session)
layoutStore.getSession()
const isSessionEmpty = computed(() => isObjectEmpty(layoutStore.sessionFirstName))

const dashboardFormTambahExpert = ref({
    photo: null,
    name: '',
    email: '',
    handphone: '',
    position: '',
    company: '',
    sectors: '',
    workDuration: '',
    url: '',
    availableServices: [],
    teachingExperience: '',
    reasonToJoin: '',
    reasonToApprove: ''
})

const file = ref('')
const isImageChanged = ref(false)

const availableServices = [
    'Pelatihan', 'Konsultasi', 'Undangan menjadi narasumber', 'Proyek lepas yang berkaitan dengan bidang pekerjaan'
]

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
    console.log(base64img)
    console.log(dashboardFormTambahExpert.photo)
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

const isUserAjukan = ref(false)

const openModalAjukanPelatihan = () => {
    isUserAjukan.value = true
}

const dropdownDay = ref(false)

const formValidation = () => {
    if (formExpertPelatihan.value.typePelatihan == '' && formExpertPelatihan.value.totalPerson == '' && formExpertPelatihan.value.session == '' &&
        formExpertPelatihan.value.topic == '' && formExpertPelatihan.value.startHour == '' && formExpertPelatihan.value.startMinute == '' &&
        formExpertPelatihan.value.days == '') {
    } else {
        openModalAjukanPelatihan()
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
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Tambah Expert ✨</h1>
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
                        required v-model="dashboardFormTambahExpert.handphone" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Posisi/Jabatan</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="dashboardFormTambahExpert.position" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Asal perusahaan</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="dashboardFormTambahExpert.company" />
                </div>
            </div>
        </div>
        <div class="sm:px-6 lg:px-8 px-6 md:w-2/4">
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Bidang yang dikuasai</label>
                <input class="border-0 ring-0 bg-gray-100 hover:ring-jobhunGreen rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="dashboardFormTambahExpert.sectors" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Durasi bekerja</label>
                <input class="border-0 inline-flex bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-10"
                    required @keypress="isNumberCurrency($event)" v-model="dashboardFormTambahExpert.workDuration" />
                <span class="text-sm">
                    tahun
                </span>
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">URL akun media sosial, website, atau halaman yang berisi portfolio</label>
                <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="dashboardFormTambahExpert.url" />
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
                <Multiselect 
                :close-on-select="false"
                class="border-1 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm w-full"
                :classes="{ containerActive: 'ring-0', search: 'w-full absolute inset-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen appearance-none border-0 text-base font-sans rounded pl-3.5 rtl:pl-0 rtl:pr-3.5', }"
                placeholder="Keahlian expert" mode="multiple"
                :options="availableServices" 
                v-model="dashboardFormTambahExpert.availableServices"
                :searchable="true">
                    <template v-slot:multiplelabel="{ values }">
                        <div class="multiselect-multiple-label">
                            {{ values.length }} layanan terpilih
                        </div>
                    </template>
                </Multiselect>
                <div class="mb-2" v-if="dashboardFormTambahExpert.availableServices != ''">
                    <div>
                        <span id="badge-dismiss-default" v-for="availableServices in dashboardFormTambahExpert.availableServices" :key="availableServices"
                            class="inline-flex items-center py-1 px-2 mr-2 mt-2 text-sm font-medium text-white bg-jobhunGreen rounded">
                            {{ availableServices }}
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
                <label class="block text-sm font-medium mb-1 text-black">Apakah kamu memiliki pengalaman mengajar sebelumnya?</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="dashboardFormTambahExpert.teachingExperience" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Mengapa kamu tertarik mendaftar menjadi expert di Jobhun?</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="dashboardFormTambahExpert.reasonToJoin" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Mengapa Jobhun harus memilih kamu sebagai expert?</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="dashboardFormTambahExpert.reasonToApprove" />
            </div>
            <div>
                <button type="submit" class="h-9 mt-5 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
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