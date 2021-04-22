'use strict';
 var listaJugadores=[];

 function agregarLista(nombre,intentos,resultados){
     var jugador ={
         nombre : nombre,
         intentos :intentos,
         resultados :resultados
     }
     console.log(jugador);
     listaJugadores.push(jugador);
     guardarJugadores(listaJugadores);
 }

 function mostrarlista(){
     var localStroge=localStorage.getItem('Jugadores');
     if(localStroge == null){
         listaJugadores=[];
     }else{
         listaJugadores =JSON.parse(localStroge);
     }
     return listaJugadores;
 }

 function guardarJugadores(lista){
     localStorage.setItem('Jugadores', JSON.stringify(lista));
 }