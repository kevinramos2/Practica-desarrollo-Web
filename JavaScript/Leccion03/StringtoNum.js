let texto = "17";
let edad = Number(texto);

if(edad >= 18){
  console.log("Puede votar")
}
else{
  console.log("No puede votar")
}

let resultado = (edad>=18)?"Puede votar":"No puede votar";
console.log(resultado)