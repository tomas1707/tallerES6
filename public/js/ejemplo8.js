//Cadenas

let nom = "Tomas gonzález Alvarado";

//Esto se utilizaba en ES5
console.log("Hola me llamo " + nom + " y tengo 45 años");
console.log("Hola me llamo", nom, "y tengo 45 años");

//Ahora en ES6 así se utiliza.
console.log(`hola me llamo ${nom} y tengo 45 años`);

// =====================================================
// EJEMPLO 1 - ES5
// Concatenación de cadenas con +
// =====================================================

var nombre = "María";
var saludo = "Hola " + nombre;

console.log(saludo);

// =====================================================
// EJEMPLO 2 - ES6
// Template literals con backticks
// =====================================================

let ciudad = "México";

console.log(`Bienvenido a ${ciudad}`);

// =====================================================
// EJEMPLO 3 - ES5
// Obtener longitud de una cadena
// =====================================================

var texto = "JavaScript";

console.log("Longitud: " + texto.length);

// =====================================================
// EJEMPLO 4 - ES5
// Convertir a mayúsculas
// =====================================================

var lenguaje = "javascript";

console.log(lenguaje.toUpperCase());

// =====================================================
// EJEMPLO 5 - ES5
// Convertir a minúsculas
// =====================================================

var palabra = "HOLA MUNDO";

console.log(palabra.toLowerCase());

// =====================================================
// EJEMPLO 6 - ES5
// Obtener una parte de la cadena
// =====================================================

var frase = "Programación Web";

console.log(frase.substring(0, 12));

// =====================================================
// EJEMPLO 7 - ES5
// Buscar texto dentro de una cadena
// =====================================================

var correo = "usuario@gmail.com";

console.log(correo.indexOf("@"));

// =====================================================
// EJEMPLO 8 - ES6
// Método includes()
// =====================================================

let mensaje = "Bienvenido al sistema";

console.log(mensaje.includes("sistema"));

// =====================================================
// EJEMPLO 9 - ES6
// Repetir cadenas
// =====================================================

let separador = "-";

console.log(separador.repeat(10));

// =====================================================
// EJEMPLO 10 - ES5
// Reemplazar texto
// =====================================================

var cadena = "Hola Juan";

console.log(cadena.replace("Juan", "Pedro"));

// =====================================================
// EJEMPLO 11 - ES6
// Interpolación de variables
// =====================================================

let producto = "Laptop";
let precio = 15000;

console.log(`El producto ${producto} cuesta $${precio}`);

// =====================================================
// EJEMPLO 12 - ES5
// Dividir cadenas con split()
// =====================================================

var colores = "Rojo,Verde,Azul";

var lista = colores.split(",");

console.log(lista);

// =====================================================
// EJEMPLO 13 - ES6
// Método startsWith()
// =====================================================

let archivo = "documento.pdf";

console.log(archivo.startsWith("doc"));

// =====================================================
// EJEMPLO 14 - ES6
// Método endsWith()
// =====================================================

let imagen = "foto.png";

console.log(imagen.endsWith(".png"));

// =====================================================
// EJEMPLO 15 - ES5
// Eliminar espacios
// =====================================================

var usuario = "   Carlos   ";

console.log(usuario.trim());
