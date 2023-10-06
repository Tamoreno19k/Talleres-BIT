/**Declara una variable de tipo string con una cadena de texto larga. Luego, utiliza métodos
 *  de cadenas para obtener la longitud de la cadena, convertirla a minúsculas y mostrar la última 
 * palabra en mayúsculas.
 */

let 
    mensaje = 'EsTa NoChE No Me EsPeReN En La CaSa!';
    console.log(mensaje.length);

let 
    lower = (mensaje.toLowerCase ());

    console.log (lower.replace ('casa', 'CASA'))
