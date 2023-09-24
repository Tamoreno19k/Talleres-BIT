/**Crea un programa que calcule el área de un triángulo utilizando la fórmula:
 *  área = (base * altura) / 2. Solicita al usuario que ingrese los valores de la base y 
 * la altura usando el prompt
 */

confirm('Vamos a calcular el area de un triangulo, presiona ok para continuar:');

let 
    base = prompt('Ingrese la base tu triangulo en cm');
    altura = prompt('Ingrese la altura tu triangulo en cm');

    base = Number(base);
    altura = Number(altura);

let area = ((base * altura) /2);
console.log('El area es igual a:', area, 'cm²');

// preguntar esta, no me sirve la ultima parte con el alert alert('El area es igual a:', area, 'cm²');
