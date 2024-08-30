<template>
  <div class="rating">
    <span v-html="getStars(movie.vote_average)"></span>
  </div>
</template>

<script>
import startCounter from '@/helpers/StartCounter.js'

export default {
  name: "RatingMicro",
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  methods: {
    getStars(voteAverage) {
      return startCounter(voteAverage)
    }
  }
}

</script>

<style scoped>
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

.rating span {
  font-size: 1.5rem;
  color: #f39c12;
}

</style>