import { Persona } from "./Persona.js";

const mostrar = (texto) => {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.getElementById("resultado").appendChild(parrafo);
  console.log(texto);
};

const objetoLiteral = () => {
  const persona = {
    nombre: "Lucía",
    edad: 16,
    esMayorDeEdad: function () {
      return this.edad >= 18;
    },
  };

  mostrar(`Objeto literal: ${persona.nombre} (${persona.edad}) ¿mayor de edad? ${persona.esMayorDeEdad()}`);
};

const edadPromedio = (personas) => {
  let suma = 0;

  for (let i = 0; i < personas.length; i++) {
    suma = suma + personas[i].edad;
  }

  return suma / personas.length;
};

const pruebaClase = () => {
  const personas = [
    new Persona("Juan", 20),
    new Persona("Ana", 15),
    new Persona("Pedro", 34),
    new Persona("María", 17),
  ];

  personas.forEach((persona) => {
    mostrar(`${persona.nombre} (${persona.edad}) ¿mayor de edad? ${persona.esMayorDeEdad()}`);
  });

  mostrar(`Edad promedio del grupo: ${edadPromedio(personas)}`);
};

(function () {
  console.log("ejecutando main.js");
  objetoLiteral();
  pruebaClase();
})();