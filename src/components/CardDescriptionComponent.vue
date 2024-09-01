<template>
  <template v-for="(movie, index) in movies" :key="index">
    <div class="col-sm-12 col-md-4 mt-4" @click="goToDetails(movie.id)" style="cursor: pointer;">
      <img :src="getImageUrl(movie.poster_path)"
           class="image image-fluid w-100"
           :alt="movie.title"
      >
    </div>
    <div class="col-sm-12 col-md-8 text-white text-start mt-4">
      <h2 class="text-danger fw-bold">{{ movie.title }}</h2>
      <RatingMicro :movie="movie" class="mb-2"/>
      <p>{{ movie.overview }}</p>
      <ReviewsMicro v-if="movie.reviews" :reviews="movie.reviews" class="mb-2 mt-2"/>
    </div>
  </template>
</template>

<script>
import ApiService from "@/services/ApiService";
import RatingMicro from "@/components/micro/RatingMicro.vue";
import ReviewsMicro from "@/components/micro/ReviewsMicro.vue";

export default {
  name: 'CardDescriptionComponent',
  components: {
    RatingMicro,
    ReviewsMicro
  },
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('fetchTopTenMovies')
  },
  methods: {
    getImageUrl(posterPath) {
      return ApiService.getImageUrl(500, posterPath)
    },
    goToDetails(movieId) {
      this.$router.push({name: 'movie-details', params: {id: movieId}});
    }
  },
  computed: {
    movies() {
      return this.$store.getters['getTopTenMovies'];
    }
  }
}

</script>

<style scoped>

</style>