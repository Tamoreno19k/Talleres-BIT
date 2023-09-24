// Crea un programa que solicite al usuario una opción de menú (por ejemplo, 1 para "Ver perfil", 2 para
// "Editar configuración", etc.) y utilice una estructura switch para realizar la acción correspondiente.


let menu = prompt('A continuacion digita la opcion que desees: 1. Ver perfil. 2. Editar perfil 3. Configuracion de perfil. 4. Ver historial');

    menu = Number(menu);

switch (menu){

    case 1: 
        alert('Perfil: ... ');
        break;
    case 2: 
        alert('Edita tu perfil: ... ');
        break;
    case 3: 
        alert('Configuracion: ... ');
        break;
    case 4: 
        alert('Historial: ... ');
        break;
    default:
        alert('Opcion invalida');
}