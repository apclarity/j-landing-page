import { defineStore } from "pinia";
import { USER_LOGIN_URL, USER_REGISTRATION_URL, USER_REGISTRATION_VERIFICATION_URL } from "./constant";
import api from "../../utils/Api";
import { useLayoutStore } from "../layout/store";

export const useSigninStore = defineStore({
  id: "signin",
  state: () => ({}),
  actions: {
    login(payload) {
      return new Promise(async (resolve, reject) => {
        try {
          let res = await api.post(USER_LOGIN_URL, payload);
          const layoutStore = useLayoutStore();
          layoutStore.setSession(res.user);
          localStorage.setItem("token", res.token);
          resolve(res);
        } catch (error) {
          reject(error);
        }
      });
    },
    async signup(payload) {
      try {
        await api.post(USER_REGISTRATION_URL, payload);
      } catch (error) {
        console.log(error)
      }
    },
    async verifyUserRegistration(payload) {
      try {
        let payloadObj = {
          token: payload
        }
        await api.post(USER_REGISTRATION_VERIFICATION_URL, payloadObj);
      } catch (error) {
        console.log(error)
      }
    }
  },
});
