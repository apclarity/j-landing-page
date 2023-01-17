<script setup>
import { computed, ref } from "vue"
import { useSigninStore } from "../store"
import { useRouter } from "vue-router"
import { MSG_SIGNUP } from "../constant"

const router = useRouter()
const signinStore = useSigninStore()

const auth = ref({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: ""
})

const signUp = async () => {
    if (auth.value.email != "" && auth.value.password != "" && auth.value.first_name != "" && auth.value.last_name != "" && auth.value.phone != "" && auth.value.confirm_password != "" ) {
        if(auth.value.confirm_password != auth.value.password){
            alert('Kata sandi tidak sesuai')
        }else {
            await signinStore.signup(auth.value)
        }
    }
}

const onlyNumber = (evt)=> {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
    } else {
        return true;
    }
}
</script>
<template>
    <main class="bg-white">
        <div class="relative flex">
            <div class="w-full md:w-1/2">
                <div class="min-h-screen h-full flex flex-col after:flex-1">
                    <div class="flex-1">
                        <div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                            <!-- Logo -->
                            <router-link class="block" to="/">
                                <img src="/src/images/cropped-logo-jobhun-3.png" alt="Logo Jobhun"
                                    class="h-8 md:h-10" />
                            </router-link>
                        </div>
                    </div>

                    <div class="max-w-sm mx-auto px-4 py-8">
                        <form @submit.prevent="">
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-sm font-medium mb-1">Nama depan</label>
                                    <input
                                        class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                        type="text" v-model="auth.first_name" required />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1">Nama belakang</label>
                                    <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                        type="text" v-model="auth.last_name" required />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1">Nomor WhatsApp</label>
                                    <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                        type="text" v-model="auth.phone" required @keypress="onlyNumber($event)" />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1" for="email">Email</label>
                                    <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                        type="email" v-model="auth.email" required />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1" for="password">Kata sandi</label>
                                    <input
                                        class="bg-gray-100 border-0 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                        required type="password" autoComplete="on" v-model="auth.password" />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1" for="password">Konfirmasi kata sandi</label>
                                    <input class="bg-gray-100 border-0 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                        required type="password" autoComplete="on" v-model="auth.confirm_password" />
                                    <span class="text-xs text-thin text-red-700" v-if="auth.confirm_password != auth.password">Kata sandi tidak sesuai</span>                                </div>
                            </div>
                            <div class="flex items-center justify-between mt-6">
                                <div class="mr-1">
                                    <label class="flex items-center">
                                        <input type="checkbox" class="form-checkbox text-jobhunGreen" required/>
                                        <span class="text-sm ml-2">Dengan mendaftar, kamu telah menyetujui <a href="#" class="text-jobhunGreen hover:text-emerald-600"><b>Ketentuan Pengguna</b></a> dan <a href="#" class="text-jobhunGreen hover:text-emerald-600"><b>Kebijakan Privasi</b></a>.</span>
                                    </label>
                                </div>
                            </div>
                            <div  class="justify-end flex mt-6">
                                <button @click="signUp" class="btn bg-jobhunGreen hover:bg-emerald-600 text-white ml-3">Sign Up
                                </button>
                            </div>
                        </form>
                        <!-- Footer -->
                        <div class="pt-5 mt-6 border-t border-slate-200">
                            <div class="text-sm">
                                Sudah memiliki akun? <router-link
                                    class="font-medium text-jobhunGreen hover:text-emerald-600" to="/signin">
                                    Masuk 
                                </router-link>
                                di sini!
                            </div>
                            <!-- Warning
              <div class="mt-5">
                <div class="bg-amber-100 text-amber-600 px-3 py-2 rounded">
                  <svg class="inline w-3 h-3 shrink-0 fill-current mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <span class="text-sm">
                    To support you during the pandemic super pro features are free until March 31st.
                  </span>
                </div>
              </div> -->
                        </div>
                    </div>

                </div>
            </div>

            <!-- Image -->
            <div class="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
                <img class="object-cover object-center w-full h-full" src="../../../images/signin/banner ilustrasi-04-min.png"
                    width="760" height="1024" alt="Authentication" />
                <img class="absolute top-1/4 left-0 -translate-x-1/2 hidden lg:block"
                    src="../../../images/signin/roket-02.png" width="218" height="224" alt="Authentication decoration" />
            </div>
        </div>
    </main>
</template>