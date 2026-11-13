function showNodosDiv() {
  let nodoPrincipal = document.getElementById(`principal`);
  let nodoIndividual = document.querySelector("div");

  let htmlColeccionDiv = document.getElementsByTagName("div");
  let nodelustColeccionDiv = document.querySelectorAll("div");
  
  console.log("nodoPrincipal", nodoPrincipal.tagName);
}

(function () {
  console.log("ejecutando mainejedom.js");
  showNodosDiv();
})();
