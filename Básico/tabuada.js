// Crie uma tabuada com as 4 operações aritméticas

function calculadora(numero, operacao) {
    if(operacao == 'adição') {
        soma(numero);
    } 
    else if(operacao == 'subtração'){
        subtracao(numero);
    }
    else if(operacao == 'multiplicação'){
        multiplicacao(numero);
    }
    else if(operacao == 'divisão'){
        divisao(numero);
    }
}

function soma(numero) {
    for(let i = 0; i <= 10; i++) {
        let somatorio = numero + i;
        console.log(`${numero} + ${i} = ${somatorio}`);
    }
}

function subtracao(numero) {
    for(let i = numero; i >= 0; i--) {
        let subtrair = numero - i;
        console.log(`${numero} - ${i} = ${subtrair}`);
    }
}

function multiplicacao(numero) {
    for(let i = 0; i <= 10; i++) {
        let multiplicar = numero * i;
        console.log(`${numero} x ${i} = ${multiplicar}`);
    }
}

function divisao(numero){
    for(let i = 0; i <= 10; i++) {
        let dividir = i * numero;
        console.log(`${dividir} / ${numero} = ${i}`);
    }
}

calculadora(2, 'divisão');