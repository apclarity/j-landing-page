<script setup>
const props = defineProps({
    ratingValues: Number
})

const { ratingValues } = props
</script>
<template>
        <div class="flex flex-wrap justify-between items-center">
            <div class="flex items-center">
                <div class="flex space-x-1">
                    <div v-for="index in 5" :key="index">
                        <div v-if="index <= advanceSearchRating">
                            <span class="sr-only">1 star</span>
                            <svg class="w-4 h-4 fill-current text-jobhunYellow" viewBox="0 0 16 16">
                                <path
                                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                            </svg>
                        </div>
                        <div v-else>
                            <span class="sr-only">5 stars</span>
                            <svg class="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                                <path
                                    d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>