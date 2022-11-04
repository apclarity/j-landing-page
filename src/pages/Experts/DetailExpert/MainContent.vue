<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import IconKonsultasi from '../../../partials/icons/icon-konsultasi.vue'
import IconPelatihan from '../../../partials/icons/icon-pelatihan.vue'
import IconUndangExpert from '../../../partials/icons/icon-undang-expert.vue'
import IconRekrutExpert from '../../../partials/icons/icon-rekrut-expert.vue'
import IconLinkedin from '../../../partials/icons/icon-linkedin.vue'

const props = defineProps({
    dataExpert: Object
})

const { dataExpert } = props

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
    document.getElementById(querySection).scrollIntoView()
})
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
                    <img class="rounded-full ring-8 ring-white" :src="dataExpert.profile.imgProfile" width="200"/>
                </div>
            </div>
        </div>
        <header class="mb-6">
            <div class="grid grid-flow-row md:flex">
                <div class="mb-2 flex-none md:w-1/4 mr-0 md:mr-5">
                    <h1 class="text-2xl sm:text-left text-center text-slate-800 font-bold">{{ dataExpert.profile.name }} ✨</h1>
                    <div class="sm:text-left text-center mt-3">
                        <span class="text-sm">
                            Jabatan
                        </span>
                    </div>
                    <div class="sm:text-left text-center text-black">
                        <span class="font-bold text-sm">
                            {{dataExpert.profile.position}}
                        </span>
                    </div>
                    <div class="sm:text-left text-center mt-3">
                        <span class="text-sm">
                            Pendidikan
                        </span>
                    </div>
                    <div class="sm:text-left text-center text-black">
                        <span class="font-bold text-sm">
                            {{dataExpert.profile.formalEducation}}
                        </span>
                    </div>
                    <div class="sm:text-left text-center mt-3">
                        <span class="text-sm">
                            Domisili
                        </span>
                    </div>
                    <div class="text-center sm:text-left text-black">
                        <span class="font-bold text-sm">
                            {{dataExpert.profile.domicile}}
                        </span>
                    </div>
                    <div class="flex justify-center items-center sm:justify-start">
                        <a href="https://www.linkedin.com/company/13406000/" class="text-jobhunGreen mt-3 hover:text-gray-900 duration-300">
                            <IconLinkedin class="w-7 h-7" />
                        </a>
                    </div>
                </div>
                <div class="shrink w-full">
                    <div class="text-sm mt-5 sm:mt-0">
                        <p>
                            {{ dataExpert.profile.about }}
                        </p>
                    </div>
                    <div class="mt-3">
                        <router-link to="/" class=" space-x-1 line-clamp-1 hover:line-clamp-none">
                            <div v-for="bidang in dataExpert.profile.tagBidang" :key="bidang"
                                class="inline-flex text-sm font-medium bg-emerald-100 text-jobhunGreen rounded-md text-center px-2 py-0.5 my-1">
                                {{bidang.title}}
                            </div>
                        </router-link>
                    </div>
                    <div class="mt-5">
                        <div>
                            <span class="text-sm">
                                Pengalaman
                            </span>
                        </div>
                        <div class="bg-white p-4 border border-slate-200 rounded-sm shadow-sm mt-3" v-for="pengalaman in dataExpert.profile.experience" :key="pengalaman">
                            <ul class="space-y-3">
                                <li class="sm:flex sm:items-center sm:justify-between">
                                    <div class="sm:grow flex items-center text-sm">
                                        <div>
                                            <div class="font-medium text-slate-800">{{ pengalaman.position }}</div>
                                            <div class="flex flex-nowrap items-center space-x-2 whitespace-nowrap">
                                                <div>{{pengalaman.city}}</div>
                                                <div class="text-slate-400">·</div>
                                                <div>{{ pengalaman.dateStart }} - {{pengalaman.dateEnd}}</div>
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
        <div v-for="layanan in dataExpert.services" :key="layanan" :id="layanan.id">
            <hr class="my-16 border-gray-300 sm:mx-auto lg:my-16">
            <div class="flex">
                <div class="flex-none w-1/4 flex justify-center items-center mx-5 lg:mx-0 md:mx-0">
                    <IconKonsultasi height="100px" v-if="layanan.title == 'Konsultasi'" />
                    <IconPelatihan height="100px" v-if="layanan.title == 'Pelatihan'" />
                    <IconUndangExpert height="100px" v-if="layanan.title == 'Undang Expert'"/>
                    <IconRekrutExpert height="100px" v-if="layanan.title == 'Rekrut Expert'" />
                </div>
                <div class="shrink w-full">
                    <div class="font-bold text-3xl text-black">
                        {{ layanan.title }}
                    </div>
                    <div class="text-sm mt-5">
                        <p>
                            {{ layanan.desc}}
                        </p>
                    </div>
                    <div>
                        <button class="h-9 mt-5 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                            Daftar
                        </button>
                    </div>
                </div>
            </div>
        </div>      
    </div>
</template>