<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import Multiselect from '@vueform/multiselect'
import { useDataExpertStore } from '../../../stores/store-experts'
import { useOptionsStore } from '../../../stores/store-options'
import router from '../../../router'

const route = useRoute()
const id = route.params.id

const formSubmissionExpertTempStore = useDataExpertStore()
const optionStore = useOptionsStore()

await formSubmissionExpertTempStore.getDataSubmissionExpertTemp(id)
const { submissionExpertTemp } = storeToRefs(formSubmissionExpertTempStore)

const { listService } = storeToRefs(optionStore)

const formDetailDashboardPengajuanKebutuhanExpert = ref({
    description: "",
    service: []
})

const formValidation = async () => {
    if (formDetailDashboardPengajuanKebutuhanExpert.value.description != '' && formDetailDashboardPengajuanKebutuhanExpert.value.service != '') {
        // if(await formTambahTransaksiPelatihan.formTambahTransaksiPelatihanDashboard(FormPengajuanExpertCariExp.value)){
        //     openModalAjukanExpert()
        //     return
        // }
            router.push('/kebutuhnexpert/table')
    }
}
</script>
<style src="@vueform/multiselect/themes/default.css">

</style>
<template>
    <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-8 py-3 md:py-8">
        <div class="sm:flex sm:justify-between sm:items-center mb-5 grid grid-flow-row md:flex">
            <div class="">
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Pengajuan Kebutuhan Expert ✨</h1>
            </div>
        </div>
    </div>
    <form @submit.prevent="formValidation()">
        <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-4 md:mt-0">
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Jenis layanan</label>
                <Multiselect v-model="formDetailDashboardPengajuanKebutuhanExpert.service" mode="tags" disabled
                    :close-on-select="false" class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen text-sm w-full"
                    :create-option="true" :options="listService" />
            </div>
            <div class="mt-4">
                <label class="block text-sm font-medium mb-1 text-black">Jelaskan secara spesifik topik/pembahasan apa saja yang ingin kamu pelajari?</label>
                <textarea rows="5"
                    class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                    v-model="formDetailDashboardPengajuanKebutuhanExpert.description" type="text" readonly />
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