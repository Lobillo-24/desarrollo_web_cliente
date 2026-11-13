const colorOriginal = "lightgray"; // Guarda el color original
const colorHover = "lightgreen";

const eventoMovRaton = (event) => {
  document.body.addEventListener("mousemove", (event) => {
    console.log(`Evento: ${event.type} en ${event.target.tagName}`);
    console.log(`Coordenadas: (${event.pageX},${event.pageY})`);
    document.getElementById("coordenadas").textContent =
      `(${event.pageX},${event.pageY})`;
  });
};

const eventosBody = () => {
  document.body.addEventListener("click", (event) => {
    console.log(`Evento: ${event.type} en ${event.target.tagName}`);
  });
};

/**
 * Función que asigna eventos al div
 */

const eventosDiv = () => {
  let div = document.getElementById("div1");
  // console.log(`Evento: ${evento.type} en div ${evento.target.id}`);

  document.getElementById("div1").addEventListener("mouseover", (event) => {
    document.getElementById("div1").style.backgroundColor = colorHover;
    document.getElementById("div1").textContent =
      `(${event.pageX},${event.pageY})`;
    console.log("Objeto evento:", event);
    console.log(`Evento: ${event.type} en div ${event.target.id}`);
  });
};

const insertaProductoCarrido = () => {};

const enlazaEventosDiv = () => {
  //const divs = document.getElementsByClassName("item");
  const divs = document.querySelectorAll(".item");

  divs.forEach((item) => {
    item.addEventListener("click", (event) => {
      alert(
        "añadiendo producto " +
          event.target.id +
          " textcontent: " +
          event.target.textContent,
      );
    });
  });

  console.log("div", divs);
};

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
/**
 * Asociamos eventos de dos formas distintas
 * Se recomienda el uso de addEventListener para evitar sobrescribir eventos
 * además de permitir asignar varios eventos a un mismo elemento
 * y existen eventos que no se pueden asignar por propiedad
 *  */
const inicializaEventos = () => {
  console.log("Eventos inicializados");
  document.getElementById("btn1").addEventListener("click", (event) => {
    console.log(event);
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    //event.target.style.backgroundColor = rndCol;
    document.getElementById("btn1").style.backgroundColor = rndCol;
    console.log("event.type", event.type);
    //alert("Has pulsado el botón");
  });
  const boton = document.getElementById("btn1");
  boton.onclick = () => {
    console.log("Otra forma de asignar eventos");
  };
};

/**
 * Función autoejecutable
 */
(function () {
  console.log("This is main4-02.js");
  //enlazaEventosDiv();
  //inicializaEventos();
  //eventosDiv();
  //eventosBody();
  eventoMovRaton();
})();