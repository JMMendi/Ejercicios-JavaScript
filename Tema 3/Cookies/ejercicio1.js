function comprobarNumero() {
    let num = parseFloat(document.getElementById("numero").value);

    if (num < 0) {
        alert("Error, el número introducido no es positivo.");
    } else if (!Number.isInteger(num) || Number.isNaN(num)) {
        alert("Error, el número no es entero");
    }

}

function numeroAleatorio() {
    let num = parseFloat(document.getElementById("aleatorio").value);

    if (num < 1 || num > 100) {
        alert("Error, el número a introducir tiene que estar entre 1-100");
    } else if (!Number.isInteger(num) || Number.isNaN(num)) {
        alert("Error, el número no es entero");
    }
}

function comprobarMarcado(radioGroup) {
    marcado = false;
    for (let i = 0 ; i < radioGroup.length ; i++) {
        if (radioGroup[i].isChecked) {
            marcado = true;
        }
    }
    console.log(marcado);
    return marcado;
}