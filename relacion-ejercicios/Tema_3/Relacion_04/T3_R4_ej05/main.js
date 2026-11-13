const mostrar = (texto) => {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.getElementById("resultado").appendChild(parrafo);
  console.log(texto);
};

const matriz1 = [
  [9, 8, 7, 6, 5],
  [10, 12, 15, 11, 14],
  [11, 13, 20, 17, 12],
  [14, 10, 16, 13, 18],
  [12, 9, 19, 16, 15],
];

const matriz2 = [
  [1, 2, 3, 4, 5],
  [5, 1, 2, 3, 4],
  [4, 5, 1, 2, 3],
  [3, 4, 5, 1, 2],
  [2, 3, 4, 5, 1],
];

const puntosSilla = (matriz) => {
  let encontrados = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      let valor = matriz[i][j];
      let mayorFila = true;
      let menorColumna = true;

      for (let k = 0; k < matriz[i].length; k++) {
        if (matriz[i][k] > valor) {
          mayorFila = false;
        }
      }

      for (let k = 0; k < matriz.length; k++) {
        if (matriz[k][j] < valor) {
          menorColumna = false;
        }
      }

      if (mayorFila && menorColumna) {
        mostrar(`Punto de silla en (${i + 1},${j + 1}) con valor ${valor}`);
        encontrados++;
      }
    }
  }

  if (encontrados == 0) {
    mostrar("No saddle points");
  }
};

const mostrarMatriz = (matriz) => {
  for (let i = 0; i < matriz.length; i++) {
    mostrar(matriz[i].join("  "));
  }
};

(function () {
  console.log("ejecutando main.js");
  mostrar("Matriz 1:");
  mostrarMatriz(matriz1);
  puntosSilla(matriz1);

  mostrar("Matriz 2:");
  mostrarMatriz(matriz2);
  puntosSilla(matriz2);
})();