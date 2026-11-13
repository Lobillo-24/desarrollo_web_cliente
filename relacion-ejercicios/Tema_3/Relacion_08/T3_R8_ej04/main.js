import { Buscaminas } from "./Buscaminas.js";

const TIEMPO_LIMITE = 120;
let juego = new Buscaminas(TIEMPO_LIMITE);

const crearTablero = () => {
  let tablero = document.getElementById("tablero");

  for (let i = 0; i < juego.filas; i++) {
    for (let j = 0; j < juego.columnas; j++) {
      let boton = document.createElement("button");
      boton.className = "casilla";
      boton.id = `casilla${i}_${j}`;
      boton.addEventListener("click", () => {
        juego.descubrir(i, j);
        actualizar();
      });
      tablero.appendChild(boton);
    }
    tablero.appendChild(document.createElement("br"));
  }
};

const actualizar = () => {
  for (let i = 0; i < juego.filas; i++) {
    for (let j = 0; j < juego.columnas; j++) {
      let boton = document.getElementById(`casilla${i}_${j}`);
      boton.textContent = juego.textoCasilla(i, j);

      if (juego.tablero[i][j].descubierta) {
        boton.className = "casilla descubierta";
      } else {
        boton.className = "casilla";
      }
    }
  }

  let info = "Descubre todas las casillas sin mina";
  if (juego.perdido) {
    info = "¡Has perdido!";
  }
  if (juego.ganado) {
    info = "¡Has ganado!";
  }

  document.getElementById("info").textContent = info;
};

const actualizarTiempo = () => {
  juego.comprobarTiempo();

  document.getElementById("tiempo").textContent = `Tiempo restante: ${juego.tiempoRestante()} s`;

  if (juego.perdido) {
    actualizar();
  }
};

const inicializaEventos = () => {
  document.getElementById("btnNueva").addEventListener("click", () => {
    juego = new Buscaminas(TIEMPO_LIMITE);
    actualizar();
  });

  // cada segundo actualizo el tiempo
  setInterval(actualizarTiempo, 1000);
};

(function () {
  console.log("ejecutando main.js");
  crearTablero();
  inicializaEventos();
  actualizar();
  actualizarTiempo();
})();