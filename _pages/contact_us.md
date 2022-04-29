---
layout: modal
title: Fale conosco
permalink: /fale-conosco.html
---

<p class="mt-2 mb-4">
  Loren Ipsun fale conosco texto exemplo
</p>
<div class="mt-3 px-5">
  <form action="{{ '/fale-conosco-erro.html' | relative_url }}">
    <div class="form">
      <div class="row">
        <div class="input-group col-6 mb-3 px-0">
          <input type="text" class="col form-control shadow-none ml-3 mr-2" required placeholder="Nome"/>
        </div>
        <div class="input-group col-6 mb-3 px-0">
          <input type="email" class="col form-control shadow-none mr-3" required placeholder="E-mail"/>
        </div>
      </div>
      <div class="input-group pb-2">
        <input Type="url" class="form-control" placeholder="Assunto">
      </div>
      <div>
        <div class="input-group col-12 mb-3 px-0">
          <textarea class="col form-control shadow-none" required placeholder="Mensagem" rows="4"></textarea>
        </div>
        <div class="d-flex justify-content-end">
          <div class="input-group mb-3 px-0 w-25">
            <input type="Submit" class="col form-control btn" required value="Enviar"/>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>