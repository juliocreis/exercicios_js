function contarVogais(string) {
    string = string.toLowerCase() // Transformando todas as letras da string para minúsculas
    let vogais = ['a', 'e', 'i', 'o', 'u']; // Declarando a variável para armazenar as vogais
    
    let contador = 0; // Contador das vogais da palavra

    for(let i = 0; i < string.length; i++) {
        if(vogais.includes(string[i])) { // Se a letra da string na posição "i" estiver inclusa na array das vogais faça isso
            contador++;
        }
    }

    return contador;
}

let palavra = 'Julio Cesar';
let numeroDeVogais = contarVogais(palavra);
console.log(`Número de vogais da palavra ${palavra}: ${numeroDeVogais}`);