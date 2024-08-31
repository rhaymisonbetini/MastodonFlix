import userMutations from "@/stores/user/mutations";
import userActions from "@/stores/user/actions";
import userGetters from "@/stores/user/getters";

export default {
    state() {
        return {
            user: null,
            isLogged: false
        }
    },
    mutations: userMutations,
    actions: userActions,
    getters: userGetters
}

