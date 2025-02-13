// ------------ Definición de arrays
let productos = [
    { id: 0, nombre: "Leche", stock: 7 },
    { id: 1, nombre: "Huevos", stock: 5 },
    { id: 2, nombre: "Mantequilla", stock: 8 },
    { id: 3, nombre: "Chocolate", stock: 6 },
]
let carro = [];

// localStorage.setItem('articulo', JSON.stringify(productos));


// ------------------------ Mostrar Tienda y actualizar datos
let spans = document.getElementsByClassName('stock');

function actualizarStock() {
    let i = 0;
    while (i < spans.length) {
        spans[i].textContent = productos[i].stock;
        i++;
    }
}

function actualizarNombres() {
    let i = 0;
    let nombres = document.getElementsByClassName('nombre');

    while (i < nombres.length) {
        nombres[i].textContent = productos[i].nombre;
        i++;
    }
}

function mostrarTienda() {
    actualizarStock();
    actualizarNombres();
}

mostrarTienda();

// ------------------------------- Añadir al Carrito los productos

let add = document.querySelectorAll(".addCarro");
add.forEach(boton => {
    boton.addEventListener('click', addCarroCompra);
});

function existeEnCarro(id) {
    let existe = false;
    console.log(productos);

    // carrito.forEach(elemento => {
    //     if (elemento.id.includes(id)) {
    //         existe = true;
    //     }
    // });
    // console.log(existe);
    // return existe;
}

existeEnCarro(1);

function addCarroCompra() {
    let index = this.getAttribute('id');

    if (productos[index].stock > 0) {
        productos[index].stock--;

        console.log(productos[index]);

        console.log("-------------------------");

    } else {
        alert("Error, ya no hay más stock")
    }

    localStorage.setItem('carro', JSON.stringify(carro));
    actualizarStock();
}

// -------------------- Mostrar contenido del carro

let botonMostrar = document.getElementById('show');
botonMostrar.addEventListener('click', mostrarCarro);

function mostrarCarro() {
    let mostrar = document.getElementById('carro');

    if (window.localStorage == null) {
        let carroContent = localStorage.getItem("carro");
        let contenido = JSON.parse(carroContent);
        for (let i = 0; i < contenido.length; i++) {
            mostrar.textContent = "Artículo: " + contenido[i].nombre + ". Stock: " + contenido[i].stock;
        }
        let padre = mostrar.parentElement;
        padre.removeAttribute('hidden');
    } else {
        alert("No hay productos en el carro.");
    }
}
