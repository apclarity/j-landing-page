<script setup>
import { ref, computed, onMounted } from 'vue'
import { PAGINATION_LIMIT } from '../../../utils/Constants'
import { storeToRefs } from 'pinia'
import { useKelasStore } from './store'
import SearchForm from '../../../components/SearchForm.vue'
import TabelKelas from './TabelHeader.vue'
import PaginationClassic from '../../../components/PaginationClassic.vue'
import ModalTambah from './ModalTambah.vue'

const kelasStore = useKelasStore()
const { data, pagination } = storeToRefs(kelasStore)

const getData = async (page = 1, search = "", perPage = PAGINATION_LIMIT) => {
  kelasStore.setPagination({
    page, search, per_page: perPage
  })
  await kelasStore.getKelas()
}

const search = ref("")

const searchClick = (searchString) => {
  getData(1, searchString)
}

const changePage = (page) => {
  getData(page, search)
}

const formOpenStatus = ref(false)

const closeForm = () => {
  formOpenStatus.value = false
}

onMounted(() => {
  getData()
})

</script>
<template>
  <main>
    <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

      <!-- Page header -->
      <div class="sm:flex sm:justify-between sm:items-center mb-5">

        <!-- Left: Title -->
        <div class="mb-4 sm:mb-0">
          <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Kelas ✨</h1>
        </div>

        <!-- Right: Actions  -->
        <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          <!-- Search form -->
          <SearchForm placeholder="Cari kelas" v-model="search" @searchClick="searchClick" />
          <!-- Create invoice button -->
          <button class="btn bg-emerald-500 hover:bg-emerald-600 text-white" @click.stop="formOpenStatus = true">
            <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span class="hidden xs:block ml-2">Tambah kelas</span>
            <ModalTambah :formOpenStatus="formOpenStatus" @closeForm="closeForm" />
          </button>
        </div>            
      </div>

      <!-- Table -->
      <TabelKelas
        :kelass="data"
        :total="pagination.total"
        :page="pagination.page"
        :perPage="pagination.per_page"
      />

      <!-- Pagination -->
      <div class="mt-8">
        <PaginationClassic
        :total="pagination.total"
        :perPage="pagination.per_page"
        :page="pagination.page"
        @clickNav="changePage"
        :disabled="disabledPrevious"
        />
      </div>          
    </div>
  </main>
</template>