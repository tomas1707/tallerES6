//Mas funciones flecha


// --- EJEMPLO 1: Sintaxis básica (Sin parámetros y con retorno implícito) ---
// Si la función no recibe argumentos, se usan paréntesis vacíos.
// Al ser una sola línea, no requiere la palabra 'return' ni llaves '{}'.
const obtenerMensajeBienvenida = () => "¡Bienvenidos al Taller de JavaScript ES6+!";

console.log("--- Ejemplo 1 ---");
console.log(obtenerMensajeBienvenida()); 
// Resultado: ¡Bienvenidos al Taller de JavaScript ES6+!
console.log("\n");


// --- EJEMPLO 2: Un solo parámetro (Sintaxis ultra-simplificada) ---
// Si la función recibe exactamente UN parámetro, los paréntesis son opcionales.
// Sigue manteniendo el retorno implícito por ser una sola línea de código.
const calcularCuadrado = numero => numero * numero;

console.log("--- Ejemplo 2 ---");
console.log(`El cuadrado de 5 es: ${calcularCuadrado(5)}`); 
// Resultado: El cuadrado de 5 es: 25
console.log("\n");


// --- EJEMPLO 3: Múltiples parámetros y bloque de código compuesto ---
// Cuando hay dos o más parámetros, los paréntesis son obligatorios.
// Si la lógica requiere más de una línea, usamos llaves '{}' y el 'return' explícito.
const calcularPromedioFinal = (nota1, nota2, nota3) => {
    const sumaTotal = nota1 + nota2 + nota3;
    const resultado = sumaTotal / 3;
    return resultado.toFixed(2); // Retorna el promedio con dos decimales
};

console.log("--- Ejemplo 3 ---");
console.log(`El promedio de las calificaciones es: ${calcularPromedioFinal(85, 92, 100)}`);
// Resultado: El promedio de las calificaciones es: 92.33
console.log("\n");


// --- EJEMPLO 4: Procesamiento de Colecciones (Uso con métodos de Arrays) ---
// Las funciones flecha brillan al combinarse con métodos de orden superior de ES5/ES6.
// Aquí filtramos alumnos aprobados (calificación mayor o igual a 70) usando una línea limpia.
const estudiantes = [
    { nombre: "Ana", calificacion: 95 },
    { nombre: "Pedro", calificacion: 62 },
    { nombre: "Tomás", calificacion: 88 },
    { nombre: "Sofía", calificacion: 50 }
];

const aprobados = estudiantes.filter(alumno => alumno.calificacion >= 70);

console.log("--- Ejemplo 4 (Alumnos Aprobados) ---");
console.log(aprobados);
/* Resultado:
[
  { nombre: 'Ana', calificacion: 95 },
  { nombre: 'Tomás', calificacion: 88 }
]
*/
console.log("\n");


// --- EJEMPLO 5: Retorno implícito de Objetos Literales ---
// Este caso suele confundir a los alumnos. Si quieres retornar un objeto literal
// de forma implícita (sin la palabra 'return'), debes envolver las llaves del objeto 
// entre paréntesis '({})' para que el motor de JS no confunda las llaves con un bloque de código.
const crearPerfilUsuario = (username, email) => ({
    id: Date.now(),
    username: username,
    email: email,
    rol: "Estudiante"
});

console.log("--- Ejemplo 5 (Creación de Objeto) ---");
const nuevoUsuario = crearPerfilUsuario("tomas_dev", "tomas@universidad.edu");
console.log(nuevoUsuario);
/* Resultado:
{
  id: 1716393029000, // (Timestamp dinámico)
  username: 'tomas_dev',
  email: 'tomas@universidad.edu',
  rol: 'Estudiante'
}
*/