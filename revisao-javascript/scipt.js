// --- Parte 1: Explorando o console.log ---
console.log("Olá, mundo!");
console.log(10 + 5);
console.log("Minha idade é " + 17);

// --- Parte 2: Criando variáveis ---
let nome = "Eduarda";
let idade = 17;
let estuda = true;

console.log(nome);
console.log(idade);
console.log(estuda);

console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");
console.log("Estudo? " + estuda);

// --- Parte 3: Declaração e atribuição ---
let nota;
console.log("Variável 'nota' antes da atribuição:", nota); 

nota = 8.5;
console.log("Variável 'nota' depois da atribuição:", nota);

let cidade;
console.log("Variável 'cidade' antes da atribuição:", cidade); 

cidade = "Gramado";
console.log("Variável 'cidade' depois da atribuição:", cidade);

// --- Parte 4: Operações com variáveis ---
let a = 29;
let b = 17;

console.log("A soma é:", a + b);
console.log("A subtração é:", a - b);
console.log("A multiplicação é:", a * b);
console.log("A divisão é:", a / b);

console.log("A soma de a e b é: " + (a + b));

// --- Parte 5: Concatenação ---
let nomeCompleto = "Joana dos Santos";
let idadeAtual = 58;

// Usando o operador de soma (+)
let mensagem1 = "O nome dela é " + nomeCompleto + " e ela tem " + idadeAtual + " anos.";
console.log(mensagem1);

// Usando template string (com `)
let mensagem2 = `O nome dela é ${nomeCompleto} e ela tem ${idadeAtual} anos.`;
console.log(mensagem2);

// Usando vírgulas no console.log
console.log("O nome dela é", nomeCompleto, "e ela tem", idadeAtual, "anos.");

// --- Parte 6: Atualizando valores ---
let saldo = 100;
console.log("Saldo inicial:", saldo);

saldo = saldo + 50;
console.log("Saldo após a soma:", saldo);

saldo = saldo - 30;
console.log("Saldo após a subtração:", saldo);

// Exibindo o valor final com uma frase
console.log("O valor final do saldo é: " + saldo);

// --- Parte 7: Mini-programa de apresentação ---
let meuNome = "Eduarda";
let minhaIdade = 17;
let minhaCidade = "Vera Cruz";

console.log(`Olá! Meu nome é ${meuNome}, tenho ${minhaIdade} anos e moro em ${minhaCidade}.`);
console.log(`Daqui a 5 anos, terei ${minhaIdade + 5} anos.`);
console.log("Meu nome é " + meuNome + " e eu gosto de dançar!");