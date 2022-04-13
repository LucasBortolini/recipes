---
layout: modal
title: Esqueci minha senha
text: Digite o email cadastrado no sistema para enviarmos uma nova senha provisória
image: /assets/images/modal-gota.png
permalink: /esqueci-minha-senha
---

<!-- modal (esqueci minha senha) -->
<form action="{{ '/esqueci-minha-senha-2' | relative_url }}">
  <div class="form">
    <div class="d-flex flex-column align-items-center">
      <div class="input-group mb-3">
        <input class="col form-control shadow-none mr-2" required placeholder="Digite seu e-mail"/>
      </div>
      <div class="input-group mb-3">
        <input class="col form-control btn" required type="Submit" value="Enviar"/>
      </div>
    </div>
  </div>
</form>