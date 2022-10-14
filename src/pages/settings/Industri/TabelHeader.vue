<script setup>
import { toRefs, computed } from 'vue'
import TabelData from './TabelData.vue'

const props = defineProps({
  page: Number,
  perPage: Number,
  industris: Array,
  total: Number
})

const { page, perPage, industris, total } = toRefs(props)

const adjustingIndex = computed(() => perPage.value * (page.value - 1))
</script>
<template>
  <div class="bg-white shadow-lg rounded-sm border border-slate-200 relative">
    <header class="px-5 py-4">
      <h2 class="font-semibold text-slate-800">Data Industri <span class="text-slate-400 font-medium">{{total}}</span></h2>
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
                <div class="font-semibold text-left">Industri</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Actions</div>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody class="text-sm divide-y divide-slate-200">
            <TabelData
              v-for="(industri, index) in industris"
              :key="industri.id"
              :value="industri.id"
              :industri="industri"
              :index="index + adjustingIndex"
            />
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>