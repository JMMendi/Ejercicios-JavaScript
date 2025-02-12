let div1 = document.getElementById('tiempo');
let div2 = document.getElementById('articulos');

async function traerArticulos(url) {
    let traer = await fetch(url);
    let info = await traer.json();

    info.forEach(articulo => {
        let titulo = articulo.title;
        let contenido = articulo.body;

        let h2 = document.createElement('h2');
        h2.textContent = titulo;
        div2.appendChild(h2);

        let parrafo = document.createElement('p');
        parrafo.textContent = contenido;
        div2.appendChild(parrafo);

        let hr = document.createElement('hr');
        div2.appendChild(hr);
    });
}

traerArticulos("https://jsonplaceholder.typicode.com/posts");