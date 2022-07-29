const createTask = (task) => {
    let newTask = document.createElement("article");
    newTask.classList.add("cardTask");
  
    let taskTitle = document.createElement("p");
    taskTitle.classList.add("cardTaskTitle");
    taskTitle.innerHTML = `<span class="cardTaskTitle-tag-Title">Tarea:</span> ${task.title}`;
  
    let taskResponsible = document.createElement("p");
    taskResponsible.classList.add("cardTaskResponsible");
    taskResponsible.innerHTML = `<span class="cardTaskResponsible-tag-creator">Responsable:</span> ${task.person}`;
  
    let taskDetails = document.createElement("p");
    taskDetails.classList.add("cardTaskDetails");
    taskDetails.innerHTML = `<span class="cardTaskDetails-task-details">Descripción:</span> ${task.details} `;
  
    let taskDate = document.createElement("p");
    taskDate.classList.add("cardTaskDate");
    taskDate.innerHTML = `<span class="cardTaskDate-tag-date">Plazo:</span> ${dateFormat(
      task.deadline
    )}`;
  
    let taskCreate = document.createElement("p")
    taskCreate.classList.add("cardTaskCreate")
    taskCreate.innerHTML = `<span class="cardTaskCreate-tag-date">Creación:</span> ${dateFormat(
      task.created
    )}`;
    
    newTask.appendChild(taskTitle);
    newTask.appendChild(taskResponsible);
    newTask.appendChild(taskDetails);
    newTask.appendChild(taskDate);
    newTask.appendChild(taskCreate)
  
    let columnToDo = document.querySelector("#todoTasks");
    let columnInProgress = document.querySelector("#progressTasks");
    let columnDone = document.querySelector("#doneTasks");
  
    if (task.state === "to-do") {
      columnToDo.appendChild(newTask);
    }
    if (task.state === "in-progress") {
      columnInProgress.appendChild(newTask);
    }
    if (task.state === "done") {
      columnDone.appendChild(newTask);
    }
  };