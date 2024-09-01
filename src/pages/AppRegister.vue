<template>
  <div class=" row flex justify-content-center mt-5">
    <div class="col-sm-12 col-md-7 mt-5">
      <label for="name" class="text-white">Name</label>
      <input v-model="form.name" type="text" class="form form-control" placeholder="Your name here">
    </div>
    <div class="col-sm-12 col-md-7 mt-5">
      <label for="name" class="text-white">Email</label>
      <input v-model="form.email" type="text" class="form form-control" placeholder="Your email here">
    </div>
    <div class="col-sm-12 col-md-7 mt-5">
      <label for="name" class="text-white">Gender</label>
      <select v-model="form.gender" class="form-control">
        <option value="male" selected>Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div class="col-sm-12 col-md-7 mt-5">
      <button class="btn btn-primary" style="width: 100%" @click="registerUser">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppRegister",
  data() {
    return {
      form: {
        name: "",
        email: "",
        gender: ""
      }
    }
  },
  methods: {
    registerUser() {
      if (this.$store.dispatch('login', this.form)) {
        this.$router.push({name: 'auth-user'});
      }
    }
  }
}

</script>

<style scoped>

</style>