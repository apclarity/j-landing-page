<script setup>
import { ref } from "vue"
import { useSigninStore } from "../store"
import { useRouter, useRoute } from "vue-router"
import { MSG_ACCOUNT_VERIFICATION } from "../constant"
import { isVariableEmpty } from "../../../utils/Helper"
import ModalVerifikasiAkun from "./ModalResponVerifikasiAkun.vue"

const router = useRouter()

const verif = ref({
    code: ""
})

const props = defineProps({
    email: String
})

console.log(props.email)

const resetPassword = () => {
    if (verif.value.code != "") {
        openModalresponVerifikasiAkun()
    }
}

// ============= Modal Reset Password ===============
const responVerifikasiAkun = ref(false)

const openModalresponVerifikasiAkun = () => {
    responVerifikasiAkun.value = true
}
</script>
<template>
    <main class="bg-white">
        <div class="relative flex">
            <div class="w-full md:w-1/2">
                <div class="min-h-screen h-full flex flex-col after:flex-1">
                    <div class="flex-1">
                        <div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                            <router-link class="block" to="/">
                                <img src="/src/images/cropped-logo-jobhun-3.png" alt="Logo Jobhun"
                                    class="h-8 md:h-10" />
                            </router-link>
                        </div>
                    </div>
                    <div class="max-w-sm mx-auto px-4 py-8">
                        <h1 class="text-3xl text-black font-bold mb-6">{{ MSG_ACCOUNT_VERIFICATION }} ✨</h1>
                        <form @submit.prevent="resetPassword()">
                            <div class="space-y-4">
                                <div class="">
                                    <div class="text-sm">
                                        Silakan verifikasi akunmu terlebih dahulu untuk bisa mengakses fitur Jobhun secara lengkap. Kode verifikasi telah
                                        dikirimkan ke <span class="font-bold">{{ props.email }}</span>. Silakan gunakan kode tersebut untuk verifikasi akun.
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1" for="email">Kode Verifikasi</label>
                                    <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                        type="text" v-model="verif.code" required />
                                </div>
                                <div class="flex items-center justify-start mt-6">
                                    <button class="btn bg-jobhunGreen hover:bg-emerald-600 text-white" type="submit">
                                        Verifikasi akun
                                    </button>
                                    <ModalVerifikasiAkun :responVerifikasiAkun="responVerifikasiAkun" @close-modal="responVerifikasiAkun = false" />
                                </div>
                                <div class="text-sm">
                                    Belum menerima kode verifikasi melalui email? 
                                    <router-link class="fonte:\Installan Aplikasi\Microsoft VS Code\resources\app\out\vs\code\electron-sandbox\workbench\workbench.html-medium text-jobhunGreen hover:text-emerald-600" to="/signin">
                                        Kirim ulang kode verifikasi
                                    </router-link>
                                    atau <router-link class="font-medium text-jobhunGreen hover:text-emerald-600" to="/signup">
                                        ubah email
                                    </router-link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
                <img class="object-cover object-center w-full h-full"
                    src="../../../images/signin/banner-ilustrasi-04-min.png" width="760" height="1024"
                    alt="Authentication" />
                <img class="absolute top-1/4 left-0 -translate-x-1/2 hidden lg:block"
                    src="../../../images/signin/roket-02.png" width="218" height="224"
                    alt="Authentication decoration" />
            </div>
        </div>
    </main>
</template>