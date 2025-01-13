let parrafos = document.querySelectorAll('p');

let boton1 = document.createElement('input');
boton1.setAttribute('id', 'palabras');
boton1.setAttribute('type', 'button');
boton1.setAttribute('value', 'Contar Palabras');
boton1.addEventListener('click', contarPalabras);

document.getElementById('seccion').appendChild(boton1);

function contarPalabras() {
    var conteo = 0;
    parrafos.forEach(parrafo => {
        let linea = parrafo.textContent;
        for(let i = 0 ; i < linea.length ; i++) {
            let palabras = linea.match(/[A-Za-z0-9ÁÉÓÍÚáéíóú]+/g);
            conteo = palabras.length;
        }
        console.log(conteo);
        let lista = document.createElement('ol');
        resultado.appendChild(lista);
        let listado = document.getElementsByTagName('ol')[0];
        let contar = document.createElement('li');
        contar.textContent = conteo;
        listado.appendChild(contar);
    });
}

let boton2 = document.createElement('input');
boton2.setAttribute('id', 'color');
boton2.setAttribute('value', 'Cambiar Color 2º Párrafo');
boton2.setAttribute('type', 'button');
boton2.addEventListener('click', cambiarColor);
document.getElementById('seccion').appendChild(boton2);

function cambiarColor() {
    if (parrafos[1].style.backgroundColor === null || parrafos[1].style.backgroundColor === "white") {
        parrafos[1].style.backgroundColor = "red";
    } else {
        parrafos[1].style.backgroundColor = "white";
    }
}