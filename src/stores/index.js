import {createStore} from "vuex";
import userModule from "@/stores/user/index"
import movieModule from "@/stores/movies/index"

const store = createStore({
    modules: {
        user: userModule,
        movies: movieModule
    },
});

export default store