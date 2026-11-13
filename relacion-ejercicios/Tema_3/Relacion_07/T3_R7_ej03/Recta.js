export class Recta {
  constructor(punto1, punto2) {
    this.punto1 = punto1;
    this.punto2 = punto2;
  }

  toString() {
    return `Recta de ${this.punto1} a ${this.punto2}`;
  }
}