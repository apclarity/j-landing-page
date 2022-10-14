<script setup>
  import { toRefs, computed } from 'vue'
  import TabelData from './TabelData.vue'

  const props = defineProps({
    total: Number,
    page: Number,
    perPage: Number,
    kelass: Array,
  })

  const { page, perPage, kelass, total } = toRefs(props)

  const adjustingIndex = computed(() => perPage.value * (page.value - 1))
</script>
<template>
  <div class="bg-white shadow-lg rounded-sm border border-slate-200 relative">
    <header class="px-5 py-4">
      <h2 class="font-semibold text-slate-800">Data Kelas <span class="text-slate-400 font-medium">{{total}}</span></h2>
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
                <div class="font-semibold text-left">Kelas</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Kode kelas</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Actions</div>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody class="text-sm divide-y divide-slate-200">
            <TabelData
              v-for="(kelas, index) in kelass"
              :key="kelas.id"
              :value="kelas.id"
              :kelas="kelas"
              :kode="kelas.kode"
              :index="index + adjustingIndex"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>