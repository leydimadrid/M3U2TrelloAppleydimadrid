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


  const postAgregarTarea = (nuevaTareaFormulario)=>{
    const data = {
        titulo: nuevaTareaFormulario[0].value,
        descripcion: nuevaTareaFormulario[1].value,
        responsable: nuevaTareaFormulario[2].value,
        estado: 1,
        creacion: fechaAunix(0,"days"),
        plazo: fechaAunix(nuevaTareaFormulario[3].value,"days")  
    };

    axios.post(`${API_URL}/tareas`, data)
        .then((res) => {
          const datosTarea = document.getElementById(`tareas1`)
          datosTarea.innerHTML += agregarNuevaTarea(res.data);
          nuevaTareaFormulario.reset();
        })
        .catch((err) => console.error(err));
};