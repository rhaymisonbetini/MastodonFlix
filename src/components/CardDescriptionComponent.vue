<template>
  <div class="col-sm-12 col-md-4">
    <img src="https://variety.com/wp-content/uploads/2021/05/The-Good-Doctor-e1620069816933.jpg"
         class="image image-fluid w-100" alt="">
  </div>
  <div class="col-sm-12 col-md-8 text-white text-start">
    <h2 class="text-danger fw-bold">teste</h2>
    <p>Description</p>
  </div>
  <div class="col-sm-12 col-md-8 text-white text-end">
    <h2 class="text-danger fw-bold">teste</h2>
    <p>Description</p>
  </div>
  <div class="col-sm-12 col-md-4">
    <img src="https://variety.com/wp-content/uploads/2021/05/The-Good-Doctor-e1620069816933.jpg"
         class="image image-fluid w-100" alt="">
  </div>
</template>

<script>
export default {
  name: 'CardDescriptionComponent',
  inject: ['sharedTopTen'],
  data() {
    return {}
  }
}

</script>

<style scoped>

</style>