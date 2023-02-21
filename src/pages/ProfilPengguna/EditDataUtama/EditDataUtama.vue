<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLayoutStore } from '../../../pages/layout/store'
import { isObjectEmpty, validatePicture, getBase64Image } from '../../../utils/Helper'

const props = defineProps({
    dataProfile: Object,
    session: Object,
    expertID: Number
})

const { itemLayanan, expertID } = props

const editDataUtama = ref({
    image: null,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    old_password: "",
    new_password: "",
    confirm_new_password:""
})

const isImageChanged = ref(false)

const choosePhoto = () => {
    document.getElementById("fileUpload").click()
}

const validateImageRatio = async (e) => {
    var ratio = "1:1";
    var maxSize = 1 * 1024 * 1024;
    var validationRes = await validatePicture(e, ratio, maxSize);
    if (!validationRes.isOk) {
        alert(validationRes.message);
        return;
    }
    isImageChanged.value = true;
    let base64img = await getBase64Image(validationRes.theImage);
    editDataUtama.value.image = base64img;
}

const isInputNumber = (evt) => {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
    } else {
        return true;
    }
}

const validationEditDataUtama = ()=>{
    console.log(editDataUtama.value)
    if (editDataUtama.value.first_name != "" && editDataUtama.value.last_name != "" && editDataUtama.value.email != "" && editDataUtama.value.phone != "" && editDataUtama.value.old_password != "" && editDataUtama.value.new_password != "" && editDataUtama.value.confirm_new_password != ""){
        if(editDataUtama.value.new_password != editDataUtama.value.confirm_new_password){
            alert('Kata sandi tidak sesuai')
        } else {
            router.push({ path: '/profilpengguna' })
        }
    }
}
</script>
<template>
    <form @submit.prevent="validationEditDataUtama()">
        <div class="p-1 mb-3 shrink w-full space-y-10">
            <div class="max-w rounded-lg border border-gray-200 shadow-md p-5">
                <div class="flex justify-between items-center">
                    <div class="font-bold text-xl text-black">
                        Data Utama
                    </div>
                    <button type="submit" class="h-9 bg-jobhunGreen hover:bg-emerald-600 text-white px-7 rounded text-sm flex justify-end items-center">
                        Simpan
                    </button>
                </div>
                <div class="grid grid-flow-row md:flex flex-auto max-w-4xl min-w-0 mx-auto pt-6 lg:px-8 px-6 lg:pt-8">
                    <div class="flex-none md:w-1/1">
                        <div class="mb-4 sm:mb-0">
                            <img class="border-2 w-32 h-32 rounded-full" src="../../../images/dummy/dummy-profile.png" />
                            <p class="mt-1 text-xs text-gray-500">*ukuran maksimal 1MB</p>
                            <p class="mt-1 text-xs text-gray-500">*foto 1:1</p>
                        </div>
                        <div class="md:flex md:flex-col overflow-hidden">
                            <input type="file" @change="validateImageRatio" ref="file" style="display: none" id="fileUpload">
                            <button @click.prevent="choosePhoto"
                                class="h-7 w-full md:mt-5 sm:mt-4 mt-0 md:mb-0 sm:mb-0 mb-4 bg-gray-500 hover:bg-emerald-600 text-white px-5 rounded text-sm mx-auto">
                                Unggah foto
                            </button>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-1 md:flex-auto md:max-w-4xl md:min-w-0 md:mx-auto md:px-8 px-0 md:mt-0 mt-4">
                        <div class="">
                            <label class="block text-sm font-medium mb-1 text-black">Nama depan</label>
                            <input 
                                class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                required type="text" v-model="editDataUtama.first_name" />
                        </div>
                        <div class="mt-4">
                            <label class="block text-sm font-medium mb-1 text-black">Nama belakang</label>
                            <input
                                class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                required type="text" v-model="editDataUtama.last_name" />
                        </div>
                        <div class="mt-4">
                            <label class="block text-sm font-medium mb-1 text-black">Email</label>
                            <input
                                class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                required type="email" v-model="editDataUtama.email" />
                        </div>
                        <div class="mt-4">
                            <label class="block text-sm font-medium mb-1 text-black">Nomor Whatsapp</label>
                            <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                required  @keypress="isInputNumber($event)" type="text" v-model="editDataUtama.phone" />
                        </div>
                        <div class="mt-4">
                                <label class="block text-sm font-medium mb-1 text-black">Kata sandi lama</label>
                                <input class="bg-gray-100 border-0 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                    required type="password" v-model="editDataUtama.old_password"  />
                            </div>
                        <div class="mt-4">
                            <label class="block text-sm font-medium mb-1 text-black">Kata sandi baru</label>
                            <input class="bg-gray-100 border-0 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                required type="password" v-model="editDataUtama.new_password"  />
                        </div>
                        <div class="mt-4">
                            <label class="block text-sm font-medium mb-1 text-black">Ketik ulang kata sandi</label>
                            <input class="bg-gray-100 border-0 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
                                required type="password" v-model="editDataUtama.confirm_new_password"  />
                            <!-- <span class="text-xs text-thin text-red-700" v-if="editDataUtama.new_password != editDataUtama.confirm_new_password">Kata sandi tidak sesuai</span>    -->
                        </div>
                        </div>
                </div>
            </div>
        </div>
    </form>
</template>