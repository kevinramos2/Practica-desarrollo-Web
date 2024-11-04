//ciclo while
let cont = 0;
while(cont < 4){
  console.log(cont);
  cont++
}

//Ciclo Do-While
let cont2 = 0;
do{
  console.log(cont2);
  cont2++;
}while(cont2 < 4);

//Ciclo For
for(let cont3 = 0; cont3 < 4; cont3++){
  console.log(cont3)
}

//Uso del break
for(let cont4 = 0; cont4 <= 10; cont4++){
  if(cont4%2 == 0){
    console.log(cont4)
    break;
  }
    
}