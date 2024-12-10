let campos = document.getElementsByTagName('input');

for (let i = 0 ; i < campos.length ; i++) {
    campos[i].addEventListener("keydown", colorFondo);
    campos[i].addEventListener("keyup", colorBlanco);
    campos[i].addEventListener("focus", colorVerde);
    campos[i].addEventListener("invalid", () => {
        console.log("Coso inválido");
    })

}


function colorFondo() {
    this.style.backgroundColor = "red";
}

function colorBlanco() {
    this.style.backgroundColor = "white";
}

function colorVerde() {
    this.style.backgroundColor = "green";
}

let boton = document.getElementById('validar');
boton.addEventListener("click", () => {
    let check = campos[1].checkValidity();
    console.log("Y lo que devuelve es..... : " + check);
})