<script setup>
import { toRefs, ref } from "vue"
import ModalDelete from './ModalDeleteExpert.vue'

const props = defineProps({
  expertTemp: Object,
  index: Number
})
const { expertTemp, index } = toRefs(props)

const deleteExpert = ref(false)

const openModalDeleteExpert = () => {
  deleteExpert.value = true
}
</script>

<template>
  <tr>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="font-medium text-black">{{index+1}}</div>
    </td> 
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <img class="border-0 sm:h-20 sm:w-20 h-10 w-10 rounded-xl" :src="expertTemp.image" />
    </td>   
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="font-medium text-black">{{ expertTemp.name}}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="font-medium text-black">{{ expertTemp.profession }}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="font-medium text-black">{{ expertTemp.company }}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
      <div class="space-x-1 inline-flex">
        <router-link :to="'/pengajuanexpert/formulir/' + expertTemp.id" class="">
          <button type="submit" class="h-7 bg-gray-300 hover:bg-gray-400 text-black px-6 rounded text-sm">
            Detail
          </button>
        </router-link>
        <button @click.prevent="openModalDeleteExpert()" class="text-rose-500 hover:text-rose-900 rounded-full">
          <span class="sr-only">Delete</span>
          <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
              <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
              <path d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z" />
          </svg>
        </button>
        <ModalDelete :deleteExpert="deleteExpert" @close-modal="deleteExpert = false" :name="expertTemp.name" />
      </div>
    </td>
  </tr>  
</template>