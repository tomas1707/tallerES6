//Arrow functions o funcitones flecha

/* 
Las funciones flecha son una alternativa compacta a una función convencional.
no son adecuadas par ser utilizadas como métodos.
y no pueden ser usadas como constructores.
*/

//SINTAXIS: (param1, param2, ..., param) => {sentencias}
//          (param1, param2, ..., param) => {return}
//          (param1, param2, ..., param) => expresion
//          () => {return expresion}
//Los paréntesis son opcionales con un solo parámetro
//          (parametro) => {sentencias}
//          parametro => {sentencias}

//Los paréntesis son obligatorios si la función no tiene paréntesis
//          () => {sentencias}

var miFuncion = function () {
  return new Date();
}

console.log (miFuncion());

var miFuncion2 = () => {
  return new Date();
}

console.log (miFuncion2());

var miFuncion3 = () =>  new Date(); 

console.log (miFuncion3());

var arrayConcatenados = function (array1,array2){
  return array1.concat(array2);
}

console.log (arrayConcatenados([1,2,3,4,5,6],[7,8,9,10,11,12]));

var arrayConcatenados2 = (array1, array2) => array1.concat(array2);

console.log (arrayConcatenados([1,2,3,4,5,6],[7,8,9,10,11,12]));