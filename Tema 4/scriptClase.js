let alumnos = [
    {
        "dni" : "12345678A",
        "nombre" : "Ana",
        "apellido" : "García",
        "asignaturas" : ["Sistemas Informáticos", "Lenguajes de Marcas", "FOL"]
    },
    {
        "dni" : "23456789B",
        "nombre" : "David",
        "apellido" : "Gavilondo",
        "asignaturas" : ["Bases de Datos", "Programación", "FOL"]
    },
    {
        "dni" : "34567890C",
        "nombre" : "Juan",
        "apellido" : "Espósito",
        "asignaturas" : ["Entornos", "Empresas", "Despliegues"]
    },
    {
        "dni" : "45678901D",
        "nombre" : "Alex",
        "apellido" : "Martínez",
        "asignaturas" : ["Desarrollo Web en Entorno Cliente", "Bases de Datos", "Sistemas Informáticos"]
    },
];

function anadirAlumno() {
    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let asignaturas = document.getElementById("asignaturas").value;
    let arrayAsignatura = asignaturas.split(",");

    alumnos.push({
        "dni" : dni,
        "nombre" : nombre,
        "apellido" : apellido,
        "asignaturas" : arrayAsignatura 
    });
}

function borrarAlumno() {
    let dni = document.getElementById("dni").value;

    for (i = 0 ; i < alumnos.length ; i++) {
        if (alumnos[i].dni == dni) {
            alumnos.splice(i, 1);
        }
    }
}