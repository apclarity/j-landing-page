<script setup>
import { computed } from 'vue'
const props = defineProps({
  total: Number,
  perPage: Number,
  page: Number,
})

const from = computed(() => {
  if (props.total == 0)
    return 0
  if (props.total > 0) {
    return ((props.page - 1) * props.perPage) + 1
  }
})

const to = computed(() => {
  let end = props.perPage * props.page
  if (end > props.total)
    return props.total
  return end
})

const emit = defineEmits(['clickNav'])

const clickNav = (page) => emit('clickNav', page)

// const isPageActive = (page)=>{
  
// }

const isFromOne = props.page == 1
const isToEqualTotal = to == props.total
</script>
<template>
  <div class="flex justify-center">
    <nav class="flex" role="navigation" aria-label="Navigation">
      <div class="mr-2">
        <button class="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 text-slate-300"
        :class="{
          'cursor-not-allowed border-slate-200 text-slate-300': props.page == 1,
        }" 
        :disabled="props.page == 1"
        @click.prevent="clickNav(props.page - 1)">
          <span class="sr-only">Previous</span><wbr />
          <svg class="h-4 w-4 fill-current" viewBox="0 0 16 16">
            <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
          </svg>
        </button>
      </div>
      <ul class="inline-flex text-sm font-medium -space-x-px shadow-sm" >
        <li v-for="page in props.page" :key="page">
          <div class="inline-flex items-center justify-center rounded-l leading-5 px-3.5 py-2 bg-white border border-slate-200 text-indigo-500">
            <a href="#">
              {{ page }}
            </a>
          </div>
        </li>
      </ul>
      <div class="ml-2">
        <button class="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white hover:bg-jobhunGreen border border-slate-200 text-slate-600 hover:text-white shadow-sm"
        :class="{
          'cursor-not-allowed border-slate-200 text-slate-300': to == props.total,
        }" 
            :disabled="to == props.total"
            @click.prevent="clickNav(props.page+1)">
          <span class="sr-only">Next</span><wbr />
          <svg class="h-4 w-4 fill-current" viewBox="0 0 16 16">
            <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
          </svg>
        </button>
      </div>
    </nav>
  </div>
  <!-- <li>
    <span
      class="inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white border border-slate-200 text-slate-400">…</span>
  </li> -->
</template>