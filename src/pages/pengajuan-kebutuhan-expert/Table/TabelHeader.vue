<script setup>
import { toRefs, computed } from 'vue'
import TabelData from './TabelData.vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
// import { PAGINATION_LIMIT } from '../../../../../utils/Constants'
// import { useDataExpertStore } from '../../../../../stores/store-experts'

// const route = useRoute()
// const id = route.params.id

// const tableExpertPermanentStore = useDataExpertStore()
// await tableExpertPermanentStore.getDataTableExpertPermanent()
// const { getDataTableExpertPermanent, pagination } = storeToRefs(tableExpertPermanentStore)

const props = defineProps({
  page: Number,
  perPage: Number,
  tableExpertPermanent: Array,
  total: Number,
  deleteExpert: Object
})

const { page, perPage, tableExpertPermanent, total } = toRefs(props)

  const adjustingIndex = computed(()=> perPage.value * (page.value-1))
</script>

<template>
  <div class="bg-white shadow-lg rounded-sm border border-slate-200 relative">
    <div>
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <thead class="text-md text-black bg-slate-50">
            <tr>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                <div class="flex items-center">
                  <label class="inline-flex">
                    <div class="font-semibold text-left">No.</div>
                  </label>
                </div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Nama Pengguna</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Layanan yang dipilih</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Tanggal pengajuan</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left"></div>
              </th>
            </tr>
          </thead>
          <tbody class="text-sm divide-y divide-slate-200">
            <TabelData
              v-for="(expertPermanent, index) in tableExpertPermanent"
              :key="expertPermanent.id"
              :value="expertPermanent.id"
              :tableExpertPermanent="expertPermanent"
              :index="index + adjustingIndex"
              :delete="deleteExpert"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>