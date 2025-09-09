let i = 1;
let resultado;
while(i <= 10) {
    resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
    let li = document.createElement('li');
    li.innerText = `${numero} x ${i} = ${resultado}`;
    ul.appendChild(li);
    i++;
}

function gerarTabuada() {
    let ul = document.querySelector('#tabuada');
    ul.innerHTML = '';

    let numero = document.querySelector('#numero').value;
    let operacao = document.querySelector('#operacao').value;

    for(let i = 1; i <= 10; i++) {
        let resultado;

        if(operacao === 'soma') {
            resultado = numero + i;
            texto = `${numero} + ${i} = ${resultado}`;
        } else if (operacao === 'subtracão'){
            resultado = numero - i;
            texto = `${numero} - ${i} = ${resultado}`;
        } else if (operacao === 'multiplicacao') {
            resultado = numero * i;
            texto = `${numero} * ${i} = ${resultado}`;
        } else if (operacao === 'divisao') {
            resultado = numero / i;
            texto = `${numero} / ${i} = ${resultado}`;
        }

        let li = document.createElement('li');
        li.innerText = texto;
        ul.appendChild(li);
    }



}