let divArticulos = document.getElementById('cosasFetch');

async function devolverArticulos(url) {
    let articulos = await fetch(url);

    let texto = await articulos.json();

    texto.forEach(articulo => {
        let titulo = articulo.title;
        let body = articulo.body;

        let div = document.createElement('div');

        let h1 = document.createElement('h1');
        h1.textContent = titulo;
        div.appendChild(h1);

        let parrafo = document.createElement('p');
        parrafo.textContent = body;
        div.appendChild(parrafo);

        divArticulos.appendChild(div);
    });

}

devolverArticulos("https://jsonplaceholder.typicode.com/posts");