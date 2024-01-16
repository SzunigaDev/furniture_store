/*
500.js - Script para la página de error 500
*/

// Esperar a que el DOM esté listo
$(function() {
  // Retrasar la eliminación de la clase 'loading' en el cuerpo por 1000 milisegundos (1 segundo)
  setTimeout(function(){
    $('body').removeClass('loading');
  }, 1000);
});
