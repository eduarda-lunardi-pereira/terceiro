// --- Parte 1 ---
let curso = "JavaScript";
let aluno= "Eduarda";

let mensagem1 ="O aluno" + aluno + "está aprendendo" + curso + "JavaScript.";
console.log(mensagem1);

let mensagem2 = "O aluno" ${aluno} "está aprendendo" ${curso} ".";
console.log(mensagem2);

// --- Parte 2 ---
let saldo = 1000;
let deposito= 500;
let saque= 300; 

console.log ("Seu saldo é: R$" + saldo)

saldo = saldo + deposito
console.log ("Saldo após depósito de R$" + deposito + ":R$" + saldo);

saldo = saldo + saque
console.log ("Saldo após saque de R$" + saque + "R$" + saldo);