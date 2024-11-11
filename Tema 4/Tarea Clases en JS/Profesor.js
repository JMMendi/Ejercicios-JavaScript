class Profesor extends Persona {
    constructor(cursos, asignaturas, tutor) {
        super(this.nombre, this.apellidos, this.dni, this.fechaNacimiento, this.edad);
        this.cursos = cursos;
        this.asignaturas = asignaturas;
        this.tutor = tutor;
    }
}