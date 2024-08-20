// Escreva uma função que receba um array de números e o ordene em ordem crescente (sem usar o método sort() do JavaScript).

/* 
n = 5 (0 a 4)
i = 1
j = 0
for(1; 1 < 5, 1++){
    for(0; 0 < 3; 0++)
}
*/

function ordenarArray(array) {
    let n = array.length; // Variável para armazenar o tamanho do array

    for(let i = 0; i < n; i++) { // Loop para percorrer todo o array e fazer a troca com todos os elementos
        for(let j = 0; j < n - 1 - i; j++) { // "j < n - 1" significa que "j" deve ir até o penúltimo elemento do array, porque o último elemento será comparado com o elemento anterior a ele. "j < n - 1 - i" garante que o laço interno compare apenas os elementos que ainda não foram colocados em suas posições finais. Se i = 0, o laço interno vai até n - 1. Se i = 1, o laço interno vai até n - 2, e assim por diante.
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