var btnAdd = document.getElementById("btnAdd")
var userTasks = []


function criarElemento(objeto, taskNumber) {
    var list = document.getElementById("listaTarefa") //pegar o que está na lista
    var taskItem = document.createElement("li") //criando um elemento li para injetar no html
    taskItem.setAttribute("class", "tarefa") //aqui eu passo as classes que usei no html
    taskItem.setAttribute("id", "tarefa-" + taskNumber)
    //aqui eu estou concatenando a id da li que eu tinha no html com 
    // a var tasknumber que eu criei acima para contar quando elementos tem na li.
    //lembrabdo que o appendChlid vai lá no final pq esse o li é o elemento pai

    var taskInput = document.createElement("input") //tudo o que eu fiz acima para o li, eu preciso fazer também para os 
    //elementos dentro dele.
    taskInput.setAttribute("type", "checkbox")
    taskInput.setAttribute("id", "checkbox-" + taskNumber)
    taskInput.checked = objeto.marcado
    taskInput.addEventListener("click", function () { //essa função antes do appendChild é para fazer o lineCheck, eu criei ela antes.
        lineCheck("text-" + taskNumber)
    })
    taskItem.appendChild(taskInput);

    var taskText = document.createElement("span")
    taskText.setAttribute("class", "texto")
    taskText.setAttribute("id", "text-" + taskNumber)

    taskText.textContent = objeto.texto
    taskItem.appendChild(taskText)

    var taskButton = document.createElement("button")
    taskButton.setAttribute("class", "deletar")
    taskButton.setAttribute("id", "delete-" + taskNumber)
    taskButton.textContent = "X"
    taskButton.addEventListener("click", function () { //essa função antes do appendChild é para deletar, eu criei ela antes.
        removeTask("tarefa-" + taskNumber)
    })
    taskItem.appendChild(taskButton)

    list.appendChild(taskItem)

    if (objeto.marcado == true) {
        lineCheck("text-" + taskNumber)
    }

}

function addNaLista() {
    var newTasktext = document.getElementById("inserirTarefas").value //pegar o valor da textarea
    document.getElementById("inserirTarefas").value = "" //pegar o valorda text area depois que clicou no adicionar

    var itensNaTela = document.getElementsByClassName("tarefa").length
    var item = {
        "texto": newTasktext,
        "marcado": false
    }
    criarElemento(item, itensNaTela)

    saveLocalStorage(newTasktext, false)
}

function saveLocalStorage(text, checked) {
    var objTask = {
        "texto": text,
        "marcado": checked
    }
    userTasks.push(objTask)
    localStorage.setItem("userTasks", JSON.stringify(userTasks))
}

function carregarTarefas() {
    var tarefas = JSON.parse(localStorage.getItem("userTasks"))
    if (tarefas) {
        userTasks = tarefas
        for (var i = 0; i < userTasks.length; i++) {
            criarElemento(userTasks[i], i)
        }
    }
}

function removeTask(taskId) {
    var confirmarResposta = confirm("Você realmente deseja remover?")
    if (confirmarResposta) {
        var taskNumber = taskId.split("-")[1]
        var tarefas = JSON.parse(localStorage.getItem("userTasks"))
        tarefas.splice(taskNumber, 1)
        console.log(tarefas)
        localStorage.setItem("userTasks", JSON.stringify(tarefas))
        document.getElementById(taskId).remove()
    }
}

function lineCheck(textId) {
    var taskNumber = textId.split("-")[1]
    var tarefas = JSON.parse(localStorage.getItem("userTasks"))
    if (document.getElementById("checkbox-" + taskNumber).checked) {
        tarefas[taskNumber].marcado = true
    } else {
        tarefas[taskNumber].marcado = false
    }
    localStorage.setItem("userTasks", JSON.stringify(tarefas))

    if (document.getElementById(textId).classList.contains("line")) {
        document.getElementById(textId).classList.remove("line")
    } else {
        document.getElementById(textId).classList.add("line")
    }
}

btnAdd.addEventListener("click", addNaLista)
carregarTarefas()