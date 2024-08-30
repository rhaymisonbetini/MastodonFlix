<template>
  <div class="col-sm-12 col-md-3 mt-5" v-for="n in 12" :key="'skeleton-' + n">
    <div class="card skeleton-card">
      <div class="skeleton-img shimmer"></div>
      <div class="skeleton-body">
        <div class="skeleton-title shimmer"></div>
        <div class="skeleton-rating shimmer"></div>
        <div class="skeleton-text shimmer"></div>
        <div class="skeleton-text shimmer"></div>
        <div class="skeleton-text shimmer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonCard'
}
</script>

<style scoped>
.skeleton-card {
  cursor: pointer;
  border: none;
  position: relative;
  overflow: hidden;
}

.skeleton-img {
  width: 100%;
  height: 200px;
  background-color: #e0e0e0;
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;
}

.skeleton-body {
  padding: 20px;
}

.skeleton-title,
.skeleton-rating,
.skeleton-text {
  background-color: #e0e0e0;
  height: 20px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
}

.skeleton-title {
  width: 70%;
}

.skeleton-rating {
  width: 50%;
}

.skeleton-text {
  width: 90%;
}

.skeleton-text:last-child {
  width: 60%;
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
