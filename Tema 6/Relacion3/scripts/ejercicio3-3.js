let imagenes = document.querySelectorAll('img');

for (let i = 0; i < imagenes.length ; i++) {
    imagenes[i].addEventListener('click', mostrarPrincipal);
}

function mostrarPrincipal() {
    let principal = document.getElementById('principal');
    
    if (principal.children.length != 0) {
        principal.children[0].remove();
    }
    
    let imagen = document.createElement('img');
    imagen.setAttribute('src', this.getAttribute('src'));
    imagen.setAttribute('width', "480px");
    imagen.setAttribute('height', '360px');
    principal.appendChild(imagen);

}