<script setup>
import { ref } from 'vue'
import FormRekrutExpert from './FormRekrutExpert.vue'
import { useDataExpertDetailStore } from '../../../../../stores/store-experts'
import { storeToRefs } from 'pinia'

const dataExpertDetailStore = useDataExpertDetailStore()

await dataExpertDetailStore.getDataDetailExpert()

const { detailExpert } = storeToRefs(dataExpertDetailStore)

</script>
<template>
    <div class="py-8 md:py-0 mx-auto mb-10">
        <FormRekrutExpert :dataRekrutExpert="detailExpert" />
    </div>
</template>