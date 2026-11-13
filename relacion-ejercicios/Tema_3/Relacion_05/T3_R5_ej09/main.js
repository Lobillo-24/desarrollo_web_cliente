const mostrar = (texto) => {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.getElementById("resultado").appendChild(parrafo);
  console.log(texto);
};

const fibonacci = (n) => {
  if (n < 3) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

(function () {
  console.log("ejecutando main.js");
  for (let i = 1; i <= 10; i++) {
    mostrar(`fibonacci(${i}) = ${fibonacci(i)}`);
  }
})();