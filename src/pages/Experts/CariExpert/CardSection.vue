<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import CardExpert from './CardExpert.vue'
import { useDataExpertsHomepageStore } from '../../../stores/store-expert-featured'
import { storeToRefs } from 'pinia'
import Multiselect from '@vueform/multiselect'
import PaginationNumeric from '../../../pages/component/PaginationJobhun.vue'

const dataExpertsHomepageStore = useDataExpertsHomepageStore()

const { experts } = storeToRefs(dataExpertsHomepageStore)

dataExpertsHomepageStore.getDataExperts()
const limit = 12

const advanceFilterCariExpert = ref({
    sectors: [],
    index: null
})

const sectors = {
    satu: 'satu',
    dua: 'dua',
    tiga: 'tiga',
    empat: 'empat',
    lima: 'lima',
    enam: 'enam',
    tujuh: 'tujuh'
}

const searchCariExpert = ref({
    company: '',
    profession: '',
    sector: ''
})

const deleteSectors = (index)=>{
    advanceFilterCariExpert.value.sectors.splice(index, 1)
}

const deleteIndex = (event)=>{
    EventSource.splice(events.indexOf(event), 1)
}

const dropdownOpen = ref(false)

const isPreviewMentor = ref(false)

const openPreviewMentor = () => {
    isPreviewMentor.value = true
}
</script>
<template>
    <div class="">
        <div class="px-0 lg:px-8 py-8 w-full max-w-9xl mx-auto justify-center">
            <div class="px-4 sm:px-6 md:px-10 lg:mx-20 pt-8 flex">
                <div class="">
                    <div class="w-full">
                        <div class="mb-5">
                            <p class="xl:text-2xl md:text-xl text-xl text-black font-bold">
                                Temukan Experts Sesuai Kebutuhanmu
                            </p>
                        </div>
                    </div>
                    <div class="mt-5">
                        <form class="hidden lg:block">
                            <input id="action-search" placeholder="Nama atau perusahaan"
                                class="form-input align-middle shadow my-3 focus:outline-none focus:bg-white focus:border-emerald-500 md:w-96 sm:w-80 w-80 mr-5 h-12"
                                type="search" v-model="searchCariExpert.company" />
                            <input id="action-search" placeholder="Profesi"
                                class="form-input align-middle shadow my-3 focus:outline-none focus:bg-white focus:border-emerald-500 md:w-72 sm:w-64 w-48 mr-5 h-12"
                                type="search" v-model="searchCariExpert.profession" />
                            <Multiselect v-model="searchCariExpert.sectors" :close-on-select="false" placeholder="Bidang" mode="multiple" :searchable="true"
                                class="form-input align-middle inline-flex p-2 ms-ring shadow my-0 focus:outline-none focus:bg-white focus:border-emerald-500 h-12 md:w-72 sm:w-64 w-48 ml-0 mr-5 mt-0"
                                :classes="{ containerActive: 'ring-0', search: 'w-full border-none absolute inset-0 outline-none focus:ring-0 appearance-none border-0 text-base font-sans bg-white rounded pl-3.5 rtl:pl-0 rtl:pr-3.5', }"
                                required :options="sectors">
                                <template v-slot:multiplelabel="{ values }">
                                    <div class="multiselect-multiple-label">
                                        {{ values.length }} bidang terpilih
                                    </div>
                                </template>
                            </Multiselect>
                            <button type="submit" class="bg-jobhunGreen text-sm h-9 hover:bg-emerald-600 text-white px-5 w-24 rounded align-middle">
                                Cari
                            </button>
                            <div class="my-3">
                                <span id="badge-dismiss-default" v-for="sector in advanceFilterCariExpert.sectors" :key="sector"
                                    class="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-white bg-jobhunGreen rounded">
                                    {{ sector }}
                                    <button type="button" @click="deleteSectors(index)"
                                        class="inline-flex items-center p-0.5 ml-2 text-sm text-white bg-transparent rounded-sm hover:bg-gray-50 hover:text-black"
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
                        </form>
                        <form class="block lg:hidden">
                            <input id="action-search" placeholder="Nama atau perusahaan"
                                class="form-input align-middle shadow py-2.5 my-3 focus:outline-none focus:bg-white focus:border-emerald-500 md:w-96 sm:w-full w-full mr-5 h-12"
                                type="search" v-model="searchCariExpert.company" />
                            <input id="action-search" placeholder="Profesi"
                                class="form-input align-middle shadow py-2.5 my-3 focus:outline-none focus:bg-white focus:border-emerald-500 md:w-96 sm:w-full w-full mr-5 h-12"
                                type="search" v-model="searchCariExpert.profession" />
                            <Multiselect v-model="searchCariExpert.sectors" :close-on-select="false" placeholder="Bidang" mode="multiple"
                                :searchable="true"
                                class="form-input align-middle inline-flex p-2 ms-ring shadow my-0 focus:outline-none focus:bg-white focus:border-emerald-500 h-12 md:w-96 sm:w-full w-full ml-0 mr-5 mt-0"
                                :classes="{ containerActive: 'ring-0', search: 'w-full border-none absolute inset-0 focus:outline-none focus:bg-white focus:border-emerald-500 appearance-none text-base font-sans bg-white rounded pl-3.5 rtl:pl-0 rtl:pr-3.5', }"
                                required :options="sectors">
                                <template v-slot:multiplelabel="{ values }">
                                    <div class="multiselect-multiple-label">
                                        {{ values.length }} bidang terpilih
                                    </div>
                                </template>
                            </Multiselect>
                            <button type="submit" class="bg-jobhunGreen align-middle text-sm h-9 my-3 hover:bg-emerald-600 text-white px-5 w-24 rounded">
                                Cari
                            </button>
                            <div class="my-3">
                                <span id="badge-dismiss-default" v-for="sector in advanceFilterCariExpert.sectors" :key="sector"
                                    class="inline-flex items-center py-1 px-2 mr-2 my-2 text-sm font-medium text-white bg-jobhunGreen rounded">
                                    {{ sector }}
                                    <button type="button" @click="deleteSectors(index)"
                                        class="inline-flex items-center p-0.5 ml-2 text-sm text-white bg-transparent rounded-sm hover:bg-gray-50 hover:text-black"
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
                        </form>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6 mt-5 px-5 lg:px-28 md:px-10">
                <div v-for="(expert, index) in experts" :key="expert">
                    <CardExpert :expert="expert" v-if="index < limit" />
                </div>
            </div>
            <div class="text-end text-sm mt-10 px-28">
                <PaginationNumeric />
            </div>
        </div>
    </div>
</template>
<style>
.ms-ring {
        --ms-bg: #FFFFFF;
        --ms-bg-disabled: #F3F4F6;
        --ms-border-color: #D1D5DB;
        --ms-border-width: 1px;
        --ms-radius: 4px;
        --ms-py: 7px;
        --ms-px: 1rem;
        --ms-placeholder-color: #9CA3AF;
        --ms-max-height: 10rem;
}
</style>