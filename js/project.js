// Variables
const task_input = document.querySelector('.task_input');
const add = document.querySelector('.add_task');


add.addEventListener('click', function (){
    if(task_input.value.length === 0){
        alert("Please write your task!")
    }else{
        const div = document.createElement('div');
        const taskName = document.createElement('p');
        taskName.innerHTML = task_input.value

        div.append(taskName)

        const task_list = document.querySelector('.task_list');
        div.classList.add('item')
        task_list.append(div)
    }
})
