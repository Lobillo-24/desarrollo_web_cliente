const inicializaEventos = () => {
  console.log("Eventos inicializados");
  document.getElementById("btn1").addEventListener("click", () => alert("Has pulsado el botón"));
};

(function () {
  console.log("ejecutando main.js");
  inicializaEventos();
})();