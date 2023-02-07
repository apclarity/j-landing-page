<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import CardMentor from './CardExpertHome.vue'
import { useDataExpertStore } from '../../stores/store-experts'
import { storeToRefs } from 'pinia'

const dataExpertsHomepageStore = useDataExpertStore()

const { expertFeatured } = storeToRefs(dataExpertsHomepageStore)

dataExpertsHomepageStore.getDataExpertFeatured()
const limit = 8
</script>
<template>
    <div class="">
        <div class="px-0 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <h1 class="text-2xl md:text-3xl text-slate-800 text-center font-bold">Rekomendasi experts unggulan</h1>
            <div class="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6 mt-10 px-28">
                <div v-for="(expert, index) in expertFeatured" :key="index">
                    <CardMentor :expertFeatured="expert" v-if="index<limit" />
                </div>
            </div>
            <div class="text-end text-sm px-28 mt-5">
                <a href="/experts/cariexpert">Cari experts lainnya -&gt;</a>
            </div>
        </div>
    </div>
</template>