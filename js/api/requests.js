const API_URL = "https://my-json-server.typicode.com/leydimadrid/M3U2TrelloAppleydimadrid";


const getDatosTareaBd = async () => {
    try {
      let res = await axios.get(`${API_URL}/tareas`),

        json = await res.data;
       
          json.forEach(el => {
            
            let divtareas = document.getElementById(`tareas${el.estado}`)
            divtareas.innerHTML += crearTarea(el);
          });
        } catch (err) {
          let alerta = err.statusText || "Ocurrió un error";
          mensaje(alerta)
        }
  }

 getDatosTareaBd();  //llamar funcion get datos tareas al iniciar programa  

