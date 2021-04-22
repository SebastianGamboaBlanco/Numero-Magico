'use strict';
function reloj(){
    var tiempo= new Date();
    var minutos=tiempo.getMinutes();
    var segundo=tiempo.getSeconds();
    var hora=tiempo.getHours();

    var extencionaHora;
    var horaCompleta;

    if(minutos<10){
        minutos = '0' + minutos;
    }else{
        minutos='' + minutos;
    }
    if(segundo<10){
        segundo = '0' + segundo;
    }else{
        segundo='' + segundo;
    }
    if(hora < 12){
        extencionaHora='AM';
    }else{
        extencionaHora='PM';
    }
    if(hora>12){
        hora -=12;
    }else{
        hora=hora;
    }
    if(hora == 0){
        hora=12;
    }else{
        hora = hora;
    }
    horaCompleta= hora + ':' + minutos + ':' + segundo + ':' + extencionaHora;
    console.log(horaCompleta);
    $('#hora').html(horaCompleta);
}
$(document).ready(function(){
    setInterval(reloj,1000);
});
