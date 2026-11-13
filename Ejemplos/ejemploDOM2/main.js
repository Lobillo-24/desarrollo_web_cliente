const alumnos = [
  { id: 1, nombre: "Juan", curso: "1DAW" },
  { id: 2, nombre: "Antonio", curso: "2DAW" },
  { id: 3, nombre: "Elena", curso: "1ASIR" },
];
debugger;
const fCreaAlumnos = (arAlumnos) => {
   
    arAlumnos.forEach((alumno) => {
        let nodo = document.createElement('div');
        let parrafo = document.createElement('p');
        let contenido = document.createTextNode(alumno.nombre);
        parrafo.appendChild(contenido);
        document.getElementById("alumnos").appendChild(parrafo);
        nodo.appendChild(parrafo);
    });

    console.log("Prueba");

}

const fCreaAlumno = (oAlumnos) => {


    // return nodo
}

const fCreaParrafo = (strTexto) => {;
  let parrafo = document.createElement("p");
  let contenido = document.createTextNode(strTexto);
  parrafo.appendChild(contenido);
  document.getElementById("principal").appendChild(parrafo);

  console.log("creando nodo");
};

function asociaEventos() {
  let btnCreaParrafo = document.getElementById("creaparrafo");
  let btnCreaAlumnos = document.getElementById("creaalumnos");

  console.log("Probar botón párrafo", btnCreaParrafo);
  console.log("Probar botón alumnos", btnCreaAlumnos);

  // btnCreaParrafo.onclick = () => alert("prueba");

  btnCreaParrafo.addEventListener("click", () => fCreaParrafo("Prueba párrafos"));
  btnCreaAlumnos.addEventListener("click", () => fCreaAlumnos("Prueba alumnos"));

}

(function () {
  console.log("ejecutando desde main");
  asociaEventos();
})();
