var btnAdd = document.getElementById("btnAdd")

function addNaLista() {
    var list = document.getElementById("listaTarefa")
    var newTask = document.getElementById("inserirTarefas").value
    document.getElementById("inserirTarefas").value = ""
    
    var taskItem = document.createElement("li")
    taskItem.setAttribute("class", "tarefa")
    
    var taskInput = document.createElement("input")
    taskInput.setAttribute("type", "checkbox")
    taskInput.setAttribute("id", "checkbox-1")
    taskItem.appendChild(taskInput);
    
    var taskText = document.createElement("span")
    taskText.setAttribute("class", "texto")
    taskText.setAttribute("id", "text-1")
    taskText.textContent = newTask
    taskItem.appendChild(taskText)
    
    
    var taskButton = document.createElement("button")
    taskButton.setAttribute("class", "deletar")
    taskButton.setAttribute("id", "delete-1")
    taskButton.textContent = "X"
    taskItem.appendChild(taskButton)
 
    list.appendChild(taskItem)
}

btnAdd.addEventListener("click", addNaLista);