// Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

// 5
// 6
// 7
// 8
// 9
// 10


const
        numero1 = Number(prompt('Digita tu primer numero'));
        numero2 = Number(prompt('Digita tu segundo numero'));

    for (let i = numero1; i <= numero2; i++){
        console.log(i);

    };