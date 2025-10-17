function imprimirTrianguloIzquierdo(altura) {
  // El bucle exterior itera a través de cada fila
  for (let i = 1; i <= altura; i++) {
    let fila = '';
    // El bucle interior construye la cadena de caracteres para cada fila
    for (let j = 0; j < i; j++) {
      fila += '*';
    }
    // Imprime la fila completa en la consola
    console.log(fila);
  }
}

// Llama a la función para imprimir un triángulo de altura 5
imprimirTrianguloIzquierdo(5);
