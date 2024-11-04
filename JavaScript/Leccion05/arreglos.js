//Declarar arreglos como objetos
let autos = new Array(
  "BMW","Mercedes Benz","Volvo"
);
//Declar arreglos nuevo []
const autos2 = ["BMW","Mercedes Benz", "Volvo"];
for(let i = 0; i < autos2.length;i++){
  console.log(autos2[i]);
}

//Imprimir un dato específico
console.log(autos2[1]);

autos2[1] = "MercedesBenz";
console.log(autos2[1]);

//Agregar un elemento usando push
autos2.push("Mazda");
console.log(autos2);

//agregar por indice
autos2[autos2.length] = "Cadillac";
console.log(autos2) ;