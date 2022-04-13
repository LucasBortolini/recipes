---
layout: modal
title: Que horas você costuma acordar?
image: /assets/images/modal-5.png
text: mini texto exemplo vamos lembrar de beber água depois que você acordar.
permalink: /voce-acorda
---

<!-- modal hora que você acorda -->
<form action="{{ '/cadastro' | relative_url }}" class="d-flex justify-content-center input-group py-1">
  <div class="w-75">
    <select class="form-control my-2" id="basic-url" aria-describedby="basic-addon3">
      <option selected disabled>Acorda</option>
      <option>09:00</option>
    </select>
    <select class="form-control my-2" id="basic-url" aria-describedby="basic-addon3">
      <option selected disabled>Almoça</option>
      <option>12:00</option>
    </select>
    <select class="form-control my-2" id="basic-url" aria-describedby="basic-addon3">
      <option selected disabled>Dorme</option>
      <option>12:00</option>
    </select>
  </div>
  <div class="w-100 pt-3 mt-3">
    <input Type="Submit" class="btn btn-text" value="proximo">
  </div>
</form>