// 3.Calcular el costo total del inventario.


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
listaCantidad = [];
precioTotal = [];

for (let i = 0; i < products.length; i++) {
        listaPrecio.push(products[i].precio);
        listaCantidad.push(products[i].cantidad); 
}

 for (let i = 0; i < products.length; i++) {
     precioTotal.push(listaPrecio[i]*listaCantidad[i]);
}

let suma = precioTotal.reduce(function( a , b ){
    return a + b;

});

console.log(`El costo total del inventario es de $${suma}`);
