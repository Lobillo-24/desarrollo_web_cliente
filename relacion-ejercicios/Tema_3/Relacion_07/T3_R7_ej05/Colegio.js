import { Alumno } from "./Alumno.js";

export class Colegio {
  constructor(nombre, numAulas, numAlumnos) {
    this.nombre = nombre;
    this.numAulas = numAulas;
    this.numAlumnos = numAlumnos;
    this.alumnos = [];

    // creo los alumnos con nota 5.00 y nombre alumno1, alumno2...
    for (let i = 0; i < numAlumnos; i++) {
      this.alumnos.push(new Alumno(i, `alumno${i + 1}`, 5));
    }
  }

  consultarNotaMedia(id) {
    return this.alumnos[id].notaMedia.toFixed(2);
  }

  modificarNotaMedia(id, nota) {
    this.alumnos[id].notaMedia = nota;
  }

  listarAlumnos() {
    let lista = [];

    this.alumnos.forEach((alumno) => {
      lista.push(`${alumno.id} - ${alumno.nombre}: ${alumno.notaMedia.toFixed(2)}`);
    });

    return lista;
  }
}