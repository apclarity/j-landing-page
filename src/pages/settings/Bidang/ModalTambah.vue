<script setup>
import { toRefs } from 'vue'
import ModalAction from '../../../components/ModalAction.vue'

const props = defineProps({
    formOpenStatus: {
        default: false
    },
    item: {
        type: Object,
        default: {}
    }
})

const { formOpenStatus, item } = toRefs(props)

const emits = defineEmits(["closeForm", "saveButton"])

const closeForm = ()=> {
    emits('closeForm')
}

const createBidang = () => {
    emits('saveButton', item.value)
}
</script>
<template>
    <ModalAction id="newsletter-modal" :modalOpen="formOpenStatus" @close-modal="closeForm">
        <!-- Modal header -->
        <div class="mb-2 text-center">
            <div class="text-lg font-semibold text-slate-800">Tambah bidang</div>
        </div>
        <!-- Modal content -->
        <div class="px-5 py-4">
            <div class="space-y-3">
                <form class="flex max-w-sm m-auto" @submit.prevent="createBidang">
                    <div class="grow mr-2">
                        <input 
                            placeholder="Nama bidang" 
                            class="form-input w-full px-2 py-1 focus:border-emerald-500"
                            required
                            type="text"  
                            v-model="item.name" />
                    </div>
                    <button type="submit"
                        class="btn-sm bg-emerald-500 hover:bg-emerald-600 text-white whitespace-nowrap">Tambah</button>
                </form>
            </div>
        </div>
    </ModalAction>
</template>