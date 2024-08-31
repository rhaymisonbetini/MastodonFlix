<template>
  <div>
    <TransitionGroup name="fade" tag="div" class="row" mode="out-in">
      <SkeletonCarousel v-if="!banners || banners.length === 0"/>
      <div v-else id="carouselMovies" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        <div class="carousel-indicators">
          <button
              v-for="(banner, index) in banners.slice(0, 4)"
              :key="index"
              type="button"
              :data-bs-target="'#'+index"
              :data-bs-slide-to="index"
              :class="{ active: index === 0 }"
              :aria-label="'Slide ' + (index + 1)"
              :aria-current="index === 0 ? 'true' : undefined"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
              v-for="(banner, index) in banners.slice(0, 4)"
              :key="banner.id"
              :class="['carousel-item', { active: index === 0 }]"
          >
            <img
                :src="'https://image.tmdb.org/t/p/w1280' + banner.backdrop_path"
                class="d-block w-100"
                :alt="banner.title"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ banner.title }}</h5>
              <p>{{ banner.overview }}</p>
            </div>
          </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script>
import SkeletonCarousel from "@/components/skeletons/SkeletonCarousel.vue";

export default {
  name: 'CarouselMain',
  components: {
    SkeletonCarousel
  },
  data() {
    return {}
  },
  computed: {
    banners() {
      return this.$store.getters['getTopTenMovies']
    }
  },
  methods: {}
}

</script>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.01s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>