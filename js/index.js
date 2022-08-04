
let nuevaTareaFormulario = document.getElementById("nuevaTareaFormulario");
let contenedorListas = document.getElementById("contenedorlistas");
let tareasPendientes = document.getElementById("tareasPendientes");

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




  contenedorListas.addEventListener("mouseenter", ()=>{
    let items = document.getElementsByClassName("contenedorTareas"); //llamamos todos los elementos con la class col 
    
      for (let i = 0; i < items.length; i++) {    //------con el for iteramos las listas que contienen class 
        new Sortable(items[i], {                  //------creamos new sortable para arrastrar y soltar tareas
          group: 'nested',                        //------indicamos con este atributo que el dragable es en grupo
          animation: 150,                         //------le damos una duracion a la animacion de 150 milesegundos
          chosenClass: 'chosen',                  //------al arrastrar la tarea llamamos la class que le da animacion 3D 
                                
        });
      }
  });


  // creamos new sortable para mover las listas (columnas)
new Sortable.create(contenedorListas, {
  group: 'shared',
  animation: 150,
});






  
  nuevaTareaFormulario[4].addEventListener("click",(e)=>{
    e.preventDefault();
    if(nuevaTareaFormulario[0].value =="" || nuevaTareaFormulario[1].value =="" || nuevaTareaFormulario[2].value =="" || nuevaTareaFormulario[3].value =="" ){
      alert("todos los campos son obligatorios");
    }else{
      let canttareas = document.getElementsByClassName("TarjetaTarea").length;
      let divtareas = document.getElementById(`tareas1`)
      
      let tarea =                                    //----------clreamos tarea agregamos estructura html
      `<div id="divtarea${canttareas + 1}" class="TarjetaTarea" >
          <p><b>Tarea:</b> ${nuevaTareaFormulario[0].value}</p>
          <p><b>Responsable:</b> ${nuevaTareaFormulario[1].value}</p>
          <p><b>Descripción:</b> ${nuevaTareaFormulario[2].value}</p>
          <p><b>Creado:</b> ${fechaF()} </p>
          <p><b>Plazo de entrega:</b> ${fechaEntrega(nuevaTareaFormulario[3].value)} </p>
      </div>  
              `

      
      divtareas.innerHTML += tarea
      nuevaTareaFormulario.reset();
      info.innerHTML = "Tarea creada"
    }
 
  })