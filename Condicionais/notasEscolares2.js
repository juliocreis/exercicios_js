// Ler os valores de quatro notas escolares bimestrais de um aluno representadas pelas variáveis N1, N2, N3 e N4. Calcular a média aritmética (variável MD1) desse aluno e apresentar a mensagem “Aprovado” se a média obtida for maior ou igual a 7; caso contrário, o programa deve solicitar a quinta nota (nota de exame, representada pela variável NE) do aluno e calcular uma nova média aritmética (variável MD2) entre a nota de exame e a primeira média aritmética. Se o valor da nova média for maior ou igual a cinco, apresentar a mensagem “Aprovado em exame”; caso contrário, apresentar a mensagem “Reprovado”. Informar também, após a apresentação das mensagens, o valor da média obtida pelo aluno.

let n1 = 3.5
let n2 = 7.5
let n3 = 8.0
let n4 = 4.0
let MD = (n1 + n2 + n3 + n4) / 4;

if(MD >= 7.0) {
    console.log('Aprovado!');
    console.log('Média: ' + MD);
} else {
    let NE = 4.0;
    let MD2 = (MD + NE) / 2;
    if(MD2 >= 5.0) {
        console.log('Aprovado em exame!');
        console.log('Média: ' + MD2);
    } else {
        console.log('Reprovado!');
        console.log('Média: ' + MD2);
    }
}

