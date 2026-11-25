// Cuando se carga la página guardo la hora y cada segundo muestro el tiempo que ha pasado
const mostrarTiempo = () => {
  window.addEventListener("load", (event) => {
    console.log(`Evento: ${event.type}`);
    const inicio = Date.now();

    setInterval(() => {
      const segundos = Math.floor((Date.now() - inicio) / 1000);
      document.getElementById("tiempo").textContent = `${segundos} segundos`;
    }, 1000);
  });
};

(function () {
  console.log("ejecutando main.js");
  mostrarTiempo();
})();