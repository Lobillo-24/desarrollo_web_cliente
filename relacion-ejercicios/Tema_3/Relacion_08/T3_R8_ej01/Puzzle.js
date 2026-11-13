export class Puzzle {
  constructor(dimension) {
    this.dimension = dimension;
    this.tablero = [];
    this.movimientos = 0;
    this.inicio = Date.now();
    this.resuelto = false;
    this.tiempo = 0;
    this.mejorTiempo = null;

    this.generar();
  }

  // Creo el tablero ordenado y lo desordeno con movimientos al azar,
  // asi siempre se puede resolver
  generar() {
    this.tablero = [];
    let numero = 1;

    for (let i = 0; i < this.dimension; i++) {
      this.tablero[i] = [];
      for (let j = 0; j < this.dimension; j++) {
        this.tablero[i][j] = numero;
        numero++;
      }
    }

    // el 0 es el hueco y va en la ultima casilla
    this.tablero[this.dimension - 1][this.dimension - 1] = 0;

    const direcciones = ["arriba", "abajo", "izquierda", "derecha"];
    for (let i = 0; i < 200; i++) {
      let direccion = direcciones[Math.floor(Math.random() * 4)];
      this.moverHueco(direccion);
    }

    // si por casualidad ha quedado ordenado, lo genero otra vez
    if (this.estaResuelto()) {
      this.generar();
    }

    this.movimientos = 0;
    this.inicio = Date.now();
    this.resuelto = false;
  }

  buscarHueco() {
    for (let i = 0; i < this.dimension; i++) {
      for (let j = 0; j < this.dimension; j++) {
        if (this.tablero[i][j] == 0) {
          return [i, j];
        }
      }
    }
  }

  // Mueve el hueco. Devuelve false si el movimiento no es valido
  moverHueco(direccion) {
    let hueco = this.buscarHueco();
    let fila = hueco[0];
    let columna = hueco[1];
    let nuevaFila = fila;
    let nuevaColumna = columna;

    if (direccion == "arriba") {
      nuevaFila = fila - 1;
    } else if (direccion == "abajo") {
      nuevaFila = fila + 1;
    } else if (direccion == "izquierda") {
      nuevaColumna = columna - 1;
    } else if (direccion == "derecha") {
      nuevaColumna = columna + 1;
    }

    // controlo que no se salga del tablero
    if (nuevaFila < 0 || nuevaFila >= this.dimension || nuevaColumna < 0 || nuevaColumna >= this.dimension) {
      return false;
    }

    this.tablero[fila][columna] = this.tablero[nuevaFila][nuevaColumna];
    this.tablero[nuevaFila][nuevaColumna] = 0;
    return true;
  }

  mover(direccion) {
    if (this.resuelto) {
      return false;
    }

    let valido = this.moverHueco(direccion);

    if (valido) {
      this.movimientos++;

      if (this.estaResuelto()) {
        this.resuelto = true;
        this.tiempo = Math.floor((Date.now() - this.inicio) / 1000);

        if (this.mejorTiempo == null || this.tiempo < this.mejorTiempo) {
          this.mejorTiempo = this.tiempo;
        }
      }
    }

    return valido;
  }

  estaResuelto() {
    let numero = 1;

    for (let i = 0; i < this.dimension; i++) {
      for (let j = 0; j < this.dimension; j++) {
        // la ultima casilla tiene que ser el hueco
        if (i == this.dimension - 1 && j == this.dimension - 1) {
          return this.tablero[i][j] == 0;
        }
        if (this.tablero[i][j] != numero) {
          return false;
        }
        numero++;
      }
    }
  }

  dibujar(elemento) {
    let texto = "";

    for (let i = 0; i < this.dimension; i++) {
      for (let j = 0; j < this.dimension; j++) {
        if (this.tablero[i][j] == 0) {
          texto += "   ";
        } else {
          texto += String(this.tablero[i][j]).padStart(3, " ");
        }
      }
      texto += "\n";
    }

    console.log(texto);
    elemento.textContent = texto;
  }
}