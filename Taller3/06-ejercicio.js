// Calcular Entero a partir de un Binario de 4 dígitos.

// Dada una matriz de unos y ceros, convierta el valor binario equivalente a un número entero.


function binarioAEntero(binario) {
    let entero = 0;
    for (let i = 0; i < binario.length; i++) {
      entero += binario[i] * Math.pow(2, binario.length - 1 - i);
    }
    return entero;
  }
  
  const binario = [1, 0, 1, 1];
  console.log (binarioAEntero(binario));
