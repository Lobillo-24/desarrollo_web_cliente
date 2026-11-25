// Pone o quita el estilo de requisito cumplido en el <li>
const marcarRequisito = (id, cumple) => {
  const requisito = document.getElementById(id);
  if (cumple) {
    requisito.classList.add("cumplido");
  } else {
    requisito.classList.remove("cumplido");
  }
  return cumple;
};

// Valida el nombre de usuario cada vez que se escribe
const validarUsuario = () => {
  const inputUsuario = document.getElementById("username");
  const btnSubmit = document.getElementById("btnSubmit");

  inputUsuario.addEventListener("input", (event) => {
    const valor = event.target.value;
    console.log(`Evento: ${event.type} -> ${valor}`);

    const tieneMinuscula = marcarRequisito("reqMinuscula", /[a-z]/.test(valor));
    const tieneMayuscula = marcarRequisito("reqMayuscula", /[A-Z]/.test(valor));
    const tieneLongitud = marcarRequisito("reqLongitud", valor.length >= 6);

    // El botón solo se habilita si se cumplen los tres requisitos
    btnSubmit.disabled = !(tieneMinuscula && tieneMayuscula && tieneLongitud);
  });

  btnSubmit.addEventListener("click", () => {
    alert(`Nombre de usuario "${inputUsuario.value}" válido`);
  });
};

(function () {
  console.log("ejecutando main.js");
  validarUsuario();
})();