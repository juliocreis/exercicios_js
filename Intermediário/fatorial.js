function fatorial(a) {
    if(a < 0)
        return 'Fatorial não definido para números negativos';

    if(a === 0)
        return 1;

    let resultado = 1;
    for(i = 1; i <= a; i++){
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(0));