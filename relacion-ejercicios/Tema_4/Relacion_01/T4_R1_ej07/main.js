const mensajesAyuda = {
  nombre: "Escribe tu nombre completo",
  correo: "Escribe tu correo electrónico, por ejemplo: nombre@gmail.com",
  comentario: "Escribe el comentario que nos quieras mandar",
  btnEnviar: "Pulsa para enviar el formulario",
  btnResetear: "Pulsa para borrar todos los campos",
};

// Muestra la ayuda del elemento que tiene el foco y la quita al perderlo
const mostrarAyuda = () => {
  const ayuda = document.getElementById("ayuda");

  for (const id in mensajesAyuda) {
    const elemento = document.getElementById(id);

    elemento.addEventListener("focus", (event) => {
      console.log(`Evento: ${event.type} en ${id}`);
      ayuda.textContent = mensajesAyuda[id];
    });

    elemento.addEventListener("blur", () => {
      ayuda.textContent = "";
    });
  }
};

// Para que la página no se recargue al enviar
const enviarFormulario = () => {
  document.getElementById("formContacto").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Formulario enviado");
  });
};

(function () {
  console.log("ejecutando main.js");
  mostrarAyuda();
  enviarFormulario();
})();