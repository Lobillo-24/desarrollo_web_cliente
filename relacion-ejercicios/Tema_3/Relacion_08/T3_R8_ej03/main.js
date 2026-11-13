import { TresEnRayaIA } from "./TresEnRayaIA.js";

let juego = new TresEnRayaIA();

const pulsarCasilla = (posicion) => {
  // solo puede pulsar el jugador cuando es su turno
  if (juego.turno != "X") {
    return;
  }

  let valido = juego.marcar(posicion);

  if (valido) {
    juego.jugarMaquina();
  }

  actualizar();
};

const crearTablero = () => {
  let tablero = document.getElementById("tablero");

  for (let i = 0; i < 9; i++) {
    let boton = document.createElement("button");
    boton.className = "casilla";
    boton.id = `casilla${i}`;
    boton.addEventListener("click", () => pulsarCasilla(i));
    tablero.appendChild(boton);

    // cada 3 casillas salto de linea
    if (i % 3 == 2) {
      tablero.appendChild(document.createElement("br"));
    }
  }
};

const actualizar = () => {
  for (let i = 0; i < 9; i++) {
    document.getElementById(`casilla${i}`).textContent = juego.tablero[i];
  }

  document.getElementById("info").textContent = juego.mensaje();
};

const inicializaEventos = () => {
  document.getElementById("btnNueva").addEventListener("click", () => {
    juego = new TresEnRayaIA();
    actualizar();
  });
};

(function () {
  console.log("ejecutando main.js");
  crearTablero();
  inicializaEventos();
  actualizar();
})();