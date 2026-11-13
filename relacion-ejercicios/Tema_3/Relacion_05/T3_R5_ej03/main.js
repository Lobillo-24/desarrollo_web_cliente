const mostrar = (texto) => {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.getElementById("resultado").appendChild(parrafo);
  console.log(texto);
};

// reduce empieza en 0 y va sumando cada numero
const sumarArray = (numeros) => numeros.reduce((total, n) => total + n, 0);

(function () {
  console.log("ejecutando main.js");
  let lista = [3, 7, 10, 5, 25];
  mostrar(`Array: [${lista}]`);
  mostrar(`Suma: ${sumarArray(lista)}`);
})();