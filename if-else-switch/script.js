// --- Parte 1 ---
let curso = "JavaScript";
let aluno= "Eduarda";

let mensagem1 ="O aluno" + aluno + "está aprendendo" + curso + "JavaScript.";
console.log(mensagem1);

let mensagem2 = `O aluno ${aluno} está aprendendo ${curso} `;
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

console.log ("Seu saldo final é: R$" + saldo)

// --- Parte 3 ---
let numero = 10;
console.log(`Passo 1: Número inicial = ${numero}`);

numero = numero * 3;
console.log(`Passo 2: Multiplicando por 3 = ${numero}`); 

numero = numero + 15;
console.log(`Passo 3: Somando 15 = ${numero}`); 

numero = numero / 2;
console.log(`Passo 4: Dividindo por 2 = ${numero}`); 

console.log(`Resultado final da sequência de operações: ${numero}`);

// --- Parte 4 ---
let peso= 70;
let altura= 1.95;
let imc=peso/(altura*altura);
console.log(imc.toFixed(2));
let classificacao

if (imc < 18.5) {
    classificacao = "Magreza";
} else if (imc <= 24.9) {
    classificacao = "Normal";
} else if (imc <= 29.9) {
    classificacao = "Sobrepeso";
} else if (imc <= 39.9) {
    classificacao = "Obesidade";
} else {
    classificacao = "Obesidade grave";
}

console.log(`Peso: ${peso} kg, Altura: ${altura} m`);
console.log(`Classificação: ${classificacao}`);

// --- Parte 5 ---
let numVerificar = 7

if (numVerificar % 2 === 0) {
    console.log(`O número ${numVerificar} é PAR.`);
} else {
    console.log(`O número ${numVerificar} é ÍMPAR.`);
}

// --- Parte 6 ---
let nota1 = 6.5;
let nota2 = 7.0;
let nota3 = 4.0;

let media = ((nota1 + nota2 + nota3) / 3).toFixed(2);
console.log(media);
let situacao;

if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

console.log(`Notas: ${nota1}, ${nota2}, ${nota3}`);
console.log(`Média: ${media}`);
console.log(`Situação: ${situacao}`);

// --- Parte 7 ---
let mes = 1;
let nomeMes;
let estacao = "";

switch (mes) {
    case 1:
        nomeMes = "Janeiro";
        estacao = "Verão";
        break;
    case 2:
        nomeMes = "Fevereiro";
        estacao = "Verão";
        break;
    case 3:
        nomeMes = "Março";
        break;
    case 4:
        nomeMes = "Abril";
        break;
    case 5:
        nomeMes = "Maio";
        break;
    case 6:
        nomeMes = "Junho";
        break;
    case 7:
        nomeMes = "Julho";
        break;
    case 8:
        nomeMes = "Agosto";
        break;
    case 9:
        nomeMes = "Setembro";
        break;
    case 10:
        nomeMes = "Outubro";
        break;
    case 11:
        nomeMes = "Novembro";
        break;
    case 12:
        nomeMes = "Dezembro";
        estacao = "Verão";
        break;
    default:
        nomeMes = "Mês não encontrado";
        break;
}

console.log(`Mês: ${nomeMes} e ${estacao}`);

// --- Parte 8 ---
let opcao = 3; 
let prato;

switch (opcao) {
    case 1:
        prato = "Pizza";
        console.log(`Prato escolhido: ${prato}`);
        break;
    case 2:
        prato = "Hambúrguer";
        console.log(`Prato escolhido: ${prato}`);
        break;
    case 3:
        prato = "Salada";
        console.log(`Prato escolhido: ${prato}`);
        break;
    case 4:
        prato = "Sair";
        console.log("Encerrando o pedido...");
        break;
    default:
        console.log("Opção inválida.");
        break;
}

// --- Parte 9 ---
const senhaCorreta = "abc123";
let tentativa = "abc123";

if (tentativa === senhaCorreta) {
    console.log("Acesso permitido! Bem-vindo(a).");
} else {
    console.log("Acesso negado. Restam 2 tentativas.");
}

// --- Parte 10 ---
let num1 = 15;
let num2 = 0; 
let operacao = "divisao";
let resultado;

switch (operacao) {
    case "soma":
        resultado = num1 + num2;
        console.log(`Resultado da Soma é: ${resultado}`);
        break;
    case "subtracao":
        resultado = num1 - num2;
        console.log(`Resultado da Subtração é: ${resultado}`);
        break;
    case "multiplicacao":
        resultado = num1 * num2;
        console.log(`Resultado da Multiplicação é: ${resultado}`);
        break;
    case "divisao":
        if (num2 === 0) {
            console.log("Erro: divisão por zero não é permitida.");
        } else {
            resultado = num1 / num2;
            console.log(`Resultado da Divisão é: ${resultado}`);
        }
        break;
    default:
        console.log("Erro: Operação inválida.");
        break;
}