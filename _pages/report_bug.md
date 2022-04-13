---
layout: modal
title: Reportar Erro!
text: Se você encontrou algum problema em nosso sistema, por favor nos comunique preenchendo os campos abaixo
image: /assets/images/modal-gota.png
permalink: /reportar-erro
---

<!-- reportar erro -->
<form action="{{ '/erro-reportado' | relative_url }}">
  <div class="form">
    <div class="d-flex flex-column align-items-center">
      <div class="input-group mb-3">
        <input class="col form-control shadow-none mr-2" required placeholder="Seu nome"/>
      </div>
      <div class="input-group mb-3">
        <input class="col form-control shadow-none mr-2" required placeholder="Seu e-mail"/>
      </div>
      <div class="input-group mb-3">
        <textarea class="col form-control shadow-none mr-2" required placeholder="Descrição do problema" rows="4"></textarea>
      </div>
      <div class="input-group mb-3">
        <input class="col form-control btn" required type="Submit" value="Enviar"/>
      </div>
    </div>
  </div>
</form>