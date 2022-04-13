---
layout: default
permalink: /cancelar
link: /cancelado
link-2: /editar-cadastro
---

<!-- tela de cancelamento de cadastro -->
<div class="habits cancel text-center py-5">
  <h1 class="text-center px-5">
    Tem certeza que deseja
    <br>
    cancelar seu cadastro?
  </h1>
  <img src="assets/images/temcerteza.png" class="py-3">
  <div class="text-center pt-2">
    <a href="{{ page.link | relative_url }}">Sim! Desejo cancelar</a>
  </div>
  <div class="text-center pt-3">
    <a href="{{ page.link-2 | relative_url }}" class="text-white">Voltar</a>
  </div>
</div>