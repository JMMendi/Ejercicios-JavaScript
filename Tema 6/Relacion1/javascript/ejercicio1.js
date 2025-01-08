let titulo = document.getElementById('titulo');
titulo.onclick = cambiarSize;

function cambiarSize() {
    let size = prompt('Escriba el tamaño de la letra para el título');
    titulo.style.fontSize = size + "px";
} 

let columnas = document.querySelectorAll('tr');

columnas.forEach(element => {
    element.firstElementChild.addEventListener('click', add);
});

function add() {
    let nuevo = prompt("Escriba el elemento a añadir");
    let elemento = this.parentNode.lastElementChild.firstElementChild;
    let item = document.createElement("li");
    item.textContent = nuevo;
    elemento.appendChild(item);
}