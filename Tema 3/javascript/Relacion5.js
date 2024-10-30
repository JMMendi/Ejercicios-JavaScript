// Actividad 1
// Realiza un programa que busque una cadena dentro de una cadena. A la función se le pasa el string y la cadena 
// que quieres encontrar y devuelve verdadero si existe o falso si no existe

// function encontrar (cadena, subcadena)  

// NOTA (Puede hacerse todo por consola) 

function encontrarCadena(texto1, texto2) {
    // if (typeof(texto1) != String || typeof(texto2) != String) {
    //     alert("Error, tienen que ser dos cadenas de texto.");
    // } else {
        if (texto1.includes(texto2)) {
            return true;
        } else {
            return false;
        }
    // }
}

// Actividad 2
// Realiza una modificación para que en el ejercicio anterior te devuelva la posición donde está la cadena y -1 si no se encuentra

function encontrarIndiceCadena(texto1, texto2) {
    if (texto1.includes(texto2)) {
        return (texto1.indexOf(texto2));
    } else {
        return -1;
    }
}

// Actividad 3
// Realiza un programa que guarde el nombre de usuario, email, dirección, edad y DNI en las cookies. 
// Para ello debes hacer una entrada de datos en un documento html y permitir al usuario que introduzca los datos.

var todasLasCookies;
function crearCookies() {
    document.cookie ="nombre=" + document.getElementById('usuario').value;
    document.cookie ="email=" + document.getElementById('email').value;
    document.cookie ="direccion=" + document.getElementById('direccion').value;
    document.cookie ="edad=" + document.getElementById('edad').value;
    let dni = document.getElementById('dni').value;
    if (validarDni(dni)) {
        document.cookie ="dni=" + document.getElementById('dni').value;
    } else {
        alert("Error, el dni no es válido.");
    }

    todasLasCookies = document.cookie;
    console.log(todasLasCookies);
}

// Actividad 4
// Modifica el programa para que se pueden vaciar las cookies a través de un botón

function vaciarCookies() {
    todasLasCookies="";
    console.log(todasLasCookies);
}

// Actividad 5
// Modifica el programa con otro botón para que permita grabar las cookies y que tengan una duración de 1hora.

function duracionCookies() {
    document.cookie ="nombre=" + document.getElementById('usuario').value + ";max-age=(60*60)";
    document.cookie ="email=" + document.getElementById('email').value + ";max-age=(60*60)";
    document.cookie ="direccion=" + document.getElementById('direccion').value + ";max-age=(60*60)";
    document.cookie ="edad=" + document.getElementById('edad').value + ";max-age=(60*60)";
    document.cookie ="dni=" + document.getElementById('dni').value + ";max-age=(60*60)";

    todasLasCookies = document.cookie;
    console.log(todasLasCookies);
}

// Actividad 6
// Modifica el formulario anterior y crea una función que controle que el DNI sea válido, para ello se implementa el algoritmo del cálculo de letra del DNI

// letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
// letra = letra.substring(numero, numero+1); 

function validarDni(dni) {
    letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
    letraCandidata = dni.substring(dni.length-1, dni.length);
    numeroDni = parseInt(dni);

    if (letraCandidata == letra[numeroDni%23]) {
        return true;
    } else {
        return false;
    }
}

// Actividad 7
// 7. Crea un documento html con una etiqueta <input type="text" ...> que con un código javascript cargue el texto "vacío" en dicha etiqueta al cargar la página.

function escribirInput() {
    document.getElementById('texto').value = "Vacio";
}