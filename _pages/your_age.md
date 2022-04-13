---
layout: modal
title: Qual a sua idade?
image: /assets/images/modal-gota.png
text: Indique abaixo sua data de nascimento.
permalink: /sua-idade
---

<!-- modal sua idade -->
<form action="{{ '/voce-acorda' | relative_url }}" class="justify-content-around pt-2 mt-3 w-100">
  <div class="row no-gutters text-center">
    <div class="col-4 px-1">
      <label for="basic-url" class="age-title font-weight-bold">Dia</label>
      <div class="input-group mb-3">
        <select class="form-control" name="oq o back pedir" id="basic-url" aria-describedby="basic-addon3">
          <option value="oq o back pedir">01</option>
        </select>
      </div>
    </div>
    <div class="col-4 px-1">
      <label for="basic-url" class="age-title font-weight-bold">Mês</label>
      <div class="input-group mb-3">
        <select class="form-control" id="basic-url" aria-describedby="basic-addon3">
          <option>01</option>
        </select>
      </div>
    </div>
    <div class="col-4 px-1">
      <label for="basic-url" class="age-title font-weight-bold">Ano</label>
      <div class="input-group mb-3">
        <select class="form-control" id="basic-url" aria-describedby="basic-addon3">
          <option>1980</option>
        </select>
      </div>
    </div>
  </div>
  <div class="my-3 pt-5 mt-5 mb-0">
    <input Type="Submit" class="btn btn-text" value="próximo">
  </div>
</form>