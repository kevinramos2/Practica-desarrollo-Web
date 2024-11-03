let hora = 24;
let mensaje;

if(hora >= 6 && hora <= 11){
  mensaje = "Buenos Dias"
}
else if(hora>= 12 && hora <= 18){
  mensaje = "Buenas Tardes"
}
else if(hora >= 19 && hora <= 24){
  mensaje = "Buenas Noches"
}
else if(hora >= 0 && hora < 6){
  mensaje = "Durmiendo"
}
else{
  console.log("Número de hora incorrecto: 0-24")
}

console.log(mensaje)