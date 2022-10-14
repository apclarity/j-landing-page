<script setup>
import { toRefs } from 'vue'
import ModalAction from '../../../components/ModalAction.vue'

const props = defineProps({
    formOpenStatus: {
        default: false
    }
})

const { formOpenStatus } = toRefs(props)

const emits = defineEmits(["closeForm"])

const closeForm = ()=> {
    emits('closeForm')
}
</script>
<template>
    <ModalAction id="newsletter-modal" :modalOpen="formOpenStatus" @close-modal="closeForm">
        <!-- Modal header -->
        <div class="mb-2 text-center">
            <div class="text-lg font-semibold text-slate-800">Tambah industri</div>
        </div>
        <!-- Modal content -->
        <div class="px-5 py-4">
            <div class="space-y-3">
                <form class="flex max-w-sm m-auto">
                    <div class="grow mr-2">
                        <input 
                        placeholder="Nama industri" 
                        class="form-input w-full px-2 py-1 focus:border-emerald-500" 
                        type="text" />
                    </div>
                    <button type="submit"
                        class="btn-sm bg-emerald-500 hover:bg-emerald-600 text-white whitespace-nowrap">Tambah</button>
                </form>
            </div>
        </div>
    </ModalAction>
</template>