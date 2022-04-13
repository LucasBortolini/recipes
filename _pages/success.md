---
layout: default
permalink: /sucesso
button: /editar-cadastro
btn: /home
link: /home
---

<div class="success text-center py-5">
  <h1 class="text-center px-5">
    Cadastro Realizado com Sucesso!
  </h1>
  <img src="assets/images/modal-8.png" class="py-3 success-image">
  <div>
    <h1 class="py-2">
      Para ativar o envio dos lembretes para o seu WhatsApp, clique no ícone abaixo e escreva "oi". 
    </h1>
  </div>
  <div class="pb-2">
    <a href="#"><img src="assets/images/whats.png" class="whats-sucsess"></a>
  </div>
  <h1 class="py-2">
    Pronto!
    <br>
    Lembrando que você pode desativar ou alterar os horários dos envios quando quiser, aqui mesmo pelo site.
  </h1>
  <div class="padding-btn d-flex justify-content-center mx-4 mt-5">
    <a href="{{ page.button | relative_url }}" class="form-control col-6 btn input-btn mr-1">
      Editar Cadastro
    </a>
    <input href="{{ page.btn | relative_url }}" type="button" class="form-control col-6 btn input-btn input-ok" value="voltar"/>
  </div>
  <div class="text-center pt-2">
    <a href="{{ page.link | relative_url }}">Voltar para a página inicial</a>
  </div>
</div>