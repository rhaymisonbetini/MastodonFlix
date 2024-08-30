<template>
  <div class="col-12 mt-5 mb-5">
    <div class="card text-center text-bg-dark border-0">
      <div class="card-body">
        <img class="img-fluid mb-5 animated-img" src="../assets/undraw_happy_news_re_tsbd.svg" alt="">
        <h5 class="card-title text-danger fw-bold">MastodonFlix News</h5>
        <p class="card-text">Fique por dentro de tudo que acontece no mundo dos filmes e séries.</p>
        <div class="mb-3">
          <input type="email" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Digite seu email!">
          <button type="button" class="btn btn-light mt-5">Receber novidades</button>
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
.card {
  height: auto;
}

.animated-img {
  width: 200px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
