---
layout: default
permalink: /cadastre-se
---

<!-- tela de código de verificação -->
<div class="register habits">
  <div class="section-wrapper">
    <div class="pb-5">
      <div class="pt-5 px-5">
        <h1>Você precisa de 3,215 litros de líquido por dia</h1>
      </div>
      <div class="pt-2 pb-4">
        <div class="d-flex justify-content-center px-0 pb-0">
          <img src="assets/images/copoagua.png">
        </div>
        <div class="d-flex align-items-center justify-content-center px-0">
          <p class="mb-0">Isso equivale a cerca de 11 copos d'água</p>
        </div>
      </div>
      <div>
        <h2 class="px-3 pb-3">
          Montamos um programa diário de hidratação para enviar no seu whatsapp.
          <br>
          Você pode visualizar e editar seu programa após realizar seu cadastro logo abaixo.
        </h2>
        <h2 class="px-2 pb-4">
          Para visualizar e editar o seu programa de hidratação, digite o código que enviamos no seu email.
          <br>
          Caso você não tenha recebido a mensagem, verifique sua caixa de spam ou <a href="#">clique aqui</a> para reenviar o código.
        </h2>
      </div>
      <form action="{{ '/cadastre-se-2' | relative_url }}">
        <input type="text" name="code" id="code" placeholder="Digite o Código" class="form-control code-field w-25 rounded mb-3 mt-4" required>
        <div class="input-group input-register r-btn px-4 mt-3">
          <input type="submit" class="form-control col btn" value="Cadastrar"/>
        </div>
        <a href="#" class="d-flex justify-content-center mt-3">Voltar</a>
      </form>
    </div>
  </div>
</div>