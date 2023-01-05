<script setup>
import {  } from 'vue'
import { useRouter } from "vue-router"

const router = useRouter()

const benefitJadiExpert = [
    {
        desc: 'Berpotensi mendapatkan penawaran mengajar, baik dari Jobhun maupun klien Jobhun',
        image: new URL(`../../../images/jadi-expert/ICON-45.png`, import.meta.url).href
    },
    {
        desc: 'Berpotensi mendapatkan proyek jasa dari Jobhun maupun klien Jobhun',
        image: new URL(`../../../images/jadi-expert/bebas-pilih-mentor.png`, import.meta.url).href
    },
    {
        desc: 'Mendapatkan <i>fee</i> sesuai kesepakatan dengan Jobhun',
        image: new URL(`../../../images/jadi-expert/ICON-32.png`, import.meta.url).href,
        escape: true
    },
    {
        desc: 'Berkontribusi untuk pengembangan talenta di Indonesia',
        image: new URL(`../../../images/jadi-expert/ICON-18.png`, import.meta.url).href
    },
    {
        desc: 'Mendapatkan <i>e-certificate</i> dan Surat Keterangan sebagai mentor jika diperlukan',
        image: new URL(`../../../images/jadi-expert/ICON-11.png`, import.meta.url).href,
        escape: true
    },
    {
        desc: 'Berkesempatan untuk membangun <i>personal branding</i>',
        image: new URL(`../../../images/jadi-expert/ICON-46.png`, import.meta.url).href,
        escape: true
    },
    {
        desc: 'Berkesempatan mendapatkan <i>networking</i> yang luas',
        image: new URL(`../../../images/jadi-expert/Networking-dengan-mentor-26.png`, import.meta.url).href,
        escape: true
    }
]

const termsJadiExpert = [
    {
        desc: 'Berpengalaman pada bidang karier yang sedang dijalani minimal 3 tahun',
        image: new URL(`../../../images/jadi-expert/ICON-36.png`, import.meta.url).href
    },
    {
        desc: 'Suka berdiskusi, berbagi pengetahuan, dan mengajar',
        image: new URL(`../../../images/jadi-expert/ICON-36.png`, import.meta.url).href
    },
    {
        desc: 'Berkeinginan untuk membangun  <i>personal branding</i> dan <i>networking</i>',
        image: new URL(`../../../images/jadi-expert/ICON-38.png`, import.meta.url).href,
        escape: true
    },
    {
        desc: 'Memiliki ketertarikan terhadap industri <i>edutech</i>',
        image: new URL(`../../../images/jadi-expert/ICON-39.png`, import.meta.url).href,
        escape: true
    },
    {
        desc: 'Memiliki kemampuan <i>public speaking</i> yang baik',
        image: new URL(`../../../images/jadi-expert/ICON-47.png`, import.meta.url).href,
        escape: true
    },
    {
        desc: 'Bisa berkomitmen dan memiliki <i>attitude</i> yang baik',
        image: new URL(`../../../images/jadi-expert/ICON-34.png`, import.meta.url).href,
        escape: true
    }
]

const toFormulirJadiExpert = ()=>{
    router.push('/')
}
</script>
<template>
    <div class="">
        <div class="px-2 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div class="text-slate-800 text-center">
                Kamu ingin berkontribusi untuk pengembangan karier di Indonesia? Bantu Jobhun yuk dengan daftar menjadi expert. Saatnya
                berbagi ilmu dan pengalaman ke ribuan pengguna di Jobhun! Kamu berpeluang untuk dilibatkan di berbagai proyek mengajar
                dan jasa yang sesuai dengan skill-mu.
            </div>
            <div>
                <h1 class="text-2xl md:text-3xl text-slate-800 text-center font-bold mt-14">
                    Keuntungan Menjadi Expert
                </h1>
                <div class="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-2 gap-6 items-center mt-5">
                    <div class="border-gray-300 border-2 bg-transparent w-full h-full text-center p-3 rounded-md" 
                    v-for="(benefit, i) in benefitJadiExpert" :key="i">
                        <div>
                            <img :src="benefit.image" class="h-32 mx-auto">
                        </div>
                        <div class="text-md" v-if="benefit.hasOwnProperty('escape')" v-html="benefit.desc">
                        </div>
                        <div v-else class="text-md">
                            {{ benefit.desc }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-20">
                <div class="bg-jobhunYellow text-center h-full w-full p-5 shadow-xl">
                    <h1 class="text-2xl md:text-3xl text-slate-800 text-center font-bold">
                        Persyaratan Menjadi Expert
                    </h1>
                    <div class="grid grid-cols-2 xl:grid-cols-6 md:grid-cols-4 gap-1 mt-5">
                        <div class="w-full h-full text-center p-3"
                            v-for="(terms, i) in termsJadiExpert" :key="i">
                            <div>
                                <img :src="terms.image" class="h-28 mx-auto">
                            </div>
                            <div class="text-md mt-3" v-if="terms.hasOwnProperty('escape')" v-html="terms.desc">
                            </div>
                            <div v-else class="text-md mt-3">
                                {{ terms.desc }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex justify-center mx-auto mt-5">
                    <button @click="toFormulirJadiExpert" class="h-12 mt-5 items-center bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm my-auto" type="submit">
                        Daftar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>