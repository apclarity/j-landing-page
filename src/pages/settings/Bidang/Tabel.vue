<script setup>
  import { ref, computed, onMounted } from 'vue'
  import { PAGINATION_LIMIT } from '../../../utils/Constants'
  import { storeToRefs } from 'pinia'
  import { useBidangStore } from './store'
  import SearchForm from '../../../components/SearchForm.vue'
  import TabelHeader from './TabelHeader.vue'
  import PaginationClassic from '../../../components/PaginationClassic.vue'

  const bidangStore = useBidangStore()
  const { data, pagination } = storeToRefs(bidangStore)

  const getData = async (page=1, search="", perPage=PAGINATION_LIMIT) => {
    bidangStore.setPagination({
      page, search, per_page: perPage
    })
    await bidangStore.getBidangs()
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
          <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Bidang ✨</h1>
        </div>

        <!-- Right: Actions  -->
        <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          <!-- Search form -->
          <SearchForm placeholder="Cari bidang" />
          <!-- Create invoice button -->
          <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
            <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span class="hidden xs:block ml-2">Tambah bidang</span>
          </button>
        </div>            

      </div>

      <!-- Table -->
      <TabelHeader :bidangs="data"
        :page="pagination.page"
        :perPage="pagination.per_page" />

      <!-- Pagination -->
      <div class="mt-8">
        <PaginationClassic
          :total="pagination.total"
          :perPage="pagination.per_page"
          :page="pagination.page"
          @clickNav="getData"
        />
      </div>          

    </div>
  </main>
</template>