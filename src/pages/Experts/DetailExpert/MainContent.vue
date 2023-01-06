<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import IconLinkedin from '../../../partials/icons/icon-linkedin.vue'
import ItemLayanan from './Layanan.vue'
import ItemTestimonies from './Ulasan.vue'
import { convertToWebDate, convertToWebDateMonthName } from '../../../utils/Helper'

const props = defineProps({
    detailExpert: {
        default: {},
        type: Object
    },
    services: Object,
    testimonies: Object
})

const { detailExpert, testimonies, services } = props

const route = useRoute()

onMounted(()=>{
    let querySection = route.query.section
    if(querySection == null){
        return
    }
    let sectionID = document.getElementById(querySection)
    if(sectionID == null){
        return
    }
    document.getElementById(querySection).scrollIntoView({
        block: 'center'
    })
})

const openTab = ref(1)
const toggleTabs = (tabNumber) => (openTab.value = tabNumber)
</script>
<template>
    <div class="relative h-96 bg-slate-200 -z-20 -mt-10 md:mt-0">
        <img class="object-cover h-full w-full object-top" src="../../../images/jobhun-ilustration-background/banner-ilustrasi-01.png"
            alt="Profile background" />
    </div>
    <div class="lg:px-60 px-10 mb-10">
        <div class="-mt-32 mb-6 sm:mb-3 md:flex">
            <div class="flex flex-col items-center md:w-1/4 sm:flex-row sm:justify-between sm:items-end">
                <div class="inline-flex -mt-1 mb-4 sm:mb-0">
                    <img class="rounded-full ring-8 ring-white" :src="detailExpert.image" width="200" height="200"/>
                </div>
            </div>
        </div>
        <header class="mb-6">
            <div class="grid grid-flow-row md:flex">
                <div class="mb-2 flex-none md:w-1/4 mr-0 md:mr-5">
                    <h1 class="text-2xl sm:text-left text-center text-slate-800 font-bold">{{ detailExpert.name }}✨</h1>
                    <div class="sm:text-left text-center mt-3">
                        <span class="text-sm">
                            Jabatan
                        </span>
                    </div>
                    <div class="sm:text-left text-center text-black">
                        <span class="font-bold text-sm">
                            {{ detailExpert.profession }}
                        </span>
                    </div>
                    <div class="sm:text-left text-center mt-3">
                        <span class="text-sm">
                            Pendidikan
                        </span>
                    </div>
                    <div class="sm:text-left text-center text-black">
                        <span class="font-bold text-sm">
                            {{ detailExpert.education.school}}
                        </span>
                    </div>
                    <div class="sm:text-left text-center mt-3">
                        <span class="text-sm">
                            Domisili
                        </span>
                    </div>
                    <div class="text-center sm:text-left text-black">
                        <span class="font-bold text-sm">
                            {{ detailExpert.domicile }}
                        </span>
                    </div>
                    <div class="flex justify-center items-center sm:justify-start">
                        <a :href="detailExpert.social_media.linkedin" class="text-jobhunGreen mt-3 hover:text-gray-900 duration-300">
                            <IconLinkedin class="w-7 h-7" />
                        </a>
                    </div>
                </div>
                <div class="shrink w-full">
                    <div class="text-sm mt-5 sm:mt-0">
                        <p>
                            {{ detailExpert.description }}
                        </p>
                    </div>
                    <div class="mt-3">
                        <router-link to="/" class=" space-x-1 line-clamp-1 hover:line-clamp-none">
                            <div v-for="bidang in detailExpert.sectors" :key="bidang"
                                class="inline-flex text-sm font-medium bg-emerald-100 hover:bg-emerald-200 text-jobhunGreen rounded-md text-center px-2 py-0.5 my-1">
                                {{bidang}}
                            </div>
                        </router-link>
                    </div>
                    <div class="mt-5">
                        <div>
                            <span class="text-sm">
                                Pengalaman
                            </span>
                        </div>
                        <div class="bg-white p-4 border border-slate-200 rounded-sm shadow-sm mt-3" v-for="experience in detailExpert.experiences" :key="experience">
                            <ul class="space-y-3">
                                <li class="sm:flex sm:items-center sm:justify-between">
                                    <div class="sm:grow flex items-center text-sm">
                                        <div>
                                            <div class="font-medium text-slate-800">{{ experience.title }}</div>
                                            <div class="flex flex-nowrap items-center space-x-2 whitespace-nowrap">
                                                <div>{{experience.location}}</div>
                                                <div class="text-slate-400">·</div>
                                                <div>{{ convertToWebDateMonthName(experience.start_date) }} - {{convertToWebDateMonthName(experience.end_date)}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="mb-10 border-b border-gray-200">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center">
                <li class="mr-2">
                    <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-jobhunGreen " 
                        @click="toggleTabs(1)"
                        v-bind:class="{ 'text-black': openTab !== 1, 'text-jobhunGreen border-jobhunGreen': openTab === 1}"
                        >Pilih layanan
                    </button>
                </li>
                <li class="mr-2">
                    <button
                        class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-jobhunGreen"
                        @click="toggleTabs(2)"
                        v-bind:class="{ 'text-black': openTab !== 2, 'text-jobhunGreen border-jobhunGreen': openTab === 2}"
                        >Ulasan expert
                    </button>
                </li>
            </ul>
        </div>
        <div>
            <div class="rounded-lg" v-if="openTab === 1">
                <div v-for="layanan in detailExpert.available_services" :key="layanan" :id="layanan">
                    <ItemLayanan :itemLayanan="layanan" :descLayanan="services" :expertID="detailExpert.id" />
                </div>
            </div>
            <div class="p-4 rounded-lg" v-if="openTab === 2">
                <div v-for="testimoni in testimonies" :key="testimoni">
                    <ItemTestimonies :testimonies="testimoni" :ratingValues="testimonies.rating"  />
                </div>
            </div>
        </div>
    </div>
</template>