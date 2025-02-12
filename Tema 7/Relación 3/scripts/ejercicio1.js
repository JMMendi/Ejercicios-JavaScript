let articulos = document.getElementById('articulos');

async function fetchJson(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        let text = await response.json();
        text.forEach(articulo => {
            let titulo = articulo.title;
            let body = articulo.body;

            let div = document.createElement('div');
            div.setAttribute('style', 'margin: 1%; border: 1px solid black');


            let h1 = document.createElement('h1')
            h1.textContent = titulo;
            let parrafo= document.createElement('p')
            parrafo.textContent = body;

            div.append(h1,parrafo);
            articulos.appendChild(div);
            
        });

    } catch (error) {
        console.error(error);
    }
}

fetchJson('https://jsonplaceholder.typicode.com/posts');