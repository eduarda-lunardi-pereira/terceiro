// --- 1: Maioridade ---
let idade = 19;

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

// --- 2: Nota escolar ---
let nota = 6.8;

if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5 && nota <= 6.9) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

// --- 3: Clima do dia ---
let temperatura = 23;

if (temperatura >= 30) {
    console.log("Está quente!");
} else if (temperatura < 15) {
    console.log("Está frio!");
} else {
    console.log("Clima agradável.");
}

// --- 4: Comparação de números---
let a = 18;
let b = 15;

if (a > b) {
    console.log(`O valor de A (${a}) é maior que o valor de B (${b}).`);
} else if (b > a) {
    console.log(`O valor de B (${b}) é maior que o valor de A (${a}).`);
} else {
    console.log(`Os valores de A (${a}) e B (${b}) são iguais.`);
}
