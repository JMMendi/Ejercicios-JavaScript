class Persona {
    constructor(nombre, dni, apellidos) {
        this.nombre = nombre;
        this.dni = dni;
        this.apellidos = apellidos;
    }
}

class Alumno extends Persona {
    constructor(nombre, dni, apellidos, asignaturas) {
        super(nombre, dni, apellidos);
        this.asignaturas = asignaturas;
    }

    getAsignaturas() {
        return this.asignaturas;
    }

    buscarAsignaturas(asignatura) {
        let asignaturasAlumno = this.getAsignaturas();
        if (asignaturasAlumno.includes(asignatura)) {
            return true;
        } else {
            return false;
        }

    }
}

class Profesor extends Persona {
    constructor(nombre, dni, apellidos, asignaturas) {
        super(nombre, dni, apellidos);
        this.asignaturas = asignaturas;
    }
}

// const alumnos = [
//     new Alumno = ('Pedro', '12345678A', 'Gutierrez', ['Web Servidor', 'Diseños', 'Empresas']),
//     new Alumno = ('Ana', '23456789B', 'Perez', ['Web Cliente', 'HLC', 'Web Servidor']),
//     new Alumno = ('Lucia', '34567890C', 'Martinez', ['Despliegues', 'Diseños', 'Web Cliente'])
// ];

let juanma = new Alumno("Juan Manuel", "45900836N", "Mendizábal Amat", ['Web Cliente', 'Despliegues', 'Diseños']);

console.log(juanma.buscarAsignaturas('Despliegues'));
