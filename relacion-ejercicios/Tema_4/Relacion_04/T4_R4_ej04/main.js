// Función de ejemplo del profesor
function validaExpresionRegular(scadena, sexpresion){
  const expR=new RegExp(sexpresion);
  return expR.test(scadena)
}

// Expresiones regulares de cada campo
const expresiones = {
  nombre: "^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+( [a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+)*$",
  apellido: "^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+( [a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+)*$",
  telefono: "^[6789][0-9]{8}$",
  email: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
  password: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$",
};

// Mensajes de error de cada campo
const mensajes = {
  nombre: "El nombre solo puede contener letras",
  apellido: "El apellido solo puede contener letras",
  telefono: "Teléfono no válido (9 dígitos, empieza por 6, 7, 8 o 9)",
  email: "Email no válido (ejemplo: usuario@correo.com)",
  password: "Mínimo 8 caracteres con mayúscula, minúscula y número",
  confirmar: "Las contraseñas no coinciden",
  terminos: "Debes aceptar los términos para registrarte",
};

const campos = ["nombre", "apellido", "telefono", "email", "password", "confirmar"];

// Marca un campo como correcto o incorrecto (borde rojo + mensaje)
const marcarCampo = (id, correcto, mensaje) => {
  const campo = document.getElementById(id);
  const error = document.getElementById(`error-${id}`);
  if (correcto) {
    campo.classList.remove("campo-error");
    error.textContent = "";
  } else {
    campo.classList.add("campo-error");
    error.textContent = mensaje;
  }
  return correcto;
};

// Valida un campo de texto según su id
const validarCampo = (id) => {
  const valor = document.getElementById(id).value;

  if (valor.trim() === "") {
    return marcarCampo(id, false, "Este campo es obligatorio");
  }

  let correcto;
  if (id === "confirmar") {
    correcto = valor === document.getElementById("password").value;
  } else {
    correcto = validaExpresionRegular(valor, expresiones[id]);
  }
  return marcarCampo(id, correcto, mensajes[id]);
};

// El checkbox de términos es obligatorio
const validarTerminos = () => {
  const aceptado = document.getElementById("terminos").checked;
  return marcarCampo("terminos", aceptado, mensajes.terminos);
};

const inicializaValidacion = () => {
  // Validar cada campo al perder el foco
  campos.forEach((id) => {
    document.getElementById(id).addEventListener("blur", () => {
      console.log(`Evento: blur en ${id}`);
      validarCampo(id);
    });
  });

  document.getElementById("terminos").addEventListener("change", validarTerminos);

  // Validar todo al enviar el formulario
  document.getElementById("formulario").addEventListener("submit", (event) => {
    let todoCorrecto = true;

    campos.forEach((id) => {
      if (!validarCampo(id)) {
        todoCorrecto = false;
      }
    });

    if (!validarTerminos()) {
      todoCorrecto = false;
    }

    if (!todoCorrecto) {
      event.preventDefault();
      console.log("El formulario tiene errores");
    } else {
      alert("Registro completado correctamente");
    }
  });
};

(function () {
  console.log("ejecutando main.js");
  inicializaValidacion();
})();