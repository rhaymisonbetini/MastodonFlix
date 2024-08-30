<template>
  <div class="container mt-3">
    <div class="row">
      <NavBarMain/>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<script>

import NavBarMain from "@/components/NavBarMain.vue";
export default {
  name: 'App',
  components: {
    NavBarMain,
  },
}
</script>

<style>
body {
  background-color: #212529 !important;
}
</style>