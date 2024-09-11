// Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. Teste a função com novaLista e imprima o array resultante.

const array = [1, 1, 1, 2, 2, 3, 3];
const removendoDuplicados = [...new Set(array)];

console.log(removendoDuplicados);