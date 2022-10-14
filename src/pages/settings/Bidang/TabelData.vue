<script setup>
  import { toRefs } from "vue"
  const props = defineProps({
    bidang: Object,
    index: Number
  })
  const { bidang, index } = toRefs(props)
</script>

<template>
  <tr>
     <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="font-medium text-black">{{index+1}}</div>
    </td> 
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="font-medium text-black">{{bidang.name}}</div>
    </td>   
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
      <div class="space-x-1">
        <button class="text-slate-400 hover:text-slate-500 rounded-full">
          <span class="sr-only">Edit</span>
          <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
              <path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
          </svg>
        </button>
        <button class="text-rose-500 hover:text-rose-600 rounded-full">
          <span class="sr-only">Delete</span>
          <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
              <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
              <path d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z" />
          </svg>
        </button>
      </div>
    </td>
  </tr>  
</template>