<template>
  <div class="review-list">
    <div v-for="(review, index) in reviews" :key="index" class="review-item mb-4 p-3 rounded shadow-sm">
      <div class="d-flex align-items-center">
        <img src="@/assets/avatar.jpg" alt="User photo" class="user-photo rounded-circle me-3">
        <h5 class="mb-0">{{ review.author }}</h5>
      </div>
      <p class="mt-2" v-html="review.content "></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewComponent',
  props: {
    reviews: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style scoped>
.review-list {
  display: flex;
  flex-direction: column;
}

.user-photo {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
</style>
