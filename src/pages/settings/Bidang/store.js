import { defineStore } from "pinia"
import { PAGINATION_LIMIT } from '../../../utils/Constants'
import { isObjectEmpty } from "../../../utils/Helper"
import api from '../../../utils/Api'

export const useBidangStore = defineStore({
    id: "bidang",
    state: () => ({
        data: [],
        pagination: {
            search: "",
            per_page: PAGINATION_LIMIT,
            page: 1,
            total: 0
        }
    }),
    actions: {
        async getBidangs(){
            try {
                const result = await api.get(
                    "/other/sector-index?search=" + this.pagination.search +
                    "&per_page=" + this.pagination.per_page +
                    "&page=" + this.pagination.page
                )
                this.data = result.data
                this.pagination = result.pagination
            } catch (error) {
                console.log(error)
            }
        },
        setPagination(payload){
            this.pagination = payload
        }
    }
})