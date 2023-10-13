//Escribe un programa que pida al usuario su edad y determine si es un niño, 
//adolescente o adulto utilizando una estructura if-else-if.

let edadX = prompt('Digita tu edad');

if( edadX >= 0 && edadX <= 11) {
    console.log('Eres un un niño');
}
else if( edadX >= 12 && edadX <= 17) {
    console.log('Eres un adolescente')
}
else if( edadX >= 18) {
    console.log('Eres un adulto')
}
else {
    console.log( 'Ingresa un edad valida' );
}
