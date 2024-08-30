<template>
  <div class="container mt-3">
    <div class="row">
      <NavBarMain/>
    </div>
    <RouterView></RouterView>
  </div>
  <div class="scroll-ball" @click="scrollToUp()" >
    <img src="@/assets/up-arrow-svgrepo-com.svg" class="img img-fluid" alt="up" >
  </div>
</template>

<script>

import NavBarMain from "@/components/NavBarMain.vue";
export default {
  name: 'App',
  components: {
    NavBarMain,
  },
  methods:{
    scrollToUp() {
      window.scrollTo({ top: 0, behavior:'smooth' });  // scroll to top smoothly
    }
  }
}
</script>

<style>
body {
  background-color: #212529 !important;
}

.scroll-ball{
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: red;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}
</style>