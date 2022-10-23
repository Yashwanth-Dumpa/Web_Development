let todoItemsEle = document.getElementById("todoItemsContainer");



function getTodoListfromLocal(){
    let stringList = localStorage.getItem("todoList");
    let parsedList = JSON.parse(stringList);

    if(parsedList === null){
        return [];
    }
    else{
        return parsedList;
    }

}

let todoList = getTodoListfromLocal();

let todoCount = todoList.length;

let saveTodoButton = document.getElementById("saveTodoButton");

saveTodoButton.onclick = function(){
    localStorage.setItem("todoList", JSON.stringify(todoList));
}
function onTodoStatus(checkboxId,labelId){
    let checkboxEle = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);

    labelElement.classList.toggle("checked");

}

function onclickDel(todoId){
    let todoElement = document.getElementById(todoId);
    todoItemsEle.removeChild(todoElement);
    
    let deleteEleId = todoList.findIndex(function(eachTodo){
        let deleteId = "todo"+eachTodo.id;
        if(todoId === deleteId){
            return true;
        }
        else{
            return false;
        }
    });
    todoList.splice(deleteEleId,1);

}

function createAndAppendTodo(todo) {
    let checkboxId = "checkbox"+todo.id;
    let labelId = "label"+todo.id;
    let todoId = "todo"+todo.id;

    let todoEle = document.createElement("li");
    todoEle.classList.add("d-flex", "flex-row", "todo-item-container");
    todoEle.id = todoId;
    todoItemsEle.appendChild(todoEle);
    
    let inputEle = document.createElement("input");
    inputEle.type = "checkbox";
    inputEle.classList.add("checkbox-input");
    inputEle.onclick = function(){
        onTodoStatus(checkboxId,labelId);
    }

    inputEle.id =checkboxId;
    todoEle.appendChild(inputEle);
    
    let labelContainerEle = document.createElement("div");
    labelContainerEle.classList.add("d-flex", "flex-row", "label-container");
    todoEle.appendChild(labelContainerEle);
    
    
    let labelEle = document.createElement("label");
    labelEle.textContent = todo.text;
    labelEle.setAttribute("for",checkboxId);
    labelEle.classList.add("checkbox-label");
    labelEle.id = labelId;
    labelContainerEle.appendChild(labelEle);
    
    let delContEle = document.createElement("div");
    delContEle.classList.add("delete-icon-container");
    labelContainerEle.appendChild(delContEle);
    
    let iconEle = document.createElement("i");
    iconEle.classList.add("far","fa-trash-alt","delete-icon");
    iconEle.onclick = function(){
            onclickDel(todoId);
    }

    delContEle.appendChild(iconEle);
}

for (let item of todoList){
    createAndAppendTodo(item);
}

function onAddTodo(){
    let textInputEle = document.getElementById("todoUserInput");
    let contentText = textInputEle.value;

    if (contentText === ""){
        alert("Enter Valid Text");
        return;
    }
    todoCount = todoCount+1;
    let newTodo = {
        text: contentText,
        id: todoCount

    };
    createAndAppendTodo(newTodo);
    todoList.push(newTodo);
    textInputEle.value = "";
}

let addEle = document.getElementById("addButton");
addEle.onclick = function(){
    onAddTodo();
}


console.log(todoItemsEle);