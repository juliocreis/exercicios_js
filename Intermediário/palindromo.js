function verificarSeAPalavraEUmPalindromo() {
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

verificarSeAPalavraEUmPalindromo();