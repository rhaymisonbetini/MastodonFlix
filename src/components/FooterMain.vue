<template>
  <div class="col-12">
    <footer class="bg-dark text-white p-5 pb-5">
      <div class="container">
        <div class="row flex">
          <!-- About Section -->
          <div class="col-md-4 mb-4 text-center">
            <h5>Sobre nós</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-white">FAQs</a></li>
              <li><a href="#" class="text-white">Fale Conosco</a></li>
              <li><a href="#" class="text-white">Políticas de Privacidade</a></li>
            </ul>
          </div>
          <!-- Contact Section -->
          <div class="col-md-4 mb-4  text-center">
            <h5>Contato</h5>
            <ul class="list-unstyled">
              <li><a href="tel:+5511999999999" class="text-white"><i class="fas fa-phone"></i> +55 11 99999-9999</a>
              </li>
              <li><a href="mailto:contato@meusite.com" class="text-white"><i class="fas fa-envelope"></i>
                contato@meusite.com</a></li>
            </ul>
          </div>
          <!-- Social Media Section -->
          <div class="col-md-4 mb-4  text-center">
            <h5>Redes Sociais</h5>
            <a href="#" class="text-white me-3"><i class="fab fa-whatsapp fa-lg"></i></a>
            <a href="#" class="text-white me-3"><i class="fab fa-twitter fa-lg"></i></a>
            <a href="#" class="text-white"><i class="fab fa-instagram fa-lg"></i></a>
          </div>
        </div>
        <!-- Copyright -->
        <div class="row mt-3">
          <div class="col text-center">
            <p class="mb-0">&copy; 2024 MeuSite. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterMain',
}

</script>

<style scoped>
footer {
  background-color: #007bff;
  border-radius: 6px 6px 0 0;
}

footer a:hover {
  text-decoration: underline;
}

a {
  text-decoration: none;
}

</style>