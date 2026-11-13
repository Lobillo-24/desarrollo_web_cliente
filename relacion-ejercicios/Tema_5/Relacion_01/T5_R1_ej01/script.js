function showNodosA() {
  // Recojo todos los <a> del html
  
  let TodosA = document.querySelectorAll("a");

  // Sacar el penultimo enlace del documento y mostrarlo por consola.

  let Penultimo = TodosA[TodosA.length - 2];

  // Numero de enlaces que llevan a google.com

  let EnlGoogle = document.querySelectorAll("a.google");

  // Número de enlaces del tercer párrafo

  // Número de enlaces
  console.log("Numero de enlaces -> ", TodosA.length);

  console.log("Dirección a la que enlaza el penúltimo enlace -> ", Penultimo);
  console.log("Número de enlaces que llevan a google -> ", EnlGoogle);
}

(function () {
  console.log("ejecutando script.js");
  showNodosA();
})();
