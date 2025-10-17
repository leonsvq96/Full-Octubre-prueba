function dibujarCuadrado(lados) {
    let result = '';
  
    // linea de arriba
    for (let i = 0; i < lados; i++) {
      result += '* ';
    }
    
    result += '\n';
  
    // cuerpo del cuadrado
    for (let i = 0; i < lados - 2; i++) {
      result += '*';
      for (let j = 0; j < lados + lados - 3; j++) {
        result += ' ';
      }
      result += '*\n';
    }
  
    // linea de abajo
    for (let i = 0; i < lados; i++) {
      result += '* ';
    }
    
    return result;
  }

  console.log(dibujarCuadrado(5));