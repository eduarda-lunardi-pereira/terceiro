// Exercícios sobre For
let i=0
for (i=1; i<=10; i++){
  console.log (i);
}

// Exercícios sobre While
let saldo=100
while (saldo>0){
  console.log (saldo);
 // saldo=saldo-10;
  saldo-=10;
}

let contador=0;
while (contador<20){
  if (contador%2!==0) {
    console.log(contador);
  }
  contador++;
}

// Exercícios sobre Do/While
let senha = 1234
let tentativa=""
do{
  console.log ("digite sua senha");
  tentativa = "errado";
  if (tentativa == "errado") {
      tentativa = "1235"; 
  }
}
 
while (tentativa !==1234){
  console.log("Acesso permitido!");
}