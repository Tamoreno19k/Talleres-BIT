// A partir de la lista determinar:
// Cantidad de hombres y mujeres.


const values = [
    { name: 'Juan', age: 45, gender: 'male' },
    { name: 'Sofia', age: 13, gender: 'female' },
    { name: 'Sofia', age: 67, gender: 'female' },
    { name: 'Carlos', age: 32, gender: 'female'},
    { name: 'Ana Maria', age: 27, gender: 'female' },
    { name: 'Luisa', age: 5, gender: 'female' },
    { name: 'Elisa', age: 17, gender: 'female' }
];

H = [];
M = [];
Hedades = [];
Medades = [];

for (i=0; i < values.length; i++){
    if(values[i].gender == 'male'){
        H.push(values[i].gender)
        Hedades.push(values[i].age)
    }
    else if(values[i].gender == 'female'){
        M.push(values[i].gender)
        Medades.push(values[i].age)
    }
}

console.log(H.length);
console.log(M.length);
