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

    async getMostPopular() {
        return this.client.get(`/popular?api_key=${this.apiKey}'&page=${1}`);
    }

}

export default ApiService;