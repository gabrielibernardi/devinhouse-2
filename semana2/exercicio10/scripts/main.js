//Exercício 10:

/* Em uma página HTML, insira um campo de texto para que o usuário insira um número.

Programe uma função em JavaScript para verificar se o número inserido pelo usuário é par ou ímpar, 
e informe o usuário através de um texto na página HTML.*/


function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}


btnVerificar.addEventListener('click', function () {
    let numero = Number(document.getElementById("inputNumero").value)
    let resultado = parOuImpar(numero)
    document.getElementById("resultado").innerText = resultado
})