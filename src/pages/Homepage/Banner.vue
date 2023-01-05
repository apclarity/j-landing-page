<script setup>
import {ref, reactive} from 'vue'
import Combobox from './Combobox.vue'
import { computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import Multiselect from '@vueform/multiselect'

const router = useRouter()
const route = useRoute()

const sectors = {
    Marketing: 'Marketing',
    Sales: 'Sales'
}

const searchInHomepage = reactive({
    company: '',
    profession: '',
    sector: ''
})

onMounted(() => {
    searchInHomepage.company = route.query.keywordCompany
    searchInHomepage.profession = route.query.keywordProffesion
    searchInHomepage.sector = route.query.keywordSector
})

const homepageSearch = ()=>{
    router.push({
        path: '/experts/cariexpert',
        query: {
            keywordCompany: searchInHomepage.company,
            keywordProffesion: searchInHomepage.profession,
            keywordSector: searchInHomepage.sector
        },
      })
}
</script>
<template>
    <div class="justify-center px-4 sm:px-6 lg:mx-44 pt-8 lg:pt-20 flex">
        <div class="lg:w-1/2 my-auto">
            <div class="w-full max-w-1xl mx-auto">
                <div class="mb-5">
                    <h1 class="xl:text-5xl md:text-4xl text-2xl text-black font-bold">
                        Temukan Experts Terbaik untuk Berbagai Kebutuhan
                    </h1>
                </div>
            </div>
            <div class="w-full max-w-1xl">
                <div class="mb-5">
                    <p class="xl:text-2xl md:text-lg text-2lg text-black">
                        Di Jobhun, kamu bisa menemukan experts terbaik untuk kebutuhan konsultasi privat/grup, pelatihan,
                        narasumber acara,
                        hingga proyek lepas.
                    </p>
                </div>
            </div>
            <div class="relative w-full max-w-1xl columns-2xl mt-5">
                <form class="relative">
                    <input id="action-search" placeholder="Nama atau perusahaan"
                        class="form-input shadow py-2.5 my-3 focus:outline-none focus:bg-white focus:border-emerald-500 md:w-48 sm:w-48 xs:w-48 mr-3 h-12"
                        type="search" v-model="searchInHomepage.company"/>
                    <input id="action-search" placeholder="Profesi"
                        class="form-input shadow py-2.5 my-3 focus:outline-none focus:bg-white focus:border-emerald-500 md:w-48 sm:w-48 xs:w-48 mr-3 h-12"
                        type="search" v-model="searchInHomepage.profession" />
                    <!-- <input id="action-search" placeholder="Bidang"
                        class="form-input shadow py-2.5 my-3 focus:outline-none focus:bg-white focus:border-emerald-500 md:w-48 sm:w-48 xs:w-48 mr-3 h-10"
                        type="search" v-model="searchInHomepage.sector" /> -->
                    <Multiselect v-model="searchInHomepage.sector" :close-on-select="true" placeholder="Bidang"
                        :searchable="true"
                        class="form-input p-2.5 ms-ring shadow my-3 focus:outline-none focus:bg-white focus:border-emerald-500 h-12 w-48 ml-0 mr-3 inline-flex"
                        :classes="{ containerActive: 'ring-0', search: 'w-full border-none inset-0 outline-none focus:ring-0 appearance-none border-0 text-base font-sans bg-white rounded pl-3.5 rtl:pl-0 rtl:pr-3.5', }"
                        :options="sectors">
                        <template v-slot:multiplelabel="{ values }">
                            <div class="multiselect-multiple-label">
                                {{ values.length }} bidang terpilih
                            </div>
                        </template>
                    </Multiselect>
                    <button @click.prevent="homepageSearch"
                        class="bg-jobhunGreen text-sm h-11 hover:bg-emerald-600 text-white px-5 rounded">
                        Cari
                    </button>
                </form>
            </div>
        </div>
        <div class="lg:block hidden w-1/2">
            <div class="mb-5">
                <img src="../../images/banner-web-jobhun-35-copy.png" alt="" class="h-full w-full object-cover z-20">
            </div>
        </div>
    </div>
</template>