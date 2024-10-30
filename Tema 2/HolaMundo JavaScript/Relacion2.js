// Actividad 1
//Realiza un ejercicio para llenar un vector con 5 nombres, muestra en consola el contenido del vector.

function vectores() {
    let vector = ["Pedro", "Pablo", "Ana", "Laura", "Alex"];
    console.log(vector);
}
// vectores();


// Actividad 2
// Muestra el tipo de dato del contenido de una posición del vector.­

function tipoVector() {
    let vector = ["Juan", "Josefa", 27, 42.34, true];
    for (let i = 0; i < vector.length; i++) {
        console.log(typeof (vector[i]));
    }
}
// tipoVector();


// Actividad 3
// Busca la posición de elemento “a la antigua usanza”, recorriendo el vector hasta encontrar la posición.

function buscarPosicion() {
    let vector = ["Oh no", "Pedro", "Juan", "Gutierrez", "Laurana"];
    let posicion = prompt("Introduce el elemento aquí: ");

    for (let i = 0; i < vector.length; i++) {
        if (vector[i] == posicion) {
            console.log("El elemento", posicion, " está en la posición ", i, ".");
        }
    }
}
// buscarPosicion();

// Actividad 4
// Usando un método de la clase Array forEach. Recorrer el vector del ejercicio 1

function recorrerArray() {
    let vector = ["Pedro", "Pablo", "Ana", "Laura", "Alex"];

    vector.forEach(elemento => console.log(elemento));
}
// recorrerArray();


// Actividad 5
// Leer por teclado 2 variables, nombre y edad y mostrar un mensaje: "El usuario ------- tiene --- años"

function presentacion() {
    let nombre = prompt("Escriba su nombre aquí: ");
    let edad = prompt("Escribe su edad aquí: ");

    console.log("El usuario ", nombre, " tiene ", edad, " años.");
}
// presentacion();


// Actividad 6
// Crear un programa que calcule el factorial de un número.

// si por ejemplo te piden 5, sería 5x4x3x2x1 = loquesea.

function factorial() {
    let factorial = 5;
    let multiplicacion = factorial;

    for (let i = 1; i <= factorial; i++) {
        multiplicacion *= i;
        console.log(multiplicacion);
    }

}
// factorial();

// Actividad 7
// Sobre la misma función pasa por parámetro el número al que vamos a calcular el factorial

function pedidoFactorial() {
    let factorial = parseInt(prompt("Introduzca un número aquí: "));
    let multiplicacion = factorial;

    for (let i = 1; i < factorial; i++) {
        multiplicacion *= i;
        console.log(multiplicacion);
    }

}
// pedidoFactorial();

// Actividad 8
// Añade una estructura de control para que devuelva -1 si es negativo y 1 si el número es cero. En caso contrario la función devuelve el factorial del nº.

function pedidoFactorial01() {
    let factorial = parseInt(prompt("Introduzca un número aquí: "));
    if (factorial < 0) {
        console.log("Resultado es -1");
    } else if (factorial == 0) {
        console.log("Resultado es 0");
    } else {
        let multiplicacion = factorial;

        for (let i = 1; i < factorial; i++) {
            multiplicacion *= i;
            console.log(multiplicacion);
        }
    }
}

// Actividad 9
// Crear un programa que calcule el área de un círculo dado el valor del radio

let radio = 20;
function areaCirculo(radio) {
    return Math.pow(radio,2) / Math.PI;
}

// console.log("El area del círculo de radio ", radio, " es: ", areaCirculo(20));


// Actividad 10
// Usa la sentencia debugger; para mostrar el contenido de una variable en un bucle for que recorre un vector

function debugeando() {
    let vector = ["Godofredo", "Filogonio", "Enrieta", "Gertrudis"];
    for (let i = 0 ; i < length(vector) ; i++) {
        debugger;
    }
}

// Actividad 11
// Usa la herramienta debugger del navegador web para añadir punto de ruptura dentro del for del ejercicio anterior. (Guarda las capturas de pantalla)