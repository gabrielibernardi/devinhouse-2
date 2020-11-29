//Exercício 1 e 2:

/*botao.addEventListener('click', function() {
confirm("Cuidado! Você deseja continar?")

})*/

var fotosFifi = document.getElementById('fotosFifi');

function conteudoSensivel() {
    var resposta = confirm('Você realmente deseja seguir?');
    if (resposta) {
        fotosFifi.style.display = 'block'
    }
}