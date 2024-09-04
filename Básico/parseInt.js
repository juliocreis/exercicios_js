// Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa string em um número inteiro e retorne o resultado.

function deStringParaInteiro(string) {
    let inteiro = parseInt(string);
    return inteiro;
}

let stringNumero = '2';
console.log(typeof(stringNumero));
console.log(typeof(deStringParaInteiro(stringNumero)));