function validar(){
    let usuario ="simona"; 
    let pass = "cacarisa";
    if(document.getElementById('usr').value == usuario && document.getElementById('pass').value == pass){
        alert("bienvenido");
    }else{
        alert("Incorrecto");
    }
}