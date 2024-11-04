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