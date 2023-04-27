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
    <div class="justify-center px-6 sm:px-6 lg:mx-28 md:mx-20 flex">
        <div class="lg:w-1/2 my-auto">
            <div class="max-w-1xl mx-auto lg:block hidden mt-8 md:mt-10">
                <div class="mb-44">
                    <img src="/src/images/cropped-logo-jobhun-3.png" alt="Logo Jobhun" class="h-8 md:h-20" />
                </div>
            </div>
            <div class="w-full max-w-1xl mx-auto mt-5 md:mt-10 lg:mt-0">
                <div class="mb-5">
                    <h1 class="xl:text-5xl md:text-4xl text-2xl text-black font-bold">
                        Something Awesome Is Coming, Jobhuners! Nantikan website terbaru Jobhun 😊
                    </h1>
                </div>
            </div>
            <div class="w-full max-w-1xl">
                <div class="mb-5">
                    <p class="xl:text-2xl md:text-lg text-2lg text-black">
                        Melalui Jobhun, kamu bisa menemukan <i>expert</i> terbaik untuk berbagai macam kebutuhan pengembangan karier. Mulai dari konsultasi, pelatihan, undang experts, hingga rekrut experts.
                    </p>
                </div>
            </div>
        </div>
        <div class="lg:block hidden w-1/2">
            <div class="mb-5">
                <img src="../../images/banner/BANNER-WEB-JOBHUN-34-min.png" alt="" class="h-full w-full object-cover z-20">
            </div>
        </div>
    </div>
</template>