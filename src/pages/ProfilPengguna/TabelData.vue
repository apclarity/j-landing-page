<script setup>
import { toRefs, ref } from "vue"

const props = defineProps({
  tableExpertPermanent: {
    default: {},
    type: Object
  },
  index: Number,
  delete: Object
})
const { tableExpertPermanent, index } = toRefs(props)
</script>

<template>
  <tr>  
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="font-medium text-black">{{ tableExpertPermanent.name}}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="font-medium text-black">{{ tableExpertPermanent.profession }}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="font-medium text-black">{{ tableExpertPermanent.company }}</div>
    </td>
  </tr>  
</template>