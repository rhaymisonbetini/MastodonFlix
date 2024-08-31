import movieMutations from './mutations'
import movieActions from './actions'
import movieGetters from './getters'

export default {
    state() {
        return {
            movies: [],
            selectedMovie: {},
            topTenMovies: [],
            selectedReview:[]        }
    },
    mutations: movieMutations,
    actions: movieActions,
    getters: movieGetters
}