<script setup>
import { ref } from "vue"
import { useSigninStore } from "../store"
import { useRouter, useRoute } from "vue-router"
import { MSG_RESET_PASSWORD } from "../constant"
import { isVariableEmpty } from "../../../utils/Helper"
import ResetPassword from './ModalResetPassword.vue'

const router = useRouter()

const auth = ref({
    email: ""
})

const resetPassword = () => {
    if (auth.value.email != "") {
        openModalEmailResetPassword()
    }
}

// ============= Modal Reset Password ===============
const emailResetPassword = ref(false)

const openModalEmailResetPassword = () => {
    emailResetPassword.value = true
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
                        <h1 class="text-3xl text-black font-bold mb-6">{{ MSG_RESET_PASSWORD }} ✨</h1>
                        <form @submit.prevent="resetPassword()">
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-sm font-medium mb-1" for="email">Email</label>
                                    <input
                                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                        type="email" v-model="auth.email" required />
                                </div>
                                <div class="">
                                    <div class="text-sm">
                                        Masukkan alamat email yang sudah terdaftar. Instruksi pembaruan kata sandi akan dikirim ke email tersebut.
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center justify-end mt-6">
                                <button class="btn bg-jobhunGreen hover:bg-emerald-600 text-white w-20" type="submit">
                                    Kirim
                                </button>
                                <ResetPassword :resetPassword="emailResetPassword" @close-modal="emailResetPassword = false" :email="auth.email"/>
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