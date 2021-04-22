'use strict';

var botonName = document.querySelector('.btn-name');
var botonAdivinar=document.querySelector('.btn-adivinar');
var historial=document.querySelector('.btn-historial');
var atras=document.querySelector('.btn-atras');
var pista = document.getElementById('pista');
var random=0
var intentos=10;
var caja='';
var resultado='';
$('.row-reiniciar').hide();
$('.row-juego').hide();
$('#pista').hide();
$('.row-historial').hide();

//efecto titulo
$(document).ready(function()
{
  animateForever();
});

function animateForever()
{
  var div = $('h1');
  var color1 = '#fff';
  var color2 = '#000';

  div.animate({color: color1}, 2500, function()
  {
    div.animate({color: color2}, 2500, function()
    {
      animateForever();
    });
  });
}

//funciones botones
botonName.addEventListener('click',function (){
    caja =document.querySelector('.form-control').value;
    if($('.form-control').val()==''){
        ingresarNombre();
    }else{
        $('.row-inicio').hide();
        $('.row-juego').show();
        $('.row-historial').hide();
        random=Math.floor(Math.random()*1000);  
    }
    
})
botonAdivinar.addEventListener('click',function(){
    var numero=document.querySelector('.numero').value;
    if(numero>0 && numero<=1000){
        $('#pista').show();
        if(intentos>=1){
            if(numero==random){
                ganaste(caja);
                intentos --;
                intentos = 10 - intentos;
                resultado='Ganaste';
                agregarLista(caja,intentos,resultado);
                intentos=10;
                $('.form-control').val('');
                $('.numero').val('');
                $('#pista').hide();
                $('.row-juego').hide();
                $('.row-inicio').show();
               
                
            }else{
                if(numero>random){
                    intentos--;
                    pista.innerHTML='Pista: El numero debe ser menor a '+numero+ ', te quedan '+intentos+' intentos';
                    $('.numero').val('');
                    
                }else{
                    intentos--;
                    pista.innerHTML='Pista: El numero debe ser mayor a '+numero+', te quedan '+intentos+' intentos';
                    $('.numero').val('');
                    
                }
            }
        }else{
            perdiste(caja,random);
            intentos = 10 - intentos;
            resultado='Perdiste';
            agregarLista(caja,intentos,resultado);
            intentos=10;
            $('.form-control').val('');
            $('.numero').val('');
            $('#pista').hide();
            $('.row-juego').hide();
            $('.row-inicio').show();
        }
    }else{
        ingresarNumero();
    }
})

historial.addEventListener('click',function(){
    $('.row-historial').show();
    var lista = mostrarlista(),
    tbody = document.querySelector('#table tbody');

    tbody.innerHTML='';

    for(var i=0; i<lista.length; i++){
        var fila= tbody.insertRow(i),
            celdaNombre =fila.insertCell(0),
            celdaIntentos=fila.insertCell(1),
            celdaResultado=fila.insertCell(2);


        celdaNombre.innerHTML = lista[i].nombre;
        celdaIntentos.innerHTML = lista[i].intentos;
        celdaResultado.innerHTML = lista[i].resultados;

        tbody.appendChild(fila);
    }
})

atras.addEventListener('click',function(){
    $('.row-inicio').show();
    $('.row-historial').hide();
})
//recargar pestaña
$(window).ready(function(){
    localStorage.removeItem('Jugadores');
  });