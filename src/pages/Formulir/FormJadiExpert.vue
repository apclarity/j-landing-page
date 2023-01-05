<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import Tooltip from '../../components/TooltipRed.vue'
// import MultiSel from './MultipleSelectFormPelatihan.vue'
// import DropdownCheckbox from './DropdownCheckbox.vue'
import { PrinterIcon } from '@heroicons/vue/20/solid'
// import ModalAjukan from './ModalAjukanPelatihan.vue'
import Multiselect from '@vueform/multiselect'

const props = defineProps({
    dataExpertPelatihan: Object
})

const { dataExpertPelatihan } = props

const formExpertPelatihan = ref({
    typePelatihan: "",
    totalPerson: "",
    session: "",
    topic: "",
    startHour: "",
    startMinute: "",
    days: []
})

const days = [
    'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'
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
</script>
<style src="@vueform/multiselect/themes/default.css">

</style>
<template>
    <div class="px-4 sm:px-6 lg:px-8 py-8 w-full mx-auto">
        <div class="sm:flex sm:justify-between sm:items-center mb-5">
            <div class="mb-4 sm:mb-0">
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Tambah Expert ✨</h1>
            </div>
        </div>
    </div>
    <div class="grid grid-flow-col sm:px-6 lg:px-8 px-6">
        <div class="flex-none md:w-1/1">
            <div class="mb-4 sm:mb-0">
                <img class="border-2 w-48 h-48 rounded-lg"
                    src="https://freepngimg.com/thumb/donald_duck/80482-artwork-donald-carrier-duck-mail-font-cartoon-thumb.png" />
            </div>
        </div>
        <div class="grid md:grid-cols-1 ml-5">
            <div class="">
                <label class="block text-sm font-medium mb-1 text-black">Nama lengkap</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Alamat email</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Nomor HP</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Posisi/Jabatan</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Asal perusahaan</label>
                <input
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required />
            </div>
        </div>
    </div>
    <div class="sm:px-6 lg:px-8 px-6">
        <div class="mt-4">
            <label class="block text-sm font-medium mb-1 text-black">Asal perusahaan</label>
            <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                required />
        </div>
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