//llamar antes de declarar la función - Hoisting
console.log(miFuncion(7,16));
//Definir funciones
function miFuncion(a,b){
  return("Suma: "+ (a+b));
}
//Llamado de la función
console.log(miFuncion(5,7));

//Funciones anonimas
let x = function(a,b){
  return (a+b);
}
result = x(1,2);
console.log(result);

//Funciones self-invoking - solo se llama una vez y luego no puede ser utalizable
(function (){
  console.log("Ejecutando la función");
})();

//Funciones flecha
const sumarFuncionTipoFlecha = (a,b) => a + b;
resul2 = sumarFuncionTipoFlecha(3,5);
console.log(resul2);

//Ejemplo
let resultados = sumarTodo(5,4,3,10,9,10);

function sumarTodo(){
  let suma = 0;
  for(let i = 0; i < arguments.length; i++){
    suma += arguments[i];
  }
  return suma
}
console.log(resultados)