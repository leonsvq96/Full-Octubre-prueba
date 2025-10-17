let prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número: "));
let numero2 = parseInt(prompt("Ingrese otro número: "));

let resultado = numero + numero2;

console.log("El resultado de la suma es: " + resultado);