let producto1 = {
    nombre: "Tel1", marca: "Nokia", precio: 400,
}

let producto2 = {
    nombre: "Tel2", marca: "Samsung", precio: 450,
}

let producto3 = {
    nombre: "Tel3", marca: "Iphone", precio: 800,
}

let productos = [];
productos.push(producto1);
productos.push(producto2);
productos.push(producto3);

let boton1 = document.getElementById('leer');
boton1.addEventListener('click', leerProductos);

function leerProductos() {
    let comprarProducto = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(productos));
            reject(Error('No se han podido leer los productos'));
        }, 1000);
    })
}

function comprarProductos(indice) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(productos[indice]));
        },2000);
    })

}

Promise.resolve().then(leerProductos).then(comprarProductos(productos[1]).then(
    productos.splice(1,1)
)).catch(console.error);

