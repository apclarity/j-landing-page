<script setup>
import { toRefs, ref } from "vue"
import ModalDelete from './ModalDeleteExpert.vue'

const props = defineProps({
  tableExpertPermanent: {
    default: {},
    type: Object
  },
  index: Number,
  delete: Object
})
const { tableExpertPermanent, index } = toRefs(props)

const deleteExpert = ref(false)

const openModalDeleteExpert = () => {
  deleteExpert.value = true
}

const confirmDeleteExpert = async () => {
  await props.delete.deleteDataTableExpertPermanent()
}
</script>

<template>
  <tr>
     <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="font-medium text-black">{{index+1}}</div>
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
        <router-link :to="'/undangexpert/detail/' + tableExpertPermanent.id"
          class=" my-auto pl-1">
          <button class="h-8 w-20 bg-gray-300 hover:bg-gray-400 rounded-sm">
            <span class="text-black font-normal">
              Detail
            </span>
          </button>
        </router-link>
        <button @click.prevent="openModalDeleteExpert()" class="text-rose-500 hover:text-rose-900 rounded-full">
          <span class="sr-only">Delete</span>
          <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
              <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
              <path d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z" />
          </svg>
        </button>
        <ModalDelete :deleteExpert="deleteExpert" @close-modal="deleteExpert = false" :name="tableExpertPermanent.name" />
      </div>
    </td>
  </tr>  
</template>