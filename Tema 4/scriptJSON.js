let alumnos = [
    {
        "dni" : "12345678A",
        "nombre" : "Ana",
        "apellido" : "García",
        "edad" : 23,
        "asignaturas" : ["Sistemas Informáticos", "Lenguajes de Marcas", "FOL"]
    },
    {
        "dni" : "23456789B",
        "nombre" : "David",
        "apellido" : "Gavilondo",
        "edad" : 12,
        "asignaturas" : ["Bases de Datos", "Programación", "FOL"]
    },
    {
        "dni" : "34567890C",
        "nombre" : "Juan",
        "apellido" : "Espósito",
        "edad" : 27,
        "asignaturas" : ["Entornos", "Empresas", "Despliegues"]
    },
    {
        "dni" : "45678901D",
        "nombre" : "Alex",
        "apellido" : "Martínez",
        "edad" : 16,
        "asignaturas" : ["Desarrollo Web en Entorno Cliente", "Bases de Datos", "Sistemas Informáticos"]
    },
];

function mostrarAlumnos() {
    console.log(alumnos);
}

function mostrarSegundoDni() {
    console.log("El dni del segundo alumno es: " + alumnos[1].dni)
}

function anadirAlumno() {
    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = parseInt(document.getElementById("edad").value);
    let asignaturas = document.getElementById("asignaturas").value;
    let arrayAsignatura = asignaturas.split(",");

    alumnos.push({
        "dni" : dni,
        "nombre" : nombre,
        "apellido" : apellido,
        "edad" : edad,
        "asignaturas" : arrayAsignatura 
    });

    console.log("Añadido el alumno.");
}

function borrarAlumno() {
    let dni = document.getElementById("dniBorrar").value;

    // alumnos.forEach(element => {
    //     if (element.dni == dni) {
    //         let index = alumnos.indexOf(element);
    //         alumnos.splice(index, 1);
    //     }
    // });

    // alumnos.forEach((element, i) => {
    //     if (element.dni == dni) {
    //         alumnos.splice(i, 1);
    //     }
    // });
    for (let i = 0 ; i < alumnos.length ; i++) {
        if (alumnos[i].dni == dni) {
            alumnos.splice(i,1);
        }
    }

    console.log("Se ha borrado el alumno.");
}

function mostrarMayores() {
    let mayorEdad = 18;

    alumnos.forEach(element => {
        if (element.edad >= mayorEdad) {
            console.log(element);
        }
    });
}