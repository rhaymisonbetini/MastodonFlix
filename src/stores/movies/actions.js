import ApiService from "@/services/ApiService";

export default {
    async fetchMovies({commit}) {
        let page = Math.random() * (10 - 1) + 1
        let apiService = new ApiService()
        const response = await apiService.getMostPopular(page);
        let movies = response.data.results
        commit('SET_MOVIES', movies);
    },
    async fetchTopTenMovies({ commit, state }) {
        if (state.topTenMovies.length <= 0) {
            let apiService = new ApiService();
            const response = await apiService.getMostPopular();
            let movies = response.data.results;

            movies = await Promise.all(movies.map(async (movie) => {
                let reviewsResponse = await apiService.getReviews(movie.id);
                movie.reviews = reviewsResponse.data.results.slice(0,2);

                if (movie.reviews.length <= 0) {
                    movie.reviews = [{ author: 'MastodonFlix', content: 'No reviews available' }];
                }

                return movie;
            }));

            commit('SET_TOP_TEN_MOVIES', movies);
        }
    },
    async fetchMovieDetails({commit}, movieId) {
        let apiService = new ApiService()
        const response = await apiService.getMovieDetails(movieId);
        commit('SET_SELECTED_MOVIE', response.data);
    },

    async fetchReview({commit}, movieId) {
        let apiService = new ApiService()
        let reviews = await apiService.getReviews(movieId);
        reviews = reviews.data.results
        if (reviews.length <= 0) {
            reviews = [{author: 'MastodonFlix', content: 'No reviews available'}];
        }
        commit('SET_SELECTED_REVIEW', reviews);
    },
}