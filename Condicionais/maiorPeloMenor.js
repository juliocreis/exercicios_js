// Efetuar a leitura de dois valores numéricos inteiros representados pelas variáveis A e B e apresentar o resultado da diferença do maior valor pelo menor valor.

let A = 5;
let B = 10;
let resultado;


if(A > B) {
    resultado = A - B;
    console.log(A + ' - ' + B + ' = ' + resultado)
} else if (B > A) {
    resultado = B - A;
    console.log(B + ' - ' + A + ' = ' + resultado)
}

