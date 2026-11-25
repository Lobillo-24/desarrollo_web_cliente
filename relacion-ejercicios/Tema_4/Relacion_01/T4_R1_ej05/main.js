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

// Pinta la celda por la que pasa el ratón: rojo con Ctrl, azul con Shift
// y la borra si se mantiene pulsado el botón izquierdo del ratón
const pintar = (tabla) => {
  tabla.addEventListener("mousemove", (event) => {
    if (event.target.tagName === "TD") {
      if (event.ctrlKey) {
        event.target.style.backgroundColor = "red";
      } else if (event.shiftKey) {
        event.target.style.backgroundColor = "blue";
      } else if (event.buttons === 1) {
        event.target.style.backgroundColor = "";
      }
    }
  });
};

// Borra todas las celdas del canvas al pulsar el botón
const borrarTodo = (tabla) => {
  document.getElementById("btnBorrar").addEventListener("click", () => {
    const celdas = tabla.querySelectorAll("td");

    for (let i = 0; i < celdas.length; i++) {
      celdas[i].style.backgroundColor = "";
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
    borrarTodo(tabla);
  });
})();