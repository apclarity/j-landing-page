<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ModalBasic from '../../../components/ModalBasic.vue'
import IconCheck from '../../../partials/icons/icon-circle-check.vue'

const router = useRouter()

const props = defineProps({
    responVerifikasiAkun: Boolean,
})

const emit = defineEmits(['close-modal'])

const closeModal = () => {
    emit("close-modal")
    router.push({ path: '/'})
}
</script>
<template>
    <div class="m-1.5">
        <ModalBasic :modalOpen="props.responVerifikasiAkun" @close-modal="closeModal()">
            <div class="mb-5">
                <div class="items-center flex">
                    <div class="mx-auto mt-5 mb-5">
                        <IconCheck height="100px" class="fill-jobhunGreen" />
                    </div>
                </div>
                <div class="mx-auto text-center px-8">
                    <span class="text-black">
                        <span class="text-md font-bold">Verifikasi berhasil</span>
                        <br>
                        <span class="text-sm">
                            Yey, kamu telah menjadi pengguna Jobhun! Saat ini emailmu sudah aktif dan bisa digunakan.
                        </span>
                    </span>
                </div>
            </div>
        </ModalBasic>
    </div>

</template>