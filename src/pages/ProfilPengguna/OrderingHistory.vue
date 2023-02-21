<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { PAGINATION_LIMIT } from '../../utils/Constants'
import { useDataExpertStore } from '../../stores/store-experts'
import TabelHeader from './TabelHeader.vue'
import PaginationTableExpertPermanent from './PaginationNumeric.vue'

const props = defineProps({
    orderingHistory: Object
})

const { orderingHistory } = props

const route = useRoute()
const id = route.params.id

const tableExpertPermanentStore = useDataExpertStore()
await tableExpertPermanentStore.getDataTableExpertPermanent()
const { tableExpertPermanent, pagination } = storeToRefs(tableExpertPermanentStore)

//===== Get Data =======================================================
const getData = async (page = 1, search = "", perPage = PAGINATION_LIMIT) => {
    tableExpertPermanentStore.setPagination({
        page, search, per_page: perPage
    })
    await tableExpertPermanentStore.getDataTableExpertPermanent()
}

//===== Search & Pagination ============================================
const search = ref("")

const searchClick = (searchString) => {
    getData(1, searchString)
}

const changePage = (page) => {
    getData(page, search)
}

onMounted(() => {
    getData()
})
</script>
<template>
    <div class="p-1 mb-3 shrink w-full space-y-10">
        <div class="">
        <TabelHeader
            :tableExpertPermanent="tableExpertPermanent"
            :total="pagination.total"
            :page="pagination.page"
            :perPage="pagination.per_page"
            :deleteExpert="tableExpertPermanentStore"
        />
        </div>
        <div class="">
            <PaginationTableExpertPermanent
                :total="pagination.total"
                :perPage="pagination.per_page"
                :page="pagination.page"
                @clickNav="changePage"
            />
        </div>    
    </div>
</template>