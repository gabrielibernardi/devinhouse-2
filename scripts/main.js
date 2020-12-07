//Exercício 13:

/*Sua página deve conter um texto e uma imagem, ambos representando a estação.
Ao carregar a página, baseado na data atual, 
seu código deve verificar qual a estação atual do ano no hemisfério sul,
 e deve alterar o texto e a imagem, para que passem a representar a estação correta.
*/

var hoje = new Date().getMonth() + 1 //definindo a data de hoje
//var novaData = new Date("June 21").getMonth() + 1 //var para testa uma outra data

function getestacao(hoje) { //func vai receber a variavel hoje
    var fromPrimavera = new Date("September 22").getMonth() + 1
    var toPrimavera = new Date("December 21").getMonth() + 1
    var fromVerao = new Date("December 22").getMonth() + 1
    var toVerao = new Date("March 20").getMonth() + 1
    var fromOutono = new Date("March 21").getMonth() + 1
    var toOutono = new Date("June 21").getMonth() + 1
    var fromInverno = new Date("March 210").getMonth() + 1
    var toInverno = new Date("June 21").getMonth() + 1

    if (hoje >= fromPrimavera && hoje <= toPrimavera) {
        document.getElementById("estacao").innerText = "Primavera"
        var imagem = document.createElement("img")
        imagem.src = "img/primavera.jpg"
        texto.appendChild(imagem)

    } else if (hoje >= fromVerao && hoje <= toVerao) {
        document.getElementById("estacao").innerText = "Verão"
        var imagem = document.createElement("img")
        imagem.src = "img/verao.png"
        texto.appendChild(imagem)

    } else if (hoje >= fromOutono && hoje <= toOutono) {
        document.getElementById("estacao").innerText = "Outono"
        var imagem = document.createElement("img")
        imagem.src = "img/outono.jpg"
        texto.appendChild(imagem)
    } else if (hoje >= fromInverno && hoje <= toInverno) {
        document.getElementById("estacao").innerText = "Inverno"
        var imagem = document.createElement("img")
        imagem.src = "img/inverno.jpg"
        texto.appendChild(imagem)
    }
}

getestacao(hoje)
//getestacao(novaData) //função recebendo a outra data para testar
