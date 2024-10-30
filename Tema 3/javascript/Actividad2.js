/* 2. Crea una página html que:

- Contenga 5 botones, cada uno de ellos abrirá una ventana con en el enunciado de las primeras 5 actvidades de la relación 1 del tema 2.  

- Tendrá que mostrar en la ventana el resultado de la ejecución del script. 

- Permitirá cerrar todas las ventanas con un botón. */

function inicializar() {
    
}

var opcion;

function abrirVentana(opcion) {
    switch(opcion) {
        case (1) : 
            alert("Actividad 1: Realiza un programa que muestre todos los números impares que hay entre dos números que pide al usuario. Puedes usar prompt para pedir los números al usuario.");
            break;
        case (2) :
            alert("Actividad 2: Muestra la tabla de multiplicar de un nº introducido por pantalla");
            break;
        case (3) :
            alert("Actividad 3: Programa que sume los primeros desde el cero hasta un nº introducido por el usuario.");
            break;
        case (4) :
            alert("Actividad 4: Programa que diga si un nº es par o impar");
            break;
        case (5) :
            alert("Actividad 5: Programa que calcule el área de un de una parcela en m2 y que controle que la longitud de los lados en >0 .  Mostrando un mensaje de error si es incorrecto.");
            break;
        default : "";
    }
}
