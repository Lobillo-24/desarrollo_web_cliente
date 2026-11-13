export class Casa {
  constructor(calle, numero, codigoPostal) {
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;

    // mensaje automatico al dar de alta la casa
    let parrafo = document.createElement("p");
    parrafo.textContent = `Nueva casa en calle: ${this.calle}, nº: ${this.numero}, CP: ${this.codigoPostal}.`;
    document.getElementById("resultado").appendChild(parrafo);
    console.log(parrafo.textContent);
  }

  setNumero(numero) {
    this.numero = numero;
  }

  setCalle(calle) {
    this.calle = calle;
  }

  setCodigoPostal(codigo) {
    this.codigoPostal = codigo;
  }

  imprimeCalle() {
    return this.calle;
  }

  imprimeNumero() {
    return this.numero;
  }

  imprimeCodigoPostal() {
    return this.codigoPostal;
  }
}