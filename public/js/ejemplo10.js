//Prototipos

// ============================================================================
//   TALLER JAVASCRIPT: GETTERS Y SETTERS USANDO PROTOTIPOS (ENFOQUE ES5)
// ============================================================================

// 1. Definimos la función constructora (el "molde" clásico)
function Estudiante(nombre, calificacionInicial) {
    this.nombre = nombre;
    
    // Usamos una variable interna ("privada" por convención usando el guion bajo)
    // para almacenar el valor real y evitar ciclos infinitos al llamar al set.
    this._calificacion = calificacionInicial;
}

// 2. Añadimos las propiedades de acceso (Get y Set) al PROTOTIPO del Estudiante
// Esto asegura que todos los objetos creados compartan los mismos métodos en memoria.
Object.defineProperty(Estudiante.prototype, "calificacion", {
    // El GETTER: Se ejecuta automáticamente al intentar LEER la propiedad
    get: function() {
        return this._calificacion + " pts";
    },
    
    // El SETTER: Se ejecuta automáticamente al intentar MODIFICAR la propiedad
    set: function(nuevaCalificacion) {
        // Añadimos lógica de validación (Regla de negocio)
        if (nuevaCalificacion < 0 || nuevaCalificacion > 100) {
            console.error("❌ Error: La calificación debe estar entre 0 y 100.");
        } else {
            this._calificacion = nuevaCalificacion;
            console.log(`✅ Calificación actualizada con éxito para ${this.nombre}.`);
        }
    },
    enumerable: true,
    configurable: true
});

// ============================================================================
//   PRUEBAS DE EJECUCIÓN
// ============================================================================

console.log("--- Creando instancia de Estudiante ---");
const alumno = new Estudiante("Tomás", 85);

// Probando el GETTER (no se usan paréntesis, se accede como una propiedad normal)
console.log(`Calificación actual de ${alumno.nombre}: ${alumno.calificacion}`); 
// Resultado: Calificación actual de Tomás: 85 pts


console.log("\n--- Intentando asignar una calificación VÁLIDA ---");
// El motor detecta la asignación (=) e invoca el SETTER automáticamente
alumno.calificacion = 95; 
console.log(`Nueva calificación: ${alumno.calificacion}`); 
// Resultado: Nueva calificación: 95 pts


console.log("\n--- Intentando asignar una calificación INVÁLIDA ---");
// El SETTER detendrá esta asignación gracias a la validación
alumno.calificacion = 150; 
console.log(`Calificación final (no cambió): ${alumno.calificacion}`); 
// Resultado: Calificación final (no cambió): 95 pts