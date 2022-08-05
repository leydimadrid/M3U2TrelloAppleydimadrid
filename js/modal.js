const info = document.getElementById("info");
const modalNuevaTarea = document.querySelector('#modalNuevaTarea');
const botonNuevaTarea = document.querySelector('#boton-NuevaTarea');
const botonCancelar = document.querySelector('#boton-Cancelar');

botonNuevaTarea.addEventListener('click', () => {
    modalNuevaTarea.classList.add('active');
  });
  
  botonCancelar.addEventListener('click', () => {
    modalNuevaTarea.classList.remove('active');
  }); 