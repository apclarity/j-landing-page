<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import Multiselect from '@vueform/multiselect'
import { useDataExpertStore } from '../../../../stores/store-experts'
import { useOptionsStore } from '../../../../stores/store-options'
import ModalAjukanExpert from './ModalAjukanExpert.vue'

const route = useRoute()
const id = route.params.id

const formTambahTransaksiPelatihan = useDataExpertStore()
const optionStore = useOptionsStore()
const { formTambahTransaksiPelatihanDashboard } = storeToRefs(formTambahTransaksiPelatihan)

const FormPengajuanExpertCariExp = ref({
    description: "",
    service: []
})

const services = [
    'Pelatihan', 'Konsultasi', 'Undang Expert', 'Invite Expert'
]

const formValidation = async () => {
    if (FormPengajuanExpertCariExp.value.description != '' && FormPengajuanExpertCariExp.value.service != '') {
        // if(await formTambahTransaksiPelatihan.formTambahTransaksiPelatihanDashboard(FormPengajuanExpertCariExp.value)){
        //     openModalAjukanExpert()
        //     return
        // }
        openModalAjukanExpert()
    }
}

const isUserAjukan = ref(false)

const openModalAjukanExpert = () => {
    isUserAjukan.value = true
}

</script>
<style src="@vueform/multiselect/themes/default.css">

</style>
<template>
    <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-8 py-3 md:py-8">
        <div class="sm:flex sm:justify-between sm:items-center mb-5 grid grid-flow-row md:flex">
            <div class="">
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Formulir pengajuan expert</h1>
            </div>
        </div>
    </div>
    <form @submit.prevent="formValidation()">
        <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-4 md:mt-0">
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Jenis layanan</label>
                <Multiselect v-model="FormPengajuanExpertCariExp.service" mode="tags"
                    :close-on-select="false" class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm w-full"
                    :create-option="true" :options="services" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Jelaskan secara spesifik topik/pembahasan apa saja yang ingin kamu pelajari?</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    required v-model="FormPengajuanExpertCariExp.description" type="text" />
            </div>
            <div>
                <div class="flex justify-end">
                    <div>
                        <button type="submit"
                            class="h-9 mt-5 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                            Daftar
                        </button>
                        <ModalAjukanExpert :isUserAjukan="isUserAjukan"/>
                    </div>
                </div>
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