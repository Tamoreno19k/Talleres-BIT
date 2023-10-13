/**Declara un lista que contenga diferentes tipos de datos (números, cadenas, booleanos, objetos, etc.).
 *  Cuenta cuantos valore contiene la lista e informa lanzando un alert()
 */

let datos = ['Tania Medina', 24, tieneNovio = false, NaN, { Dakota: 'Perrita', edad: 2, color: 'Dorada', comeCarne: true,
}];

let valores = (Object.values(datos).length);
alert(valores); 