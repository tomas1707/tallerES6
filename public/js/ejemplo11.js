//Clases
/*
Introducida en ES6, una clase en JavaScript es una plantilla o molde para crear objetos de manera 
estructurada. Permite agrupar en un solo lugar los datos (propiedades) y los comportamientos (métodos) 
que definirán a esos objetos.

Es importante aclarar que las clases en JavaScript no funcionan exactamente igual que 
en lenguajes puramente orientados a objetos como C# o Java. 
En JavaScript, las clases son en realidad una forma más bonita, limpia y legible de escribir,
finalmente sigue siendo la clásica herencia basada en prototipos de ES5.
*/

//Versión ES5
function personalbar(nombre, ap, am, edad, annio){
    this.nombre=nombre;
    this.ap=ap;
    this.am=am;
    this.edad=edad;
    this.annio=annio;
}

//Ahora en ES6
class Telefono{
    constructor (marca, modelo){
        this.marca=marca;
        this.modelo=modelo;
    }

    miModelo() {
        console.log(`${this.marca} ${this.modelo}`);
    }
}

let miTelefono = new Telefono("Google","Pixel");

console.log(miTelefono.marca+" "+miTelefono.modelo);
console.log(`${miTelefono.marca} ${miTelefono.modelo}`);
miTelefono.miModelo();

//Herencia
class TelefonoNuevo {
    constructor (marca){
        this.marca=marca;
    }

    anuncio (){
        return "Ha llegado el nuevo teléfono de " + this.marca;
    }
}

class ModeloTelefono extends TelefonoNuevo{
    constructor(marca, modelo){
        super(marca);
        this.modelo=modelo;
    }
    anuncioCompleto(){
        return this.anuncio() + ": el modelo " + this.modelo;
    }
}

let minuevoTelefono= new ModeloTelefono("Microsoft", "Sourface");


console.log(minuevoTelefono.anuncioCompleto());