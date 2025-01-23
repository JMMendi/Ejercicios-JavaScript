/* 1. Realiza una pomesa la cual muestre "promesa cumplida" 
si control = true y "promesa no cumplida" en caso contrario. */

let boton = document.getElementById('control');
boton.addEventListener('click', cambiarBool);

var control;

function cambiarBool() {
    if (control) {
        control = false;
    } else {
        control = true;
    }
    console.log(control);
}

let promesa = new Promise((resolve, reject) =>
{
    setTimeout(() => {
        if (control) {
            resolve('Promesa cumplida');
        } else {
            reject('Promesa no cumplida');
        }
    }, 2000)

});

promesa.then((successMessage) => 
{
    console.log(successMessage);
})