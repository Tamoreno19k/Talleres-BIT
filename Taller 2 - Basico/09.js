// Escribe un programa que:

// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.
// Ejemplo:

//     Ingresa un número> 5
//     1
//     3
//     4
//     5


const  
        numeroX = Number(prompt('Digita tu numero'));
        numeroslista = [];

    for( let i = 1; i<=numeroX; i++){
        numeroslista.push(i);

    };
        numeroslista.splice(1, 1);
        numeroslista.forEach(function (cdnumero){
        console.log(cdnumero);
       }); 
