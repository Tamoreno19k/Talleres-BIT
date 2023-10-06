// Crea un programa que solicite al usuario dos números usando el prompt y realice operaciones de
 // suma, resta, multiplicación y división con estos números. Muestra los resultados en la consola para 
 // cada una de estas operaciones.


 let    number1 = prompt('Inserte su primer numero (El que usted quiera).')
        number2 = prompt('Inserte su segundo numero (El que usted quiera).')

        number1 = Number(number1);
        number2 = Number(number2);

console. log(`Resultados en:
         Suma: ${number1 + number2}
         Resta: ${number1 - number2}
         Multiplicacion: ${number1 * number2}
         Division: ${number1 / number2}`);