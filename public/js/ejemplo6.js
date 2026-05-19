/*PARAMETROS POR DEFECTO
Los parámetros por defecto de una función permiten que los parámetros formales
sean inicializados con valores por defecto, esto en caso de que no
existan argumentos o bien los argumentos sean undefined (por defecto los son)
 */

//SINTAXIS [nombre] ([param1[= valorPorDefecto], [,..., paramN]]])

//En ES5 se desarrollabad ela siguiente manera
function multiplicacion(a,b){
    if (typeof a=== 'undefined')
        a=1;

    b= typeof b !== 'undefined'? b : 1;

    return a * b;
}

console.log (multiplicacion(15));

function multiplicacion2(a=1,b=1){
    return a * b;
}

console.log (multiplicacion2());