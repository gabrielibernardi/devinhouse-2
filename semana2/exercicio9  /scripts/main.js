//Exercício 9:

/* Faça uma página HTML contendo 2 campos de texto (dica: input type number),
 para que o usuário possa inserir, em cada um, o valor que deseja calcular.

Coloque também na sua página 4 botões, um indicando soma, outro subtração, outro multiplicação, e outro divisão.
Adicione um outro campo de texto, apenas leitura (readonly).

Quando o usuário clicar no botão de soma (multiplicação, divisão ou subtração), 
a sua página deve somar (multiplicar, dividir ou subtrair) os 2 valores inseridos 
pelo usuário e exibir o resultado no campo de texto readonly.*/


function somar(primeiroValor, segundoValor) {
    let resultado = primeiroValor + segundoValor
    return resultado
}

function subtrair(primeiroValor, segundoValor) {
    let resultado = primeiroValor - segundoValor
    return resultado
}

function multiplicar(primeiroValor, segundoValor) {
    let resultado = primeiroValor * segundoValor
    return resultado
}

function dividir(primeiroValor, segundoValor) {
    let resultado = primeiroValor / segundoValor
    return resultado
}



btnSomar.addEventListener('click', function () {
    let primeiroValor = Number(document.getElementById("inputValor1").value)
    let segundoValor = Number(document.getElementById("inputValor2").value)
    let resultado = somar(primeiroValor, segundoValor)
    document.getElementById("result").value = resultado
})

btnSubtrair.addEventListener('click', function () {
    let primeiroValor = Number(document.getElementById("inputValor1").value)
    let segundoValor = Number(document.getElementById("inputValor2").value)
    let resultado = subtrair(primeiroValor, segundoValor)
    document.getElementById("result").value = resultado
})

btnMultiplicar.addEventListener('click', function () {
    let primeiroValor = Number(document.getElementById("inputValor1").value)
    let segundoValor = Number(document.getElementById("inputValor2").value)
    let resultado = multiplicar(primeiroValor, segundoValor)
    document.getElementById("result").value = resultado
})

btnDividir.addEventListener('click', function () {
    let primeiroValor = Number(document.getElementById("inputValor1").value)
    let segundoValor = Number(document.getElementById("inputValor2").value)
    let resultado = dividir(primeiroValor, segundoValor)
    document.getElementById("result").value = resultado
})

