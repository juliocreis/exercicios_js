// Efetuar a leitura de três valores numéricos (representados pelas variáveis A, B e C) e processar o cálculo da equação completa de segundo grau, utilizando a fórmula de Bhaskara (considerar para a solução do problema todas as possíveis condições para delta: delta < 0 – não há solução real, delta > 0 – há duas soluções reais e diferentes e delta = 0 – há apenas uma solução real). Lembre-se de que é completa a equação de segundo grau que possui todos os coeficientes A, B e C diferentes de zero. O programa deve apresentar respostas para todas as condições estabelecidas para delta.

let A = 1;
let B = 2;
let C = -5;
let R1;
let R2;

let delta = B**2 - 4 * A * C;

if(A && B && C != 0) {
    if (delta < 0) {
        console.log('Não há solução geral!');
    } else if(delta > 0) {
        R1 = (-B - Math.sqrt(delta)) / (2 * A);
        R2 = (-B + Math.sqrt(delta)) / (2 * A);
        console.log('Raiz 1: ' + R1);
        console.log('Raiz 2: ' + R2);
    } else if (delta === 0) {
        R1 = -B / (2 * A);
        console.log('A equação possui apenas uma raiz: ' + R1);
    }
}

