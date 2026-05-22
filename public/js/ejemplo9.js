/*
El Spread Operator (u operador de propagación) es una característica introducida en ES6 
que se representa con tres puntos consecutivos: ....
     Su función principal es "desparramar" o esparcir los elementos individuales de un objeto iterable 
     (como un Array o un Objeto) en un lugar donde se esperan múltiples elementos (como los argumentos 
     de una función o las posiciones de otro array/objeto).

     Ammmm, ahora imagina que un array es una caja cerrada con juguetes dentro. 
     El Spread Operator lo que hace es abrir la caja y sacar todos los juguetes 
     para ponerlos sueltos sobre una mesa
*/

console.log(Math.max(3,1,7));

let array = [3,1,7];

console.log(Math.max(array));
console.log(Math.max(...array)); //Ahora usando el operados spread
console.log(Math.min(...array)); //Ahora usando el operados spread

let array2=[2,6,8];
console.log(...array, ...array2);
console.log(...array, 200,...array2,150,96);
console.log(Math.max(...array, 200,...array2,150,96));

let arrayresultante=[...array,...array2];

let arrayCopia = [...array2];


//Ahora con cadenas
let saludo= "Hola como estas";
console.log(...saludo);

function suma(a,b,c){
    return a+b+c;
}

const valores = [1,2,5];
console.log(suma(valores)); //Así marcará un error
console.log(suma(...valores)); //Así pasarán los valores de manera independiente


//Ahora con objetos 
let persona1 ={nombre:"Ada", nacimiento:1815};
let persona2 ={nombre: "Charles", nacimiento:1791};

let clonAda= {...persona1};
console.log(clonAda);

let AdayCharles = {...persona1, ...persona2};
console.log(AdayCharles);