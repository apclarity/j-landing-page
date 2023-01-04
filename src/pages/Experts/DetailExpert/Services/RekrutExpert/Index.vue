<script setup>
import { ref } from 'vue'
import FormRekrutExpert from './FormRekrutExpert.vue'
import { useDataExpertStore } from '../../../../../stores/store-experts'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const dataExpertDetailStore = useDataExpertStore()

const route = useRoute()
const id = route.params.id

await dataExpertDetailStore.getDataDetailExpert(id)

const { detailExpert } = storeToRefs(dataExpertDetailStore)

</script>
<template>
    <div class="py-8 md:py-0 mx-auto mb-10">
        <FormRekrutExpert :dataRekrutExpert="detailExpert" />
    </div>
</template>