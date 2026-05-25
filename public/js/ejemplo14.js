//map

//**************************************************
//Comenzaremos con unos ejemplos sencillos
//**************************************************

//######## Ejemplo 1: recorrer un array

const miArray=[1,2,3,4,5,6,7,8];
//programación clásica
for (i=0;i<miArray.length;i++){
  console.log(miArray[i]+", ");
}

console.log("Números del arrau");
miArray.map(elemento=> console.log(elemento));

//usando programación funcional
console.log("Identificando números pares e impares");
miArray.map(elemento=> {
  if (elemento%2 ==0 )
    console.log(`${elemento} es par`);
  else  
    console.log(`${elemento} es impar`);
});

//######## Ejemplo 2: concertir a mayúsculas todos los elementos de un array
const alumnos=["ana","luis","pedro", "javier"];

console.log("Nombres de estudiantes en mayúscula");
alumnos.map (estudiante => console.log(estudiante.toUpperCase()) );

//entonces se comprende que map recorreo una colección para su procesamiento
//pero al mismo tiempo devuelve la información en un array
const otroArray=alumnos.map(estudiante => estudiante.toUpperCase());
console.log("Otra manera de mostrar los nombres de los estudiantes en mayúsculas");
console.log(...otroArray);




//**************************************************
//Ahora vamos avanzamos con unos ejemplos de nivel intermedio
//**************************************************

//######## Ejemplo 3: Mostrando todos los valores de un diccionario
const productos =[
  {id:101,producto:"laptop", precio:1300},
  {id:102,producto:"mouse", precio:250},
  {id:103,producto:"teclado", precio:450},
  {id:104,producto:"SSD de 1 tb", precio:1500},
  {id:105,producto:"pasta térmica", precio:240}
];

console.log("mostrando todos los productos y sus precios");
productos.map(fila => console.log(`${fila.id}.- ${fila.producto} $ ${fila.precio}`));


//######## Ejemplo 4: agregar una nueva propiedad con un valor calculado
const servicios=[
  {nombre:"Hosting", costo:2500},
  {nombre:"Dominio", costo:300},
  {nombre:"SMTP", costo:450},
  {nombre:"VPS", costo:3000},
  {nombre:"Cloud", costo:6500},
];


/*
En JavaScript, los paréntesis actúan como un operador de agrupación 
(igual que en las matemáticas para decirle al motor 
"resuelve primero esto"). Al colocar los paréntesis antes 
de las llaves, le estás diciendo explícitamente al motor de 
JavaScript:

"Oye, lo que está aquí adentro no es el cuerpo de la función, 
es una única expresión de valor (un objeto literal). 
Por lo tanto, aplícale el retorno implícito y devuélvelo 
de inmediato".

Haber les comparo un resumen:
Usa () => { ... } si vas a escribir múltiples líneas de 
lógica y usar la palabra return.

Usa () => ({ ... }) únicamente cuando tu único objetivo 
sea crear y devolver un objeto en una sola línea.
*/

const serviciosConIva=servicios.map(servicio => ({
...servicio, total: servicio.costo*1.16 // se añade el valor del iva
})
);

console.log(serviciosConIva);

/*
La forma mas larga del ejemplo anterior, sería de la siguiente manera:
var serviciosConIVA = servicios.map(function(servicio) {
    // 1. Secrea un nuevo objeto copiando las propiedades 
    // del objeto original

    //Object.assign sirve para clonar objetos o para fusionar 
    //  varios objetos en uno solo.
    var nuevoObjeto = Object.assign({}, servicio); 
    
    // 2. Se agrega una nueva propiedad denominada total.
    nuevoObjeto.total = servicio.costo * 1.16;
    
    // 3. Finalmente todo esto será retornado.
    return nuevoObjeto; 
});
*/

//######## Ejempplo 5 Modificar un elemento específico basado en una condición
const tareas =[
  {id:1, titulo:"Estudiar ES6", completado:false},
  {id:2, titulo:"Estudiar Hoisting", completado:false},
  {id:3, titulo:"Estudiar Sicronía", completado:false},
  {id:4, titulo:"Estudiar API", completado:false},
  {id:5, titulo:"Estudiar promesas", completado:false},
  {id:6, titulo:"Estudiar Arroy Function", completado:false},
];

const tareaCompletada=6; //Se ha terminado la terea 6
const MarcarTareasActualizadas = (listaDeTareas, idTareaCompletada)=>{
  return listaDeTareas.map(tarea =>{
    if (tarea.id === idTareaCompletada)
      return {...tarea,completado:true}
    else
      return tarea;
  });
};

const miTareaCompletada=6;
const TareasActualizadas = MarcarTareasActualizadas(tareas,miTareaCompletada);
console.log(TareasActualizadas);

//**************************************************
//Concluiremos con una ejemplos nivel avanzado
//**************************************************

//######## Ejempplo 6 Usar el índice (index) para generar estructuras de datos dinámicas

const canciones =[
  "Hotel California", 
  "Frozen", 
  "Bohemian Rhapsody"
];

const listaFormateada= canciones.map((cancion,indice) =>{
  return `${indice + 1}. ${cancion} - Track`;
});

console.log(listaFormateada);

//######## Ejemplo 7 Renderizar elementos HTML
//Similar a lo que realizará React

const enlaces = [
    { texto: "Inicio", url: "/home" },
    { texto: "Perfil", url: "/profile" },
    { texto: "Salir", url: "/logout" }
];

// Transformamos los objetos en strings con formato HTML de Template Literals
const fragmentosHTML = enlaces.map(enlace => `<li><a href="${enlace.url}">${enlace.texto}</a></li>`);

console.log(fragmentosHTML);
/* Resultado:
[
  '<li><a href="/home">Inicio</a></li>',
  '<li><a href="/profile">Perfil</a></li>',
  '<li><a href="/logout">Salir</a></li>'
]
*/

//######## Ejemplo 8 Desestructuración directa en los parámetros del Map

const carrito = [
    { producto: "Televisor", cantidad: 1, precio: 400 },
    { producto: "Audífonos", cantidad: 2, precio: 50 },
    { producto: "Cargador", cantidad: 3, precio: 15 }
];

// En lugar de recibir 'item' y hacer 'item.precio', desestructuramos en el acto
const subtotales = carrito.map(({ producto, cantidad, precio }) => ({
    articulo: producto,
    subtotal: cantidad * precio
}));

console.log(subtotales);
/* Salida:
[
  { articulo: 'Televisor', subtotal: 400 },
  { articulo: 'Audífonos', subtotal: 100 },
  { articulo: 'Cargador', subtotal: 45 }
]
*/