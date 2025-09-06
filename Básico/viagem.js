// Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 quilômetros por litro. Supondo também que a capacidade do tanque do carro é de 55 litros e que antes de fazer a viagem ele estava cheio, mostre quantos litros ainda restam e quantos km ele ainda pode percorrer

let tempo = 3;
let velocidade = 80;
let distancia = velocidade * tempo;
let litrosUsados = distancia / 12;
let litrosRestantes = 55 - litrosUsados;
let autonomiaRestante = litrosRestantes * 12;


console.log('Tempo de viagem: ' + tempo + ' horas');
console.log('Velocidade média: ' + velocidade + 'km/h');
console.log('Distancia percorrida: ' + distancia + 'km');
console.log('Litros consumidos: ' + litrosUsados + 'L');
console.log('Litros restantes: ' + litrosRestantes + 'L');
console.log('Autonomia: ' + autonomiaRestante + 'km');
