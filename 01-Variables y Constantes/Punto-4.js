/**Usa el prompt para tomar dos números como argumentos y utilice una variable para almacenar 
 * la suma de estos números. Luego, muestra el resultado en la consola.
 */

let
    numero1 = prompt('Digita el numero que quieras');
    numero2 = prompt('Digita otro numero cualquiera');

numero1 = Number(numero1);
numero2 = Number(numero2);

let suma = (numero1 + numero2);

console.log(suma);
