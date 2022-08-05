    const crearTarea = (el)=>{                   
        let tarea =                                   
        `<div id="divtarea${el.id}" class="TarjetaTarea" >
            <p><b>Tarea:</b> ${el.titulo}</p>
            <p><b>Responsable:</b> ${el.descripcion}</p>
            <p><b>Descripción:</b> ${el.responsable}</p>
            <p><b>Creación:</b> ${unixAfecha(el.creacion)} </p>
            <p><b>Plazo de entrega:</b> ${unixAfecha(el.plazo)} </p>
        </div>`
        return tarea                                 
    }

     
     
        