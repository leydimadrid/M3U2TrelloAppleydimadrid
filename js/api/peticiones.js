const API_URL = "https://my-json-server.typicode.com/leydimadrid/M3U2TrelloAppleydimadrid";


const getDatosTareaBd = async () => {
    try {
      const res = await axios.get(`${API_URL}/tareas`),
        json = await res.data;
          json.forEach(el => {
            const divtareas = document.getElementById(`tareas${el.estado}`)
            divtareas.innerHTML += crearTarea(el);
          });
        } catch (err) {
          const alerta = err.statusText || "Error";
          mensaje(alerta)
        }
  }

 getDatosTareaBd();  

