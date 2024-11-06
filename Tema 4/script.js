let arrayFinal = [];

// Visualice el mayor elemento del array o mensaje si no se ha generado 

function generarArray() {
    let arrayAleatorio = [];
    for (i = 0; i < 50; i++) {
        arrayAleatorio.push(Math.floor(Math.random() * 50));
        arrayFinal.push(arrayAleatorio[i]);
    }

    console.log(arrayAleatorio.toString());
}

// Visualice el mayor elemento del array o mensaje si no se ha generado 

function mostrarMayor() {
    let numero = 0;
    for (i = 0; i < arrayFinal.length; i++) {
        if (arrayFinal[i] > numero) {
            numero = arrayFinal[i];
        }
    }
    if (numero == 0) {
        console.log("Error, no existe el array con números.");
    } else {
        console.log(numero)
    }
}

// Ordene el array y lo visualice o mensaje si no se ha generado

function ordenarArray() {
    if (arrayFinal.length == 0) {
        console.log("Error, no se puede ordenar un array que no existe.");
    } else {
        arrayFinal.sort((function (a, b) { return a - b })); // Para ordenar números hay que poner esta función auxiliar en el sort para que te lo haga bien.
        console.log("Tras ordenarlo queda: " + arrayFinal.toString());
    }
}

//  Busque un elemento en el array e indique su posición o mensaje si no se ha generado

function buscarEnArray() {
    if (arrayFinal.length == 0) {
        console.log("Error, no se puede buscar en un array que no existe.");
    } else {
        let buscar = document.getElementById('busqueda').value;
        let flag = false;
        for (i = 0; i < arrayFinal.length; i++) {
            if (arrayFinal[i] == buscar) {
                console.log("El elemento " + buscar + " está en la posición " + i + " del array.");
                flag = true;
            }
        }
        if (!flag) {
            console.log("El elemento " + buscar + " no estaba en el array.");
        }
    }
}

//  Elimine un elemento del array indicando su posición o mensaje si no se ha generado

function eliminarEnArray() {
    if (arrayFinal.length == 0) {
        console.log("Error, no se puede buscar en un array que no existe.");
    } else {
        let eliminar = document.getElementById("elementoEliminar").value;
        for (i = 0; i < arrayFinal.length; i++) {
            if (arrayFinal[i] == eliminar) {
                arrayFinal.splice(i, 1);
            }
        }
        console.log(arrayFinal.toString());
    }
}

//  Invierta los elementos del array y lo visualice o mensaje si no se ha generado 

function invertirOrden() {
    if (arrayFinal.length == 0) {
        console.log("Error, no se puede invertir el orden de un array que no existe.");
    } else {
        arrayFinal.sort((function (a, b) { return a - b }));
        arrayFinal.reverse(); 
        console.log("Tras ordenarlo queda: " + arrayFinal.toString());
    }
}

// Desplaza a la derecha los elementos un cierto número de veces indicado como dato de entrada y lo visualice, o mensaje si no se ha generado 
function desplazarDerecha() {
    if (arrayFinal.length == 0) {
        console.log("Error, no se puede desplazar un array que no existe.");
    } else {
        let posicion = document.getElementById("posicion").value;
        let veces = document.getElementById("veces").value;
        for (i = 0 ; i < veces ; i++) {
            arrayFinal.splice(posicion, 1, "----");
            posicion++;
        }
        console.log("Tras el desplazamiento se queda como: " + arrayFinal.toString());
    }
}

// Cree un nuevo array con los elementos del array sin repetir y lo visualice o mensaje si no se ha generado

function duplicarArray() {
    if (arrayFinal.length == 0) {
        console.log("Error, no se puede duplicar un array que no existe.");
    } else {
        let arrayCopia = [];
        arrayFinal.forEach(element => {
            arrayCopia.push(element);
        });
        console.log("La copia es: " + arrayCopia.toString())
    }
}