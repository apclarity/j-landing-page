<script setup>
    import { onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import IconKonsultasi from '../../../partials/icons/icon-konsultasi.vue'
    import IconPelatihan from '../../../partials/icons/icon-pelatihan.vue'
    import IconUndangExpert from '../../../partials/icons/icon-undang-expert.vue'
    import IconRekrutExpert from '../../../partials/icons/icon-rekrut-expert.vue'

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
        <img class="object-cover h-full w-full object-top" src="../../../images/jobhun-ilustration-background/banner-ilustrasi-01.svg"
            alt="Profile background" />
    </div>
    <div class="lg:px-60 px-10 mb-10">
        <div class="-mt-32 mb-6 sm:mb-3">
            <div class="flex flex-col items-center sm:flex-row sm:justify-between sm:items-end">
                <div class="inline-flex -mt-1 mb-4 sm:mb-0">
                    <img class="rounded-full ring-8 ring-white" :src="dataExpert.imgProfile" width="200"/>
                </div>
            </div>
        </div>
        <header class="mb-6">
            <div class="grid grid-flow-row md:flex">
                <div class="mb-2 flex-none md:w-1/4">
                    <h1 class="text-2xl text-slate-800 font-bold">{{ dataExpert.name }}</h1>
                </div>
                <div class="shrink w-full">
                    <div class="text-sm">
                        <p>
                            {{ dataExpert.about }}
                        </p>
                    </div>
                    <div class="mt-10">
                        <div class="bg-white p-4 border border-slate-200 rounded-sm shadow-sm">
                            <ul class="space-y-3">
                                <li class="sm:flex sm:items-center sm:justify-between">
                                    <div class="sm:grow flex items-center text-sm">
                                        <div class="w-8 h-8 rounded-full shrink-0 bg-amber-500 my-2 mr-3">
                                            <svg class="w-8 h-8 fill-current text-amber-50" viewBox="0 0 32 32">
                                                <path
                                                    d="M21 14a.75.75 0 0 1-.75-.75 1.5 1.5 0 0 0-1.5-1.5.75.75 0 1 1 0-1.5 1.5 1.5 0 0 0 1.5-1.5.75.75 0 1 1 1.5 0 1.5 1.5 0 0 0 1.5 1.5.75.75 0 1 1 0 1.5 1.5 1.5 0 0 0-1.5 1.5.75.75 0 0 1-.75.75Zm-7 10a1 1 0 0 1-1-1 4 4 0 0 0-4-4 1 1 0 0 1 0-2 4 4 0 0 0 4-4 1 1 0 0 1 2 0 4 4 0 0 0 4 4 1 1 0 0 1 0 2 4 4 0 0 0-4 4 1 1 0 0 1-1 1Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div class="font-medium text-slate-800">Senior Product Designer</div>
                                            <div class="flex flex-nowrap items-center space-x-2 whitespace-nowrap">
                                                <div>Remote</div>
                                                <div class="text-slate-400">·</div>
                                                <div>April, 2020 - Today</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sm:ml-2 mt-2 sm:mt-0">
                                        <ul class="flex flex-wrap sm:justify-end -m-1">
                                            <li class="m-1">
                                                <button
                                                    class="inline-flex items-center justify-center text-xs font-medium leading-5 rounded-full px-2.5 py-0.5 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">Marketing</button>
                                            </li>
                                            <li class="m-1">
                                                <button
                                                    class="inline-flex items-center justify-center text-xs font-medium leading-5 rounded-full px-2.5 py-0.5 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">+4</button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="sm:flex sm:items-center sm:justify-between">
                                    <div class="sm:grow flex items-center text-sm">
                                        <div class="w-8 h-8 rounded-full shrink-0 bg-indigo-500 my-2 mr-3">
                                            <svg class="w-8 h-8 fill-current text-indigo-50" viewBox="0 0 32 32">
                                                <path
                                                    d="M8.994 20.006a1 1 0 0 1-.707-1.707l4.5-4.5a1 1 0 0 1 1.414 0l3.293 3.293 4.793-4.793a1 1 0 1 1 1.414 1.414l-5.5 5.5a1 1 0 0 1-1.414 0l-3.293-3.293L9.7 19.713a1 1 0 0 1-.707.293Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div class="font-medium text-slate-800">Product Designer</div>
                                            <div class="flex flex-nowrap items-center space-x-2 whitespace-nowrap">
                                                <div>Milan, IT</div>
                                                <div class="text-slate-400">·</div>
                                                <div>April, 2018 - April 2020</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sm:ml-2 mt-2 sm:mt-0">
                                        <ul class="flex flex-wrap sm:justify-end -m-1">
                                            <li class="m-1">
                                                <button
                                                    class="inline-flex items-center justify-center text-xs font-medium leading-5 rounded-full px-2.5 py-0.5 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">Marketing</button>
                                            </li>
                                            <li class="m-1">
                                                <button
                                                    class="inline-flex items-center justify-center text-xs font-medium leading-5 rounded-full px-2.5 py-0.5 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">+4</button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="sm:flex sm:items-center sm:justify-between">
                                    <div class="sm:grow flex items-center text-sm">
                                        <div class="w-8 h-8 rounded-full shrink-0 bg-indigo-500 my-2 mr-3">
                                            <svg class="w-8 h-8 fill-current text-indigo-50" viewBox="0 0 32 32">
                                                <path
                                                    d="M8.994 20.006a1 1 0 0 1-.707-1.707l4.5-4.5a1 1 0 0 1 1.414 0l3.293 3.293 4.793-4.793a1 1 0 1 1 1.414 1.414l-5.5 5.5a1 1 0 0 1-1.414 0l-3.293-3.293L9.7 19.713a1 1 0 0 1-.707.293Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div class="font-medium text-slate-800">Product Designer</div>
                                            <div class="flex flex-nowrap items-center space-x-2 whitespace-nowrap">
                                                <div>Milan, IT</div>
                                                <div class="text-slate-400">·</div>
                                                <div>April, 2018 - April 2020</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sm:ml-2 mt-2 sm:mt-0">
                                        <ul class="flex flex-wrap sm:justify-end -m-1">
                                            <li class="m-1">
                                                <button
                                                    class="inline-flex items-center justify-center text-xs font-medium leading-5 rounded-full px-2.5 py-0.5 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">Marketing</button>
                                            </li>
                                            <li class="m-1">
                                                <button
                                                    class="inline-flex items-center justify-center text-xs font-medium leading-5 rounded-full px-2.5 py-0.5 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">+4</button>
                                            </li>
                                        </ul>
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