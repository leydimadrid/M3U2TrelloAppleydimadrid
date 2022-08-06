
    const unixAfecha = (tiempo) =>{
        return moment.unix(tiempo).format('DD/MM/YYYY') ;
      }

    const fechaAunix = (num,dias)=>{
        const fechaUnix = moment().add(num,dias).unix();
        return fechaUnix
        } 