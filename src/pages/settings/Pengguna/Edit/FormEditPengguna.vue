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

const formEditStore = useDataExpertStore()
const optionStore = useOptionsStore()

const { editUser } = storeToRefs(formEditStore)
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
    if (dashboardFormEditPengguna.value.first_name != '' && dashboardFormEditPengguna.value.last_name != '' && dashboardFormEditPengguna.value.email != '' &&
        dashboardFormEditPengguna.value.phone_number != '' && dashboardFormEditPengguna.value.password != '' && dashboardFormEditPengguna.value.confirm_password) {
        if (await formEditStore.editUser(dashboardFormEditPengguna.value)) {
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
    <form @submit.prevent="editPengguna()">
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