import { defineStore } from "pinia"

export const useLayoutStore = defineStore({
    id: "layout",
    state: () => ({
        session: {},
        dashboardAlert: {}
    }),
    actions: {
        setSession(payload={}){
            this.session = payload
        },
        setDashboardLayouts(payload={}){
            this.dashboardAlert = payload
        }
    }
})