// Promedio de edades de hombres y mujeres.

const values = [
    { name: 'Juan', age: 45, gender: 'male' },
    { name: 'Sofia', age: 13, gender: 'female' },
    { name: 'Sofia', age: 67, gender: 'female' },
    { name: 'Carlos', age: 32, gender: 'female'},
    { name: 'Ana Maria', age: 27, gender: 'female' },
    { name: 'Luisa', age: 5, gender: 'female' },
    { name: 'Elisa', age: 17, gender: 'female' }
];

Hedades = [];
Medades = [];

for (i=0; i < values.length; i++){
    if(values[i].gender == 'male'){
        Hedades.push(values[i].age)
    }
    else if(values[i].gender == 'female'){
        Medades.push(values[i].age)
    }
}

sumaPM = 0;
Medades.forEach(function(Medades){
    sumaPM += Medades
});

let promedioM = sumaPM / Medades.length

console.log(promedioM);