// Ler três valores inteiros representados pelas variáveis A, B e C e apresentar os valores lidos dispostos em ordem crescente.

// let A = 3
// let B = 2;
// let C = 1;

// if(A > B && B > C) {
//     console.log(`Ordem crescente: ${C} ${B} ${A}`);
// } else if(B > A && A > C) {
//     console.log(`Ordem crescente: ${C} ${A} ${B}`);
// } else if(C > A && A > B) {
//     console.log(`Ordem crescente: ${B} ${A} ${C}`);
// } else if(A > C && C > B) {
//     console.log(`Ordem crescente: ${B} ${C} ${A}`);
// } else if(B > C && C > A) {
//     console.log(`Ordem crescente: ${A} ${C} ${B}`);
// } else if(C > B && B > A) {
//     console.log(`Ordem crescente: ${A} ${B} ${C}`);
// } else if (A == B && A == C) {
//     console.log(`Ordem crescente: ${A} ${B} ${C}`);
// } else if (A == B && B > C) {
//     console.log(`Ordem crescente: ${C} ${A} ${B}`);
// } else if(A == C & C > B) {
//     // Vou nem continuar
// }

// Para evitar fazer um código deste tamanho (por mais quee fuja do tema da pasta de Condicionais) irei utilizar um método de arrays chamado sort que ordena os elementos de um array

let A = 7;
let B = 10;
let C = 12;

let numeros = [A, B, C];

numeros.sort((x, y) => x - y);

console.log(`Números em ordem crescente: ${numeros}`);