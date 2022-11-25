<script setup>
import { ref } from 'vue'
import FormPelatihan from './FormPelatihan.vue'

const dataExpertPelatihan = {
    id: 1,
    profile: {
        imgProfile: new URL("../../../../../images/user-36-03.jpg", import.meta.url),
        name: 'Carolyn Nanana Nanana Nanana',
        position: 'Startup Founder',
        formalEducation: 'Universitas Dr. Soetomo (Bachelor of Communications) 2015 ',
        domicile: 'Surabaya',
        price: '300000',
        detailPelatihans: [
            {
                id: 'jadwal',
                title: 'Rekomendasi hari',
                desc: 'Senin, Selasa, Rabu, Kamis, Jumat'
            },
            {
                id: 'waktu',
                title: "Rekomendasi waktu",
                desc: '17.00 - 21.00 WIB'
            }
        ],
        linkedin: '#',
    }
}
</script>
<template>
    <div class="py-8 md:py-0 mx-auto mb-10">
        <FormPelatihan :dataExpertPelatihan="dataExpertPelatihan" />
    </div>
</template>