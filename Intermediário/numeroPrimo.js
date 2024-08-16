function verificarSeONumeroEPrimo(num) {
    if (num < 2)
        return false; // Nenhum número menor que 2 é primo

    for(let i = 2; i < num - 1; i++){
        if(num % i == 0){
            return false; // Se for divisível por "i" não é primo
        }
    }

    return true; // Se não for divisível por "i" é primo
}

let numero = 3;
if(verificarSeONumeroEPrimo(numero)){
    console.log(`O número ${numero} é primo`);
} 
else {
    console.log(`O número ${numero} não é primo`);
}