<script setup>
import { computed, ref } from 'vue'
import { useRouter, useRoute } from "vue-router"
import { storeToRefs } from 'pinia'
import { useLayoutStore } from '../../../layout/store'
import { isObjectEmpty } from '../../../../utils/Helper'
import CardExpert from './CardExpert.vue'
import { useDataExpertStore } from '../../../../stores/store-experts'
import AccordionBasic from './AccordionBasic.vue'
import { useOptionsStore } from '../../../../stores/store-options'
import AccordionCustom from './AccordionCustom.vue'

const router = useRouter()
const route = useRoute()

const layoutStore = useLayoutStore()
const session = computed(() => layoutStore.session)
const menuKonsultasiStore = useDataExpertStore()
const optionStore = useOptionsStore()

// const { listAccorConsul, listBidang } = storeToRefs(optionStore)

const data =  [
    {
        "title": "Siapa saja yang bisa mendaftar konsultasi?",
        "desc": "Siapapun bisa mendaftar. Kamu dapat memilih expert yang sesuai dengan kebutuhanmu."
    },
    {
        "title": "Apa saja topik yang dapat didiskusikan?",
        "desc": "Kamu dapat mendiskusikan berbagai topik sesuai kebutuhanmu. Selain topik pengembangan karier secara umum, kamu juga bisa membahas materi spesifik sesuai permasalahan yang kamu alami."
    },
    {
        "title": "Apa saja yang bisa dibahas di sesi konsultasi?",
        "desc": "Kamu bebas memilih untuk membahas materi secara teori, praktik, studi kasus, hingga <i>tools</i> dengan topik yang kamu inginkan. Jika masih bingung dengan topik dan mentor yang sesuai, kamu juga bisa menghubungi tim Jobhun untuk mendapatkan rekomendasi.",
        "escape": "true"
    },
    {
        "title": "Tools apa yang dibutuhkan dalam pelaksanaan mentoring?",
        "desc": "Saat pelaksanaan konsultasi, peserta dan expert menggunakan platform Zoom untuk melakukan video conference."
    },
    {
        "title": "Kapan sesi konsultasi dilaksanakan?",
        "desc": "Sesi konsultasi dilaksanakan sesuai dengan permintaan peserta. Kamu bisa melihat ketersediaan waktu konsultasi dari expert melalui deskripsi mentor di halaman profil. Kamu dapat menyesuaikannya dengan jadwalmu."
    },
    {
        "title": "Apakah sesi konsultasi dapat dipindahkan jadwalnya?",
        "desc": "Peserta boleh mengajukan pindah jadwal selama satu kali dengan catatan diinformasikan pada tim Jobhun maksimal 2 hari sebelum sesi konsultasi, kemudian menunggu expert menyetujui perubahan tersebut."
    },
    {
        "title": "Apakah boleh mendaftar konsultasi dengan dua expert sekaligus?",
        "desc": "Kamu boleh mendaftar sesi konsultasi dengan jumlah expert tidak terbatas. Tetapi kamu tidak bisa melakukan sesi konsultasi dengan dua expert dalam satu sesi konsultasi yang sama."
    },
    {
        "title": "Apakah boleh mendaftar konsultasi dengan teman/grup untuk mengikuti sesi konsultasi yang sama?",
        "desc": "Kamu diperbolehkan untuk mengajukan permintaan ini kepada tim Jobhun. Jelaskan kebutuhan ini pada Customer Service kami."
    },
    {
        "title": "Apakah boleh refund jika sudah melakukan pembayaran?",
        "desc": "Biaya yang telah dibayarkan tidak bisa dikembalikan, kecuali sesi konsultasi dibatalkan dari pihak Jobhun. Proses refund akan berlangsung maksimal 14 hari kerja."
    }
]

const bidang = [
    "Bidang",
    "Blogging",
    "Banking",
    "Branding",
    "Business Development",
    "Career Development",
    "Civil Servant",
    "Community Specialist",
    "Consultant",
    "Content Creator",
    "Content Writing",
    "Copywriting",
    "Creative",
    "Customer Relations",
    "Data Analyst",
    "Data Engineering",
    "Digital Strategist",
    "Engineering",
    "Backend Development",
    "Frontend Development",
    "Full Stack Development",
    "Business-SMES",
    "Startup Development",
    "Graphic Design",
    "Growth Hacking",
    "Health Sector",
    "Human Capital",
    "Human Resource",
    "Illustrasi",
    "Interpreting",
    "Investment",
    "KOL",
    "Marketing",
    "Marketing Communication",
    "Motion Graphic",
    "News Presenter",
    "Partnership",
    "People Management",
    "Product Development",
    "Product Management",
    "Programming",
    "Public Relation",
    "Public Speaking",
    "Research",
    "Sales",
    "SEO",
    "Social Initiator",
    "Social Media Management",
    "Software Engineering",
    "Talent Acquisition",
    "Training",
    "Translating",
    "TV Presenter",
    "UI/UX Design",
    "UX Writing",
    "Videography",
    "Voice over",
    "Writing",
    "Teaching",
    "Tourism",
    "Law"
]

const { expertFeatured } = storeToRefs(menuKonsultasiStore)
menuKonsultasiStore.getDataExpertFeatured()

const isSessionEmpty = computed(() => isObjectEmpty(layoutStore.sessionFirstName))

const isUserLogin = ref(false)

const tempNextRoute = ref('')

const alurLayananKonsultasi = [
    {
        title: 'Buat akun di Jobhun/Daftarkan dirimu sebagai pengguna Jobhun',
        image: new URL(`../../../../images/menu-konsultasi/Group-1405.png`, import.meta.url).href,
        escape: true
    },
    {
        title: 'Pilih layanan <strong>Konsultasi</strong>',
        image: new URL(`../../../../images/menu-konsultasi/Group-1406.png`, import.meta.url).href,
        escape: true
    },
    {
        title: 'Pilih <i>expert</i> sesuai kebutuhan',
        image: new URL(`../../../../images/menu-konsultasi/Group-1407.png`, import.meta.url).href,
        escape: true
    },
    {
        title: 'Pilih layanan “Konsultasi”',
        image: new URL(`../../../../images/menu-konsultasi/Group-1411.png`, import.meta.url).href,
        escape: true
    }
]

const alurLayananKonsultasi2 = [
    
    {
        title: 'Mengisi formulir secara lengkap',
        image: new URL(`../../../../images/menu-konsultasi/Group-1408.png`, import.meta.url).href,
        escape: true
    },
    {
        title: 'Klik “Ajukan”',
        image: new URL(`../../../../images/menu-konsultasi/Group-1409.png`, import.meta.url).href,
        escape: true
    },
    {
        title: 'Pengguna akan dihubungi oleh tim Jobhun terkait ketersediaan expert dan skema pembayaran',
        image: new URL(`../../../../images/menu-konsultasi/Group-1410.png`, import.meta.url).href,
        escape: true
    }
]

const detaiLayananPelatihan = [
    {
        title: 'Formula Khusus untuk Persiapan Karier',
        desc: 'Kamu akan belajar teori berdasarkan kebutuhan industri saat ini dan praktik langsung untuk menghasilkan portofolio yang bisa menunjang karier.',
        image: new URL(`../../../../images/menu-pelatihan/Group.png`, import.meta.url).href,
        escape: true
    },
    {
        title: 'Interaksi secara Langsung dengan Expert',
        desc: 'Saat kelas, kamu dapat berinteraksi secara langsung dan intensif dengan <i>expert</i>. Tanya sepuasnya seputar materi sampai kamu benar-benar paham.',
        image: new URL(`../../../../images/menu-pelatihan/Vector.png`, import.meta.url).href,
        escape: true
    },
    {
        title: 'Portofolio Penunjang Karier',
        desc: 'Hasil dari praktik yang kamu lakukan selama pelatihan dapat menjadi portofolio yang menunjang karier. Kamu juga akan mendapatkan sertifikat yang dapat digunakan saat melamar kerja.',
        image: new URL(`../../../../images/menu-pelatihan/files.png`, import.meta.url).href,
        escape: true
    },
    {
        title: 'Expert Berpengalaman & Berkualitas',
        desc: '<i>Expert</i> yang mengajar merupakan ahli profesional di bidangnya dan telah memiliki segudang pengalaman. <i>Expert</i> Jobhun juga berasal dari perusahaan-perusahaan ternama.',
        image: new URL(`../../../../images/menu-pelatihan/star.png`, import.meta.url).href,
        escape: true
    },
    {
        title: 'Biaya Terjangkau & Berbagai Pilihan Pembayaran',
        desc: 'Biaya pelatihan di Jobhun memiliki harga di bawah rata-rata namun tetap berkualitas. Metode pembayaran pun dapat dilakukan di berbagai <i>platform</i> dari tunai hingga cicilan.',
        image: new URL(`../../../../images/menu-pelatihan/money.png`, import.meta.url).href,
        escape: true
    }
]

const bidangs = [
    {
        title: 'Blogging'
    },
    {
        title: 'Banking'
    },
    {
        title: 'Branding'
    },
    {
        title: 'Business Development'
    },
    {
        title: 'Career Development'
    },
    {
        title: 'Blogging'
    },
    {
        title: 'Banking'
    },
    {
        title: 'Branding'
    },
    {
        title: 'Business Development'
    },
    {
        title: 'Career Development'
    },
    {
        title: 'Blogging'
    },
    {
        title: 'Banking'
    },
    {
        title: 'Branding'
    },
    {
        title: 'Business Development'
    },
    {
        title: 'Career Development'
    },
    {
        title: 'Blogging'
    },
    {
        title: 'Banking'
    },
    {
        title: 'Branding'
    },
    {
        title: 'Business Development'
    },
    {
        title: 'Career Development'
    },
    {
        title: 'Blogging'
    },
    {
        title: 'Banking'
    },
    {
        title: 'Branding'
    },
    {
        title: 'Business Development'
    },
    {
        title: 'Career Development'
    },
    {
        title: 'Blogging'
    },
    {
        title: 'Banking'
    },
    {
        title: 'Branding'
    },
    {
        title: 'Business Development'
    },
    {
        title: 'Career Development'
    },
]

const userExperience = {
    desc: `Bela merupakan <i>fresh graduate</i> yang ingin berkarier sebagai Content Writer di startup. 
    Ia merupakan lulusan Sistem Informasi. Minhun memberikan rekomendasi pada Bela untuk melakukan 
    konsultasi dengan salah satu Content Writer di startup untuk mengetahui lebih dalam <i>role</i> pekerjaan 
    impiannya, hingga bagaimana cara membangun karier di bidang tersebut. Minhun juga merekomendasikan 
    Bela untuk mentoring dengan mentor berlatar belakang UX Writer untuk mengecek potensi belajar menulis 
    di aplikasi/platform digital yang masih relevan dengan ilmu yang dipelajari Bela di bangku kuliah. 
    Setelah mengikuti kedua mentoring tersebut, Bela memutuskan untuk mencoba keduanya. Minhun memberikan 
    Bela rekomendasi untuk melakukan mentoring dengan HR di startup dan melakukan review CV, portfolio, 
    hingga tips untuk membangun karier. Sekarang Bela sudah bekerja menjadi UX Writer di salah satu startup di Indonesia.`,
    name: 'Bella, Fresh Graduate',
    escape: true
}

const toFormulirJadiExpert = ()=>{
    router.push('/jadiexpert/formulir')
}
</script>
<template>
    <div class="">
        <div class="px-2 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div>
                <h1 class="text-2xl md:text-3xl text-black text-center font-bold mt-14">
                    Mengapa Harus Menggunakan Layanan Ini?
                </h1>
                <div class="justify-center grid grid-cols-2 xl:grid-cols-3 md:grid-cols-2 gap-6 items-center content-center mt-10 ">
                    <div class="border-gray-300 border-2 bg-transparent w-full h-full text-center p-3 rounded-md" style="position: relative;" 
                    v-for="(detail, i) in detaiLayananPelatihan" :key="i">
                        <div class="py-3">
                            <img :src="detail.image" class="h-12 lg:h-20 mx-auto">
                        </div>
                        <div class="text-md font-bold text-black bottom" v-if="detail.hasOwnProperty('escape')" v-html="detail.title">
                        </div>
                        <div v-else class="text-md font-bold text-black">
                            {{ detail.title }}
                        </div>
                        <div class="text-md bottom" v-if="detail.hasOwnProperty('escape')" v-html="detail.desc">
                        </div>
                        <div v-else class="text-md">
                            {{ detail.desc }}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 class="text-2xl md:text-3xl text-black text-center font-bold mt-24">
                    Alur Konsultasi di Jobhun
                </h1>
                <div class="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-2 gap-6 items-center mt-10 py-5">
                    <div class="border-gray-300 border-2 bg-transparent w-full h-full text-center p-3 rounded-md" style="position: relative;" 
                    v-for="(alur, i) in alurLayananKonsultasi" :key="i">
                        <div class="my-2">
                            <img :src="alur.image" class="h-20 -mt-14 mx-auto">
                        </div>
                        <div class="text-md font-bold text-black bottom px-5" v-if="alur.hasOwnProperty('escape')" v-html="alur.title">
                        </div>
                        <div v-else class="text-md font-bold text-black">
                            {{ alur.title }}
                        </div>
                    </div>
                </div>
                <div class="justify-center grid grid-cols-2 xl:grid-cols-3 md:grid-cols-2 gap-6 items-center content-center mt-10 mx-24">
                    <div class="border-gray-300 border-2 bg-transparent w-full h-full text-center p-3 rounded-md" style="position: relative;" 
                    v-for="(alur2, i) in alurLayananKonsultasi2" :key="i">
                        <div class="my-2">
                            <img :src="alur2.image" class="h-20 -mt-14 mx-auto">
                        </div>
                        <div class="text-md font-bold text-black bottom px-5" v-if="alur2.hasOwnProperty('escape')" v-html="alur2.title">
                        </div>
                        <div v-else class="text-md font-bold text-black">
                            {{ alur2.title }}
                        </div>
                    </div>
                </div>
            </div>
            <hr class="mt-14 mb-10">
            <div>
                <h1 class="text-xl md:text-2xl text-black text-center">
                    Total Experts
                </h1>
                <h1 class="text-xl md:text-5xl text-black text-center font-bold">
                    322
                </h1>
            </div>
            <div class="mt-20">
                <div class="grid grid-cols-4">
                    <span v-for="(bidang, i) in bidang" :key="i" class="">
                        {{ bidang }}
                    </span>
                </div>
            </div>
            <hr class="mt-14 mb-10">
            <div>
                <h1 class="text-2xl md:text-3xl text-black text-center font-bold mt-14">
                    Pengalaman Pengguna Setelah Konsultasi di Jobhun
                </h1>
                <div class="items-center mt-10 ">
                    <div class="border-gray-300 border-2 bg-transparent w-full h-full p-7 rounded-md" style="position: relative;" >
                        <div class="">
                            <img src="../../../../images/menu-konsultasi/ICON-12.png" class="h-20 items-start -mt-16">
                        </div>
                        <div class="ml-20">
                            <div class="text-md text-black bottom" v-if="userExperience.hasOwnProperty('escape')" v-html="userExperience.desc">
                            </div>
                            <div class="text-md text-black bottom" v-else>
                                <p>{{ userExperience.desc }}</p>
                            </div>
                            <div class="font-bold text-black text-md mt-2">
                                {{ userExperience.name }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="mt-14 mb-10">
            <div>
                <h1 class="text-2xl md:text-3xl text-black text-center font-bold mt-14">
                    Pilihan Expert
                </h1>
                <div class="">
                    <div class="px-0 lg:px-8 py-8 w-full max-w-7xl mx-auto">
                        <div class="grid grid-cols-2 xl:grid-cols-3 md:grid-cols-3 gap-6 mt-10 px-40">
                            <div v-for="(expert, index) in expertFeatured" :key="expert">
                                <CardExpert :expert="expert" v-if="index < 6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="mt-14 mb-10">
            <div>
                <h1 class="text-2xl md:text-3xl text-black text-center font-bold mt-14">
                    Pertanyaan yang Sering Diajukan
                </h1>
                <!-- <div>
                    <AccordionBasic :dataAccordion="data"/>
                </div> -->
                <div class="mt-10">
                    <AccordionCustom v-for="(data, index) in data" :key="index">
                        <template v-slot:title>
                            <span class="text-md text-black font-medium">
                                {{ data.title }}
                            </span>
                        </template>
                        <template v-slot:content>
                            <p class="text-sm text-black" v-if="data.hasOwnProperty('escape')" v-html="data.desc">
                            </p>
                            <p  class="text-sm text-black" v-else>
                                {{ data.desc }}
                            </p>
                        </template>
                    </AccordionCustom>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
</style>