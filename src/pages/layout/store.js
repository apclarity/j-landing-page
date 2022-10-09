import { defineStore } from "pinia"

export const useSessionStore = defineStore({
    id: "session",
    state: () => ({
        session: {
            name:"wow"
        },
    })
})