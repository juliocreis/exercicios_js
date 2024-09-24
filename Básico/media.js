// Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.

function media(a, b) {
    // Para verificar se um número é valido ou não, utilizei a função isNaN
    if(isNaN(a) || isNaN(b)) {
        return 'Um dos números não é válido';
    }

    return (a + b) / 2;
}

console.log(media(5, 9));
console.log(media('Julio', 9));
