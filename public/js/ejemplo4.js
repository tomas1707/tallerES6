/*
Al igualk que otros tipos de datos, podemos declarar arrays constantes con const.
No podemos redefinirlos utilizando el igual, tal cual loharíamos con una variable,
pero si podemos cambiar sus valores uno a uno
 */

function cambiarArray(){
  "use strinct";

  const miarray=[1,2,3,];
  console.log("Mi arreglo inicla");
  console.log(miarray);

  //miarray=[4,5,6]; //entonces esto marcará error
  miarray[0]=4;
  miarray[1]=5;
  miarray[2]=6;

  console.log("El mismo arreglo alterado");
  console.log(miarray);
  
}

cambiarArray(); //Esta es la forma declarativa