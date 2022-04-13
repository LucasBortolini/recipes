---
layout: modal
title: Qual a sua altura?
image: /assets/images/modal-gota.png
text: Mini texto exemplo precisamos saber o peso exemplo texto para calcular
permalink: /sua-altura
---

<!-- modal sua altura -->
<form action="{{ '/sexo-biologico' | relative_url }}" class="d-flex justify-content-center input-group py-3 mt-3">
  <div class="w-75">
    <select class="form-control" id="basic-url" aria-describedby="basic-addon3">
      <option selected disabled>Selecione</option>
      <option>Leve</option>
    </select>
  </div>
  <div class="d-flex flex-column justify-content-end align-items-center h-100 w-100 py-3 mt-3">
    <input Type="Submit" class="btn btn-text" value="próximo">
  </div>
</form>