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
const JADI_EXPERT_URL = "/expert/create-expert-form"
const JADI_EXPERT_DASHBOARD_URL = "/expert/create-expert"
const SUBMISSION_EXPERT_TEMP = "/expert/submission-expert-temp"

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
    submissionExpertTemp:{
      education:{},
      experiences:[]
    },
    tableSubmissionExpertTemp: {}
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
    async formJadiExpert(payload) {
      let newSectors = payload.sectors.map((obj)=> obj.value)
      payload.sectors = newSectors
      let newAvailableServices = payload.available_services.map((obj)=> obj.value)
      payload.available_services = newAvailableServices
      try {
        console.log(payload)
        let res = await api.post(JADI_EXPERT_URL, payload);
        this.formJadiExpert = res.data;
      } catch (error) {}
    },
    async formJadiExpertDashboard(payload) {
      try {
        console.log(payload)
        let res = await api.post(JADI_EXPERT_DASHBOARD_URL, payload);
        this.formJadiExpertDashboard = res.data;
      } catch (error) {}
    },
    async getDataSubmissionExpertTemp(id) {
      try {
        let res = await api.get(SUBMISSION_EXPERT_TEMP + id);
        this.submissionExpertTemp = res.data;
      } catch (error) {}
    },
    async getDataTableSubmissionExpertTemp() {
      try {
        let res = await api.get(DETAIL_EXPERT_URL);
        this.tableSubmissionExpertTemp = res.data;
      } catch (error) {}
    },
  },
});
