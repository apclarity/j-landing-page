<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Tooltip from '../../../../components/TooltipRed.vue'
import Multiselect from '@vueform/multiselect'

const formulirJadiExpert = ref({
    photo: null,
    name: '',
    email: '',
    handphone: '',
    position: '',
    education: '',
    domicile: '',
    selfDescription: '',
    company: '',
    sectors: '',
    experience: {
        position: '',
        location: '',
        startDate: '',
        workDuration: ''
    },
    url: '',
    availableServices: [],
    teachingExperience: '',
    reasonToJoin: '',
    reasonToApprove: ''
})

const availableServices = [
    'Pelatihan', 'Konsultasi', 'Undangan menjadi narasumber', 'Proyek lepas yang berkaitan dengan bidang pekerjaan'
]

const domiciles = [
    'Surabaya', 'Jakarta', 'Solo', 'Sidoarjo'
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

const submitPhotoProfile = () => {
    this.$refs.uploader.click();
}
</script>
<style src="@vueform/multiselect/themes/default.css">

</style>
<template>
    <div class="px-10 lg:px-16 py-3 md:py-8 w-full">
        <div class="sm:flex sm:justify-between sm:items-center">
            <div class="">
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Formulir Pengajuan Menjadi Expert di Jobhun</h1>
            </div>
        </div>
    </div>
    <div class="lg:px-10 px-4 mb-10">
        <form>
            <div class="sm:px-6 lg:px-8 px-6">
                <div class="">
                    <label class="block text-sm font-medium mb-1 text-black">Nama lengkap</label>
                    <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/3"
                        required v-model="formulirJadiExpert.name" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Alamat email</label>
                    <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/3"
                        required v-model="formulirJadiExpert.email" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Nomor HP</label>
                    <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/3"
                        required v-model="formulirJadiExpert.handphone" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Jabatan</label>
                    <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/3"
                        required v-model="formulirJadiExpert.position" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">
                        Pendidikan
                    </label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/3"
                        required v-model="formulirJadiExpert.education" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">
                        Domisili
                    </label>
                    <Multiselect v-model="formulirJadiExpert.domicile"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm md:w-1/2 w-full lg:w-1/3 ml-0"
                        :options="domiciles" placeholder="Domisili expert" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">
                        Deskripsi diri
                    </label>
                    <textarea rows="5"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/2"
                        required v-model="formulirJadiExpert.selfDescription" />
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
                            required v-model="formulirJadiExpert.experience.position" />
                    </div>
                </div>
                <div class="mt-4 items-center grid-flow-row md:flex">
                    <div class="flex-none md:w-28">
                        <label class="block text-sm mb-1">Lokasi</label>
                    </div>
                    <div class="grid md:grid-cols-1 md:w-1/3">
                        <input
                            class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="formulirJadiExpert.experience.location" />
                    </div>
                </div>
                <div class="mt-4 items-center grid-flow-row md:flex">
                    <div class="flex-none md:w-28">
                        <label class="block text-sm mb-1">Tanggal mulai</label>
                    </div>
                    <div class="grid md:grid-cols-1 md:w-1/3">
                        <input
                            class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                            required v-model="formulirJadiExpert.experience.startDate" />
                    </div>
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Durasi bekerja</label>
                    <input
                        class="border-0 inline-flex bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-12"
                        required @keypress="isNumberCurrency($event)" v-model="formulirJadiExpert.experience.workDuration" />
                    <span class="text-sm">
                        tahun
                    </span>
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">URL akun media sosial, website, atau halaman
                        yang berisi portfolio</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/3"
                        required v-model="formulirJadiExpert.url" />
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
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm md:w-1/2 w-full lg:w-1/3 ml-0"
                        :create-option="true" :options="availableServices" v-model="formulirJadiExpert.availableServices" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Apakah kamu memiliki pengalaman mengajar
                        sebelumnya?</label>
                    <textarea rows="5"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/2"
                        required v-model="formulirJadiExpert.teachingExperience" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Mengapa kamu tertarik mendaftar menjadi expert
                        di Jobhun?</label>
                    <textarea rows="5"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/2"
                        required v-model="formulirJadiExpert.reasonToJoin" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Mengapa Jobhun harus memilih kamu sebagai
                        expert?</label>
                    <textarea rows="5"
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm md:w-1/2 w-full lg:w-1/2"
                        required v-model="formulirJadiExpert.reasonToApprove" />
                </div>
                <div class="mb-4 sm:mb-0 mt-4">
                    <img class="border-2 w-48 h-48 rounded-lg" v-if="formulirJadiExpert.photo == null"
                        src="../../../../images/dummy/dummy-profile.png" />
                    <img class="border-2 w-48 h-48 rounded-lg" v-else :src="formulirJadiExpert.photo" />
                    <button v-on:click="submitPhotoProfile()"
                        class="h-9 mt-4 md:mb-0 sm:mb-0 mb-4 bg-gray-500 hover:bg-emerald-600 text-white px-5 rounded text-sm mx-auto">
                        Unggah foto
                    </button>
                    <input type="file" class="hidden" ref="uploader" id="upload-photo-profile" v-on:change="onChangeFileUpload()">
                </div>
                <div class="">
                    
                </div>
                <div class="flex justify-end">
                    <button type="submit"
                        class="h-9 mt-16 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                        Daftar
                    </button>
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