---
layout: default
permalink: /editar-cadastro
button: /lembretes
link: /cancelar
btn2: /home
---

<div class="habits edit py-5">
  <div class="section-wrapper">
    <h1 class="text-center mb-0">
      Editar Cadastro
    </h1>
    <form>
      <ul class="mt-4 px-5 mx-auto">
        <li class="d-flex justify-content-end align-items-center py-1">
          <p class="mb-0 mr-2">
            Nome:
          </p>
          <div class="input-group">
            <input id="clickName" class="form-control shadow-none mr-2 rounded" required placeholder="Texto" readonly>
          </div>
          <img src="assets/images/editar.png" onclick="clickName()">
        </li>
        <li class="d-flex justify-content-end align-items-center py-1">
          <p class="mb-0 mr-2">
            E-mail:
          </p>
          <div class="input-group">
            <input id="clickEmail" class="form-control shadow-none mr-2 rounded" required placeholder="Texto" readonly>
          </div>
          <img src="assets/images/editar.png" onclick="clickEmail()">
        </li>
        <li class="d-flex justify-content-end align-items-center py-1">
          <p class="mb-0 mr-2">
            Whatsapp:
          </p>
          <div class="input-group">
            <input id="clickWhats" class="form-control shadow-none mr-2 rounded" required placeholder="Texto" readonly>
          </div>
          <img src="assets/images/editar.png" onclick="clickWhats()">
        </li>
        <li class="d-flex justify-content-end align-items-center py-1">
          <p class="mb-0 mr-2">
            Senha:
          </p>
          <div class="input-group">
            <input id="clickPassword" class="form-control shadow-none mr-2 rounded" required placeholder="Texto" readonly>
          </div>
          <img src="assets/images/editar.png" onclick="clickPassword()">
        </li>
        <li class="d-flex justify-content-end align-items-center py-1">
          <p class="mb-0 mr-2">
            Peso:
          </p>
          <div class="input-group">
            <input id="clickWeight" class="form-control shadow-none mr-2 rounded" required placeholder="Texto" readonly>
          </div>
          <img src="assets/images/editar.png" onclick="clickWeight()">
        </li>
        <li class="d-flex justify-content-end align-items-center py-1">
          <p class="mb-0 mr-2">
            Altura:
          </p>
          <div class="input-group">
            <input id="clickHeight" class="form-control shadow-none mr-2 rounded" required placeholder="Texto" readonly>
          </div>
          <img src="assets/images/editar.png" onclick="clickHeight()">
        </li>
        <li class="d-flex justify-content-end align-items-center py-1">
          <p class="mb-0 mr-2">
            Sexo:
          </p>
          <div class="input-group">
            <input id="clickSex" class="form-control shadow-none mr-2 rounded" required placeholder="Texto" readonly>
          </div>
          <img src="assets/images/editar.png" onclick="clickSex()">
        </li>
        <li class="d-flex justify-content-end align-items-center py-1">
          <p class="mb-0 mr-2">
            Idade:
          </p>
          <div class="input-group">
            <input id="clickAge" class="form-control shadow-none mr-2 rounded" required placeholder="Texto" readonly>
          </div>
          <img src="assets/images/editar.png" onclick="clickAge()">
        </li>
      </ul>
      <h2 class="text-center">
        Hora que:
      </h2>
      <ul class="mt-3 px-5 mx-auto">
        <li class="d-flex justify-content-end align-items-center py-1 ml-4">
          <p class="mb-0 mr-2">
            Acorda:
          </p>
          <div class="input-group">
            <input id="clickWake" class="form-control shadow-none mr-2 rounded" required placeholder="Texto" readonly>
          </div>
          <img src="assets/images/editar.png" onclick="clickWake()">
        </li>
        <li class="d-flex justify-content-end align-items-center py-1 ml-4">
          <p class="mb-0 mr-2">
            Almoça:
          </p>
          <div class="input-group">
            <input id="clickLunch" class="form-control shadow-none mr-2 rounded" required placeholder="Texto" readonly>
          </div>
          <img src="assets/images/editar.png" onclick="clickLunch()">
        </li>
        <li class="d-flex justify-content-end align-items-center py-1 ml-4">
          <p class="mb-0 mr-2">
            Dorme:
          </p>
          <div class="input-group">
            <input id="clickSleep" class="form-control shadow-none mr-2 rounded" required placeholder="Texto" readonly>
          </div>
          <img src="assets/images/editar.png" onclick="clickSleep()">
        </li>
      </ul>
      <div>
        <h3 class="d-flex justify-content-center my-3 pb-2">
          Enviar alerta para:
        </h3>
        <div class="d-flex justify-content-center">
          <div class="form-check form-check-inline px-2 mr-0">
            <label class="form-check-label social-radio" for="inlineRadio1">
              <input Type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" class="form-check-input">
              <img src="assets/images/whats.png" class="icons pb-2">
            </label>
          </div>
          <div class="form-check form-check-inline px-2 mr-0">
            <label class="form-check-label social-radio" for="inlineRadio2">
              <input Type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" class="form-check-input">
              <img src="assets/images/telegram.png" class="icons pb-2">
            </label>
          </div>
          <div class="form-check form-check-inline px-2 mr-0">
            <label class="form-check-label social-radio" for="inlineRadio3">
              <input Type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" class="form-check-input">
              <img src="assets/images/mail.png" class="icons pb-2">
            </label>
          </div>
        </div>
        <h4 class="d-flex justify-content-center pt-3">
          Desativar/Ativar Cadastro 
        </h4>
        <div class="d-flex justify-content-center mt-1">
          <label class="switch social-switch">
            <input type="checkbox" checked>
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </form>
    <div class="d-flex justify-content-center padding-btn mx-4 mt-3">
      <a href="{{ page.button | relative_url }}" class="form-control col-6 btn input-btn mr-1">
        Editar Alarmes
      </a>
      <input type="submit" data-toggle="modal" data-target="#successEditModal" class="form-control col-6 btn input-btn input-ok" value="Salvar"/>
    </div>
    <div class="text-center pt-3">
      <a href="{{ page.link | relative_url }}">Cancelar cadastro</a>
    </div>
    <div class="modal fade" id="successEditModal" tabindex="-1" role="dialog" aria-labelledby="successEditModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="successEditModalLabel">Sucesso!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Cadastro editado com sucesso!
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <a onclick="window.location.href='{{ page.btn2 | relative_url }}'" class="btn form-control" data-dismiss="modal">Fechar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>