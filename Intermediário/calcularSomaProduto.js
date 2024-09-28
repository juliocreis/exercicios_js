// Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.

function calcularSomaProduto(array) {
    let soma = 0;
    let multiplicar = 1; // Inicializa em 1 pois se for inicializada em 0 a multiplicação sempre vai ter como resultado o número 0

    for (let numero of array){
        if(numero % 2 == 0){
            soma += numero;
        } else {
            multiplicar *= numero;
        }
    }

    return {
        soma,
        multiplicar
    };
}

const numeros = [1, 2, 3, 4, 5];
const resultado = calcularSomaProduto(numeros);

console.log(resultado.soma);
console.log(resultado.multiplicar);