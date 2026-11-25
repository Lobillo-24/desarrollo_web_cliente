// Crea una tabla de 100x100 celdas que hace de canvas
const crearCanvas = () => {
  const tabla = document.createElement("table");

  for (let i = 0; i < 100; i++) {
    const fila = document.createElement("tr");

    for (let j = 0; j < 100; j++) {
      const celda = document.createElement("td");
      fila.appendChild(celda);
    }

    tabla.appendChild(fila);
  }

  document.getElementById("canvas").appendChild(tabla);
  return tabla;
};

// Pinta la celda por la que pasa el ratón: rojo con Ctrl y azul con Shift
const pintar = (tabla) => {
  tabla.addEventListener("mousemove", (event) => {
    if (event.target.tagName === "TD") {
      if (event.ctrlKey) {
        event.target.style.backgroundColor = "red";
      } else if (event.shiftKey) {
        event.target.style.backgroundColor = "blue";
      }
    }
  });
};

(function () {
  console.log("ejecutando main.js");

  // El canvas se crea cuando la página ha terminado de cargar
  window.addEventListener("load", (event) => {
    console.log(`Evento: ${event.type}`);
    const tabla = crearCanvas();
    pintar(tabla);
  });
})();