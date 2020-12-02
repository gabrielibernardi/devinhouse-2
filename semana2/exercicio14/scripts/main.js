var btnAdd = document.getElementById("btnAdd");
var txtItem = document.getElementById("txtItem");

function adicionarNaLista() {
    alert("funcionou");
   

}

function verificaTecla(event){
    if(event.key == "Enter") {
        adicionarNaLista();
    }
}

btnAdd.addEventListener("click", adicionarNaLista)
txtItem.addEventListener("keyup", verificaTecla)