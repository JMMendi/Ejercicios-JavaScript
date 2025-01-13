let articulos = document.querySelectorAll('article');


let boton1 = document.getElementById('hijos');
let boton2 = document.getElementById('hermanos');


boton1.addEventListener('click', mostrarHijos);
boton2.addEventListener('click', mostrarHermanos);


function mostrarHijos() {
    for (let i = 0; i < articulos.length ; i++) {
        console.log('Los párrafos del ' + (i+1) + 'º artículo son: ');
        let parrafo1 = articulos[i].firstElementChild.textContent;
        let parrafo2 = articulos[i].lastElementChild.textContent;
        console.log(parrafo1);
        console.log(parrafo2);
        console.log("---------------");
    }
}

function mostrarHermanos() {
    for (let i = 0 ; i < articulos.length ; i++) {
        console.log('Los párrafos hermanos del ' + (i+1) + 'º artículo son: ');
        let parrafo1 = articulos[i].firstElementChild.nextElementSibling.textContent;
        console.log(parrafo1);
    }
}