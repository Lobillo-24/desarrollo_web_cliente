import { Colegio } from "./Colegio.js";

const mostrar = (texto) => {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.getElementById("resultado").appendChild(parrafo);
  console.log(texto);
};

const pruebas = () => {
  const colegio = new Colegio("IES Iliberis", 10, 4);

  mostrar(`Colegio ${colegio.nombre}: ${colegio.numAulas} aulas y ${colegio.numAlumnos} alumnos`);
  colegio.listarAlumnos().forEach((linea) => mostrar(linea));

  mostrar(`Nota media del alumno 2: ${colegio.consultarNotaMedia(2)}`);

  colegio.modificarNotaMedia(2, 8.5);
  mostrar(`Nota media del alumno 2 modificada: ${colegio.consultarNotaMedia(2)}`);

  colegio.modificarNotaMedia(0, 6.75);
  colegio.listarAlumnos().forEach((linea) => mostrar(linea));
};

(function () {
  console.log("ejecutando main.js");
  pruebas();
})();