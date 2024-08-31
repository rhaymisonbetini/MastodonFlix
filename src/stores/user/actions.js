import AuthService from "@/services/AuthService";

export default {
    async login({commit}, user) {
        AuthService.setAuthInfo(user);
        commit('SET_USER', user);
        commit('SET_IS_LOGGED', true);
    },
    async logout({commit}) {
        AuthService.setAuthInfo(null);
        commit('SET_USER', null);
    },
}