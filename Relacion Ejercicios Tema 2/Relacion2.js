// 1.Realiza un ejercicio para llenar un vector con 5 nombres, muestra en consola el contenido del vector.
let vector = ["Juan", "Pepito", "Ana", "Laura", "Alex"];
console.log(vector);

// 2.Muestra el tipo de dato del contenido de una posición del vector.­
let vector2 = ["Juan", 456, true, "Laura", false];
console.log(typeof(vector2));


// 3.Busca la posición de elemento “a la antigua usanza”, recorriendo el vector hasta encontrar la posición.
let vector3 = ["Federico", "Rosa", "Sandra", "Carlos", "Augusto"];
let nombre = "Carlos";
for (let i = 0 ; i < length(vector3) ; i++) {
    if (nombre == vector3(i)) {
        console.log("La posición de ", nombre, " es: ", i);
    }
}


/* 4.Usando un método de la clase Array forEach. Recorrer el vector del ejercicio 1. Ejemplo de uso.
    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    let array1 = ['antonio', 'juan', 'carlos']; 

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
*/

vector.forEach(element => {console.log(element); });

/* 5.Leer por teclado 2 variables, nombre y edad y mostrar un mensaje: "El usuario ------- tiene --- años"
function leer_nombre(){
    let nombre = prompt("¿Cómo te llamas?");
    console.log("Hi ! "+nombre);
}
*/



// 6.Crear un programa que calcule el factorial de un número.

// 7.Sobre la misma función pasa por parámetro el número al que vamos a calcular el factorial

// 8.Añade una estructura de control para que devuelva -1 si es negativo y 1 si el número es cero. En caso contrario la función devuelve el factorial del nº.

// 9.Crear un programa que calcule el área de un círculo dado el valor del radio

// 10.Usa la sentencia debugger; para mostrar el contenido de una variable en un bucle for que recorre un vector.

// 11.Usa la herramienta debugger del navegador web para añadir punto de ruptura dentro del for del ejercicio anterior. (Guarda las capturas de pantalla)