import { defineStore } from "pinia";
import api from "../utils/Api";

const DETAIL_EXPERT_URL = "/expert/expert-profile/";

export const useDataExpertDetailStore = defineStore({
  id: "dataDetailExpert",
  state: () => ({
    detailExpert: {
      education: {},
      social_media: {},
    },
  }),
  actions: {
    setDetailDataExpert(payload = {}) {
      this.detailExpert = payload;
    },
    async getDataDetailExpert(id) {
      try {
        let res = await api.get(DETAIL_EXPERT_URL + id);
        console.log(res);
        this.detailExpert = res;
      } catch (error) {
        console.log("error");
      }
    },
  },
});
