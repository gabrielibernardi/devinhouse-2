
//Exercício 7:

var anoDeNascimento = prompt("Qual o ano do seu nascimento?");
var anoAtual = prompt("Qual o ano atual?");
console.log(anoDeNascimento);
console.log(anoAtual);
var resultado = anoAtual - anoDeNascimento;
var resultado2 = anoAtual - anoDeNascimento -1;

alert("Sua idade é " + Number(resultado) + " ou " + Number(resultado2));