// Desenvolva uma função que valide se uma string é vazia ou não

function verificarString(string) {
    // Para este exercício utilizei um operador ternário
    return string === '' ? 'String vazia' : 'String não vazia';
}

console.log(verificarString(''));
console.log(verificarString('Texto'));