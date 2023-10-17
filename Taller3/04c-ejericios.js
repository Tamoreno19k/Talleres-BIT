// Cuántas personas se llaman igual.

const values = [
    { name: 'Juan', age: 45, gender: 'male' },
    { name: 'Sofia', age: 13, gender: 'female' },
    { name: 'Sofia', age: 67, gender: 'female' },
    { name: 'Carlos', age: 32, gender: 'female'},
    { name: 'Ana Maria', age: 27, gender: 'female' },
    { name: 'Luisa', age: 5, gender: 'female' },
    { name: 'Elisa', age: 17, gender: 'female' }
];


iguales = [];

for (i=0; i < values.length; i++){

    const nombre = values[i].name;

    const repeatedPerson = iguales.find((item) => {
        return item.nombre == nombre;
    });

if (repeatedPerson){ 
    repeatedPerson.amount = repeatedPerson.amount + 1;
}
else {
const  persona = {
        nombre, 
        amount: 1
        }
    
    iguales.push(persona);
    
}
}

// console.log(iguales);

for( let i = 0; i < iguales.length; i++ ) {
    if( iguales[ i ].amount > 1 ) {

        console.log( `${ iguales[ i ].nombre } esta repetid@ ${ iguales[ i ].amount } veces` );
    }
}
