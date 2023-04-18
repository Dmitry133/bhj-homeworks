const taskInput = document.getElementById("task__input");
const taskBtnAdd = document.getElementById("tasks__add");
const taskList = document.getElementById("tasks__list");

taskBtnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    let todoText = taskInput.value.trim();
    
    if (todoText) {
        taskList.insertAdjacentHTML('afterBegin',
            `<div class="task">
                <div class="task__title">${todoText}</div>
                <a href="#" class="task__remove">&times;</a>
            </div>`);
        
    
    let taskRemove = document.querySelector(".task__remove");
    let task = document.querySelector(".task");

    taskRemove.addEventListener("click", (e) => {
        e.preventDefault();
        task.remove();
        
      });
    };
    taskInput.value = '';
});