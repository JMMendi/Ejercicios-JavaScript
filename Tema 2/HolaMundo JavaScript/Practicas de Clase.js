/* let vector = [
    20,
    356,
    12,
    9999,
    65.2,
    1222,
    "Pedrito",
    false
];

let vector1 = vector.slice();


console.log(vector);
console.log(vector1);


// Vamos a hacer 3 funciones. A la 1 va a sacar en pantalla: Soy funcion 1. El 2 y el 3 lo mismo pero con su número de función. Y si le das a 4 sale


function funcion1() {
    console.log("Soy Función 1");
}
function funcion2() {
    console.log("Soy Función 2");
}
function funcion3() {
    console.log("Soy Función 3");
}
function salir() {
    console.log("Saliendo. Vuelva Pronto!");
}

do {
    console.log("-------------------------------");
    console.log("MENU");
    console.log("Llamar a Función 1");
    console.log("Llamar a Función 2");
    console.log("Llamar a Función 3");
    console.log("Salir");

    var opcion = parseInt(prompt("Escribe la función que quiera ejecutar:"));

    switch(opcion) {
        case(1) : funcion1(); break;
        case(2) : funcion2(); break;
        case(3) : funcion3(); break;
        case(4) : salir(); break;
    }

} while (opcion != 4); */


// DEBUGGER

/* function bucle() {
    let num= 0;
    let i = 0;
    for (i ; i < 100 ; i++) {
        num = num+i;
    }
    console.log("******* Bucle Debugger ******** \n valor de i" + i + "\n valor de num " + num);
}

bucle();
*/

var num = 0;
let num2 = 0;
function funcion1() {
    var variable = 8;
    num = 10;
    num2 = 8;
}
console.log(num);
console.log(num2);

console.log("************************************ Y AHORA EL CAMBIO USANDO LA FUNCION ****************************************");
funcion1();

console.log(num);
console.log(num2);

function funcion2() {
    var num = 10;
}
funcion2();
console.log(num);
var num = 25;
console.log(num);

// Prueba 1 

 /* if (x < y) {
    let var2 = x;
} else {
    let var2 = y;
}
console.log(var2);
// En este caso te permite declarar la misma variable en distintos bloques porque dicha variable no existe fuera del ámbito del bloque
// en el que está. Si haces el console.log no existe esa variable por esta misma razón

// Prueba 2

if (x < y) {
    let var2 = x;
} else 
    let var2 = y;
console.log(var2);
// No te permite hacer declaraciones de variables con let fuera de un bloque.

// Prueba 3

function menor(x, y) {
    if (x < y) 
        let var2 = x;
    else
        let var2 = y;
    console.log(var2);
}*/

// Y aquí igual, no puedes declarar variables con let fuera de un bloque.

// ACTIVIDAD 5
console.log("********************** ACTIVIDAD 5 **********************");
function varTest() {
    var x = 31;
    if (true) {
        var x = 71; // ¡Misma variable!
        console.log(x); // ****** ESCRIBE EL RESULTADO *******
    }
    console.log(x); // ****** ESCRIBE EL RESULTADO *******
}

function letTest() {
    let x = 31;
    if (true) {
        let x = 71; // Variable diferente!
        console.log(x); // ****** ESCRIBE EL RESULTADO *******
    }
    console.log(x); // ****** ESCRIBE EL RESULTADO *******
}

// Llamamos a las funciones
console.log("***********************************");
varTest();
letTest();

let resultado = 0;
function suma(x,y) {
    let resultado = x+y;

}
suma(4,10);
console.log(resultado);