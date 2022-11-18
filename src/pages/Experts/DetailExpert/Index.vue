<script setup>
import { ref } from 'vue'
import MainContent from './MainContent.vue'

const items = [
    {
        img: new URL("../../images/carousel-homepage/Logo Web Baru-01.svg", import.meta.url),
        id: 0,
    }
]

const dataExperts = {
    id: 1,
    profile: {
        imgProfile: new URL("../../../images/user-36-03.jpg", import.meta.url),
        name: 'Carolyn Nanana Nanana Nanana',
        position: 'Startup Founder',
        formalEducation: 'Universitas Dr. Soetomo (Bachelor of Communications) 2015 ',
        domicile: 'Surabaya',
        tagBidang: [
            {
                title: 'Sales'
            },
            {
                title: 'Marketing'
            }
        ],
        experience: [
            {
                position: 'Founder of Sate Shincan',
                city: 'Surabaya',
                dateStart: 'April 2017',
                dateEnd: 'Mei 2020',
            },
            {
                position: "Supervisor in McDonald's",
                city: 'Bali',
                dateStart: 'Desember 2020',
                dateEnd: 'Saat ini',
            }
        ],
        linkedin: '#',
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    services: [
        {
            title: "Konsultasi",
            id: "konsultasi",
            desc: `Fitur ini akan membantumu terhubung dengan expert melalui konsultasi privat/grup untuk persiapan karier. Kamu bisa memilih topik pembahasan dan waktu pelaksanaan untuk konsultasi secara fleksibel.`,
            to: "/experts/formkonsultasi"
        },
        {
            title: "Pelatihan",
            id: "pelatihan",
            desc: `Lengkapi keterampilan dan kemampuanmu melalui pelatihan secara intensif bersama dengan expert, baik secara privat/grup. Kamu bisa menentukan topik pembahasan dan waktu pelaksanaan untuk pelatihan secara fleksibel.`,
            to: "/"
        },
        {
            title: "Undang Expert",
            id: "undang-expert",
            desc: `Temukan expert yang tepat untuk berbagai acara, seperti seminar, workshop, talkshow, hingga training. Fitur ini akan membantumu menemukan expert terbaik untuk kebutuhan pembicara atau narasumber sesuai dengan kualifikasi yang dibutuhkan.`,
            to: "/"
        },
        {
            title: "Rekrut Expert",
            id: "rekrut-expert",
            desc: `Membutuhkan keahlian dari expert untuk proyek? Dapatkan talenta terbaik untuk pengerjaan proyek sesuai dengan kualifikasi, jangka waktu, dan budget dari perusahaan. Melalui fitur ini, perusahaan bisa mendapatkan talenta tanpa perlu repot dalam proses rekrutmen hingga penggajian. `,
            to: "/"
        }
    ]
}

const testimonies= [
    {
        id: 1,
        img: new URL("../../../images/user-36-03.jpg", import.meta.url),
        name: "Malik Sulaiman",
        desc: "Expert dapat menjelaskan materi dengan baik dan memberikan contoh yang relevan. Super fun!",
        rating: 3
    },
    {
        id: 2,
        img: new URL("../../../images/user-36-03.jpg", import.meta.url),
        name: "Nicholas Scratch",
        desc: "Pelayanan tim Jobhun dilakukan dengan baik, dari mulai konfirmasi pembayaran sampai proses penjadwalan dan instruksinya. Bahkan saat kelas harus direschedule pun difollow up dengan baik. Good job team Jobhun! Sangat baik pelayanannya dan tujuan dari kelasnya. Expert yang mengajar juga top banget!",
        rating: 5
    },
    {
        id: 3,
        img: new URL("../../../images/user-36-03.jpg", import.meta.url),
        name: "Yth Pak Tono Suyono Mangkujiwo",
        desc: "Pelayanan tim Jobhun dilakukan dengan baik, dari mulai konfirmasi pembayaran sampai proses penjadwalan dan instruksinya. Bahkan saat kelas harus direschedule pun difollow up dengan baik. Good job team Jobhun! Sangat baik pelayanannya dan tujuan dari kelasnya. Expert yang mengajar juga top banget!",
        rating: 4
    }
]
</script>
<template>
    <div class="py-8 md:py-0 w-full mx-auto mb-10">
        <div class="xl:flex">
            <div class="md:flex flex-1">
                <div class="relative pb-8">
                    <MainContent :dataExpert="dataExperts" :testimonies="testimonies"/>
                </div>
            </div>
        </div>
    </div>
</template>