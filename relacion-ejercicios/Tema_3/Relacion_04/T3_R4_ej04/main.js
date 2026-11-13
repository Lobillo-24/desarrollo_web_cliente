const mostrar = (texto) => {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.getElementById("resultado").appendChild(parrafo);
  console.log(texto);
};

const aleatorio = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

// Devuelve true si siguiendo las pistas desde (1,1) se llega al tesoro
const tieneSolucion = (mapa) => {
  let fila = 1;
  let columna = 1;

  for (let paso = 0; paso < mapa.length * mapa[0].length; paso++) {
    let pista = mapa[fila - 1][columna - 1];

    if (pista == fila * 10 + columna) {
      return true;
    }

    fila = Math.floor(pista / 10);
    columna = pista % 10;
  }

  return false;
};

const crearMapa = (filas, columnas) => {
  let mapa = [];

  for (let i = 0; i < filas; i++) {
    mapa[i] = [];
    for (let j = 0; j < columnas; j++) {
      let pista = aleatorio(filas) * 10 + aleatorio(columnas);

      // si la pista es su propia celda seria un tesoro, la repito
      while (pista == (i + 1) * 10 + (j + 1)) {
        pista = aleatorio(filas) * 10 + aleatorio(columnas);
      }

      mapa[i][j] = pista;
    }
  }

  // pongo el tesoro en una celda al azar
  let filaTesoro = aleatorio(filas);
  let columnaTesoro = aleatorio(columnas);
  mapa[filaTesoro - 1][columnaTesoro - 1] = filaTesoro * 10 + columnaTesoro;

  return mapa;
};

// Las dimensiones minimas son 5x5 y maximo 9x9 (numeros de 2 cifras)
const crearBusqueda = (filas, columnas) => {
  let mapa = crearMapa(filas, columnas);

  // si no se llega al tesoro, creo otro mapa
  while (tieneSolucion(mapa) == false) {
    mapa = crearMapa(filas, columnas);
  }

  return mapa;
};

(function () {
  console.log("ejecutando main.js");
  let mapa = crearBusqueda(5, 5);

  for (let i = 0; i < mapa.length; i++) {
    mostrar(mapa[i].join("  "));
  }
})();