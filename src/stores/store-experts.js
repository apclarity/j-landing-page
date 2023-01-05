import { defineStore } from "pinia";
import api from "../utils/Api";
import apiStatic from "../utils/ApiStatic";
import { PAGINATION_LIMIT } from "../utils/Constants";

// const DETAIL_EXPERT_URL = "/detail-experts.json";
const DETAIL_EXPERT_URL = "/expert/expert-profile/";
// const INDEX_EXPERT_FEATURED_URL = "/expert-featured.json";
const INDEX_EXPERT_FEATURED_URL = "/expert/expert-features";
// const ADVANCE_SEARCH_URL = "/data-advance-search.json";
const ADVANCE_SEARCH_URL = "/expert/search-expert";

export const useDataExpertStore = defineStore({
  id: "experts",
  state: () => ({
    detailExpert: {
      education: {},
      social_media: {},
    },
    expertAdvanceSearch: [],
    expertPaginationAdvanceSearch: {
      per_page: PAGINATION_LIMIT,
      page: 1,
      total: 0,
    },
    expertFeatured: [],
  }),
  actions: {
    setDetailDataExpert(payload = {}) {
      this.detailExpert = payload;
    },
    async getDataDetailExpert(id) {
      try {
        let res = await api.get(DETAIL_EXPERT_URL + id);
        this.detailExpert = res;
      } catch (error) {
        console.log("error");
      }
    },
    async advanceSearch(payload) {
      try {
        let res = await api.post(ADVANCE_SEARCH_URL, payload);
        this.expertAdvanceSearch = res.data;
        this.expertPaginationAdvanceSearch = res.data;
      } catch (error) {}
    },
    setDataExpertFeatured(payload = {}) {
      this.expertFeatured = payload;
    },
    async getDataExpertFeatured() {
      try {
        let res = await api.get(INDEX_EXPERT_FEATURED_URL);
        this.expertFeatured = res.data;
      } catch (error) {}
    },
  },
});
