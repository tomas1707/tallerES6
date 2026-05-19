/*
La sintaxis de los parámetros rest nos permiten representar un número 
indefinido de argumentos como un array
*/

//SINTAXIS
/* 
function (a,b,...theArgs){
  //... mas codigo fuente
}
 */

//A pesar de tener definidos dos pasos de parámetros, 
// en  Javascript podemos incluir todos los argumentos que necesitemos 
/*
y la salida es un diccionario
  '0': 'Melón',
  '1': 'Zanahoria',
  '2': 'Sandía',
  '3': 'Pera',
  '4': 'Uva'
*/


//Esto se utilizava en ES5
function miLista(a,b){ 
    console.log("Argumentos");
    console.log("a=" + a);
    console.log("b=" + b);
    console.log("Resto de los elementos de la lista ", arguments);

    console.log("actualmente tenemos",arguments.length," argumentos");
}

miLista("Melón", "Zanahoria","Sandía","Pera","Uva");

//Ahora en ES6