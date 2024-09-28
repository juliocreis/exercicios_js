// Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.

function verificarEstudantes(arrayEstudantes, estudanteProcurado) {
    // Nesta linha de código, o método some() vai percorrer todo o array de estudantes retornando true se a condição for satisfeita.

    return arrayEstudantes.some(estudante => estudante.nome === estudanteProcurado.nome && estudante.curso === estudanteProcurado.curso && estudante.idade === estudanteProcurado.idade);

    /* Isso é equivalente a:
    return arrayEstudantes.some(function(estudante) {
        return estudante.nome === estudanteProcurado.nome &&
               estudante.idade === estudanteProcurado.idade &&
               estudante.curso === estudanteProcurado.curso;
    }); */
}

let estudantes = [
    {nome: 'Júlio', idade: 20, curso: 'Ciência da Computação'},
    {nome: 'Júlia', idade: 21, curso: 'Ciências Biológicas'},
    {nome: 'João Antônio', idade: 20, curso: 'Medicina Veterinária'},
];

let estudanteProcurado = {nome: 'Júlio', idade: 20, curso: 'Ciência da Computação'};

console.log(verificarEstudantes(estudantes, estudanteProcurado));