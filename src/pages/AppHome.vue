<template>
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
</template>

<script>

import CarouselMain from "@/components/CarouselMain.vue"
import CardMain from "@/components/CardMain.vue"
import NotificationsMain from "@/components/NotificationsMain.vue"
import FooterMain from "@/components/FooterMain.vue";
import ApiService from "@/services/ApiService"

export default {
  name: "AppHome",
  components: {
    CarouselMain,
    CardMain,
    NotificationsMain,
    FooterMain
  },
  data() {
    return {
      apiService: null,
      banners: [],
    }
  },

  mounted() {
    this.apiService = new ApiService();
    this.$store.dispatch('fetchMovies');
    this.$store.dispatch('fetchTopTenMovies')
  },
  methods: {}
}
</script>

<style>
body {
  background-color: #212529 !important;
}
</style>