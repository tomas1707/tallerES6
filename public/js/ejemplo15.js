//filter

//**************************************************
//Comenzaremos con unos ejemplos sencillos
//**************************************************

//######## Ejemplo 1: Filtrar números pares
console.log("Ejemplo 1: Filtrar números pares");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Solo pasan los números cuyo residuo al dividir entre 2 sea cero
const pares = numeros.filter(num => num % 2 === 0);

console.log(pares); 
// Resultado: [2, 4, 6, 8, 10]



//######## Ejemplo 2: Filtrar palabras cortas
console.log("\nEjemplo 2: Filtrar palabras cortas");
const palabras = ["js", "javascript", "html", "css", "ecmascript"];

// Solo dejamos pasar las palabras con más de 4 caracteres
const palabrasLargas = palabras.filter(palabra => palabra.length > 4);

console.log(palabrasLargas); 
// Resultado: ['javascript', 'ecmascript']


//**************************************************
//Ahora avaznamos con ejemplos nivel intermedio
//**************************************************

//######## Ejemplo 3: Filtrar por propiedades booleanas (Estado)
console.log("\nEjemplo 3: Filtrar por propiedades booleanas (Estado)");
const usuarios = [
    { nombre: "Tomás", activo: true },
    { nombre: "Ana", activo: false },
    { nombre: "Pedro", activo: true },
    { nombre: "Lucía", activo: false }
];

// No hace falta poner 'usuario.activo === true', 
// la propiedad ya es un booleano
const usuariosActivos = usuarios.filter(usuario => usuario.activo);

console.log(usuariosActivos);
/* Resultado:
[
  { nombre: 'Tomás', activo: true },
  { nombre: 'Pedro', activo: true }
]
*/



//######## Ejemplo 4: Filtrado por rangos numéricos (Buscador de productos)
console.log("\nEjemplo 4: Filtrado por rangos numéricos (Buscador de productos)");
const productos = [
    { nombre: "Teclado", precio: 45 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Laptop", precio: 1200 }
];

const presupuestoMaximo = 50;

// Filtramos los productos que el alumno puede pagar
const economicos = productos.filter(prod => prod.precio <= presupuestoMaximo);

console.log(economicos);
// Resultado: [{ nombre: 'Teclado', precio: 45 }, { nombre: 'Mouse', precio: 20 }]


//######## Ejemplo 5: Coincidencia parcial de texto
console.log("\nEjemplo 5: Coincidencia parcial de texto");
const libros = ["Eloquent JavaScript", "Clean Code", "JavaScript: The Good Parts", "You Don't Know JS"];
const busqueda = "code";

// Filtramos ignorando mayúsculas/minúsculas
const librosEncontrados = libros.filter(libro => 
    libro.toLowerCase().includes(busqueda.toLowerCase())
);

console.log(librosEncontrados); 
// Resultado: ['Clean Code']



//**************************************************
//Finalmente terminamos con ejemplos nivel avanzado
//**************************************************

//######## Ejemplo 6: Filtrado con múltiples condiciones dinámicas
console.log("\nEjemplo 6: Filtrado con múltiples condiciones dinámicas");
const inventario = [
    { tipo: "consola", marca: "Sony", precio: 500 },
    { tipo: "accesorio", marca: "Sony", precio: 70 },
    { tipo: "consola", marca: "Nintendo", precio: 300 },
    { tipo: "accesorio", marca: "Logitech", precio: 40 }
];

// Queremos accesorios que además cuesten menos de 50 dólares
const accesoriosBaratos = inventario.filter(item => 
    item.tipo === "accesorio" && item.precio < 50
);

console.log(accesoriosBaratos);
// Resultado: [{ tipo: 'accesorio', marca: 'Logitech', precio: 40 }]



//######## Ejemplo 7: Eliminar elementos duplicados en un Array
console.log("\nEjemplo 7: Eliminar elementos duplicados en un Array");
const numerosRepetidos = [1, 2, 3, 1, 4, 2, 5, 3];

// .indexOf() siempre devuelve la PRIMERA posición donde encuentra un elemento.
// Si el índice actual NO coincide con su primera aparición, significa que es un duplicado.
const numerosUnicos = numerosRepetidos.filter((num, index, arrayOriginal) => {
    return arrayOriginal.indexOf(num) === index;
});

console.log(numerosUnicos); 
// Resultado: [1, 2, 3, 4, 5]



//######## Ejemplo 8: Sanitización de datos (Limpieza de valores "Falsy")
console.log("\nEjemplo 8: Sanitización de datos (Limpieza de valores 'Falsy')");
const datosSucios = ["Tomás", null, "Ana", undefined, "", "Pedro", false];

// Al pasar la función constructora Boolean como callback, 
// JS evalúa cada elemento y elimina automáticamente todo lo que sea un valor "falsy".
const datosLimpios = datosSucios.filter(Boolean);

console.log(datosLimpios); 
// Resultado: ['Tomás', 'Ana', 'Pedro']