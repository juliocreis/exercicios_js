// Escreva uma função que receba dois números e retorne o maior deles.

function maiorNumero(a, b) {
    if(a > b) { // Verifica se 'a' é maior que 'b'
        console.log(`${a} é maior que ${b}`);
    }
    else if(b > a) { // Se não, verifica se 'b' é maior que 'a'
        console.log(`${b} é maior que ${a}`);
    }
    else { // Caso as condições anteriores não sejam satisfeitas, o programa conclui que os números são iguais
        console.log('Os números são iguais');
    }
}

maiorNumero(10, 11);
maiorNumero(12, 11);
maiorNumero(11, 11);