// Crea un programa que solicite al usuario tres notas calcular el promedio.
// El rango permitido es de 0 a 5, incluidos decimales.
// Utilice una estructura switch para mostrar un mensaje correspondiente a la calificación ingresada, así:

// Si saca menos de 2.5 ( 'Insuficiente, has perdido la materia' )
// Si saca 2.5 y de menos de 3.5 ( 'Insuficiente, tienes derecho a habilitar' )
// Si saca 3.5 y menos de 4.0 ( 'Aceptable' )
// Si saca 4.1 y hasta 5.0 ( 'Excelente' )

let 
    nota1 = prompt('Digita tu primer nota (El rango de tu nota debe estar de 0 a 5. Puedes incluir decimales)');
    nota2 = prompt('Digita tu segunda nota (El rango de tu nota debe estar de 0 a 5. Puedes incluir decimales)');
    nota3 = prompt('Digita tu tercera nota (El rango de tu nota debe estar de 0 a 5. Puedes incluir decimales)');

    nota1 = Number(nota1);
    nota2 = Number(nota2);
    nota3 = Number(nota3);

let promedio = ((nota1 + nota2 + nota3) / 3);
console.log(promedio);

switch (true){
    case promedio < 2.5:
        console.log( 'Insuficiente, has perdido la materia' );
        break;
    case promedio >= 2.5 && promedio < 3.5:
        console.log( 'Insuficiente, tienes derecho a habilitar' );
        break;
    case promedio >= 3.5 && promedio < 4.0:
        console.log( 'Aceptable' );
        break;
    case promedio >= 4.1 && promedio < 5.0:
        console.log( 'Excelente' );
        break;
    default: 
        console.log( 'No es una nota valida' );
}

// encontre este switch true, preguntar 
