import { defineStore } from "pinia";
import api from "../utils/Api";
import apiStatic from "../utils/ApiStatic";
import { PAGINATION_LIMIT } from "../utils/Constants";

//------ url data detail expert -----------------------------------
// const DETAIL_EXPERT_URL = "/detail-experts.json";
const DETAIL_EXPERT_URL = "/expert/expert-profile/";
//------ url rekomendasi expert ------------------------------------
// const INDEX_EXPERT_FEATURED_URL = "/expert-featured.json";
const INDEX_EXPERT_FEATURED_URL = "/expert/expert-features";
//------ url cari expert -------------------------------------------
// const ADVANCE_SEARCH_URL = "/data-advance-search.json";
const ADVANCE_SEARCH_URL = "/expert/search-expert";
//------ url form expert -------------------------------------------
const JADI_EXPERT_URL = "/expert/create-expert-form"
const JADI_EXPERT_DASHBOARD_URL = "/expert/create-expert"
//------ url data expert temporary ---------------------------------
// const SUBMISSION_EXPERT_TEMP = "/expert/submission-expert-temp"
const SUBMISSION_EXPERT_TEMP = "/submission-expert-temp.json"
// const SUBMISSION_TABLE_EXPERT_TEMP = "/expert/submission-expert-temp"
const SUBMISSION_TABLE_EXPERT_TEMP = "/table-expert-temp.json"
const DELETE_SUBMISSION_TABLE_EXPERT_TEMP = "/expert/delete-expert-temp"
const ACCEPT_SUBMISSION_TABLE_EXPERT_TEMP = "/expert/acc-expert-temp"
const REJECT_SUBMISSION_TABLE_EXPERT_TEMP = "/expert/reject-expert-temp"
//------ url data expert permanent ----------------------------------
const DATA_DETAIL_EXPERT_PERMANENT = "/expert/submission-expert-temp"
// const DATA_DETAIL_TABLE_EXPERT_PERMANENT = "/expert/table-expert-permanent"
const DATA_DETAIL_TABLE_EXPERT_PERMANENT = "/table-expert-temp.json"
const DELETE_TABLE_EXPERT_PERMANENT = "/expert/delete-expert-temp"
// const ACCEPT_TABLE_EXPERT_PERMANENT = "/expert/acc-expert-temp"


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
    submissionExpertTemp: {
      education: {},
      social_media: {},
    },
    tableExpertPermanent: {
        search: "",
        per_page: PAGINATION_LIMIT,
        page: 1,
        total: 0,
    },
    tableSubmissionExpertTemp: {
        search: "",
        per_page: PAGINATION_LIMIT,
        page: 1,
        total: 0,
    },
    pagination: {
        search: "",
        per_page: PAGINATION_LIMIT,
        page: 1,
        total: 0,
      },
  }),
  actions: {
    //---- Page Detail Expert -------------------------------
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
    //------- Page Cari Expert ------------------------------
    async advanceSearch(payload) {
      try {
        let res = await api.post(ADVANCE_SEARCH_URL, payload);
        this.expertAdvanceSearch = res.data;
        this.expertPaginationAdvanceSearch = res.data;
      } catch (error) {}
    },
    //------- Expert Rekomendasi Homepage -------------------
    setDataExpertFeatured(payload = {}) {
      this.expertFeatured = payload;
    },
    async getDataExpertFeatured() {
      try {
        let res = await api.get(INDEX_EXPERT_FEATURED_URL);
        this.expertFeatured = res.data;
      } catch (error) {}
    },
    //------- Page Formulir Jadi Expert ---------------------
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
    //------- Page Formulir Jadi Expert Permanent Dashboard --------
    async formJadiExpertDashboard(payload) {
      try {
        console.log(payload)
        let res = await api.post(JADI_EXPERT_DASHBOARD_URL, payload);
        this.formJadiExpertDashboard = res.data;
      } catch (error) {}
    },
    async getDataFormExpertPermanent(id) {
      try {
        let res = await api.get(SUBMISSION_EXPERT_TEMP + id);
        this.submissionExpertPermanent = res.data;
      } catch (error) {}
    },
    async getDataTableExpertPermanent() {
      try {
        let res = await apiStatic.get(DATA_DETAIL_TABLE_EXPERT_PERMANENT + '?search=', this.pagination)
        // let res = await api.get(DATA_DETAIL_TABLE_EXPERT_PERMANENT)
        this.tableExpertPermanent = res.data;
        this.pagination = res.pagination
      } catch (error) {}
    },
    async deleteDataTableExpertPermanent(id) {
      try {
        await api.delete(DELETE_TABLE_EXPERT_PERMANENT + id);
      } catch (error) {}
    },
    //------- Page Formulir Jadi Expert Temporary Dashboard -------
    async getDataSubmissionExpertTemp(id) {
      try {
        let res = await api.get(SUBMISSION_EXPERT_TEMP + id);
        this.submissionExpertTemp = res.data;
      } catch (error) {}
    },
    async getDataTableSubmissionExpertTemp() {
      try {
        // let res = await api.get(DETAIL_EXPERT_URL);
        let res = await apiStatic.get(SUBMISSION_TABLE_EXPERT_TEMP + '?search=', this.pagination);
        this.tableSubmissionExpertTemp = res.data;
        this.pagination = res.pagination
      } catch (error) {}
    },
    setPagination(payload) {
      this.pagination = payload;
    },
    async deleteDataTableSubmissionExpertTemp(id) {
      try {
        await api.delete(DELETE_SUBMISSION_TABLE_EXPERT_TEMP + id);
      } catch (error) {}
    },
    async acceptFormJadiExpertDashboard(payload) {
      try {
        await api.post(ACCEPT_SUBMISSION_TABLE_EXPERT_TEMP, payload);
      } catch (error) {}
    },
    async rejectFormJadiExpertDashboard(payload) {
      try {
        await api.post(REJECT_SUBMISSION_TABLE_EXPERT_TEMP, payload);
      } catch (error) {}
    },
  },
});
