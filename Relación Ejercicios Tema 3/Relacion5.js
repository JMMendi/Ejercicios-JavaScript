// Actividad 1
// Realiza un programa que busque una cadena dentro de una cadena. A la función se le pasa el string y la 
// cadena que quieres encontrar y devuelve verdadero si existe o falso si no existe
// function encontrar (cadena, subcadena)  

function encontrar(texto1, texto2) {
    texto1 = document.getElementById("texto").value;
    texto2 = document.getElementById("subtexto").value;

    if(texto1.includes(texto2)) {
        alert("El subtexto está contenido en el texto.");
    } else {
        alert("El subtexto no está contenido en el texto.");
    }
}

// Actividad 2
// Realiza una modificación para que en el ejercicio anterior te devuelva la posición donde está la cadena y -1 si no se encuentra

function encontrarIndice(texto1, texto2) {
    texto1 = document.getElementById("buscar").value;
    texto2 = document.getElementById("buscarSubTexto").value;

    if(texto1.includes(texto2)) {
        alert(texto1.indexOf(texto2));
    } else {
        alert(-1);
    }
}

// Actividad 3
// Realiza un programa que guarde el nombre de usuario, email, 
// dirección, edad y DNI en las cookies. Para ello debes hacer una entrada de datos en un documento html y permitir 
// al usuario que introduzca los datos.