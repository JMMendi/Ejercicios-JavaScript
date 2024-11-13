let arrayRandom = [];
for (let i = 0 ; i < 10 ; i++) {
    let random = parseInt(Math.random()* 10);
    if (random >= 5) {
        arrayRandom.push(parseInt(Math.random() * 50));
    } else if (random < 5) {
        arrayRandom.push(parseInt(Math.random() * (-50)));
    }
}

document.getElementsByClassName('p').innerHTML = arrayRandom;
console.log("El array es: " + arrayRandom);

//  1. Utilizando la función map crear un nuevo array con el resto de los elementos entre 2

function dividirEntreDos(valor, indice, array) {
    return parseInt(valor / 2);
}

// let arrayDivision = (arrayRandom.map(dividirEntreDos));
let arrayDivision = (arrayRandom.map(num => num / 2));
console.log(arrayDivision);

// 2.   Utilizando la función map crear un nuevo array de valores lógicos que indica si el numero es positivo (>=0) o no 
function valorLogico(valor, indice, array) {
    return (valor >= 0);
}

// let arrayLogico = (arrayRandom.map(valorLogico));
let arrayLogico = (arrayRandom.map(num => num >= 0));
console.log(arrayLogico);

// 3.  Utilizando la función map crear un nuevo array de reales con la raiz cuadrada de cada número si es positivo o 0 si es negativo

function arrayReales(valor, indice, array) {
    if (valor > 0) {
        return Math.sqrt(valor);
    } else {
        return 0;
    }
}

let arrayReal = (arrayRandom.map(arrayReales));
console.log(arrayReal);

// 4. Utilizando la función map crea un nuevo array de cadenas donde cada elemento tenga el siguiente contenido: “Numero: valor”.

function arrayCadenas(valor, indice, array) {
    return "Número: " + valor;
}

//let arrayCadena = (arrayRandom.map(arrayCadenas));
let arrayCadena = (arrayRandom.map(num => ("Número: " + num)))
console.log(arrayCadena);

// 5. Utilizando la función map crea un nuevo array donde cada elemento tenga el elemento actual incrementado. Cada operación llevará asociada la visualización del resultado

function arrayAumentados(valor) {
    return valor + valor;
}

let arrayAumentado = arrayRandom.map(arrayAumentados);
console.log(arrayAumentado);