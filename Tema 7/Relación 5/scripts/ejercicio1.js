let articulo = document.querySelectorAll('article')[0];

articulo.style.display = "flex";

let imagenes = document.querySelectorAll('img');

imagenes.forEach(imagen => {
    imagen.style.width = "400px";
    imagen.style.height = "620px";
});