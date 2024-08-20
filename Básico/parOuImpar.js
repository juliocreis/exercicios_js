// Crie uma função que receba um número e retorne "Par" se o número for par, e "Ímpar" se o número for ímpar.

function parOuImpar(a) {
    if(a % 2 == 0){
        return console.log(`O número ${a} é par`);
    }
    else {
        return console.log(`O número ${a} é ímpar`);
    }
}

parOuImpar(3);

// Escreva uma função que receba um array de números e retorne dois arrays: um com os números pares e outro com os números ímpares.

function arrayParOuImpar(array) {
    // Variáveis que armazenam os números pares e ímpares
    let pares = [];
    let impares = [];

    for(let i = 0; i < array.length; i++){ // Loop que percorre todo o array
        if(array[i] % 2 == 0){ // Verifica se o número é par
            pares.push(array[i]); // Realiza o push para a variável que armazena os números pares
        }
        else {
           impares.push(array[i]); // Realiza o push para a variável que armazena os números ímpares
        }
    }

    return {pares, impares}; // Retorna as variáveis
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayParOuImpar(numeros)); 