// Ler cinco valores numéricos inteiros (variáveis A, B, C, D e E), identificar e apresentar o maior e o menor valores informados.

let A = 90;
let B = 2;
let C = 3;
let D = 4;
let E = 10;

let maior = A;
let menor = A;

if(B > maior) {
    maior = B;
}

if(B < menor) {
    menor = B;
}

if(C > maior) {
    maior = C;
}

if(C < menor) {
    menor = C;
}

if(D > maior) {
    maior = D;
}

if(D < menor) {
    menor = D;
}

if(E > maior) {
    maior = E;
}

if(E < menor) {
    menor = E;
}

console.log('Maior: ' + maior);
console.log('Menor: ' + menor);


