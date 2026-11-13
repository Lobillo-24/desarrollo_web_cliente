import { Casilla } from "./Casilla.js";

export class Buscaminas {
  constructor(tiempoLimite) {
    this.filas = 8;
    this.columnas = 8;
    this.minas = 10;
    this.tiempoLimite = tiempoLimite;
    this.inicio = Date.now();
    this.tablero = [];
    this.perdido = false;
    this.ganado = false;

    this.crearTablero();
    this.ponerMinas();
    this.calcularNumeros();
  }

  crearTablero() {
    for (let i = 0; i < this.filas; i++) {
      this.tablero[i] = [];
      for (let j = 0; j < this.columnas; j++) {
        this.tablero[i][j] = new Casilla();
      }
    }
  }

  ponerMinas() {
    let puestas = 0;

    while (puestas < this.minas) {
      let fila = Math.floor(Math.random() * this.filas);
      let columna = Math.floor(Math.random() * this.columnas);

      // si ya hay mina en esa casilla busco otra
      if (this.tablero[fila][columna].mina == false) {
        this.tablero[fila][columna].mina = true;
        puestas++;
      }
    }
  }

  // Cuenta las minas de las 8 casillas de alrededor
  calcularNumeros() {
    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {
        let contador = 0;

        for (let f = i - 1; f <= i + 1; f++) {
          for (let c = j - 1; c <= j + 1; c++) {
            if (this.existe(f, c) && this.tablero[f][c].mina) {
              contador++;
            }
          }
        }

        this.tablero[i][j].numero = contador;
      }
    }
  }

  existe(fila, columna) {
    return fila >= 0 && fila < this.filas && columna >= 0 && columna < this.columnas;
  }

  tiempoRestante() {
    let pasado = Math.floor((Date.now() - this.inicio) / 1000);
    let restante = this.tiempoLimite - pasado;

    if (restante < 0) {
      restante = 0;
    }

    return restante;
  }

  comprobarTiempo() {
    if (this.ganado == false && this.tiempoRestante() == 0) {
      this.perdido = true;
    }
  }

  descubrir(fila, columna) {
    this.comprobarTiempo();

    if (this.perdido || this.ganado) {
      return;
    }

    let casilla = this.tablero[fila][columna];

    if (casilla.descubierta) {
      return;
    }

    casilla.descubierta = true;

    if (casilla.mina) {
      this.perdido = true;
      return;
    }

    // si no tiene numero descubro las de alrededor
    if (casilla.numero == 0) {
      for (let f = fila - 1; f <= fila + 1; f++) {
        for (let c = columna - 1; c <= columna + 1; c++) {
          if (this.existe(f, c)) {
            this.descubrir(f, c);
          }
        }
      }
    }

    this.comprobarGanado();
  }

  comprobarGanado() {
    let descubiertas = 0;

    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {
        if (this.tablero[i][j].descubierta) {
          descubiertas++;
        }
      }
    }

    if (descubiertas == this.filas * this.columnas - this.minas) {
      this.ganado = true;
    }
  }

  // Lo que se ve en cada casilla
  textoCasilla(fila, columna) {
    let casilla = this.tablero[fila][columna];

    // al perder enseño todas las minas
    if (casilla.mina && (casilla.descubierta || this.perdido)) {
      return "💣";
    }
    if (casilla.descubierta == false) {
      return "";
    }
    if (casilla.numero == 0) {
      return "";
    }
    return String(casilla.numero);
  }
}