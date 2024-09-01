<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand text-danger fw-bold" href="#">Mastodon Flix</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/top-ten">Top 10</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink v-if="!user && !user?.token" class="nav-link active" to="/register">Register</RouterLink>
            <RouterLink v-else class="nav-link active" to="/auth">Profile</RouterLink>
          </li>
          <li class="nav-item" v-if="user && user?.token">
            <RouterLink class="nav-link active" to="/" @click="doLogout()">Logout</RouterLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Busar pelo nome..." aria-label="Search">
          <button type="button" class="btn btn-light">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch('fetchUser');
  },
  methods: {
    doLogout() {
      this.$store.dispatch('logout');
    }
  },
  computed: {
    user() {
      return this.$store.getters['getUser']
    }
  }
}

</script>

<style scoped>
li:hover {
  background-color: var(--bs-primary-border-subtle);
  border-radius: 8px;
}

li, a {
  cursor: pointer;
}
</style>