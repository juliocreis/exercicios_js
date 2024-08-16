function maiorNumero(a, b, c) {
    if (a >= b && a >= c){
        return console.log(`O número ${a} é o maior`);
    } else if(b >= a && b >= c) {
        return console.log(`O número ${b} é o maior`);
    } else {
        return console.log(`O número ${c} é o maior`);
    }
}

maiorNumero(5, 4, 3);