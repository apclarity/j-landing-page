import { defineStore } from "pinia";
import api from "../utils/Api";

const SECTORS_URL = "/sectors.json";

export const useOptionsStore = defineStore({
  id: "options",
  state: () => ({
    listSector: {},
  }),
  actions: {
    async getSectors(payload) {
      try {
        let res = await api.get(SECTORS_URL, payload);
        this.listSector = res;
      } catch (error) {}
    },
  },
});
