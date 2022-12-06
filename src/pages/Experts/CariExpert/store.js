import { defineStore } from "pinia";
import api from "../../../utils/Api";
import { INDEX_EXPERT_URL } from "./constants";

export const useDataExpertsHomepage = defineStore({
  id: "dataExpertsHomepage",
  state: () => ({
    experts: [],
  }),
  actions: {
    setDataExperts(payload = {}) {
      this.experts = payload;
    },
    async getDataExperts() {
      try {
        console.log("sebelum");
        let res = await api.get(INDEX_EXPERT_URL);
        console.log(res);
        this.experts = res.Data;
      } catch (error) {}
    },
  },
});
