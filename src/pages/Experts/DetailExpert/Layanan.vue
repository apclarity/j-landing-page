<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLayoutStore } from '../../../pages/layout/store'
import { isObjectEmpty } from '../../../utils/Helper'

import ModalLogin from './ModalIsUserLogin.vue'
import IconKonsultasi from '../../../partials/icons/icon-konsultasi.vue'
import IconPelatihan from '../../../partials/icons/icon-pelatihan.vue'
import IconUndangExpert from '../../../partials/icons/icon-undang-expert.vue'
import IconRekrutExpert from '../../../partials/icons/icon-rekrut-expert.vue'
import IconLinkedin from '../../../partials/icons/icon-linkedin.vue'

const props = defineProps({
    itemLayanan: Object,
    session: Object,
})

const { itemLayanan } = props

const layoutStore = useLayoutStore()
const session = computed(() => layoutStore.session)

const isSessionEmpty = computed(() => isObjectEmpty(layoutStore.sessionFirstName))

const isUserLogin = ref(false)

const openModalLogin = () => {
    isUserLogin.value = true
}

const route = useRoute()

onMounted(() => {
    let querySection = route.query.section
    if (querySection == null) {
        return
    }
    let sectionID = document.getElementById(querySection)
    if (sectionID == null) {
        return
    }
    document.getElementById(querySection).scrollIntoView()
})
</script>
<template>
    <hr class="my-16 border-gray-300 sm:mx-auto lg:my-16" v-if="itemLayanan.title != 'Konsultasi'">
    <div class="flex">
        <div class="flex-none w-1/4 flex justify-center items-center mx-5 lg:mx-0 md:mx-0">
            <IconKonsultasi height="100px" v-if="itemLayanan.title == 'Konsultasi'" />
            <IconPelatihan height="100px" v-if="itemLayanan.title == 'Pelatihan'" />
            <IconUndangExpert height="100px" v-if="itemLayanan.title == 'Undang Expert'" />
            <IconRekrutExpert height="100px" v-if="itemLayanan.title == 'Rekrut Expert'" />
        </div>
        <div class="shrink w-full">
            <div class="font-bold text-xl text-black">
                {{ itemLayanan.title }}
            </div>
            <div class="text-sm mt-5">
                <p>
                    {{ itemLayanan.desc }}
                </p>
            </div>
            <div>
                <button v-if="isSessionEmpty" @click="openModalLogin"
                class="h-9 mt-5 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                    <span >Daftar</span>
                </button>
                <router-link v-else :to="itemLayanan.to">
                    <button class="h-9 mt-5 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                        <span>Daftar</span>
                    </button>
                </router-link>
                <ModalLogin :isUserLogin="isUserLogin" @close-modal="isUserLogin = false" />
            </div>
        </div>
    </div>
</template>