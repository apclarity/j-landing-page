<script setup>
import { ref } from 'vue'
import ModalBasic from '../../components/ModalBasic.vue'
import CompanyProfile from './CompanyProfile.vue'
import KatalogExpert from './KatalogExpert.vue';
import ProposalB2B from './ProposalB2B.vue'

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
let modalOpenStatus = ref(false)
let modalOpenStatusCompProfile = ref(false)
let modalOpenStatusKatalogExpert = ref(false)
let modalOpenStatusProposalB2B = ref(false)


let closeModalCompProfile = () => {
    modalOpenStatusCompProfile.value = false
}

let closeModalKatalogExpert = () => {
    modalOpenStatusKatalogExpert.value = false
}

let closeModalProposalB2B = () => {
    modalOpenStatusProposalB2B.value = false
}
</script>
<template>
    <div>
        <!-- <div class="modal-mask" v-if="modalOpenStatus">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            <CompanyProfile @closeModal="closeModal"/>
                        </slot>
                    </div>  
                </div>
            </div>
        </div> -->
        <div v-if="modalOpenStatusCompProfile">
            <CompanyProfile :modalOpenStatus="modalOpenStatusCompProfile" @close-modal="closeModalCompProfile"/>
        </div>
        <div v-if="modalOpenStatusKatalogExpert">
            <KatalogExpert :modalOpenStatus="modalOpenStatusKatalogExpert" @close-modal="closeModalKatalogExpert"/>
        </div>
        <div v-if="modalOpenStatusProposalB2B">
            <ProposalB2B :modalOpenStatus="modalOpenStatusProposalB2B" @close-modal="closeModalProposalB2B"/>
        </div>
        <div class="px-8 lg:px-8 w-full mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="" v-for="(button, i) in kebutuhan" :key="i">
                <div>
                    <div v-if="button.title === 'Pendaftaran layanan & program'">
                        <button class="w-full h-20 bg-jobhunYellow hover:bg-yellow-400 rounded-lg button-link hover:shadow-lg">
                            <a :href="button.link" class="font-bold text-black text-2xl">{{ button.title }}</a>
                        </button>
                    </div>
                    <div v-else-if="button.title === 'Profil Jobhun'">
                        <button class="w-full h-20 bg-jobhunYellow hover:bg-yellow-400 rounded-lg button-link hover:shadow-lg" @click="modalOpenStatusCompProfile = true">
                            <a href="#" class="font-bold text-black text-2xl">{{ button.title }}</a>
                        </button>
                    </div>
                    <div v-else-if="button.title === 'Katalog experts'">
                        <button class="w-full h-20 bg-jobhunYellow hover:bg-yellow-400 rounded-lg button-link hover:shadow-lg" @click="modalOpenStatusKatalogExpert = true">
                            <a href="#" class="font-bold text-black text-2xl">{{ button.title }}</a>
                        </button>
                    </div>
                    <div v-else-if="button.title === 'Layanan B2B & B2G'">
                        <button class="w-full h-20 bg-jobhunYellow hover:bg-yellow-400 rounded-lg button-link hover:shadow-lg" @click="modalOpenStatusProposalB2B = true">
                            <a href="#" class="font-bold text-black text-2xl">{{ button.title }}</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-container {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
</style>