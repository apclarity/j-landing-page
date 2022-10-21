<script setup>
    import { ref, onMounted, onUnmounted, computed } from 'vue'
    
    const dropdownOpen = ref(false)
    const trigger = ref(null)
    const dropdown = ref(null)
    const sidebarOpen = ref(false)

    // close on click outside
    const clickHandler = ({ target }) => {
        if (!dropdownOpen.value || dropdown.value.contains(target) || trigger.value.contains(target)) return
        dropdownOpen.value = false
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
        if (!dropdownOpen.value || keyCode !== 27) return
        dropdownOpen.value = false
    }

    onMounted(() => {
        document.addEventListener('click', clickHandler)
        document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
        document.removeEventListener('click', clickHandler)
        document.removeEventListener('keydown', keyHandler)
    })

    const menuLayanans = [
        {
            title: 'Konsultasi',
            to: '#'
        },
        {
            title: 'Pelatihan',
            to: '/dashboard/main'
        },
        {
            title: 'Undang Expert',
            to: '#'
        },
        {
            title: 'Rekrut Expert',
            to: '#'
        },
    ]
</script>
<template>
    <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul
            class="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
                <a href="#"
                    class="block py-2 pr-4 pl-3 text-black rounded hover:text-jobhunGreen md:p-0 duration-300">
                    Cari Expert</a>
            </li>
            <li>
                <a href="#"
                    class="block py-2 pr-4 pl-3 text-black rounded hover:text-jobhunGreen md:p-0 duration-300">
                    Jadi Expert</a>
            </li>
            <div class="relative inline-flex">
                <button ref="trigger" class="inline-flex justify-center items-center group" aria-haspopup="true"
                    @click.prevent="dropdownOpen = !dropdownOpen" :aria-expanded="dropdownOpen">
                    <div class="flex items-center truncate">
                        <span class="truncate ml-2 text-sm font-medium text-black group-hover:text-jobhunGreen duration-300">Layanan</span>
                        <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                        </svg>
                    </div>
                </button>
                <transition enter-active-class="transition ease-out duration-200 transform"
                    enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition ease-out duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <div v-show="dropdownOpen"
                        class="origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 duration-300"
                        :class="align === 'right' ? 'right-0' : 'left-0'">
                        <ul ref="dropdown" @focusin="dropdownOpen = true" @focusout="dropdownOpen = false" v-for="(menuLayanan, i) in menuLayanans" :key="i">
                            <li>
                                <router-link
                                    class="font-medium text-sm text-black hover:text-jobhunGreen flex items-center duration-300 py-1 px-3"
                                    :to="menuLayanan.to" @click="dropdownOpen = false">{{menuLayanan.title}}</router-link>
                            </li>
                        </ul>
                    </div>
                </transition>
            </div>
        </ul>
    </div>
</template>