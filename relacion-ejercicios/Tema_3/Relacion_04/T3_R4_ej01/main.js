const mostrar = (texto) => {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.getElementById("resultado").appendChild(parrafo);
  console.log(texto);
};

const numeros = [4, 15, 9, 22, 3, 18, 7];
const palabras = ["casa", "isla", "ordenador", "lista", "sol", "camisa"];

const masGrande = () => {
  let mayor = numeros.reduce((acumulado, actual) => {
    if (actual > acumulado) {
      return actual;
    }
    return acumulado;
  });

  mostrar(`Número más grande: ${mayor}`);
};

const masLarga = () => {
  let larga = palabras.reduce((acumulado, actual) => {
    if (actual.length > acumulado.length) {
      return actual;
    }
    return acumulado;
  });

  mostrar(`Palabra más larga: ${larga}`);
};

const paresImpares = () => {
  let pares = numeros.filter((n) => n % 2 == 0);
  let impares = numeros.filter((n) => n % 2 != 0);

  mostrar(`Pares: ${pares}`);
  mostrar(`Impares: ${impares}`);
};

const contienenIs = () => {
  let conIs = palabras.filter((palabra) => palabra.includes("is"));

  mostrar(`Palabras con 'is': ${conIs}`);
};

const divisiblesTres = () => {
  let multiplos = [3, 9, 12, 27];

  mostrar(`¿[${multiplos}] divisibles entre 3? ${multiplos.every((n) => n % 3 == 0)}`);
  mostrar(`¿[${numeros}] divisibles entre 3? ${numeros.every((n) => n % 3 == 0)}`);
};

const unirOrdenar = () => {
  let a = [5, 1, 8];
  let b = [10, 2, 6];
  let unidos = a.concat(b);

  mostrar(`Unir [${a}] y [${b}]: ${unidos}`);

  // sort con (x, y) => x - y para que ordene como números
  unidos.sort((x, y) => x - y);
  mostrar(`Ordenado: ${unidos}`);
};

const cambiarPalabras = () => {
  let copia = palabras.slice();

  let quitada = copia.shift();
  mostrar(`Quito la primera (${quitada}): ${copia}`);

  copia.unshift("perro");
  mostrar(`Pongo 'perro' al principio: ${copia}`);

  // desde la posicion 1 quito 2 y meto gato y luna
  copia.splice(1, 2, "gato", "luna");
  mostrar(`Reemplazo posiciones 1 y 2: ${copia}`);
};

(function () {
  console.log("ejecutando main.js");
  mostrar(`Números: ${numeros}`);
  mostrar(`Palabras: ${palabras}`);
  masGrande();
  masLarga();
  paresImpares();
  contienenIs();
  divisiblesTres();
  unirOrdenar();
  cambiarPalabras();
})();