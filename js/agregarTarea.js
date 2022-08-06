        const nuevaTareaFormulario = document.getElementById("nuevaTareaFormulario");

        nuevaTareaFormulario[4].addEventListener("click",(e)=>{
        e.preventDefault();
        if(nuevaTareaFormulario[0].value =="" || nuevaTareaFormulario[1].value =="" || nuevaTareaFormulario[2].value =="" || nuevaTareaFormulario[3].value =="" ){
            alert("No pueden haber campos vacíos");
        }else{
            const cantidadTareas = document.getElementsByClassName("TarjetaTarea").length;
            const estadoTareas = document.getElementById(`tareas1`)
            const tarea =                                  
            `<div id="estadoTareas${cantidadTareas + 1}" class="TarjetaTarea">
                <p><b>Tarea:</b> ${nuevaTareaFormulario[0].value}</p>
                <p><b>Responsable:</b> ${nuevaTareaFormulario[1].value}</p>
                <p><b>Descripción:</b> ${nuevaTareaFormulario[2].value}</p>
                <p><b>Creación:</b> ${fechaF()} </p>
                <p><b>Plazo de entrega:</b> ${fechaEntrega(nuevaTareaFormulario[3].value)} </p>
            </div>`

            
            estadoTareas.innerHTML += tarea
            nuevaTareaFormulario.reset();
        }
        })
    
    
        const agregarNuevaTarea = (el)=>{                   
            const tarea =                                   
            `<div id="divtarea${el.id}" class="TarjetaTarea">
                <p><b>Tarea:</b> ${el.titulo}</p>
                <p><b>Responsable:</b> ${el.descripcion}</p>
                <p><b>Descripción:</b> ${el.responsable}</p>
                <p><b>Creación:</b> ${unixAfecha(el.creacion)} </p>
                <p><b>Plazo de entrega:</b> ${unixAfecha(el.plazo)} </p>
            </div>`
            return tarea                                 
        }

     
     
        