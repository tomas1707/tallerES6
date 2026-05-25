//Prototipos

//*********************************************
//Ejemplo 1. Definición Básica de Propiedades
//*********************************************
console.log("--- Ejemplo 1: Propiedades Básicas ---");

const curso = {};

// Asignación con notación de punto
curso.titulo = "Taller de JavaScript";
curso.duracion = 20;

// Asignación con notación de corchetes (ideal para nombres dinámicos)
const propiedadDinamica = "nivel";
curso[propiedadDinamica] = "Principiante a Intermedio";

// Propiedad con espacios (obligatorio usar corchetes)
curso["requisitos previos"] = "Ninguno";

console.log(curso);
// Resultado: { titulo: 'Taller de JavaScript', duracion: 20, nivel: 'Principiante a Intermedio', 'requisitos previos': 'Ninguno' }




//*********************************************
//Ejemplo 2. Atributos de Propiedad: Crear una propiedad Inmutable (De solo lectura)
//*********************************************
console.log("\n--- Ejemplo 2: Propiedad de Solo Lectura ---");

const configuracion = {
  entorno: "producción",
};

// Creamos la propiedad 'version' y bloqueamos su modificación
Object.defineProperty(configuracion, "version", {
  value: "1.0.0",
  writable: false, // No se puede sobrescribir
  enumerable: true, // Aparece en los bucles y console.log
  configurable: false, // No se puede borrar ni cambiar esta configuración en el futuro
});

// Intentamos cambiarla
configuracion.version = "2.0.0";

console.log(`Versión de la app: ${configuracion.version}`);
// Resultado: "1.0.0" (El cambio fue ignorado silenciosamente; en modo estricto 'use strict' daría error)




//*********************************************
//Ejemplo 3. ropiedades Ocultas o No Enumerables
//*********************************************
console.log("\n--- Ejemplo 3: Propiedad No Enumerable ---");

const usuario = {
  id: 482,
  username: "tomas_dev",
};

// Añadimos el token de sesión de forma oculta
Object.defineProperty(usuario, "sessionToken", {
  value: "xyz123secrettoken",
  enumerable: false, // Hace que la propiedad sea invisible para las iteraciones
});

// Intentamos listar las llaves del objeto
console.log("Llaves visibles:", Object.keys(usuario));
// Resultado: ['id', 'username'] (sessionToken no aparece)

// Sin embargo, si accedemos directamente, el valor ahí está:
console.log("Token interno:", usuario.sessionToken);
// Resultado: "xyz123secrettoken"



//*********************************************
//Ejemplo 4. Propiedades Dinámicas Computadas (ES6)
//*********************************************
console.log("\n--- Ejemplo 4: Propiedades Computadas de ES6 ---");

const prefijo = "api";

const urlsDeConexion = {
  // Evaluamos la expresión directamente dentro de las llaves del objeto
  [`${prefijo}_auth`]: "https://auth.api.com",
  [`${prefijo}_users`]: "https://users.api.com",
  [2 + 2]: "Cuatro", // El nombre de la propiedad puede ser el resultado de una operación
};

console.log(urlsDeConexion);
/* Resultado:
{
  '4': 'Cuatro',
  api_auth: 'https://auth.api.com',
  api_users: 'https://users.api.com'
}
*/



//*********************************************
// Ejemplo 5. Propiedades de Acceso (esto es de Es6))
//*********************************************
console.log("\n--- Ejemplo 5: Getters y Setters en Clases ---");

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this._precio = precio; // Usamos '_' por convención de propiedad interna
  }

  // Propiedad de acceso GET: Formatea la salida al leer
  get precio() {
    return `$${this._precio.toFixed(2)} MXN`;
  }

  // Propiedad de acceso SET: Valida los datos al escribir
  set precio(nuevoPrecio) {
    if (nuevoPrecio < 0) {
      console.error("Error: El precio no puede ser negativo.");
    } else {
      this._precio = nuevoPrecio;
    }
  }
}

const playera = new Producto("Playera Taller JS", 250);

// Usamos el GETTER automáticamente al invocar .precio sin paréntesis
console.log(`Precio al público: ${playera.precio}`);
// Resultado: "$250.00 MXN"

// Usamos el SETTER intentando pasar un valor inválido
playera.precio = -50;
// Resultado: "Error: El precio no puede ser negativo."
