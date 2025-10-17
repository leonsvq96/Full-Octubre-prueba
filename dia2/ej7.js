let prompt = require('prompt-sync')();

function pow(number){
    return number ** number;


}

let numero = parseInt(prompt("Ingrese un número: "));
console.log(pow(numero));
