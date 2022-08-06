const API_URL = "https://my-json-server.typicode.com/leydimadrid/M3U2TrelloAppleydimadrid";


const baseDeDatos = async () => {
    try {
      const res = await axios.get(`${API_URL}/tareas`),
        json = await res.data;
          json.forEach(el => {
            const datosTarea = document.getElementById(`tareas${el.estado}`)
            datosTarea.innerHTML += agregarNuevaTarea(el);
          });
        } catch (err) {
          const alerta = err.statusText || "Error";
          mensaje(alerta)
        }
  }

  baseDeDatos();  

