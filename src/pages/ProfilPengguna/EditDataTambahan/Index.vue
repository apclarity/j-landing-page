<script setup>
import { ref, onMounted, computed } from 'vue'
import LayoutProfile from './LayoutProfile.vue'
import { useDataExpertStore } from '../../../stores/store-experts'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

// const dataExpertDetailStore = useDataExpertStore()

// const route = useRoute()
// const id = route.params.id

// await dataExpertDetailStore.getDataDetailExpert(id)

// const { detailExpert } = storeToRefs(dataExpertDetailStore)

const profile = {
    img: new URL("../../images/dummy/dummy-profile.png", import.meta.url),
    name: "Mas Budi",
    proffesion: "Startup founder",
    company: "PT. Maju Terus Gamau Mundur",
    location: "Surabaya"
}
</script>
<template>
    <div class="py-8 md:py-0 mx-auto mb-10">
        <LayoutProfile :dataProfile="profile"/>
    </div>
</template>