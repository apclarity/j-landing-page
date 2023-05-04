<script setup>
import Flipbook from 'flipbook-vue'
import { onMounted, ref } from 'vue';

const emit = defineEmits(['closeModal'])

let images = [];
for(let i=1; i<=28; i++){
    let img = '../../images/companyprofile/00'
    if(i < 10){
        img += '0'
    }
    img += i.toString() + ".jpg"
    images.push(img)
}
let flip = (way) =>{
    if(way=="left"){
        flipbook.flipLeft
    }else{
        flipbook.flipRight
    }
}

</script>
<template>
    <div>
        <flipbook class="flipbook" :pages="images"></flipbook>
    </div>
    <div>
        <!-- <button class="h-10 px-2 bg-jobhunYellow hover:bg-yellow-200 rounded-lg button-link hover:shadow-lg" @click="flip('left')" >
            &lt; Halaman Sebelumnya
        </button>
        <button class="h-10 px-2 ml-2 bg-jobhunYellow hover:bg-yellow-200 rounded-lg button-link hover:shadow-lg" @click="flip('right')" >
            Halaman Selanjutnya &gt;
        </button> -->
        <button class="h-10 px-2 bg-jobhunGreen hover:bg-yellow-200 rounded-lg button-link hover:shadow-lg" @click="emit('closeModal')" >
            Tutup
        </button>
    </div>
</template>
<style scoped>
.flipbook {
  width: 90vw;
  height: 60vh;
}

</style>