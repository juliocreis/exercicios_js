// Escreva uma função que retorne o n-ésimo número da sequência de Fibonacci.

function fibonacci(n) {
    if (n <= 0){
        return 'O elemento de n deve ser maior que 0';
    }
    else if(n === 1) {
        return 0; // O primeiro elemento da sequência é zero
    }
    else if(n === 2) {
        return 1; // O segundo elemento da sequência é um
    }
    else {
        let a = 0, b = 1, temp;
        for (i = 3; i <= n; i++){ // A partir do terceiro elemento da sequência a função entra em um loop para calcular o n-ésimo termo somando os dois números anteriores (a + b)
            temp = a + b;
            a = b;
            b = temp;
        }
        
        return b;
    }
}

console.log(fibonacci(6)); // Invocando a função para calcular o sexto termo da sequência. Saída = 5