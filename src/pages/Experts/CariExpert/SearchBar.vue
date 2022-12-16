<script setup>
import { ref } from 'vue'

const itemsBidang = [
    {
        id: 1,
        title: 'Submarine',
    },
    {
        id: 2,
        title: 'Astronout',
    },
    {
        id: 3,
        title: 'Kang Kayu',
    },
    {
        id: 4,
        title: 'Petani',
    },
    {
        id: 5,
        title: 'Robotics',
    },
    {
        id: 6,
        title: 'Cooking',
    },
    {
        id: 7,
        title: 'Mechanics',
    },
    {
        id: 8,
        title: 'Engineer',
    },
    {
        id: 9,
        title: 'Submarine',
    },
    {
        id: 10,
        title: 'Submarine',
    },
    {
        id: 4,
        title: 'Petani',
    },
    {
        id: 5,
        title: 'Robotics',
    },
    {
        id: 6,
        title: 'Cooking',
    },
    {
        id: 7,
        title: 'Mechanics',
    },
    {
        id: 8,
        title: 'Engineer',
    },
    {
        id: 9,
        title: 'Submarine',
    },
    {
        id: 10,
        title: 'Submarine',
    },
]

const searchInHomepage = ref({
    company: '',
    profession: '',
    sector: ''
})
</script>
<template>
    <div class="justify-center px-4 sm:px-6 md:px-10 lg:mx-28 pt-8 lg:pt-10 flex">
        <div class="">
            <div class="w-full">
                <div class="mb-5">
                    <p class="xl:text-2xl md:text-lg text-2lg text-black font-bold">
                        Temukan Experts Sesuai Kebutuhanmu
                    </p>
                </div>
            </div>
            <div class="mt-5 w-full">
                <form class="w-full">
                    <input id="action-search" placeholder="Nama atau perusahaan"
                        class="form-input shadow my-3 focus:outline-none focus:bg-white focus:border-emerald-500 md:w-96 sm:w-60 w-48 mr-5 h-10"
                        type="search" v-model="searchInHomepage.company" />
                    <input id="action-search" placeholder="Profesi"
                        class="form-input shadow my-3 focus:outline-none focus:bg-white focus:border-emerald-500 md:w-72 sm:w-64 w-48 mr-5 h-10"
                        type="search" v-model="searchInHomepage.profession" />
                    <input id="action-search" placeholder="Bidang"
                        class="form-input shadow my-3 py-10 focus:outline-none focus:bg-white focus:border-emerald-500 md:w-72 sm:w-64 w-48 mr-5 h-10"
                        type="search" v-model="searchInHomepage.sector" />
                    <button type="submit"
                        class="bg-jobhunGreen text-sm h-9 hover:bg-emerald-600 text-white px-5 w-24 rounded">
                        Cari
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>