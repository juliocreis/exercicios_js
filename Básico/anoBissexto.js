// Crie uma função que determine se um ano é bissexto

function anoBissexto(ano) {
    // Utilizando um operador ternário com uma Template String
    return ano % 4 == 0 ? `O ano ${ano} é bissexto` : `O ${ano} não é bissexto`; 
}

console.log(anoBissexto(2023));
console.log(anoBissexto(2016));
