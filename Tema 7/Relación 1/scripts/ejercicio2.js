/* 2. Realiza una promesa que devuelve "Cara" si se cumple y "Cruz" 
en caso de no ser cumplida. Los casos son nº par aleatorio = "Cara",
caso contrario "Cruz".  Evalúa el resultado de la promesa con los métodos
 then y catch. */

let numeroAleatorio = parseInt(Math.random() * 100);
console.log(numeroAleatorio);
console.log(numeroAleatorio % 2);

let promesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (numeroAleatorio % 2 == 0) {
            resolve('Cara');
        } else if (numeroAleatorio % 3 == 0) {
            reject('Cruz');
        }
    }, 3000);
});

// promesa.then(
//     function(value) {console.log("La tirada es... " + value);},
//     function(error) {console.log("La tirada es... " + error);}
// );

promesa.then(
    (mensaje) => console.log("La tirada es... :" + mensaje)
).catch(
    (cruz) => console.log("La tirada es... : " + cruz)
);