// Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

// const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];

// El resultado debería ser el siguiente:

// 11

const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1 ];

// nums.forEach(function(eachnum) {
//     if(eachnum > 0){
//         console.log(eachnum);
//     }
// });

const valor = nums.reduce((accumulador, item) =>{
         if (nums != 0){
          return accumulador + item;
        } 
    });

    console.log(valor);