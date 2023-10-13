// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula:

// peso / altura^2
// Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:

// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30

let 
    peso = Number(prompt('Digita tu peso'));
    altura = Number(prompt('Digita tu altura'));

    IMC = (peso / (altura**2));

if(IMC < 18.5){
    console.log('Bajo de peso');
}
else if (IMC > 18.5 && IMC < 24.9){
    console.log('Normal de peso');
}
else if (IMC > 25 && IMC < 29.9){
    console.log('Sobrepeso');
}
else {
    console.log('Obeso');
}