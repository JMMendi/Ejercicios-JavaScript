// elementoObjetivo.insertAdjacentElement(posición, elemento);

let articulos = document.getElementsByTagName('article');

let boton = document.getElementById('add');
boton.addEventListener('click', parrafoAleatorio);

function parrafoAleatorio() {
    let parrafo = document.createElement('p');
    parrafo.textContent = "lorem20";
    let array = ['beforend', 'beforebegin', 'afterbegin', 'afterend'];
    let aleatorio = parseInt(Math.random() * array.length);
    let articuloAleatorio = parseInt(Math.random() * articulos.length);
    articulos[articuloAleatorio].insertAdjacentElement(array[aleatorio], parrafo);
}