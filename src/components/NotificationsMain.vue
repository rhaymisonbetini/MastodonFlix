<template>
  <div class="col-12 mt-5 mb-5">
    <div class="card text-center text-bg-dark">
      <div class="card-body">
        <img class="img-fluid mb-5" src="../assets/undraw_happy_news_re_tsbd.svg" alt="">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <div class="mb-3">
          <input type="email" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="name@example.com">
          <button  type="button" class="btn btn-light mt-5">Receber novidades</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'NotificationsMain',
}
</script>

<style scoped>
  .card{
    height: auto;
  }

  img {
    width: 200px;
  }
</style>