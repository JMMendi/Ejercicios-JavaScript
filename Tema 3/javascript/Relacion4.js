var todasLasCookies;
function guardarDatos() {
    document.cookie = "nombre=" + document.getElementById('nombre').value;
    document.cookie = "apellidos=" + document.getElementById('apellidos').value;
    document.cookie = "direccion=" + document.getElementById('direccion').value;
    document.cookie = "email=" + document.getElementById('email').value;
    document.cookie = "edad=" + document.getElementById('edad').value;

    todasLasCookies = document.cookie;
    console.log(todasLasCookies);

}

function mostrarCookies() {
    let nuevaVentana = window.open();
    nuevaVentana.document.write(todasLasCookies);
    
}