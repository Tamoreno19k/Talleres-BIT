// Amplia la funcionalidad de la función suma()

// La siguiente función es capaz de sumar dos números. ¿qué cambios deben hacerse a la misma para que sea capaz de sumar 2 o más números?

function suma(...Numerosinf) {
    let total = 0;
    for (const numero of Numerosinf) {
        total += numero;       
    }
    
    return  total;
}

console.log(suma( 3, 6, 5, 6, 7, 1, 10, 5 ));

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
