export class TresEnRaya {
  constructor() {
    // casillas de la 0 a la 8, vacias al principio
    this.tablero = ["", "", "", "", "", "", "", "", ""];
    this.turno = "X";
    this.ganador = "";
    this.terminado = false;
    this.marcasX = 0;
    this.marcasO = 0;
  }

  // Devuelve false si no se puede marcar esa casilla
  marcar(posicion) {
    if (this.terminado || this.tablero[posicion] != "") {
      return false;
    }

    this.tablero[posicion] = this.turno;

    if (this.turno == "X") {
      this.marcasX++;
    } else {
      this.marcasO++;
    }

    if (this.hayTresEnRaya(this.turno)) {
      this.ganador = this.turno;
      this.terminado = true;
    } else if (this.marcasX == 3 && this.marcasO == 3) {
      // los dos han puesto sus 3 marcas y nadie ha ganado
      this.terminado = true;
    } else {
      this.cambiarTurno();
    }

    return true;
  }

  cambiarTurno() {
    if (this.turno == "X") {
      this.turno = "O";
    } else {
      this.turno = "X";
    }
  }

  hayTresEnRaya(marca) {
    const lineas = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    for (let i = 0; i < lineas.length; i++) {
      let a = lineas[i][0];
      let b = lineas[i][1];
      let c = lineas[i][2];

      if (this.tablero[a] == marca && this.tablero[b] == marca && this.tablero[c] == marca) {
        return true;
      }
    }

    return false;
  }

  mensaje() {
    if (this.ganador != "") {
      return `¡Ha ganado ${this.ganador}!`;
    }
    if (this.terminado) {
      return "Empate, los dos han puesto sus 3 marcas";
    }
    return `Turno de ${this.turno}`;
  }
}