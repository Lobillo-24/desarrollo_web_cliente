const colores = [
  { codigo: "#000000", nombre: "negro" },
  { codigo: "#FFFFFF", nombre: "blanco" },
  { codigo: "#FF0000", nombre: "rojo" },
  { codigo: "#00FF00", nombre: "verde" },
  { codigo: "#0000FF", nombre: "azul" },
  { codigo: "#FFFF00", nombre: "amarillo" },
  { codigo: "#00FFFF", nombre: "cian" },
  { codigo: "#FF00FF", nombre: "magenta" },
  { codigo: "#808080", nombre: "gris" },
  { codigo: "#FFA500", nombre: "naranja" },
  { codigo: "#800080", nombre: "morado" },
  { codigo: "#A52A2A", nombre: "marrón" },
];

// Cambia la imagen del título al pasar el ratón y la vuelve a poner al salir
const eventosTitulo = () => {
  const titulo = document.getElementById("titulo");

  titulo.addEventListener("mouseover", (event) => {
    console.log(`Evento: ${event.type} en el título`);
    titulo.src = "titulo2.svg";
  });

  titulo.addEventListener("mouseout", () => {
    titulo.src = "titulo1.svg";
  });
};

// Crea la tabla con los códigos y les pone los eventos
const crearTabla = () => {
  const tabla = document.getElementById("tablaColores");

  for (let i = 0; i < colores.length; i++) {
    const fila = document.createElement("tr");
    const celda = document.createElement("td");
    celda.textContent = colores[i].codigo;

    // Al entrar se colorea con su color
    celda.addEventListener("mouseover", () => {
      celda.style.backgroundColor = colores[i].codigo;
    });

    // Al salir se quita el color y se pone el nombre
    celda.addEventListener("mouseout", () => {
      celda.style.backgroundColor = "";
      celda.textContent = colores[i].nombre;
    });

    fila.appendChild(celda);
    tabla.appendChild(fila);
  }
};

(function () {
  console.log("ejecutando main.js");
  eventosTitulo();
  crearTabla();
})();