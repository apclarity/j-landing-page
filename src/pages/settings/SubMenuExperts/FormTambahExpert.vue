<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Tooltip from '../../../components/TooltipRed.vue'
import { PrinterIcon } from '@heroicons/vue/20/solid'
import Multiselect from '@vueform/multiselect'
import { useLayoutStore } from '../../layout/store'

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

const availableServices = [
    'Pelatihan', 'Konsultasi', 'Undangan menjadi narasumber', 'Proyek lepas yang berkaitan dengan bidang pekerjaan'
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

const submitPhotoProfile = ()=>{
    this.$refs.uploader.click();
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
    <form >
        <div class="grid grid-flow-row md:flex sm:px-6 lg:px-8 px-6">
            <div class="flex-none md:w-1/1">
                <div class="mb-4 sm:mb-0">
                    <img class="border-2 w-48 h-48 rounded-lg"
                        src="https://freepngimg.com/thumb/donald_duck/80482-artwork-donald-carrier-duck-mail-font-cartoon-thumb.png" />
                </div>
                <div class="md:flex md:flex-col overflow-hidden">
                    <!-- <button v-on:click.prevent="$refs.photo.click()" type="button"
                        class="h-9 md:mt-5 sm:mt-4 mt-0 md:mb-0 sm:mb-0 mb-4 bg-gray-500 hover:bg-emerald-600 text-white px-5 rounded text-sm mx-auto">
                        Unggah foto
                    </button>
                    <input type="file" class="hidden" ref="uploader" v-on:change="photoName = $refs.photo.files[0].name;
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        photoPreview = e.target.result;
                    };
                    reader.readAsDataURL($refs.photo.files[0]);"> -->
                        <button v-on:click="submitPhotoProfile()"
                            class="h-9 md:mt-5 sm:mt-4 mt-0 md:mb-0 sm:mb-0 mb-4 bg-gray-500 hover:bg-emerald-600 text-white px-5 rounded text-sm mx-auto">
                            Unggah foto
                        </button>
                        <input type="file" class="hidden" ref="uploader" id="upload-photo-profile" v-on:change="onChangeFileUpload()">
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
                <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
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
                <Multiselect mode="tags" :close-on-select="false"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm w-full"
                    :create-option="true" :options="availableServices" v-model="dashboardFormTambahExpert.availableServices" />
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