

$(document).ready (function (){

	//validar el usuario

	$("#user").blur (function (e){

		// determina si el método ha sido llamado
		e.preventDefault(); 
		//declaro las variables con las id
		let usuario = &("#user").val();
		let error = $("erruser");

		//error campo vacio
		if (usuario == ""){
			error.html ("El campo usuario no puede estar vacío");
			$("#user").addClass("bg-danger");

		}else{
			//error de caracteres
			if (usuario.length < 5 && usuario.length > 12){
				error.html ("El usuario debe tener entre 5 y 12 caracteres");
				$("#user").addClass("bg-danger");

			}else{
				//elimina el error si esta todo correcto
				error.html("");
				$("#user").removeClass("bg-danger");
			}
		}
	});
	
	//valida la contraseña
	$("#password").blur (function (e){

		e.preventDefault();

		let password = &("#password").val();
		let error = $("errpassword");

		if (password == ""){
			error.html ("El campo contraseña no puede estar vacío");
			$("#password").addClass("bg-danger");

		}else{

			if (password.length < 7 && password.length > 12){
				error.html ("la contraseña debe tener entre 7 y 12 caracteres");
				$("#password").addClass("bg-danger");

			}else{

				error.html("");
				$("#password").removeClass("bg-danger");
			}
		}
	});

	//valida el nombre

	$("#name").blur (function (e){
		e.preventDefault();
		let name = &("#name").val();
		let error = $("#errname");

		if (name == ""){
			error.html("El campo nombre no puede estar vacío");
			$("#name").addClass("bg-danger");

		}else{
			error.html("#name").removeClass("bg-danger");
		}

	});

	//valida el email

	$("#email").blur (function (e){
		e.preventDefault();

		let email = $("#email"). var();
		let error = $("#erremail");

		if (email == ""){
			error.html ("El campo email no puede estar vacío");
			$("#email").addClass("bg-danger");

		}else{
			if(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)){
				error.html ("email incorrecto");
				$("#email").addClass("bg-danger");

			}else{

				error.html ("");
				$("#email").removeClass("bg-danger");
			}

		}
	});

	//valida el codigo postal

	$("#zip_code").blur (function (e){
		e.preventDefault();

		let zipcode = $("#zip_code"). val();
		let error = $("#errzip");

		if (zipcode == ""){
			error.html("El campo código postal no puede estar vacío");
			$("#zip_code").addClass("bg-danger");

		}else{
			error.html ("");
			$("#zip_code").removeClass("bg-danger");

		}

	});

	//valida el pais

	&("#country").blur (function (e){
		e.preventDefault();

		let country = $("#country").val();
		let error = $("#errcountry");

		if (country == "------"){
			error.html("debes elegir tu país");
			$("#country").addClass("bg-danger");

		}else{
			error.html("");
			$("#country").removeClass("bg-danger");
		}

	});

	//checkbox lenguas

	$("#lenguage1").blur (function (e){
		e.preventDefault();

		let lenguage1 = $("#lenguage1").prop("checked");
		let lenguage2 = $("#lenguage2").prop("checked");
		let error = $("#errlenguage");

		if (lenguage1 && lenguage1){
			error.html("sólo puedes seleccionar una opción");

		}else{
			if (!lenguage1 && !lenguage2){
				error.html("no debe quedar sin seleccionar ninguna opción");

			}else{
				if (lenguage1 || lenguage2){
					error.html("");
				}
			}
		}


	});


	$("#lenguage2").blur (function (e){
		e.preventDefault();

		let lenguage1 = $("#lenguage1").prop("checked");
		let lenguage2 = $("#lenguage2").prop("checked");
		let error = $("#errlenguage");

		if (lenguage1 && lenguage1){
			error.html("sólo puedes seleccionar una opción");

		}else{
			if (!lenguage1 && !lenguage2){
				error.html("no debe quedar sin seleccionar ninguna opción");

			}else{
				if (lenguage1 || lenguage2){
					error.html("");
				}
			}
		}

	});



});