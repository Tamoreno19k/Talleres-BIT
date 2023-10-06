// Escribe un programa que le pida al usuario ingresar un número.

// Si el número es múltiplo de 3 debe imprimir en la consola bing.
// Si el número es múltiplo de 5 debe imprimir en la consola bong.
// Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
// Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

let numeroY = Number(prompt('Digita un numero'));

switch( true ) {
    case numeroY % 5 == 0 && numeroY % 3 == 0:
        console.log('bingbong');
        break;
    case numeroY % 3 == 0:
        console.log('bing');
        break;
    case numeroY % 5 == 0:
        console.log('bong');
        break;
    default: 
        console.log(numeroY);
}