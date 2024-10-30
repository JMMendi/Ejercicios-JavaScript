// ACTIVIDAD 1

// 1. Crea una variable llamada var_global y asignale un nº.

var var_global = 6;

// 2. Crea 3 funciones, suma_dos_num(x,y), factorial_num(x), menor(x,y) . Por el nombre que tienen se deduce lo que hace cada una de las funciones.  

console.log(" ---------------- ACTIVIDAD 1 ------------------");


function suma_dos_num(x,y) {
    return (x+y);
}
function factorial_num(x) {
    let factorial = 1;
    for (let i = x ; i > 0 ; i--) {
        factorial *= i;
    }
    return factorial;
}

function menor(x,y) {
    if (x < y) {
        console.log(x , " es menor que ", y);
    } else if (x > y) {
        console.log(y, " es menor que ", x);
    } else {
        console.log(x + " y " + y + " son iguales.");
    }
}

// 3. Las funciones no devuelven nada, almacenan el resultado en var_global. 

// 4. Muestra el resultado de cada una de las funciones con el resultado almacenado en var_global.

console.log(suma_dos_num(var_global, 10));
console.log(factorial_num(var_global));
console.log(menor(var_global, 5));

// 5. ¿Se puede declarar la variable var_global con let?  Explica el motivo del sí o del no.

// No, ya que es una variable global ya declarada, puedes redefinir el valor de la variable pero no volver a inicializarla con let

// ACTIVIDAD 2

// 1. Sobre esas mismas funciones y tarea anterior, elimina la var_global y haz un console.log fuera de cada una de las funciones y que muestren el resultado de cada una de ellas.
// Si la eliminamos da error ya que las funciones no pueden acceder a una variable no declarada globalmente.

console.log(" ---------------- ACTIVIDAD 2 ------------------");


function suma_dos_num2(x,y) {
    return (x+y);
}
function factorial_num2(x) {
    let factorial = 1;
    for (let i = x ; i > 0 ; i--) {
        factorial *= i;
    }
    return factorial;
}

function menor2(x,y) {
    if (x < y) {
        console.log(x + " es menor que " + y);
    } else if (x > y) {
        console.log(y + " es menor que " + x);
    } else {
        console.log(x + " y "+ y + " son iguales.");
    }
}

console.log(suma_dos_num2(var_global, 10));
console.log(factorial_num2(var_global));
console.log(menor2(var_global, 5));

// 2. ¿Es necesario hacer uso de una variable global en este caso? Explica el motivo.

// Solo si esa variable la vas a usar en otras funciones. Ya que var amplia el ámbito por el cual puede ser usado, siendo let una variable que se puede usar solo
// de manera local.


// ACTIVIDAD 3
// 1. Almacena el resultado en una variable local en cada una de las funciones. Prueba con var y let. 

console.log(" ---------------- ACTIVIDAD 3 ------------------");

function suma_dos_num3(x,y) {
    let suma = (x+y);
    return (x+y);
}
function factorial_num3(x) {
    let factorial = 1;
    for (let i = x ; i > 0 ; i--) {
        factorial *= i;
    }
    return factorial;
}

function menor3(x,y) {
    let resultado;
    if (x < y) {
        resultado = (x + " es menor que " + y);
    } else if (x > y) {
        resultado = (y + " es menor que " + x);
    } else {
        resultado = (x + " y " + y + " son iguales.");
    }
    return resultado;
}

console.log(suma_dos_num3(var_global, 10));
console.log(factorial_num3(var_global));
console.log(menor3(var_global, 5));


// 2. Muestra el resultado de cada una de las funciones desde fuera de ellas, accediendo a las variables var y let. ¿Qué pasa?

// con Var se pueden declarar otra vez las variables con mismo nombre, el ámbito es más global (salvo en funciones que está restringido
// al ámbito de las funciones ) mientras que let es más restrictivo en la declaración de variables

