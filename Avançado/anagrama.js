function saoAnagramas(string1, string2) {
    // Se o comprimento das strings for diferente, elas não podem ser anagramas
    if (string1.length !== string2.length) {
        return false;
    }

    // Função para criar um objeto de contagem de caracteres
    function contarCaracteres(str) {
        let contagem = {};
        for (let i = 0; i < str.length; i++) {
            let caractere = str[i];
            // Incrementa a contagem do caractere ou inicia em 1 se não existir
            contagem[caractere] = contagem[caractere] ? contagem[caractere] + 1 : 1;
        }
        return contagem;
    }

    // Contar caracteres de cada string
    let contagem1 = contarCaracteres(string1);
    let contagem2 = contarCaracteres(string2);

    // Comparar os objetos de contagem
    for (let caractere in contagem1) {
        if (contagem1[caractere] !== contagem2[caractere]) {
            return false;
        }
    }

    return true;
}

console.log(saoAnagramas('amor', 'roma'));
console.log(saoAnagramas('amor', 'ramo')); 
console.log(saoAnagramas('amor', 'amore'));
console.log(saoAnagramas('amor', 'aroma')); 
