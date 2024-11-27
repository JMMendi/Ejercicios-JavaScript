document.getElementById("parrafo").onclick=modificar;
let veces = 0;

function modificar() {
    veces++;
    document.getElementById("parrafo").innerHTML = "Se ha clickado " + veces + " veces.";
}

document.getElementById("parrafo2").addEventListener('click', modificar2, false);

let veces2 = 0;
function modificar2() {
    veces2++;
    document.getElementById("parrafo2").innerHTML = "Se ha clickado " + veces2 + " veces.";
}

let imagen = document.getElementById('imagen');
imagen.addEventListener('mouseover', superponer, false);
imagen.addEventListener('mouseout', salida, false);

function superponer() {
    imagen.width = 200;
    imagen.height = 200;
}

function salida() {
    imagen.width = 100;
    imagen.height = 100;
}

let imagenes = document.getElementsByTagName('img');
