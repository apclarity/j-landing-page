<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ModalBasic from './ModalBasic.vue'
import IconCheck from '../../../partials/icons/icon-circle-check.vue'

const router = useRouter()

const props = defineProps({
    verifikasiAkun: Boolean,
    email: String
})

const emit = defineEmits(['close-modal'])

const closeModal = () => {
    emit("close-modal")
    router.push({ path: '/signin' })
}
</script>
<template>
    <div class="m-1.5">
        <ModalBasic :modalOpen="props.verifikasiAkun" @close-modal="closeModal()">
            <div class="mb-5">
                <div class="items-center flex">
                    <div class="mx-auto mt-5 mb-5">
                        <IconCheck height="100px" class="fill-jobhunGreen" />
                    </div>
                </div>
                <div class="mx-auto text-center px-8">
                    <span class="text-black">
                        <span class="text-md font-bold">Verifikasi Berhasil Dikirim!</span>
                        <br>
                        <span class="text-sm">Instruksi verifikasi akun berhasil dikirim ke <span class="font-bold underline">{{ props.email }}</span>. Silakan
                        periksa kotak masuk/spam email kamu.</span>
                    </span>
                    <div class="mx-auto text-center px-8">
                        <div class="infline-flex space-x-5">
                            <button @click.prevent="closeModal()" class="h-9 mt-3 bg-gray-300 hover:bg-gray-400 text-black px-7 rounded text-sm">
                                <span>Siap</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ModalBasic>
    </div>

</template>