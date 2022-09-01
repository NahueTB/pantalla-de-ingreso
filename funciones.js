function validar(){
    let usuario ="simona"; 
    let pass = "cacarisa";
    if(document.getElementById('usr').value == usuario && document.getElementById('pass').value == pass){
        alert("bienvenido");
    }else{
        alert("Incorrecto");
    }
}

function validarRegistro(){
    if(document.getElementById('pass1').value ==  document.getElementById('pass2').value && document.getElementById('edad').value >= 1){
        alert("bien");
    }
}