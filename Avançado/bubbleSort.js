// Escreva uma função que receba um array de números e o ordene em ordem crescente (sem usar o método sort() do JavaScript).

function ordenarArray(array) {
    let n = array.length; // Variável para armazenar o tamanho do vetor

    for(let i = 0; i < n; i++) { // Loop para fazer a troca com todos os elementos do array
        for(let j = 0; j < n - 1 - i; j++) {
            if(array[j] > array[j + 1]) { // Verificando se o elemento atual é maior que o próximo elemento, em caso positivo efetuar a troca
                let temp = array[j]; // Fazendo a troca utilizando uma variável temporária
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

let numeros = [64, 34, 25, 12, 50, 60, 100]; // Variável para armazenar um array que contém números
let arrayOrdenado = ordenarArray(numeros); // Invocando a função utilizando o array 'numeros' como parâmetro e armazenando seu resultado em uma variável 
console.log(`Array ordenado: ${numeros}`);

/* Utilizando o método sort()

function ordenarArray(array) {
    array.sort((a, b) => a - b)
    } 
    
let numeros = [64, 34, 25, 12, 50, 60, 100];
let arrayOrdenado = ordenarArray(numeros);
console.log(`Array ordenado: ${numeros}`);

*/