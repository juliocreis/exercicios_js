// Escreva uma função que receba um número e retorne a soma de todos os seus dígitos.

function somaDosDigitos(numero) {
    let numString = numero.toString(); // Transformando o número em uma string
    let soma = 0; // Variável para armazenar o resultado da soma

    for(i = 0; i < numString.length; i++) { // Loop que começa em 0 e percorre todo o comprimento da string representado por 'numString.length' para somar cada dígito do número específicado
        soma += parseInt(numString[i]); // Realizando a soma de cada dígito
    }

    return soma; // Retornando o resultado da soma
}

console.log(somaDosDigitos(1234)); // 1 + 2 + 3 + 4 = 10
