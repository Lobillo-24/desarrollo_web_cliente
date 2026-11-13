import { Casa } from "./Casa.js";

const mostrar = (texto) => {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.getElementById("resultado").appendChild(parrafo);
  console.log(texto);
};

const pruebas = () => {
  const casaA = new Casa("Garcia Prieto", 58, 15706);
  const casaB = new Casa("Camino Caneiro", 29, 32004);
  const casaC = new Casa("San Clemente", "s/n", 15705);

  mostrar(`El código postal de la casaA es: ${casaA.imprimeCodigoPostal()}.`);
  mostrar(`La calle de la casaC es: ${casaC.imprimeCalle()}.`);

  casaB.setNumero(31);
  mostrar(`El número de la casaB ahora es: ${casaB.imprimeNumero()}.`);
};

(function () {
  console.log("ejecutando main.js");
  pruebas();
})();