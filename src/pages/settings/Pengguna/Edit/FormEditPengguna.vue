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
import iconDelete from '../../../../images/icons/ICON-49.png'
import iconAdd from '../../../../images/icons/ICON-48.png'
import { useOptionsStore } from '../../../../stores/store-options'

const route = useRoute()

const formJadiExpertDashboardStore = useDataExpertStore()
const optionStore = useOptionsStore()

const { formJadiExpertDashboard } = storeToRefs(formJadiExpertDashboardStore)
const { listSector } = storeToRefs(optionStore)

const dashboardFormEditPengguna = ref({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
    confirm_password: ''
})

const tambahExpert = async ()=> {
    if (dashboardFormTambahExpert.value.image != '' && dashboardFormTambahExpert.value.name != '' && dashboardFormTambahExpert.value.email != '' &&
        dashboardFormTambahExpert.value.phone_number != '' && dashboardFormTambahExpert.value.profession != '' && dashboardFormTambahExpert.value.education.degree != '' &&
        dashboardFormTambahExpert.value.education.start_date != '' && dashboardFormTambahExpert.value.education.end_date != '' && dashboardFormTambahExpert.value.education.school != '' &&
        dashboardFormTambahExpert.value.domicile != '' && dashboardFormTambahExpert.value.description != '' && dashboardFormTambahExpert.value.company != '' &&
        dashboardFormTambahExpert.value.sectors != '' && dashboardFormTambahExpert.value.experiences.title != '' && dashboardFormTambahExpert.value.experiences.location != '' &&
        dashboardFormTambahExpert.value.experiences.start_date != '' && dashboardFormTambahExpert.value.experiences.end_date != '' && dashboardFormTambahExpert.value.experience_yoe != '' && dashboardFormTambahExpert.value.social_media != '' &&
        dashboardFormTambahExpert.value.available_services != '' && dashboardFormTambahExpert.value.teaching_experience != '' && dashboardFormTambahExpert.value.reason_join != '' &&
        dashboardFormTambahExpert.value.reason_approve != '') {
        if (await formJadiExpertDashboardStore.formJadiExpertDashboard(dashboardFormTambahExpert.value)) {
            return
        }
    }
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
</script>
<style src="@vueform/multiselect/themes/default.css">

</style>
<template>
    <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-8 py-3 md:py-8">
        <div class="sm:flex sm:justify-between sm:items-center mb-5">
            <div class="">
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Edit Pengguna✨</h1>
            </div>
            <div>
                <div class="md:flex md:justify-end sm:flex sm:justify-start sm:mt-0 mt-4 space-x-4">
                    <button type="submit" class="h-8 bg-jobhunGreen hover:bg-emerald-600 text-black px-6 rounded text-sm">
                        Simpan
                    </button>
                </div>
            </div>
        </div>
    </div>
    <form @submit.prevent="tambahExpert()">
        <!-- <div class="grid grid-flow-row md:flex flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-8">
            <div class="flex-none md:w-1/1">
                <div class="mb-4 sm:mb-0">
                    <img class="border-2 w-48 h-48 rounded-lg" v-if="dashboardFormTambahExpert.image == null"
                        src="../../../../../images/dummy/dummy-profile.png">
                    <img class="border-2 w-48 h-48 rounded-lg" v-else
                        :src="dashboardFormTambahExpert.image" />
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
            <div class="grid md:grid-cols-1 md:flex-auto md:max-w-4xl md:min-w-0 md:mx-auto md:px-8 px-0 md:mt-0 mt-4">
                <div class="">
                    <label class="block text-sm font-medium mb-1 text-black">Nama lengkap</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="dashboardFormTambahExpert.name" type="text" />
                </div> 
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Alamat email</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="dashboardFormTambahExpert.email" type="text" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Nomor HP</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="dashboardFormTambahExpert.phone_number" @keypress="isInputNumber($event)" type="text" />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium mb-1 text-black">Jabatan</label>
                    <input
                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                        required v-model="dashboardFormTambahExpert.profession" type="text" />
                </div>
            </div>
        </div> -->
        <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-8 md:mt-0 -mt-4">
            <div class="">
                <label class="block text-sm font-medium mb-1 text-black">Nama depan*</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="dashboardFormEditPengguna.first_name" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Nama belakang*</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="dashboardFormEditPengguna.last_name" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Alamat email*</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="dashboardFormEditPengguna.email" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Nomor HP*</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="dashboardFormEditPengguna.phone_number" @keypress="isInputNumber($event)" type="text" />
            </div>
            <div>
                <label class="block text-sm font-medium mb-1" for="password">Kata sandi*</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required type="password" autoComplete="on" v-model="dashboardFormEditPengguna.password" />
            </div>
            <div>
                <label class="block text-sm font-medium mb-1" for="password">Konfirmasi kata sandi*</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required type="password" autoComplete="on" v-model="dashboardFormEditPengguna.confirm_password" />
                <span class="text-xs text-thin text-red-700"
                    v-if="dashboardFormEditPengguna.confirm_password != dashboardFormEditPengguna.password">Kata sandi tidak
                    sesuai</span>
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