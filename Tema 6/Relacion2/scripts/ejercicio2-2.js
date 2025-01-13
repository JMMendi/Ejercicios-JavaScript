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
    document.getElementById('numero').innerHTML = "Hay un total de " + links.length + " enlaces en la página";
    //alert("Hay un total de " + links.length + " enlaces en la página");
}

function direccionEnlace() {
    let penultimo = links.length-2;
    console.log(penultimo);
    let enlace = links[penultimo];
    document.getElementById('direcciones').innerHTML = "El penúltimo enlace es: " + enlace; 
    //alert("El penúltimo enlace es: " + enlace);
}

function enlacePrueba() {
    let conteo = 0;
    links.forEach(element => {
        if (element.href === "http://prueba/") {
            conteo++;
        }
    });
    document.getElementById('pruebas').innerHTML = "El número de enlaces a http://prueba son: " + conteo;
    //alert("El número de enlaces a http://prueba son: " + conteo);
}

let parrafos = document.querySelectorAll('p');

function enlacesTercera() {
    let parrafo = parrafos[2];
    let conteo = parrafo.getElementsByTagName('a').length;
    
    document.getElementById('enlacestres').innerHTML = "En el tercer párrafo hay un total de " + conteo + " enlaces";
    //alert("En el tercer párrafo hay un total de " + conteo + " enlaces");
}