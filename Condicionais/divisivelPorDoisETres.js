// Fazer a leitura de quatro valores numéricos inteiros representados pelas variáveis A, B, C e D. Apresentar apenas os valores que sejam divisíveis por 2 e 3.

let A = 3;
let B = 6;
let C = 12;
let D = 16;

let divisiveis = []

if (A % 3 == 0 && A % 2 == 0) {
    divisiveis.push(A);
} 

if (B % 3 == 0 && B % 2 == 0) {
    divisiveis.push(B);
} 

if (C % 3 == 0 && C % 2 == 0) {
    divisiveis.push(C);
} 

if (D % 3 == 0 && D % 2 == 0) {
    divisiveis.push(D);
} 


console.log(`Números divisíveis por 2 e 3: ${divisiveis[0]} e ${divisiveis[1]}`);