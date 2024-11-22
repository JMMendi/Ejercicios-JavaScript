class Persona {
    constructor(nombre, apellidos, dni, fechaNacimiento, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
    }

}

class Alumno extends Persona {
    constructor(nombre, apellidos, dni, fechaNacimiento, edad, curso, asignaturas) {
        super(nombre, apellidos, dni, fechaNacimiento, edad);
        this.curso = curso;
        this.asignaturas = asignaturas;
    }
}

class Profesor extends Persona {
    constructor(nombre, apellidos, dni, fechaNacimiento, edad, cursos, asignaturas) {
        super(nombre, apellidos, dni, fechaNacimiento, edad);
        this.cursos = cursos;
        this.asignaturas = asignaturas;
    }
}


let alumnos = [{
    "nombre" : "Pedro",
    "apellidos" : "Gutierrez",
    "dni" : "12345678A",
    "fechaNacimiento" : "23/3/1990",
    "edad" : 34,
    "curso" : 1,
    "asignaturas" : ["Bases", "Programación", "FOL", "Empresas"]
},
{
    "nombre" : "Alex",
    "apellidos" : "Ubago",
    "dni" : "23456789B",
    "fechaNacimiento" : "12/6/1980",
    "edad" : 44,
    "curso" : 2,
    "asignaturas" : ["Despliegues", "Diseños", "Empresas", "PHP"]
}
];

let profesores = [];

function comprobarCadenas(cadena) {
    if (cadena == "") {
        alert("Error, este campo debe tener algo escrito.");
    }
}

function comprobarDni(cadena) {
    let letraDni = cadena.substring(cadena.length-1, cadena.length);
    let numero = cadena.substring(0, cadena.length-1);

    const letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    let comprobacion = letra[numero % 23];
    
    if (letraDni != comprobacion) {
        alert("Error, el DNI introducido no es válido.");
    }
}

function comprobarFecha(fechaNacimiento) {
    let fecha = fechaNacimiento.split("/");
    let dia = fecha[0];
    let mes = fecha[1];
    let anio = fecha[2];

    if (mes < 1 || mes > 12) {
        alert("Error. Mes inválido.");
    } else if (anio < 1900 || anio >= 2024) {
        alert("Error, Año inválido.");
    } else if (dia < 1 || dia > 31) {
        alert("Error, Día inválido");
    }
}

function comprobarEdad(edad, fechaNacimiento) {
    let fecha = fechaNacimiento.split("/");
    let dia = fecha[0];
    let mes = fecha[1];
    let anio = fecha[2];

    let fechaComprobar = new Date(anio + "-" + mes + "-" + dia);
    let comprobar = Math.floor((new Date() - fechaComprobar) / (1000 * 365 * 60 * 24 * 60));

    if (edad != comprobar) {
        alert("Error, o la edad o la fecha de nacimiento son incorrectos.");
    }
    
}

function guardarAlumno() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let dni = document.getElementById("dni").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let edad = parseInt(document.getElementById("edad").value);
    let curso = parseInt(document.getElementById("curso").value);
    let asignaturas = (document.getElementById("asignaturas").value).split(",");

    comprobarCadenas(nombre);
    comprobarCadenas(apellidos);
    comprobarDni(dni);
    comprobarFecha(fechaNacimiento);
    comprobarEdad(edad, fechaNacimiento);

    alumnos.push(new Alumno(nombre, apellidos, dni, fechaNacimiento, edad, curso, asignaturas));
    console.log (alumnos);
}

function mostrarAlumnos() {
    alumnos.forEach(element => {
        console.log("DNI: " + element.dni + " NOMBRE: " + element.apellidos + " " + element.nombre + " Nº de Asignaturas: " + element.asignaturas.length);
    });
}

function mostrarAlumnosAsignaturas() {
    let asignaturaConcreta = document.getElementById("asignaturaConcreta").value;

    alumnos.forEach(element => {
        (element.asignaturas).forEach (asignatura => {
            if (asignatura == asignaturaConcreta) {
                console.log(element);
            }
        })        
    });
}

function guardarProfesor() {
    let nombre = document.getElementById("nombreProfes").value;
    let apellidos = document.getElementById("apellidosProfes").value;
    let dni = document.getElementById("dniProfes").value;
    let fechaNacimiento = document.getElementById("fechaNacimientoProfes").value;
    let edad = parseInt(document.getElementById("edadProfes").value);
    let curso = parseInt(document.getElementById("cursoProfes").value);
    let asignaturas = (document.getElementById("asignaturasProfes").value).split(",");

    comprobarCadenas(nombre);
    comprobarCadenas(apellidos);
    comprobarDni(dni);
    comprobarFecha(fechaNacimiento);
    comprobarEdad(edad, fechaNacimiento);

    profesores.push(new Profesor(nombre, apellidos, dni, fechaNacimiento, edad, curso, asignaturas));
    console.log (profesores);
}

function mostrarProfesores() {
    profesores.forEach(element => {
        console.log("DNI: " + element.dni + " NOMBRE: " + element.apellidos + " " + element.nombre + " Nº de Asignaturas: " + element.asignaturas.length);
    });
}

function mostrarProfesoresAsignaturas() {
    let asignaturaConcreta = document.getElementById("asignaturaConcretaProfes").value;

    profesores.forEach(element => {
        (element.asignaturas).forEach (asignatura => {
            if (asignatura == asignaturaConcreta) {
                console.log(element);
            }
        })        
    });
}