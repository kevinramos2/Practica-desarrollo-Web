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