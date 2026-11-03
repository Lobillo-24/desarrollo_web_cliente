/**
 * @name filterNumbersGreaterThan
 * @description Filtra los números de un array que sean mayor a cierto número
 * x dejando solo los que sean menores a este
 *
 * @param {number[]} numbers - Array de números a filtrar
 * @param {number} filter - Número a partir del cuál filtrar los demás números
 * @returns {Number[]} - Array de números filtrados menores a {filter}
 *
 * @example
 * filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
 */
export function filterNumbersGreaterThan(numbers, filter) {
  let resultado = [];

  // Recorremos el array y nos quedamos solo con los menores que "filter"
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < filter) {
      resultado.push(numbers[i]);
    }
  }

  return resultado;
}

/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que
 * transformar las "a" en 4, las "e" en 3, las "i" en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text
 * @returns {String} - El texto convertido a "Hacker Speak"
 *
 * @example
 * toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ck3r n0w"
 */
export function toHackerSpeak(text) {
  // replace con /letra/gi cambia todas las apariciones (g) sin importar mayúsculas (i)
  let resultado = text;
  resultado = resultado.replace(/a/gi, "4");
  resultado = resultado.replace(/e/gi, "3");
  resultado = resultado.replace(/i/gi, "1");
  resultado = resultado.replace(/o/gi, "0");
  resultado = resultado.replace(/s/gi, "5");

  return resultado;
}

/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión
 * @returns {String} - La extensión del archivo
 *
 * @example
 * getFileExtension("imagen.jpg") // returns "jpg"
 */
export function getFileExtension(file) {
  // Cortamos el nombre por los puntos y cogemos la última parte
  let partes = file.split(".");
  return partes[partes.length - 1];
}

/**
 * @name flatArray
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los
 * ítems
 *
 * @param {[][]} arr - Array 2D a "aplanar"
 * @returns {[]} - El array "aplanado"
 *
 * @example
 * flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 4, 3, 10, 2, 5]
 */
export function flatArray(arr) {
  let resultado = [];

  // concat une cada array pequeño al final del resultado
  for (let i = 0; i < arr.length; i++) {
    resultado = resultado.concat(arr[i]);
  }

  return resultado;
}

/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 *
 * @example
 * removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */
export function removeDuplicates(arr) {
  let resultado = [];

  // Solo añadimos el elemento si todavía no está en el resultado
  for (let i = 0; i < arr.length; i++) {
    if (!resultado.includes(arr[i])) {
      resultado.push(arr[i]);
    }
  }

  return resultado;
}

/**
 * @name countLetter
 * @description Devuelve la cantidad de veces que una letra aparece en un string
 *
 * @param {string} letter - Letra a contar
 * @param {string} text - Texto sobre el que realizar la cuenta de {letter}
 * @returns {Number} - Número de veces que aparece {letter} en {text}
 *
 * @example
 * countLetter("a", "javascript") // returns 2
 */
export function countLetter(letter, text) {
  let contador = 0;

  // Pasamos todo a minúsculas para que no importen las mayúsculas
  let letra = letter.toLowerCase();
  let texto = text.toLowerCase();

  // Recorremos el texto letra a letra y contamos las coincidencias
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == letra) {
      contador = contador + 1;
    }
  }

  return contador;
}

/**
 * @name removeWords
 * @description Dado un string y un array de palabras a remover, devuelve el
 * string sin las palabras removidas
 *
 * @param {string} str - Texto a recortar
 * @param {string[]} words - Palabras a remover
 * @returns {string} - Texto resultante con las palabras removidas
 *
 * @example
 * removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test"
 */
export function removeWords(str, words) {
  // Separamos el texto en palabras
  let palabras = str.split(" ");
  let resultado = [];

  // Nos quedamos solo con las palabras que NO están en la lista a quitar
  for (let i = 0; i < palabras.length; i++) {
    if (!words.includes(palabras[i])) {
      resultado.push(palabras[i]);
    }
  }

  // Volvemos a unir las palabras con espacios
  return resultado.join(" ");
}
