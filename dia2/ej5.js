let prompt = require('prompt-sync')();

function hasS(text){
    return text.toLowerCase().includes('s');
    if (text.toLowerCase().includes('s')){
        return true;
    } else {
        return false;
    }

}

let texto = prompt("Ingrese un texto: ");
console.log(hasS(texto));

