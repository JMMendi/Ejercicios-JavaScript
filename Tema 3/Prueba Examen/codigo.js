// Declaramos las variables globales que usaremos para trasladar la información a la nueva ventana.

var nombreFinal;
var primerApellidoFinal;
var segundApellidoFinal;
var fechaNacFinal;
var edadFinal;
var pruebaAccesoFinal;
var ventanaNueva;

// Creamos variable booleana para comprobación de que todo esté correcto
var correcto = true;

// función para validar que los campos no estén vacíos
function comprobarVacio(string) {
    if (string == "") {
        alert("Error, el campo está vacío.");
        correcto = false;
    }
}

// función para validar que la edad esté entre un rango "razonable"
function comprobarEdad(edad) {
    if (edad < 1 || edad > 110) {
        alert("Error, la edad no es correcta.");
        correcto = false;
    }
}

// función para validar que la fecha es correcta según la realidad.
function comprobarFecha(string) {
    if (!comprobarVacio(string)) {
        let vectorFecha = string.split("/");
        let dia = vectorFecha[0];
        let mes = vectorFecha[1];
        let anio = vectorFecha[2];

        if (mes < 1 || mes > 12) {
            alert("Error, el mes es incorrecto.");
            correcto = false;
        } else if (mes == 2) {
            if (anio % 4 == 0) {
                if (dia < 1 || dia > 29) {
                    alert("Error, en año bisiesto, Febrero tiene hasta 29 días.");
                    correcto = false;
                }
            } else {
                if (dia < 1 || dia > 28) {
                    alert("Error, en año NO bisiesto, Febrero tiene hasta 28 días.");
                    correcto = false;
                }
            }
        } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
            if (dia < 1 || dia > 30) {
                alert("Error, estos meses solo tienen 30 días.");
                correcto = false;
            }
        } else {
            if (dia < 1 || dia > 31) {
                alert("Error, estos meses tienen hasta 31 días.");
                correcto = false;
            }
        }
    } else {
        alert("Error, la fecha está vacía.");
    }
}

// función para recoger el valor del radio button
function comprobarRadio(radio) {
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value;
        }
    }
}


// función activada al pulsar el botones que usa las funciones auxiliares anteriores
function comprobarDatos() {
    let testNombre = document.getElementById("nombre").value;
    let testPrimerApellido = document.getElementById("primerApellido").value;
    let testSegundoApellido = document.getElementById("segundoApellido").value;
    let testFechaNac = document.getElementById("fechaNac").value;
    let testEdad = document.getElementById("edad").value;
    let testAcceso = comprobarRadio(document.getElementsByName("acceso"));

    comprobarVacio(testNombre);
    comprobarVacio(testPrimerApellido);
    comprobarVacio(testSegundoApellido);
    comprobarVacio(testFechaNac);
    comprobarVacio(testEdad);

    comprobarEdad(testEdad);
    comprobarFecha(testFechaNac);

    if (correcto) {
        nombreFinal = testNombre;
        primerApellidoFinal = testPrimerApellido;
        segundApellidoFinal = testSegundoApellido;
        fechaNacFinal = testFechaNac;
        edadFinal = testEdad;
        pruebaAccesoFinal = testAcceso;

        ventanaNueva = window.open("nuevo.html", "Información")         
    }
}

