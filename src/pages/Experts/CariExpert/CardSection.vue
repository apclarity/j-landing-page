<script setup>
import { ref, onMounted, reactive } from 'vue'
import CardExpert from './CardExpert.vue'
import { storeToRefs } from 'pinia'
import Multiselect from '@vueform/multiselect'
import PaginationNumeric from '../../../components/PaginationNumeric.vue'
import { useRoute } from 'vue-router'
import { useDataExpertStore } from '../../../stores/store-experts'
import { PAGINATION_LIMIT_ADVANCE_SEARCH } from './Constant'
import { isVariableEmpty } from '../../../utils/Helper'
import { useOptionsStore } from '../../../stores/store-options'

const route = useRoute()

const advanceSearchStore = useDataExpertStore()
const optionsStore = useOptionsStore()

const { expertAdvanceSearch, expertPaginationAdvanceSearch } = storeToRefs(advanceSearchStore)
const { listSector } = storeToRefs(optionsStore)

const limit = 12

// ====== Pagination ======================================================
const getData = async (page = 1, perPage = PAGINATION_LIMIT_ADVANCE_SEARCH, total = 0 ) => {
    advanceSearchStore.setPaginationCariExpert({
        page, per_page: perPage, total
    })
    await advanceSearchStore.advanceSearch()
}

const changePage = (page) => {
    getData(page)
}

// ====== V-Model/Data ====================================================
const advanceFilterCariExpert = ref({
    services: [],
    sectors: [],
    name: '',
    profession: '',
    domicile: '',
    education: {
        degree: '',
        school: ''
    },
    company_name: '',
    recruit_expert: {
        capabilities: []
    },
    star: null
})

const expertise = {
    Writing: "Writing",
    Marketing: "Marketing",
    Communications: "Communications",
    PublicSpeaking: "Public Speaking"
}

const domiciles = [
    'Surabaya', 'Jakarta', 'Solo', 'Sidoarjo'
]

const searchCariExpert = reactive({
    company: '',
    profession: '',
    sector: ''
})

const services = [
    {
        title: 'Konsultasi',
        value: 'consultation'
    },
    {
        title: 'Pelatihan',
        value: 'training'
    },
    {
        title: 'Undang Expert',
        value: 'invite-expert'
    },
    {
        title: 'Rekrut Expert',
        value: 'recruit-expert'
    }
]

// ====== Search bar/Advance Search =======================================

const runAdvanceSearch = async () => {
    if (advanceFilterCariExpert.value.sectors != '' || advanceFilterCariExpert.value.expertName != '' || advanceFilterCariExpert.value.profession != ''
        || advanceFilterCariExpert.value.domicile != '' || advanceFilterCariExpert.value.education != '' || advanceFilterCariExpert.value.institution != ''
        || advanceFilterCariExpert.value.company != '' || advanceFilterCariExpert.value.expertise != '' || advanceFilterCariExpert.value.star != ''){
            if(await advanceSearchStore.advanceSearch(advanceFilterCariExpert.value)){
                return
            }
        }
}

const selectedRating = (btn, e)=>{
    e.preventDefault();
    if(btn===1){
        advanceFilterCariExpert.value.star = 1
    } else if (btn === 2) {
        advanceFilterCariExpert.value.star = 2
    } else if (btn === 3) {
        advanceFilterCariExpert.value.star = 3
    } else if (btn === 4) {
        advanceFilterCariExpert.value.star = 4
    } else if (btn === 5) {
        advanceFilterCariExpert.value.star = 5
    }
}

const deleteSectors = (sector)=>{
    let selectedItems = advanceFilterCariExpert.value.sectors
    let index = -1
    for(let i=0; i<selectedItems.length; i++){
        if(sector == selectedItems[i]){
            index = i
            break
        }
    }
    if(index < 0){
        return
    }
    selectedItems.splice(index, 1)
    advanceFilterCariExpert.value.sectors = selectedItems
}

const deleteExpertise = (expertiseObj)=>{
    let selectedItems = advanceFilterCariExpert.value.recruit_expert.capabilities
    let index = -1
    for (let i = 0; i < selectedItems.length; i++) {
        if (expertiseObj == selectedItems[i]) {
            index = i
            break
        }
    }
    if (index < 0) {
        return
    }
    selectedItems.splice(index, 1)
    advanceFilterCariExpert.value.recruit_expert.capabilities = selectedItems
}

const deleteIndex = (event)=>{
    EventSource.splice(events.indexOf(event), 1)
}

// ====== Modal Preview Layanan Expert ====================================
const dropdownOpen = ref(false)

const isPreviewMentor = ref(false)

const openPreviewMentor = () => {
    isPreviewMentor.value = true
}

onMounted(() => {
    advanceFilterCariExpert.value.expertName = route.query.keywordCompany
    advanceFilterCariExpert.value.profession = route.query.keywordProffesion
    let sectorKeyword = route.query.keywordSector
    if(!isVariableEmpty(sectorKeyword)){
        console.log(listSector)
        for(let key in listSector.value){
            if(key === sectorKeyword){
                advanceFilterCariExpert.value.sectors.push(sectorKeyword)
                break
            }
        }
    }
    runAdvanceSearch()
    getData()
})
</script>
<template>
    <div class="">
        <div class="px-0 lg:px-8 py-8 w-full max-w-9xl mx-auto justify-center">
            <div class="px-4 sm:px-6 pt-8 flex sm:py-0 mt-0 sm:-mt-10 md:-mt-20">
                <div class="">
                    <div class="grid grid-flow-row md:flex">
                        <div class="flex-none h-full md:w-1/3 lg:w-1/5 mr-0 md:mr-5 sm:mt-10 md:mt-40 bg-white shadow-lg rounded-sm border border-slate-200 p-5">
                            <form action="" class="">
                                <div class="text-left">
                                    <span class="text-sm font-medium text-jobhunGreen">
                                        Layanan
                                    </span>
                                    <ul class="my-1">
                                        <li class="mt-1" v-for="service in services" :key="service">
                                            <label class="flex items-center">
                                                <input type="checkbox" :value="service.value" v-model="advanceFilterCariExpert.services" class="w-3 h-3 text-jobhunGreen bg-gray-200 border-gray-200 focus:ring-jobhunGreen focus:ring-1 hover:ring-jobhunGreen hover:ring-1 rounded-sm" />
                                                <span class="text-sm ml-2 text-gray-500">{{ service.title }}</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="text-left mt-2">
                                    <span class="text-sm font-medium text-jobhunGreen">
                                        Nama
                                    </span>
                                    <input class="form-input align-middle shadow my-1 focus:outline-none focus:bg-white focus:border-emerald-500 w-full"
                                        type="text" required v-model="advanceFilterCariExpert.name" />
                                </div>
                                <div class="text-left mt-2">
                                    <span class="text-sm font-medium text-jobhunGreen">
                                        Profesi
                                    </span>
                                    <input class="form-input align-middle shadow my-1 focus:outline-none focus:bg-white focus:border-emerald-500 w-full"
                                        type="text" required v-model="advanceFilterCariExpert.profession" />
                                </div>
                                <div class="text-left mt-2">
                                    <span class="text-sm font-medium text-jobhunGreen">
                                        Bidang
                                    </span>
                                    <Multiselect v-model="advanceFilterCariExpert.sectors" :close-on-select="false" mode="multiple"
                                        :searchable="true"
                                        class="form-input p-2 ms-ring shadow my-1 focus:outline-none focus:bg-white focus:border-emerald-500 h-10 w-full ml-0 mr-5 mt-1"
                                        :classes="{ containerActive: 'ring-0', search: 'w-full border-none absolute inset-0 outline-none focus:ring-0 appearance-none border-0 text-base font-sans bg-white rounded pl-3.5 rtl:pl-0 rtl:pr-3.5', }"
                                        :options="listSector">
                                        <template v-slot:multiplelabel="{ values }">
                                            <div class="multiselect-multiple-label">
                                                {{ values.length }} bidang terpilih
                                            </div>
                                        </template>
                                    </Multiselect>
                                </div>
                                <div class="text-left mt-2">
                                    <span class="text-sm font-medium text-jobhunGreen">
                                        Domisili
                                    </span>
                                    <Multiselect v-model="advanceFilterCariExpert.domicile" class="form-input p-2 ring-0 shadow my-1 focus:outline-none focus:bg-white h-10 w-full ml-0 mr-5 mt-1"
                                    :options="domiciles" />
                                </div>
                                <div class="text-left mt-2">
                                    <span class="text-sm font-medium text-jobhunGreen">
                                        Pendidikan
                                    </span>
                                    <div class="mt-1">
                                        <div class="flex items-center">
                                            <input type="radio" v-model="advanceFilterCariExpert.education.degree" required value="S3"
                                                class="w-3 h-3 text-jobhunGreen bg-gray-200 border-gray-200 focus:ring-jobhunGreen focus:ring-1 hover:ring-jobhunGreen hover:ring-1">
                                            <span class="text-sm ml-2 text-gray-500">S3</span>
                                        </div>
                                        <div class="flex items-center mt-0.5">
                                            <input type="radio" v-model="advanceFilterCariExpert.education.degree" required value="S2"
                                                class="w-3 h-3 text-jobhunGreen bg-gray-200 border-gray-200 focus:ring-jobhunGreen focus:ring-1 hover:ring-jobhunGreen hover:ring-1">
                                            <span class="text-sm ml-2 text-gray-500">S2</span>
                                        </div>
                                        <div class="flex items-center mt-0.5">
                                            <input type="radio" v-model="advanceFilterCariExpert.education.degree" required value="S1"
                                                class="w-3 h-3 text-jobhunGreen bg-gray-200 border-gray-200 focus:ring-jobhunGreen focus:ring-1 hover:ring-jobhunGreen hover:ring-1">
                                            <span class="text-sm ml-2 text-gray-500">S1</span>
                                        </div>
                                        <div class="flex items-center mt-0.5">
                                            <input type="radio" v-model="advanceFilterCariExpert.education.degree" required value="Diploma"
                                                class="w-3 h-3 text-jobhunGreen bg-gray-200 border-gray-200 focus:ring-jobhunGreen focus:ring-1 hover:ring-jobhunGreen hover:ring-1">
                                            <span class="text-sm ml-2 text-gray-500">Diploma</span>
                                        </div>
                                        <div class="flex items-center mt-0.5">
                                            <input type="radio" v-model="advanceFilterCariExpert.education.degree" required value="SMA/K"
                                                class="w-3 h-3 text-jobhunGreen bg-gray-200 border-gray-200 focus:ring-jobhunGreen focus:ring-1 hover:ring-jobhunGreen hover:ring-1">
                                            <span class="text-sm ml-2 text-gray-500">SMA/K</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-left mt-2">
                                    <span class="text-sm font-medium text-jobhunGreen">
                                        Asal Instansi Pendidikan
                                    </span>
                                    <input class="form-input align-middle shadow my-1 focus:outline-none focus:bg-white focus:border-emerald-500 w-full"
                                        type="text" required v-model="advanceFilterCariExpert.education.school" />
                                </div>
                                <div class="text-left mt-2">
                                    <span class="text-sm font-medium text-jobhunGreen">
                                        Nama Perusahaan
                                    </span>
                                    <input class="form-input align-middle shadow my-1 focus:outline-none focus:bg-white focus:border-emerald-500 w-full"
                                        type="text" required v-model="advanceFilterCariExpert.company_name" />
                                </div>
                                <div class="text-left mt-2">
                                    <span class="text-sm font-medium text-jobhunGreen">
                                        Keahlian
                                    </span>
                                    <Multiselect v-model="advanceFilterCariExpert.recruit_expert.capabilities" :close-on-select="false" mode="multiple"
                                        :searchable="true"
                                        class="form-input p-2 ms-ring shadow my-1 focus:outline-none focus:bg-white focus:border-emerald-500 h-10 w-full ml-0 mr-5 mt-1"
                                        :classes="{ containerActive: 'ring-0', search: 'w-full border-none absolute inset-0 outline-none focus:ring-0 appearance-none border-0 text-base font-sans bg-white rounded pl-3.5 rtl:pl-0 rtl:pr-3.5', }"
                                        :options="expertise">
                                        <template v-slot:multiplelabel="{ values }">
                                            <div class="multiselect-multiple-label">
                                                {{ values.length }} keahlian terpilih
                                            </div>
                                        </template>
                                    </Multiselect>
                                </div>
                                <div class="text-left mt-2">
                                        <span class="text-sm font-medium text-jobhunGreen">
                                            Rating
                                        </span>
                                    <div>
                                        <button class="text-gray-900 mt-1 bg-white focus:outline-none rounded-xl p-1"
                                        v-on:click="selectedRating(5, $event)" :class="{ 'bg-gray-100': advanceFilterCariExpert.star === 5, 'bg-white': advanceFilterCariExpert.star != 5}">
                                            <div class="flex flex-wrap justify-between items-center">
                                                <div class="flex items-center">
                                                    <div class="flex space-x-1">
                                                        <div v-for="index in 5" :key="index">
                                                            <div v-if="index <= 5">
                                                                <span class="sr-only">1 star</span>
                                                                <svg class="w-4 h-4 fill-current text-jobhunYellow" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                                                </svg>
                                                            </div>
                                                            <div v-else>
                                                                <span class="sr-only">5 stars</span>
                                                                <svg class="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div>
                                        <button class="text-gray-900 mt-1 bg-white focus:outline-none rounded-xl p-1"
                                        v-on:click="selectedRating(4, $event)" :class="{ 'bg-gray-100': advanceFilterCariExpert.star === 4, 'bg-white': advanceFilterCariExpert.star != 4}">
                                            <div class="flex flex-wrap justify-between items-center">
                                                <div class="flex items-center">
                                                    <div class="flex space-x-1">
                                                        <div v-for="index in 5" :key="index">
                                                            <div v-if="index <= 4">
                                                                <span class="sr-only">1 star</span>
                                                                <svg class="w-4 h-4 fill-current text-jobhunYellow" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                                                </svg>
                                                            </div>
                                                            <div v-else>
                                                                <span class="sr-only">5 stars</span>
                                                                <svg class="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div>
                                        <button class="text-gray-900 mt-1 bg-white focus:outline-none rounded-xl p-1"
                                        v-on:click="selectedRating(3, $event)" :class="{ 'bg-gray-100': advanceFilterCariExpert.star === 3, 'bg-white': advanceFilterCariExpert.star != 3}">
                                            <div class="flex flex-wrap justify-between items-center">
                                                <div class="flex items-center">
                                                    <div class="flex space-x-1">
                                                        <div v-for="index in 5" :key="index">
                                                            <div v-if="index <= 3">
                                                                <span class="sr-only">1 star</span>
                                                                <svg class="w-4 h-4 fill-current text-jobhunYellow" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                                                </svg>
                                                            </div>
                                                            <div v-else>
                                                                <span class="sr-only">5 stars</span>
                                                                <svg class="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div>
                                        <button class="text-gray-900 mt-1 bg-white focus:outline-none rounded-xl p-1"
                                        v-on:click="selectedRating(2, $event)" :class="{ 'bg-gray-100': advanceFilterCariExpert.star === 2, 'bg-white': advanceFilterCariExpert.star != 2}">
                                            <div class="flex flex-wrap justify-between items-center">
                                                <div class="flex items-center">
                                                    <div class="flex space-x-1">
                                                        <div v-for="index in 5" :key="index">
                                                            <div v-if="index <= 2">
                                                                <span class="sr-only">1 star</span>
                                                                <svg class="w-4 h-4 fill-current text-jobhunYellow" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                                                </svg>
                                                            </div>
                                                            <div v-else>
                                                                <span class="sr-only">5 stars</span>
                                                                <svg class="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div>
                                        <button class="text-gray-900 mt-1 bg-white focus:outline-none rounded-xl p-1"
                                        v-on:click="selectedRating(1, $event)" :class="{ 'bg-gray-100': advanceFilterCariExpert.star === 1, 'bg-white': advanceFilterCariExpert.star != 1}">
                                            <div class="flex flex-wrap justify-between items-center">
                                                <div class="flex items-center">
                                                    <div class="flex space-x-1">
                                                        <div v-for="index in 5" :key="index">
                                                            <div v-if="index <= 1">
                                                                <span class="sr-only">1 star</span>
                                                                <svg class="w-4 h-4 fill-current text-jobhunYellow" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                                                </svg>
                                                            </div>
                                                            <div v-else>
                                                                <span class="sr-only">5 stars</span>
                                                                <svg class="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="shrink w-full">
                            <div>
                                <input id="action-search" placeholder="Nama atau perusahaan"
                                    class="form-input align-middle shadow mb-8 focus:outline-none focus:bg-white focus:border-emerald-500 w-30 md:w-60 lg:w-96 mr-5 h-12 mt-10 sm:mt-5 md:mt-20 lg:mt-20"
                                    type="text" v-model="searchCariExpert.company" />
                                    <button class="bg-jobhunGreen text-sm h-12 mb-8 hover:bg-emerald-600 text-white px-5 w-24 rounded align-middle mt-10 sm:mt-5 md:mt-20 lg:mt-20"
                                    @click="runAdvanceSearch">
                                        Cari
                                    </button>
                            </div>
                            <div class="inline-flex" v-if="advanceFilterCariExpert.sectors != '' || advanceFilterCariExpert.expertise != ''">
                                <div class="" v-if="advanceFilterCariExpert.sectors != ''">
                                    <div class="text-black text-xs">
                                        Bidang
                                    </div>
                                    <div>
                                        <span id="badge-dismiss-default" v-for="sector in advanceFilterCariExpert.sectors" :key="sector"
                                            class="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-white bg-jobhunGreen rounded mb-8">
                                            {{ sector }}
                                            <button type="button" @click="deleteSectors(sector)"
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
                                </div>
                                <div class="" v-if="advanceFilterCariExpert.recruit_expert.capabilities != ''">
                                    <div class="text-black text-xs">
                                        Keahlian
                                    </div>
                                    <div>
                                        <span id="badge-dismiss-default" v-for="expertise in advanceFilterCariExpert.recruit_expert.capabilities" :key="expertise"
                                            class="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-white bg-jobhunGreen rounded mb-8">
                                            {{ expertise }}
                                            <button type="button" @click="deleteExpertise(expertise)"
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
                                </div>
                            </div>
                            <div class="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-2 gap-6 -mt-6">
                                <div v-for="(expert, index) in expertAdvanceSearch" :key="expert">
                                    <CardExpert :expert="expert" v-if="index < limit" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-end text-sm mt-10 px-28">
                <PaginationNumeric 
                :total="expertPaginationAdvanceSearch.total"
                :perPage="expertPaginationAdvanceSearch.per_page"
                :page="expertPaginationAdvanceSearch.page"
                @clickNav="changePage" />
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