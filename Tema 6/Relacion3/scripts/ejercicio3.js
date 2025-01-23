let parrafos = document.querySelectorAll('p');
let secciones = document.querySelectorAll('section');


let boton1 = document.createElement('button');
boton1.textContent = "Añadir link";
boton1.setAttribute('id', 'add');

let boton2 = document.createElement('button');
boton2.textContent = "Añadir saltos de línea";
boton2.setAttribute('id', 'salto');

secciones[1].appendChild(boton1);
secciones[1].appendChild(boton2);


document.getElementById('add').addEventListener('click', adding);

function adding() {
    let link = prompt('Escriba el link a añadir');
    let texto = prompt('Escriba el texto asociado');

    let ponerLink = document.createElement('a');
    ponerLink.href = link;
    ponerLink.textContent = texto;

    parrafos[1].appendChild(ponerLink);
}

document.getElementById('salto').addEventListener('click', saltoLinea);

function saltoLinea() {
    parrafos.forEach(texto => {
        let lineas = texto.textContent;
        let inicio = 0;
        var text = "";
        for (let i = 0 ; i < lineas.length ; i++) {
            let frase;
            if (lineas[i] === ".") {
                frase = lineas.substring(inicio, i);
                frase.concat('<br>'); 
                inicio = i+1;
                text.concat(frase);
                
            }
            
        }
        /*
        parrafos.forEach(function (parrafo) {
            parrafo.innerHTML = parrafo.innerHTML.replace(/\./g '.<br>');
        });
        
        */
        texto.textContent = text;
        console.log(texto.textContent);
    });
}

let boton3 = document.createElement('button');
boton3.textContent = "Contar Palabras";
boton3.setAttribute('id', 'conteo')
secciones[1].appendChild(boton3);

document.getElementById('conteo').addEventListener('click', contarPalabras);

function contarPalabras() {
    var conteo = 0;
    parrafos.forEach(frases => {
        let lineas = frases.textContent;
        
        let palabras = lineas.match(/[A-Za-z0-9ÁÉÓÍÚáéíóúñ]+/g);
        conteo += palabras.length;
        
    });
    console.log("El total de palabras de los párrafos es: " + conteo);
}


