---
layout: modal
title: Reportar Erro!
text: Se você encontrou algum problema em nosso sistema, por favor nos comunique preenchendo os campos abaixo
permalink: /reportar-erro.html
---

<div id="modal-report" class="px-5">
  <form action="{{ '/erro-reportado.html' | relative_url }}">
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
        <input Type="url" class="form-control" placeholder="Link da página com erro">
      </div>
      <div>
        <div class="input-group col-12 mb-3 px-0">
          <textarea class="col form-control shadow-none" required placeholder="Descrição do problema" rows="4"></textarea>
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