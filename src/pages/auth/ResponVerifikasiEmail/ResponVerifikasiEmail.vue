<script setup>
import { ref } from "vue"
import { useSigninStore } from "../store"
import { useRouter, useRoute } from "vue-router"
import { MSG_ACCOUNT_VERIFICATION_SUCCESS, MSG_ACCOUNT_VERIFICATION_FAILED } from "../constant"
import { isVariableEmpty } from "../../../utils/Helper"
import IconCheck from '../../../partials/icons/icon-circle-check.vue'
import IconCross from '../../../partials/icons/icon-cross.vue'

const router = useRouter()

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
                    <div class="max-w-sm mx-auto px-4 py-4" v-if="kjnfefce">
                        <IconCheck height="100px" class="fill-jobhunGreen py-3"/>
                        <h1 class="text-3xl text-black font-bold mb-6">{{ MSG_ACCOUNT_VERIFICATION_SUCCESS }}</h1>
                        <div class="space-y-4">
                            <div class="">
                                <div class="text-sm">
                                    Yey, kamu telah menjadi pengguna Jobhun! Saat ini emailmu sudah aktif dan bisa digunakan.
                                </div>
                            </div>
                            <div class="text-sm">
                                <router-link
                                    class="fonte:\Installan Aplikasi\Microsoft VS Code\resources\app\out\vs\code\electron-sandbox\workbench\workbench.html-medium text-jobhunGreen hover:text-emerald-600"
                                    to="/signin">
                                    Kembali ke halaman login
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="max-w-sm mx-auto px-4 py-4" v-else>
                        <IconCross height="100px" class="py-3" />
                        <h1 class="text-3xl text-black font-bold mb-6">{{ MSG_ACCOUNT_VERIFICATION_FAILED }}</h1>
                        <div class="space-y-4">
                            <div class="">
                                <div class="text-sm">
                                    Kode yang kamu masukkan salah, silakan masukkan kode yang telah dikirimkan.
                                </div>
                            </div>
                            <div class="text-sm">
                                <router-link
                                    class="fonte:\Installan Aplikasi\Microsoft VS Code\resources\app\out\vs\code\electron-sandbox\workbench\workbench.html-medium text-jobhunGreen hover:text-emerald-600"
                                    to="/signin">
                                    Kembali ke halaman Sign Up
                                </router-link>
                            </div>
                        </div>
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