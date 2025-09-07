// Elaborar um programa que leia um valor inteiro qualquer e apresente esse valor somente se for divisível por 2 ou somente se for divisível 3. Caso contrário, não faça nada. Em nenhuma hipótese esse valor pode ser apresentado caso seja divisível por 2 e/ou 3.

let valorInteiro = 17;

if((valorInteiro % 2) == 0 || (valorInteiro % 3) == 0 ){   
    console.log(valorInteiro + ' é divisível por 2 ou por 3');
} else {
    console.log(valorInteiro + ' não é divisível por 2 ou por 3');
}