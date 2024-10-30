function rellenarCampos() {
    document.getElementById("nombre").value = opener.nombreFinal;
    document.getElementById("primerApellido").value = opener.primerApellidoFinal;
    document.getElementById("segundoApellido").value = opener.segundApellidoFinal;
    document.getElementById("fechaNac").value = opener.fechaNacFinal;
    document.getElementById("edad").value = opener.edadFinal;
    document.getElementById("acceso").value = opener.pruebaAccesoFinal;
    
}

function conjeturaUlam() {
    let edad = document.getElementById("edad").value;
    let parrafo = document.getElementById("resultado");
    let cadena = "";
    console.log("Edad inicial: " + edad);

    do {
        if (edad % 2 == 0) {
            edad = (edad / 2);
            cadena.concat(edad + " ");
            console.log(cadena);
        } else {
            edad = (edad * 3) + 1;
            cadena.concat(edad + " ");
            console.log(cadena);
        }
    } while (edad > 1);
    parrafo.innerHTML = cadena;
}