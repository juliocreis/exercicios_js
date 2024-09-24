// Desenvolva uma função que receba um array de objetos representando estudantes e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.

function verificarObjeto(arrayObjetos, objeto) {
    return arrayObjetos.includes(objeto);
}

let estudantes = [
    {
        nome: 'Júlio',
        idade: 20,
        curso: 'Ciência da Computação',
        periodo: 4,
    },
    {
        nome: 'Júlia',
        idade: 21,
        curso: 'Ciências Biológicas',
        periodo: 3
    },
    {
        nome: 'João Antônio',
        idade: 20,
        curso: 'Medicina Veterinária',
        periodo: 3
    },
    {
        nome: 'Matheus',
        idade: 27,
        curso: 'Direito',
        periodo: 10
    }
];

console.log(verificarObjeto(estudantes, 'Júlio'));