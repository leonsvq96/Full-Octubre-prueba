let prompt = require('prompt-sync')();

function areaCirculo(radio){
    return Math.PI * Math.pow(radio, 2);
}

let radio = parseFloat(prompt("Ingrese el radio del círculo: "));
console.log("El área del círculo es: " + areaCirculo(radio));
