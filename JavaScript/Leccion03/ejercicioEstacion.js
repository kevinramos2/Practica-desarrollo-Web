let mes = 8;
let estacion;

if(mes == 1 || mes == 2 || mes == 12){
  estacion = "Invierno";
}
else if(mes == 3 || mes == 4 || mes == 5){
  estacion = "Primavera"
}
else if(mes == 6|| mes == 7|| mes == 8){
  estacion = "Verano"
}
else if(mes == 9 || mes == 10 || mes == 11){
  estacion = "Otoño"
}
else{
  console.log("Número de mes incorrecto")
}
console.log(estacion)

//Mismo ejercicio pero usando Switch

let numero = 9;
let estacion2;

switch(numero){
  case  1: case 2: case 12:
    estacion2 = "Invierno"
    break;
  case 3: case 4: case 5:
    estacion2 = "Primavera"
    break;
  case 6: case 7: case 8:
    estacion2 = "Verano"
    break
  case 9: case 10: case 11:
    estacion2 = "Otoño"
    break
  default:
    console.log("caso no encontrado")
}
console.log(estacion2)