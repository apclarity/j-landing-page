<script setup>
    import {ref} from 'vue'
    import Combobox from './Combobox.vue'
    import MultiSel from './MultipleSelHome.vue'

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
                    <input id="action-search" placeholder="Cari"
                        class="form-input shadow py-2.5 my-3 focus:outline-none focus:bg-white focus:border-emerald-500 md:w-48 sm:w-48 xs:w-48 mr-3 h-10"
                        type="search" />
                    <!-- <button data-dropdown-toggle="dropdown"
                        class="text-black bg-white button-size hover:bg-gray-50 border focus:outline-none font-medium rounded text-sm px-4 py-2.5 text-center inline-flex items-center mr-3"
                        type="button">Bidang
                        <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                        </svg>
                    </button> -->
                    <Combobox :bidangs="itemsBidang"/>
                    <!-- <DropdownBidang :bidangs="itemBidang"/> -->
                    
                    <MultiSel :bidangs="itemsBidang"/>
                    <!-- <button data-dropdown-toggle="dropdown"
                        class="text-black bg-white button-size hover:bg-gray-50 border focus:outline-none font-medium rounded text-sm px-4 py-2.5 text-center inline-flex items-center mr-3"
                        type="button">Kebutuhan
                        <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                        </svg>
                    </button> -->
                    <button
                        class="bg-jobhunGreen h-10 hover:bg-emerald-600 text-white px-7 rounded">
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