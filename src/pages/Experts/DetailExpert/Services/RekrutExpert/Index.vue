<script setup>
import { ref } from 'vue'
import FormRekrutExpert from './FormRekrutExpert.vue'

const dataRekrutExpert = {
    id: 1,
    profile: {
        imgProfile: new URL("../../../../../images/user-36-03.jpg", import.meta.url),
        name: 'Carolyn Nanana Nanana Nanana',
        position: 'Startup Founder',
        formalEducation: 'Universitas Dr. Soetomo (Bachelor of Communications) 2015 ',
        domicile: 'Surabaya',
        price: '300000',
        detailRekrutExperts: [
            {
                id: 'skill',
                title: 'Kemampuan yang dimiliki',
                desc: 'Writing, Marketing, Communications, Public Speaking'
            },
            {
                id: 'jobType',
                title: "Jenis pekerjaan yang bisa diterima",
                desc: 'Freelance, Part Time'
            }
        ],
        linkedin: '#',
    }
}
</script>
<template>
    <div class="py-8 md:py-0 mx-auto mb-10">
        <FormRekrutExpert :dataRekrutExpert="dataRekrutExpert" />
    </div>
</template>