var datosUsuarios = {
    usuario: '',
    password: '',
    nombre: '',
    apellido: '',
    edad: ''
}


function validar() {
    let usr = document.getElementById('usr').value;
    let pass = document.getElementById('pass-login').value;

    let usrComp = datosUsuarios.usuario;
    let passComp = datosUsuarios.password;

    if (usr == usrComp && pass == passComp) {
        alert("Bienvenido");
    } else {
        document.getElementById('error').innerHTML = "Usuario o contrase&ntilde;a incorrecta";
    }
}

function validarRegistro() {
    let EDAD_MINIMA = 1;

    let usr = document.getElementById('user').value;
    let pass1 = document.getElementById('pass-register').value;
    let pass2 = document.getElementById('pass2-register').value;
    let edad = document.getElementById('edad').value;
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let mail = document.getElementById('mail').value;
    let lblcaptcha = document.getElementById('captcha').value;

    let captcha = "V4l1d4r R3g15tr0";

    if ((pass1 == pass2) && (edad >= EDAD_MINIMA) && (lblcaptcha == captcha)) {
        datosUsuarios.usuario = usr;
        datosUsuarios.password = pass1;
        datosUsuarios.nombre = nombre;
        datosUsuarios.apellido = apellido;
        datosUsuarios.mail = mail;
        datosUsuarios.edad = edad;
        alert("biena hi");
    } else {
        alert("Revise los datos ingresados e intente nuevamente.");
    }
}