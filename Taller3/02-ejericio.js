/** De un listado de personas determinar cuales son los productos que estan entre 10 y 20 dolares */

// Con Filter: 

const frutas = [
    { nombre: 'Mangostino', precio: 34 },       
    { nombre: 'Mora', precio: 17 },      
    { nombre: 'Banano', precio: 11 },        
    { nombre: 'Papaya', precio: 13 },      
    { nombre: 'Lulo', precio: 8 }      
] 

let frutas1020 = frutas.filter(function(fruta){
        if (fruta.precio >= 10 && fruta.precio <=20){
            console.log(fruta);
        }
})