<script setup>
import { ref } from "vue"
import { useSigninStore } from "../../store"
import { useRouter, useRoute } from "vue-router"
import { MSG_RESET_PASSWORD } from "../../constant"
import { isVariableEmpty } from "../../../../utils/Helper"
import ModalSetPassword from "./ModalSetNewPassword.vue"

const router = useRouter()

const auth = ref({
    password: "",
    confirm_password: ""
})

const setPassword = () => {
    if (auth.value.password != "" && auth.value.confirm_password != "") {
        if (auth.value.password != auth.value.confirm_password){
            alert("Password tidak sama!")
        } else {
            openModalSetNewPassword()
        }
    }
}

// ============= Modal Set New Password ===============
const setNewPassword = ref(false)

const openModalSetNewPassword = () => {
    setNewPassword.value = true
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
                                <img src="../../../../images/cropped-logo-jobhun-3.png" alt="Logo Jobhun"
                                    class="h-8 md:h-10" />
                            </router-link>
                        </div>
                    </div>
                    <div class="max-w-sm mx-auto px-4 py-8">
                        <h1 class="text-3xl text-black font-bold mb-6">{{ MSG_RESET_PASSWORD }} ✨</h1>
                        <form @submit.prevent="setPassword">
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-sm font-medium mb-1">Kata sandi baru</label>
                                    <input class="bg-gray-100 border-0 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                        required type="password" autoComplete="on" v-model="auth.password" />
                                    <div class="text-sm">
                                        Minimal 8 karakter kombinasi huruf besar, huruf kecil, dan angka.
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1">Ketik ulang kata sandi baru</label>
                                    <input class="bg-gray-100 border-0 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                        required type="password" autoComplete="on" v-model="auth.confirm_password" />
                                    <span class="text-xs text-thin text-red-700" v-if="auth.confirm_password != auth.password">Kata sandi tidak
                                        sesuai</span>
                                </div>
                            </div>
                            <div class="flex items-center justify-end mt-6">
                                <button class="btn bg-jobhunGreen hover:bg-emerald-600 text-white" type="submit">
                                    Perbarui kata sandi
                                </button>
                                <ModalSetPassword :setPassword="setNewPassword" @close-modal="setNewPassword = false"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
                <img class="object-cover object-center w-full h-full"
                    src="../../../../images/signin/banner-ilustrasi-04-min.png" width="760" height="1024"
                    alt="Authentication" />
                <img class="absolute top-1/4 left-0 -translate-x-1/2 hidden lg:block"
                    src="../../../../images/signin/roket-02.png" width="218" height="224"
                    alt="Authentication decoration" />
            </div>
        </div>
    </main>
</template>