<script setup>
import { ref, onMounted, computed } from 'vue'
import LayoutProfile from './LayoutProfile.vue'
import { useDataExpertStore } from '../../stores/store-experts'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const dataExpertDetailStore = useDataExpertStore()

const route = useRoute()
const id = route.params.id

await dataExpertDetailStore.getDataDetailExpert(id)

const { detailExpert } = storeToRefs(dataExpertDetailStore)

const profile = {
    img: new URL("../../images/dummy/dummy-profile.png", import.meta.url),
    name: "Mas Budi",
    proffesion: "Startup founder",
    company: "PT. Maju Terus Gamau Mundur",
    location: "Surabaya"
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
    <div class="py-8 md:py-0 mx-auto mb-10">
                    <LayoutProfile :dataProfile="profile" :testimonies="testimonies" v-if="detailExpert != null"/>

    </div>
</template>