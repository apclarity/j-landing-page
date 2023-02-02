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

const formTambahUserStore = useDataExpertStore()
const optionStore = useOptionsStore()

const { createUser } = storeToRefs(formTambahUserStore)
const { listSector } = storeToRefs(optionStore)

const dashboardFormTambahPengguna = ref({
    first_name: '',
    last_name: '',  
    email: '',
    phone_number: '',
    password: '',
    confirm_password: ''
})

const tambahPengguna = async ()=> {
    if (dashboardFormTambahPengguna.value.first_name != '' && dashboardFormTambahPengguna.value.last_name != '' && dashboardFormTambahPengguna.value.email != '' &&
        dashboardFormTambahPengguna.value.phone_number != '' && dashboardFormTambahPengguna.value.password != '' && dashboardFormTambahPengguna.value.confirm_password) {
        if (await formTambahUserStore.createUser(dashboardFormTambahPengguna.value)) {
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
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Formulir Tambah Pengguna ✨</h1>
            </div>
        </div>
    </div>
    <form @submit.prevent="tambahPengguna()">
        <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-8 md:mt-0 -mt-4">
            <div class="">
                <label class="block text-sm font-medium mb-1 text-black">Nama depan*</label>
                <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="dashboardFormTambahPengguna.name" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Nama belakang*</label>
                <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="dashboardFormTambahPengguna.profession" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Alamat email*</label>
                <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="dashboardFormTambahPengguna.email" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Nomor HP*</label>
                <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="dashboardFormTambahPengguna.phone_number" @keypress="isInputNumber($event)" type="text" />
            </div>
            <div>
                <label class="block text-sm font-medium mb-1" for="password">Kata sandi*</label>
                <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required type="password" autoComplete="on" v-model="dashboardFormTambahPengguna.password" />
            </div>
            <div>
                <label class="block text-sm font-medium mb-1" for="password">Konfirmasi kata sandi*</label>
                <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required type="password" autoComplete="on" v-model="dashboardFormTambahPengguna.confirm_password" />
                <span class="text-xs text-thin text-red-700" v-if="dashboardFormTambahPengguna.confirm_password != dashboardFormTambahPengguna.password">Kata sandi tidak
                    sesuai</span>
            </div>
            <div class="flex justify-end">
                <button type="submit" class="h-9 mt-16 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                    Daftar
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