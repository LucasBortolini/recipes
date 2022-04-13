---
layout: modal
title: Título exemplo
text: Lorem Ipsum is simply dummy text of the printing and typesetting
image: /assets/images/modal-gota.png
permalink: /cadastro
---

<!-- modal (cadastro) -->
<form action="{{ '/sucesso-cadastro' | relative_url }}">
  <div class="form">
    <div class="d-flex flex-column align-items-center">
      <div class="input-group mb-1">
        <input class="col form-control shadow-none mr-2" required placeholder="Seu nome"/>
      </div>
      <div class="input-group mb-1">
        <input class="col form-control shadow-none mr-2" required placeholder="Seu e-mail"/>
      </div>
      <div class="input-group mb-1">
        <input class="col form-control shadow-none mr-2" required placeholder="Seu whatsapp"/>
      </div>
      <div class="input-group mb-2">
        <input class="col form-control shadow-none mr-2" required placeholder="Crie uma senha"/>
      </div>
      <div class="input-group mb-1">
        <input data-toggle="modal" data-target="#exampleModal" class="col form-control btn" required type="Submit" value="Cadastrar"/>
      </div>
      <div class="input-group mb-3 justify-content-center">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Li e aceito os <a href="#" class="bg">termos de uso</a>.
        </label>
      </div>
    </div>
  </div>
</form>