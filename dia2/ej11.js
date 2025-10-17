let prompt = require('prompt-sync')();

function power(base, exponent) {
    return Math.pow(base, exponent);
}
let base = parseFloat(prompt("Ingrese la base: "));
let exponent = parseFloat(prompt("Ingrese el exponente: "));
console.log(base + " elevado a la " + exponent + " es: " + power(base, exponent));

