<template>
  <div class="row">
    <CardDescriptionComponent/>
  </div>
</template>

<script>
import CardDescriptionComponent from "@/components/CardDescriptionComponent.vue"
import ApiService from "@/services/ApiService";

export default {
  name: 'AppTopTen',
  components: {
    CardDescriptionComponent
  },
  data() {
    return {
      apiService: null,
      sharedTopTen: {
        movies: [],
        loading: true
      }
    }
  },
  provide() {
    return {
      sharedTopTen: this.sharedTopTen
    }
  },
  mounted() {
    this.apiService = new ApiService();
    this.getTopTen();
  },
  methods: {
    getTopTen() {
      this.apiService.getMostPopular()
          .then(({data}) => {
            this.sharedTopTen.movies = data.results;
            setTimeout(() => {
              this.sharedTopTen.loading = false;
            }, 1000)
          })
          .catch(error => {
            console.error(error);
          });
    },
  }
}

</script>

<style scoped>

</style>