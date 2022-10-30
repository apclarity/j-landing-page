<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ModalBasic from '../../components/ModalBasic.vue'


const router = useRouter()

const props = defineProps({
    isPreviewMentor: Boolean,
    expertID: {
        required: true,
        type: Number
    }
})

const itemsModal = [
    {
        title: 'Konsultasi',
        id: 'konsultasi',
    },
    {
        title: 'Pelatihan',
        id: 'pelatihan',
    },
    {
        title: 'Undang Expert',
        id: 'undang-expert',
    },
    {
        title: 'Rekrut Expert',
        id: 'rekrut-expert',
    }
]

const emit = defineEmits(['close-modal'])

const closeModal = ()=> {
    emit("close-modal")
}

const scrollTo = (id) => {
    router.push({ path: '/experts/detailexpert/' + props.expertID, query: { section: id } })
}
</script>
<template>
    <div class="m-1.5">
        <!-- Start -->
        <ModalBasic :modalOpen="props.isPreviewMentor" @close-modal="closeModal()">
            <!-- Modal content -->
            <div class="px-5 pt-4 pb-1">
                <div class="text-sm">
                    <div class="mb-4 font-bold text-lg text-black">Layanan</div>
                    <!-- Options -->
                    <ul class="space-y-2 mb-4">
                        <li v-for="layanan in itemsModal" :key="layanan">
                            <button @click="scrollTo(layanan.id)" 
                                class="w-full h-full text-left py-3 px-4 rounded bg-white border-2 border-gray-300 hover:border-jobhunGreen shadow-sm duration-150 ease-in-out">
                                <div class="flex items-center">
                                    <div class="w-4 h-4 border-4 border-gray-500 rounded-full mr-3"></div>
                                    <div class="grow">
                                        <div class="flex flex-wrap items-center justify-between mb-0.5">
                                            <span class="font-bold text-black text-md">
                                                {{layanan.title}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Modal footer -->
            <div class="px-5 py-4">
                <div class="flex flex-wrap justify-end space-x-2">
                    <button class="btn-sm border-slate-200 hover:border-slate-300 text-slate-600"
                        @click.stop="closeModal()">Cancel</button>
                    <button class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Change Plan</button>
                </div>
            </div>
        </ModalBasic>
        <!-- End -->
    </div>
    
</template>