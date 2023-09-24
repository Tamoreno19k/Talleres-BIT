// Usa el prompt para solicitar un número que representará el mes del año
// (por ejemplo, 1 para enero, 2 para febrero, etc.). Utiliza una estructura switch para mostrar 
// cuántos días tiene ese mes.


let mesNumero = prompt('Digita el numero del mes que quieras. Ej: Enero es 1.');

    mesNumero = Number(mesNumero);

switch (mesNumero){

    case 1: 
        console.log ('Tu mes tiene 31 dias.');
        break;
    case 2: 
        console.log ('Tu mes tiene 28 dias.');
        break;
    case 3: 
        console.log ('Tu mes tiene 31 dias.');
        break;
    case 4: 
        console.log ('Tu mes tiene 30 dias.');
        break;
    case 5: 
        console.log ('Tu mes tiene 31 dias.');
        break;
    case 6: 
        console.log ('Tu mes tiene 30 dias.');
        break;
    case 7: 
        console.log ('Tu mes tiene 31 dias.');
        break;
    case 8: 
        console.log ('Tu mes tiene 31 dias.');
        break;
    case 9: 
        console.log ('Tu mes tiene 30 dias.');
        break;
    case 10: 
        console.log ('Tu mes tiene 31 dias.');
        break;
    case 11:     
        console.log ('Tu mes tiene 30 dias.');
         break;
    case 12: 
        console.log ('Tu mes tiene 31 dias.');
         break;
    default:
        console.log ('No es un mes valido.');
}