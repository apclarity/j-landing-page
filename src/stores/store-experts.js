import { defineStore } from "pinia";
import api from "../utils/Api";

const DETAIL_EXPERT_URL = "/detail-experts.json";

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
    async getDataDetailExpert() {
      try {
        let res = await api.get(DETAIL_EXPERT_URL);
        console.log(res);
        this.detailExpert = res;
      } catch (error) {
        console.log("error");
      }
    },
  },
});
