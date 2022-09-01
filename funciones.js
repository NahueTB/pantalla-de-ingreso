function validar(){
    let usuario ="simona"; 
    let pass = "cacarisa";
    if(document.getElementById('usr').value == usuario && document.getElementById('pass').value == pass){
        alert("Bienvenido");
    } else {
        document.getElementById('error').innerHTML = "Usuario o contrase&ntilde;a incorrecta";
        alert("Usuario o contrase\361a incorrecta");
        
    }
}

function validarRegistro(){
    if (document.getElementById('pass1').value == document.getElementById('pass2').value && document.getElementById('edad').value >= 1 && document.getElementById('captcha').value == "V4l1d4r R3g15tr0") {
        alert("Registro exitoso!");
        window.location.href = "./index.html"
    } else {
        alert("Revise los datos ingresados e intente nuevamente.")
    }
}