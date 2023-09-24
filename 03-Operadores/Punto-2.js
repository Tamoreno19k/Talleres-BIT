//Declara una variable numérica. Usa el prompt para pedir al usuario que ingrese un valor numérico. 
//Utiliza operadores de comparación para determinar si son iguales o si una es mayor que la otra.
// Muestra los resultados en la consola. 

let   
    miNumero = 924;
    numero = prompt('Ingrese un numero');

    numero = Number(numero);

let iguales = (miNumero == numero)
        console.log('Los numeros son iguales?:', iguales);

    menor = (miNumero < numero) 
        console.log(`Es ${miNumero} menor que ${numero}?': `, menor);

    mayor = (miNumero > numero) 
        console.log(`Es ${miNumero} es mayor que ${numero}?:`, mayor);

    diferente = (miNumero != numero) 
        console.log(`Es ${miNumero} es diferente a ${numero}?:`, diferente );

