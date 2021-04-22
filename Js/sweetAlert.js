'use strict';

function ingresarNombre(){
    swal.fire({
        title: 'Ingresar Nombre',
        text: 'Debes ingresar un nombre para continuar',
        icon: 'info'
    })
}

function ganaste(nombre){
    swal.fire({
        title: 'Ganaste',
        text: 'Felicidades '+nombre+' Ganaste',
        icon: 'success',
        confirmButtonText: 'Volver a jugar'
    })
}

function perdiste(nombre,random){
    swal.fire({
        title: 'Perdiste',
        text: nombre+' Perdiste el numero magico era '+random,
        icon: 'error',
        confirmButtonText: 'Volver a intentarlo'
    })
}
function ingresarNumero(){
    swal.fire({
        title: 'Error',
        text: 'Debes ingresar un numero entre 1 y 1000',
        icon: 'error',
        confirmButtonText: 'ok'
    })
}