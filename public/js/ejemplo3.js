// Función para saludar
function saludar(nombre) {
  console.log("Hola " + nombre);
}

// Función para sumar dos números
function sumar(numero1, numero2) {
  let resultado = numero1 + numero2;
  return resultado;
}

// Función para multiplicar dos números
function multiplicar(numero1, numero2) {
  let resultado = numero1 * numero2;
  return resultado;
}

function sumando(a,b){
    console.log("la suma es " + sumar(a,b));
}

function multiplicando(a,b){
    console.log ("La multiplicación es " + multiplicar(a,b));
}

// Llamada a la función saludar
saludar("María");

// Llamada a la función sumar
let total = sumar(10, 5);

console.log("La suma es: " + total);
