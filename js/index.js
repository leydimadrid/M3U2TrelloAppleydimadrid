        const nuevaTareaFormulario = document.getElementById("nuevaTareaFormulario");
        const contenedorListas = document.getElementById("contenedorlistas");
        const tareasPendientes = document.getElementById("tareasPendientes");

        contenedorListas.addEventListener("mouseenter", ()=>{
          const items = document.getElementsByClassName("contenedorTareas"); //Se llaman todos los elementos con la class contenedorTareas
          
            for (let i = 0; i < items.length; i++) {                       //con el for iteramos las listas que contiene class contenedorTareas
              new Sortable(items[i], {                                     //New sortable para arrastrar y soltar tareas
                group: 'nested',                                           //Con este atributo se indica que Draggable es un grupo
                animation: 150,                                            //Duración de la animacion es de 150 milesegundos
                chosenClass: 'chosen',                                     //Cuando se arrastra la tarea llamamos la class que le da animación 3D
              });
            }
        });

 
        new Sortable.create(contenedorListas, {           // creamos new sortable para mover las listas (columnas)
          group: 'shared',
          animation: 150,
        });

        nuevaTareaFormulario[4].addEventListener("click",(e)=>{
          e.preventDefault();
          if(nuevaTareaFormulario[0].value =="" || nuevaTareaFormulario[1].value =="" || nuevaTareaFormulario[2].value =="" || nuevaTareaFormulario[3].value =="" ){
            alert("No pueden haber campos vacíos");
          }else{
            const canttareas = document.getElementsByClassName("TarjetaTarea").length;
            const divtareas = document.getElementById(`tareas1`)
            const tarea =                                  
            `<div id="divtarea${canttareas + 1}" class="TarjetaTarea" >
                <p><b>Tarea:</b> ${nuevaTareaFormulario[0].value}</p>
                <p><b>Responsable:</b> ${nuevaTareaFormulario[1].value}</p>
                <p><b>Descripción:</b> ${nuevaTareaFormulario[2].value}</p>
                <p><b>Creación:</b> ${fechaF()} </p>
                <p><b>Plazo de entrega:</b> ${fechaEntrega(nuevaTareaFormulario[3].value)} </p>
            </div>`

            
            divtareas.innerHTML += tarea
            nuevaTareaFormulario.reset();

          }
        })