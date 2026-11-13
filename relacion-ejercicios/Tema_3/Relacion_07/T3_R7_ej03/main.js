import { Punto } from "./Punto.js";
import { Recta } from "./Recta.js";

const mostrar = (texto) => {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.getElementById("resultado").appendChild(parrafo);
  console.log(texto);
};

const pruebas = () => {
  const a = new Punto(1, 2);
  const b = new Punto(5, 7);
  const recta = new Recta(a, b);

  mostrar(`Punto a: ${a}`);
  mostrar(`Punto b: ${b}`);
  mostrar(`${recta}`);
};

(function () {
  console.log("ejecutando main.js");
  pruebas();
})();