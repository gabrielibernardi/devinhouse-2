var btnAdd = document.getElementById("btnAdd")

function addNaLista() {
    var taskNumber = Number(document.getElementsByClassName("tarefa").length)
    console.log(taskNumber)
    var list = document.getElementById("listaTarefa")
    var newTask = document.getElementById("inserirTarefas").value
    document.getElementById("inserirTarefas").value = ""
    
    var taskItem = document.createElement("li")
    taskItem.setAttribute("class", "tarefa")
    taskItem.setAttribute("id", "tarefa-" + taskNumber)
    
    var taskInput = document.createElement("input")
    taskInput.setAttribute("type", "checkbox")
    taskInput.setAttribute("id", "checkbox-" + taskNumber)
    taskInput.addEventListener("click", function(){
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
    taskButton.addEventListener("click", function(){
        removeTask("tarefa-" + taskNumber)
    })
    taskItem.appendChild(taskButton)   
    list.appendChild(taskItem)
}

function removeTask(taskId){
    document.getElementById(taskId).remove()
}

function lineCheck(textId){
    console.log(textId)
    if (document.getElementById(textId).classList.contains("line")) {
        document.getElementById(textId).classList.remove("line")
    } else {
        document.getElementById(textId).classList.add("line")
    }
}

var allTasks = document.querySelectorAll(".tarefa")
allTasks.forEach(
   task => {
       var taskId = task.getAttribute("id")
       var taskNumber = taskId.split("-")[1]
       var checkbox = document.getElementById("checkbox-" + taskNumber)
       var button = document.getElementById("delete-" + taskNumber)
       checkbox.addEventListener("click", function(){
            lineCheck("text-" + taskNumber)
       })
       button.addEventListener("click", function(){
            removeTask("tarefa-" + taskNumber)
       })
   } 
)

btnAdd.addEventListener("click", addNaLista)

