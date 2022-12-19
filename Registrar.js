function registrar(){

const correo = document.getElementById.('correo')
const password1 = document.getElementById.('password1')
const password2 = document.getElementById.('password2')
const error = document.getElementById.('error')


	if (password1.value == password2.value){
		window.location="pagina.html";
	}
	else{
		alert("La contraseña no coincide");
	}

}