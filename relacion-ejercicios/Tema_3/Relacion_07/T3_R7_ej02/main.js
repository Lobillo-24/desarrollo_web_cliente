import { Telefono } from "./Telefono.js";

const mostrar = (texto) => {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.getElementById("resultado").appendChild(parrafo);
  console.log(texto);
};

const telefono = new Telefono("958123456");

const inicializaEventos = () => {
  document.getElementById("btnLlamar").addEventListener("click", () => {
    telefono.llamar();
    mostrar(`Llamando al ${telefono.numero}. Llamadas: ${telefono.llamadas}`);
  });
};

(function () {
  console.log("ejecutando main.js");
  mostrar(`Teléfono ${telefono.numero} creado. Llamadas: ${telefono.llamadas}`);
  inicializaEventos();
})();