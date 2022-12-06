<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ModalBasic from '../../../components/ModalBasic.vue'
import Multiselect from '@vueform/multiselect'

const router = useRouter()

const props = defineProps({
    isPreviewMentor: Boolean,
})

const cariExpertsModal = ref({
    sectors: []
})

const emit = defineEmits(['close-modal'])

const closeModal = () => {
    emit("close-modal")
}

const sectors = [
    'Teori', 'Praktik', 'Tools', 'Soft Skill'
]
</script>
<template>
    <div class="m-1.5">
        <ModalBasic :modalOpen="props.isPreviewMentor" @close-modal="closeModal()">
            <div class="px-5 pt-4 pb-1">
                <div class="text-sm">
                    <div class="mb-4 font-bold text-lg text-black">Filter</div>
                        <div class="items-center flex">
                            <div class="mx-2 w-full">
                                <input id="action-search" placeholder="Profesi"
                                    class="form-input shadow py-2.5 my-3 focus:outline-none focus:bg-white focus:border-emerald-500 md:w-72 sm:w-64 w-48 mr-5 h-10"
                                    type="search" v-model="profession" />
                                <!-- <input id="action-search" placeholder="Bidang"
                                    class="form-input shadow py-2.5 my-3 focus:outline-none focus:bg-white focus:border-emerald-500 md:w-72 sm:w-64 w-48 mr-5 h-10"
                                    type="search" v-model="sector" /> -->
                                <Multiselect v-model="cariExpertsModal.sectors" :close-on-select="false" placeholder="Bidang" mode="tags"
                                    class="form-input shadow py-2.5 my-3 focus:outline-none focus:bg-white focus:border-emerald-500 md:w-72 sm:w-64 w-48 mr-5 h-10 flex justify-start"
                                    :create-option="true" required :options="sectors" />
                            </div>
                        </div>
                </div>
            </div>
        </ModalBasic>
    </div>

</template>