// 1. Crea un programa que devuelva la fecha del sistema en formato:
// "Hoy es martes 24 de octubre de 2023"

function mostrarFecha() {
    let fecha = new Date(Date.now());

    let diasSemanas = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    let dia = fecha.getDate();
    let diaSemana = fecha.getDay();
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();
    console.log("Hoy es " + diasSemanas[diaSemana-1] + " " + dia + " de " + meses[mes] +  " de " + anio);
}

// 2. Crea una página web que permita validar una fecha introducida por el usuario, con los campos: 
// día, mes y año. En caso de ser incorrecta devuelve un error. Si es correcta se crea el objeto Date
//  y se muestra en la misma página la fecha en formato: 24/12/2023

function validarFecha() {
    let dia = parseInt(document.getElementById("diaValidar").value);
    let mes = parseInt(document.getElementById("mesValidar").value);
    let anio = parseInt(document.getElementById("anioValidar").value);

    let resultado = console.log(dia + "/" + mes + "/" + anio);


    if (mes < 1 || mes > 12) {
        alert("Error, el mes no es correcto.");
    } else if (dia < 1 || dia > 31) {
        alert("Error, el día no es correcto.")
    } else if (mes == 2) {
        if (dia > 28) {
            alert("Error, el día no es correcto.")
        }
        resultado;
    } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
        if (dia > 30) {
            alert("Error, el día no es correcto.")
        }
        resultado;
    } else {
        resultado;
    }
    let meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


    let diaResultado = new Date(anio, mes, dia);
    alert((diaResultado.getUTCDate()+1) + "/" + meses[diaResultado.getMonth()] + "/" + diaResultado.getFullYear());
}

// 3.Crea una página que muestre la hora del sistema. Se realizará una función que se ejecuta cada segundo.  
// Usa la función setTimeout que llama a la función mueveReloj()

// setTimeout("mueveReloj()",1000)
function mueveReloj() {
    let hora = new Date().getSeconds();
    console.log(hora)
}

// 4. Añadir un botón a la actividad 3 que cuando se pulse muestre la diferencia entre el tiempo transcurrido desde la
// primera vez que se pulsa hasta la segunda vez que pulsamos. 
// Añade otro botón que sea reiniciar para poner los contadores a cero y poder empezar el programa.

var contador = 0
var momentoActual = 0;
var momentoFin = 0;
function contarTiempo() {
    contador++;
    
    if (contador == 1) {
        momentoActual = new Date();
    } else if (momentoActual != 0 && contador == 2) {
        momentoFin = new Date();
        console.log(parseInt((momentoFin - momentoActual) / 1000) + " segundos han transcurrido entre pulsaciones del botón.");
        contador = 0;
    }
}

function pararTiempo() {
    momentoActual = 0;
    momentoFin= 0;
}

// 5. Crea un programa que una vez introducidas dos fechas (suponemos que son válidas) devuelva cual de las dos es mayor. 

