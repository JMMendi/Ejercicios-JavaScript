let button1 = document.createElement('button');
button1.textContent = "Mostrar nº Enlaces";
button1.setAttribute('id', 'enlaces')
document.body.appendChild(button1);

let button2 = document.createElement('button');
button2.textContent = "Penúltimo Enlace";
button2.setAttribute('id', 'direccion')
document.body.appendChild(button2);

let button3 = document.createElement('button');
button3.textContent = "Enlaces de Prueba";
button3.setAttribute('id', 'prueba')
document.body.appendChild(button3);

let button4 = document.createElement('button');
button4.textContent = "Enlaces Tercera";
button4.setAttribute('id', 'tercera')
document.body.appendChild(button4);

let boton1 = document.getElementById('enlaces');
let boton2 = document.getElementById('direccion');
let boton3 = document.getElementById('prueba');
let boton4 = document.getElementById('tercera');

let links = document.querySelectorAll('a');

boton1.addEventListener('click', numeroEnlaces);
boton2.addEventListener('click', direccionEnlace);
boton3.addEventListener('click', enlacePrueba);
boton4.addEventListener('click', enlacesTercera);

function numeroEnlaces() {
    alert("Hay un total de " + links.length + " enlaces en la página");
}

function direccionEnlace() {
    let penultimo = links.length-2;
    console.log(penultimo);
    let enlace = links[penultimo];
    alert("El penúltimo enlace es: " + enlace);
}

function enlacePrueba() {
    let conteo = 0;
    links.forEach(element => {
        if (element.href === "http://prueba/") {
            conteo++;
        }
    });
    alert("El número de enlaces a http://prueba son: " + conteo);
}

let parrafos = document.querySelectorAll('p');

function enlacesTercera() {
    let parrafo = parrafos[2];
    let conteo = parrafo.getElementsByTagName('a').length;
    
    alert("En el tercer párrafo hay un total de " + conteo + " enlaces");
}