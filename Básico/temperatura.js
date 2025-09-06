// Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar

function converterTemperatura(valor, escala) {
    if (escala.toLowerCase() === 'celsius') {
        return (valor - 32) * (5/9);
    } else if (escala.toLowerCase() === 'fahrenheit') {
        return (valor * 9/5) + 32;
    }
}

console.log(converterTemperatura(20, 'fahrenheit'));