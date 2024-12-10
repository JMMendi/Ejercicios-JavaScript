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
let imagen2 = document.getElementById('imagen2');
let imagen3 = document.getElementById('imagen3');


imagen.addEventListener('mouseover', superponer, false);
imagen.addEventListener('mouseout', salida, false);
imagen2.addEventListener('mouseover', superponer2, false);
imagen2.addEventListener('mouseout', salida2, false);
imagen3.addEventListener('mouseover', superponer3, false);
imagen3.addEventListener('mouseout', salida3, false);

function superponer() {
    imagen.style.transform = "scale(2.2)";
}

function salida() {
    imagen.style.transform = "scale(1.1)";

}

function superponer2() {
    imagen2.style.transform = "scale(2.2)";
}

function salida2() {
    imagen2.style.transform = "scale(1.1)";

}
function superponer3() {
    imagen3.style.transform = "scale(2.2)";
}

function salida3() {
    imagen3.style.transform = "scale(1.1)";

}


let imagenes = document.querySelectorAll('img');
// let imagenes = document.getElementsByTagName('img');
document.getElementById('agrandar').addEventListener('click', superponerTodos, false);
function superponerTodos() {
    imagenes.forEach(element => {
        element.style.transform = "scale(3,3)";
    });
    // for (let i = 0 ; i < imagenes.length ; i++) {
    //     imagenes[i].style.transform = "scale(3,3)";
    // }
}

let clickImagen = document.getElementsByTagName('img')[0].onclick=agrandarImagenes;

function agrandarImagenes() {
    for (let i = 0; i< imagenes.length ; i++) {
        imagenes[i].style.transform = "scale(1,1)";

    }
}
