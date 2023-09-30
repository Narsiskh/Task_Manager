// Variables
const task_input = document.querySelector('.task_input');
const add = document.querySelector('.add_task');
const task_list = document.querySelector('.task_list');
const myArray = [];


// Removing task_list child one by one
const taskFunction = () => {
    while (task_list.firstChild){
        task_list.removeChild(task_list.firstChild)
    }
    //
    for (let i = 0; i <  myArray.length; i++) {
        const div = document.createElement('div');
        const taskName = document.createElement('p');
        taskName.innerHTML = myArray[i]

        div.append(taskName)

        div.classList.add('item')
        task_list.append(div)
    }
}

// What will happen when you click +
add.addEventListener('click', function (){
    if(task_input.value.length === 0){
        alert("Please write your task!")
    }else{
        myArray.push(task_input.value)

        task_input.value = ""

        taskFunction()
    }
})

