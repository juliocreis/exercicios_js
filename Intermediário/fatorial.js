// Crie uma função que calcule o fatorial de um número dado.
function fatorial(a) {
    if(a < 0) // Condição que verifica se o número é menor que zero
        return 'Fatorial não definido para números negativos';

    if(a === 0) // Se o número for zero a função deve retornar o número 1
        return 1;

    let resultado = 1; // Variável para armazenar o cálculo do fatorial
    for(i = 1; i <= a; i++){ // Loop que faz a multiplicação do número 1 até o número 'a'
        resultado *= i;
    }
    return resultado; // A função deve retornar o resultado do fatorial
}

console.log(fatorial(4)); // Saída: 24