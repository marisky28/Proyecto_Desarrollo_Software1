function ingresar(){
	
	var correo="danymariscalg@gmail.com";
	var contraseña=1234;
	

	if(document.form.correo.value==correo &&document.form.password.value==contraseña)
	{
	window.location="pagina1.html";
	}
	else{
		alert("El correo electrónico o la contraseña son incorrectos.");
	}
}