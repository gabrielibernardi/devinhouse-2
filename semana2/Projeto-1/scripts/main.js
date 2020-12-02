var btnAdd = document.getElementById("btnAdd");

function addNaLista() {
    var lista = document.getElementById("listaTarefa")
    var novaTarefa = document.getElementById("inserirTarefas").value;
    var optItem = document.createElement("option");
    optItem.textContent = novaTarefa;
    lista.appendChild(optItem)
}

btnAdd.addEventListener("click", addNaLista)