export default {
    getMovie(state) {
        return state.movies
    },
    getTopTenMovies(state) {
        return state.topTenMovies;
    },
    getSelectedMovie(state) {
        return state.selectedMovie;
    },
    getSelectedReview(state) {
        return state.selectedReview;
    }
}