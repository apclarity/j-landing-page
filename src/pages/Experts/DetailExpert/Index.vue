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
                    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
                },
                {
                    title: "Pelatihan",
                    id: "pelatihan",
                    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
                },
                {
                    title: "Undang Expert",
                    id: "undang-expert",
                    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
                },
                {
                    title: "Rekrut Expert",
                    id: "rekrut-expert",
                    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
                }
            ]
        }
</script>
<template>
    <div class="py-8 md:py-0 w-full mx-auto mb-10">
        <div class="xl:flex">
            <div class="md:flex flex-1">
                <div class="relative pb-8">
                    <MainContent :dataExpert="dataExperts"/>
                </div>
            </div>
        </div>
    </div>
</template>