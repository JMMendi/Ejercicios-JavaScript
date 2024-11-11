class Alumno extends Persona {
    constructor(curso, asignaturas) {
        super(this.nombre, this.apellidos, this.dni, this.fechaNacimiento, this.edad);
        this.curso = curso;
        this.asignaturas = asignaturas;
    }
}