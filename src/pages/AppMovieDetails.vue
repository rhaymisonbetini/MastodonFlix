<template>
  <div class="row" v-if="movie">
    <div class="col-sm-12 col-md-5">
      <img
          :src="'https://image.tmdb.org/t/p/w1280' + movie.poster_path"
          class="d-block w-100"
          :alt="movie.title"
      />
    </div>
    <div class="col-sm-12 col-md-7 text-white">
      <h2 class="text-danger fw-bold">{{movie.title}}</h2>
      <h6>{{movie.tagline}}</h6>
      <RatingMicro :movie="movie"/>
      <p><span v-for="(gen, index) in movie.genres" :key="index" class="badge text-bg-primary" style="margin-right: 5px ">{{gen.name}}</span></p>
      <span v-for="(cmp, index) in movie.production_companies" :key="index" class="badge text-bg-danger mb-2" style="margin-right: 5px ">{{cmp.name}}</span>
      <p>Country: {{movie.origin_country[0]}}</p>
      <p>Certification: {{ movie.adult ? '+18' : 'Free'}}</p>
      <p>Release: {{ movie.release_date}}</p>
      <p>Budget: $ {{new Intl.NumberFormat().format(movie.budget)}} </p>
      <p>Duration: {{movie.runtime}} min </p>
      <p>Overview: {{movie.overview}}</p>
    </div>
    <div class="col-12 text-white">
      <ReviewsMicro :reviews="reviews" class="mb-2 mt-2"/>
    </div>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService";
import RatingMicro from "@/components/micro/RatingMicro.vue";
import ReviewsMicro from "@/components/micro/ReviewsMicro.vue";

export default {
  name: 'MovieDetails',
  components: {
    ReviewsMicro,
    RatingMicro
  },
  data() {
    return {
      apiService: null,
      movie: null,
      reviews:[],
    }
  },
  mounted() {
    this.getMovieDetails()
  },
  methods: {
    getMovieDetails() {
      let movieId = this.$route.params.id
      this.apiService = new ApiService()
      this.apiService.getMovieDetails(movieId).then(({data}) => {
        this.movie = data
        console.log(this.movie)
        this.getReviews()
      })
    },
    async getReviews(){
      let reviews = await this.apiService.getReviews(this.movie.id);
      this.reviews = reviews.data.results;
    }

  }
}
</script>

<style scoped>

</style>