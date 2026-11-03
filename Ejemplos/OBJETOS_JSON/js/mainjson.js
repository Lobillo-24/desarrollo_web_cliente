// ============================================================
// IMPORTACIÓN DE DATOS
// ============================================================

// Importamos el archivo db.json y lo guardamos en la variable "db".
// - "import db from ..." carga el contenido del archivo como un objeto JS.
// - "../db.json" es la ruta relativa: sube una carpeta desde donde está este archivo.
// - "with { type: 'json' }" le dice al navegador que el archivo es JSON
//   (sin esto, el navegador no sabe cómo interpretarlo y da error).
import db from "../db.json" with { type: "json" };


// ============================================================
// FUNCIÓN PRINCIPAL: MOSTRAR LA TABLA
// ============================================================

// Construye el HTML de la tabla de alumnos y lo devuelve como texto.
// Parámetros:
//   - obAlumnos: array con TODOS los alumnos (db.students).
//   - campo (opcional): nombre de la propiedad por la que filtrar
//     ("active", "id", "level"...). Si no se pasa, no se filtra nada.
//   - valor (opcional): valor que debe tener ese campo para que el alumno aparezca.
// Ejemplo: mostrarAlumnos(db.students, "active", true) -> solo los activos.
function mostrarAlumnos(obAlumnos, campo, valor){

    // Partimos del array completo. Si no hay que filtrar, se queda así
    // y se mostrarán todos los alumnos.
    let arFiltrado = obAlumnos;

    // "campo" solo tiene valor si nos lo han pasado al llamar a la función.
    // Si es así, sustituimos el array completo por el array ya filtrado.
    if (campo) {
        arFiltrado = filtroGenerico(obAlumnos, campo, valor);
    }

    // Aquí iremos acumulando el HTML de todas las filas (<tr>) como texto.
    let filas = "";

    // Recorremos los alumnos (ya filtrados o no) uno a uno.
    // En cada vuelta, mostrarAlumno() nos da el <tr> de ese alumno
    // y lo añadimos al final del texto con "+=".
    for (let i = 0; i < arFiltrado.length; i++) {
        filas += mostrarAlumno(arFiltrado[i]);
    }

    // Si el filtro no ha encontrado a nadie, el array está vacío (longitud 0).
    // En ese caso devolvemos un mensaje en lugar de una tabla vacía.
    if (arFiltrado.length === 0) {
        return `<h3>Alumnos</h3><p>No hay alumnos con ese filtro.</p>`;
    }

    // Devolvemos el título y UNA sola tabla que envuelve todas las filas.
    // Las filas (<tr>) tienen que ir dentro de <table> para que el HTML sea válido.
    return `<h3>Alumnos</h3><table border="1">${filas}</table>`;
}


// ============================================================
// FUNCIONES DE FILTRADO
// ============================================================

// Filtro genérico: sirve para filtrar por CUALQUIER propiedad del alumno.
// - filter() recorre el array y devuelve uno nuevo solo con los alumnos
//   para los que la condición de dentro da true.
// - alumno[campo] usa corchetes para leer una propiedad cuyo nombre
//   está guardado en una variable. Si el campo vale "level",
//   alumno[campo] equivale a alumno.level.
// - "===" compara valor Y tipo: el número 3 no es igual al texto "3".
function filtroGenerico(obAlumnos, campo, valor){
    return obAlumnos.filter(alumno => alumno[campo] === valor);
}

// Atajo para filtrar por la propiedad "active" (true = activo, false = inactivo).
// No hace trabajo propio: llama al filtro genérico con el campo ya puesto.
function filtroActivos(obAlumnos, activo){
    return filtroGenerico(obAlumnos, "active", activo);
}

// Atajo para filtrar por "id". Devuelve un array, aunque solo coincida un alumno.
function filtroId(obAlumnos, id){
    return filtroGenerico(obAlumnos, "id", id);
}

// Atajo para filtrar por "level" (el nivel del alumno).
function filtroLevel(obAlumnos, level){
    return filtroGenerico(obAlumnos, "level", level);
}


// ============================================================
// FUNCIÓN AUXILIAR: UNA FILA
// ============================================================

// Recibe UN solo alumno (un objeto con id, name, level...)
// y devuelve el HTML de su fila de tabla.
// Las expresiones ${...} insertan el valor de cada propiedad dentro del texto.
function mostrarAlumno(obAlumno){
    return `
        <tr>
            <td>${obAlumno.id}</td>
            <td>${obAlumno.name}</td>
            <td>${obAlumno.level}</td>
        </tr>
    `;
}


// ============================================================
// EJECUCIÓN: PINTAR EN LA PÁGINA
// ============================================================

// IIFE (función autoejecutable): se define y se ejecuta al instante,
// en cuanto el navegador carga este script. Así no hace falta llamarla aparte
// y las variables que declaremos dentro no "ensucian" el resto del código.
(function() {

    // Buscamos en el HTML el elemento con id="alumnos".
    // Ahí es donde vamos a meter la tabla. Debe existir en tu index.html.
    const contenedor = document.getElementById("alumnos");

    // --- PRUEBAS: deja descomentada solo una cada vez ---
    // innerHTML sustituye el contenido del contenedor por el HTML que le demos.

    // 1. Todos los alumnos (sin filtro: no pasamos campo ni valor)
    // contenedor.innerHTML = mostrarAlumnos(db.students);

    // 2. Solo activos (campo "active", valor true)
    // contenedor.innerHTML = mostrarAlumnos(db.students, "active", true);

    // 3. Solo inactivos (campo "active", valor false)
    // contenedor.innerHTML = mostrarAlumnos(db.students, "active", false);

    // 4. Por id. Ojo al tipo: 3 (número) solo coincide si en el JSON el id es número.
    // contenedor.innerHTML = mostrarAlumnos(db.students, "id", 3);

    // 5. Por nivel. Cambia "alto" por un valor que exista de verdad en tu db.json.
    // contenedor.innerHTML = mostrarAlumnos(db.students, "level", "alto");

    // 6. Usando los atajos: primero filtramos nosotros y luego pintamos el resultado.
    // Como no pasamos campo, mostrarAlumnos pinta el array tal cual lo recibe.
    // const activos = filtroActivos(db.students, true);
    // contenedor.innerHTML = mostrarAlumnos(activos);

    // 7. Filtros encadenados: activos Y de un nivel concreto.
    // const activosAltos = filtroLevel(filtroActivos(db.students, true), "alto");
    // contenedor.innerHTML = mostrarAlumnos(activosAltos);
})();