import { defineStore } from "pinia";
import { PAGINATION_LIMIT } from "../../../../../utils/Constants";
import { isObjectEmpty } from "../../../../../utils/Helper";
import api from "../../../../../utils/Api";

export const useBidangStore = defineStore({
  id: "bidang",
  state: () => ({
    data: [],
    pagination: {
      search: "",
      per_page: PAGINATION_LIMIT,
      page: 1,
      total: 0,
    },
    bidang: {},
  }),
  getters: {
    getPaginationSearch(state) {
      return state.pagination.search;
    },
  },
  actions: {
    async getBidangs() {
      try {
        const result = await api.get("/other/sector-index?search=", this.pagination);
        this.data = result.data;
        this.pagination = result.pagination;
      } catch (error) {
        console.log(error);
      }
    },
    async create(bidang) {
      await api.post("/other/sector-create", bidang);
    },
    async getById(payload) {
      try {
        const result = await api.get("/other/sector-detail/" + payload);
        this.data = result.data;
      } catch (error) {
        console.log(error);
      }
    },
    setPagination(payload) {
      this.pagination = payload;
    },
  },
});
