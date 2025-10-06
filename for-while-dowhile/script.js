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
const senha_correta = "1234";
let tentativa = "";

do {
  console.log("Digite sua senha:");
  
  if (tentativa !== senha_correta) {
      tentativa = "1235";
      console.log(`Senha digitada: ${tentativa}`);
      if (tentativa !== senha_correta) {
          console.log ("Senha incorreta. Tentando outra vez...");
      }
  } else {
      tentativa = senhas_correta;
  }
  
} while (tentativa !== senha_correta);
console.log ("Acesso permitido");