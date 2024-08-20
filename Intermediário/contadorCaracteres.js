// Crie uma função que receba uma string e retorne um objeto com a contagem de cada caractere presente na string.

function contarCaracteres (string) {
    let separandoAsLetrasDaString = string.split('');
    let numeroDeCaracteresDaString = separandoAsLetrasDaString.length;
    return numeroDeCaracteresDaString;
}

console.log(contarCaracteres('Julio'));