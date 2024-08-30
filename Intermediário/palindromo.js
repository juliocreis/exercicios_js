/* function verificarSeAPalavraEUmPalindromo() {
    let palavra = 'radar';
    let separandoAsLetrasDaPalavra = palavra.split(""); // Array
    let palavraInvertida = separandoAsLetrasDaPalavra.reverse()
    palavraInvertida = palavraInvertida.join("");

    if(palavra == palavraInvertida){
        console.log(`A palavra ${palavra} é um palíndromo`);
    }
    else{
        console.log(`A palavra ${palavra} não é um palíndromo`);
    }
}

verificarSeAPalavraEUmPalindromo(); */

function verificarSeAPalavraEUmPalindromo() {
    let palavra = 'julio';
    let palavraInvertida = '';

    // Percorre a string do final para o início
    for (let i = palavra.length - 1; i >= 0; i--) {
        // Constrói a string invertida adicionando cada caractere do final para o início
        palavraInvertida += palavra[i];
    }

    // Verifica se a palavra original é igual à palavra invertida
    if (palavra === palavraInvertida) {
        console.log(`A palavra ${palavra} é um palíndromo`);
    } else {
        console.log(`A palavra ${palavra} não é um palíndromo`);
    }
}

verificarSeAPalavraEUmPalindromo();
