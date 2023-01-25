<script setup>
import { toRefs, ref } from "vue"
import ModalDelete from './ModalDeleteExpert.vue'

const props = defineProps({
  tableExpertPermanent: {
    default: {},
    type: Object
  },
  index: Number
})
const { tableExpertPermanent, index } = toRefs(props)

const deleteExpert = ref(false)

const openModalDeleteExpert = () => {
  deleteExpert.value = true
}

const confirmDeleteExpert = async () => {
  await tableExpertPermanentStore.deleteDataTableExpertPermanent()
}
</script>

<template>
  <tr>
     <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="font-medium text-black">{{index+1}}</div>
    </td> 
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <img class="border-0 sm:h-20 sm:w-20 h-10 w-10 rounded-xl" :src="tableExpertPermanent.image" />
    </td>   
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="font-medium text-black">{{ tableExpertPermanent.name}}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="font-medium text-black">{{ tableExpertPermanent.profession }}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="font-medium text-black">{{ tableExpertPermanent.company }}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
      <div class="space-x-1 inline-flex">
        <router-link :to="'/dashboard/formeditexpert/' + tableExpertPermanent.id" class="text-slate-400 hover:text-slate-500 rounded-full">
          <span class="sr-only">Edit</span>
          <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
              <path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
          </svg>
        </router-link>
        <button @click.prevent="openModalDeleteExpert()" class="text-rose-500 hover:text-rose-900 rounded-full">
          <span class="sr-only">Delete</span>
          <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
              <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
              <path d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z" />
          </svg>
        </button>
        <ModalDelete :deleteExpert="deleteExpert" @close-modal="deleteExpert = false" :name="tableExpertPermanent.name" />
        <router-link :to="'/experts/detailexpert/' + tableExpertPermanent.id"
          class="fill-slate-400 hover:fill-slate-500 my-auto pl-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path
                d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z" />
            </svg>
          </router-link>
      </div>
    </td>
  </tr>  
</template>