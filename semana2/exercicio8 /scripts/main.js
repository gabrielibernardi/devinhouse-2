//Exercício 8:

/* Faça uma página HTML contendo um label que exiba a mensagem 
“Insira sua data de nascimento”, um campo de texto que só permita inserir data (dica: input type date) 
e um botão rotulado “calcular idade”.

Programe uma função a ser executada quando o usuário clicar no botão, 
que faça o cálculo da idade do usuário, 
e então exiba a idade em um texto na página HTML. */

//primeira maneira de fazer

/* document.querySelector('button').onclick = function () {
     var data = document.getElementById('data').value;
     var datasplited = data.split('-');
     var hoje = new Date().getFullYear();
     var idade = hoje - datasplited[0];
     document.getElementById('idade').innerText = idade;
 } */


function calcularIdade(hoje, Data) {
    var idade = hoje - Data;
    return idade;
}

document.querySelector('button').onclick = function () {
    var data = document.getElementById('data').value;
    var datasplited = data.split('-');
    var hoje = new Date().getFullYear();
    var idade = calcularIdade(hoje, datasplited[0]);
    document.getElementById('idade').innerText = idade;
}