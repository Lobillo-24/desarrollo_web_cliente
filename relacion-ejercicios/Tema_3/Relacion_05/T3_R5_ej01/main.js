import { sum, stringLength, stringLength2, showAlert } from "./FuncionesArrow.js";

const mostrar = (texto) => {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.getElementById("resultado").appendChild(parrafo);
  console.log(texto);
};

const pruebas = () => {
  mostrar(`sum(40, 2) = ${sum(40, 2)}`);
  mostrar(`sum(42, 0) = ${sum(42, 0)}`);

  let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";
  stringLength(longestCityNameInTheWorld);
  mostrar("stringLength -> mirar la consola");

  mostrar(`stringLength2("willynilly") = ${stringLength2("willynilly")}`);
};

const inicializaEventos = () => {
  document.getElementById("btnAlert").addEventListener("click", () => showAlert("you ball of fluff"));
};

(function () {
  console.log("ejecutando main.js");
  pruebas();
  inicializaEventos();
})();