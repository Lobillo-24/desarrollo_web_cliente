const mostrar = (texto) => {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.getElementById("resultado").appendChild(parrafo);
  console.log(texto);
};

let eye = "eye";

const fire = () => `bulls-${eye}`;

(function () {
  console.log("ejecutando main.js");
  mostrar(`fire() = ${fire()}`);
})();