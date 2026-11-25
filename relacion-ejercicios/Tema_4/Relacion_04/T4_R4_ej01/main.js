// Comprueba si la cadena tiene al menos una letra mayúscula
const validarMayuscula = (cadena) => {
  for (let i = 0; i < cadena.length; i++) {
    const letra = cadena[i];
    if ((letra >= "A" && letra <= "Z") || letra === "Ñ") {
      return true;
    }
  }
  return false;
};

// Comprueba si la cadena tiene al menos 8 caracteres
const validarLongitud = (cadena) => {
  return cadena.length >= 8;
};

// Comprueba si la cadena tiene al menos un número
const validarNumero = (cadena) => {
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] >= "0" && cadena[i] <= "9") {
      return true;
    }
  }
  return false;
};

// Al pulsar el botón muestra el resultado de cada función
const inicializaEventos = () => {
  document.getElementById("btnValidar").addEventListener("click", () => {
    const texto = document.getElementById("texto").value;
    console.log(`Validando: ${texto}`);

    document.getElementById("resultado").innerHTML =
      `validarMayuscula: ${validarMayuscula(texto)}<br>` +
      `validarLongitud: ${validarLongitud(texto)}<br>` +
      `validarNumero: ${validarNumero(texto)}`;
  });
};

(function () {
  console.log("ejecutando main.js");
  inicializaEventos();
})();