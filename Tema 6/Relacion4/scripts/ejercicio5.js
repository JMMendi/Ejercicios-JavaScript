let parrafos = document.querySelectorAll('p');

let boton1 = document.getElementById('remove');
boton1.addEventListener('click', quitarParrafo);

function quitarParrafo() {
    parrafos[1].remove();
}

let boton2 = document.getElementById('ocultar');
boton2.addEventListener('click', ocultarArticulo);

let articulos = document.querySelectorAll('article');

function ocultarArticulo() {
    if (!articulos[1].getAttribute('hidden')) {
        articulos[1].setAttribute('hidden', '');
    }
}

let boton3 = document.getElementById('mostrar');
boton3.addEventListener('click', mostrarArticulo);

function mostrarArticulo() {
    articulos[1].removeAttribute('hidden');
}