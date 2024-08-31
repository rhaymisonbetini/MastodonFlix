export default {
    SET_MOVIES(state, movies) {
        state.movies = movies;
    },
    SET_SELECTED_MOVIE(state, movie) {
        state.selectedMovie = movie;
    },
    SET_TOP_TEN_MOVIES(state, topTenMovies) {
        state.topTenMovies = topTenMovies;
    },
    SET_SELECTED_REVIEW(state, reviewed) {
        state.selectedReview = reviewed;
    }
}