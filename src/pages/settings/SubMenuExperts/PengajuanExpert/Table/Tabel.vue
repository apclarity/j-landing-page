<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { PAGINATION_LIMIT } from '../../../../../utils/Constants'
import { useDataExpertStore } from '../../../../../stores/store-experts'
import SearchForm from './SearchForm.vue'
import TabelHeader from './TabelHeader.vue'
import PaginationSubmissionExpertTemp from './PaginationNumeric.vue'

const route = useRoute()
const id = route.params.id

const tableSubmissionExpertTempStore = useDataExpertStore()
await tableSubmissionExpertTempStore.getDataTableSubmissionExpertTemp(id)
const { pagination, tableSubmissionExpertTemp } = storeToRefs(tableSubmissionExpertTempStore)

// const bidangStore = useBidangStore()
// const { data, pagination } = storeToRefs(bidangStore)

//===== Get Data =======================================================
const getData = async (page=1, search="", perPage=PAGINATION_LIMIT) => {
  tableSubmissionExpertTempStore.setPagination({
    page, search, per_page: perPage,
  })
  await tableSubmissionExpertTempStore.getDataTableSubmissionExpertTemp(search.value)
}

//===== Search & Pagination ============================================
const search = ref("")

const searchClick = () => {
  getData(1, PAGINATION_LIMIT, search.value )
}

const changePage = (page) => {
  getData(page)
}

//===== Events ========================================================
onMounted(() => {
  getData(1)
})
</script>

<template>
  <main>
    <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

      <!-- Page header -->
      <div class="sm:flex sm:justify-between sm:items-center mb-5">

        <!-- Left: Title -->
        <div class="mb-4 sm:mb-0">
          <!-- <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Bidang ✨</h1> -->
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a href="#"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Formulir</h1>
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg aria-hidden="true" class="h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <a href="#"
                  class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                  <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Pendaftaran Expert ✨</h1>
                </a>
              </div>
            </li>
          </ol>
        </div>

        <!-- Right: Actions  -->
        <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          <!-- Search form -->
          <SearchForm placeholder="Cari expert" v-model="search" @click.prevent="searchClick" />
        </div>            
      </div>

      <!-- Table -->
      <div class="mt-8">
        <TabelHeader
        :tableSubmissionExpertTemp="tableSubmissionExpertTemp"
        :total="pagination.total"
        :page="pagination.page"
        :perPage="pagination.per_page"
        />
      </div>

      <!-- Pagination -->
      <div class="mt-8">
        <PaginationSubmissionExpertTemp
          :total="pagination.total"
          :perPage="pagination.per_page"
          :page="pagination.page"
          @clickNav="changePage"
        />
        <!-- <PaginationClassic
          :total="pagination.total"
          :perPage="pagination.per_page"
          :page="pagination.page"
          @clickNav="changePage"
        /> -->
      </div>          
    </div>
  </main>
</template>