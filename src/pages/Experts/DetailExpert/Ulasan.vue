<script setup>
const props = defineProps({
    testimonies: Object
})

const { testimonies } = props
</script>
<template>
    <div class="p-1 mb-3">
        <div class="max-w-md rounded-lg border border-gray-200 shadow-md p-5">
            <div class="flex items-center space-x-3">
                <div class="">
                    <img class="w-10 rounded-full" :src="testimonies.img" alt="Photo profile">
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-black truncate">
                        {{ testimonies.name }}
                    </p>
                </div>
            </div>
            <div>
                <p class="text-sm mt-3 text-black">
                    {{ testimonies.desc }}
                </p>
            </div>
        </div>
    </div>
</template>