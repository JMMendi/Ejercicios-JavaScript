/* 
Crea una serie de funciones que devuelvan promesas y encadénalas para 
simular un proceso de registro de usuario en una aplicación. 
El flujo debe ser el siguiente:

Verificar si el nombre de usuario está disponible (simula con un 
tiempo de 1 segundo).

Guardar los datos del usuario en la base de datos (simula con un 
tiempo de 2 segundos).

Enviar un email de bienvenida (simula con un tiempo de 1.5 segundos).
Si cualquier paso falla, muestra un mensaje de error correspondiente.

*/


let validarUsuario = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Usuario válido"), resolve('Usuario válido');
    }, 1000);
});

let guardarDatos = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log("Datos guardados"), resolve('Datos guardados correctamente');
    }, 2000);
})

let email = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Bienvenido " + usuario), resolve('Bienvenido ' + usuario)
    }, 1500);
});


let boton = document.getElementById('validar').addEventListener('click', validacion);

function validacion() {
    let usuario = document.getElementById('nombre').value;

    Promise.resolve().then(validarUsuario).then(guardarDatos).then(email).catch(console.error);
}


// function validacion() {
//     Promise.all([validarUsuario, guardarDatos, email]).then(
//         function (mensaje) {
//         console.log("Muestra algo po favo" + mensaje);
//     }).catch( 
//         function(error) {
//         console.log("Ay no" + error);
//     });
// }