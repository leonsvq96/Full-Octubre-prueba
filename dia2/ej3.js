let prompt = require('prompt-sync')();

function tablaMultiplicar(numero) {
    console.log("Tabla de multiplicar del " + numero);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

let numero = parseInt(prompt("Ingrese un número para generar su tabla de multiplicar: "));
tablaMultiplicar(numero);



