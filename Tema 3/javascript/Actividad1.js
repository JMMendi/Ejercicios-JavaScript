// Actividad 1
// Crea una pagina html que tenga dos botones, uno para crear una ventana y otro para cerrarla.

/* function inicializar() {
    document.getElementById("crear").onclick=crearNueva;
    document.getElementById("cerrar").onclick=cerrarNueva;

};
var nuevaVentana;
var abierto = false;

function crearNueva() {
    nuevaVentana = window.open("https://www.google.es", "", "height=600, width=900");
    abierto = true;
}
function cerrarNueva() {
    if(abierto) {
        nuevaVentana.close();
        nuevaVentana = null;
    }
} */


// Actividad 2


// Práctica de Clase
// Creamos una caja de texto para escribir la edad y que te la muestre por pantalla al darle a un boton

function inicializar() {
    document.getElementById("introducir-edad").onclick=leerEdad;
};

function leerEdad() {
    let edad = document.getElementById("edad").value;
    if (checkEdad(edad)) {
        console.log("Su edad es " + edad + ".");
    }
}

function checkEdad(edad) {
    if (edad < 18) {
        alert("Su edad debe ser mayor de 18 para acceder.");
    } else {
        return edad;
    }
}

// arguments.length - Para mirar la cantidad de parámetros pasados a una función. It can be helpful (?)