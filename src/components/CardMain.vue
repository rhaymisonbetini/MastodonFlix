<template>
  <div>
    <TransitionGroup name="fade" tag="div" class="row">
      <SkeletonCard v-if="sharedState.loading"/>
      <div v-else class="col-sm-12 col-md-3 mt-5" v-for="movie in sharedState.movies" :key="movie.id">
        <div class="card">
          <img :src="getImageUrl(movie.poster_path)" class="card-img-top" :alt="movie.title">
          <div class="overlay" @click="navigateToDetail(movie.id)">
            <div class="card-body">
              <div class="card-title">{{ movie.title }}</div>
              <RatingMicro :movie="movie"/>
              <p class="card-text">{{ movie.overview }}</p>
            </div>
          </div>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script>
import SkeletonCard from './skeletons/SkeletonCard.vue';
import RatingMicro from './micro/RatingMicro.vue';
import ApiService from "@/services/ApiService";

export default {
  name: 'CardMain',
  components: {
    SkeletonCard,
    RatingMicro
  },
  inject: ['sharedState'],
  data() {
    return {};
  },
  methods: {
    getImageUrl(posterPath) {
      return ApiService.getImageUrl(500, posterPath)
    },
    navigateToDetail(movieId) {
      this.$router.push(`/movie/${movieId}`)
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.card {
  cursor: pointer;
  border: none;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  height: auto;
  display: block;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
}

.card:hover .overlay {
  height: 100%;
}

.card-body {
  color: white;
  padding: 20px;
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
}

.card-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}


.card-text {
  font-size: 0.9rem;
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
{
  opacity: 0;
}
</style>
