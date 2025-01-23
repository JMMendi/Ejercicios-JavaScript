/* 
Crea una promesa que simule la descarga de un archivo. Si el archivo se 
descarga con éxito (por ejemplo, después de 2 segundos), 
debe resolverse con un mensaje que diga: "Archivo descargado con éxito". 
Si ocurre un error (simulado con una probabilidad del 50%), debe rechazarse 
con el mensaje: "Error al descargar el archivo".

Usa setTimeout para simular el tiempo de descarga.
Usa Math.random() para decidir si la promesa se resuelve o rechaza.
*/

let descarga = parseInt(Math.random() * 100);
console.log(descarga);

let archivo = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (descarga >= 50) {
            resolve("Archivo descargado con éxito");
        } else {
            reject("Error al descargar el archivo");
        }
    }, 2000);
});

archivo.then(
    (mensaje) => console.log(mensaje)
).catch(
    (error) => console.log(error)
);