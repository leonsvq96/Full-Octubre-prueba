let prompt = require('prompt-sync')();

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}   
let base = parseFloat(prompt("Ingrese la base del triángulo: "));
let altura = parseFloat(prompt("Ingrese la altura del triángulo: "));
console.log("El área del triángulo es: " + areaTriangulo(base, altura));

