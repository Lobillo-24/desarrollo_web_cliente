const mostrar = (texto) => {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.getElementById("resultado").appendChild(parrafo);
  console.log(texto);
};

const presentacion = (name, age) => `Hello, I am ${name}, and I am ${age} years old.`;

(function () {
  console.log("ejecutando main.js");
  mostrar(presentacion("Juan", 20));
  mostrar(presentacion("Ana", 25));
})();