let prompt = require('prompt-sync')();

function AreaRectangulo(base, altura){
    return base * altura;
}

let base = parseFloat(prompt("Ingrese la base del rectángulo: "));
let altura = parseFloat(prompt("Ingrese la altura del rectángulo: "));
console.log("El área del rectángulo es: " + AreaRectangulo(base, altura));  