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

    for (let i = 0; i <  myArray.length; i++) {
        const div = document.createElement('div');

        div.classList.add("d-flex", "justify-content-between", "align-items-center", "p-3")

        const taskName = document.createElement('input');

        taskName.disabled = true

        const div1 = document.createElement('div');
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement("button")
        const submitBtn = document.createElement('button')

        submitBtn.hidden = true


        // Delete The Tasks
        deleteBtn.innerHTML = "<i class=\"bi bi-trash3\"></i>"

        deleteBtn.addEventListener("click", () => {
            myArray.splice(i, 1)
            taskFunction()
        })

        // Edit The Task
        editBtn.innerHTML = "<i class=\"bi bi-pencil-square\"></i>"
        editBtn.addEventListener('click', () => {
            taskName.disabled = false
            editBtn.hidden = true
            submitBtn.hidden = false
        })

        // Submit The Task
        submitBtn.innerHTML = "<i class=\"bi bi-check-square\"></i>"
        submitBtn.addEventListener('click', () => {
            myArray[i] = taskName.value
            taskFunction()
        })





        taskName.value = myArray[i]

        div1.append(deleteBtn, editBtn, submitBtn)
        div.append(taskName, div1)

        div.classList.add('item')
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






