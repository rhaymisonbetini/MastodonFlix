<template>
  <div class=" row flex justify-content-center mt-5">
    <div class="col-12 text-white" v-if="user">
      <img src="@/assets/avatar.jpg" class="img-fluid w-25" alt="avatar">
      <h4>{{ user.name }}</h4>
      <h6>{{ user.email }}</h6>
      <h6>{{ user.gender }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthUserProfile",
  computed: {
    user() {
      return this.$store.getters['getUser']
    }
  }
}

</script>

<style scoped>
div, *{
  margin-top: 20px;
}

</style>