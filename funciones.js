var datosUsuarios = {
    usuario: '',
    password: '',
    nombre: '',
    apellido: '',
    edad: '',
    profesion: ''
}


function validar() {
    let usr = document.getElementById('usr').value;
    let pass = document.getElementById('pass').value;

    if (usr == datosUsuarios.usuario && pass == datosUsuarios.password) {
        alert("Bienvenido");
    } else {
        document.getElementById('error').innerHTML = "Usuario o contrase&ntilde;a incorrecta";
    }
}

function validarRegistro() {
    let EDAD_MINIMA = 1;

    let usr = document.getElementById('user').value;
    let pass1 = document.getElementById('pass').value;
    let pass2 = document.getElementById('pass2').value;
    let edad = document.getElementById('edad').value;
    let lblcaptcha = document.getElementById('captcha').value;

    let captcha = "V4l1d4r R3g15tr0";

    if (pass1 == pass2 && edad >= EDAD_MINIMA && lblcaptcha == captcha) {
        datosUsuarios.usuario = 
    } else {
        alert("Revise los datos ingresados e intente nuevamente.");
    }
}