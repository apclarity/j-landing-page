<script setup>
import { ref } from 'vue'
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
} from '@headlessui/vue'

const props = defineProps({
    items: {
        type: Object,
        required: true
    },
    selected: {
        type: Array,
        default: () => []
    }
})

const { topics } = props

const isOptionExpanded = ref(false)
const selectedOption = ref("Pilih")
const options = [
    {
        id: 1,
        text: 'Senin'
    },
    {
        id: 2,
        text: 'Selasa'
    },
    {
        id: 3,
        text: 'Rabu'
    },
    {
        id: 4,
        text: 'Kamis'
    },
    {
        id: 5,
        text: 'Jumat'
    },
    {
        id: 6,
        text: 'Sabtu'
    },
    {
        id: 7,
        text: 'Minggu'
    },

]

const selectedDays = ref([])
</script>
<template>
    <!-- <input class="border-0 bg-gray-100 hover:ring-emerald-500 rounded-lg focus:ring-jobhunGreen p-1.5 text-sm w-full"
        required v-model="session" 
        @click.prevent="isOptionExpanded = !isOptionExpanded"/>
    <div v-show="isOptionExpanded"
        class="z-10 absolute top-full min-w-56 max-h-60 bg-white border border-slate-200 pt-1.5 rounded shadow-lg mt-1">
        <ul class="overflow-y-auto pb-3 h-48 text-sm text-white">
            <li class="relative cursor-default select-none" 
            v-for="item in items" :key="item"
            @mousedown.prevent="setOption(option)">
                <div class="flex items-center p-2">
                    <input class="w-4 h-4 text-jobhunGreen ring-0 bg-gray-100 rounded border-gray-300 ">
                    <label class="ml-2 w-full text-sm font-medium text-black rounded">
                        {{ option }}
                    </label>
                </div>
            </li>
        </ul>
    </div> -->
    <Combobox v-model="selectedDays" multiple>
        <ul v-if="selectedDays.length > 0">
            <li v-for="day in options" :key="day.id">
                {{ day.text }}
            </li>
        </ul>
        <ComboboxInput :displayValue="(day) => day.text" />
        <ComboboxOptions>
            <ComboboxOption v-for="day in options" :key="day.id" :value="day">
                {{ day.text }}
            </ComboboxOption>
        </ComboboxOptions>
    </Combobox>
</template>