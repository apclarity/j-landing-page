<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
    topics: {
        type: Object,
        required: true
    },
    selected: {
        type: Array,
        default: () => []
    }
})

const { topics } = props
const selected = ref([])

const dropdownOpen = ref(false)
const trigger = ref(null)
const dropdown = ref(null)

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
</script>
<template>
    <div class="relative inline-flex mt-1">
        <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none w-6 fill-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
            </div>
            <input id="action-search" v-model="selected"
                class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 pl-9 text-sm w-full"
                type="search" @click.prevent="dropdownOpen = !dropdownOpen" />
        </div>
        
        <transition enter-active-class="transition ease-out duration-200 transform"
            enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-out duration-200" leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <div v-show="dropdownOpen"
                class="origin-top-right z-10 absolute top-full w-full max-h-60 bg-white border border-slate-200 pt-1.5 rounded shadow-lg mt-1">
                <div ref="dropdown" class="">
                    <ul class="overflow-y-auto pb-3 h-48 text-sm text-white">
                        <li v-for="bidang in topics" :key="bidang.id" :value="bidang"
                            class="relative cursor-default select-none">
                            <div class="flex items-center p-2">
                                <input type="checkbox" v-model="value"
                                    class="w-4 h-4 text-jobhunGreen ring-0 focus:ring-jobhunGreen bg-gray-100 rounded border-gray-300 ">
                                <label :class="{ 'font-medium': selected, 'font-normal': !selected }"
                                    class="ml-2 w-full text-sm font-medium text-black rounded">
                                    {{ bidang.title }}
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>
<style>

</style>