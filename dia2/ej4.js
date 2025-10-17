let prompt = require('prompt-sync')();

function saludar(nombre) {
    console.log("Hola " + nombre);    
}


function procesarEntradaUsuario(callback) {
    let nombre = prompt("Por favor ingresa tu nombre.");
    callback(nombre);
}


procesarEntradaUsuario(saludar);

