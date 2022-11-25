<script setup>
  import {ref} from "vue"
  import {useSigninStore} from "./store"
  import {useRouter} from "vue-router"
  import { MSG_WELCOME } from "./constant"

  const router = useRouter()
  const signinStore = useSigninStore()

  const auth = ref({
    email: "",
    password: ""
  })

  const login = async () => {
    if(auth.value.email != "" && auth.value.password != ""){
      if(await signinStore.login(auth.value)){
        router.push('/')
      }
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
                  <img src="/src/images/cropped-logo-jobhun-3.png" alt="Logo Jobhun" class="h-8 md:h-10" />
              </router-link>
            </div>
          </div>          

          <div class="max-w-sm mx-auto px-4 py-8">
            <h1 class="text-3xl text-black font-bold mb-6">{{MSG_WELCOME}} ✨</h1>
            <!-- Form -->
            <form @submit.prevent="">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-1" for="email">Email</label>
                  <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-md"
                    type="email" required placeholder="Input angka" v-model="formExpertPelatihan.totalPerson" />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="password">Kata sandi</label>
                  <input class="bg-gray-100 border-0 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full" 
                  required type="password" autoComplete="on" v-model="auth.password"/>
                </div>
              </div>
              <div class="flex items-center justify-between mt-6">
                <div class="mr-1">
                  <router-link class="text-sm underline hover:no-underline" to="/reset-password">Lupa kata sandi?</router-link>
                </div>
                <button class="btn bg-jobhunGreen hover:bg-emerald-600 text-white ml-3" @click="login">Masuk</button>
              </div>
            </form>
            <!-- Footer -->
            <div class="pt-5 mt-6 border-t border-slate-200">
              <div class="text-sm">
                Belum memiliki akun? <router-link class="font-medium text-jobhunGreen hover:text-emerald-600" to="/signup">Daftar</router-link> di sini!
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
        <img class="object-cover object-center w-full h-full" src="../../images/signin/banner-ilustrasi-04.png" width="760" height="1024" alt="Authentication" />
        <img class="absolute top-1/4 left-0 -translate-x-1/2 hidden lg:block" src="../../images/signin/roket-02.png" width="218" height="224" alt="Authentication decoration" />
      </div>
    </div>
  </main>
</template>