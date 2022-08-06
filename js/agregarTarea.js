        const nuevaTareaFormulario = document.getElementById("nuevaTareaFormulario");

        nuevaTareaFormulario[4].addEventListener("click",(e)=>{
        e.preventDefault();
        if(nuevaTareaFormulario[0].value =="" || nuevaTareaFormulario[1].value =="" || nuevaTareaFormulario[2].value =="" || nuevaTareaFormulario[3].value =="" ){
            alert("No pueden haber campos vacíos");
        }else{
            postAgregarTarea(nuevaTareaFormulario);
        }
        })
    
    
        const agregarNuevaTarea = (el)=>{                   
            const tarea =                                   
            `<div id="divtarea${el.id}" class="TarjetaTarea">
                <p><b>Tarea:</b> ${el.titulo}</p>
                <p><b>Descripción:</b> ${el.descripcion}</p>
                <p><b>Responsable:</b> ${el.responsable}</p>
                <p><b>Creación:</b> ${unixAfecha(el.creacion)} </p>
                <p><b>Plazo de entrega:</b> ${unixAfecha(el.plazo)} </p>
            </div>`
            return tarea                                 
        }

     
     
        