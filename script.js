import checkComplete from "./componentes/checkComplete.js";
import deleteIcon from "./componentes/deleteIcon.js";
  
  const btn = document.querySelector('[data-btn]');

  const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-input]');
    const value = input.value
    const list = document.querySelector('[data-list]')
    const task = document.createElement('li')
    task.classList.add('card')
    input.value = ''
    const taskContent = document.createElement('div')
    const titleTask = document.createElement('span')
    titleTask.classList.add('task')
    titleTask.innerHTML = value
    taskContent.appendChild(checkComplete())
    taskContent.appendChild(titleTask)
    console.log(task)
    task.appendChild(taskContent)
    task.appendChild(deleteIcon())
    list.appendChild(task)
  };

  console.log(btn);

  //Arrow functions o funciones anonimas
  btn.addEventListener('click', createTask);

