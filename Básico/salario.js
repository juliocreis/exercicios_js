/* Desenvolver um programa que calcule o salário líquido de um
professor. Para elaborar o programa, é necessário possuir alguns
dados, como valor da hora-aula, número de horas trabalhadas no
mês e percentual de desconto do INSS. Em primeiro lugar, deve-se
estabelecer o seu salário bruto para fazer o desconto e ter o valor
do salário líquido. */

let horaAula = 500;
let horasTrabalhadas = 24;
let descontoPrevidencia = 5;
let salarioBruto = horaAula * horasTrabalhadas;
let totalDesconto = (descontoPrevidencia/100) * salarioBruto;
let salarioLiquido = salarioBruto - totalDesconto;


console.log('Horas/aula: ' + horaAula);
console.log('Horas trabalhadas: ' + horasTrabalhadas);
console.log('Desconto INSS: ' + descontoPrevidencia + '%');
console.log('Salário bruto: ' + salarioBruto);
console.log('Salário líquido: ' + salarioLiquido);