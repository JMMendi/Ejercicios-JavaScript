// Actividad 1
/* Sobre el ejemplo del tema, donde se pide un número en el html, usaremos las funciones necesarias para comprobar lo siguiente:

- Es un número entero

- Es positivo

- Es menor de 100

En caso de no cumplir alguna de las condiciones mostrará una alerta. */

function inicializar() {
}

function comprobarNumero() {
    let numero = parseInt(document.getElementById("numero").value);
    if (numero < 0) {
        alert("Error, el número no es entero.");
    } else if (numero > 100) {
        alert("Error, el número debe ser menor de 100.");
    } else if (!Number.isInteger(numero)) {
        alert("Error, el número no es entero porque lleva decimales.");
    } else {
        alert(numero + " es un número entero.");
    }
}

// Actividad 2
// Crea una página web que lea un número Real. Puedes usar método de la clase Number. Si no es un real devuelve una alerta.

function comprobarNumeroReal() {
    let candidatoReal = parseFloat(document.getElementById("numeroReal").value);
    if (Number.isInteger(candidatoReal) || (Number.isNaN(candidatoReal))) {
        alert("Error, el número no es real.");
    } else {
        alert(candidatoReal + " es un número real.");
    }
}

// Actividad 3
// 3. Añade en la página web una actividad que lea un únicamente un carácter. Letra mayúscula o minúscula.

function comprobarLetra() {
    let candidatoLetra = document.getElementById("letras").value;
    if (length(candidatoLetra) > 1) {
        alert("Error, solo debe introducir un caracter.");
    } else if (isInteger(candidatoLetra) || isNan(candidatoLetra)) {
        alert("Error, debe introducir una letra como caracter.")
    } else {
        alert("El caracter introducido es: " + candidatoLetra);
    }
}

// Actividad 7
// Crea dos botones, Inicio y Fin, primero se pulsa el botón inicio y un poco más tarde el botón fin 
// y cuenta el tiempo que pasa entre los clicks de botón.  Mostrará: 
// El tiempo transcurrido son X segundos.

let fechaInicio, fecha_fin, tiempo;

function contar() {
    fechaInicio = new Date();
};

function finalizarContar() {
    fecha_fin = new Date();
    tiempo = parseInt((fecha_fin - fechaInicio) / 1000);
    alert("Han transcurrido: " + tiempo + " segundos.");
}

// Actividad 8
// Crea una función que devuelva la parte entera de un número introducido por teclado, 
// debe de ser un número decimal y el carácter usado para el decimal es el "."  o  "," Ej:  98.12   ->  Entero 98  Decimal 12
// Para ello puedes usar un método que devuelve el índice de un elemento de un String.  indexof(ele)

function enteroDecimal() {
    let numero = document.getElementById("num").value;
    let separador;

    if (numero.indexOf(".") == -1) {
        separador = ",";
    } else {
        separador = ".";
    }

    let primeraParte = numero.substring(0, numero.indexOf(separador));
    let segundaParte = numero.substring(numero.indexOf(separador)+1, numero.length)


    console.log("La parte entera es: " + primeraParte);
    console.log("La parte decimal es: " + segundaParte);
}

// Actividad 9
// 9. Realiza una función que al pasarle una fecha devuelva si es válida o no válida. 
// La fecha será introducida como día/mes/año. Ejemplo:  28/12/1982   Correcto.   65/19/1999  Fecha no válida.
// Debéis tener en cuenta años bisiestos.

function validarFecha() {
    let fecha = document.getElementById("fecha").value;

    let fechaValidar= fecha.split("/");

    let dia = fechaValidar[0];
    let mes = fechaValidar[1];
    let anio = fechaValidar[2];

    if (mes < 1 || mes > 12) {
        alert("Error, el mes no es correcto.");
    } else if (dia < 1 || dia > 31) {
        alert("Error, el día no es correcto.")
    } else if (((anio % 400 == 0 || anio % 4 == 0) && anio % 100 != 0) && mes == 2) {
        if (dia > 29) {
            alert("Error, en los años bisiestos solo hay 29 días en Febrero, no más.")
            if (dia > 28) {
                alert("Error, solo en los años bisiestos hay 29 días en Febrero")
            }
        }
    } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
        if (dia > 30) {
            alert("Error, el día no es correcto.")
        }
    } else if (anio < 0) {
        alert("Error, el año no es correcto.");
    } 
    else {
        alert("La fecha introducida es válida.");
    }
    console.log("La fecha introducida es correcta.");
}