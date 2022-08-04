    const crearTarea = (el)=>{                   
        let tarea =                                    //----------clreamos tarea agregamos estructura html
        `<div id="divtarea${el.id}" class="TarjetaTarea" >
            <p><b>Tarea:</b> ${el.titulo}</p>
            <p><b>Responsable:</b> ${el.descripcion}</p>
            <p><b>Descripción:</b> ${el.responsable}</p>
            <p><b>Creado:</b> ${unixAfecha(el.creado)} </p>
            <p><b>Plazo de entrega:</b> ${unixAfecha(el.plazo)} </p>
        </div>  
                `
        return tarea                                  //----------se retorna tarea creada para agregar al DOM 
    }


    const unixAfecha = (tiempo) =>{
        return moment.unix(tiempo).format('DD/MM/YYYY') ;
      }
      
    const fechaF = ()=>{
        let  fechaFormat = moment().format('DD/MM/YYYY');
        return fechaFormat
        }
    
    const fechaEntrega = (fecha)=>{
        let  fechaFormat = moment(fecha).format('DD/MM/YYYY');
        return fechaFormat
    }
     
     
        