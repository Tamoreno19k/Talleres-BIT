/** De un listado de personas determinar cuales son los productos que estan entre 10 y 20 dolares */

// Sin filter

const frutas = [
    { nombre: 'Mangostino', precio: 34 },       
    { nombre: 'Mora', precio: 17 },      
    { nombre: 'Banano', precio: 11 },        
    { nombre: 'Papaya', precio: 13 },      
    { nombre: 'Lulo', precio: 8 }      
] 

frutas1020 = [];

for (i = 0; i < frutas.length; i++ ){
    if (frutas[i].precio > 10 && frutas[i].precio < 20){                
        frutas1020.push(frutas[i]);

    }
}
console.log(frutas1020);