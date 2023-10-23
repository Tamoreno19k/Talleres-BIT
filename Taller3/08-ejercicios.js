// ¿Va a sobrevivir?

// Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado por un par de poderosos dragones. cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.

// Responda a la pregunta y devuelva true si es así, de lo contrario false

function heroe(dragones, balas) {

    if (dragones >= 2 && balas >= dragones*2) {
        console.log("Sobrevive");
    }
    else{
        console.log('No sobrevive');
    }
    
}

heroe(2, 4);