function positivoOuNegativo(num) {
    if(num > 0) {
        console.log(`O número ${num} é positivo`);
    } else if(num < 0) {
        console.log(`O número ${num} é negativo`);
    } else {
        console.log('Este número é zero');
    }
}

positivoOuNegativo(-1);