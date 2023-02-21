<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLayoutStore } from '../../../pages/layout/store'
import { isObjectEmpty, validatePicture, getBase64Image } from '../../../utils/Helper'

const editDataTambahan = ref({
    proffession: "",
    company: "",
    domicile: "",
    degree: "",
    capabilities: "",
    linkedin: ""
})

const validationEditDataTambahan = () => {
    if (editDataTambahan.value.proffession != "" && editDataTambahan.value.company != "" && editDataTambahan.value.domicile != "" && editDataTambahan.value.degree != "" && editDataTambahan.value.capabilities != "" && editDataTambahan.value.linkedin != "") {
        router.push({ path: '/profilpengguna' })
    }
}
</script>
<template>
    <form @submit.prevent="validationEditDataTambahan()">
        <div class="p-1 mb-3 shrink w-full space-y-10">
            <div class="max-w rounded-lg border border-gray-200 shadow-md p-5">
                <div class="flex justify-between items-center">
                    <div class="font-bold text-xl text-black">
                        Data Tambahan
                    </div>
                    <button type="submit"
                        class="h-9 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm flex justify-end items-center">
                        Simpan
                    </button>
                </div>
                <div class="flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-8">
                    <div class="">
                        <div class="">
                            <label class="block text-sm font-medium mb-1 text-black">Profesi</label>
                            <input
                                class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                required type="text" v-model="editDataTambahan.proffession" />
                        </div>
                        <div class="mt-4">
                            <label class="block text-sm font-medium mb-1 text-black">Perusahaan</label>
                            <input
                                class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                required type="text" v-model="editDataTambahan.company" />
                        </div>
                        <div class="mt-4">
                            <label class="block text-sm font-medium mb-1 text-black">Lokasi</label>
                            <input
                                class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                required type="text" v-model="editDataTambahan.domicile" />
                        </div>
                        <div class="mt-4">
                            <label class="block text-sm font-medium mb-1 text-black">Pendidikan</label>
                            <input
                                class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                required type="text" v-model="editDataTambahan.degree" />
                        </div>
                        <div class="mt-4">
                            <label class="block text-sm font-medium mb-1 text-black">Kemampuan yang dikuasai</label>
                            <input
                                class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                required type="text" v-model="editDataTambahan.capabilities" />
                        </div>
                        <div class="mt-4">
                            <label class="block text-sm font-medium mb-1 text-black">LinkedIn</label>
                            <input
                                class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                required type="text" v-model="editDataTambahan.linkedin" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>