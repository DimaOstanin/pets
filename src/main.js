console.log("hello world");
const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#tasksList');
const empyList = document.querySelector('#emptyList');
console.log(taskInput);

form.addEventListener('submit',addTask);

taskList.addEventListener('click', deleteTask);

taskList.addEventListener('click', doneTask);

if(localStorage.getItem('tasksHTML')){
    taskList.innerHTML = localStorage.getItem('tasksHTML');
}

function addTask(event) {
    event.preventDefault();
    console.log('submit!!!');
    const taskText = taskInput.value;

    console.log(taskText);
    const taskHTML = 
                `<li class="list-group-item d-flex justify-content-between task-item">
                <span class="task-title">${taskText}</span>
                <div class="task-item__buttons">
                    <button type="button" data-action="done" class="btn-action">
                        <img src="styles/img/tick.svg" alt="Done" width="18" height="18">
                    </button>
                    <button type="button" data-action="delete" class="btn-action">
                        <img src="styles/img/cross.svg" alt="Done" width="18" height="18">
                    </button>
                </div>
            </li>`
            taskList.insertAdjacentHTML('beforeend', taskHTML);
    taskInput.value = "";
    taskInput.focus()
    if(taskList.children.length > 1){
        empyList.classList.add('none')
    };
    saveHTMLtoLS();
}

function deleteTask(event){

if(event.target.dataset.action !== 'delete') return;
    console.log( "deleteeee")
   const parenNode = event.target.closest('.list-group-item');
   parenNode.remove();

   if(taskList.children.length === 1){
    empyList.classList.remove('none')
};
saveHTMLtoLS();
}

function doneTask(event) {
    if(event.target.dataset.action === 'done') {
        console.log( "doneeee")
        const parenNode = event.target.closest('.list-group-item');
        const taskTitle = parenNode.querySelector('.task-title');
        taskTitle.classList.toggle('task-title--done');
     
        if(taskList.children.length === 1){
         empyList.classList.remove('none') 
    }
}
saveHTMLtoLS();
}

function saveHTMLtoLS(){
    localStorage.setItem('tasksHTML', taskList.innerHTML);
}