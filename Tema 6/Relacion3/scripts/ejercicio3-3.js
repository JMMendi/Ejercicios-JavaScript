let imagenes = document.querySelectorAll('img');

for (let i = 0; i < imagenes.length ; i++) {
    imagenes[i].addEventListener('click', mostrarPrincipal);
}

function mostrarPrincipal() {
    let principal = document.getElementById('principal');
    let imagen = document.createElement('img');
    imagen.setAttribute('src', this.getAttribute('src'));
    principal.appendChild(imagen);

}