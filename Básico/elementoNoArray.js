// Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.

function elementoNoArray(array, a) {
    return array.includes(a);
}

const minhaLista = [1, 2, 3, 4, 5];
console.log(elementoNoArray(minhaLista, 6));