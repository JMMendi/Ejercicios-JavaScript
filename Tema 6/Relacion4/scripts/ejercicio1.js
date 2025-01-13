let parrafos = document.querySelectorAll('p');

for (let i = 0 ; i < parrafos.length ; i++) {
    parrafos[i].addEventListener('click', mostarHermanos);
}

function mostarHermanos() {
    if (this.previousElementSibling != null) {
        console.log("El hermano anterior: " + this.previousElementSibling.textContent);
    } else {
        console.log("No tiene hermano anterior");
    }
    if (this.nextElementSibling != null) {
        console.log("El hermano posterior: " + this.nextElementSibling.textContent);
    } else {
        console.log("No tiene hermano posterior");
    }

}