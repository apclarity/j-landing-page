<script setup>
import IconLinkedin from '../../partials/icons/icon-linkedin.vue'
import IconYoutube from '../../partials/icons/icon-youtube.vue'
import IconInstagram from '../../partials/icons/icon-instagram.vue'
</script>
<template>
    <footer class="p-4 md:px-12 md:py-6">
        <div class="sm:flex sm:items-center justify-end">
            <div class="flex mt-4 space-x-4 justify-end sm:mt-0 mr-4 md:mr-6">
                <a href="http://instagram.com/jobhun" class="text-jobhunGreen hover:text-gray-900 duration-300">
                    <IconInstagram class="w-6 h-6"/>
                    <span class="sr-only">Instagram page</span>
                </a>
                <a href="https://www.linkedin.com/company/13406000/" class="text-jobhunGreen hover:text-gray-900 duration-300">
                    <IconLinkedin class="w-6 h-6"/>
                </a>
                <span class="sr-only">LinkedIn page</span>
                <a href="https://www.youtube.com/channel/UCCzKrMp711xzX8nI8zempKw?view_as=subscriber" class="text-jobhunGreen hover:text-gray-900 duration-300">
                    <IconYoutube class="w-6 h-6"/>
                    <span class="sr-only">Youtube channel</span>
                </a>
            </div>
        </div>
        <hr class="my-6 border-gray-300 sm:mx-auto lg:my-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <ul class="items-center text-sm text-gray-500 sm:mb-0 flex flex-wrap">
                <li>
                    <a href="#" class="mr-4 ml-4 hover:underline md:ml-6 md:mr-6 ">Tentang Jobhun</a>
                </li>
                <li>
                    <a href="#" class="mr-4 ml-4 hover:underline md:ml-6 md:mr-6">Program</a>
                </li>
                <li>
                    <a href="#" class="mr-4 ml-4 hover:underline md:ml-6 md:mr-6">Blog</a>
                </li>
                <li>
                    <a href="#" class="mr-4 ml-4 hover:underline md:ml-6 md:mr-6">Karier</a>
                </li>
                <li>
                    <a href="#" class="mr-4 ml-4 hover:underline md:ml-6 md:mr-6">Kerja Sama</a>
                </li>
                <li>
                    <a href="#" class="mr-4 ml-4 hover:underline md:ml-6 md:mr-6">Liputan Media</a>
                </li>
                <li>
                    <a href="#" class="mr-4 ml-4 hover:underline md:ml-6 md:mr-6">Syarat & Ketentuan</a>
                </li>
                <li>
                    <a href="#" class="mr-4 ml-4 hover:underline md:ml-6 md:mr-6">Kebijakan Privasi</a>
                </li>
                <!-- <br><br>
                <li>
                    
                </li> -->
            </ul>

            <ul class="flex flex-wrap items-center text-sm mb-6 text-gray-500 sm:mb-0 md:text-right text-left md:justify-end justify-start py-3 ml-4 md:ml-0 mt-5 md:mt-0">
                <li>
                    <p class="mr-4 md:mr-6 font-bold text-gray-600">
                        Jobhun - PT Jobhun Membangun Indonesia
                    </p>
                </li>
                <li>
                    <p class="mr-4 md:mr-6">
                        Gedung Inkubator Bisnis Universitas Airlangga, Jl. Dharmawangsa No. 33B, Airlangga, Gubeng, Surabaya, Jawa Timur,
                        Indonesia 60286
                    </p>
                </li>
                <br>
                <li>
                    <p class="mr-4 md:mr-6">
                        HQ: IndigoSpace Surabaya, Jl. Bendul Merisi Selatan Airdas 55, Bendul Merisi, Wonocolo, Surabaya 60238
                    </p>
                    <p class="mr-4 md:mr-6">
                        E-mail: info@jobhun.id; partnership@jobhun.id | Phone: 081332905635
                    </p>
                </li>
            </ul>
        </div>
        <hr class="border-gray-300 mt-6 mb-3">
        <p class="block text-sm mt-5 text-gray-500 md:text-center text-center mr-4 md:mr-6 ml-4 md:ml-0">
            © Copyright 2022 <b class="text-sm">PT Jobhun Membangun Indonesia. All Right Reserved.</b>
        </p>
    </footer>

</template>