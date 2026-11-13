const eventoMovRaton = (event) => {
  document.body.addEventListener("mousemove", (event) => {
    console.log(`Evento: ${event.type} en ${event.target.tagName}`);
    console.log(`Coordenadas: (${event.pageX},${event.pageY})`);
    document.getElementById("coordenadas").textContent =
      `(${event.pageX},${event.pageY})`;
  });
};

(function () {
  console.log("ejecutando main.js");
  eventoMovRaton();
})();