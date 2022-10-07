<template>
  <div class="bg-white shadow-lg rounded-sm border border-slate-200 relative">
    <header class="px-5 py-4">
      <h2 class="font-semibold text-slate-800">Data Bidang <span class="text-slate-400 font-medium">67</span></h2>
    </header>
    <div>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <!-- Table header -->
          <thead class="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
            <tr>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                <div class="flex items-center">
                  <label class="inline-flex">
                    <div class="font-semibold text-left">#</div>
                  </label>
                </div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Bidang</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Actions</div>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody class="text-sm divide-y divide-slate-200">
            <DataTable
              v-for="(bidang, index) in bidangs"
              :key="bidang.id"
              :value="bidang.id"
              :bidang="bidang"
              :index="index"
            />
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
import { ref} from 'vue'
import DataTable from './DataTable.vue'

export default {
  name: 'SettingBidangTableHeader',
  components: {
    DataTable,
  },  
  props: ['selectedItems'],
  setup() {
    const bidangs = ref([
      {
        id: '0',
        bidang: 'Astronomic',
      },
      {
        id: '1',
        bidang: 'Engineering',
      },
      {
        id: '2',
        bidang: 'Medical'
      },
      {
        id: '3',
        bidang: 'Astronomic'
      },
      {
        id: '4',
        bidang: 'Engineering'
      },
      {
        id: '5',
        bidang: 'Medical'
      },
      {
        id: '6',
        bidang: 'Information & Technology'
      },
      {
        id: '7',
        bidang: 'Engineering'
      },
      {
        id: '8',
        bidang: 'Medical'
      },
      {
        id: '9',
        bidang: 'Information & Technology'
      }
    ])

    return {
      bidangs,
    }
  }
}
</script>