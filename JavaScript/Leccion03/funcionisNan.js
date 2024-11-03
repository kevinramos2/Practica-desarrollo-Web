let texto = "17x";
let edad = Number(texto);
console.log(edad)

let es = (isNaN(edad))?"No es número":"Es número";
console.log(es)

if(isNaN(edad)){
  console.log("No es número")
}
else{
  if(edad >= 18){
    console.log("Puede votar")
  }
  else{
    console.log("No puede votar")
  }
}


let resultado = (edad>=18)?"Puede votar":"No puede votar";
console.log(resultado)