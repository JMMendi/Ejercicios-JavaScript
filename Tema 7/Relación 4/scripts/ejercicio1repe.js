let bloque = document.getElementById('bloque');

let body = document.body;

bloque.style.backgroundColor = "";

async function traerJson(url) {
    let traer = await fetch(url);
    let info = await traer.json();

    let members = info.members;

    let base = document.createElement('h1');
    base.textContent = info.secretBase + " (" + info.homeTown + ")";
    base.style.textAlign = "center";
    bloque.appendChild(base); 

    members.forEach(elemento => {
        let nombre = elemento.name;
        let identidad = elemento.secretIdentity;
        let edad = elemento.age;

        // let titulo = elemento.title;
        // let contenido = elemento.body;

        let div = document.createElement('div');
        div.style.border = "1px solid black";
        div.style.margin = "1%";
        div.style.padding = "1%";
        div.style.borderRadius = "10px";
        
        let h2 = document.createElement('h2');
        h2.textContent = identidad;
        h2.style.textDecoration = "underline";

        div.appendChild(h2);

        let h3 = document.createElement('h3');
        h3.textContent = nombre;
        div.appendChild(h3);

        let parrafo = document.createElement('p');
        parrafo.textContent = "Edad:" + edad;
        div.appendChild(parrafo);

        let poderes = elemento.powers;
        let lista = document.createElement('ul');
        let primerElemento = document.createElement('li');
        primerElemento.textContent = "Poderes"
        primerElemento.style.textDecoration = "underline";
        primerElemento.style.listStyle = "none";
        primerElemento.style.marginBottom = "1%";
        lista.appendChild(primerElemento);

        poderes.forEach(poder => {
            let elemento = poder;
            let item = document.createElement('li');
            item.textContent = elemento;

            lista.appendChild(item);
        });
        div.appendChild(lista);

        bloque.appendChild(div);
    });
}

// traerJson("https://jsonplaceholder.typicode.com/posts");

traerJson("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");