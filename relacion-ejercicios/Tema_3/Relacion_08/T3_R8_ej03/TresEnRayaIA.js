import { TresEnRaya } from "../T3_R8_ej02/TresEnRaya.js";

// Hereda todo del Tres en Raya normal y le añade la jugada de la maquina
export class TresEnRayaIA extends TresEnRaya {
  constructor() {
    super();
  }

  // Busca una casilla libre que complete una linea de "marca"
  buscarJugadaGanadora(marca) {
    for (let i = 0; i < 9; i++) {
      if (this.tablero[i] == "") {
        // pruebo a poner la marca y miro si hace tres en raya
        this.tablero[i] = marca;
        let gana = this.hayTresEnRaya(marca);
        this.tablero[i] = "";

        if (gana) {
          return i;
        }
      }
    }

    return -1;
  }

  // Elige la casilla con estas prioridades:
  // 1. ganar  2. bloquear al jugador  3. centro  4. esquina  5. lado
  elegirCasilla() {
    let casilla = this.buscarJugadaGanadora("O");

    if (casilla == -1) {
      casilla = this.buscarJugadaGanadora("X");
    }

    if (casilla == -1 && this.tablero[4] == "") {
      casilla = 4;
    }

    const esquinas = [0, 2, 6, 8];
    for (let i = 0; i < esquinas.length; i++) {
      if (casilla == -1 && this.tablero[esquinas[i]] == "") {
        casilla = esquinas[i];
      }
    }

    const lados = [1, 3, 5, 7];
    for (let i = 0; i < lados.length; i++) {
      if (casilla == -1 && this.tablero[lados[i]] == "") {
        casilla = lados[i];
      }
    }

    return casilla;
  }

  jugarMaquina() {
    if (this.terminado || this.turno != "O") {
      return;
    }

    this.marcar(this.elegirCasilla());
  }
}