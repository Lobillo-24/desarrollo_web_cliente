export class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      return true;
    }
    return false;
  }
}