function somadorArrays(array) {
    let soma = 0; // Variável para armazenar a soma

    for(let i = 0; i < array.length; i++){ // Loop para realizar a soma de cada um dos elementos do array
        soma += array[i];
    }

    return soma;
}

let numeros = [1, 2, 3, 4, 5];
let somatorio = somadorArrays(numeros);
console.log(`A soma dos números é ${somatorio}`);