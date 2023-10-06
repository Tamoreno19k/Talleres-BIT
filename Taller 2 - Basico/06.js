// Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces:


const
    frase = (prompt('Escribe tu frase'));
    numero = Number(prompt('digita un numero'));
    
    for(let i = 0; i < numero; i++){
            console.log(frase);
    };