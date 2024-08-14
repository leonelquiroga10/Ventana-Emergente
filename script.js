const ventana = document.querySelector('.ventana');
const abrir = document.querySelector('.abrir');
const btnCerrarVentana = document.querySelector('.cerrar-ventana');
const btnMostratVentana = document.querySelectorAll('.mostrar-ventana');


const abrirVentana = function () {
  console.log('boton clikeado ');
  ventana.classList.remove('hidden');
  abrir.classList.remove('hidden');
}
const cerrarVentana = function () {
  ventana.classList.add('hidden');
  abrir.classList.add('hidden');
}


for (let index = 0; index < btnMostratVentana.length; index++) {
  btnMostratVentana[index].addEventListener('click', abrirVentana)
}

btnCerrarVentana.addEventListener('click', cerrarVentana);
abrir.addEventListener('click', cerrarVentana);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' &&!ventana.classList.contains('hidden')) {
   
      cerrarVentana();
    
  }



})