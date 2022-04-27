---
layout: modal
title: Descadastrar 
permalink: /cancelar
---

<p class="text-center">
  Para se descadastrar do site e cancelar o envio de receitas e promoções, preencha os campos abaixo:
</p>
<div class="d-flex justify-content-center">
  <form class="input-group row no-gutters gx-1 d-flex justify-content-between" action="{{ '/cancelado' | relative_url }}">
    <div class="form-group col-6 col-lg-3 pr-2">
      <input class="form-control indicate-form shadow-none" required placeholder="Nome">
    </div>
    <div class="form-group col-6 col-lg-3 pr-2">
      <input class="form-control indicate-form shadow-none" required placeholder="E-mail">
    </div>
    <div class="form-group col-6 col-lg-3 pr-2">
      <input class="form-control indicate-form shadow-none" required placeholder="Telefone">
    </div>
    <div class="form-group col-6 col-lg-2 pr-2 pr-lg-0">
      <input type="submit" class="btn form-control indicate-btn py-1" value="Descadastrar"/>
    </div>
  </form>
</div>