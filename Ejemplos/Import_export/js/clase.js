import Alumno from "./alumno";

export class clase {
  constructor(arAlumnos, nom, edad, curso) {
    this.arAlumnos = [];
    this.nom = nom;
    this.edad = edad;
    this.curso = curso;
  }

  anadirAlumno(alumno) {
    this.alumno.push(alumno);
  }

  deleteAlumno(alumno){
    let alumnof = this.alumno.findIndex(alumno).splice(alumno);
    console.log(alumnof)
  }
  
  mostrarAlumno() {
    this.alumnos.forEach((alumno) => {
      console.log(Alumno);
    });
  }
}
