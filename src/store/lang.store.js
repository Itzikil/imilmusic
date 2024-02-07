import { i18Service } from "../services/i18-service.js";

export const langStore = {
    state: {
        isRtl: i18Service.getTransLang(),
    },
    getters:{
        isRtl({isRtl}){return isRtl}
    },
    mutations: {
        setRtl(state, value) {
            state.isRtl = value;
        },
    },
}