/*function getDatos(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log("mostrando datos");
      analizaResultado(data);
    });
}*/

function getProductos() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      muestraProductos2(data);
    });
}

function getUsuarios() {
  fetch("https://fakestoreapi.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function muestraProductos(data) {
  let strContenido = "";
  for (let item of data) {
    strContenido += `<div>${item.id} - ${item.title}</div>`;
  }

  let data2 = data.map((item) => `<div>${item.id} - ${item.title}</div>`);
  let strSalida = data2.join(" ");
  console.log("Data2 => ", data2);
  console.log("strSalida", strSalida);
  document.getElementById("main").innerHTML = strSalida;
}

(function () {
  // (getDatos("https://fakestoreapi.com/products"), muestraProductos2);
  (getUsuarios("https://fakestoreapi.com/users"), muestraUsuarios);

  console.log("Ejecutando Fetch");
  getProductos();
  getUsuarios();
})();

function muestraProductos2(data) {
  let strContenido = "";
  for (let item of data) {
    strContenido += `<div>${item.id} - ${item.title}</div>`;
  }

  let data2 = data.map((item) => `<div>${item.id} - ${item.title}</div>`);
  let strSalida = data2.join(" ");
  console.log("Data2 => ", data2);
  console.log("strSalida", strSalida);
  document.getElementById("main").innerHTML = data
    .map((item) => `<div>${item.id} - ${item.title}</div>`)
    .join(" ");
}

function muestraUsuarios(data) {
  let strContenido = "";
  for (let item of data) {
    strContenido += `<div>${item.id} - ${item.user}</div>`;
  }

  let data2 = data.map((item) => `<div>${item.id} - ${item.user}</div>`);
  let strSalida = data2.join(" ");
  console.log("Data2 => ", data2);
  console.log("strSalida", strSalida);
  document.getElementById("usuario").innerHTML = strSalida;
}