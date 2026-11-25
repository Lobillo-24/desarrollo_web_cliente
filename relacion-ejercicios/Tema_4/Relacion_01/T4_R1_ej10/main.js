// Permite arrastrar cualquier imagen con la clase "arrastrable"
const arrastrarImagenes = () => {
  const imagenes = document.querySelectorAll(".arrastrable");
  let imagenArrastrada = null; // La imagen que estoy moviendo (null si ninguna)
  let diferenciaX = 0;
  let diferenciaY = 0;
  let capa = 1; // Para que la imagen que muevo se quede por encima de las demás

  // Al pulsar sobre una imagen la guardo como la que estoy arrastrando
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("mousedown", (event) => {
      console.log(`Evento: ${event.type} en ${imagenes[i].id}`);
      event.preventDefault(); // Quita el arrastre que trae el navegador por defecto
      imagenArrastrada = imagenes[i];
      diferenciaX = event.offsetX;
      diferenciaY = event.offsetY;
      capa++;
      imagenArrastrada.style.zIndex = capa;
    });
  }

  // Mientras arrastro, la imagen sigue al ratón
  document.addEventListener("mousemove", (event) => {
    if (imagenArrastrada !== null) {
      imagenArrastrada.style.left = `${event.pageX - diferenciaX}px`;
      imagenArrastrada.style.top = `${event.pageY - diferenciaY}px`;
    }
  });

  // Al soltar el botón dejo de arrastrar
  document.addEventListener("mouseup", () => {
    imagenArrastrada = null;
  });
};

(function () {
  console.log("ejecutando main.js");
  arrastrarImagenes();
})();