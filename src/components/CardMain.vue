<template>
  <div>
    <TransitionGroup name="fade" tag="div" class="row" >
      <SkeletonCard v-if="sharedState.loading"/>
      <div v-else class="col-sm-12 col-md-3 mt-5" v-for="movie in sharedState.movies" :key="movie.id">
        <div class="card">
          <img :src="getImageUrl(movie.poster_path)" class="card-img-top" :alt="movie.title">
          <div class="overlay">
            <div class="card-body">
              <div class="card-title">{{ movie.title }}</div>
              <div class="rating">
                <span v-html="getStars(movie.vote_average)"></span>
              </div>
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

export default {
  name: 'CardMain',
  components: {
    SkeletonCard
  },
  inject: ['sharedState'],
  data() {
    return {
    };
  },
  methods: {
    getImageUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
    getStars(voteAverage) {
      const fullStars = Math.floor(voteAverage / 2);
      const hasHalfStar = voteAverage % 2 >= 1;
      const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

      const starsHtml = '★'.repeat(fullStars)
          .split('')
          .map(star => '<span class="star full-star">' + star + '</span>')
          .join('');

      const halfStarHtml = hasHalfStar ? '<span class="star half-star">★</span>' : '';

      const emptyStarsHtml = '☆'.repeat(emptyStars)
          .split('')
          .map(star => '<span class="star empty-star">' + star + '</span>')
          .join('');

      return starsHtml + halfStarHtml + emptyStarsHtml;
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

.rating span {
  font-size: 1.5rem;
  color: #f39c12;
}

.card-text {
  font-size: 0.9rem;
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.rating .star {
  font-size: 1.5rem;
  display: inline-block;
  position: relative;
  color: #f39c12;
}

.rating .star.half-star::before {
  content: '★';
  position: absolute;
  left: 0;
  width: 50%;
  overflow: hidden;
  color: #f39c12;
}

.rating .star.empty-star {
  color: #ccc;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
{
  opacity: 0;
}
</style>
