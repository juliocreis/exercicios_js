// Crie uma função que receba uma string e retorne essa string invertida.

function stringInvertida(string) {
    let separandoAsLetrasdaString = string.split(""); // Transforma a string em um array e armazena na variável separandoAsLetrasdaString
    let palavraInvertida = separandoAsLetrasdaString.reverse(); // Faz a inversão dos elementos do array e armazena na variável palavraInvertida
    return palavraInvertida.join(""); // Une o array em uma única string e retorna esta string
}

let palavra = 'JavaScript'
console.log(stringInvertida(palavra));