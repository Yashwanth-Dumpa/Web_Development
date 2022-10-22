let todoItemsEle = document.getElementById("todoItemsContainer");

let todoList = [{
    text: "Learn HTML",
    id: "1"
}, {
    text: "Learn CSS",
    id: "2"
}, {
    text: "Learn Javascript",
    id: "3"}];

function createAndAppendTodo(todo) {
    let todoEle = document.createElement("li");
    todoEle.classList.add("d-flex", "flex-row", "todo-item-container");
    todoItemsEle.appendChild(todoEle);
    
    let inputEle = document.createElement("input");
    inputEle.type = "checkbox";
    inputEle.classList.add("checkbox-input");
    inputEle.id =todo.id;
    todoEle.appendChild(inputEle);
    
    let labelContainerEle = document.createElement("div");
    labelContainerEle.classList.add("d-flex", "flex-row", "label-container");
    todoEle.appendChild(labelContainerEle);
    
    
    let labelEle = document.createElement("label");
    labelEle.textContent = todo.text;
    labelEle.setAttribute("for",todo.id);
    labelEle.classList.add("checkbox-label");
    labelContainerEle.appendChild(labelEle);
    
    let delContEle = document.createElement("div");
    delContEle.classList.add("delete-icon-container");
    labelContainerEle.appendChild(delContEle);
    
    let iconEle = document.createElement("i");
    iconEle.classList.add("far","fa-trash-alt","delete-icon");
    delContEle.appendChild(iconEle);
}

for (let item of todoList){
    createAndAppendTodo(item);
}

console.log(todoItemsEle);