import axios from "axios";

class ApiService {

    constructor() {
        this.baseUrl = process.env.VUE_APP_MOVIE_URL_API;
        this.apiKey = process.env.VUE_APP_MOVIE_API_KEY;

        this.client = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    async getMostPopular(page = 1) {
        return this.client.get(`/popular?api_key=${this.apiKey}'&page=${page}`);
    }

    async getReviews(movieId) {
        return this.client.get(`/${movieId}/reviews?api_key=${this.apiKey}`);
    }

    static getImageUrl(size = 500, posterPath) {
        return `https://image.tmdb.org/t/p/w${size}${posterPath}`;
    }

}

export default ApiService;