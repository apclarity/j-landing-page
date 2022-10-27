import { defineStore } from "pinia"
import { USER_LOGIN_URL } from "./constant"
import api from "../../utils/Api"
import { useLayoutStore } from '../layout/store'

export const useSigninStore = defineStore({
  id: "signin",
  state: () => ({
  }),
  actions: {
    login(payload) {
      return new Promise(async(resolve, reject)=>{
        try {
          let res = await api.post(USER_LOGIN_URL, payload)
          const layoutStore = useLayoutStore()
          layoutStore.setSession(res.user)
          resolve(res)
        } catch (error) {
          reject(error)
        }
      })
    },
  },
});
