const mostrar = (texto) => {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.getElementById("resultado").appendChild(parrafo);
  console.log(texto);
};

const mapa = [
  [34, 21, 32, 41, 25],
  [14, 42, 43, 14, 31],
  [54, 45, 52, 42, 23],
  [33, 15, 51, 31, 35],
  [21, 52, 33, 13, 23],
];

const buscarTesoro = () => {
  let fila = 1;
  let columna = 1;
  let encontrado = false;

  while (encontrado == false) {
    // el array empieza en 0, por eso resto 1
    let pista = mapa[fila - 1][columna - 1];
    mostrar(`(${fila},${columna}) -> pista ${pista}`);

    if (pista == fila * 10 + columna) {
      encontrado = true;
    } else {
      fila = Math.floor(pista / 10);
      columna = pista % 10;
    }
  }

  mostrar(`¡Tesoro encontrado en la celda (${fila},${columna})!`);
};

(function () {
  console.log("ejecutando main.js");
  buscarTesoro();
})();