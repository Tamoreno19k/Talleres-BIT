// 2.Calcular el costo promedio de todos productos de la lista cuyo precio y cantidad disponible es mayor a cero


let products = [
    { nombre: "Pan", precio: 3, cantidad: 20 },
    { nombre: "Tomate", precio: 8, cantidad: 7 },
    { nombre: "Leche", precio: 0, cantidad: 4 },
    { nombre: "Huevos", precio: 9, cantidad: 0 },
    { nombre: "Arroz", precio: 5, cantidad: 5 },
    { nombre: "Cebolla", precio: 0, cantidad: 10 },
    { nombre: "Naranjas", precio: 12, cantidad: 10 },
];

listaPrecio = [];
listaCantidad =[];


for (let i = 0; i < products.length; i++) {
    if (products[i].precio > 0 && products[i].cantidad > 0) {

        listaPrecio.push(products[i].precio)
        listaCantidad.push(products[i].cantidad)
    };   
}
// console.log(listaPrecio);
// console.log(listaCantidad);

sumatodos = [];

for( i = 0; i < 4; i++ ){

    costocp = listaPrecio[i]*listaCantidad[i];
    sumatodos.push(costocp)
}

let suma = sumatodos.reduce(function(a, b){
    return a + b;
});

// console.log(suma);

let sumaCant = listaCantidad.reduce(function(a, b){
    return a + b;
});

// console.log(sumaCant);

const costoPonderado = suma / sumaCant;
costoPonderadoRed = costoPonderado.toFixed(2);

console.log(`El costo promedio de todos productos de la lista es $${costoPonderadoRed}`);

