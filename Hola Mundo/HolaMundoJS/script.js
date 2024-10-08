function numerosPrimos() {
  let num1 = prompt("Escribe el primer número aquí: ");

  for (let i = 2; i < num1; i++) {
    if (num1 % i == 0) {
      console.log("Mardision, " + num1 + " no es primo.");
      break;
    } else {
      console.log(num1, " es un premoh!");
    }
  }
}

// Busquemos la cantidad de divisores de num

function divisores() {
  let num1 = prompt("Escriba el número a encontrar divisores: ");
  let contador = 0;

  for (let i = 2; i < num1; i++) {
    if (num1 % i == 0) {
      console.log(i + ", ");
      contador++;
    }
  }
  console.log(contador + " divisores hay.");
}

//3.- Programa que me enseñe los primos entre dos numeros dados y me diga la cantidad, ambos mayor que 100

function premos() {
  let num1 = prompt("Escriba el primer número: ");
  let num2 = prompt("Escriba el segundo número: ");
  let cantidad = 0;

  for (let i = num1; i <= num2; i++) {
    10;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        break;
      } else {
        console.log(i);
        cantidad++;
        break;
      }
    }
  }
  console.log(
    "Entre ",
    num1,
    " y ",
    num2,
    " hay ",
    cantidad,
    " numeros primos."
  );
}

//4.- Programa que muestre la cantidad de numeros primos
//indicadas a partir de un numero indicado por ejemplo
//los primeros 43 numeros primos a partir de 100

function premosALaCarta() {
  let num1 = prompt("Indique un número aquí: ");
  let cantidad = prompt("Indique el número de primos que quiere sacar: ");
  let i = num1;

  do {
    i++;
    for (let j = 2; j < num1; j++) {
      if (i % j == 0) {
        break;
      } else {
        console.log("Mira! ", i, " es un premoh!");
        cantidad--;
        break;
      }
    }
  } while (cantidad >= 0);
}

premosALaCarta();
