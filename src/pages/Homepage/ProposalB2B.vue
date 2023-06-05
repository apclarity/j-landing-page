<script setup>
import Flipbook from 'flipbook-vue'
import ModalBasic from '../../components/ModalBasic.vue'
import IconCross from '../../partials/icons/icon-cross.vue'
import { onMounted, ref } from 'vue';

const props = defineProps({
    modalOpenStatus: Boolean
})

const emit = defineEmits(['close-modal'])

const closeModal = () => {
    emit("close-modal")
}

let images = [];
for (let i = 1; i <= 33; i++) {
    let img = '../../images/proposalb2b/00'
    if (i < 10) {
        img += '0'
    }
    img += i.toString() + ".jpg"
    images.push(img)
}
let flip = (way) => {
    if (way == "left") {
        flipbook.flipLeft
    } else {
        flipbook.flipRight
    }
}

</script>
<template>
    <ModalBasic :modalOpen="props.modalOpenStatus" @close-modal="closeModal()" class="opacity-0">
        <div>
            <flipbook class="flipbook" :pages="images">
                <div class="close">
                    <button class="block sm:hidden h-10 px-2 button-link mt-10 text-center items-center"
                        @click="emit('closeModal')">
                        <IconCross class="h-14 fill-white opacity-70 hover:opacity-100" />
                    </button>
                    <div class="hidden sm:block text-center items-center text-black font-bold">
                        <div class="h-full p-2 rounded-lg bg-black text-white">
                            Tekan [Esc] untuk kembali
                        </div>
                        <!-- <button class="h-10 px-2 bg-jobhunYellow hover:bg-yellow-200 rounded-lg button-link hover:shadow-lg" @click="flip('left')" >
                            &lt; Halaman Sebelumnya
                        </button>
                        <button class="h-10 px-2 ml-2 bg-jobhunYellow hover:bg-yellow-200 rounded-lg button-link hover:shadow-lg" @click="flip('right')" >
                            Halaman Selanjutnya &gt;
                        </button>
                            <button class="h-10 px-2 bg-jobhunGreen hover:bg-yellow-200 rounded-lg button-link hover:shadow-lg" @click="emit('closeModal')" >
                                Tutup
                            </button> -->
                    </div>
                </div>
            </flipbook>
        </div>
        <div>
            <!-- <button class="h-10 px-2 bg-jobhunYellow hover:bg-yellow-200 rounded-lg button-link hover:shadow-lg" @click="flip('left')" >
            &lt; Halaman Sebelumnya
        </button>
        <button class="h-10 px-2 ml-2 bg-jobhunYellow hover:bg-yellow-200 rounded-lg button-link hover:shadow-lg" @click="flip('right')" >
            Halaman Selanjutnya &gt;
        </button>
            <button class="h-10 px-2 bg-jobhunGreen hover:bg-yellow-200 rounded-lg button-link hover:shadow-lg" @click="emit('closeModal')" >
                Tutup
            </button> -->
        </div>
    </ModalBasic>
</template>
<style scoped>
.flipbook {
    /* width: 90vw;
  height: 60vh; */

    /* width: 90vw;
  height: 30vh;
  position: fixed;
  top: 0;
  left: 0; */


    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

    display: table-cell;
    vertical-align: middle;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.close {
    display: flex;
    justify-content: center;
    align-items: center;
}

.close-button-mobile {
    position: absolute;
    top: 50px;
}
</style>