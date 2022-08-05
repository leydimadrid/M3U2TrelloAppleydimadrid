
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