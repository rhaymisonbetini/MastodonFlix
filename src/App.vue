<template>
  <div class="container mt-3">
    <div class="row">
      <NavBarMain/>
    </div>
    <div class="row">
      <CarouselMain/>
    </div>
    <div class="row">
      <CardMain/>
    </div>
    <div class="row">
      <NotificationsMain/>
    </div>
    <div class="row ">
      <FooterMain/>
    </div>
  </div>
</template>

<script>

import NavBarMain from "@/components/NavBarMain.vue";
import CarouselMain from "@/components/CarouselMain.vue"
import CardMain from "@/components/CardMain.vue"
import NotificationsMain from "@/components/NotificationsMain.vue"
import FooterMain from "@/components/FooterMain.vue";
import ApiService from "@/services/ApiService"

export default {
  name: 'App',
  components: {
    NavBarMain,
    CarouselMain,
    CardMain,
    NotificationsMain,
    FooterMain
  },
  data() {
    return {
      apiService: null,
      sharedState: {
        movies: []
      }
    }
  },

  provide() {
    return {
      sharedState: this.sharedState
    }
  },

  mounted() {
    this.apiService = new ApiService();
    this.getPopularMovies()
  },

  methods: {
    getPopularMovies() {
      this.apiService.getMostPopular()
          .then(({data}) => {
            this.sharedState.movies = data.results;
          })
          .catch(error => {
            console.error(error);
          });
    }
  }


}
</script>

<style>
body {
  background-color: #212529 !important;
}
</style>