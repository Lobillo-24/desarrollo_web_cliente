// Cambia todos los & por "and" cuando el campo pierde el foco
const cambiarAmpersand = () => {
  const campo = document.getElementById("texto");

  campo.addEventListener("blur", (event) => {
    console.log(`Evento: ${event.type}`);
    campo.value = campo.value.replaceAll("&", "and");
  });
};

(function () {
  console.log("ejecutando main.js");
  cambiarAmpersand();
})();