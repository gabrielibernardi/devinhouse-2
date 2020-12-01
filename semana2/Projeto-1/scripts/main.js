//Exercício 13:

/*Sua página deve conter um texto e uma imagem, ambos representando a estação.
Ao carregar a página, baseado na data atual, 
seu código deve verificar qual a estação atual do ano no hemisfério sul,
 e deve alterar o texto e a imagem, para que passem a representar a estação correta.
*/


function getestacao(hoje) {
    var fromPrimavera = new Date("September 22, 2020 00:00:00").getTime()
    var toPrimavera = new Date("December 21, 2020 00:00:00").getTime()
    var fromVerao = new Date("December 22, 2020 00:00:00").getTime()
    var toVerao = new Date("March 20, 2021 00:00:00").getTime()
    var fromOutono = new Date("March 21, 2021 00:00:00").getTime()
    var toOutono = new Date("June 21, 2021 00:00:00").getTime()
    var fromInverno = new Date("March 21, 2021 00:00:00").getTime()
    var toInverno = new Date("June 21, 2021 00:00:00").getTime()
    
    if (hoje >= fromPrimavera && hoje <= toPrimavera) {
        return "Primavera"
    }
    else if (hoje >= fromVerao && hoje <= toVerao) {
        return "Verão"
    }
    else if (hoje >= fromOutono && hoje <= toOutono) {
        return "Outono"
    }
    else if (hoje >= fromInverno && hoje <= toInverno) {
        return "Inverno"
    }
}

var ano = new Date().getFullYear()
var hoje = new Date().getTime()
//var hoje = new Date("January 31, 2021 00:00:00").getTime() teste outra data
var estacaoDoAno = getestacao(hoje)
document.getElementById("estacao").innerText = estacaoDoAno



/*var diaToPrimavera = 22
var diaFromPrimavera = 2
var mesToPrimavera = 3
var mesFromPrimavera = 1*/




/*if((hojeDia => diaFromPrimavera && hojedia <= diaToPrimavera) 
&& (hojeMes => mesFromPrimavera && hojeMes <= mesToPrimavera)) {
    return "Primavera"
} */

