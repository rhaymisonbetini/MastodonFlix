import AuthService from "@/services/AuthService";

export default {
    async login({commit}, user) {
        user.token = (Math.random() + 1).toString(36).substring(5);
        AuthService.setAuthInfo(user);
        commit('SET_USER', user);
        commit('SET_IS_LOGGED', true);
    },
    fetchUser({commit, state}) {
        if (!state.user) {
            let user = JSON.parse(sessionStorage.getItem('_AUTH_USER'));
            if (user) {
                commit('SET_USER', user);
                commit('SET_IS_LOGGED', true);
            }
        }
    },
    async logout({commit}) {
        AuthService.logout(null);
        commit('SET_USER', null);
    },
}