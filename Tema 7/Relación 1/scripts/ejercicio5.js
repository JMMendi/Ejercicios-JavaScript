let infoUsuario = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Devolviendo información al usuario');

    }, 2000);
});

let mensajeUsuario = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Devolviendo mensajes al usuario');
    }, 3000);
})

let notificiacionesUsuario = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Devolviendo notificaciones al usuario');
    }, 1000);
});

Promise.all([infoUsuario, mensajeUsuario, notificiacionesUsuario]).then(
    function (value) {
        console.log(value);
    }
).catch(
    function (error) {
        console.log(error);
    }
);