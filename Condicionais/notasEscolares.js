// Realizar a leitura dos valores de quatro notas escolares bimestrais de um aluno representadas pelas variáveis N1, N2, N3 e N4. Calcular a média aritmética (variável MD) desse aluno e apresentar a mensagem “Aprovado” se a média obtida for maior ou igual a 5; caso contrário, apresentar a mensagem “Reprovado”. Informar também, após a apresentação das mensagens, o valor da média obtida pelo aluno.

let n1 = 3.5
let n2 = 7.5
let n3 = 8.0
let n4 = 4.0
let MD = (n1 + n2 + n3 + n4) / 4;

if(MD >= 5) {
    console.log('Aprovado!');
} else {
    console.log('Reprovado!');
}

console.log('Média: ' + MD);




