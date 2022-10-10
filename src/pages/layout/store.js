import { defineStore } from "pinia"

export const useLayoutStore = defineStore({
    id: "layout",
    state: () => ({
        session: {
            name:"user"
        },
        dashboardAlert: {}
    }),
    actions: {
        setSession: (payload={}) => {
            this.session = payload
        },
        setDashboardLayouts: (payload={}) => {
            this.dashboardAlert = payload
        }
    }
})