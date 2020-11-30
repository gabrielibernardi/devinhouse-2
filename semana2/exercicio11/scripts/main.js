//Exercício 10:

/* Construa uma página HTML contendo um texto que informa o horário atual, 
no formato “23:59”, e que atualize automaticamente o valor, sempre que mudar o horário.*/


function relogio() {
    console.log("atualizando")
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    if (horas < 10) {
        horas = "0" + horas;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
   
   var relogioDigital = horas + ":" + minutos + ":" + segundos;
    document.getElementById("relogio").innerHTML = relogioDigital;
   
}

var atualizaRelogio = window.setInterval(relogio, 1000)