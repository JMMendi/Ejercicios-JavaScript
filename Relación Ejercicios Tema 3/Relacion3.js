// Actividad 1
/* Sobre el ejemplo del tema, donde se pide un número en el html, usaremos las funciones necesarias para comprobar lo siguiente:

- Es un número entero

- Es positivo

- Es menor de 100

En caso de no cumplir alguna de las condiciones mostrará una alerta.
*/

function inicializar() {

}

function comprobarNumero() {
    let numero = parseInt(document.getElementById("entero").value);
    if (numero < 0) {
        alert("Error, el número debe ser mayor de 0.");
    } else if (numero > 100) {
        alert("Error, el número debe ser menor de 100.");
    } else if (!Number.isInteger(numero)) {
        alert("Error, el número introducido no es entero.");
    } else {
        alert(numero + " es entero.");
    }
}

// Actividad 2
// Crea una página web que lea un número Real. Puedes usar método de la clase Number. Si no es un real devuelve una alerta.

function comprobarReal() {
    let candidatoReal = parseFloat(document.getElementById("real").value);
    if (Number.isInteger(candidatoReal) || Number.isNaN(candidatoReal)) {
        alert("Error, el número no es real.");
    } else {
        alert(candidatoReal + " es un número real.");
    }
}

// Actividad 3
// Añade en la página web una actividad que lea un únicamente un carácter. Letra mayúscula o minúscula.

function comprobarCaracter() {
    let candidatoCaracter = document.getElementById("caracter").value;
    if (candidatoCaracter.length > 1) {
        alert("Error, solo debe haber un único caracter.");
    } else {
        alert("La letra es: " + candidatoCaracter);
    }
}

// Actividad 4
// Añade en la página web una actividad que lea un DNI válido, 7 números y un carácter.
// Además la letra debe ser la correcta, para ello usa un algoritmo que compruebe la letra. 

// Dividimos el número completo del DNI entre 23, sin sacar decimales. 
// Utilizamos el resto de la división para calcular la letra. Dicho resto estará siempre entre 0 y 22.


var letraDni = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']

// CUIDADO QUE ESTE HAY QUE MIRARLO MEJOR
function comprobarDNI() {
    let candidatoDNI = document.getElementById("dni").value;
    if (!candidatoDNI.match('/\d{8}[A-Z]{1}/')) {
        alert("Error, el Dni introducido es incorrecto.");
    }
    let letra = candidatoDNI.substring(candidatoDNI.length,candidatoDNI.length-1);
    let numero = candidatoDNI.substring(0,candidatoDNI.length-1);
    let letraCanon = numero % 23;
    if (letra !== letraDni[letraCanon]) {
        alert("Error, la letra del DNI no coincide.");
    } else {
        alert("El Dni introducido es: " + candidatoDNI);
    }

}

// Actividad 5
// Trabajo con la clase Date:
// Muestra la fecha del sistema
// Muestra la fecha del sistema en formato UTC. Para ello usa el método .toUTCString();

function mostrarFechaSistema() {
    let fechaSis = new Date(Date.now());
    fechaSis.toUTCString;
    alert(fechaSis);
}

// Actividad 6
// 6. Muestra la fecha en este formato:   
// Hoy es 17 de Octubre de 2022 
// Para ello uso los métodos .getDate() .getMonth() .getFullYear()

function mostrarFecha() {
    let fecha = new Date(Date.now());
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "septiembre", "Octubre", "Noviembre", "Diciembre"];
    alert("Hoy es " + dia + " de " + meses[mes] + " de " + anio);
}

// Actividad 7
// Crea dos botones, Inicio y Fin, primero se pulsa el botón inicio y un 
//poco más tarde el botón fin y cuenta el tiempo que pasa entre los clicks de botón.  
// Mostrará: El tiempo transcurrido son X segundos.

var fecha_in, fecha_fin;
function contarSegundosClick() {
    fecha_in = new Date();
}
function terminarConteo() {
    fecha_fin = new Date();
    alert(parseInt((fecha_fin - fecha_in) / 1000) + " segundos han pasado.");
}


// Actividad 8
// Crea una función que devuelva la parte entera de un número introducido por teclado, debe de ser un número 
// decimal y el carácter usado para el decimal es el "."  o  "," Ej:  98.12   ->  Entero 98  Decimal 12  
// Para ello puedes usar un método que devuelve el índice de un elemento de un String.  indexof(ele)

function descomponerNumero(){
    let numero = document.getElementById("numero").value;
    let separador;
    
    if (numero.indexOf(",") != -1) {
        separador = ",";
    } else if (numero.indexOf(".") != -1) {
        separador = ".";
    }

    let entero = (numero.substring(0, numero.indexOf(separador)));
    let decimal = (numero.substring(numero.indexOf(separador)+1, numero.length));

    console.log(entero);
    console.log(decimal);
}

// Actividad 9
// Realiza una función que al pasarle una fecha devuelva si es válida o no válida. La fecha será introducida 
// como día/mes/año. Ejemplo:  28/12/1982   Correcto.   65/19/1999  Fecha no válida.
// Debéis tener en cuenta años bisiestos.

function validarFecha(){
    let fecha = document.getElementById('fechaValidar').value;

    let correcto = false;
    let arrayFecha = fecha.split("/");
    let dia = arrayFecha[0];
    let mes = arrayFecha[1];
    let anio = arrayFecha[2];

    if (anio < 0 || anio > 2024) {
        alert("Error, año no válido.");
    } else if (anio % 4 == 0 && mes == 2) {
        if (dia < 1 || dia > 29) {
            alert("Error, en año bisiesto el máximo de días es 29")
        }
    } else if (mes == 2) {
        if (dia < 1 || dia > 28) {
            alert("Error, Febrero no puede tener más de 28 días");
        }
    } else if (mes == 3 || mes == 6 || mes == 9 || mes == 11) {
        if (dia < 1 || dia > 30) {
            alert("Error, día incorrecto");
        }
    } else if (dia < 1 || dia > 31) {
        alert("Error, un mes no puede tener más de 31 días.");
    } else {
        correcto = true;
    }

    if (correcto) {
        console.log("Fecha correcta.");
    }



}