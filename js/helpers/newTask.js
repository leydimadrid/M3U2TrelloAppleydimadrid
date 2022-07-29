const form = document.querySelector('#formNewTask');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formData = ev.target;

    const data = {
        title: formData.titleTask.value,
        person: formData.responsibleTask.value,
        details: formData.detailsTask.value,
        deadline: formData.deadLineTask.value,
        created: moment().format(),
        state: 'to-do'
        
    };

    axios.post(`${API_URL}/tasks`, data)
        .then((res) => {
            createTask(res.data);
            formData.reset();
        })
        .catch((err) => console.error(err));
});