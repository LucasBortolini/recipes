---
layout: default
permalink: /cadastre-se-2
---

<!-- cadastro (tela com email, nome e senha) -->
<div class="register-2">
	<div class="section-wrapper">
		<h1 class="pt-5 pb-3">
			Cadastre-se
		</h1>
	</div>
	<div class="d-flex justify-content-center pb-4">
		<img src="assets/images/modal-gota.png" class="mr-5">
	</div>
	<div>
		<p>
			Para você visualizar seu programa de hidratação e poder atualizar seus dados, cadastre-se e crie uma senha.
		</p>
		<p>
			É importante que você mantenha suas informações sobre peso e rotina sempre
			<br>
			atualizadas no sistema, para que o seu roteiro de hidratação permaneça correto. 
		</p>
	</div>
	<form action="{{ '/lembretes' | relative_url }}">
		<div class="container input-form">
			<div class="row row-cols-2 row-cols-sm-4 text-center">
				<div class="input-group col-4 px-1 py-2">
					<input name="name" class="form-control shadow-none rounded input-register" placeholder="Seu Nome" required pattern="([a-zA-Z]+\s){1,}([a-zA-Z]+)" oninvalid="setCustomValidity('Insira o nome completo.')">
				</div>
				<div class="input-group col-4 px-1 py-2">
					<input name="email" type="email" class="form-control shadow-none rounded input-register" required placeholder="Seu E-mail" oninvalid="setCustomValidity('Insira um e-mail válido.')">
				</div>
				<div class="input-group col-4 px-1 py-2">
					<input class="form-control shadow-none rounded input-register" minlength="6" required placeholder="Crie uma senha">
				</div>
			</div>
		</div>
		<div class="d-flex justify-content-center">
			<div class="text-white pt-3 pb-2 px-5 ml-3 w-auto">
				<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" required>
				<label class="form-check-label" for="flexCheckDefault">
					Li e aceito os <a href="#" class="bg">termos de uso</a>.
				</label>
			</div>
		</div>
		<div class="input-group input-register r-btn px-4 mt-3">
      <input type="submit" class="w-btn form-control btn" value="Cadastrar"/>
    </div>
	</form>
	<a href="#" class="d-flex justify-content-center mt-3 pb-5">
		Voltar
	</a>
</div>