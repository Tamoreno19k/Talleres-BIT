// Usa el prompt para capturar un numero que representará una dirección 
// cardinal (Norte, Sur, Este, Oeste). Utiliza una estructura switch para determinar en qué 
// dirección se encuentra un punto cardinal opuesto (por ejemplo, Norte-opuesto es Sur).

let direccionC = prompt('Digita el numero de tu direccion cardinal 1.Norte. 2.Sur. 3.Este. 4.Oeste.');

direccionC = Number(direccionC);

switch (direccionC){

    case 1: 
        alert('Sur');
        break;
    case 2: 
        alert('Norte');
        break;
    case 3: 
        alert('Oeste');
        break;
    case 4: 
        alert('Este');
        break;
    default:
        alert('Opcion invalida');
}