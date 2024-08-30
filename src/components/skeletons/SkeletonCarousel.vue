<template>
  <div id="carouselSkeleton" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" aria-label="Slide 2"></button>
      <button type="button" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active skeleton-slide">
        <div class="skeleton-img shimmer"></div>
        <div class="carousel-caption d-none d-md-block">
          <div class="skeleton-title shimmer"></div>
          <div class="skeleton-text shimmer"></div>
        </div>
      </div>
      <div class="carousel-item skeleton-slide">
        <div class="skeleton-img shimmer"></div>
        <div class="carousel-caption d-none d-md-block">
          <div class="skeleton-title shimmer"></div>
          <div class="skeleton-text shimmer"></div>
        </div>
      </div>
      <div class="carousel-item skeleton-slide">
        <div class="skeleton-img shimmer"></div>
        <div class="carousel-caption d-none d-md-block">
          <div class="skeleton-title shimmer"></div>
          <div class="skeleton-text shimmer"></div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CarouselSkeleton'
}
</script>

<style scoped>
.carousel-item {
  position: relative;
  overflow: hidden;
}

.skeleton-img {
  width: 100%;
  height: 400px;
  background-color: #e0e0e0;
  position: relative;
  overflow: hidden;
}

.skeleton-title,
.skeleton-text {
  background-color: #e0e0e0;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
}

.skeleton-title {
  width: 50%;
  height: 24px;
  margin-bottom: 15px;
}

.skeleton-text {
  width: 70%;
  height: 16px;
}

.shimmer::before {
  content: '';
  position: absolute;
  top: 0;
  left: -150%;
  height: 100%;
  width: 150%;
  background: linear-gradient(to right, rgba(224, 224, 224, 0) 0%, rgba(240, 240, 240, 0.5) 50%, rgba(224, 224, 224, 0) 100%);
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  100% {
    left: 100%;
  }
}
</style>
