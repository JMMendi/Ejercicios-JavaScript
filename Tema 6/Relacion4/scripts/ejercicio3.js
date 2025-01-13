let parrafos = document.querySelectorAll('p');

for (let i = 0 ; i < parrafos.length ; i++) {
    parrafos[i].addEventListener('click', cambiarColor);
    // let clickado = parrafos[i];
    // if (clickado.event.target === "click") {
    //     cambiarColor();
    // }
}

function cambiarColor() {
    let color1 = parseInt(Math.random() * 255);
    let color2 = parseInt(Math.random() * 255);
    let color3 = parseInt(Math.random() * 255);

    this.style.backgroundColor = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
}