import { Puzzle } from "./Puzzle.js";

let puzzle = new Puzzle(3);

const actualizar = () => {
  puzzle.dibujar(document.getElementById("tablero"));

  let info = `Movimientos: ${puzzle.movimientos}`;

  if (puzzle.resuelto) {
    info += ` | ¡Resuelto en ${puzzle.tiempo} segundos!`;
  }
  if (puzzle.mejorTiempo != null) {
    info += ` | Mejor tiempo: ${puzzle.mejorTiempo} s`;
  }

  document.getElementById("info").textContent = info;
};

const mover = (direccion) => {
  let valido = puzzle.mover(direccion);

  if (valido == false) {
    console.log(`Movimiento no válido: ${direccion}`);
  }

  actualizar();
};

const inicializaEventos = () => {
  document.getElementById("btnArriba").addEventListener("click", () => mover("arriba"));
  document.getElementById("btnAbajo").addEventListener("click", () => mover("abajo"));
  document.getElementById("btnIzquierda").addEventListener("click", () => mover("izquierda"));
  document.getElementById("btnDerecha").addEventListener("click", () => mover("derecha"));

  document.getElementById("btnNueva").addEventListener("click", () => {
    let mejor = puzzle.mejorTiempo;
    puzzle = new Puzzle(Number(document.getElementById("dimension").value));

    // guardo el mejor tiempo de la partida anterior
    puzzle.mejorTiempo = mejor;
    actualizar();
  });
};

(function () {
  console.log("ejecutando main.js");
  inicializaEventos();
  actualizar();
})();