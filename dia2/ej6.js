let prompt = require('prompt-sync')();

function isOddOrEven(number) {
    if (number % 2 === 0) {
        return "El número es par";
    }
    return "El número es impar";

}

let numero = parseInt(prompt("Ingrese un número: "));
console.log(isOddOrEven(numero));