// Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. Pesquise e adapte o código para realizar o embaralhamento.

function metodoConcat() {
    let minhaLista = [1, 2, 3];
    let outraLista = [4, 5, 6];
    let novaLista = minhaLista.concat(outraLista);
    return novaLista;
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos de posição
    }
    return array;
}

let listaConcatenada = metodoConcat();
let listaEmbaralhada = embaralharArray(listaConcatenada);

console.log(listaEmbaralhada);