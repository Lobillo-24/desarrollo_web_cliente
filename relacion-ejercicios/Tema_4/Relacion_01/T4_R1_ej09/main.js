// Permite arrastrar la imagen con el ratón
const arrastrarImagen = () => {
  const imagen = document.getElementById("imagen");
  let arrastrando = false;
  let diferenciaX = 0;
  let diferenciaY = 0;

  // Al pulsar sobre la imagen empiezo a arrastrar
  imagen.addEventListener("mousedown", (event) => {
    console.log(`Evento: ${event.type}`);
    event.preventDefault(); // Quita el arrastre que trae el navegador por defecto
    arrastrando = true;
    diferenciaX = event.offsetX; // Donde he pinchado dentro de la imagen
    diferenciaY = event.offsetY;
  });

  // Mientras arrastro, la imagen sigue al ratón
  document.addEventListener("mousemove", (event) => {
    if (arrastrando) {
      imagen.style.left = `${event.pageX - diferenciaX}px`;
      imagen.style.top = `${event.pageY - diferenciaY}px`;
    }
  });

  // Al soltar el botón dejo de arrastrar
  document.addEventListener("mouseup", () => {
    arrastrando = false;
  });
};

(function () {
  console.log("ejecutando main.js");
  arrastrarImagen();
})();