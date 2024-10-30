// Actividad 1 
//Realiza un programa que muestre todos los números impares que hay entre dos números que pide al usuario.
//Puedes usar prompt para pedir los números al usuario.

function numerosImpares() {
    let numero1 = prompt("Escribe el primer número: ");
    let numero2 = prompt("Escribe el segundo número: ");

    for (numero1; numero1 < numero2; numero1++) {
        if (numero1 % 3 == 0) {
            console.log(numero1 + ", ");
        }
    }
}
// numerosImpares();


// Actividad 2
// Muestra la tabla de multiplicar de un nº introducido por pantalla.

function tablaMultiplicar() {
    let numeroMultiplicar = prompt("Escribe el número aquí: ");

    for (let i = 1; i <= 10; i++) {
        console.log(numeroMultiplicar + " x " + i + " = " + numeroMultiplicar * i);
    }
}
// tablaMultiplicar();


// Actividad 3
// Programa que sume los primeros desde el cero hasta un nº introducido por el usuario.

function sumarDesdeCero() {
    let numeroSumar = prompt("Escribe el número a sumar desde 0: ");
    let cero = 0;
    for (let i = 1; i <= numeroSumar; i++) {
        console.log(cero);
        cero += i;
    }
}
// sumarDesdeCero();


// Actividad 4
// Programa que diga si un nº es par o impar.

function parOImpar() {
    let numero = prompt("Introduce el número a saber si es par o impar: ");
    if (numero % 2 == 0) {
        console.log(numero + " es par.");
    }
    if (numero % 3 == 0) {
        console.log(numero + " es impar.");
    }
}
// parOImpar();


// Actividad 5
// Programa que calcule el área de un rectángulo de una parcela en m2 y que controle que la longitud de los lados en >0 .  Mostrando un mensaje de error si es incorrecto.

function areaParcela() {
    let lado = prompt("Escriba el lado del rectángulo: ");
    if (lado <= 0) {
        alert("Error, el lado no puede ser menor o igual a 0.");
    }
    let altura = prompt("Escriba la altura del rectángulo: ");
    if (altura <= 0) {
        alert("Error, la altura no puede ser menor o igual a 0.");
    }

    let area = lado * altura;
    console.log(area);

}
//areaParcela();


// Actividad 6 (Con Switch)
// Realiza un programa que devuelva la nota del alumno introducida por teclado,  Sobresaliente, Notable, Bien, Aprobado, Suficiente, Insuficiente.

function nota() {
    let notaNumerica = parseInt(prompt("Escriba su nota aquí: "));
    switch (notaNumerica) {
        case (1): console.log("Insuficiente.");
            break;
        case (2): console.log("Insuficiente.");
            break;
        case (3): console.log("Insuficiente.");
            break;
        case (4): console.log("Insuficiente.");
            break;
        case (5): console.log("Aprobado.");
            break;
        case (6): console.log("Bien.");
            break;
        case (7): console.log("Notable.");
            break;
        case (8): console.log("Notable.");
            break;
        case (9): console.log("Sobresaliente.");
            break;
        case (10): console.log("Sobresaliente.");
            break;
        default: console.log("Error, nota no válida."); break;

    }
}
//nota();


// Actividad 7
// Realiza un programa que devuelva una nota numérica aleatoria introducido el texto por teclado.
// Ej: El usuario introduce Sobresaliente y devuelve un nº entre 9 y 10.  Puedes hacer uso de la función dada para el número aleatorio.

// Notesé que también en este caso `min` será incluido y `max` excluido
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function notaPorEscrito() {
    let notaEscrita = prompt("Introduzca la nota escrita aquí: ");

    switch (notaEscrita) {
        case ("SOBRESALIENTE"): console.log(getRandomInt(9, 10));
            break;
        case ("sobresaliente"): console.log(getRandomInt(9, 10));
            break;
        case ("NOTABLE"): console.log(getRandomInt(7, 8));
            break;
        case ("notable"): console.log(getRandomInt(7, 8));
            break;
        case ("BIEN"): console.log(6);
            break;
        case ("bien"): console.log(6);
            break;
        case ("SUFICIENTE"): console.log(5);
            break;
        case ("suficiente"): console.log(5);
            break;
        case ("INSUFICIENTE"): console.log(getRandomInt(0, 4));
            break;
        case ("insuficiente"): console.log(getRandomInt(0, 4));
            break;
        default: console.log("Error, introduce una nota escrita válida.");
    }
}
// notaPorEscrito();


function notaUno() {
    let notaNumerica = parseInt(prompt("Escriba su nota aquí: ")); // para que funcione con comprobaciones lógica, hay que poner switch true
    switch (true) {
        case (notaNumerica < 5): console.log("Insuficiente.");
            break;
        case (notaNumerica >= 5) || (notaNumerica < 6): console.log("Aprobado.");
            break;
        case (notaNumerica >= 6) || (notaNumerica < 7): console.log("Bien.");
            break;
        case (notaNumerica >= 7) || (notaNumerica < 9): console.log("Notable.");
            break;
        case (notaNumerica >= 9) || (notaNumerica <= 10): console.log("Sobresaliente.");
            break;
        default: console.log("Error, nota no válida."); break;

    }
}

// notaUno();