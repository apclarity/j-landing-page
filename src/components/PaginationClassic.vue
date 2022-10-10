<script setup>
  import { computed } from 'vue'
  const props = defineProps({
    total: Number,
    perPage: Number,
    page:Number,
  })
  
  const from = computed(() => {
    if(props.total == 0)
      return 0
    if(props.total > 0){
      return ((props.page-1) * props.perPage) + 1
    }
  })

  const to = computed(() => {
    let end = props.perPage * props.page
    if(end > props.total)
      return props.total
    return end
  })

  const emit = defineEmits(['clickNav'])

  const clickNav = (page) => emit('clickNav', page)
</script>
<template>
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
    <nav class="mb-4 sm:mb-0 sm:order-1" role="navigation" aria-label="Navigation">
      <ul class="flex justify-center">
        <li class="ml-3 first:ml-0">
          <a class="btn bg-white border-slate-200 text-slate-300 cursor-not-allowed" href="#0" :disabled="from == 1" @click="clickNav(props.page-1)">&lt;- Previous</a>
        </li>
        <li class="ml-3 first:ml-0">
          <a class="btn bg-white border-slate-200 hover:border-slate-300 text-indigo-500" href="#0" :disabled="to == props.total" @click="clickNav(props.page+1)">Next -&gt;</a>
        </li>
      </ul>
    </nav>
    <div class="text-sm text-slate-500 text-center sm:text-left">
      Showing <span class="font-medium text-slate-600">{{from}}</span> to <span class="font-medium text-slate-600">{{to}}</span> of <span class="font-medium text-slate-600">{{props.total}}</span> results
    </div>
  </div>
</template>