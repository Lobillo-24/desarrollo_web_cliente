let cookies = [];

const nuevaCookie = () => {

    let nombre_mal = document.getElementById("nombre").value;
    let nombre = nombre_mal.trim().toLowerCase();
    let valor = document.getElementById("valor").value;

    document.cookie = `${nombre}=${valor}`;

    let cookie = {
        nombre: nombre,
        valor: valor
    };

    cookies.push(cookie);

}

const buscarCookie = () => {

    let buscado_mal = document.getElementById("buscar").value;
    let buscado = buscado_mal.trim().toLowerCase();
    let encontrado = false;

    for (let i = 0; i < cookies.length; i++) {

    if (cookies[i].nombre.toLowerCase() === buscado) {
        alert(cookies[i].valor);
        encontrado = true;
    }

    }

    if (encontrado === false) {
        alert("No existe ninguna cookie con ese nombre");
    }

}

const mostrarCookie = () =>  {

    let boton_enviar = document.getElementById("nuevo");

    boton_enviar.addEventListener("click", nuevaCookie);

    let boton_mostrar =  document.getElementById("mostrar");

    boton_mostrar.addEventListener("click", () => {

        let cookie = document.cookie;
        alert(cookie);

    })

    let boton_buscar = document.getElementById("buscador");

    boton_buscar.addEventListener("click", buscarCookie);

}


(function () {
  console.log("Ejecutando main.js");
  mostrarCookie();
})();