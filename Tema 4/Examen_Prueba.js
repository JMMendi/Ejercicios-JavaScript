let motos = [];
var marca;
var modelo;
var color;
var matricula;

var nuevaVentana = window.open("emergente.html", "_blank", "width=600, height=400");



function campoVacio(campo) {
    if (campo.length == 0 || campo == null) {
        console.log("Error, el campo no puede estar vacío");
        return true;
    }
    return false;
};

function comprobarDatos() {
    marca = document.getElementById('marca').value;
    modelo = document.getElementById('modelo').value;
    color = document.getElementById('color').value;
    matricula = document.getElementById('matricula').value;
    //cilindrada = document.getElementById('cilindrada').value;

    $errores = false;
    if (campoVacio(marca) || campoVacio(modelo) || campoVacio(color) || campoVacio(matricula)) {
        $errores = true;
    }

    if (!$errores) {
        nuevaVentana = window.open("emergente.html", "_blank", "width=600, height=400");

        nuevaVentana.document.getElementById('marca').value = marca;
        nuevaVentana.document.getElementById('modelo').innerHTML = opener.modelo;
        nuevaVentana.document.getElementById('color').innerHTML = opener.color;
        nuevaVentana.document.getElementById('matricula').innerHTML = opener.matricula;

        
        //nuevaVentana.opener.document.getElementById('cilindrada').value= cilindrada;
    } else {
        alert("Hay errores")
    }
};

function recibirValores(marca, modelo, color, matricula) {
    marcaNueva = window.opener(marca);
    modeloNuevo = window.opener(modelo);
    colorNuevo = window.opener(color);
    matriculaNueva = window.opener(matricula);
}

