var btnAdd = document.getElementById("btnAdd")
var userTasks = []

function saveLocalStorage(item) {
    userTasks.push(item)
    localStorage.setItem("userTasks", JSON.stringify(userTasks))
}


function addNaLista() {
    var taskNumber = Number(document.getElementsByClassName("tarefa").length) //esse .length vai contar quantos itens tem com a classe tarefa
    var list = document.getElementById("listaTarefa") //pegar o que está na lista
    var newTask = document.getElementById("inserirTarefas").value //pegar o valor da textarea
    document.getElementById("inserirTarefas").value = "" //pegar o valorda text area depois que clicou no adicionar

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
    taskInput.addEventListener("click", function () { //essa função antes do appendChild é para fazer o lineCheck, eu criei ela antes.
        lineCheck("text-" + taskNumber)
    })
    taskItem.appendChild(taskInput);

    var taskText = document.createElement("span")
    taskText.setAttribute("class", "texto")
    taskText.setAttribute("id", "text-" + taskNumber)
    taskText.textContent = newTask
    taskItem.appendChild(taskText)

    var taskButton = document.createElement("button")
    taskButton.setAttribute("class", "deletar")
    taskButton.setAttribute("id", "delete-" + taskNumber)
    taskButton.textContent = "X"
    taskButton.addEventListener("click", function () { //essa função antes do appendChild é para deletar, eu criei ela antes.
        lineCheck("text-" + taskNumber)
        removeTask("tarefa-" + taskNumber)
    })
    taskItem.appendChild(taskButton)
    list.appendChild(taskItem)
    saveLocalStorage(newTask)
    
}

function removeTask(taskId) {
    document.getElementById(taskId).remove()
}

function lineCheck(textId) {
    console.log(textId)
    if (document.getElementById(textId).classList.contains("line")) {
        document.getElementById(textId).classList.remove("line")
    } else {
        document.getElementById(textId).classList.add("line")
    }
}

var allTasks = document.getElementById("checkbox-0")
for(var i = 0; i <= allTasks.length; i++){ 
    console.log(allTasks)}
    
})
    

/*var allTasks = document.querySelectorAll(".tarefa")
allTasks.forEach(
    task => {
        var taskId = task.getAttribute("id")
        var taskNumber = taskId.split("-")[1]
        var checkbox = document.getElementById("checkbox-" + taskNumber)
        var button = document.getElementById("delete-" + taskNumber)
        checkbox.addEventListener("click", function () {
            lineCheck("text-" + taskNumber)
        })
        button.addEventListener("click", function () {
            removeTask("tarefa-" + taskNumber)
        })
    }
)*/

btnAdd.addEventListener("click", addNaLista)
