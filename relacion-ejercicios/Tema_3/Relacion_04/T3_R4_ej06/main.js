const mostrar = (texto) => {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.getElementById("resultado").appendChild(parrafo);
  console.log(texto);
};

const frase = "If man was meant to stay on the ground god would have given us roots";

const codificar = (texto) => {
  // quito espacios y paso a minusculas
  let limpio = texto.toLowerCase().split(" ").join("");
  let columnas = Math.ceil(Math.sqrt(limpio.length));
  let filas = [];

  for (let i = 0; i < limpio.length; i = i + columnas) {
    filas.push(limpio.substring(i, i + columnas));
  }

  mostrar(`${limpio.length} caracteres -> ${filas.length} filas y ${columnas} columnas`);
  for (let i = 0; i < filas.length; i++) {
    mostrar(filas[i]);
  }

  // leo por columnas de izquierda a derecha
  let grupos = [];
  for (let c = 0; c < columnas; c++) {
    let grupo = "";
    for (let f = 0; f < filas.length; f++) {
      if (c < filas[f].length) {
        grupo = grupo + filas[f][c];
      }
    }
    grupos.push(grupo);
  }

  return grupos.join(" ");
};

(function () {
  console.log("ejecutando main.js");
  mostrar(`Frase: ${frase}`);
  mostrar(`Mensaje codificado: ${codificar(frase)}`);
})();