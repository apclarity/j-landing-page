<script setup>
const kebutuhan = [
    {
        title: 'Profil Jobhun',
        link: 'https://drive.google.com/drive/folders/1NAH0p9wmMgpHhNFrm2_PVcx-zoBW3PNN?usp=sharing'
    },
    {
        title: 'Katalog experts',
        link: 'https://drive.google.com/drive/folders/1Df87Gc4K5c2kMKFNafVQUbX3yZyUbIJ-?usp=sharing'
    },
    {
        title: 'Pendaftaran layanan & program',
        link: 'https://linktr.ee/jobhun'
    },
    {
        title: 'Layanan B2B & B2G',
        link: 'https://drive.google.com/drive/folders/1T3UC3DZHGuiBZE0oS4GrWvbfVQQfgDJB?usp=sharing'
    }
]
</script>
<template>
    <div class="">
        <div class="px-8 lg:px-8 py-20 md:py-32 w-full mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="" v-for="(button, i) in kebutuhan" :key="i">
                <button class="w-full h-20 bg-jobhunYellow hover:bg-yellow-400 rounded-lg button-link hover:shadow-lg">
                    <a :href="button.link" class="font-bold text-black text-2xl">{{ button.title }}</a>
                </button>
            </div>
        </div>
    </div>
</template>
<style>
</style>