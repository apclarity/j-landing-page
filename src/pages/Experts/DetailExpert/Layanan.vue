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
    itemLayanan: String,
    session: Object,
    expertID: Number
})

const { itemLayanan, expertID } = props

const layoutStore = useLayoutStore()
const session = computed(() => layoutStore.session)

const isSessionEmpty = computed(() => isObjectEmpty(layoutStore.sessionFirstName))

const isUserLogin = ref(false)

const tempNextRoute = ref('')

const openModalLogin = (nextRoute) => {
    tempNextRoute.value = nextRoute
    isUserLogin.value = true
}

const closeLoginModal = ()=> {
    isUserLogin.value = false
    tempNextRoute.value = ''
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
    <hr class="my-16 border-gray-300 sm:mx-auto lg:my-16" v-if="itemLayanan != 'consultation'">
    <div class="flex">
        <div class="flex-none w-1/4 flex justify-center items-center mx-5 lg:mx-0 md:mx-0">
            <IconKonsultasi height="100px" v-if="itemLayanan == 'consultation'" />
            <IconPelatihan height="100px" v-if="itemLayanan == 'training'" />
            <IconUndangExpert height="100px" v-if="itemLayanan == 'invite-expert'" />
            <IconRekrutExpert height="100px" v-if="itemLayanan == 'recruit-expert'" />
        </div>
        <div class="shrink w-full" v-if="itemLayanan == 'consultation'">
            <div class="font-bold text-xl text-black">
                Konsultasi
            </div>
            <div class="text-sm mt-5">
                <p>
                    Fitur ini akan membantumu terhubung dengan expert melalui konsultasi privat/grup untuk persiapan karier. Kamu bisa
                    memilih topik pembahasan dan waktu pelaksanaan untuk konsultasi secara fleksibel.
                </p>
            </div>
            <div>
                <button v-if="isSessionEmpty" @click="openModalLogin('/experts/formkonsultasi/' + expertID)"
                class="h-9 mt-5 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                    <span >Daftar</span>
                </button>
                <router-link v-else :to="'/experts/formkonsultasi/' + expertID">
                    <button class="h-9 mt-5 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                        <span>Daftar</span>
                    </button>
                </router-link>
                <ModalLogin :isUserLogin="isUserLogin" @close-modal="closeLoginModal" :nextRoute="tempNextRoute" />
            </div>
        </div>
        <div class="shrink w-full" v-if="itemLayanan == 'training'">
            <div class="font-bold text-xl text-black">
                Pelatihan
            </div>
            <div class="text-sm mt-5">
                <p>
                    Lengkapi keterampilan dan kemampuanmu melalui pelatihan secara intensif bersama dengan expert, baik secara privat/grup.
                    Kamu bisa menentukan topik pembahasan dan waktu pelaksanaan untuk pelatihan secara fleksibel.
                </p>
            </div>
            <div>
                <button v-if="isSessionEmpty" @click="openModalLogin('/experts/formpelatihan/' + expertID)"
                    class="h-9 mt-5 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                    <span>Daftar</span>
                </button>
                <router-link v-else :to="'/experts/formpelatihan/' + expertID">
                    <button class="h-9 mt-5 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                        <span>Daftar</span>
                    </button>
                </router-link>
                <ModalLogin :isUserLogin="isUserLogin" @close-modal="closeLoginModal" :nextRoute="tempNextRoute" />
            </div>
        </div>
        <div class="shrink w-full" v-if="itemLayanan == 'invite-expert'">
            <div class="font-bold text-xl text-black">
                Undang Expert
            </div>
            <div class="text-sm mt-5">
                <p>
                    Temukan expert yang tepat untuk berbagai acara, seperti seminar, workshop, talkshow, hingga training. Fitur ini akan
                    membantumu menemukan expert terbaik untuk kebutuhan pembicara atau narasumber sesuai dengan kualifikasi yang dibutuhkan.
                </p>
            </div>
            <div>
                <button v-if="isSessionEmpty" @click="openModalLogin('/experts/formundangexpert/' + expertID)"
                    class="h-9 mt-5 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                    <span>Daftar</span>
                </button>
                <router-link v-else :to="'/experts/formundangexpert/' + expertID">
                    <button class="h-9 mt-5 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                        <span>Daftar</span>
                    </button>
                </router-link>
                <ModalLogin :isUserLogin="isUserLogin" @close-modal="closeLoginModal" :nextRoute="tempNextRoute" />
            </div>
        </div>
        <div class="shrink w-full" v-if="itemLayanan == 'recruit-expert'">
            <div class="font-bold text-xl text-black">
                Rekrut Expert
            </div>
            <div class="text-sm mt-5">
                <p>
                    Membutuhkan keahlian dari expert untuk proyek? Dapatkan talenta terbaik untuk pengerjaan proyek sesuai dengan
                    kualifikasi, jangka waktu, dan budget dari perusahaan. Melalui fitur ini, perusahaan bisa mendapatkan talenta tanpa
                    perlu repot dalam proses rekrutmen hingga penggajian.
                </p>
            </div>
            <div>
                <button v-if="isSessionEmpty" @click="openModalLogin('/experts/formrekrutexpert/' + expertID)"
                    class="h-9 mt-5 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                    <span>Daftar</span>
                </button>
                <router-link v-else :to="'/experts/formrekrutexpert/'+ expertID">
                    <button class="h-9 mt-5 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm">
                        <span>Daftar</span>
                    </button>
                </router-link>
                <ModalLogin :isUserLogin="isUserLogin" @close-modal="closeLoginModal" :nextRoute="tempNextRoute" />
            </div>
        </div>
    </div>
</template>