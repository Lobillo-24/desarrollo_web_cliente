const mostrar = (texto) => {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.getElementById("resultado").appendChild(parrafo);
  console.log(texto);
};

const nombres = [
  "Juan López",
  "María García",
  "José Martínez",
  "Javier Ruiz",
  "Lucía Pérez",
  "Jorge Sánchez",
  "Ana Torres",
  "Julia Fernández",
];

const iniciales = () => {
  let conJ = nombres.filter((nombre) => nombre.startsWith("J"));
  mostrar(`Empiezan por J: ${conJ.join(", ")}`);

  let soloIniciales = conJ.map((nombre) => {
    let partes = nombre.split(" ");
    return partes[0][0] + partes[1][0];
  });
  mostrar(`Iniciales: ${soloIniciales.join(", ")}`);

  soloIniciales.sort();
  mostrar(`Ordenadas: ${soloIniciales.join(", ")}`);
};

(function () {
  console.log("ejecutando main.js");
  mostrar(`Nombres: ${nombres.join(", ")}`);
  iniciales();
})();