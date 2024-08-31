import ApiService from "@/services/ApiService";

export default {
    async fetchMovies({commit}) {
        let page = Math.random() * (10 - 1) + 1
        let apiService = new ApiService()
        const response = await apiService.getMostPopular(page);
        let movies = response.data.results
        commit('SET_MOVIES', movies);
    },
    async fetchTopTenMovies({commit}) {
        let apiService = new ApiService()
        const response = await apiService.getMostPopular();
        let movies = response.data.results
        movies.map(async (movie) => {
            let reviews = await apiService.getReviews(movie.id);
            movie.reviews = reviews.data.results.slice(0, 1);
            if (movie.reviews.length <= 0) {
                movie.reviews = [{author: 'MastodonFlix', content: 'No reviews available'}];
            }
        })
        commit('SET_TOP_TEN_MOVIES', movies);
    },
    async fetchMovieDetails({commit}, movieId) {
        let apiService = new ApiService()
        const response = await apiService.getMovieDetails(movieId);
        commit('SET_SELECTED_MOVIE', response.data);
    },

    async fetchReview({commit}, movieId) {
        let apiService = new ApiService()
        let reviews = await apiService.getReviews(movieId);
        commit('SET_SELECTED_REVIEW', reviews.data.results);
    },
}