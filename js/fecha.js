
    const unixAfecha = (tiempo) =>{
        return moment.unix(tiempo).format('DD/MM/YYYY') ;
      }

    const fechaAunix = (num,dias)=>{
        let  fecchaUnix = moment().add(num,dias).unix();
        return fecchaUnix
        } 